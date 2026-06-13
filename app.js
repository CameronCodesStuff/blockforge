'use strict';

/* ============================================================
   BLOCK DEFINITIONS — 40 blocks
   ============================================================ */
const CATS = {
  structure: { label:'Structure', color:'var(--c-structure)' },
  content:   { label:'Content',   color:'var(--c-content)' },
  layout:    { label:'Layout',    color:'var(--c-layout)' },
  style:     { label:'Page style', color:'var(--c-style)' },
};

const DEFS = {
  /* ---------- STRUCTURE ---------- */
  announcement: { cat:'structure', label:'Announcement bar', props:[
    {k:'text', label:'Text', kind:'text', d:'🎉 Something new just launched', wide:true},
    {k:'linkLabel', label:'Link label', kind:'text', d:''},
    {k:'link', label:'Link', kind:'text', d:'#'},
  ]},
  navbar: { cat:'structure', label:'Navbar', props:[
    {k:'brand', label:'Brand', kind:'text', d:'My Site'},
    {k:'links', label:'Links (comma sep)', kind:'text', d:'Home, About, Contact', wide:true},
    {k:'ctaLabel', label:'Button label', kind:'text', d:''},
    {k:'ctaLink', label:'Button link', kind:'text', d:'#'},
    {k:'sticky', label:'Sticky', kind:'select', d:'yes', opts:['yes','no']},
  ]},
  hero: { cat:'structure', label:'Hero', props:[
    {k:'title', label:'Title', kind:'text', d:'Welcome to my site', wide:true},
    {k:'subtitle', label:'Subtitle', kind:'textarea', d:'A short line that explains what this is about.', wide:true},
    {k:'align', label:'Align', kind:'select', d:'center', opts:['center','left']},
    {k:'size', label:'Height', kind:'select', d:'normal', opts:['compact','normal','tall','full-screen']},
    {k:'bg', label:'Background', kind:'select', d:'gradient', opts:['gradient','solid','image']},
    {k:'bgImage', label:'BG image URL', kind:'text', d:'', wide:true},
    {k:'btn1Label', label:'Button 1', kind:'text', d:'Get started'},
    {k:'btn1Link', label:'Link 1', kind:'text', d:'#'},
    {k:'btn2Label', label:'Button 2', kind:'text', d:''},
    {k:'btn2Link', label:'Link 2', kind:'text', d:'#'},
  ]},
  cta: { cat:'structure', label:'CTA strip', props:[
    {k:'title', label:'Title', kind:'text', d:'Ready to get started?', wide:true},
    {k:'subtitle', label:'Subtitle', kind:'text', d:'Join today — it takes two minutes.', wide:true},
    {k:'btnLabel', label:'Button label', kind:'text', d:'Sign up free'},
    {k:'btnLink', label:'Button link', kind:'text', d:'#'},
  ]},
  banner: { cat:'structure', label:'Image banner', props:[
    {k:'src', label:'Image URL', kind:'text', d:'https://picsum.photos/1600/500', wide:true},
    {k:'height', label:'Height (px)', kind:'range', d:'280', min:120, max:600},
    {k:'text', label:'Overlay text', kind:'text', d:'', wide:true},
  ]},
  footer: { cat:'structure', label:'Footer', props:[
    {k:'text', label:'Text', kind:'text', d:'© 2026 My Site', wide:true},
    {k:'links', label:'Links (comma sep)', kind:'text', d:'', wide:true},
  ]},

  /* ---------- CONTENT ---------- */
  heading: { cat:'content', label:'Heading', props:[
    {k:'text', label:'Text', kind:'text', d:'Section heading', wide:true},
    {k:'size', label:'Size', kind:'select', d:'h2', opts:['h1','h2','h3','h4']},
    {k:'align', label:'Align', kind:'select', d:'left', opts:['left','center','right']},
    {k:'color', label:'Color', kind:'select', d:'default', opts:['default','accent']},
  ]},
  paragraph: { cat:'content', label:'Paragraph', props:[
    {k:'text', label:'Text', kind:'textarea', d:'Write something interesting here.', wide:true},
    {k:'size', label:'Size', kind:'select', d:'normal', opts:['small','normal','large']},
    {k:'align', label:'Align', kind:'select', d:'left', opts:['left','center','right']},
    {k:'tone', label:'Tone', kind:'select', d:'normal', opts:['normal','muted']},
  ]},
  button: { cat:'content', label:'Button', props:[
    {k:'label', label:'Label', kind:'text', d:'Click me'},
    {k:'link', label:'Link', kind:'text', d:'#'},
    {k:'style', label:'Style', kind:'select', d:'solid', opts:['solid','outline','soft']},
    {k:'size', label:'Size', kind:'select', d:'medium', opts:['small','medium','large']},
    {k:'align', label:'Align', kind:'select', d:'left', opts:['left','center','right']},
  ]},
  image: { cat:'content', label:'Image', props:[
    {k:'src', label:'Image URL', kind:'text', d:'https://picsum.photos/900/440', wide:true},
    {k:'alt', label:'Alt text', kind:'text', d:'Photo'},
    {k:'width', label:'Width %', kind:'range', d:'100', min:25, max:100},
    {k:'corners', label:'Corners', kind:'select', d:'theme', opts:['theme','square','round','circle']},
    {k:'shadow', label:'Shadow', kind:'select', d:'none', opts:['none','soft']},
    {k:'caption', label:'Caption', kind:'text', d:'', wide:true},
  ]},
  gallery: { cat:'content', label:'Gallery', props:[
    {k:'images', label:'Image URLs (comma sep)', kind:'textarea', d:'https://picsum.photos/400/300?1, https://picsum.photos/400/300?2, https://picsum.photos/400/300?3', wide:true},
    {k:'columns', label:'Columns', kind:'select', d:'3', opts:['2','3','4']},
  ]},
  video: { cat:'content', label:'Video', props:[
    {k:'url', label:'YouTube URL', kind:'text', d:'', wide:true},
  ]},
  audio: { cat:'content', label:'Audio', props:[
    {k:'src', label:'Audio file URL', kind:'text', d:'', wide:true},
    {k:'title', label:'Title', kind:'text', d:''},
  ]},
  list: { cat:'content', label:'List', props:[
    {k:'items', label:'Items (comma sep)', kind:'textarea', d:'First thing, Second thing, Third thing', wide:true},
    {k:'kind', label:'Type', kind:'select', d:'bullets', opts:['bullets','numbered','checks']},
    {k:'columns', label:'Columns', kind:'select', d:'1', opts:['1','2']},
  ]},
  quote: { cat:'content', label:'Quote', props:[
    {k:'text', label:'Quote', kind:'textarea', d:'Simplicity is the ultimate sophistication.', wide:true},
    {k:'by', label:'Attribution', kind:'text', d:'Leonardo da Vinci'},
    {k:'style', label:'Style', kind:'select', d:'line', opts:['line','card','big']},
  ]},
  card: { cat:'content', label:'Card', props:[
    {k:'emoji', label:'Icon / emoji', kind:'text', d:'✦'},
    {k:'title', label:'Title', kind:'text', d:'Card title'},
    {k:'text', label:'Text', kind:'textarea', d:'A short description for this card.', wide:true},
    {k:'btnLabel', label:'Button label', kind:'text', d:''},
    {k:'btnLink', label:'Button link', kind:'text', d:'#'},
    {k:'align', label:'Align', kind:'select', d:'left', opts:['left','center']},
  ]},
  badge: { cat:'content', label:'Badge', props:[
    {k:'text', label:'Text', kind:'text', d:'New'},
    {k:'align', label:'Align', kind:'select', d:'left', opts:['left','center','right']},
  ]},
  stat: { cat:'content', label:'Big stat', props:[
    {k:'number', label:'Number', kind:'text', d:'120+'},
    {k:'label', label:'Label', kind:'text', d:'Happy users'},
    {k:'align', label:'Align', kind:'select', d:'center', opts:['left','center']},
  ]},
  pricing: { cat:'content', label:'Pricing card', props:[
    {k:'name', label:'Plan name', kind:'text', d:'Pro'},
    {k:'price', label:'Price', kind:'text', d:'$9'},
    {k:'period', label:'Period', kind:'text', d:'/month'},
    {k:'features', label:'Features (comma sep)', kind:'textarea', d:'Everything in Free, Priority support, No limits', wide:true},
    {k:'btnLabel', label:'Button label', kind:'text', d:'Choose plan'},
    {k:'btnLink', label:'Button link', kind:'text', d:'#'},
    {k:'featured', label:'Highlighted', kind:'select', d:'no', opts:['no','yes']},
  ]},
  testimonial: { cat:'content', label:'Testimonial', props:[
    {k:'text', label:'Quote', kind:'textarea', d:'This is genuinely the best thing I have used all year.', wide:true},
    {k:'name', label:'Name', kind:'text', d:'Alex Doe'},
    {k:'role', label:'Role', kind:'text', d:'Designer'},
    {k:'avatar', label:'Avatar URL', kind:'text', d:'', wide:true},
  ]},
  team: { cat:'content', label:'Team member', props:[
    {k:'photo', label:'Photo URL', kind:'text', d:'https://picsum.photos/200/200', wide:true},
    {k:'name', label:'Name', kind:'text', d:'Sam Smith'},
    {k:'role', label:'Role', kind:'text', d:'Founder'},
  ]},
  faq: { cat:'content', label:'FAQ item', props:[
    {k:'q', label:'Question', kind:'text', d:'How does this work?', wide:true},
    {k:'a', label:'Answer', kind:'textarea', d:'Really well, thanks for asking.', wide:true},
    {k:'open', label:'Open by default', kind:'select', d:'no', opts:['no','yes']},
  ]},
  table: { cat:'content', label:'Table', props:[
    {k:'rows', label:'Rows (one per line, cells split with |)', kind:'textarea', d:'Feature | Free | Pro\nProjects | 3 | Unlimited\nSupport | Email | Priority', wide:true},
    {k:'header', label:'First row is header', kind:'select', d:'yes', opts:['yes','no']},
  ]},
  code: { cat:'content', label:'Code block', props:[
    {k:'code', label:'Code', kind:'textarea', d:'console.log("hello world");', wide:true},
  ]},
  alert: { cat:'content', label:'Alert / notice', props:[
    {k:'text', label:'Text', kind:'textarea', d:'Heads up — something worth knowing.', wide:true},
    {k:'type', label:'Type', kind:'select', d:'info', opts:['info','success','warning','danger']},
  ]},
  progress: { cat:'content', label:'Progress bar', props:[
    {k:'label', label:'Label', kind:'text', d:'Project progress'},
    {k:'percent', label:'Percent', kind:'range', d:'70', min:0, max:100},
  ]},
  social: { cat:'content', label:'Social links', props:[
    {k:'links', label:'Links (Name=URL, comma sep)', kind:'textarea', d:'GitHub=https://github.com, YouTube=https://youtube.com', wide:true},
    {k:'align', label:'Align', kind:'select', d:'center', opts:['left','center','right']},
  ]},
  form: { cat:'content', label:'Contact form', props:[
    {k:'title', label:'Title', kind:'text', d:'Get in touch', wide:true},
    {k:'email', label:'Send to (your email)', kind:'text', d:'you@example.com', wide:true},
    {k:'fields', label:'Fields', kind:'select', d:'name-email-message', opts:['name-email-message','email-message','message-only']},
    {k:'btnLabel', label:'Button label', kind:'text', d:'Send message'},
  ]},
  map: { cat:'content', label:'Map', props:[
    {k:'place', label:'Place / address', kind:'text', d:'Christchurch, New Zealand', wide:true},
    {k:'height', label:'Height (px)', kind:'range', d:'320', min:180, max:560},
  ]},
  countdown: { cat:'content', label:'Countdown', props:[
    {k:'target', label:'Target (YYYY-MM-DD HH:MM)', kind:'text', d:'2026-12-31 23:59', wide:true},
    {k:'doneText', label:'Finished text', kind:'text', d:'It\u2019s time! 🎉', wide:true},
  ]},
  marquee: { cat:'content', label:'Scrolling text', props:[
    {k:'text', label:'Text', kind:'text', d:'★ Welcome ★ Scroll on by ★ Made with Blockforge', wide:true},
    {k:'speed', label:'Speed', kind:'select', d:'normal', opts:['slow','normal','fast']},
  ]},

  /* ---------- LAYOUT ---------- */
  columns: { cat:'layout', label:'Columns', container:true, props:[
    {k:'count', label:'Columns', kind:'select', d:'2', opts:['2','3','4']},
    {k:'gap', label:'Gap', kind:'select', d:'medium', opts:['small','medium','large']},
    {k:'cards', label:'Card style', kind:'select', d:'on', opts:['on','off']},
    {k:'valign', label:'Vertical align', kind:'select', d:'top', opts:['top','middle']},
  ]},
  section: { cat:'layout', label:'Section band', props:[
    {k:'tint', label:'Tint', kind:'select', d:'card', opts:['card','accent','none']},
    {k:'height', label:'Padding', kind:'select', d:'medium', opts:['small','medium','large']},
    {k:'text', label:'Optional text', kind:'text', d:'', wide:true},
  ]},
  spacer: { cat:'layout', label:'Spacer', props:[
    {k:'height', label:'Height', kind:'range', d:'48', min:8, max:200},
  ]},
  divider: { cat:'layout', label:'Divider', props:[
    {k:'style', label:'Style', kind:'select', d:'line', opts:['line','dots','fade']},
  ]},
  anchor: { cat:'layout', label:'Anchor target', props:[
    {k:'name', label:'Name (navbar links jump here)', kind:'text', d:'about', wide:true},
  ]},

  /* ---------- PAGE STYLE ---------- */
  theme: { cat:'style', label:'Theme', props:[
    {k:'name', label:'Theme', kind:'select', d:'minimal-light',
      opts:['minimal-light','dark','neon','paper','ocean','sunset','forest','midnight','cyberpunk','candy','terminal','luxury','pastel','aurora ✨','starfield ✨','gradient-flow ✨','synthwave ✨','lava ✨']},
  ]},
  accent: { cat:'style', label:'Accent color', props:[
    {k:'color', label:'Color', kind:'color', d:'#5b8cff'},
  ]},
  font: { cat:'style', label:'Font', props:[
    {k:'family', label:'Family', kind:'select', d:'sans', opts:['sans','serif','mono','rounded']},
    {k:'headings', label:'Heading weight', kind:'select', d:'bold', opts:['bold','extra-bold','normal']},
  ]},
  page: { cat:'style', label:'Page settings', props:[
    {k:'width', label:'Content width', kind:'select', d:'normal', opts:['narrow','normal','wide']},
    {k:'corners', label:'Corner style', kind:'select', d:'soft', opts:['sharp','soft','round']},
    {k:'lineHeight', label:'Line height', kind:'select', d:'normal', opts:['tight','normal','relaxed']},
  ]},
};

