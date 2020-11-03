export function addScript(url) {
  const src = document.createElement("script");

  src.setAttribute("src", url);
  src.setAttribute("type", "text/javascript");

  document.head.appendChild(src);
}
