/* =============================================================
   Stellarminds — main.js
   Edit SETTINGS and the content lists below to update the site.
   ============================================================= */
const SETTINGS = {
  whatsapp: "919629664310",            // WhatsApp number that receives the form: country code + number, digits only
  orgTypes: ["College / University", "School", "Training Institute", "Company / Corporate", "NGO / Foundation", "Other"],
  interests: ["College Training Programs", "Technical Workshops", "Student Skill Development",
              "Value-Added Programs", "Customized Institutional Training", "Career Development"]
};

/* What We Do — each service shows a photo from assets/gallery */
const SERVICES = [
  { icon: "book", title: "Education & Coaching", img: "g03",
    desc: "Providing structured educational support and learning experiences that strengthen academic understanding and build confidence.",
    more: "Well-organised sessions, guided practice and regular feedback help learners understand their subjects with clarity.",
    inc: ["Structured academic support", "Concept-first teaching", "Progress feedback"] },
  { icon: "layers", title: "Skill Development", img: "g17",
    desc: "Helping learners develop technical, professional, and essential life skills through practical and structured learning.",
    more: "Short instruction is paired with hands-on tasks, so learners practise what they learn straight away.",
    inc: ["Technical skills", "Workplace skills", "Communication"] },
  { icon: "board", title: "Professional Training", img: "g01",
    desc: "Delivering training programs designed to strengthen practical knowledge and prepare individuals for real-world challenges.",
    more: "Focused, application-led training on emerging areas such as AR, VR and mixed reality.",
    inc: ["Application-led training", "Emerging technologies", "Flexible formats"] },
  { icon: "link", title: "Institutional Collaborations", img: "g12",
    desc: "Working with educational institutions to create meaningful training initiatives, student development programs, and collaborative learning opportunities.",
    more: "Programs are planned with each institution, from single workshops to multi-day value-added programs.",
    inc: ["Value-added programs", "Department workshops", "Plans tailored to each campus"] },
  { icon: "factory", title: "Industry-Oriented Learning", img: "g14",
    desc: "Connecting learning with practical applications through relevant training, projects, and experiential opportunities.",
    more: "Learners see how skills are used at work, including the roles and career paths they lead to.",
    inc: ["Project-based learning", "Industry-relevant tools", "Career pathways"] },
  { icon: "trend", title: "Career Development", img: "g04",
    desc: "Supporting learners in building the knowledge, confidence, and capabilities needed to progress towards their career goals.",
    more: "Learners leave with clarity on their next step and recognition for the skills they have built.",
    inc: ["Career guidance", "Confidence building", "Certificates of completion"] }
];

const STAGES = [
  ["Discover", "Understand individual potential and learning needs."],
  ["Learn", "Build strong foundations through structured education."],
  ["Apply", "Gain practical knowledge through hands-on experiences."],
  ["Grow", "Develop confidence, skills, and readiness for future opportunities."]
];

const PROGRAMS = [
  { icon: "book", title: "Academic Coaching", desc: "Structured support that strengthens subject understanding and study confidence.", for: "For learners" },
  { icon: "code", title: "Technical Training", desc: "Hands-on training in technical tools and concepts, from programming to AR/VR.", for: "For learners" },
  { icon: "user", title: "Professional Skill Development", desc: "Communication, workplace and professional skills for the next step.", for: "For graduates" },
  { icon: "flask", title: "Practical Learning Programs", desc: "Project-led programs where learners apply concepts to real tasks.", for: "For learners" },
  { icon: "people", title: "Student Development Workshops", desc: "Focused, interactive workshops on specific skills and topics.", for: "For student groups" },
  { icon: "building", title: "Institutional Training Initiatives", desc: "Value-added programs planned and delivered with colleges.", for: "For institutions" }
];

