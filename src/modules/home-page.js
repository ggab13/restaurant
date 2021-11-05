function homePage() {
    const content = document.getElementById('tab-content');

    const div = document.createElement('div')
    div.setAttribute("id", 'home')
    const info = document.createElement('h2')
    info.textContent = "The Krusty Krab is a fictional fast food restaurant in the American animated television series SpongeBob SquarePants. It is famous for its signature burger, the Krabby Patty, the formula to which is a closely guarded trade secret. The restaurant was founded by Eugene H. Krabs, who is also the owner and manager.";
  

    const order = document.createElement('a')
    order.setAttribute("id", 'order')    
    order.textContent= 'Order Now';

    const burgerImage = document.createElement('img')
    burgerImage.setAttribute("id", 'order-burger')    
    order.appendChild(burgerImage)
   
    
    
    div.appendChild(info)
    div.appendChild(order);
    content.appendChild(div)

}
export default homePage;