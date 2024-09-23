function getInputValueById(id) {
    return parseFloat(document.getElementById(id).value);
}


function getInnerTextById(id) {
    return parseFloat(document.getElementById(id).innerText);
}

function gteInnerHtml(id) {
    return document.getElementById(id).innerHTML;
}


document.getElementById("btn-donate").addEventListener("click", function () {
    const inputValue = getInputValueById("donation-input");
    const donationValue = getInnerTextById("donation-value");
    const myBalance = getInnerTextById("main-balance");

    if (inputValue <= 0 || isNaN(inputValue) || myBalance <= 0) {
        alert("SORRY! Something went wrong. Please Try Again.")
        return;
    }

    const donationCollected = donationValue + inputValue;
    const remainingBalance = myBalance - inputValue;

    document.getElementById("main-balance").innerText = remainingBalance;
    document.getElementById("donation-value").innerText = donationCollected;

    document.getElementById('my_modal_1').showModal();

});

document.getElementById("btn-donate-2").addEventListener("click", function () {
    const inputValue = getInputValueById("donation-input-2");
    const donationValue = getInnerTextById("donation-value-2");
    const myBalance = getInnerTextById("main-balance");

    if (inputValue <= 0 || isNaN(inputValue) || myBalance <= 0) {
        alert("SORRY! Something was wrong. Please Try Again.")
        return;
    }


    const donationCollected = donationValue + inputValue;
    const remainingBalance = myBalance - inputValue;

    document.getElementById("main-balance").innerText = remainingBalance;
    document.getElementById("donation-value-2").innerText = donationCollected;

    document.getElementById('my_modal_1').showModal();

});

document.getElementById("btn-donate-3").addEventListener("click", function () {
    const inputValue = getInputValueById("donation-input-3");
    const donationValue = getInnerTextById("donation-value-3");
    const myBalance = getInnerTextById("main-balance");

    if (inputValue <= 0 || isNaN(inputValue) || myBalance <= 0) {
        alert("SORRY! Something was wrong. Please Try Again.")
        return;
    }


    const donationCollected = donationValue + inputValue;
    const remainingBalance = myBalance - inputValue;

    document.getElementById("main-balance").innerText = remainingBalance;
    document.getElementById("donation-value-3").innerText = donationCollected;

    document.getElementById('my_modal_1').showModal();

});
