document.addEventListener('DOMContentLoaded', () => {
    // 获取侧边栏链接
    const beastPulseLink = document.getElementById('beast-pulse');
    const blogPostsLink = document.getElementById('blog-posts');
    const linksLink = document.getElementById('links');

    // 为链接添加简单的交互效果
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