/* defaults lookup for crash-proof prop access */
const DEF_DEFAULTS = {};
Object.entries(DEFS).forEach(([type, def]) => {
  DEF_DEFAULTS[type] = {};
  def.props.forEach(p => DEF_DEFAULTS[type][p.k] = p.d);
});

const NO_NEST = new Set(['columns','navbar','hero','footer','section','announcement','cta','banner','theme','accent','font','page']);

/* ============================================================
   STATE
   ============================================================ */
let state = {
  blocks: [],
  site: { title:'My Site', favEmoji:'🌐', favUrl:'', desc:'' },
};
let nextId = 1;
const uid = () => 'b' + (nextId++);

function newBlock(type){
  const b = { id: uid(), type, props: { ...DEF_DEFAULTS[type] } };
  if (DEFS[type].container) b.children = [[],[]];
  return b;
}

function locate(id, list = state.blocks){
  for (let i = 0; i < list.length; i++){
    const b = list[i];
    if (b.id === id) return { list, index: i, block: b };
    if (b.children){
      for (const col of b.children){
        const r = locate(id, col);
        if (r) return r;
      }
    }
  }
  return null;
}
const blockById = id => { const r = locate(id); return r ? r.block : null; };

/* ============================================================
   PALETTE + CATEGORY NAVIGATION
   ============================================================ */
const palEl = document.getElementById('palette');
const palSearch = document.getElementById('pal-search');
const catNavEl = document.getElementById('pal-cat-nav');

/* Build the quick-jump category buttons */
function buildCatNav(){
  catNavEl.innerHTML = '';
  // "All" button
  const allBtn = document.createElement('button');
  allBtn.className = 'pal-cat-btn active';
  allBtn.textContent = 'All';
  allBtn.dataset.cat = '';
  allBtn.addEventListener('click', () => scrollToCategory('', allBtn));
  catNavEl.appendChild(allBtn);

  Object.entries(CATS).forEach(([catKey, cat]) => {
    const btn = document.createElement('button');
    btn.className = 'pal-cat-btn';
    btn.textContent = cat.label;
    btn.dataset.cat = catKey;
    btn.style.setProperty('--dot-color', cat.color);
    btn.addEventListener('click', () => scrollToCategory(catKey, btn));
    catNavEl.appendChild(btn);
  });
}

function scrollToCategory(catKey, clickedBtn){
  // Update active state
  catNavEl.querySelectorAll('.pal-cat-btn').forEach(b => b.classList.remove('active'));
  clickedBtn.classList.add('active');

  if (!catKey){
    palEl.scrollTop = 0;
    return;
  }
  // Scroll the palette list to the matching category heading
  const target = palEl.querySelector('.cat[data-cat="' + catKey + '"]');
  if (target){
    target.scrollIntoView({ behavior:'smooth', block:'start' });
    // Nudge a tiny bit so the heading isn't hidden under the sticky top area
    setTimeout(() => { palEl.scrollTop -= 8; }, 220);
  }
}

function renderPalette(){
  const q = palSearch.value.trim().toLowerCase();
  palEl.innerHTML = '';
  Object.entries(CATS).forEach(([catKey, cat]) => {
    const defs = Object.entries(DEFS).filter(([, d]) =>
      d.cat === catKey && (!q || d.label.toLowerCase().includes(q)));
    if (!defs.length) return;
    const wrap = document.createElement('div');
    wrap.className = 'cat';
    wrap.dataset.cat = catKey;
    const t = document.createElement('div');
    t.className = 'cat-title';
    t.innerHTML = '<span class="cat-dot" style="background:' + cat.color + '"></span>' + cat.label;
    wrap.appendChild(t);
    defs.forEach(([type, d]) => {
      const el = document.createElement('div');
      el.className = 'pal-block';
      el.innerHTML = '<span class="dot" style="background:' + cat.color + '"></span>'
        + d.label + '<span class="plus">＋</span>';
      el.draggable = true;
      el.title = 'Click to add · drag to place';
      el.addEventListener('dragstart', e => {
        e.dataTransfer.setData('text/plain', JSON.stringify({ from:'palette', type }));
        e.dataTransfer.effectAllowed = 'copy';
      });
      el.addEventListener('click', () => {
        const b = newBlock(type);
        state.blocks.push(b);
        renderWorkspace();
        flashBlock(b.id);
      });
      wrap.appendChild(el);
    });
    palEl.appendChild(wrap);
  });
}
palSearch.addEventListener('input', renderPalette);

function flashBlock(id){
  const el = ws.querySelector('[data-id="' + id + '"]');
  if (!el) return;
  el.scrollIntoView({ behavior:'smooth', block:'center' });
  el.classList.add('flash');
  setTimeout(() => el.classList.remove('flash'), 900);
}

/* ============================================================
   WORKSPACE
   ============================================================ */
const ws = document.getElementById('workspace');

function renderWorkspace(){
  ws.innerHTML = '';
  if (!state.blocks.length){
    const h = document.createElement('div');
    h.className = 'empty-hint';
    h.innerHTML = 'Empty page<br><b>Click</b> a block on the left to add it, or <b>drag</b> it here.<br>Blocks work in any order — style blocks apply from anywhere.';
    ws.appendChild(h);
  } else {
    state.blocks.forEach(b => ws.appendChild(renderBlock(b)));
  }
  renderPreview();
}

