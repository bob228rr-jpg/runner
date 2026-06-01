const CONTRACT_ADDRESS = "zGyPFLyRbKBTbAaGd3PuWZEKQ13WENyAk4aGWPfpump";

const toast = document.querySelector(".copy-toast");
const copyButtons = document.querySelectorAll("[data-copy-ca]");

copyButtons.forEach((button) => {
  button.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(CONTRACT_ADDRESS);
    } catch {
      const fallback = document.createElement("textarea");
      fallback.value = CONTRACT_ADDRESS;
      document.body.appendChild(fallback);
      fallback.select();
      document.execCommand("copy");
      fallback.remove();
    }

    toast.textContent = CONTRACT_ADDRESS === "zGyPFLyRbKBTbAaGd3PuWZEKQ13WENyAk4aGWPfpump" ? "CA coming soon" : "CA copied";
    toast.classList.add("is-visible");
    window.setTimeout(() => toast.classList.remove("is-visible"), 1500);
  });
});

const tiltCards = document.querySelectorAll(".tilt-card");

tiltCards.forEach((card) => {
  card.addEventListener("pointermove", (event) => {
    const rect = card.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `rotateX(${y * -4}deg) rotateY(${x * 5}deg)`;
  });

  card.addEventListener("pointerleave", () => {
    card.style.transform = "";
  });
});
