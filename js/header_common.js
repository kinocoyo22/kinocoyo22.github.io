var html =
"\
<h1>\
    <a href=\"https://kinocoyo22.github.io/index.html\">きのこよのホームページ</a>\
</h1>\
    <nav class=\"pc-nav\">\
        <ul>\
            <li><a href=\"#\" type=“button” onclick=\"location.href='https://kinocoyo22.github.io/index.html'\">ホーム</a></li>\
            <li><a href=\"#\" type=“button” onclick=\"location.href='https://kinocoyo22.github.io/profile.html'\">プロフィール</a></li>\
        </ul>\
    </nav>\
<nav class=\"header__nav nav\" id=\"js-nav\">\
    <ul class=\"nav__items nav-items\">\
        <li class=\"nav-items__item\"><a href=\"https://kinocoyo22.github.io/index.html\">ホーム</a></li>\
        <li class=\"nav-items__item\"><a href=\"https://kinocoyo22.github.io/index.html\">プロフィール</a></li>\
    </ul>\
</nav>\
<button class=\"header__hamburger hamburger\" id=\"js-hamburger\">\
<span></span>\
<span></span>\
<span></span>\
</buttom>\
";

document.getElementById('header_common').innerHTML = html;
