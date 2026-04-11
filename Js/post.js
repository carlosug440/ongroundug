async function loadPost() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");

  const res = await fetch("/post.json");
  const posts = await res.json();

  const post = posts.find(p => p.id == id);

  const container = document.getElementById("post");

  if (!post) {
    container.innerHTML = "<h2>Post not found</h2>";
    return;
  }

  // Format date nicely
  const dateObj = new Date(post.date + "T" + post.time);
  const formattedDate = dateObj.toLocaleString("en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  });

  container.innerHTML = `
    <h1>${post.title}</h1>
    <p style="color:gray;">
      ${post.category} | ${post.author}<br>
      🕒 ${formattedDate}
    </p>
    <hr>
    <p style="line-height:1.6;">
      ${post.content.replace(/\n/g, "<br><br>")}
    </p>
  `;
}

loadPost();
