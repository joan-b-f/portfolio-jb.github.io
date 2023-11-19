// ... (le code existant)

// Récupérer les éléments des cartes et des flèches
console.log("c'est bon");
const serviceCards = document.querySelectorAll('.service-card');

// Ajouter un gestionnaire de clics à chaque flèche
serviceCards.forEach((card, index) => {
    const arrow = card.querySelector('.expand-arrow');
    arrow.addEventListener('click', () => {
        toggleCardExpansion(index);
    });
});

// Fonction pour agrandir ou désagrandir la carte
function toggleCardExpansion(cardIndex) {
    const card = serviceCards[cardIndex];

    // Vérifier si la carte est déjà agrandie
    const isExpanded = card.classList.contains('expanded');

    // Si la carte est agrandie, la réduire, sinon l'agrandir
    if (isExpanded) {
        card.classList.remove('expanded');
    } else {
        card.classList.add('expanded');
    }

    // Modifier la flèche pour indiquer l'état actuel (agrandi ou non)
    const arrow = card.querySelector('.expand-arrow');
    arrow.innerHTML = isExpanded ? '▼' : '▲';
}