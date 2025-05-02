// DOM Script
document.addEventListener("DOMContentLoaded", () => {
  const mainTitle = document.getElementById("main-title");
  const topics = document.getElementById("topics");
  const exercise = document.getElementById("exercise");
  const project = document.getElementById("project");

  const btnBasics = document.getElementById("btn-basics");
  const btnIntermediate = document.getElementById("btn-intermediate");

  // Handle navigation buttons
  const navigateTo = (section) => {
    const url = new URL(window.location.href);
    url.searchParams.set("section", section);
    window.location.href = url.toString();
  };

  btnBasics?.addEventListener("click", () => navigateTo("basics"));
  btnIntermediate?.addEventListener("click", () => navigateTo("intermediate"));

  // Determine section and data index
  const section =
    new URLSearchParams(window.location.search).get("section") || "basics";
  const isIntermediate = section === "intermediate";
  const index = isIntermediate ? 1 : 0;
  const data = jsData[index];
  const scriptPath = `./${
    isIntermediate ? "Intermediate" : "Basics"
  }/script.js`;

  // Populate content
  mainTitle.textContent = data.title;

  topics.innerHTML = `
    <ol>
      ${data.topics.map((topic) => `<li>${topic}</li>`).join("")}
    </ol>
  `;

  exercise.innerHTML = data.exercise
    .map((ex) => `<a href="${ex.url}" class="btn">${ex.title}</a>`)
    .join("");

  project.innerHTML = `
    <a href="${data.project.url}" class="btn btn-2">${data.project.title}</a>
  `;

  // Fetch and display JS file content
  fetch(scriptPath)
    .then((res) => res.text())
    .then((js) => {
      document.getElementById("js-content").textContent = js;
    })
    .catch((err) => console.error("Error loading JS file:", err));

  // Append script dynamically
  const scriptEl = document.createElement("script");
  scriptEl.src = scriptPath;
  document.body.appendChild(scriptEl);
});

// Copy btn script
document.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener("click", async (e) => {
    if (e.target.classList.contains("copy-btn")) {
      const button = e.target;
      const pre = button.closest(".code-container")?.querySelector("pre");
      if (!pre) return;

      try {
        await navigator.clipboard.writeText(pre.textContent.trim());
        const originalText = button.textContent;
        button.textContent = "Copied!";
        setTimeout(() => (button.textContent = originalText), 2000);
      } catch (err) {
        console.error("Copy failed:", err);
      }
    }
  });
});

// Off canvas Script
document.addEventListener("DOMContentLoaded", () => {
  const offcanvas = document.getElementById("offcanvasRight");
  const backdrop = document.getElementById("backdrop");
  const togglerBtn = document.getElementById("offcanvasToggler");
  const closeBtn = document.getElementById("offcanvasClose");
  const body = document.body;

  const toggleOffcanvas = (show) => {
    backdrop.classList.toggle("show", show);
    offcanvas.classList.toggle("show", show);
    body.style.overflow = show ? "hidden" : "";
  };

  togglerBtn?.addEventListener("click", () => toggleOffcanvas(true));
  closeBtn?.addEventListener("click", () => toggleOffcanvas(false));
  backdrop?.addEventListener("click", () => toggleOffcanvas(false));

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && offcanvas.classList.contains("show")) {
      toggleOffcanvas(false);
    }
  });
});
