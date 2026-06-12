document.addEventListener("DOMContentLoaded", loadLayout);

async function loadLayout() {
  await Promise.all([
    loadComponent("site-header", "/components/header.html"),
    loadComponent("site-footer", "/components/footer.html")
  ]);

  setActiveNavLink();
}

async function loadComponent(targetId, url) {
  const target = document.getElementById(targetId);
  if (!target) return;

  try {
    const response = await fetch(url, { cache: "no-cache" });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    target.innerHTML = await response.text();
  } catch (error) {
    console.error(`Could not load ${url}:`, error);
  }
}

function setActiveNavLink() {
  const path = window.location.pathname.replace(/\/$/, "");
  const firstSegment = path.split("/").filter(Boolean)[0] || "home";

  const navMap = {
    "": "home",
    "forecast": "forecast",
    "conditions": "conditions",
    "rankings": "rankings",
    "boat-ratings": "rankings",
    "top-boats": "rankings",
    "top-species": "species",
    "species": "species",
    "species-detail": "species",
    "landings": "landings",
    "landing-detail": "landings",
    "reports": "reports",
    "daily-report": "reports",
    "gear": "gear",
    "gear-sample": "gear",
    "news": "news"
  };

  const activeKey = navMap[firstSegment] || firstSegment;

  document.querySelectorAll(".top-nav a").forEach(link => {
    link.classList.toggle("active", link.dataset.nav === activeKey);
  });
}
