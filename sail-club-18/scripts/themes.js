let themeButtonDark = document.querySelector('.theme-button-dark');
let themeButtonLight = document.querySelector('.theme-button-light');
let fontButtonSansSerif = document.querySelector('.font-button-sans-serif');
let fontButtonSerif = document.querySelector('.font-button-serif');

themeButtonDark.onclick = function () {
    document.body.classList.add('dark');
    themeButtonDark.classList.add('active');
    themeButtonLight.classList.remove('active');
};

themeButtonLight.onclick = function () {
    document.body.classList.remove('dark');
    themeButtonLight.classList.add('active');
    themeButtonDark.classList.remove('active');
};

fontButtonSansSerif.onclick = function () {
    document.body.classList.remove('serif');
    fontButtonSansSerif.classList.add('active');
    fontButtonSerif.classList.remove('active');
};

fontButtonSerif.onclick = function () {
    document.body.classList.add('serif');
    fontButtonSerif.classList.add('active');
    fontButtonSansSerif.classList.remove('active');
};