function inicial() {
    for (let menu = 0; menu <= 4; menu++) {
        document.getElementsByClassName('submenu')[menu].style.display = "none" ;
    }
}    
function exibeMenu() {
    if (document.getElementsByClassName('submenu')[0].style.display == "none") {
        for (let menu = 0; menu <= 4; menu++) {
            document.getElementsByClassName('submenu')[menu].style.display = "block" ;
        }
    } else {
        for (let menu = 0; menu <= 4; menu++) {
            document.getElementsByClassName('submenu')[menu].style.display = "none" ;
        }
    }
}    