const INSTITUTION_OFFERS = [
  ["College Training Programs", "Structured training on campus, aligned with your academic calendar."],
  ["Student Skill Development", "Technical, professional and essential skills alongside the curriculum."],
  ["Technical Workshops", "Focused, hands-on sessions on practical tools and emerging technologies."],
  ["Practical Learning Initiatives", "Applied activities that turn classroom knowledge into experience."],
  ["Customized Institutional Training", "Plans shaped around your departments, goals and timelines."],
  ["Collaborative Projects", "Joint initiatives that give students team-based, experiential learning."]
];

const WHY = [
  { icon: "target", title: "Practical Learning Approach", desc: "Learners practise as they learn, so knowledge turns into ability." },
  { icon: "grid", title: "Structured Training Methodology", desc: "Every program follows a clear path: discover, learn, apply, grow." },
  { icon: "user", title: "Student-Centric Development", desc: "Learning is shaped around each learner's needs and starting point." },
  { icon: "factory", title: "Industry-Relevant Knowledge", desc: "Topics and projects reflect how skills are used in practice today." },
  { icon: "loop", title: "Continuous Learning and Improvement", desc: "Regular feedback keeps learners, and our programs, improving." },
  { icon: "seed", title: "Focus on Long-Term Growth", desc: "Foundations that serve learners well beyond a single course." }
];

/* Testimonials — student feedback shown in the horizontal scroller */
const TESTIMONIALS = [
  { quote: "The classes at Stellarminds are really helpful. The trainers explain every concept clearly, and the practical sessions make learning much easier and more interesting.", name: "Priya S.", meta: "Computer Science · KRCE" },
  { quote: "I had a great learning experience at Stellarminds. The sessions are interactive, and I gained practical knowledge that I can use in my career.", name: "Arun K.", meta: "Information Technology · MKCE" },
  { quote: "The trainers are very friendly and supportive. They encourage us to ask questions and make sure everyone understands the concepts.", name: "Keerthana M.", meta: "Electronics & Communication · SECE" },
  { quote: "Stellarminds helped me improve my technical skills and confidence. I really enjoyed the hands-on activities and practical learning sessions.", name: "Vignesh R.", meta: "Mechanical Engineering · Dhanapalan College" },
  { quote: "The teaching methodology is excellent. Complex topics are explained in a simple way, and the classroom environment is very motivating.", name: "Divya S.", meta: "Computer Applications · KRCE" },
  { quote: "What makes Stellarminds different is the practical approach to learning. Every session gives us something new to explore and understand.", name: "Karthik P.", meta: "Electrical Engineering · MKCE" },
  { quote: "I really enjoyed attending the offline classes. The trainers provide individual attention and help us improve our knowledge step by step.", name: "Nivetha R.", meta: "Business Administration · SECE" },
  { quote: "The sessions are well-organized and engaging. I gained new skills, improved my communication, and became more confident in my abilities.", name: "Santhosh M.", meta: "Information Technology · Dhanapalan College" },
  { quote: "Learning at Stellarminds has been a wonderful experience. The practical examples and interactive teaching made every class interesting.", name: "Harini V.", meta: "Computer Science · KRCE" },
  { quote: "I'm happy to be part of Stellarminds. The training sessions helped me think differently, develop new skills, and become more confident about my future.", name: "Rahul S.", meta: "Artificial Intelligence & Data Science · MKCE" }
];