function renderBlock(b){
  const def = DEFS[b.type];

  if (!def){
    const el = document.createElement('div');
    el.className = 'wblock unknown';
    el.dataset.id = b.id;
    const head = document.createElement('div');
    head.className = 'wb-head';
    head.innerHTML = '<span class="dot" style="background:var(--dim)"></span><span class="name">Unknown block (' + String(b.type) + ')</span>';
    const acts = document.createElement('span');
    acts.className = 'acts';
    const del = document.createElement('button');
    del.className = 'wb-act danger'; del.textContent = '✕'; del.title = 'Delete';
    del.addEventListener('click', () => deleteBlock(b.id));
    acts.appendChild(del);
    head.appendChild(acts);
    el.appendChild(head);
    return el;
  }

  if (!b.props) b.props = {};
  const el = document.createElement('div');
  el.className = 'wblock' + (b.collapsed ? ' collapsed' : '');
  el.dataset.id = b.id;
  el.draggable = true;

  el.addEventListener('dragstart', e => {
    e.stopPropagation();
    e.dataTransfer.setData('text/plain', JSON.stringify({ from:'workspace', id: b.id }));
    e.dataTransfer.effectAllowed = 'move';
    requestAnimationFrame(() => el.classList.add('dragging'));
  });
  el.addEventListener('dragend', () => el.classList.remove('dragging'));

  const head = document.createElement('div');
  head.className = 'wb-head';
  head.innerHTML = '<span class="dot" style="background:' + CATS[def.cat].color + '"></span>'
    + '<span class="caret">▾</span><span class="name">' + def.label + '</span>';
  head.querySelector('.name').addEventListener('click', () => toggleCollapse(b, el));
  head.querySelector('.caret').addEventListener('click', () => toggleCollapse(b, el));

  const acts = document.createElement('span');
  acts.className = 'acts';
  const mkAct = (txt, title, fn, danger) => {
    const btn = document.createElement('button');
    btn.className = 'wb-act' + (danger ? ' danger' : '');
    btn.textContent = txt; btn.title = title;
    btn.addEventListener('click', e => { e.stopPropagation(); fn(); });
    return btn;
  };
  acts.append(
    mkAct('↑', 'Move up', () => nudge(b.id, -1)),
    mkAct('↓', 'Move down', () => nudge(b.id, 1)),
    mkAct('⧉', 'Duplicate', () => duplicateBlock(b.id)),
    mkAct('✕', 'Delete', () => deleteBlock(b.id), true),
  );
  head.appendChild(acts);
  el.appendChild(head);

  if (def.props.length){
    const body = document.createElement('div');
    body.className = 'wb-body';
    def.props.forEach(p => body.appendChild(renderField(b, p)));
    el.appendChild(body);
  }

  if (DEFS[b.type].container){
    if (!Array.isArray(b.children)) b.children = [[],[]];
    const count = parseInt(b.props.count, 10) || 2;
    while (b.children.length < count) b.children.push([]);
    const cols = document.createElement('div');
    cols.className = 'cols';
    cols.style.gridTemplateColumns = 'repeat(' + count + ',1fr)';
    for (let c = 0; c < count; c++){
      const zone = document.createElement('div');
      zone.className = 'col-zone';
      zone.dataset.parent = b.id;
      zone.dataset.col = c;
      if (!b.children[c].length){
        zone.innerHTML = '<div class="zone-hint">drop content here</div>';
      } else {
        b.children[c].forEach(child => zone.appendChild(renderBlock(child)));
      }
      attachZoneDnD(zone);
      cols.appendChild(zone);
    }
    el.appendChild(cols);
  }

  return el;
}

function toggleCollapse(b, el){
  b.collapsed = !b.collapsed;
  el.classList.toggle('collapsed', b.collapsed);
}

function renderField(b, p){
  const f = document.createElement('div');
  f.className = 'field' + (p.wide ? ' wide' :
    (p.kind === 'select' || p.kind === 'number' || p.kind === 'color' || p.kind === 'range') ? ' small' : '');
  const lab = document.createElement('label');
  lab.textContent = p.label;
  f.appendChild(lab);

  const cur = (b.props[p.k] !== undefined) ? b.props[p.k] : p.d;
  let input, rangeVal;
  if (p.kind === 'select'){
    input = document.createElement('select');
    p.opts.forEach(o => {
      const op = document.createElement('option');
      op.value = o; op.textContent = o.replace(/-/g, ' ');
      input.appendChild(op);
    });
    input.value = p.opts.includes(cur) ? cur : p.d;
  } else if (p.kind === 'textarea'){
    input = document.createElement('textarea');
    input.value = cur;
  } else if (p.kind === 'range'){
    input = document.createElement('input');
    input.type = 'range';
    input.min = p.min; input.max = p.max;
    input.value = cur;
    rangeVal = document.createElement('div');
    rangeVal.className = 'range-val';
    rangeVal.textContent = cur;
  } else {
    input = document.createElement('input');
    input.type = (p.kind === 'number') ? 'number' : (p.kind === 'color') ? 'color' : 'text';
    input.value = cur;
  }

  input.addEventListener('input', () => {
    b.props[p.k] = input.value;
    if (rangeVal) rangeVal.textContent = input.value;
    renderPreview();
  });
  if (b.type === 'columns' && p.k === 'count'){
    input.addEventListener('change', () => renderWorkspace());
  }
  f.appendChild(input);
  if (rangeVal) f.appendChild(rangeVal);
  return f;
}

/* fields shouldn't start drags */
let dragLockedEl = null;
ws.addEventListener('pointerdown', e => {
  if (e.target.closest('input, select, textarea, button, .wb-act')){
    dragLockedEl = e.target.closest('.wblock');
    if (dragLockedEl) dragLockedEl.draggable = false;
  }
});
document.addEventListener('pointerup', () => {
  if (dragLockedEl){ dragLockedEl.draggable = true; dragLockedEl = null; }
});

/* ============================================================
   DRAG & DROP
   ============================================================ */
const dropLine = document.createElement('div');
dropLine.className = 'drop-line';
function clearDropLine(){ if (dropLine.parentNode) dropLine.parentNode.removeChild(dropLine); }

function insertionTarget(zoneEl, y){
  const blocks = [...zoneEl.children].filter(ch => ch.classList && ch.classList.contains('wblock'));
  for (let i = 0; i < blocks.length; i++){
    const r = blocks[i].getBoundingClientRect();
    if (y < r.top + r.height / 2) return { index: i, before: blocks[i] };
  }
  return { index: blocks.length, before: null };
}

function attachZoneDnD(zoneEl){
  zoneEl.addEventListener('dragover', e => {
    e.preventDefault();
    e.stopPropagation();
    zoneEl.classList.add('drag-over');
    const t = insertionTarget(zoneEl, e.clientY);
    if (t.before) zoneEl.insertBefore(dropLine, t.before);
    else zoneEl.appendChild(dropLine);
  });
  zoneEl.addEventListener('dragleave', e => {
    if (!zoneEl.contains(e.relatedTarget)){
      zoneEl.classList.remove('drag-over');
      if (dropLine.parentNode === zoneEl) clearDropLine();
    }
  });
  zoneEl.addEventListener('drop', e => {
    e.preventDefault();
    e.stopPropagation();
    zoneEl.classList.remove('drag-over');
    const idx = insertionTarget(zoneEl, e.clientY).index;
    clearDropLine();
    handleDrop(e, getZoneList(zoneEl), idx);
  });
}

function getZoneList(zoneEl){
  if (zoneEl === ws) return state.blocks;
  const parent = blockById(zoneEl.dataset.parent);
  return parent.children[parseInt(zoneEl.dataset.col, 10)];
}

function handleDrop(e, targetList, index){
  let data;
  try { data = JSON.parse(e.dataTransfer.getData('text/plain')); }
  catch (err) { return; }
  if (!data) return;

  const intoColumn = targetList !== state.blocks;

  if (data.from === 'palette'){
    if (intoColumn && NO_NEST.has(data.type)){
      toast('That block can\u2019t go inside columns', true);
      return;
    }
    const b = newBlock(data.type);
    targetList.splice(index, 0, b);
    renderWorkspace();
    flashBlock(b.id);
    return;
  }

  if (data.from === 'workspace'){
    const loc = locate(data.id);
    if (!loc) return;
    if (intoColumn && NO_NEST.has(loc.block.type)){
      toast('That block can\u2019t go inside columns', true);
      return;
    }
    loc.list.splice(loc.index, 1);
    if (loc.list === targetList && loc.index < index) index--;
    targetList.splice(index, 0, loc.block);
    renderWorkspace();
  }
}

attachZoneDnD(ws);
ws.addEventListener('dragenter', () => ws.classList.add('drag-over'));
ws.addEventListener('dragleave', e => { if (!ws.contains(e.relatedTarget)) ws.classList.remove('drag-over'); });
ws.addEventListener('drop', () => ws.classList.remove('drag-over'));
ws.addEventListener('dragover', e => {
  const r = ws.getBoundingClientRect();
  const edge = 56;
  if (e.clientY < r.top + edge) ws.scrollTop -= 14;
  else if (e.clientY > r.bottom - edge) ws.scrollTop += 14;
});

/* ============================================================
   BLOCK OPS
   ============================================================ */
function deleteBlock(id){
  const loc = locate(id);
  if (loc){ loc.list.splice(loc.index, 1); renderWorkspace(); }
}
function duplicateBlock(id){
  const loc = locate(id);
  if (!loc) return;
  const copy = JSON.parse(JSON.stringify(loc.block));
  (function reId(b){ b.id = uid(); if (b.children) b.children.forEach(col => col.forEach(reId)); })(copy);
  loc.list.splice(loc.index + 1, 0, copy);
  renderWorkspace();
  flashBlock(copy.id);
}
function nudge(id, dir){
  const loc = locate(id);
  if (!loc) return;
  const ni = loc.index + dir;
  if (ni < 0 || ni >= loc.list.length) return;
  loc.list.splice(loc.index, 1);
  loc.list.splice(ni, 0, loc.block);
  renderWorkspace();
  flashBlock(id);
}

/* ============================================================
   THEMES — 13 static + 5 animated
   ============================================================ */
const REDUCED = '@media (prefers-reduced-motion:reduce){body::before,body::after,.bf-marquee span{animation:none!important}}';

