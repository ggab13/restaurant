function contactPage() {

    const div = document.createElement('div')
    div.setAttribute("id", 'contact')
    const info = document.createElement('h2')
    info.textContent = "Contact";

    const ul = document.createElement('ul');
    const email = document.createElement('li');
    email.textContent = "gab95or@gmail.com"
    const github = document.createElement('li');
    github.textContent = "github.com/ggab13"
    ul.appendChild(email);
    ul.appendChild(github);

    const img = document.createElement('img');
    //img.src = '../style/images/menu.png';
    img.setAttribute('id','wink')

    div.appendChild(info)
    div.appendChild(ul);
    div.appendChild(img)


    const content = document.getElementById('tab-content');
    content.appendChild(div)

}
export default contactPage;