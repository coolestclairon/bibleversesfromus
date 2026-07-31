const jarButton = document.getElementById('jar-button');
const frontPage = document.getElementById('front-page');
const quotePage = document.getElementById('quote-page');
const bibleVerse = document.getElementById('bible-verse');

let allVerses = [];

quotePage.classList.add('hidden');

fetch('verses.json')
    .then(response => response.json())
    .then(data => {
        allVerses = data;
    })
    .catch(error => {
        console.error('Error loading verses:', error);
    });

jarButton.addEventListener('click', function() {
    if (allVerses.length === 0) return; 

    const randomIndex = Math.floor(Math.random() * allVerses.length);
    const randomVerse = allVerses[randomIndex];
    
    bibleVerse.innerHTML = `"${randomVerse.text}" <br><br> <strong>- ${randomVerse.reference}</strong>`;

    frontPage.classList.add('hidden');
    quotePage.classList.remove('hidden');
});