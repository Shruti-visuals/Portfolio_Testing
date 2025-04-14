document.querySelectorAll('img[data-hover]').forEach((img, index) => {
    const originalSrc = img.src;
    const hoverSrc = img.getAttribute('data-hover');

    img.addEventListener('mouseover', () => {
      img.src = hoverSrc;
    });

    img.addEventListener('mouseout', () => {
      img.src = originalSrc;
    });

    img.addEventListener('click', () => {
      const parent = img.parentElement;

      // Reset alignment for all images
      parent.style.justifyContent = "flex-start";

      if (index === 0) {
        parent.style.justifyContent = "flex-start"; // Left align
      } else if (index === 1) {
        parent.style.justifyContent = "center";     // Center align
      } else if (index === 2) {
        parent.style.justifyContent = "flex-end";   // Right align
      }
    });
});

<div id="footer-placeholder">
</div>

<script>
  fetch("footer.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("footer-placeholder").innerHTML = data;
    });
</script>