const THEMES = {
  'minimal-light': { bg:'#ffffff', txt:'#1d2433', card:'#f4f6fa', line:'#e4e9f1', heroTxt:'#ffffff',
    heroGrad:'linear-gradient(135deg, var(--accent), color-mix(in srgb, var(--accent) 55%, #ffffff))' },
  'dark': { bg:'#10141b', txt:'#e7edf6', card:'#181e29', line:'#27303f', heroTxt:'#ffffff',
    heroGrad:'linear-gradient(135deg, color-mix(in srgb, var(--accent) 70%, #000), var(--accent))' },
  'neon': { bg:'#06080d', txt:'#d6f2ff', card:'#0c1219', line:'#1c2940', heroTxt:'#ffffff',
    heroGrad:'radial-gradient(circle at 30% 30%, color-mix(in srgb, var(--accent) 38%, transparent), transparent 70%), #06080d',
    extra:'body{background-image:radial-gradient(circle at 1px 1px, rgba(80,140,200,.13) 1px, transparent 0);background-size:26px 26px}'
      + '.bf-hero h1{text-shadow:0 0 22px var(--accent)}'
      + '.bf-btn-solid{box-shadow:0 0 16px color-mix(in srgb, var(--accent) 55%, transparent)}' },
  'paper': { bg:'#f8f4eb', txt:'#2e2a21', card:'#fffdf6', line:'#e7dfcd', heroTxt:'#ffffff',
    heroGrad:'linear-gradient(135deg, color-mix(in srgb, var(--accent) 82%, #fff), var(--accent))' },
  'ocean': { bg:'#0a1622', txt:'#dcebf7', card:'#102234', line:'#1c374f', heroTxt:'#ffffff',
    heroGrad:'linear-gradient(160deg, #0a1622, color-mix(in srgb, var(--accent) 55%, #0a3050))' },
  'sunset': { bg:'#fff8f2', txt:'#3a2a22', card:'#fff0e3', line:'#f3ddc8', heroTxt:'#ffffff',
    heroGrad:'linear-gradient(135deg, #ff9a62, var(--accent))' },
  'forest': { bg:'#f3f7f2', txt:'#22301f', card:'#e9f1e7', line:'#d5e3d1', heroTxt:'#ffffff',
    heroGrad:'linear-gradient(135deg, #2f6b3f, color-mix(in srgb, var(--accent) 70%, #1d4427))' },
  'midnight': { bg:'#0a0a16', txt:'#e6e6f5', card:'#13132a', line:'#232347', heroTxt:'#ffffff',
    heroGrad:'linear-gradient(135deg, #2b1d5c, color-mix(in srgb, var(--accent) 65%, #4a2a8f))' },
  'cyberpunk': { bg:'#0d0d12', txt:'#f0e9ff', card:'#16121f', line:'#2a2238', heroTxt:'#ffffff',
    heroGrad:'linear-gradient(120deg, #ff2bd6, #00e5ff)',
    extra:'.bf-hero h1{text-shadow:3px 3px 0 rgba(255,43,214,.45), -3px -3px 0 rgba(0,229,255,.45)}'
      + '.bf-badge{box-shadow:0 0 12px color-mix(in srgb, var(--accent) 60%, transparent)}' },
  'candy': { bg:'#fff5fa', txt:'#46243a', card:'#ffe9f3', line:'#f7cfe1', heroTxt:'#ffffff',
    heroGrad:'linear-gradient(135deg, #ff8fc2, color-mix(in srgb, var(--accent) 70%, #ff6fae))' },
  'terminal': { bg:'#050805', txt:'#9dff9d', card:'#0a120a', line:'#1c331c', heroTxt:'#bfffbf',
    heroGrad:'linear-gradient(180deg, #061206, #0b1f0b)',
    extra:'.bf-hero h1::after{content:"_";animation:bfBlink 1s steps(1) infinite}@keyframes bfBlink{50%{opacity:0}}'
      + 'a{color:#9dff9d}' },
  'luxury': { bg:'#121212', txt:'#efe6d8', card:'#1b1916', line:'#322c24', heroTxt:'#181206',
    heroGrad:'linear-gradient(135deg, #e8c87a, #b88a2e)' },
  'pastel': { bg:'#f6f7fb', txt:'#4a4a5a', card:'#ffffff', line:'#e7e9f2', heroTxt:'#4a4a5a',
    heroGrad:'linear-gradient(135deg, #d9e7ff, #ffe1ef, #e2ffe9)' },

  /* ----- animated ----- */
  'aurora ✨': { bg:'#0b0d14', txt:'#e8edf7', card:'rgba(21,26,40,.82)', line:'#28304a', heroTxt:'#ffffff',
    heroGrad:'transparent',
    extra:'body::before{content:"";position:fixed;inset:-25%;z-index:-1;'
      + 'background:linear-gradient(60deg,#13315c,#7b2d8b,#0e7a6f,#5b3a9e,#13315c);'
      + 'background-size:320% 320%;animation:bfAur 20s ease infinite;filter:blur(48px);opacity:.6}'
      + '@keyframes bfAur{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}'
      + '.bf-hero{background:rgba(255,255,255,.05);backdrop-filter:blur(2px)}' },
  'starfield ✨': { bg:'#05060f', txt:'#dfe6ff', card:'#0d1020', line:'#1f2440', heroTxt:'#ffffff',
    heroGrad:'radial-gradient(ellipse at 50% 0%, color-mix(in srgb, var(--accent) 30%, transparent), transparent 70%)',
    extra:'body::before{content:"";position:fixed;inset:0;z-index:-1;'
      + 'background-image:radial-gradient(2px 2px at 20px 30px,#fff,transparent),'
      + 'radial-gradient(1.5px 1.5px at 120px 90px,#cfe0ff,transparent),'
      + 'radial-gradient(1px 1px at 60px 160px,#fff,transparent),'
      + 'radial-gradient(2px 2px at 180px 50px,#aac6ff,transparent),'
      + 'radial-gradient(1px 1px at 90px 200px,#e8f0ff,transparent);'
      + 'background-size:230px 230px;animation:bfStars 120s linear infinite;opacity:.85}'
      + '@keyframes bfStars{to{background-position:-2300px 600px}}' },
  'gradient-flow ✨': { bg:'#fdfbff', txt:'#3a3550', card:'rgba(255,255,255,.85)', line:'#e8e4f4', heroTxt:'#ffffff',
    heroGrad:'linear-gradient(120deg, var(--accent), #b06ee8, var(--accent))',
    extra:'body::before{content:"";position:fixed;inset:0;z-index:-1;'
      + 'background:linear-gradient(120deg,#ffe9f3,#e7f0ff,#eafff3,#fff5e0,#ffe9f3);'
      + 'background-size:340% 340%;animation:bfFlow 26s ease infinite}'
      + '@keyframes bfFlow{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}'
      + '.bf-hero{background-size:240% 240%;animation:bfFlow 12s ease infinite}' },
  'synthwave ✨': { bg:'#14091f', txt:'#ffe7fb', card:'#1e1030', line:'#3a2256', heroTxt:'#ffffff',
    heroGrad:'linear-gradient(180deg, #1a0b29, #3a1058 60%, #ff2bd6)',
    extra:'body::after{content:"";position:fixed;left:-10%;right:-10%;bottom:0;height:32vh;z-index:-1;'
      + 'background:repeating-linear-gradient(90deg,rgba(0,229,255,.28) 0 1px,transparent 1px 64px),'
      + 'repeating-linear-gradient(0deg,rgba(255,43,214,.3) 0 1px,transparent 1px 32px);'
      + 'transform:perspective(320px) rotateX(56deg);transform-origin:bottom;'
      + 'animation:bfGrid 3.2s linear infinite}'
      + '@keyframes bfGrid{from{background-position:0 0,0 0}to{background-position:0 0,0 32px}}'
      + '.bf-hero h1{text-shadow:0 0 24px #ff2bd6}' },
  'lava ✨': { bg:'#1a0e0a', txt:'#ffe9dd', card:'#26140e', line:'#43251a', heroTxt:'#ffffff',
    heroGrad:'linear-gradient(135deg, #ff5a3c, #ffac38)',
    extra:'body::before{content:"";position:fixed;inset:-12%;z-index:-1;'
      + 'background:radial-gradient(circle at 18% 28%,rgba(255,90,60,.5),transparent 42%),'
      + 'radial-gradient(circle at 82% 72%,rgba(255,170,40,.45),transparent 46%),'
      + 'radial-gradient(circle at 60% 20%,rgba(255,60,110,.3),transparent 40%);'
      + 'filter:blur(64px);animation:bfLava 15s ease-in-out infinite alternate}'
      + '@keyframes bfLava{to{transform:translate(5%,7%) scale(1.18)}}' },
};

const FONTS = {
  sans:    "system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif",
  serif:   "Georgia, 'Times New Roman', serif",
  mono:    "'Courier New', ui-monospace, monospace",
  rounded: "ui-rounded, 'SF Pro Rounded', 'Segoe UI', system-ui, sans-serif",
};
const WIDTHS = { narrow:'720px', normal:'960px', wide:'1180px' };
const RADII = { sharp:'0px', soft:'10px', round:'20px' };
const LINEH = { tight:'1.45', normal:'1.65', relaxed:'1.85' };
const HEADW = { 'bold':'700', 'extra-bold':'800', 'normal':'400' };

/* ============================================================
   SITE GENERATION (crash-proof)
   ============================================================ */
