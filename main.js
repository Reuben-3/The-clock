// Sidebar logic (robust + accessible)
(function() {
  const sidebar = document.getElementById("sidebar");
  const hamburger = document.getElementById("hamburger");
  const overlay = document.getElementById("overlay");
  const links = document.querySelectorAll(".nav-link");
  
  function openMenu() {
    sidebar.classList.add("is-open");
    overlay.classList.add("is-open");
    hamburger.setAttribute("aria-expanded", "true");
    sidebar.setAttribute("aria-hidden", "false");
    overlay.setAttribute("aria-hidden", "false");
    document.body.classList.add("body--locked");
  }
  
  function closeMenu() {
    sidebar.classList.remove("is-open");
    overlay.classList.remove("is-open");
    hamburger.setAttribute("aria-expanded", "false");
    sidebar.setAttribute("aria-hidden", "true");
    overlay.setAttribute("aria-hidden", "true");
    document.body.classList.remove("body--locked");
  }
  
  function toggleMenu() {
    const expanded = hamburger.getAttribute("aria-expanded") === "true";
    expanded ? closeMenu() : openMenu();
  }
  
  // Events
  hamburger.addEventListener("click", toggleMenu);
  overlay.addEventListener("click", closeMenu);
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });
  links.forEach(a => a.addEventListener("click", closeMenu));
  
  // --- Tiny live clock demo (so you see JS is wired) ---
  const liveEl = document.getElementById("liveTime");
  if (liveEl) {
    const pad = (n) => String(n).padStart(2, "0");
    const tick = () => {
      const d = new Date();
      const h = pad(d.getHours());
      const m = pad(d.getMinutes());
      const s = pad(d.getSeconds());
      liveEl.textContent = `${h}:${m}:${s}`;
    };
    tick();
    setInterval(tick, 1000);
  }
})();