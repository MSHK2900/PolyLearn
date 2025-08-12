
async function loadData(){
  const res = await fetch('data/polymers.json');
  return res.json();
}
function getParam(name){
  const p = new URLSearchParams(location.search);
  return p.get(name);
}
function setHTML(id, html){ document.getElementById(id).innerHTML = html || '—'; }
function listLinks(arr){
  if(!arr || !arr.length) return '<li class="small">No links added yet.</li>';
  return arr.map(u => `<li><a class="link" href="${u}" target="_blank" rel="noopener">${u}</a></li>`).join('');
}
(async () => {
  const slug = getParam('slug');
  const data = await loadData();
  const p = data.find(x => x.slug === slug);
  if(!p){
    document.getElementById('detail').innerHTML = '<div class="section"><h2>Not found</h2><p>Polymer not found.</p></div>';
    return;
  }
  setHTML('polyName', p.name);
  setHTML('polyType', p.type);
  setHTML('repeatUnit', p.repeatUnit);
  setHTML('monomers', p.monomers);
  setHTML('density', p.density || 'varies');
  setHTML('tg', p.Tg || '—');
  setHTML('tm', p.Tm || '—');
  setHTML('overview', p.overview);
  setHTML('structure', p.structure || '<span class="small">Add structure notes or image link in polymers.json</span>');
  setHTML('uses', p.uses);
  setHTML('manufacturing', p.manufacturing);
  setHTML('properties', p.properties);
  setHTML('safety', p.safety || '<span class="small">Consult Safety Data Sheet (SDS) for the specific grade. Avoid fumes from combustion/thermal degradation.</span>');
  document.getElementById('links').innerHTML = listLinks(p.links);
})();
