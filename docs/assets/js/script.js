//preventDefault on <a> @ tabs
let aTabs = document.querySelectorAll('btn.header-menuItem > a');
for (var index = 0; index < aTabs.length; index++) {
    aTabs[index].addEventListener("click", function (event) {
        event.preventDefault()
    });
};

function multiTabs(event, tabName) {
    //hides the "Inicio" tab when other menu item is clicked
    document.querySelector('.main').classList.add("hidden");

    //hides all the other tabs
    let otherTabs = document.querySelectorAll('.tab');
    for (var i = 0; i < otherTabs.length; i++) {
        otherTabs[i].classList.add("hidden");
    };

    //shows the selected tab
    document.getElementById(tabName).classList.remove("hidden");
}

function showDropdown() {
    let dropdownButton = document.querySelector('#dropdownButton');
    dropdownButton.addEventListener("click", function () {
        let dropdownContent = document.querySelector('#dropdownContent');
        dropdownContent.classList.toggle("hidden");
    });
}
showDropdown();