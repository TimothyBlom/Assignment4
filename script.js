// document.addEventListener("click", e => {
//     const dropdownContainer = e.target.closest(".dropdownContainer")
//     const dropdownBtn = e.target.matches(".dropdownBtn")
//     if (!dropdownBtn && dropdownContainer != null) return

//     let currentDropdown
//     if (dropdownBtn) {
//         currentDropdown = dropdownContainer
//         currentDropdown.classList.toggle("focus")
//     }

//     document.querySelectorAll(dropdownContainer.active).forEach(dropdown => {
//         if (dropdown === currentDropdown) return
//         dropdown.classList.remove("focus")
//     })
// })

// fetch("https://noroff-komputer-store-api.herokuapp.com/computers").then(function (response) {
//     return response.json();
// }).then(function (obj) {
//     console.log(obj);
// }).then(function (data) {
//     appendData(data);
// }).catch(function (err) {
//     console.error(err, "something fucked up trying to get the API");
// });

//Gets API data
const apiUrl = "https://noroff-komputer-store-api.herokuapp.com/computers"
async function getApi() {
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data;
    // console.log(data);
    // console.log("title:", data[1].title)

    

};
getApi();

//Increases work balance button
function workBtn() {
    element = document.getElementById("workBalance");
    workBalance = element.innerHTML;

    workBalance = Number(workBalance) + 100;

    document.getElementById("workBalance").innerHTML = workBalance;
};

//Transfer work balance to bank balance button
function bankBtn() {
    element1 = document.getElementById("workBalance");
    workBalance = element1.innerHTML;
    element2 = document.getElementById("bankBalance");
    bankBalance = element2.innerHTML;
    element3 = document.getElementById("loanBalance");
    loanBalance = element3.innerHTML;

    if (workBalance == 0) {
        return;
    };

    if (loanBalance > 0) {
        autoToLoan = ((Number(workBalance) / 100) * 10);
        loanBalance = Number(loanBalance) - autoToLoan;
        bankBalance = Number(bankBalance) - autoToLoan + Number(workBalance);
        workBalance = 0;
    } else {
        bankBalance = Number(bankBalance) + Number(workBalance);
        workBalance = 0;
    }

    if (loanBalance < 0) {
        bankBalance = Number(bankBalance) - Number(loanBalance);
        loanBalance = 0;
    }

    document.getElementById("bankBalance").innerHTML = bankBalance;
    document.getElementById("workBalance").innerHTML = workBalance;
    document.getElementById("loanBalance").innerHTML = loanBalance;
};

//Pay back the loan button
function payLoanBtn() {
    element1 = document.getElementById("workBalance");
    workbalance = element1.innerHTML;
    element2 = document.getElementById("loanBalance");
    loanBalance = element2.innerHTML;

    if (loanBalance == 0) {
        return console.error("You do not have a loan");
    }

    if (Number(workBalance) < Number(loanBalance)) {
        return console.error("You do not enough money to pay back loan");
    }

    workBalance = Number(workBalance) - Number(loanBalance);
    loanBalance = 0;
    
    document.getElementById("workBalance").innerHTML = workBalance;
    document.getElementById("loanBalance").innerHTML = loanBalance;
};

//Toggle loan popup
function togglePopup() {
    element1 = document.getElementById("bankBalance");
    bankBalance = element1.innerHTML;
    element2 = document.getElementById("maxLoan");
    maxLoan = element2.innerHTML;
    element3 = document.getElementById("loanBalance");
    loanBalance = element3.innerHTML;
    element4 = document.getElementById("sliderValue");
    sliderValue = element4.innerHTML;

    if(loanBalance == 0) {
        document.getElementById("loanPopup").classList.toggle("popupOpen");
        document.getElementById("popupOverlay").classList.toggle("popupOpen");
    } else {
        return console.error("You can only get one loan at a time")
    }

    maxLoan = Number(bankBalance) * 2;

    document.getElementById("loanRequest").addEventListener("input", () => sliderValue = Number(sliderValue) + Number(document.getElementById("loanRequest").value));
    inputValue = document.getElementById("loanRequest").value;

    sliderValue = inputValue

    document.getElementById("loanRequest").setAttribute("max", maxLoan)

    document.getElementById("bankBalance").innerHTML = bankBalance;
    document.getElementById("maxLoan").innerHTML = maxLoan;
    document.getElementById("loanBalance").innerHTML = loanBalance;
    document.getElementById("sliderValue").innerHTML = sliderValue;
};

//Make loan button
function takeLoanBtn() {
    element3 = document.getElementById("loanRequest");
    loanRequest = element3.innerHTML;
    element4 = document.getElementById("loanBalance");
    loanBalance = element4.innerHTML;
    
    document.getElementById("loanRequest").addEventListener("input", () => console.log(document.getElementById("loanRequest").value));
    inputValue = document.getElementById("loanRequest").value

    loanBalance = Number(loanBalance) + Number(inputValue)

    document.getElementById("loanPopup").classList.toggle("popupOpen");
    document.getElementById("popupOverlay").classList.toggle("popupOpen");

    document.getElementById("loanRequest").innerHTML = loanRequest;
    document.getElementById("loanBalance").innerHTML = loanBalance;
};

//Toggle computer dropdown menu
function toggleDropdownMenu() {
    document.getElementById("dropdownMenu").classList.toggle("menuOpen");
};

