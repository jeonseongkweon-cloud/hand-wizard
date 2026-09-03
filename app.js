const $=(s,c=document)=>c.querySelector(s), $$=(s,c=document)=>[...c.querySelectorAll(s)];
const DEFAULT_MESSAGE='안녕하세요. 계명태권도 관장 전성권입니다. 평소 수업과 교육에 대해 꼭 말씀드리고 싶었던 이야기를 이 작은 공간에 담았습니다.';
function decodeCard(value){try{const normalized=value.replace(/-/g,'+').replace(/_/g,'/');const bytes=Uint8Array.from(atob(normalized),c=>c.charCodeAt(0));return JSON.parse(new TextDecoder().decode(bytes))}catch{return null}}
function renderPersonalCard(data){if(!data||!data.name)return false;const honor=data.honor||'부모님';$('#recipientLine').textContent=`${data.name} ${honor}께`;$('#heroTitle').innerHTML=`관장님이 꼭 전하고 싶었던<br><em>${data.name}의 성장 이야기</em>`;$('#personalMessage').textContent=data.message||DEFAULT_MESSAGE;if(data.photo&&data.photo.startsWith('data:image/')){const wrap=$('#studentPhotoWrap');$('#studentPhoto').src=data.photo;$('#studentPhoto').alt=`${data.name} 수련생`;$('#studentCaption').textContent=`부모님이 응원하는 우리 아이, ${data.name}`;wrap.hidden=false}document.title=`${data.name}의 성장 이야기 | 계명태권도`;return true}
function renderCommonStory01(){document.body.classList.add('intro-mode','common-story-mode');$('#recipientLine').textContent='손안의 마법사 · 계명 이야기 01';$('#heroTitle').innerHTML='계명태권도에는<br><em>계명이와 별이가 있어요 ⭐</em>';$('#personalMessage').textContent='아이들의 작은 노력과 빛나는 순간을 발견하고 응원하는 계명태권도의 이야기를 전합니다.';document.title='계명태권도에는 계명이와 별이가 있어요 ⭐ | 손안의 마법사';const dialogue=$('.dialogue-grid');if(dialogue)dialogue.innerHTML='<p><b>별이</b> 아이의 작은 노력에서 반짝이는 별을 찾아드릴게요!</p><p><b>계명이</b> 오늘도 아이와 함께 한 걸음씩 성장해요!</p>';const hero=$('#home');if(hero&&!$('#commonStoryLetter')){const letter=document.createElement('div');letter.id='commonStoryLetter';letter.className='experience-note common-story-letter';letter.innerHTML='<b>부모님께 전하는 작은 손편지</b><p>안녕하세요. 계명태권도 관장 전성권입니다.</p><p>아이들과 매일 수업하다 보면 부모님께 꼭 보여드리고 싶은 순간들이 참 많습니다. 칭찬받아 활짝 웃는 모습, 친구를 기다려 주는 모습, 어제보다 조금 더 용기 내어 도전하는 모습까지.</p><p>그래서 계명태권도에는 아이들의 성장을 함께 응원하는 친구 <strong>계명이와 별이</strong>가 있습니다. 계명이는 아이들에게 용기를 북돋아 주고, 별이는 작은 노력과 좋은 행동을 발견해 반짝이는 칭찬별을 선물합니다. ⭐</p><p>계명태권도는 태권도 기술만 잘하는 아이보다 <strong>스스로 도전하고, 친구와 함께 성장하며, 자신을 소중하게 생각할 줄 아는 아이</strong>로 자라기를 바랍니다.</p><p>앞으로 손안의 마법사를 통해 우리 아이들이 어떤 교육을 받고 있는지, 계명태권도가 무엇을 고민하고 준비하는지 작은 이야기로 하나씩 전해드리겠습니다.</p><p><strong>아이의 오늘을 칭찬하고, 아이의 내일을 함께 응원하겠습니다.</strong></p><p>계명태권도 관장 <strong>전성권 드림</strong></p>';const actions=hero.querySelector('.hero-actions');actions?.insertAdjacentElement('afterend',letter)}}
async function applyPageMode(){const params=new URLSearchParams(location.search);const mode=params.get('mode');const shortId=params.get('m');const legacyCard=params.get('card');if(mode==='story01'){renderCommonStory01();return}if(mode==='intro'){document.body.classList.add('intro-mode');$('#recipientLine').textContent='계명태권도를 소개합니다';$('#heroTitle').innerHTML='아이의 작은 노력과 빛나는 성장을<br><em>함께 발견합니다</em>';$('#personalMessage').textContent='아이들이 무엇을 배우고 어떻게 칭찬받으며 함께 성장하는지, 계명태권도의 교육 이야기를 소개합니다.';return}if(shortId){try{const data=await window.HandWizardStore?.load(shortId);if(renderPersonalCard(data))return}catch(err){console.error(err)}$('#recipientLine').textContent='개인 안내를 찾을 수 없습니다';$('#personalMessage').textContent='링크가 잘못되었거나 저장소 연결에 문제가 있습니다. 관장님께 새 링크를 요청해 주세요.';return}if(legacyCard)renderPersonalCard(decodeCard(legacyCard))}
applyPageMode();
const toast=(message)=>{const el=$('#toast');el.textContent=message;el.classList.add('show');clearTimeout(window.toastTimer);window.toastTimer=setTimeout(()=>el.classList.remove('show'),2600)};
const dialog=$('#megaMenu');
const openMenu=()=>{dialog.showModal();$('#magicMenu').hidden=true;$('#magicButton').setAttribute('aria-expanded','false')};
$('#menuOpen').addEventListener('click',openMenu);$('#menuOpen2').addEventListener('click',openMenu);$('#menuClose').addEventListener('click',()=>dialog.close());
$$('#megaMenu a').forEach(a=>a.addEventListener('click',()=>dialog.close()));
$('#magicButton').addEventListener('click',()=>{const menu=$('#magicMenu');menu.hidden=!menu.hidden;$('#magicButton').setAttribute('aria-expanded',String(!menu.hidden))});
$$('#magicMenu a').forEach(a=>a.addEventListener('click',()=>{$('#magicMenu').hidden=true}));
function openDaily(){const daily=$('#daily');daily.open=true;requestAnimationFrame(()=>daily.scrollIntoView({behavior:'smooth',block:'start'}))}
$$('a[href="#daily"]').forEach(a=>a.addEventListener('click',e=>{e.preventDefault();openDaily()}));
$('[data-close-daily]').addEventListener('click',()=>{const daily=$('#daily');daily.open=false;$('#praise').scrollIntoView({behavior:'smooth',block:'start'})});
$$('[data-kakao]').forEach(b=>b.addEventListener('click',()=>window.open('https://open.kakao.com/o/gF8p81hi','_blank','noopener')));
const publicShareUrl=()=>`${location.origin}${location.pathname}`;
const SHARE_TEXT='아이들의 작은 노력과 성장을 함께 발견하는 계명태권도의 교육 이야기를 소개합니다.';
async function copyPublicShareLink(){
  const url=publicShareUrl();
  try{
    await navigator.clipboard.writeText(`${SHARE_TEXT}\n${url}`);
  }catch{
    const area=document.createElement('textarea');
    area.value=`${SHARE_TEXT}\n${url}`;
    area.setAttribute('readonly','');
    area.style.position='fixed';area.style.opacity='0';
    document.body.appendChild(area);area.select();document.execCommand('copy');area.remove();
  }
  toast('소개 문구와 링크를 복사했습니다. 카카오톡에 붙여 넣어 보내세요.');
}
$$('[data-a02]').forEach(b=>b.addEventListener('click',async()=>{
  const url=publicShareUrl();
  if(b.textContent.includes('카카오톡')){
    if(navigator.share){
      try{
        await navigator.share({title:'계명태권도를 소개합니다',text:SHARE_TEXT,url});
        return;
      }catch(err){
        if(err?.name==='AbortError')return;
      }
    }
    await copyPublicShareLink();
    return;
  }
  await copyPublicShareLink();
}));
$$('[data-tour]').forEach(b=>b.addEventListener('click',()=>$('#education').scrollIntoView({behavior:'smooth'})));
const commands=[[/칭찬|별/,'#praise'],[/클래스|class/i,'#class-system'],[/공동|함께 성장/,'#growth'],[/스파크|spark/i,'#spark'],[/수업|사진|모습/,'#daily'],[/행사|소식|심사/,'#events'],[/관장.*소개|전성권/,'#director'],[/전체.*메뉴/,'menu'],[/홈|처음/,'#home'],[/소개|친구/,'#introduce'],[/밴드|band/i,'band'],[/카카오/,'kakao'],[/전화/,'phone']];
function runCommand(text){const hit=commands.find(([r])=>r.test(text));if(!hit){toast('잘 듣지 못했어요. 전체메뉴에서 찾아보세요.');return}const action=hit[1];if(action==='#daily'){openDaily();toast(`“${text}” 수업 모습을 펼칩니다.`)}else if(action.startsWith('#')){$(action).scrollIntoView({behavior:'smooth'});toast(`“${text}” 안내로 이동합니다.`)}else if(action==='menu')openMenu();else if(action==='phone'){if(confirm('전성권 관장님께 전화할까요?'))location.href='tel:01044772772'}else if(action==='band')window.open('https://band.us/n/a8a7b9Xahdgb8','_blank','noopener');else window.open('https://open.kakao.com/o/gF8p81hi','_blank','noopener')}
function startVoice(){const SR=window.SpeechRecognition||window.webkitSpeechRecognition;if(!SR){toast('이 브라우저에서는 음성 찾기를 지원하지 않아요. 전체메뉴를 이용해 주세요.');return}const rec=new SR();rec.lang='ko-KR';rec.interimResults=false;const status=$('#voiceStatus');status.textContent='듣고 있어요… 궁금한 것을 말씀해 주세요.';rec.onresult=e=>{const text=e.results[0][0].transcript;status.textContent=`“${text}”`;runCommand(text)};rec.onerror=()=>{status.textContent='음성을 듣지 못했어요. 다시 눌러 말씀해 주세요.'};rec.onend=()=>setTimeout(()=>{if(status.textContent.includes('듣고'))status.textContent='“칭찬별 알려줘” · “SPARK가 뭐야?” · “관장님께 전화”'},1000);rec.start()}
$$('[data-voice]').forEach(b=>b.addEventListener('click',startVoice));
const navLinks=$$('.quick-nav a');const sections=navLinks.map(a=>$(a.getAttribute('href'))).filter(Boolean);const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){navLinks.forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+entry.target.id))}})},{rootMargin:'-35% 0px -55%'});sections.forEach(s=>observer.observe(s));
