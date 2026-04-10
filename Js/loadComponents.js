async function loadComponent(id, file) {
  const res = await fetch(file);
  const data = await res.text();
  document.getElementById(id).innerHTML = data;
}

// Load header and footer in every page
loadComponent("header", "components/header.html");
loadComponent("footer", "components/footer.html");