/* Gallery — files live in assets/gallery. cat: sessions | recognition | certificates | video */
const SECE = "Sri Eshwar College of Engineering", KRCE = "K. Ramakrishnan College of Engineering";
const GALLERY = [
  { id: "krce-highlights", type: "video", cat: "video", title: "Highlights: AR/VR value-added program", place: KRCE },
  { id: "g12", cat: "sessions", title: "5-day value-added program: AR/VR using Unity", place: KRCE, w: 1600, h: 899 },
  { id: "g01", cat: "sessions", title: "Beyond Screens: an AR/VR/MR session", place: SECE, w: 1080, h: 597 },
  { id: "g04", cat: "certificates", title: "Participants with their certificates", place: "", w: 1600, h: 900 },
  { id: "g02", cat: "sessions", title: "Introducing immersive technologies", place: SECE, w: 1580, h: 1600 },
  { id: "g18", cat: "sessions", title: "Interactive session with students", place: SECE, w: 1600, h: 840 },
  { id: "g13", cat: "sessions", title: "Opening address", place: KRCE, w: 899, h: 1600 },
  { id: "g14", cat: "sessions", title: "Exploring careers in AR and VR", place: SECE, w: 1600, h: 912 },
  { id: "g16", cat: "sessions", title: "Programming session: data structures", place: SECE, w: 1600, h: 840 },
  { id: "g11", cat: "recognition", title: "Honoured after the AR/VR/MR session", place: SECE, w: 900, h: 1600, pos: "50% 72%" },
  { id: "g17", cat: "sessions", title: "Hands-on coding session", place: SECE, w: 1600, h: 840 },
  { id: "g15", cat: "recognition", title: "Memento from the host institution", place: SECE, w: 1600, h: 899 },
  { id: "g03", cat: "sessions", title: "Classroom workshop in progress", place: "", w: 1280, h: 720 },
  { id: "g05", cat: "recognition", title: "Felicitation by the faculty", place: SECE, w: 900, h: 1600 },
  { id: "g10", cat: "recognition", title: "With the faculty coordinators", place: SECE, w: 900, h: 1600 },
  { id: "g06", cat: "recognition", title: "Recognising active participants", place: SECE, w: 900, h: 1600 },
  { id: "g07", cat: "recognition", title: "Recognising active participants", place: SECE, w: 900, h: 1600 },
  { id: "g08", cat: "recognition", title: "Recognising active participants", place: SECE, w: 900, h: 1600 },
  { id: "g09", cat: "recognition", title: "Recognising active participants", place: SECE, w: 900, h: 1600 }
];
const CATS = [["all", "All"], ["sessions", "Sessions"], ["recognition", "Recognition"], ["certificates", "Certificates"], ["video", "Videos"]];

/* ---------- helpers ---------- */
const IC = {
  book: '<path d="M4 4h6a3 3 0 0 1 3 3v13a2 2 0 0 0-2-2H4z"/><path d="M20 4h-6a3 3 0 0 0-3 3v13a2 2 0 0 1 2-2h7z"/>',
  layers: '<path d="M12 3 2 8l10 5 10-5z"/><path d="m2 13 10 5 10-5"/>',
  board: '<rect x="3" y="4" width="18" height="12" rx="1.5"/><path d="M8 20l4-4 4 4M7 9h6M7 12h9"/>',
  link: '<circle cx="9" cy="12" r="5.5"/><circle cx="15" cy="12" r="5.5"/>',
  factory: '<path d="M3 21V10l6 4v-4l6 4V6l6 3v12z"/><path d="M8 18h2M14 18h2"/>',
  trend: '<path d="M3 17l6-6 4 4 8-8"/><path d="M15 7h6v6"/>',
  code: '<path d="m8 8-4 4 4 4M16 8l4 4-4 4M13.5 5l-3 14"/>',
  user: '<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
  people: '<circle cx="8" cy="9" r="3"/><circle cx="16" cy="9" r="3"/><path d="M2.5 20a5.5 5.5 0 0 1 11 0M10.5 20a5.5 5.5 0 0 1 11 0"/>',
  flask: '<path d="M9 3h6M10 3v6l-5.4 9.2A2 2 0 0 0 6.3 21h11.4a2 2 0 0 0 1.7-2.8L14 9V3"/><path d="M7.5 15h9"/>',
  building: '<path d="M3 21h18M4 10h16M12 3 3 8h18zM6 10v8M10 10v8M14 10v8M18 10v8"/>',
  target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.2"/>',
  grid: '<rect x="3.5" y="3.5" width="7" height="7" rx="1"/><rect x="13.5" y="3.5" width="7" height="7" rx="1"/><rect x="3.5" y="13.5" width="7" height="7" rx="1"/><rect x="13.5" y="13.5" width="7" height="7" rx="1"/>',
  loop: '<path d="M20 12a8 8 0 1 1-2.6-5.9L20 8.5"/><path d="M20 3.5v5h-5"/>',
  seed: '<path d="M12 21V11"/><path d="M12 11C12 7 9 4 4 4c0 5 3 7 8 7z"/><path d="M12 14c0-4 3-6.5 8-6.5 0 4.5-3 6.5-8 6.5z"/>',
  chev: '<path d="M9 6l6 6-6 6"/>',
  check: '<path d="M5 12.5l4.5 4.5L19 7.5"/>',
  alert: '<circle cx="12" cy="12" r="9"/><path d="M12 7.5v5.5M12 16.5h.01"/>'
};
const icon = (n, w = 1.7) => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${IC[n] || ""}</svg>`;
const use = id => `<svg aria-hidden="true"><use href="#i-${id}"/></svg>`;
const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const waLink = text => `https://wa.me/${SETTINGS.whatsapp}?text=${encodeURIComponent(text)}`;
const imgPath = (id, size) => `assets/gallery/${id}${size === "sm" ? "-sm" : ""}.jpg`;
const thumbOf = g => g.type === "video" ? `assets/gallery/${g.id}-poster.jpg` : imgPath(g.id, "sm");

