const $=s=>document.querySelector(s);
const $$=s=>[...document.querySelectorAll(s)];
const menu=$('#menu');
const shade=$('#menuShade');
const menuBtn=$('#menuBtn');
const menuClose=$('#menuClose');
const prayBtn=$('#prayBtn');
const prayThanks=$('#prayThanks');
const PRAY_KEY='acts-newsletter-01-prayed';

function setMenu(open){
  if(!menu||!shade||!menuBtn)return;
  menu.hidden=!open;
  shade.hidden=!open;
  menuBtn.setAttribute('aria-expanded',String(open));
  document.body.classList.toggle('menuOpen',open);
}
menuBtn?.addEventListener('click',()=>setMenu(menu.hidden));
menuClose?.addEventListener('click',()=>setMenu(false));
shade?.addEventListener('click',()=>setMenu(false));
menu?.addEventListener('click',e=>{if(e.target.closest('a'))setMenu(false)});
document.addEventListener('keydown',e=>{if(e.key==='Escape')setMenu(false)});

async function personal(){
  const id=new URLSearchParams(location.search).get('m');
  if(!id)return;
  try{
    const d=await window.HandWizardStore?.load(id);
    if(!d?.name)return;
    $('#recipient').textContent='ACTS MISSION ALLIANCE · 개인 뉴스레터';
    $('#personalBox').hidden=false;
    $('#personalTo').textContent=`${d.name} ${d.honor||'님'}께`;
    $('#personalMessage').textContent=d.message||'';
    if(d.photo){$('#personalPhoto').src=d.photo}else{$('#personalPhoto').hidden=true}
    document.title=`${d.name}님께 전하는 ACTS NEWSLETTER 01`;
  }catch(e){console.error(e)}
}

function showPrayerThanks(scroll=false){
  if(!prayBtn||!prayThanks)return;
  prayBtn.classList.add('done');
  prayBtn.textContent='🙏 함께 기도했습니다';
  prayBtn.disabled=true;
  prayThanks.hidden=false;
  if(scroll)prayThanks.scrollIntoView({behavior:'smooth',block:'center'});
}

try{if(localStorage.getItem(PRAY_KEY)==='1')showPrayerThanks(false)}catch(e){}
prayBtn?.addEventListener('click',()=>{
  try{localStorage.setItem(PRAY_KEY,'1')}catch(e){}
  showPrayerThanks(true);
});

function shareText(){
  return 'ACTS를 위해 함께 기도해 주세요.\n작은 기도 하나가 세계의 선교사에게 닿습니다.';
}

function shareUrl(){
  const url=new URL('../',location.href);
  url.searchParams.set('mode','acts01');
  const id=new URLSearchParams(location.search).get('m');
  if(id)url.searchParams.set('m',id);
  return url.href;
}

async function copyText(text){
  if(navigator.clipboard?.writeText){
    await navigator.clipboard.writeText(text);
    return;
  }
  const area=document.createElement('textarea');
  area.value=text;
  area.setAttribute('readonly','');
  area.style.position='fixed';
  area.style.opacity='0';
  document.body.appendChild(area);
  area.select();
  const copied=document.execCommand('copy');
  area.remove();
  if(!copied)throw new Error('COPY_FAILED');
}

$('#copyBtn')?.addEventListener('click',async()=>{
  try{
    await copyText(shareUrl());
    $('#shareStatus').textContent='링크를 복사했습니다.';
  }catch(e){
    console.error(e);
    $('#shareStatus').textContent='링크 복사에 실패했습니다. 주소창의 링크를 복사해 주세요.';
  }
});

$('#shareBtn')?.addEventListener('click',async()=>{
  try{
    if(navigator.share){
      await navigator.share({title:document.title,text:shareText(),url:shareUrl()});
      $('#shareStatus').textContent='공유 창을 열었습니다.';
    }else{
      await copyText(`${shareText()}\n${shareUrl()}`);
      $('#shareStatus').textContent='소개 문구와 링크를 복사했습니다. 카카오톡에 붙여 넣어 주세요.';
    }
  }catch(e){
    if(e.name!=='AbortError')console.error(e);
  }
});

const revealTargets=$$('main > section');
if('IntersectionObserver' in window){
  const revealObserver=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add('inview');
        revealObserver.unobserve(entry.target);
      }
    });
  },{threshold:.12});
  revealTargets.forEach(el=>{el.classList.add('reveal');revealObserver.observe(el)});
}else revealTargets.forEach(el=>el.classList.add('inview'));

const quickLinks=$$('.quick a');
const sectionMap=new Map(quickLinks.map(a=>[a.getAttribute('href')?.slice(1),a]));
if('IntersectionObserver' in window){
  const navObserver=new IntersectionObserver(entries=>{
    const visible=entries.filter(e=>e.isIntersecting).sort((a,b)=>b.intersectionRatio-a.intersectionRatio)[0];
    if(!visible)return;
    quickLinks.forEach(a=>a.classList.remove('active'));
    const direct=sectionMap.get(visible.target.id);
    if(direct)direct.classList.add('active');
    else if(['story3'].includes(visible.target.id))sectionMap.get('story1')?.classList.add('active');
  },{rootMargin:'-120px 0px -55% 0px',threshold:[.05,.2,.5]});
  revealTargets.forEach(el=>navObserver.observe(el));
}

personal();
