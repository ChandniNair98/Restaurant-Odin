export function MenuItem(Name, Desc, Price,ImageSrc){
    this.Name = Name;
    this.Desc = Desc;
    this.Price = Price;
    this.ImageSrc = ImageSrc;
}

export const MenuItems = [];

const Item1 = new MenuItem(
    "Black Forest", 
    "Indulge in the rich flavors of decadent chocolate and cherries with our Black Forest cake..", 
    "$25.99",
    "https://inbloombakery.com/wp-content/uploads/2023/02/chocolate-ganache-cake-FI-500x500.jpg");

const Item2 = new MenuItem(
    "White Forest", 
    "Delight in the heavenly combination of fluffy vanilla sponge and whipped cream in our White Forest cake", 
    "$35.99",
    "https://bakewithshivesh.com/wp-content/uploads/2021/11/IMG_3947-scaled.jpg");

const Item3 = new MenuItem(
    "Strawberry Cake", 
    "Savor the sweetness of fresh strawberries nestled between layers of moist cake in our Strawberry cake.", 
    "$29.99",
    "https://aclassictwist.com/wp-content/uploads/2020/08/Fresh-Strawberry-Cake-with-Strawberry-Frosting-3.jpg");

MenuItems.push(Item1, Item2, Item3);

export function loadMenu(){
    
    const mainContent = document.querySelector(".content");

    const menu = document.createElement("div");
    menu.id = "menu";

    const menu_Header = document.createElement("h1");
    menu_Header.id = "menu-header";
    menu_Header.textContent = "Take a look at our selection of cakes";
    
    menu.appendChild(menu_Header);

    const list = document.createElement("ul");
    list.type='none';
    
    MenuItems.forEach(item => {
        const listItem = document.createElement("li");

        listItem.classList.add("menu-item");




        const itemName = document.createElement("div");
        itemName.classList.add("item-name");
        itemName.textContent = item.Name;
        listItem.appendChild(itemName);

        const itemDesc = document.createElement("div");
        itemDesc.classList.add("item-description");
        itemDesc.textContent = item.Desc;
        listItem.appendChild(itemDesc);

        const itemPrice = document.createElement("div");
        itemPrice.classList.add("item-price");
        itemPrice.textContent = item.Price;
        listItem.appendChild(itemPrice);





         // Create image element
         const itemImage = document.createElement("img");
         itemImage.classList.add("item-image");
         itemImage.src = item.ImageSrc;
         itemImage.alt = item.Name;
         listItem.appendChild(itemImage);






        list.appendChild(listItem);
    });


    menu.appendChild(list);
    mainContent.appendChild(menu);


    // Add margin or padding between menu items
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
        item.style.marginBottom = '50px'; // Adjust the value as needed
        item.style.marginTop = '50px';
    });
}