/* ---------- nav ---------- */
function initNav() {
  const nav = $("#nav"), burger = $("#burger"), menu = $("#menu");
  if (!nav) return;
  const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 8);
  const close = () => { menu.classList.remove("open"); burger.setAttribute("aria-expanded", "false"); burger.setAttribute("aria-label", "Open menu"); };
  burger.addEventListener("click", () => {
    const open = !menu.classList.contains("open");
    menu.classList.toggle("open", open);
    burger.setAttribute("aria-expanded", open);
    burger.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  });
  menu.addEventListener("click", e => { if (e.target.closest("a")) close(); });
  document.addEventListener("keydown", e => { if (e.key === "Escape" && menu.classList.contains("open")) { close(); burger.focus(); } });
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // Highlight the section in view (home page only)
  const links = $$('a[href^="#"]', menu);
  if (links.length && "IntersectionObserver" in window) {
    const map = new Map(links.map(a => [a.getAttribute("href").slice(1), a]));
    const io = new IntersectionObserver(entries => entries.forEach(en => {
      if (!en.isIntersecting) return;
      links.forEach(l => l.classList.remove("active"));
      const a = map.get(en.target.id); if (a) a.classList.add("active");
    }), { rootMargin: "-45% 0px -50% 0px" });
    $$("main section[id]").forEach(s => io.observe(s));
  }
}

