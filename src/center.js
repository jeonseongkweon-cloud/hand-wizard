const $=s=>document.querySelector(s);let compressedPhoto='';
const DEFAULT='안녕하세요. 계명태권도 관장 전성권입니다. 평소 수업과 교육에 대해 꼭 말씀드리고 싶었던 이야기를 이 작은 공간에 담았습니다.';
function publicUrl(params={}){const url=new URL('./',location.href);url.search='';url.hash='';Object.entries(params).forEach(([k,v])=>url.searchParams.set(k,v));return url.toString()}
function updatePreview(){const name=$('#studentName').value.trim()||'수련생';const honor=$('#honor').value;$('#previewTo').textContent=`${name} ${honor}께`;$('#previewTitle').textContent=`${name}의 성장 이야기`;$('#previewMessage').textContent=$('#message').value.trim()||DEFAULT}
async function compressImage(file){const bitmap=await createImageBitmap(file);const size=160;const scale=Math.min(size/bitmap.width,size/bitmap.height);const w=Math.round(bitmap.width*scale),h=Math.round(bitmap.height*scale);const canvas=document.createElement('canvas');canvas.width=size;canvas.height=size;const ctx=canvas.getContext('2d');ctx.fillStyle='#fff';ctx.fillRect(0,0,size,size);ctx.drawImage(bitmap,(size-w)/2,(size-h)/2,w,h);bitmap.close();return canvas.toDataURL('image/jpeg',.62)}
$('#photo').addEventListener('change',async e=>{const file=e.target.files[0];if(!file)return;compressedPhoto=await compressImage(file);$('#previewPhoto').src=compressedPhoto;$('#previewPhoto').hidden=false});
['input','change'].forEach(type=>$('#cardForm').addEventListener(type,updatePreview));
$('#cardForm').addEventListener('submit',async e=>{
  e.preventDefault();
  const submit=$('#cardForm button[type="submit"]');
  const data={name:$('#studentName').value.trim(),honor:$('#honor').value,message:$('#message').value.trim(),photo:compressedPhoto};
  if(!window.HandWizardStore?.configured()){
    alert('짧은 개인 링크 저장소가 아직 연결되지 않았습니다.\n\nsrc/config.js에 Supabase Project URL과 anon key를 입력하고 다시 배포해 주세요.');
    return;
  }
  submit.disabled=true;submit.textContent='⏳ 짧은 링크 저장 중…';
  try{
    const id=await window.HandWizardStore.save(data);
    const url=publicUrl({m:id});
    $('#resultUrl').value=url;$('#openButton').href=url;$('#result').hidden=false;$('#copyStatus').textContent='짧은 링크가 완성되었습니다. 이름·메시지·사진 데이터는 주소에 노출되지 않습니다.';$('#result').scrollIntoView({behavior:'smooth'});
  }catch(err){
    console.error(err);
    alert('개인 링크를 저장하지 못했습니다. Supabase 설정과 SQL 실행 여부를 확인해 주세요.');
  }finally{submit.disabled=false;submit.textContent='✨ 개인 링크 만들기'}
});
$('#copyButton').addEventListener('click',async()=>{await navigator.clipboard.writeText($('#resultUrl').value);$('#copyStatus').textContent='짧은 링크를 복사했습니다. 카카오톡에 붙여 넣어 보내세요.'});
$('#copyIntro').addEventListener('click',async()=>{const url=publicUrl({mode:'intro'});await navigator.clipboard.writeText(url);alert('소개용 링크를 복사했습니다.')});
$('#resetButton').addEventListener('click',()=>{if(!confirm('입력한 내용을 모두 지우고 새로 작성할까요?'))return;$('#cardForm').reset();compressedPhoto='';$('#previewPhoto').hidden=true;$('#result').hidden=true;$('#copyStatus').textContent='';updatePreview()});
updatePreview();