function esc(s){
  return String(s ?? '')
    .replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')
    .replace(/"/g,'&quot;').replace(/'/g,'&#39;');
}
const escAttr = esc;
const slug = s => String(s || '').trim().toLowerCase().replace(/[^\w]+/g,'-').replace(/^-+|-+$/g,'') || 'section';

function collectStyles(){
  const s = { theme:'minimal-light', accent:'#5b8cff', font:'sans', headings:'bold',
              width:'normal', corners:'soft', lineHeight:'normal' };
  state.blocks.forEach(b => {
    if (!b || !b.props) return;
    if (b.type === 'theme' && THEMES[b.props.name]) s.theme = b.props.name;
    if (b.type === 'accent' && b.props.color) s.accent = b.props.color;
    if (b.type === 'font'){
      if (FONTS[b.props.family]) s.font = b.props.family;
      if (HEADW[b.props.headings]) s.headings = b.props.headings;
    }
    if (b.type === 'page'){
      if (WIDTHS[b.props.width]) s.width = b.props.width;
      if (RADII[b.props.corners]) s.corners = b.props.corners;
      if (LINEH[b.props.lineHeight]) s.lineHeight = b.props.lineHeight;
    }
  });
  return s;
}

function ytId(url){
  const m = String(url || '').match(/(?:youtu\.be\/|v=|embed\/|shorts\/)([\w-]{6,})/);
  return m ? m[1] : null;
}
function btnClass(style, size){
  return 'bf-btn bf-btn-' + (style || 'solid') + ' bf-btn-' + (size || 'medium');
}

let needsRuntime = { countdown:false, form:false };

function blockHTML(b){
  if (!b || !DEFS[b.type]) return '';
  const p = { ...DEF_DEFAULTS[b.type], ...(b.props || {}) };
  try {
    return blockHTMLInner(b, p);
  } catch (err){
    return '';
  }
}

function blockHTMLInner(b, p){
  switch (b.type){

    case 'announcement': {
      const link = p.linkLabel ? ' <a href="' + escAttr(p.link || '#') + '">' + esc(p.linkLabel) + ' →</a>' : '';
      return '<div class="bf-announce">' + esc(p.text) + link + '</div>';
    }

    case 'navbar': {
      const links = (p.links || '').split(',').map(s => s.trim()).filter(Boolean)
        .map(l => '<a href="#' + slug(l) + '">' + esc(l) + '</a>').join('');
      const ctaBtn = p.ctaLabel
        ? '<a class="bf-btn bf-btn-solid bf-btn-small" href="' + escAttr(p.ctaLink || '#') + '">' + esc(p.ctaLabel) + '</a>' : '';
      return '<nav class="bf-nav' + (p.sticky === 'yes' ? ' bf-sticky' : '') + '">'
        + '<div class="bf-wrap bf-nav-in"><span class="bf-brand">' + esc(p.brand) + '</span>'
        + '<div class="bf-links">' + links + ctaBtn + '</div></div></nav>';
    }

    case 'hero': {
      const pads = { 'compact':'48px 0', 'normal':'88px 0', 'tall':'140px 0', 'full-screen':'0' };
      let bgStyle = '';
      if (p.bg === 'solid') bgStyle = 'background:var(--accent);';
      else if (p.bg === 'image' && p.bgImage)
        bgStyle = 'background:linear-gradient(rgba(0,0,0,.45),rgba(0,0,0,.45)),url(' + escAttr(p.bgImage) + ') center/cover;';
      const full = p.size === 'full-screen' ? 'min-height:100vh;display:flex;align-items:center;' : '';
      const b1 = p.btn1Label ? '<a class="bf-btn bf-hero-btn bf-btn-medium" href="' + escAttr(p.btn1Link || '#') + '">' + esc(p.btn1Label) + '</a>' : '';
      const b2 = p.btn2Label ? '<a class="bf-btn bf-hero-btn2 bf-btn-medium" href="' + escAttr(p.btn2Link || '#') + '">' + esc(p.btn2Label) + '</a>' : '';
      return '<section class="bf-hero" style="padding:' + (pads[p.size] || pads.normal) + ';' + full + bgStyle
        + 'text-align:' + p.align + '"><div class="bf-wrap" style="width:100%">'
        + '<h1>' + esc(p.title) + '</h1><p>' + esc(p.subtitle).replace(/\n/g,'<br>') + '</p>'
        + '<div class="bf-hero-btns" style="justify-content:' + (p.align === 'center' ? 'center' : 'flex-start') + '">' + b1 + b2 + '</div>'
        + '</div></section>';
    }

    case 'cta':
      return '<div class="bf-cta"><div class="bf-wrap"><h2>' + esc(p.title) + '</h2>'
        + (p.subtitle ? '<p>' + esc(p.subtitle) + '</p>' : '')
        + (p.btnLabel ? '<a class="bf-btn bf-cta-btn bf-btn-large" href="' + escAttr(p.btnLink || '#') + '">' + esc(p.btnLabel) + '</a>' : '')
        + '</div></div>';

    case 'banner': {
      const h = parseInt(p.height, 10) || 280;
      const txt = p.text ? '<div class="bf-banner-txt">' + esc(p.text) + '</div>' : '';
      return '<div class="bf-banner" style="height:' + h + 'px;background-image:url(' + escAttr(p.src) + ')">' + txt + '</div>';
    }

    case 'footer': {
      const links = (p.links || '').split(',').map(s => s.trim()).filter(Boolean)
        .map(l => '<a href="#' + slug(l) + '">' + esc(l) + '</a>').join('');
      return '<footer class="bf-footer"><div class="bf-wrap">'
        + (links ? '<div class="bf-foot-links">' + links + '</div>' : '')
        + '<div>' + esc(p.text) + '</div></div></footer>';
    }

    case 'heading': {
      const color = p.color === 'accent' ? 'color:var(--accent);' : '';
      const tag = ['h1','h2','h3','h4'].includes(p.size) ? p.size : 'h2';
      return '<div class="bf-wrap"><' + tag + ' id="' + slug(p.text) + '" style="text-align:' + p.align + ';' + color + '">'
        + esc(p.text) + '</' + tag + '></div>';
    }

    case 'paragraph': {
      const sizes = { small:'.9rem', normal:'1rem', large:'1.18rem' };
      const tone = p.tone === 'muted' ? 'opacity:.68;' : '';
      return '<div class="bf-wrap"><p style="text-align:' + p.align + ';font-size:' + (sizes[p.size] || '1rem') + ';' + tone + '">'
        + esc(p.text).replace(/\n/g,'<br>') + '</p></div>';
    }

    case 'button':
      return '<div class="bf-wrap" style="text-align:' + p.align + '"><a class="' + btnClass(p.style, p.size)
        + '" href="' + escAttr(p.link || '#') + '">' + esc(p.label) + '</a></div>';

    case 'image': {
      const radius = p.corners === 'circle' ? '50%' : p.corners === 'round' ? '18px'
        : p.corners === 'square' ? '0' : 'var(--r)';
      const shadow = p.shadow === 'soft' ? 'box-shadow:0 14px 34px rgba(0,0,0,.18);' : '';
      const cap = p.caption ? '<figcaption class="bf-cap">' + esc(p.caption) + '</figcaption>' : '';
      return '<div class="bf-wrap"><figure class="bf-fig" style="width:' + (parseInt(p.width,10) || 100) + '%">'
        + '<img class="bf-img" style="border-radius:' + radius + ';' + shadow + '" src="' + escAttr(p.src)
        + '" alt="' + escAttr(p.alt) + '">' + cap + '</figure></div>';
    }

    case 'gallery': {
      const imgs = (p.images || '').split(',').map(s => s.trim()).filter(Boolean)
        .map(src => '<img src="' + escAttr(src) + '" alt="" loading="lazy">').join('');
      return '<div class="bf-wrap"><div class="bf-gallery" style="grid-template-columns:repeat('
        + (parseInt(p.columns,10) || 3) + ',1fr)">' + imgs + '</div></div>';
    }

    case 'video': {
      const id = ytId(p.url);
      if (!id) return p.url
        ? '<div class="bf-wrap"><p><a href="' + escAttr(p.url) + '">' + esc(p.url) + '</a></p></div>' : '';
      return '<div class="bf-wrap"><div class="bf-video"><iframe src="https://www.youtube.com/embed/'
        + escAttr(id) + '" title="Video" allowfullscreen loading="lazy"></iframe></div></div>';
    }

    case 'audio':
      if (!p.src) return '';
      return '<div class="bf-wrap">' + (p.title ? '<p class="bf-audio-title">' + esc(p.title) + '</p>' : '')
        + '<audio class="bf-audio" controls src="' + escAttr(p.src) + '"></audio></div>';

    case 'list': {
      const items = (p.items || '').split(',').map(s => s.trim()).filter(Boolean);
      const colStyle = p.columns === '2' ? 'columns:2;column-gap:36px;' : '';
      if (p.kind === 'numbered')
        return '<div class="bf-wrap"><ol class="bf-list" style="' + colStyle + '">'
          + items.map(i => '<li>' + esc(i) + '</li>').join('') + '</ol></div>';
      if (p.kind === 'checks')
        return '<div class="bf-wrap"><ul class="bf-list bf-checks" style="' + colStyle + '">'
          + items.map(i => '<li><span class="bf-check">✓</span>' + esc(i) + '</li>').join('') + '</ul></div>';
      return '<div class="bf-wrap"><ul class="bf-list" style="' + colStyle + '">'
        + items.map(i => '<li>' + esc(i) + '</li>').join('') + '</ul></div>';
    }

    case 'quote': {
      const cite = p.by ? '<cite>— ' + esc(p.by) + '</cite>' : '';
      if (p.style === 'big')
        return '<div class="bf-wrap"><blockquote class="bf-quote-big">"' + esc(p.text) + '"' + cite + '</blockquote></div>';
      const card = p.style === 'card' ? ' bf-quote-card' : '';
      return '<div class="bf-wrap"><blockquote class="bf-quote' + card + '">"' + esc(p.text) + '"' + cite + '</blockquote></div>';
    }

    case 'card': {
      const btn = p.btnLabel
        ? '<a class="bf-btn bf-btn-soft bf-btn-small" href="' + escAttr(p.btnLink || '#') + '">' + esc(p.btnLabel) + '</a>' : '';
      return '<div class="bf-card" style="text-align:' + p.align + '">'
        + (p.emoji ? '<div class="bf-card-ico">' + esc(p.emoji) + '</div>' : '')
        + '<h3>' + esc(p.title) + '</h3><p>' + esc(p.text).replace(/\n/g,'<br>') + '</p>' + btn + '</div>';
    }

    case 'badge':
      return '<div class="bf-wrap" style="text-align:' + p.align + '"><span class="bf-badge">' + esc(p.text) + '</span></div>';

    case 'stat':
      return '<div class="bf-wrap" style="text-align:' + p.align + '"><div class="bf-stat">'
        + '<div class="bf-stat-num">' + esc(p.number) + '</div>'
        + '<div class="bf-stat-label">' + esc(p.label) + '</div></div></div>';

    case 'pricing': {
      const feats = (p.features || '').split(',').map(s => s.trim()).filter(Boolean)
        .map(f => '<li><span class="bf-check">✓</span>' + esc(f) + '</li>').join('');
      const featured = p.featured === 'yes' ? ' bf-price-featured' : '';
      return '<div class="bf-price' + featured + '">'
        + '<div class="bf-price-name">' + esc(p.name) + '</div>'
        + '<div class="bf-price-amount">' + esc(p.price) + '<span>' + esc(p.period) + '</span></div>'
        + '<ul class="bf-checks">' + feats + '</ul>'
        + (p.btnLabel ? '<a class="bf-btn bf-btn-solid bf-btn-medium" style="width:100%;text-align:center" href="'
            + escAttr(p.btnLink || '#') + '">' + esc(p.btnLabel) + '</a>' : '')
        + '</div>';
    }

    case 'testimonial': {
      const av = p.avatar ? '<img class="bf-testi-av" src="' + escAttr(p.avatar) + '" alt="">' : '';
      return '<div class="bf-testi">"' + esc(p.text) + '"'
        + '<div class="bf-testi-who">' + av + '<div><b>' + esc(p.name) + '</b>'
        + (p.role ? '<span>' + esc(p.role) + '</span>' : '') + '</div></div></div>';
    }

    case 'team':
      return '<div class="bf-team">'
        + (p.photo ? '<img src="' + escAttr(p.photo) + '" alt="' + escAttr(p.name) + '">' : '')
        + '<b>' + esc(p.name) + '</b><span>' + esc(p.role) + '</span></div>';

    case 'faq':
      return '<div class="bf-wrap"><details class="bf-faq"' + (p.open === 'yes' ? ' open' : '') + '>'
        + '<summary>' + esc(p.q) + '</summary><p>' + esc(p.a).replace(/\n/g,'<br>') + '</p></details></div>';

    case 'table': {
      const lines = String(p.rows || '').split('\n').map(l => l.trim()).filter(Boolean);
      if (!lines.length) return '';
      const cells = l => l.split('|').map(c => c.trim());
      let html = '<div class="bf-wrap"><div class="bf-table-wrap"><table class="bf-table">';
      let start = 0;
      if (p.header === 'yes'){
        html += '<thead><tr>' + cells(lines[0]).map(c => '<th>' + esc(c) + '</th>').join('') + '</tr></thead>';
        start = 1;
      }
      html += '<tbody>';
      for (let i = start; i < lines.length; i++){
        html += '<tr>' + cells(lines[i]).map(c => '<td>' + esc(c) + '</td>').join('') + '</tr>';
      }
      return html + '</tbody></table></div></div>';
    }

    case 'code':
      return '<div class="bf-wrap"><pre class="bf-code"><code>' + esc(p.code) + '</code></pre></div>';

    case 'alert': {
      const colors = { info:'#3b82f6', success:'#22c55e', warning:'#eab308', danger:'#ef4444' };
      const c = colors[p.type] || colors.info;
      return '<div class="bf-wrap"><div class="bf-alert" style="border-color:' + c
        + ';background:color-mix(in srgb, ' + c + ' 12%, transparent)">' + esc(p.text).replace(/\n/g,'<br>') + '</div></div>';
    }

    case 'progress': {
      const pct = Math.max(0, Math.min(100, parseInt(p.percent, 10) || 0));
      return '<div class="bf-wrap"><div class="bf-prog-label">' + esc(p.label) + '<span>' + pct + '%</span></div>'
        + '<div class="bf-prog"><div class="bf-prog-fill" style="width:' + pct + '%"></div></div></div>';
    }

    case 'social': {
      const links = (p.links || '').split(',').map(s => s.trim()).filter(Boolean).map(pair => {
        const i = pair.indexOf('=');
        const name = i > 0 ? pair.slice(0, i).trim() : pair;
        const url = i > 0 ? pair.slice(i + 1).trim() : '#';
        return '<a class="bf-social" href="' + escAttr(url) + '" target="_blank" rel="noopener">' + esc(name) + '</a>';
      }).join('');
      return '<div class="bf-wrap" style="text-align:' + p.align + '">' + links + '</div>';
    }

    case 'form': {
      needsRuntime.form = true;
      const f = p.fields || 'name-email-message';
      let inputs = '';
      if (f.includes('name')) inputs += '<input type="text" name="name" placeholder="Your name" required>';
      if (f.includes('email')) inputs += '<input type="email" name="email" placeholder="Your email" required>';
      inputs += '<textarea name="message" placeholder="Your message" rows="4" required></textarea>';
      return '<div class="bf-wrap"><div class="bf-form-card">'
        + (p.title ? '<h3>' + esc(p.title) + '</h3>' : '')
        + '<form class="bf-form" data-bf-mailto="' + escAttr(p.email) + '">' + inputs
        + '<button class="bf-btn bf-btn-solid bf-btn-medium" type="submit">' + esc(p.btnLabel) + '</button>'
        + '</form></div></div>';
    }

    case 'map': {
      if (!p.place) return '';
      const h = parseInt(p.height, 10) || 320;
      return '<div class="bf-wrap"><iframe class="bf-map" style="height:' + h + 'px" loading="lazy" '
        + 'src="https://www.google.com/maps?q=' + encodeURIComponent(p.place) + '&output=embed"></iframe></div>';
    }

    case 'countdown': {
      needsRuntime.countdown = true;
      return '<div class="bf-wrap"><div class="bf-count" data-target="' + escAttr(p.target)
        + '" data-done="' + escAttr(p.doneText) + '">'
        + ['Days','Hours','Mins','Secs'].map(l =>
            '<div class="bf-count-cell"><b>--</b><span>' + l + '</span></div>').join('')
        + '</div></div>';
    }

    case 'marquee': {
      const speeds = { slow:'34s', normal:'18s', fast:'9s' };
      const txt = esc(p.text) + ' \u00a0\u00a0\u00a0 ';
      return '<div class="bf-marquee"><span style="animation-duration:' + (speeds[p.speed] || '18s') + '">'
        + txt + txt + txt + '</span></div>';
    }

    case 'columns': {
      const count = parseInt(p.count, 10) || 2;
      const gaps = { small:'12px', medium:'24px', large:'40px' };
      const cardCls = p.cards === 'on' ? ' bf-col-card' : '';
      const valign = p.valign === 'middle' ? 'align-items:center;' : '';
      const children = Array.isArray(b.children) ? b.children : [];
      const cols = [];
      for (let c = 0; c < count; c++){
        const inner = (children[c] || []).map(blockHTML).join('\n');
        cols.push('<div class="bf-col' + cardCls + '">' + inner + '</div>');
      }
      return '<div class="bf-wrap"><div class="bf-cols" style="grid-template-columns:repeat(' + count
        + ',1fr);gap:' + (gaps[p.gap] || '24px') + ';' + valign + '">' + cols.join('') + '</div></div>';
    }

    case 'section': {
      const pads = { small:'26px 0', medium:'52px 0', large:'90px 0' };
      const bg = p.tint === 'accent' ? 'background:color-mix(in srgb, var(--accent) 12%, transparent);'
        : p.tint === 'card' ? 'background:var(--card);' : '';
      const inner = p.text ? '<div class="bf-wrap" style="text-align:center"><p style="font-size:1.1rem">' + esc(p.text) + '</p></div>' : '';
      return '<div class="bf-band" style="' + bg + 'padding:' + (pads[p.height] || pads.medium) + '">' + inner + '</div>';
    }

    case 'spacer':
      return '<div style="height:' + (parseInt(p.height, 10) || 0) + 'px"></div>';

    case 'divider':
      if (p.style === 'dots') return '<div class="bf-wrap bf-dots">• • •</div>';
      if (p.style === 'fade') return '<div class="bf-wrap"><hr class="bf-hr bf-hr-fade"></div>';
      return '<div class="bf-wrap"><hr class="bf-hr"></div>';

    case 'anchor':
      return '<span id="' + slug(p.name) + '"></span>';

    case 'theme': case 'accent': case 'font': case 'page':
      return '';
    default:
      return '';
  }
}

/* runtime JS for exported sites (countdown + mailto form) */
const SCRIPT_OPEN = '<scr' + 'ipt>';
const SCRIPT_CLOSE = '</scr' + 'ipt>';

function runtimeJS(){
  const parts = [];
  if (needsRuntime.countdown){
    parts.push(
      'document.querySelectorAll(".bf-count").forEach(function(el){'
      + 'var t=new Date(el.dataset.target.replace(" ","T"));'
      + 'if(isNaN(t)){el.textContent="Invalid countdown date";return}'
      + 'var cells=el.querySelectorAll("b");'
      + 'function tick(){var d=t-Date.now();'
      + 'if(d<=0){el.textContent=el.dataset.done||"Done!";clearInterval(iv);return}'
      + 'var s=Math.floor(d/1000);'
      + 'cells[0].textContent=Math.floor(s/86400);'
      + 'cells[1].textContent=String(Math.floor(s/3600)%24).padStart(2,"0");'
      + 'cells[2].textContent=String(Math.floor(s/60)%60).padStart(2,"0");'
      + 'cells[3].textContent=String(s%60).padStart(2,"0");}'
      + 'var iv=setInterval(tick,1000);tick();});'
    );
  }
  if (needsRuntime.form){
    parts.push(
      'document.querySelectorAll(".bf-form").forEach(function(f){'
      + 'f.addEventListener("submit",function(e){e.preventDefault();'
      + 'var d=new FormData(f),b="";'
      + 'd.forEach(function(v,k){b+=k+": "+v+"\\n"});'
      + 'location.href="mailto:"+f.dataset.bfMailto'
      + '+"?subject="+encodeURIComponent("Message from my site")'
      + '+"&body="+encodeURIComponent(b);});});'
    );
  }
  return parts.length ? SCRIPT_OPEN + parts.join('\n') + SCRIPT_CLOSE : '';
}

function faviconTag(){
  const s = state.site || {};
  if (s.favUrl) return '<link rel="icon" href="' + escAttr(s.favUrl) + '">\n';
  const emoji = s.favEmoji || '🌐';
  const svg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="88">' + emoji + '</text></svg>';
  return '<link rel="icon" href="data:image/svg+xml,' + encodeURIComponent(svg) + '">\n';
}

function buildSiteHTML(){
  needsRuntime = { countdown:false, form:false };
  const s = collectStyles();
  const t = THEMES[s.theme] || THEMES['minimal-light'];
  const site = state.site || {};
  let body = '';
  try { body = state.blocks.map(blockHTML).filter(Boolean).join('\n'); }
  catch (err) { body = ''; }

  const animated = (s.theme || '').includes('✨');

  return '<!DOCTYPE html>\n<html lang="en">\n<head>\n<meta charset="UTF-8">\n'
    + '<meta name="viewport" content="width=device-width, initial-scale=1.0">\n'
    + '<title>' + esc(site.title || 'My Site') + '</title>\n'
    + (site.desc ? '<meta name="description" content="' + escAttr(site.desc) + '">\n' : '')
    + faviconTag()
    + '<style>\n'
    + ':root{--accent:' + s.accent + ';--bg:' + t.bg + ';--txt:' + t.txt + ';--card:' + t.card
    + ';--line:' + t.line + ';--r:' + RADII[s.corners] + '}\n'
    + '*{box-sizing:border-box;margin:0;padding:0}\n'
    + 'html{scroll-behavior:smooth;scrollbar-color:var(--line) var(--bg)}\n'
    + '::-webkit-scrollbar{width:11px;height:11px}\n'
    + '::-webkit-scrollbar-track{background:var(--bg)}\n'
    + '::-webkit-scrollbar-thumb{background:var(--line);border-radius:6px;border:2px solid var(--bg)}\n'
    + '::-webkit-scrollbar-thumb:hover{background:color-mix(in srgb, var(--line) 55%, var(--txt))}\n'
    + 'body{background:var(--bg);color:var(--txt);font-family:' + FONTS[s.font] + ';line-height:' + LINEH[s.lineHeight] + '}\n'
    + 'h1,h2,h3,h4{line-height:1.22;margin:12px 0;font-weight:' + HEADW[s.headings] + '}\n'
    + 'h1{font-size:2.7rem}h2{font-size:2rem}h3{font-size:1.4rem}h4{font-size:1.12rem}\n'
    + '.bf-wrap{max-width:' + WIDTHS[s.width] + ';margin:0 auto;padding:12px 24px}\n'
    + '.bf-announce{background:var(--accent);color:#fff;text-align:center;padding:9px 16px;font-size:.92rem}\n'
    + '.bf-announce a{color:#fff;font-weight:700}\n'
    + '.bf-nav{border-bottom:1px solid var(--line);background:var(--card);z-index:50}\n'
    + '.bf-sticky{position:sticky;top:0}\n'
    + '.bf-nav-in{display:flex;align-items:center;justify-content:space-between;padding-top:14px;padding-bottom:14px}\n'
    + '.bf-brand{font-weight:800;letter-spacing:.4px;font-size:1.05rem}\n'
    + '.bf-links{display:flex;align-items:center;gap:22px;flex-wrap:wrap}\n'
    + '.bf-links a{text-decoration:none;color:var(--txt);opacity:.78;font-size:.95rem}\n'
    + '.bf-links a:hover{opacity:1;color:var(--accent)}\n'
    + '.bf-hero{background:' + t.heroGrad + ';color:' + t.heroTxt + '}\n'
    + '.bf-hero h1{margin-bottom:14px}\n'
    + '.bf-hero p{font-size:1.16rem;opacity:.93;margin-bottom:28px;max-width:640px;display:inline-block}\n'
    + '.bf-hero-btns{display:flex;gap:12px;flex-wrap:wrap}\n'
    + '.bf-cta{background:linear-gradient(135deg, var(--accent), color-mix(in srgb, var(--accent) 60%, #000));color:#fff;text-align:center;padding:58px 0;margin:24px 0}\n'
    + '.bf-cta p{opacity:.92;margin-bottom:22px}\n'
    + '.bf-cta-btn{background:#fff;color:var(--accent)}\n'
    + '.bf-cta-btn:hover{filter:brightness(.95)}\n'
    + '.bf-banner{background-size:cover;background-position:center;display:flex;align-items:center;justify-content:center;margin:14px 0}\n'
    + '.bf-banner-txt{background:rgba(0,0,0,.5);color:#fff;padding:14px 30px;border-radius:var(--r);font-size:1.5rem;font-weight:700}\n'
    + '.bf-btn{display:inline-block;text-decoration:none;font-weight:600;border-radius:var(--r);transition:filter .15s,background .15s;border:none;cursor:pointer;font-family:inherit}\n'
    + '.bf-btn-small{padding:8px 16px;font-size:.88rem}\n'
    + '.bf-btn-medium{padding:12px 24px;font-size:1rem}\n'
    + '.bf-btn-large{padding:16px 34px;font-size:1.12rem}\n'
    + '.bf-btn-solid{background:var(--accent);color:#fff}\n'
    + '.bf-btn-solid:hover{filter:brightness(1.12)}\n'
    + '.bf-btn-outline{border:2px solid var(--accent);color:var(--accent);background:transparent}\n'
    + '.bf-btn-outline:hover{background:color-mix(in srgb, var(--accent) 12%, transparent)}\n'
    + '.bf-btn-soft{background:color-mix(in srgb, var(--accent) 14%, transparent);color:var(--accent)}\n'
    + '.bf-btn-soft:hover{background:color-mix(in srgb, var(--accent) 24%, transparent)}\n'
    + '.bf-hero-btn{background:rgba(255,255,255,.18);border:1px solid rgba(255,255,255,.6);color:#fff;backdrop-filter:blur(4px)}\n'
    + '.bf-hero-btn:hover{background:rgba(255,255,255,.3)}\n'
    + '.bf-hero-btn2{background:transparent;border:1px solid rgba(255,255,255,.45);color:#fff}\n'
    + '.bf-hero-btn2:hover{background:rgba(255,255,255,.12)}\n'
    + '.bf-fig{margin:0 auto}\n'
    + '.bf-img{width:100%;display:block}\n'
    + '.bf-cap{font-size:.85rem;opacity:.65;text-align:center;margin-top:8px}\n'
    + '.bf-gallery{display:grid;gap:14px}\n'
    + '.bf-gallery img{width:100%;height:100%;object-fit:cover;border-radius:var(--r);display:block;aspect-ratio:4/3}\n'
    + '.bf-video{position:relative;padding-top:56.25%;border-radius:var(--r);overflow:hidden;background:#000}\n'
    + '.bf-video iframe{position:absolute;inset:0;width:100%;height:100%;border:none}\n'
    + '.bf-audio{width:100%}\n'
    + '.bf-audio-title{font-weight:600;margin-bottom:6px}\n'
    + '.bf-list{padding-left:24px}\n'
    + '.bf-list li{margin:4px 0}\n'
    + '.bf-checks{list-style:none;padding-left:2px}\n'
    + '.bf-checks li{margin:6px 0}\n'
    + '.bf-check{color:var(--accent);font-weight:700;margin-right:9px}\n'
    + '.bf-quote{border-left:4px solid var(--accent);padding:12px 20px;font-style:italic}\n'
    + '.bf-quote-card{background:var(--card);border-radius:0 var(--r) var(--r) 0}\n'
    + '.bf-quote-big{font-size:1.6rem;text-align:center;font-style:italic;padding:18px 0;line-height:1.4}\n'
    + '.bf-quote cite,.bf-quote-big cite{display:block;margin-top:10px;font-style:normal;opacity:.65;font-size:.85em}\n'
    + '.bf-card{background:var(--card);border:1px solid var(--line);border-radius:var(--r);padding:24px;margin:8px 0}\n'
    + '.bf-card-ico{font-size:1.9rem;margin-bottom:8px}\n'
    + '.bf-card h3{margin:6px 0 8px}\n'
    + '.bf-card p{opacity:.85;margin-bottom:12px}\n'
    + '.bf-badge{display:inline-block;background:color-mix(in srgb, var(--accent) 16%, transparent);color:var(--accent);font-weight:700;font-size:.78rem;letter-spacing:.8px;text-transform:uppercase;padding:5px 13px;border-radius:99px}\n'
    + '.bf-stat{display:inline-block;padding:8px 0}\n'
    + '.bf-stat-num{font-size:3rem;font-weight:800;color:var(--accent);line-height:1.1}\n'
    + '.bf-stat-label{opacity:.7;letter-spacing:.5px}\n'
    + '.bf-price{background:var(--card);border:1px solid var(--line);border-radius:var(--r);padding:26px;margin:8px 0}\n'
    + '.bf-price-featured{border-color:var(--accent);box-shadow:0 10px 34px color-mix(in srgb, var(--accent) 28%, transparent)}\n'
    + '.bf-price-name{font-weight:700;letter-spacing:.6px;text-transform:uppercase;font-size:.85rem;opacity:.7}\n'
    + '.bf-price-amount{font-size:2.5rem;font-weight:800;margin:6px 0 12px}\n'
    + '.bf-price-amount span{font-size:1rem;font-weight:500;opacity:.6}\n'
    + '.bf-price .bf-checks{margin-bottom:18px}\n'
    + '.bf-testi{background:var(--card);border:1px solid var(--line);border-radius:var(--r);padding:22px;font-style:italic;margin:8px 0}\n'
    + '.bf-testi-who{display:flex;align-items:center;gap:12px;margin-top:14px;font-style:normal}\n'
    + '.bf-testi-who span{display:block;font-size:.85rem;opacity:.65}\n'
    + '.bf-testi-av{width:42px;height:42px;border-radius:50%;object-fit:cover}\n'
    + '.bf-team{text-align:center;padding:14px 8px}\n'
    + '.bf-team img{width:110px;height:110px;border-radius:50%;object-fit:cover;margin-bottom:10px}\n'
    + '.bf-team b{display:block}\n'
    + '.bf-team span{font-size:.88rem;opacity:.65}\n'
    + '.bf-faq{background:var(--card);border:1px solid var(--line);border-radius:var(--r);padding:14px 18px;margin:6px 0}\n'
    + '.bf-faq summary{font-weight:600;cursor:pointer}\n'
    + '.bf-faq p{margin-top:10px;opacity:.85}\n'
    + '.bf-table-wrap{overflow-x:auto}\n'
    + '.bf-table{width:100%;border-collapse:collapse}\n'
    + '.bf-table th,.bf-table td{border:1px solid var(--line);padding:9px 13px;text-align:left}\n'
    + '.bf-table th{background:var(--card)}\n'
    + '.bf-table tr:nth-child(even) td{background:color-mix(in srgb, var(--card) 55%, transparent)}\n'
    + '.bf-code{background:var(--card);border:1px solid var(--line);border-radius:var(--r);padding:16px;overflow-x:auto;font-family:ui-monospace,monospace;font-size:.9rem}\n'
    + '.bf-alert{border:1px solid;border-left-width:5px;border-radius:var(--r);padding:13px 17px}\n'
    + '.bf-prog-label{display:flex;justify-content:space-between;font-size:.9rem;margin-bottom:6px}\n'
    + '.bf-prog{height:12px;background:var(--card);border:1px solid var(--line);border-radius:99px;overflow:hidden}\n'
    + '.bf-prog-fill{height:100%;background:var(--accent);border-radius:99px;transition:width .4s}\n'
    + '.bf-social{display:inline-block;margin:4px 6px;padding:8px 18px;border:1px solid var(--line);border-radius:99px;text-decoration:none;color:var(--txt);background:var(--card)}\n'
    + '.bf-social:hover{border-color:var(--accent);color:var(--accent)}\n'
    + '.bf-form-card{background:var(--card);border:1px solid var(--line);border-radius:var(--r);padding:24px;max-width:560px;margin:0 auto}\n'
    + '.bf-form{display:flex;flex-direction:column;gap:11px;margin-top:10px}\n'
    + '.bf-form input,.bf-form textarea{background:var(--bg);border:1px solid var(--line);color:var(--txt);padding:11px 13px;border-radius:var(--r);font-family:inherit;font-size:.95rem}\n'
    + '.bf-form input:focus,.bf-form textarea:focus{outline:none;border-color:var(--accent)}\n'
    + '.bf-map{width:100%;border:1px solid var(--line);border-radius:var(--r)}\n'
    + '.bf-count{display:flex;gap:14px;justify-content:center;flex-wrap:wrap}\n'
    + '.bf-count-cell{background:var(--card);border:1px solid var(--line);border-radius:var(--r);padding:14px 18px;min-width:84px;text-align:center}\n'
    + '.bf-count-cell b{display:block;font-size:2rem;color:var(--accent)}\n'
    + '.bf-count-cell span{font-size:.75rem;letter-spacing:1px;text-transform:uppercase;opacity:.6}\n'
    + '.bf-marquee{overflow:hidden;white-space:nowrap;padding:12px 0;border-top:1px solid var(--line);border-bottom:1px solid var(--line);margin:10px 0}\n'
    + '.bf-marquee span{display:inline-block;animation:bfMarq linear infinite;font-weight:600;letter-spacing:1px}\n'
    + '@keyframes bfMarq{from{transform:translateX(0)}to{transform:translateX(-33.33%)}}\n'
    + '.bf-cols{display:grid}\n'
    + '.bf-col-card{background:var(--card);border:1px solid var(--line);border-radius:var(--r);padding:8px 6px}\n'
    + '.bf-hr{border:none;border-top:1px solid var(--line);margin:10px 0}\n'
    + '.bf-hr-fade{border:none;height:1px;background:linear-gradient(90deg,transparent,var(--line) 30%,var(--line) 70%,transparent)}\n'
    + '.bf-dots{text-align:center;color:var(--accent);letter-spacing:8px;opacity:.7}\n'
    + '.bf-band{margin:14px 0}\n'
    + '.bf-footer{border-top:1px solid var(--line);background:var(--card);margin-top:46px;text-align:center;opacity:.88;font-size:.92rem}\n'
    + '.bf-foot-links{display:flex;gap:20px;justify-content:center;margin-bottom:8px;flex-wrap:wrap}\n'
    + '.bf-foot-links a{color:var(--txt);text-decoration:none;opacity:.75}\n'
    + '.bf-foot-links a:hover{opacity:1;color:var(--accent)}\n'
    + '@media(max-width:680px){.bf-cols{grid-template-columns:1fr!important}.bf-gallery{grid-template-columns:1fr 1fr!important}'
    + '.bf-hero h1{font-size:2rem}h1{font-size:2.1rem}h2{font-size:1.6rem}}\n'
    + (t.extra || '') + '\n'
    + (animated ? REDUCED : '') + '\n'
    + '</style>\n</head>\n<body>\n' + body + '\n'
    + runtimeJS() + '\n</body>\n</html>';
}

/* ============================================================
   PREVIEW + EXPORT + SAVE/LOAD
   ============================================================ */
const frame = document.getElementById('preview');
function renderPreview(){ frame.srcdoc = buildSiteHTML(); }

function download(name, content, mime){
  const blob = new Blob([content], { type: mime });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = name;
  a.click();
  setTimeout(() => URL.revokeObjectURL(a.href), 2000);
}

document.getElementById('btn-export').addEventListener('click', () => {
  if (!state.blocks.length){ toast('Page is empty — add blocks first', true); return; }
  download('index.html', buildSiteHTML(), 'text/html');
  toast('Exported → index.html');
});

document.getElementById('btn-save').addEventListener('click', () => {
  download('blockforge-project.json',
    JSON.stringify({ v:3, nextId, site: state.site, blocks: state.blocks }, null, 2),
    'application/json');
  toast('Project saved');
});

document.getElementById('btn-load').addEventListener('click', () => document.getElementById('file-input').click());
document.getElementById('file-input').addEventListener('change', e => {
  const file = e.target.files[0];
  if (!file) return;
  const r = new FileReader();
  r.onload = () => {
    try {
      const data = JSON.parse(r.result);
      if (!Array.isArray(data.blocks)) throw new Error('bad file');
      state.blocks = data.blocks;
      state.site = Object.assign({ title:'My Site', favEmoji:'🌐', favUrl:'', desc:'' }, data.site || {});
      nextId = data.nextId || (Date.now() % 1000000);
      renderWorkspace();
      toast('Project loaded');
    } catch (err) {
      toast('Couldn\u2019t read that file', true);
    }
  };
  r.readAsText(file);
  e.target.value = '';
});

document.getElementById('btn-clear').addEventListener('click', () => {
  if (!state.blocks.length) return;
  if (confirm('Clear the whole page?')){
    state.blocks = [];
    renderWorkspace();
    toast('Page cleared');
  }
});

/* ============================================================
   PREVIEW TOGGLE + RESIZE + DEVICES
   ============================================================ */
const mainEl = document.getElementById('main');
const toggleBtn = document.getElementById('btn-preview-toggle');

function setPreviewHidden(hidden){
  mainEl.classList.toggle('pv-hidden', hidden);
  toggleBtn.textContent = hidden ? 'Show preview' : 'Hide preview';
  if (!hidden) renderPreview();
}
toggleBtn.addEventListener('click', () => setPreviewHidden(!mainEl.classList.contains('pv-hidden')));
document.getElementById('btn-preview-close').addEventListener('click', () => setPreviewHidden(true));

/* drag-to-resize */
const resizer = document.getElementById('resizer');
let pvw = Math.max(360, Math.round(window.innerWidth * 0.40));
mainEl.style.setProperty('--pvw', pvw + 'px');

resizer.addEventListener('pointerdown', e => {
  e.preventDefault();
  resizer.classList.add('active');
  frame.style.pointerEvents = 'none';
  const move = ev => {
    pvw = Math.min(window.innerWidth - 560, Math.max(300, window.innerWidth - ev.clientX - 3));
    mainEl.style.setProperty('--pvw', pvw + 'px');
  };
  const up = () => {
    resizer.classList.remove('active');
    frame.style.pointerEvents = '';
    document.removeEventListener('pointermove', move);
    document.removeEventListener('pointerup', up);
  };
  document.addEventListener('pointermove', move);
  document.addEventListener('pointerup', up);
});

const devBtns = { desktop: document.getElementById('dev-desktop'),
                  tablet:  document.getElementById('dev-tablet'),
                  mobile:  document.getElementById('dev-mobile') };
Object.entries(devBtns).forEach(([mode, btn]) => {
  btn.addEventListener('click', () => {
    frame.classList.remove('tablet','mobile');
    if (mode !== 'desktop') frame.classList.add(mode);
    Object.values(devBtns).forEach(x => x.classList.remove('on'));
    btn.classList.add('on');
  });
});

/* ============================================================
   SITE SETTINGS MODAL
   ============================================================ */
const overlay = document.getElementById('modal-overlay');
const favEmojiInput = document.getElementById('site-fav-emoji');
const favPrev = document.getElementById('fav-preview');

document.getElementById('btn-site').addEventListener('click', () => {
  document.getElementById('site-title').value = state.site.title || '';
  favEmojiInput.value = state.site.favEmoji || '';
  document.getElementById('site-fav-url').value = state.site.favUrl || '';
  document.getElementById('site-desc').value = state.site.desc || '';
  favPrev.textContent = state.site.favEmoji || '🌐';
  overlay.classList.add('open');
});
favEmojiInput.addEventListener('input', () => favPrev.textContent = favEmojiInput.value || '🌐');
document.getElementById('modal-cancel').addEventListener('click', () => overlay.classList.remove('open'));
overlay.addEventListener('click', e => { if (e.target === overlay) overlay.classList.remove('open'); });
document.getElementById('modal-apply').addEventListener('click', () => {
  state.site = {
    title: document.getElementById('site-title').value.trim() || 'My Site',
    favEmoji: favEmojiInput.value.trim() || '🌐',
    favUrl: document.getElementById('site-fav-url').value.trim(),
    desc: document.getElementById('site-desc').value.trim(),
  };
  overlay.classList.remove('open');
  renderPreview();
  toast('Site settings applied');
});

/* toast */
let toastTimer;
function toast(msg, warn){
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.toggle('warn', !!warn);
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 2200);
}

