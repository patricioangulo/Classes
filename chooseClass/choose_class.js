class SelectClass {
    constructor(_option) {
        this.option = _option
    }

    select() {
        console.log(this.option)
    }

    selected() {
        console.log(this.option)
        this.option.style.background = 'red'
        alert(`estás seguro de elegir la clase ${this.option.textContent}`)
    }
}
