const BASE_PATH = window.location.hostname.includes("github.io")
  ? "/Socal-Bite-test"
  : "";

async function loadComponent(id, path) {
  const el = document.getElementById(id);
  if (!el) return;

  try {
    const response = await fetch(`${BASE_PATH}${path}`);

    if (!response.ok) {
      throw new Error(`Failed to load ${path}`);
    }

    el.innerHTML = await response.text();
  } catch (err) {
    console.error(err);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  loadComponent("site-header", "/components/header.html");
  loadComponent("site-footer", "/components/footer.html");
});
