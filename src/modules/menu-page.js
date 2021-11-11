function menuPage() {

    const div = document.createElement('div')
    div.setAttribute("id", 'menu')
    const info = document.createElement('h2')
    info.textContent = " ";
    const img = document.createElement('img');
    //img.src = '../style/images/menu.png';
    img.setAttribute('id','galley-grub')
    
    div.appendChild(info)
    div.appendChild(img)
    const content = document.getElementById('tab-content');
    content.appendChild(div)
    
}
export default menuPage;
