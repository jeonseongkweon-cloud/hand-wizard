const $=s=>document.querySelector(s);
const menu=$('#menu');
const shade=$('#menuShade');
const menuBtn=$('#menuBtn');
const menuClose=$('#menuClose');

function setMenu(open){
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

const prayBtn=$('#prayBtn');
const prayThanks=$('#prayThanks');
prayBtn?.addEventListener('click',()=>{
  prayBtn.classList.add('done');
  prayBtn.textContent='🙏 함께 기도했습니다';
  prayBtn.disabled=true;
  prayThanks.hidden=false;
  prayThanks.scrollIntoView({behavior:'smooth',block:'center'});
});

function shareText(){
  return 'ACTS를 위해 함께 기도해 주세요.\n작은 기도 하나가 세계의 선교사에게 닿습니다.';
}

$('#copyBtn')?.addEventListener('click',async()=>{
  try{
    await navigator.clipboard.writeText(location.href);
    $('#shareStatus').textContent='링크를 복사했습니다.';
  }catch(e){
    console.error(e);
    $('#shareStatus').textContent='링크 복사에 실패했습니다. 주소창의 링크를 복사해 주세요.';
  }
});

$('#shareBtn')?.addEventListener('click',async()=>{
  try{
    if(navigator.share){
      await navigator.share({title:document.title,text:shareText(),url:location.href});
    }else{
      await navigator.clipboard.writeText(`${shareText()}\n${location.href}`);
      $('#shareStatus').textContent='소개 문구와 링크를 복사했습니다. 카카오톡에 붙여 넣어 주세요.';
    }
  }catch(e){
    if(e.name!=='AbortError')console.error(e);
  }
});

personal();
