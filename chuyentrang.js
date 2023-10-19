function showPage(pageLi ,pageClass) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active-page'));
    
    const selectedPage = document.querySelector(`.${pageClass}`);
    selectedPage.classList.add('active-page');

    const links = document.querySelectorAll('.menu li');
    links.forEach(link => link.classList.remove('active'));

    const parentLi = pageLi.parentElement;
    parentLi.classList.add('active');
}