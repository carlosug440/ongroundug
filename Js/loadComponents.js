async function loadComponent(id, file) {
  try {
    const res = await fetch(file); // Remove the leading "/"
    const html = await res.text();
    document.getElementById(id).innerHTML = html;
  } catch (err) {
    console.log("Error loading:", file, err);
  }
}

loadComponent("header", "/components/header.html");
loadComponent("footer", "/components/footer.html");