/* ---------- 6,300+ counter ---------- */
function initCounters() {
  $$("[data-count]").forEach(el => {
    const target = +el.dataset.count;
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const run = () => {
      const t0 = performance.now(), dur = 1600;
      const step = t => {
        const p = Math.min(1, (t - t0) / dur), v = Math.round(target * (1 - Math.pow(1 - p, 3)));
        el.textContent = v.toLocaleString("en-IN") + "+";
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };
    if ("IntersectionObserver" in window) {
      const io = new IntersectionObserver(es => { if (es[0].isIntersecting) { io.disconnect(); run(); } }, { threshold: .6 });
      io.observe(el);
    }
  });
}

/* ---------- What We Do explorer ---------- */
function initExplorer() {
  const list = $("#ex-list"), panel = $("#ex-panel");
  if (!list) return;
  list.innerHTML = SERVICES.map((s, i) => `
    <div class="ex-item">
      <button class="ex-btn" role="tab" id="ex-${i}" aria-selected="false" aria-controls="ex-panel" tabindex="-1" type="button">
        <span class="ic">${icon(s.icon)}</span><span class="t">${esc(s.title)}</span><span class="ch">${icon("chev", 2)}</span>
      </button>
      <div class="ex-inline" hidden><p>${esc(s.desc)}</p><ul>${s.inc.map(x => `<li>${esc(x)}</li>`).join("")}</ul></div>
    </div>`).join("");
  const btns = $$(".ex-btn", list);
  const select = (i, focus) => {
    btns.forEach((b, j) => { const on = j === i; b.setAttribute("aria-selected", on); b.tabIndex = on ? 0 : -1; b.nextElementSibling.hidden = !on; });
    const s = SERVICES[i];
    panel.setAttribute("aria-labelledby", "ex-" + i);
    panel.innerHTML = `
      <div class="media"><img src="${imgPath(s.img)}" alt="" loading="lazy"></div>
      <div class="body">
        <span class="big">${icon(s.icon, 1.6)}</span>
        <h3>${esc(s.title)}</h3>
        <p class="d">${esc(s.desc)}</p>
        <p class="x">${esc(s.more)}</p>
        <ul>${s.inc.map(x => `<li>${esc(x)}</li>`).join("")}</ul>
        <a class="link" href="#contact">Learn More ${use("arrow")}</a>
      </div>`;
    if (focus) btns[i].focus();
  };
  list.addEventListener("click", e => { const b = e.target.closest(".ex-btn"); if (b) select(btns.indexOf(b)); });
  list.addEventListener("keydown", e => {
    const i = btns.indexOf(document.activeElement); if (i < 0) return;
    const k = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 }[e.key];
    if (k) { e.preventDefault(); select((i + k + btns.length) % btns.length, true); }
  });
  select(0);
}

/* ---------- approach: each stage completes more of the mark ---------- */
function initStages() {
  const el = $("#stages"); if (!el) return;
  const arcs = ["M50 14 A36 36 0 0 1 86 50", "M86 50 A36 36 0 0 1 50 86", "M50 86 A36 36 0 0 1 14 50", "M14 50 A36 36 0 0 1 50 14"];
  const shift = ["translate(0 -4)", "translate(4 0)", "translate(0 4)", "translate(-4 0)"];
  const ast = '<g transform="translate(40 40)"><rect x="8.5" width="3" height="20"/><rect y="8.5" width="20" height="3"/><rect x="8.5" width="3" height="20" transform="rotate(45 10 10)"/><rect x="8.5" width="3" height="20" transform="rotate(-45 10 10)"/></g>';
  el.innerHTML = STAGES.map(([t, d], i) => `
    <li class="stage reveal">
      <svg viewBox="0 0 100 100" aria-hidden="true">${arcs.map((p, j) => `<path class="arc${j <= i ? " on" : ""}${j === i ? " last" : ""}" d="${p}" transform="${shift[j]}"/>`).join("")}<g class="core${i === 3 ? " on" : ""}">${ast}</g></svg>
      <span class="n">Stage ${i + 1} of 4</span><h3>${esc(t)}</h3><p>${esc(d)}</p>
    </li>`).join("");
}

/* ---------- simple lists ---------- */
function initLists() {
  const pg = $("#prog-grid");
  if (pg) pg.innerHTML = PROGRAMS.map(p => `<article class="prog reveal"><span class="ic">${icon(p.icon)}</span><h3>${esc(p.title)}</h3><p>${esc(p.desc)}</p><span class="for">${esc(p.for)}</span></article>`).join("");
  const il = $("#inst-list");
  if (il) il.innerHTML = INSTITUTION_OFFERS.map(([t, d]) => `<li class="reveal"><b>${use("ast")}${esc(t)}</b><span>${esc(d)}</span></li>`).join("");
  const wl = $("#why-list");
  if (wl) wl.innerHTML = WHY.map(w => `<li class="reveal"><span class="ic">${icon(w.icon)}</span><h3>${esc(w.title)}</h3><p>${esc(w.desc)}</p></li>`).join("");
  initQuotes();
  $$("[data-year]").forEach(e => e.textContent = new Date().getFullYear());
}

