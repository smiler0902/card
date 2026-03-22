(function () {
  const card = document.getElementById("card");
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReducedMotion || !card) return;

  const maxTilt = 8;

  card.addEventListener("mousemove", function (e) {
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    const rotateY = x * maxTilt * 2;
    const rotateX = -y * maxTilt * 2;
    card.style.transform =
      "perspective(900px) rotateX(" + rotateX + "deg) rotateY(" + rotateY + "deg)";
  });

  card.addEventListener("mouseleave", function () {
    card.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg)";
  });
})();
