function getInputValueById(id) {
    return parseFloat(document.getElementById(id).value);
}


function getInnerTextById(id) {
    return parseFloat(document.getElementById(id).innerText);
}


function addClassList(id){
    return document.getElementById(id).classList;
}


document.getElementById("btn-donate").addEventListener("click", function () {
    const inputValue = getInputValueById("donation-input");
    const donationValue = getInnerTextById("donation-value");
    const myBalance = getInnerTextById("main-balance");

    if (inputValue <= 0 || isNaN(inputValue) || myBalance <= 0) {
        alert("SORRY! Something went wrong. Please Try Again.");
        return;
    }

    const donationCollected = donationValue + inputValue;
    const remainingBalance = myBalance - inputValue;

    document.getElementById("main-balance").innerText = remainingBalance;
    document.getElementById("donation-value").innerText = donationCollected;

    document.getElementById('my_modal_1').showModal();


    const historyCard = document.createElement("div");
    historyCard.className = "border rounded-[16px] p-4 space-y-4"

    historyCard.innerHTML = `
                        <h4 class="text-2xl font-bold" >${inputValue} Taka is donated for Flood at Noakhali, Bangladesh </h4>
                        <p class="text-gray-500 font-light text-base bg-slate-50 rounded-lg p-2" >Date: ${new Date().toLocaleDateString()} Time: ${new Date().toLocaleTimeString('en-US', { timeZone: 'Asia/Dhaka' })}</p>
    
    
    `
    const historyList = document.getElementById("history-container");
    historyList.appendChild(historyCard);
    
});

document.getElementById("btn-donate-2").addEventListener("click", function () {
    const inputValue = getInputValueById("donation-input-2");
    const donationValue = getInnerTextById("donation-value-2");
    const myBalance = getInnerTextById("main-balance");

    if (inputValue <= 0 || isNaN(inputValue) || myBalance <= 0) {
        alert("SORRY! Something went wrong. Please Try Again.");
        return;
    }


    const donationCollected = donationValue + inputValue;
    const remainingBalance = myBalance - inputValue;

    document.getElementById("main-balance").innerText = remainingBalance;
    document.getElementById("donation-value-2").innerText = donationCollected;

    document.getElementById('my_modal_1').showModal();


    const historyCard = document.createElement("div");
    historyCard.className = "border rounded-[16px] p-4 space-y-4"

    historyCard.innerHTML = `
                        <h4 class="text-2xl font-bold" >${inputValue} Taka is donated for Flood Relief in Feni, Bangladesh </h4>
                        <p class="text-gray-500 font-light text-base bg-slate-50 rounded-lg p-2" >Date: ${new Date().toLocaleDateString()} Time: ${new Date().toLocaleTimeString('en-US', { timeZone: 'Asia/Dhaka' })}</p>
    
    
    `
    const historyList = document.getElementById("history-container");
    historyList.appendChild(historyCard);

});

document.getElementById("btn-donate-3").addEventListener("click", function () {
    const inputValue = getInputValueById("donation-input-3");
    const donationValue = getInnerTextById("donation-value-3");
    const myBalance = getInnerTextById("main-balance");

    if (inputValue <= 0 || isNaN(inputValue) || myBalance <= 0) {
        alert("SORRY! Something went wrong. Please Try Again.");
        return;
    }


    const donationCollected = donationValue + inputValue;
    const remainingBalance = myBalance - inputValue;

    document.getElementById("main-balance").innerText = remainingBalance;
    document.getElementById("donation-value-3").innerText = donationCollected;

    document.getElementById('my_modal_1').showModal();


    const historyCard = document.createElement("div");
    historyCard.className = "border rounded-[16px] p-4 space-y-4"

    historyCard.innerHTML = `
                        <h4 class="text-2xl font-bold" >${inputValue} Taka is donated in Aid For Injured in the Quota Movement </h4>
                        <p class="text-gray-500 font-light text-base bg-slate-50 rounded-lg p-2" >Date: ${new Date().toLocaleDateString()} Time: ${new Date().toLocaleTimeString('en-US', { timeZone: 'Asia/Dhaka' })}</p>
    
    
    `
    const historyList = document.getElementById("history-container");
    historyList.appendChild(historyCard);

});


// history btn

document.getElementById("history-btn").addEventListener("click", function(){
    
    addClassList("history-btn").add("bg-[#B4F461]", "border-none");
    addClassList("donation-btn").remove("bg-[#B4F461]", "border-none");

    addClassList("donation-container").add("hidden");
    addClassList("history-container").remove("hidden");
})

// donation btn

document.getElementById("donation-btn").addEventListener("click", function(){

    addClassList("donation-btn").add("bg-[#B4F461]", "border-none");
    addClassList("history-btn").remove("bg-[#B4F461]", "border-none");

    addClassList("donation-container").remove("hidden");
    addClassList("history-container").add("hidden");
})