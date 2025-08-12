const TYPES = [
  { key: "Thermoplastics", icon: "🧊", blurb: "Melt & reshape repeatedly (PE, PP, PVC, PET...)" },
  { key: "Thermosets", icon: "🔥", blurb: "Cure irreversibly; heat resistant (Epoxy, PF, PU foams...)" },
  { key: "Elastomers", icon: "🧷", blurb: "Stretchy rubbers (NR, SBR, NBR, EPDM...)" },
  { key: "Fluoropolymers", icon: "🧯", blurb: "Chemically inert & low friction (PTFE, PVDF...)" },
  { key: "High-Performance", icon: "🚀", blurb: "High strength/temperature (PEEK, PI, PPS...)" },
  { key: "Biodegradable", icon: "🌱", blurb: "Compostable/biodegradable (PLA, PHA, PBS...)" },
  { key: "Natural/Cellulose", icon: "🌳", blurb: "Natural origin or modified cellulose" },
  { key: "Conductive/Functional", icon: "⚡", blurb: "Conducting/ionic/functional (PANI, PEDOT:PSS...)" },
  { key: "Blends & Copolymers", icon: "🧩", blurb: "Engineered blends (ABS, PC/ABS, PETG...)" },
  { key: "Ionomers", icon: "🧲", blurb: "Ionic crosslinks (E/MAA etc.)" }
];

function card(t){
  return `
  <a class="card" href="type.html?type=${encodeURIComponent(t.key)}">
    <div class="icon" aria-hidden="true">${t.icon}</div>
    <div style="margin-top:8px;font-weight:700">${t.key}</div>
    <div class="small" style="margin-top:6px">${t.blurb}</div>
    <div class="chips" style="margin-top:10px">
      <span class="chip">Browse</span>
      <span class="chip">Learn</span>
      <span class="chip">Compare</span>
    </div>
  </a>`;
}
document.getElementById("types").innerHTML = TYPES.map(card).join("");