/* ---------- testimonials scroller ---------- */
function initQuotes() {
  const track = $("#quotes"); if (!track) return;
  const initials = n => n.replace(/\./g, "").split(" ").map(w => w[0]).slice(0, 2).join("");
  track.innerHTML = TESTIMONIALS.map((t, i) => `
    <figure class="quote" role="group" aria-roledescription="testimonial" aria-label="${i + 1} of ${TESTIMONIALS.length}">
      <blockquote>${esc(t.quote)}</blockquote>
      <footer><span class="av" aria-hidden="true">${esc(initials(t.name))}</span><span><b>${esc(t.name)}</b><span>${esc(t.meta)}</span></span></footer>
    </figure>`).join("");
  const prev = $("#q-prev"), next = $("#q-next"), bar = $("#q-bar");
  const card = () => (track.querySelector(".quote")?.getBoundingClientRect().width || 320) + 16;
  const update = () => {
    const max = track.scrollWidth - track.clientWidth;
    if (prev) prev.disabled = track.scrollLeft <= 4;
    if (next) next.disabled = track.scrollLeft >= max - 4;
    if (bar) bar.style.width = (max > 0 ? Math.max(12, (track.clientWidth / track.scrollWidth) * 100) : 100) + "%",
             bar.style.transform = `translateX(${max > 0 ? (track.scrollLeft / max) * ((100 / parseFloat(bar.style.width)) * 100 - 100) : 0}%)`;
  };
  prev?.addEventListener("click", () => track.scrollBy({ left: -card(), behavior: "smooth" }));
  next?.addEventListener("click", () => track.scrollBy({ left: card(), behavior: "smooth" }));
  track.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update);
  track.addEventListener("keydown", e => {
    if (e.key === "ArrowRight") { e.preventDefault(); track.scrollBy({ left: card(), behavior: "smooth" }); }
    if (e.key === "ArrowLeft") { e.preventDefault(); track.scrollBy({ left: -card(), behavior: "smooth" }); }
  });
  update();
}

