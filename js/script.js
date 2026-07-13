document.getElementById('year').textContent = new Date().getFullYear();

// Signature morpheme-decomposition demo
const morphs = document.querySelectorAll('.morph');
const gloss = document.getElementById('morphGloss');
const defaultGloss = gloss.textContent;

morphs.forEach((btn) => {
  btn.addEventListener('click', () => {
    const alreadyActive = btn.classList.contains('active');
    morphs.forEach((m) => m.classList.remove('active'));

    if (alreadyActive) {
      gloss.textContent = defaultGloss;
      return;
    }
    btn.classList.add('active');
    gloss.textContent = btn.dataset.gloss;
  });
});
