
// Récupérer tous les boutons "Lire plus"
const toggleButtons = document.querySelectorAll('.toggle-button');

toggleButtons.forEach(button => {
button.addEventListener('click', () => {
// Récupérer le texte caché de la section correspondante
const parent = button.closest('.bg-white');
const readMoreText = parent.querySelector('.read-more-text');
const fullText = parent.querySelector('.full-text');

// Bascule de l'affichage avec transition
if (fullText.classList.contains('hidden')) {
fullText.classList.remove('hidden');
fullText.classList.remove('max-h-0');
fullText.classList.add('max-h-[500px]');  // Laisser un maximum de hauteur pour l'animation
button.textContent = 'Lire moins';
} else {
fullText.classList.add('max-h-0');
fullText.classList.remove('max-h-[500px]');
fullText.classList.add('hidden');
button.textContent = 'Lire plus';
}
});
});