const panels=[...document.querySelectorAll('.reveal')];
const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting) entry.target.classList.add('in-view');
  });
},{threshold:.28});
panels.forEach(panel=>observer.observe(panel));

for(const button of document.querySelectorAll('[data-scroll]')){
  button.addEventListener('click',()=>{
    const target=document.querySelector(button.dataset.scroll);
    target?.scrollIntoView({behavior:'smooth',block:'start'});
  });
}

// Sound is opt-in only. This avoids unwanted audio when opened from KakaoTalk.
const soundButton=document.querySelector('.sound-toggle');
let soundEnabled=false;
let audioContext;

function playSparkTone(){
  if(!soundEnabled) return;
  audioContext ||= new (window.AudioContext||window.webkitAudioContext)();
  const osc=audioContext.createOscillator();
  const gain=audioContext.createGain();
  osc.type='sine';
  osc.frequency.setValueAtTime(660,audioContext.currentTime);
  osc.frequency.exponentialRampToValueAtTime(990,audioContext.currentTime+.18);
  gain.gain.setValueAtTime(.0001,audioContext.currentTime);
  gain.gain.exponentialRampToValueAtTime(.07,audioContext.currentTime+.02);
  gain.gain.exponentialRampToValueAtTime(.0001,audioContext.currentTime+.24);
  osc.connect(gain).connect(audioContext.destination);
  osc.start();
  osc.stop(audioContext.currentTime+.26);
}

soundButton?.addEventListener('click',()=>{
  soundEnabled=!soundEnabled;
  soundButton.setAttribute('aria-pressed',String(soundEnabled));
  soundButton.textContent=soundEnabled?'🔊':'🔇';
  soundButton.title=soundEnabled?'효과음 끄기':'효과음 켜기';
  if(soundEnabled) playSparkTone();
});

let lastSparkPanel='';
const soundObserver=new IntersectionObserver(entries=>{
  for(const entry of entries){
    if(entry.isIntersecting&&entry.target.id!==lastSparkPanel){
      lastSparkPanel=entry.target.id;
      playSparkTone();
    }
  }
},{threshold:.72});
panels.forEach(panel=>soundObserver.observe(panel));

document.querySelector('.hero')?.classList.add('in-view');
