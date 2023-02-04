var click = 1
var cost = 10
var coins = 0


document.querySelector('.upg').onclick = upgrade;
function upgrade() {

    if (coins >= cost) {
        click = click + 1
        coins = coins-cost
        cost = cost + cost
        document.querySelector('.cost').innerHTML = cost
        document.querySelector('.power').innerHTML = click
        document.querySelector('.power2').innerHTML = click

        
}
if (click > 1522) {
    document.querySelector('.bot').innerHTML = ''
}
};

document.querySelector('.get').onclick = MyClick;

function MyClick() {
    coins = click + coins
        document.querySelector('.score').innerHTML = coins
        document.querySelector('.power').innerHTML = click
        document.querySelector('.power1').innerHTML = click
}



