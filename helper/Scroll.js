export function ScrollToDiv(event) {
  if (typeof window !== "undefined") {
    console.log(event);
    window.scrollTo({
      top: elementPosition(
        document.getElementById(event.target.dataset.scrollTo)
      ),
      behavior: "smooth",
    });
  }
}
function elementPosition(obj) {
  let currentTop = 0;
  if (obj.offsetParent) {
    do {
      currentTop += obj.offsetTop;
    } while ((obj = obj.offsetParent));
    return [currentTop - 50];
  }
}
