document.addEventListener('DOMContentLoaded', () => {

    const beastPulseLink = document.getElementById('salmon');
    const blogPostsLink = document.getElementById('monazite');
    const linksLink = document.getElementById('links');


    beastPulseLink.addEventListener('click', (e) => {
        e.preventDefault();
        alert('Salmon - Coming Soon');
    });

    blogPostsLink.addEventListener('click', (e) => {
        e.preventDefault();
        alert('Monazite - Under Construction');
    });

    linksLink.addEventListener('click', (e) => {
        e.preventDefault();
        alert('Links - Not Available Yet');
    });
});