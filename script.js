document.addEventListener('DOMContentLoaded', () => {

    const beastPulseLink = document.getElementById('beast-pulse');
    const blogPostsLink = document.getElementById('blog-posts');
    const linksLink = document.getElementById('links');


    beastPulseLink.addEventListener('click', (e) => {
        e.preventDefault();
        alert('BEAST PULSE - Coming Soon');
    });

    blogPostsLink.addEventListener('click', (e) => {
        e.preventDefault();
        alert('Blog Posts - Under Construction');
    });

    linksLink.addEventListener('click', (e) => {
        e.preventDefault();
        alert('Links - Not Available Yet');
    });
});