/* ---------- gallery tiles + lightbox ---------- */
let lbItems = [], lbIndex = 0;
function tileHTML(g, i, cls = "") {
  const media = g.type === "video"
    ? `<img src="${thumbOf(g)}" alt="" loading="lazy"><span class="play"><span>${use("play")}</span></span>`
    : `<img src="${thumbOf(g)}" alt="${esc(g.title)}" loading="lazy" width="${g.w}" height="${g.h}"${g.pos ? ` style="object-position:${g.pos}"` : ""}>`;
  return `<button class="tile${g.type === "video" ? " video" : ""} ${cls}" type="button" data-i="${i}" aria-label="${g.type === "video" ? "Play video: " : "View photo: "}${esc(g.title)}">
    ${media}<span class="cap">${esc(g.title)}${g.place ? `<small>${esc(g.place)}</small>` : ""}</span></button>`;
}
function openLightbox(items, i) {
  const dlg = $("#lightbox"); if (!dlg) return;
  lbItems = items; lbIndex = i; renderLightbox();
  if (dlg.showModal) dlg.showModal(); else dlg.setAttribute("open", "");
}
function renderLightbox() {
  const g = lbItems[lbIndex], stage = $("#lb-stage");
  stage.innerHTML = g.type === "video"
    ? `<video src="assets/gallery/${g.id}.mp4" poster="${thumbOf(g)}" controls playsinline autoplay></video>`
    : `<img src="${imgPath(g.id)}" alt="${esc(g.title)}">`;
  $("#lb-cap").innerHTML = `<b>${esc(g.title)}</b>${g.place ? `<span>${esc(g.place)}</span>` : ""}`;
  $("#lb-count").textContent = `${lbIndex + 1} / ${lbItems.length}`;
}
function initLightbox() {
  const dlg = $("#lightbox"); if (!dlg) return;
  const step = d => { lbIndex = (lbIndex + d + lbItems.length) % lbItems.length; renderLightbox(); };
  const close = () => { $("#lb-stage").innerHTML = ""; dlg.close ? dlg.close() : dlg.removeAttribute("open"); };
  dlg.addEventListener("click", e => {
    const b = e.target.closest("[data-lb]");
    if (b) { const a = b.dataset.lb; if (a === "close") close(); else step(a === "next" ? 1 : -1); return; }
    if (e.target === dlg || e.target.classList.contains("lb-stage")) close();
  });
  dlg.addEventListener("keydown", e => { if (e.key === "ArrowRight") step(1); if (e.key === "ArrowLeft") step(-1); });
  dlg.addEventListener("close", () => { $("#lb-stage").innerHTML = ""; });
  let x0 = null;
  dlg.addEventListener("touchstart", e => { x0 = e.touches[0].clientX; }, { passive: true });
  dlg.addEventListener("touchend", e => { if (x0 === null) return; const dx = e.changedTouches[0].clientX - x0; if (Math.abs(dx) > 50) step(dx < 0 ? 1 : -1); x0 = null; });
}
function initMosaic() {
  const el = $("#mosaic"); if (!el) return;
  const pick = ["krce-highlights", "g04", "g11", "g14", "g17"].map(id => GALLERY.find(g => g.id === id));
  const cls = ["m-tall", "m-wide", "m-tall", "", ""];
  el.innerHTML = pick.map((g, i) => tileHTML(g, i, cls[i])).join("");
  el.addEventListener("click", e => { const t = e.target.closest(".tile"); if (t) openLightbox(pick, +t.dataset.i); });
}
function initGalleryPage() {
  const grid = $("#masonry"), filters = $("#filters"); if (!grid) return;
  let current = "all";
  const counts = c => c === "all" ? GALLERY.length : GALLERY.filter(g => g.cat === c).length;
  filters.innerHTML = CATS.filter(([c]) => counts(c) > 0).map(([c, l]) => `<button type="button" data-cat="${c}" aria-pressed="${c === "all"}">${l}<span>${counts(c)}</span></button>`).join("");
  const render = () => {
    const items = current === "all" ? GALLERY : GALLERY.filter(g => g.cat === current);
    grid.innerHTML = items.map((g, i) => tileHTML(g, i)).join("");
    grid.onclick = e => { const t = e.target.closest(".tile"); if (t) openLightbox(items, +t.dataset.i); };
  };
  filters.addEventListener("click", e => {
    const b = e.target.closest("button"); if (!b) return;
    current = b.dataset.cat;
    $$("button", filters).forEach(x => x.setAttribute("aria-pressed", x === b));
    render();
  });
  render();
}

