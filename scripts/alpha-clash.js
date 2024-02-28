// function confirm(){
//     // hide the booking page 
//     const bookingPage = document.getElementById('booking-page');
//     console.log(bookingPage.classList.add('hidden'));
//     // show the last page
//     const lastPage =document.getElementById('last-page');
//     lastPage.classList.remove('hidden');

// }

function hideElementsById(id) {
    const element = document.getElementById(id);
    element.classList.add('hidden');
}
function showElementsById(id) {
    const element = document.getElementById(id);
    element.classList.remove('hidden');
}
let boss = 0;
function green(event) {

    const ticket = event.innerText
    boss += 1;
    let seatLeft = 8 - boss;
    const price = 550;

    if (boss <= 4) {
        event.style.backgroundColor = "#1DD100";
        ticketsAdded(ticket);
        seatCount(boss);
        updateSeatRemaining(seatLeft);
    }
    else {
        alert('One person cannot select more than 4 seats')
    }

}

function ticketsAdded(ticket) {
    // const element = document.getElementById('Important');
    // let ticketName = element.innerText;
    const ticketName = ticket;
    const cls = "Economy";
    const price = 550;
    console.log(ticketName, cls, price)

    const selectedTickets = document.getElementById('selected-ticket')

    const div = document.createElement('div');
    div.classList.add('flex');
    div.classList.add('justify-between');

    const p1 = document.createElement('p');
    const p2 = document.createElement('p');
    const p3 = document.createElement('p');
    p1.innerText = ticketName;
    p2.innerText = cls;
    p3.innerText = price;

    div.appendChild(p1);
    div.appendChild(p2);
    div.appendChild(p3);
    selectedTickets.appendChild(div);

    updateTotalCost(price);

}


function updateTotalCost(value) {
    let sum = parseInt(document.getElementById('total-price').innerText);
    sum = sum + parseInt(value);

    document.getElementById('total-price').innerText = sum;
    console.log(updateGrandTotal())

}
function updateGrandTotal(status) {
    let sum = (document.getElementById('total-price').innerText);

    if (status == undefined) {
        document.getElementById('grand-total').innerText = sum;
    }

    else {
        const couponCode = document.getElementById("coupon-code").value;
        if (couponCode == "NEW17" || couponCode == "Couple 20") {
            const discount = sum * .2;
            document.getElementById('grand-total').innerText = sum - discount;
            document.getElementById("Coupon-container").classList.add('hidden');
        }
        else{
            alert('Enter a valid coupon');
        }
    }

}


function seatCount(boss) {
    const element = document.getElementById('seat-count');
    element.innerText = boss;

}
function updateSeatRemaining(seatLeft) {
    const element = document.getElementById('seat-left');
    element.innerText = seatLeft;
}
// -----------------------function calls --------------------------------------------

function confirm() {
    hideElementsById('booking-page');
    showElementsById('last-page');
}

