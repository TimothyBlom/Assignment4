//buttons to switch from currently selected and displayed laptops 
function getFirstLaptop() {
    document.getElementById("selectLaptop").setAttribute("class", "open1")
    getApi();
    toggleDropdownMenu();
};

function getSecondLaptop() {
    document.getElementById("selectLaptop").setAttribute("class", "open2")
    getApi();
    toggleDropdownMenu();
};

function getThirdLaptop() {
    document.getElementById("selectLaptop").setAttribute("class", "open3")
    getApi();
    toggleDropdownMenu();
};

function getForthLaptop() {
    document.getElementById("selectLaptop").setAttribute("class", "open4")
    getApi();
    toggleDropdownMenu();
};

function getFivthLaptop() {
    document.getElementById("selectLaptop").setAttribute("class", "open5")
    getApi();
    toggleDropdownMenu();
};

function getSixthLaptop() {
    document.getElementById("selectLaptop").setAttribute("class", "open6")
    getApi();
    toggleDropdownMenu();
};

//Gets API data and display it
async function getApi() {
    const response = await fetch("https://noroff-komputer-store-api.herokuapp.com/computers");
    const data = await response.json();
    console.log(data);

    if (document.getElementById("selectLaptop").classList.contains("open1")) {
    selectedLaptop = data[0]
    } else if (document.getElementById("selectLaptop").classList.contains("open2")) {
        selectedLaptop = data[1]
    } else if (document.getElementById("selectLaptop").classList.contains("open3")) {
        selectedLaptop = data[2]
    } else if (document.getElementById("selectLaptop").classList.contains("open4")) {
        selectedLaptop = data[3]
    } else if (document.getElementById("selectLaptop").classList.contains("open5")) {
        selectedLaptop = data[4]
    } else if (document.getElementById("selectLaptop").classList.contains("open6")) {
        selectedLaptop = data[5]
    } else {
        selectedLaptop = data[0]
    }

    //List of laptops displayed in menu
    document.getElementById("c1").innerHTML = data[0].title;
    document.getElementById("c2").innerHTML = data[1].title;
    document.getElementById("c3").innerHTML = data[2].title;
    document.getElementById("c4").innerHTML = data[3].title;
    document.getElementById("c5").innerHTML = data[4].title;
    document.getElementById("c6").innerHTML = data[5].title;

    //Information displayed about the current selected laptop
    document.getElementById("pcName").innerHTML = selectedLaptop.title;
    document.getElementById("pcTitle").innerHTML = selectedLaptop.title;
    document.getElementById("pcDescription").innerHTML = selectedLaptop.description;
    document.getElementById("pcPrice").innerHTML = selectedLaptop.price;
    document.getElementById("pcSpec1").innerHTML = selectedLaptop.specs[0];
    document.getElementById("pcSpec2").innerHTML = selectedLaptop.specs[1];
    document.getElementById("pcSpec3").innerHTML = selectedLaptop.specs[2];
    document.getElementById("pcSpec4").innerHTML = selectedLaptop.specs[3];
    document.getElementById("pcSpec5").innerHTML = selectedLaptop.specs[4];
    document.getElementById("pcSpec6").innerHTML = selectedLaptop.specs[5];
    document.getElementById("pcSpec7").innerHTML = selectedLaptop.specs[6];
    document.getElementById("pcSpec8").innerHTML = selectedLaptop.specs[7];
    if (selectedLaptop == data[4]) {
        document.getElementById("pcImg").setAttribute("src", "https://noroff-komputer-store-api.herokuapp.com/assets/images/5.png")
    } else {
        document.getElementById("pcImg").setAttribute("src", "https://noroff-komputer-store-api.herokuapp.com/" + selectedLaptop.image)
    }

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
        return console.error("You do not have a loan")  + 
        alert("You do not have a loan");
    }

    if (Number(workBalance) < Number(loanBalance)) {
        return console.error("You do not enough money to pay back loan") + 
        alert("You do not enough money to pay back loan");
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

    if(loanBalance == 0) {
        document.getElementById("loanPopup").classList.toggle("popupOpen");
        document.getElementById("popupOverlay").classList.toggle("popupOpen");
    } else {
        return console.error("You can only get one loan at a time") + 
        alert("You can only get one loan at a time");
    }

    maxLoan = Number(bankBalance) * 2;

    document.getElementById("loanRequest").addEventListener("input", () => sliderValue = Number(sliderValue) + Number(document.getElementById("loanRequest").value));
    inputValue = document.getElementById("loanRequest").value;

    document.getElementById("loanRequest").setAttribute("max", maxLoan)

    document.getElementById("bankBalance").innerHTML = bankBalance;
    document.getElementById("maxLoan").innerHTML = maxLoan;
    document.getElementById("loanBalance").innerHTML = loanBalance;
};

//Take loan button
function takeLoanBtn() {
    element1 = document.getElementById("loanRequest");
    loanRequest = element1.innerHTML;
    element2 = document.getElementById("loanBalance");
    loanBalance = element2.innerHTML;
    element3 = document.getElementById("bankBalance");
    bankBalance = element3.innerHTML;
    
    document.getElementById("loanRequest").addEventListener("input", () => console.log(document.getElementById("loanRequest").value));
    inputValue = document.getElementById("loanRequest").value

    loanBalance = Number(loanBalance) + Number(inputValue)

    if (Number(loanBalance) > (Number(bankBalance) * 2)) {
        loanBalance = 0;
        console.log("Can not loan more than dubble what is in your bank");
        alert("Can not loan more than dubble what is in your bank");
    }

    document.getElementById("loanPopup").classList.toggle("popupOpen");
    document.getElementById("popupOverlay").classList.toggle("popupOpen");

    document.getElementById("loanRequest").innerHTML = loanRequest;
    document.getElementById("loanBalance").innerHTML = loanBalance;
};

//Toggle computer dropdown menu
function toggleDropdownMenu() {
    document.getElementById("dropdownMenu").classList.toggle("menuOpen");
};

function buyLaptop() {
    element1 = document.getElementById("bankBalance");
    bankBalance = element1.innerHTML;
    element2 = document.getElementById("pcPrice");
    pcPrice = element2.innerHTML;

    if (Number(bankBalance) < Number(pcPrice)) {
        return console.error("Not enough money in bank to buy laptop") + 
        alert("Not enough money in bank to buy laptop");
    } else {
        bankBalance = Number(bankBalance) - Number(pcPrice)
        console.log("Bought laptop")
        alert("Bought laptop");
    }

    document.getElementById("bankBalance").innerHTML = bankBalance;
    document.getElementById("pcPrice").innerHTML = pcPrice;
}