/* ============================================================
   STARTER STACK
   ============================================================ */
function starter(){
  const mk = (type, props) => {
    const b = newBlock(type);
    Object.assign(b.props, props || {});
    return b;
  };
  const cols = mk('columns', { count:'3', gap:'medium', cards:'off' });
  cols.children = [
    [ mk('card', { emoji:'⚡', title:'40 blocks', text:'Pricing, FAQs, forms, maps, countdowns, tables, galleries and more.', align:'center' }) ],
    [ mk('card', { emoji:'🎨', title:'18 themes', text:'Including five animated ones — aurora, starfield, synthwave, lava and gradient flow.', align:'center' }) ],
    [ mk('card', { emoji:'📦', title:'Real export', text:'One clean index.html with your title, favicon and meta tags baked in.', align:'center' }) ],
  ];
  state.blocks = [
    mk('theme', { name:'minimal-light' }),
    mk('accent', { color:'#5b8cff' }),
    mk('navbar', { brand:'My Site', links:'Home, Features, Contact', ctaLabel:'Sign up' }),
    mk('hero', { title:'Build sites like Scratch', subtitle:'Stack blocks. Tweak fields. Export real HTML.',
                 btn1Label:'Start stacking', btn2Label:'Learn more' }),
    mk('spacer', { height:'40' }),
    mk('badge', { text:'Why blockforge', align:'center' }),
    mk('heading', { text:'Everything snaps together', size:'h2', align:'center' }),
    mk('spacer', { height:'10' }),
    cols,
    mk('spacer', { height:'30' }),
    mk('cta', {}),
    mk('footer', { text:'© 2026 My Site', links:'Privacy, Terms' }),
  ];
}

starter();
buildCatNav();
renderPalette();
renderWorkspace();
