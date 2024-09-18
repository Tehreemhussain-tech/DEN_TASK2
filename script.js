//create variable and get id of modal box

let modal = document.getElementById("orderModal"); //select modalbox -> save into a variable.

//create empty array.

let bag = [];

//create varaible -> store -> total price

//create array of objects -> to store -> multiple coffee flavors.
const coffeeItem = [
    {
        name: "Vanilla Latte",
        price: 1500,
        qty: 0,
    },
    {
        name: "Espresso",
        price: 1000,
        qty: 0,
    },
    {
        name: "Cappuccino",
        price: 2500,
        qty: 0,
    },
];

//Define Function open bag
function openBag(){
    modal.classList.add("showBag"); //modal box -> access and added new class -> show bag

    //call function
    updateBag();
}

//Define Function -> Close Bag 
function closeBag() {
    modal.classList.remove("showBag"); //hide new created class of bag.
}

//create a function -> add -> coffee -> bag
function addToBag(coffeeIndex) {
    let coffee = coffeeItem[coffeeIndex];

    //find -> coffeeitem -> bag or not!!

    let bagItem  = bag.find(item => item.name === coffee.name);

    if (bagItem) {
        //increase quantity
        bagItem.qty++;
    }
    else{
        //add new coffee 
        bag.push({
            name: coffee.name, 
            price: coffee.price,
            qty: 1,
        });
    }

    // update -> totalPrice
    // totalPrice += coffee.price;

    alert("Go to View Bag!");

    updateBag();
}

//create function -> update bag.
function updateBag() {
    const orderDetails = document.querySelector('.orderDetails');



    //clear -> Bag
    orderDetails.innerHTML = ' ';

    let total = 0;

    //show -> each coffee item

    bag.forEach(item => {
        const itemDetails = document.createElement('div');
        itemDetails.className = 'itemDetails';
        
        const itemTotal = item.qty*item.price;
        
        itemDetails.innerHTML = `
        <p>Name: ${item.name}</p>
        <p>Qty: ${item.qty}</p>
        <p>Total: Rs. ${itemTotal}</p>
    `;
        
        orderDetails.appendChild(itemDetails);

        total += itemTotal;
    });

    const totalPriceElement = document.createElement('p');
    totalPriceElement.textContent = `Total: Rs. ${total}`;
    orderDetails.appendChild(totalPriceElement);
}



//....... SLIDER SECTION
//create nodelist of images.

//create variable -> save slider 

const slider = document.querySelectorAll(".slider img");
// let intervalId = null;
//create variable -> current index of img

let imageIndex = 0;

//create function -> browser -> display -> 1st image

function initializeSlide() {
    //nodelist of slide at current index. and access -> classlist -> add -> showslide.
    for(i=0; i<1; i++){ //3 images -> display
        if (slider.length>0) {
            slider[i].classList.add("showSlide");
            // intervalId = setInterval(nextSlide);   
        }
    }
}
initializeSlide(); //call function

//create function -> next slide

function displaySlide(index) {

    if (index >= slider.length) {
        imageIndex = 0;
    }

    else if (index < 0) {
        imageIndex = slider.length - 1;
    }

    //node list of slider -> for each -> iteration -> all images
    slider.forEach(image => {
        image.classList.remove("showSlide");
    });
    slider[imageIndex].classList.add("showSlide");
    
}

//create function -> previous button

function previousBtn() {
    //decrement sliderIndex by 1.
    imageIndex--;
    displaySlide(imageIndex);
}

//create function -> next button
function nextBtn() {
    //increment sliderIndex by 1.
    imageIndex++;
    displaySlide(imageIndex);
}


// create variable  -> nodelist -> accordian

const accordianContent = document.querySelectorAll(".accordian");

//access node list and loop -> each item in accordian class

accordianContent.forEach(item => {
    item.addEventListener('click', ()  =>  {
        item.classList.toggle("active");
    });
});

