async function loadData(){
  const res = await fetch('polymers.json');
  return res.json();
}
function getParam(name){
  const p = new URLSearchParams(location.search);
  return p.get(name);
}
function renderList(polymers){
  const el = document.getElementById('list');
  el.innerHTML = polymers.map(p => `
    <a class="item" href="polymer.html?slug=${encodeURIComponent(p.slug)}">
      <div class="icon">🔹</div>
      <div style="flex:1">
        <div class="item-title">${p.name}</div>
        <div class="small">${p.aliases?.join(', ') || ''}</div>
        <div class="meta">
          ${p.monomers ? `<span class="badge">${p.monomers}</span>`:''}
          ${p.repeatUnit ? `<span class="badge">${p.repeatUnit}</span>`:''}
        </div>
      </div>
    </a>
  `).join('');
}

(async () => {
  const type = getParam('type');
  const data = await loadData();
  const list = data.filter(p => p.type === type);
  document.getElementById('typeHeader').innerHTML = `
    <h1>${type}</h1>
    <p class="note">Showing ${list.length} polymers.</p>
  `;
  renderList(list);

  const q = document.getElementById('q');
  q.addEventListener('input', () => {
    const s = q.value.toLowerCase();
    const filtered = list.filter(p => (
      p.name.toLowerCase().includes(s) ||
      (p.aliases||[]).some(a => a.toLowerCase().includes(s)) ||
      (p.monomers||'').toLowerCase().includes(s) ||
      (p.uses||'').toLowerCase().includes(s)
    ));
    renderList(filtered);
  });
})();
