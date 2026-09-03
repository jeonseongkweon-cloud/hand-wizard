(function(){
  const CONFIG=window.HAND_WIZARD_CONFIG||{};
  const url=(CONFIG.supabaseUrl||'').replace(/\/$/,'');
  const key=CONFIG.supabaseAnonKey||'';
  const configured=()=>/^https:\/\/.+\.supabase\.co$/i.test(url)&&key.length>20;
  const headers=()=>({'apikey':key,'Authorization':`Bearer ${key}`,'Content-Type':'application/json'});
  const randomId=(length=10)=>{const alphabet='23456789abcdefghjkmnpqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ';const bytes=new Uint8Array(length);crypto.getRandomValues(bytes);return [...bytes].map(b=>alphabet[b%alphabet.length]).join('')};
  async function save(card){
    if(!configured())throw new Error('STORAGE_NOT_CONFIGURED');
    for(let attempt=0;attempt<4;attempt++){
      const id=randomId();
      const res=await fetch(`${url}/rest/v1/hand_wizard_cards`,{method:'POST',headers:{...headers(),'Prefer':'return=minimal'},body:JSON.stringify({id,payload:card})});
      if(res.ok)return id;
      if(res.status!==409){const detail=await res.text().catch(()=> '');throw new Error(`SAVE_FAILED:${res.status}:${detail}`)}
    }
    throw new Error('ID_COLLISION');
  }
  async function load(id){
    if(!configured())throw new Error('STORAGE_NOT_CONFIGURED');
    if(!/^[A-Za-z0-9]{8,24}$/.test(id))return null;
    const res=await fetch(`${url}/rest/v1/rpc/get_hand_wizard_card`,{method:'POST',headers:headers(),body:JSON.stringify({p_id:id})});
    if(!res.ok)throw new Error(`LOAD_FAILED:${res.status}`);
    return await res.json();
  }
  window.HandWizardStore={configured,save,load};
})();
