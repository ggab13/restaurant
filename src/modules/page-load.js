function createHeader(id, text) {
    const header = document.createElement('header');
    header.setAttribute('id', id);
    const restauranName = document.createElement('h1');
    restauranName.textContent = text;
    const img = document.createElement('img');
    img.setAttribute('id', 'logo')
    header.appendChild(img);
    header.appendChild(restauranName);
    return header;
}

function createBtn(id, text) {
    const btn = document.createElement('button');
    btn.setAttribute('id', id);
    const p = document.createElement('p');
    p.textContent = text;
    btn.appendChild(p);
    btn.classList.add('tab');
    return btn;
}

function createNav(id) {
    const nav = document.createElement('nav');
    nav.setAttribute('id', id);

    const img = document.createElement('img');
    img.setAttribute('class', 'spongebob');
    img.setAttribute('id', 'sponge-home');

    const img2 = document.createElement('img');
    img2.setAttribute('class', 'spongebob');
    img2.setAttribute('id', 'sponge-menu');

    const img3 = document.createElement('img');
    img3.setAttribute('class', 'spongebob');
    img3.setAttribute('id', 'sponge-contact');

    const divHome = document.createElement('div');
    divHome.setAttribute('id', 'div-home')

    const divMenu = document.createElement('div');
    divMenu.setAttribute('id', 'div-menu')

    const divContact = document.createElement('div');
    divContact.setAttribute('id', 'div-contact')

    const homeBtn = createBtn('home-btn', 'Home');
    const menuBtn = createBtn('menu-btn', 'Menu');
    const contactBtn = createBtn('contact-btn', 'Contact');

    homeBtn.classList.add('active')
    divHome.appendChild(homeBtn);
    divMenu.appendChild(menuBtn);
    divContact.appendChild(contactBtn);
    divHome.appendChild(img);
    divMenu.appendChild(img2);
    divContact.appendChild(img3);
    nav.appendChild(divHome);
    nav.appendChild(divMenu);
    nav.appendChild(divContact);

   
    return nav;
}

function createMain(id) {
    const main = document.createElement('main');
    main.setAttribute('id', id);
    return main;
}

function createFooter(id, text) {
    const footer = document.createElement('footer');
    footer.setAttribute('id', id);
    const h2 = document.createElement('h2');
    h2.setAttribute('id', 'ggab13')
    h2.innerHTML = `Created by <span id="valsz">|</span> <a href="https://github.com/ggab13">ggab13</a> <img alt="">`;
    footer.appendChild(h2);
    return footer;
}

function loadPage() {

    const content = document.getElementById('content');
    // header
    const header = createHeader('header', 'Krusty Krab');
    content.appendChild(header);
    // nav
    const nav = createNav('nav');
    header.appendChild(nav);
    // tab-content
    const tabContent = createMain('tab-content');
    content.appendChild(tabContent);
    // footer
    const footer = createFooter('footer', 'Made by ggab13');
    content.appendChild(footer);
}

export default loadPage;