/* Presentation only: screenshot previews. No model calls or personal-data collection. */
(() => {
  const viewer = document.querySelector('#image-viewer');
  const image = document.querySelector('#viewer-image');
  const caption = document.querySelector('#image-caption');
  const close = document.querySelector('#close-viewer');
  if (!viewer || !viewer.showModal) return;
  let opener;
  document.querySelectorAll('a.zoom').forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();
      opener = link;
      image.src = link.getAttribute('href');
      image.alt = link.querySelector('img').alt;
      caption.textContent = link.closest('figure').querySelector('strong').textContent;
      viewer.showModal();
      close.focus();
    });
  });
  close.addEventListener('click', () => viewer.close());
  viewer.addEventListener('click', event => {
    if (event.target === viewer) {
      const r = viewer.getBoundingClientRect();
      if (event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) viewer.close();
    }
  });
  viewer.addEventListener('close', () => { if (opener) opener.focus(); });
})();
