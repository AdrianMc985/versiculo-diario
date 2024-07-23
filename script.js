const verses = [
    { text: "Porque de tal manera amó Dios al mundo, que ha dado a su Hijo unigénito, para que todo aquel que en él cree, no se pierda, mas tenga vida eterna.", reference: "Juan 3:16" },
    { text: "El Señor es mi pastor; nada me faltará.", reference: "Salmos 23:1" },
    { text: "Todo lo puedo en Cristo que me fortalece.", reference: "Filipenses 4:13" },
    // Añade más versículos aquí
];

function getRandomVerse() {
    const randomIndex = Math.floor(Math.random() * verses.length);
    return verses[randomIndex];
}

window.onload = function() {
    const verse = getRandomVerse();
    document.getElementById('verse-text').innerText = verse.text;
    document.getElementById('verse-reference').innerText = verse.reference;
};