/* ---------- the interest form → WhatsApp ---------- */
function initForm() {
  const form = $("#interest-form"); if (!form) return;
  const card = $("#form-card"), original = form.cloneNode(true);
  bindForm(form, card, original);
}
function bindForm(form, card, original, restore) {
  $("#f-type", form).insertAdjacentHTML("beforeend", SETTINGS.orgTypes.map(t => `<option>${esc(t)}</option>`).join(""));
  $("#f-int", form).innerHTML = SETTINGS.interests.map((t, i) =>
    `<label class="chip"><input type="checkbox" name="interest" value="${esc(t)}" id="f-int-${i}"><span>${esc(t)}</span></label>`).join("");
  if (restore) {
    Object.entries(restore.data).forEach(([k, v]) => { const el = form.querySelector(`[name="${k}"]:not([type=checkbox])`); if (el) el.value = v; });
    $$("input[name=interest]", form).forEach(c => c.checked = restore.interests.includes(c.value));
  }
  const banner = $("#form-banner", form);
  const rules = {
    name: v => v.trim().length < 2 ? "Enter your full name." : "",
    org: v => v.trim().length < 2 ? "Enter the name of your organisation or institution." : "",
    type: v => v ? "" : "Choose your organisation type.",
    email: v => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()) ? "" : "Enter a valid email address, like name@college.edu.",
    phone: v => { const d = v.replace(/\D/g, ""); return d.length >= 10 && d.length <= 13 && !/[^\d+\s()-]/.test(v) ? "" : "Enter a valid phone number with 10 to 13 digits."; }
  };
  const showErr = (id, msg, el) => { $("#" + id + "-e", form).textContent = msg; if (el) el.setAttribute("aria-invalid", msg ? "true" : "false"); };
  const check = el => { const m = rules[el.name](el.value); showErr(el.id, m, el); return !m; };
  const checkInterests = () => {
    const ok = $$("input[name=interest]:checked", form).length > 0;
    showErr("f-int", ok ? "" : "Choose at least one area of interest.");
    $("#f-int", form).setAttribute("aria-invalid", ok ? "false" : "true");
    return ok;
  };
  const fields = $$("#f-name,#f-org,#f-type,#f-email,#f-phone", form);
  fields.forEach(el => {
    el.addEventListener("blur", () => { if (el.value || el.getAttribute("aria-invalid") === "true") check(el); });
    el.addEventListener("input", () => { if (el.getAttribute("aria-invalid") === "true") check(el); });
  });
  form.addEventListener("change", e => { if (e.target.name === "interest" && $("#f-int", form).getAttribute("aria-invalid") === "true") checkInterests(); });

  form.addEventListener("submit", e => {
    e.preventDefault();
    const bad = fields.filter(el => !check(el)), intOk = checkInterests();
    if (bad.length || !intOk) {
      const n = bad.length + (intOk ? 0 : 1);
      banner.hidden = false;
      banner.innerHTML = `${icon("alert")}<span>Please complete the ${n === 1 ? "highlighted field" : n + " highlighted fields"} to continue.</span>`;
      (bad[0] || $("#f-int-0", form)).focus();
      return;
    }
    banner.hidden = true;
    const d = Object.fromEntries(new FormData(form)); delete d.interest;
    const interests = $$("input[name=interest]:checked", form).map(c => c.value);
    const role = d.role.trim();
    const text = [
      "Hello Stellarminds,",
      "We are interested in collaborating with you.",
      "",
      `*Name:* ${d.name.trim()}${role ? " (" + role + ")" : ""}`,
      `*Organisation:* ${d.org.trim()}`,
      `*Type:* ${d.type}`,
      `*Email:* ${d.email.trim()}`,
      `*Phone:* ${d.phone.trim()}`,
      `*Interested in:* ${interests.join(", ")}`,
      d.message.trim() ? `*Message:* ${d.message.trim()}` : null
    ].filter(x => x !== null).join("\n");
    const url = waLink(text);

    // Open WhatsApp straight away; the panel below is the fallback if the browser blocks the new tab.
    try { window.open(url, "_blank", "noopener"); } catch (_) { /* fall back to the button */ }

    card.innerHTML = `<div class="done" role="status" tabindex="-1">
      <span class="ok">${use("wa")}</span>
      <h3>Your message is ready</h3>
      <p>WhatsApp should open with your details. Press <strong>send</strong> there to share them with our team. If it didn't open, use the button below.</p>
      <pre class="preview" aria-label="Message preview">${esc(text)}</pre>
      <div class="ctas"><a class="btn btn-wa" href="${url}" target="_blank" rel="noopener">${use("wa")}Open WhatsApp</a><button class="btn btn-outline" type="button" data-edit>Edit details</button></div>
    </div>`;
    $(".done", card).focus();
    $("[data-edit]", card).addEventListener("click", () => {
      const fresh = original.cloneNode(true);
      card.innerHTML = ""; card.appendChild(fresh);
      bindForm(fresh, card, original, { data: d, interests });
      $("#f-name", fresh).focus();
    });
  });
}

initNav();
initCounters();
initExplorer();
initStages();
initLists();
initLightbox();
initMosaic();
initGalleryPage();
initForm();
