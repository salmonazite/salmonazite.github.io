document.addEventListener('DOMContentLoaded', () => {

    const salmonLink = document.getElementById('salmon');
    const monaziteLink = document.getElementById('monazite');
    const linksLink = document.getElementById('links');


    salmonLink.addEventListener('click', (e) => {
        e.preventDefault();
        alert('Salmon - Coming Soon');
    });

    monaziteLink.addEventListener('click', (e) => {
        e.preventDefault();
        alert('Monazite - Under Construction');
    });

    linksLink.addEventListener('click', (e) => {
        e.preventDefault();
        alert('Links - Not Available Yet');
    });
});