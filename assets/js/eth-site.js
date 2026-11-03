// This file is authored for the Ethereum adaptation. No wallet connection, no tracking, no auto-swap.
const cfg = window.TRUMPTY_ETH_CONFIG || {};
const ETH_CA = /^0x[0-9a-fA-F]{40}$/;
const ca = (cfg.contractAddress || '').trim();
const validCA = ETH_CA.test(ca);
const literal = validCA ? ca : 'Coming Soon..';
for (const node of document.querySelectorAll('[data-ca-out],[data-ca-faq],[data-hero-ca-out]')) {
  node.textContent = node.matches('[data-hero-ca-out]') && validCA ? `${ca.slice(0,6)}…${ca.slice(-4)}` : literal;
  node.title = validCA ? ca : 'The Ethereum contract has not been announced';
}
const status = document.querySelector('[data-ca-live]');
const copy = document.querySelector('[data-ca-copy]');
if (copy) {
  copy.disabled = false; copy.textContent = 'Copy address';
  copy.dataset.labelDefault = 'Copy address';
  copy.addEventListener('click', async () => {
    const what = validCA ? ca : 'Coming Soon..';
    try {
      if (navigator.clipboard && window.isSecureContext) await navigator.clipboard.writeText(what);
      else {
        const tmp=document.createElement('textarea');tmp.value=what;
        tmp.style.cssText='position:fixed;opacity:0;left:-9999px';document.body.append(tmp);tmp.select();
        document.execCommand('copy');tmp.remove();
      }
      copy.textContent = validCA ? 'Copied ✓' : 'Coming Soon.. copied';
      if (status) status.textContent = validCA ? 'Verified Ethereum-format address copied. Always verify its authenticity.' : 'No Ethereum contract address has been announced.';
    } catch (err) {
      if (status) status.textContent = 'Copy unavailable. The contract is not live yet.';
    }
    setTimeout(() => {copy.textContent='Copy address'; if(status) status.textContent='';}, 2600);
  });
}
for (const node of document.querySelectorAll('[data-official-social]')) {
  const platform=node.getAttribute('data-official-social');
  const url=cfg.social?.[platform] || '';
  if (/^https:\/\//i.test(url)) {
    node.href=url; node.target='_blank'; node.rel='noopener noreferrer';
    node.removeAttribute('aria-disabled');node.removeAttribute('tabindex');node.removeAttribute('title');
  } else {
    node.removeAttribute('href');node.setAttribute('aria-disabled','true');
    node.title=`Official ${platform} link not configured`;
  }
}
for(const node of document.querySelectorAll('a[aria-disabled="true"]')){
  node.addEventListener('click',e=>e.preventDefault());
}
// Allow the Ethereum team's own video to be configured without implying the original Solana project's video is ours.
const vid=document.querySelector('[data-video-hit]');
if(vid && /^https:\/\//.test(cfg.videoUrl||'')){
  vid.addEventListener('click',e=>{ e.stopImmediatePropagation(); e.preventDefault(); window.open(cfg.videoUrl,'_blank','noopener,noreferrer'); },true);
}
const rumble=[...document.querySelectorAll('a,span')].find(n=>n.textContent?.trim()==='Also on Rumble');
if(rumble && /^https:\/\//.test(cfg.rumbleUrl||'')){
  if(rumble.tagName==='A') {rumble.href=cfg.rumbleUrl;rumble.target='_blank';rumble.rel='noopener noreferrer';rumble.removeAttribute('aria-disabled')}
}
