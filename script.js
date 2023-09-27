// Cor da página
function alterarTemaSite() {
    let tema = document.querySelector("html").getAttribute("data-bs-theme")
    if(tema === "light"){
        document.querySelector("html").setAttribute("data-bs-theme", "dark")
        document.querySelector("#alterarTemaSite").innerHTML = `<i class="bi bi-moon-fill"></i>`
    }
    else{
        document.querySelector("html").setAttribute("data-bs-theme", "light")
        document.querySelector("#alterarTemaSite").innerHTML = `<i class="bi bi-sun-fill"> </i>`
    }
}

class formSubmit{
    constructor(settings){
        this.settings = settings;
        this.form = document.querySelector(settings.form);
        this.formButton = document.querySelector(settings.button);
        if (this.form) {
            this.url = this.form.getAttribute("action")
        }
    }

}
