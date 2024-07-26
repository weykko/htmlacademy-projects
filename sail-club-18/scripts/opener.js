let articleBlogs = document.querySelectorAll('.blog-article.short');

for (let articleBlog of articleBlogs) {
    let moreButton = articleBlog.querySelector('.more');
    moreButton.onclick = function () {
        articleBlog.classList.remove('short');
    };
}