const pickATeam = () => {
    document.querySelector('#test')
    test.addEventListener('mouseover', (event) => {
        // console.log(event.target.textContent)
        event.target.style.background = 'grey'
        const selected = new Selected(event.target)
        selected.showSelected()
    })
    test.addEventListener('mouseout', (event) => {
        event.target.style.background = 'white'
    })

    test.addEventListener('click', (event) => {
        // console.log(event.target.textContent)
        // let team = event.target.textContent
        let team = event.target
        let choice = new SelectClass(team)
        choice.question()
        // console.log(choice)
    })
}

// const cambiarHash = () => {
//     let url = `${location.origin}${location.pathname}#playerSelected/${this.option.textContent}`
//     let stateObj = { id: '100' }
//     window.history.pushState(stateObj, 'Player', url)
// }

class Selected {
    constructor(_team) {
        this.team = _team
    }
    showSelected() {
        console.log(this.team.textContent)
        console.log(location)
        const newPage = `${location.origin}${location.pathname}#playerSelected/${this.team.textContent}`
        console.log(newPage)
    }
}

class SelectClass {
    constructor(_option) {
        this.option = _option
    }

    select() {
        console.log(this.option)
    }

    question() {
        /*Swal.fire({
            title: `Let's Go ${this.option.textContent}`,
            text: `Do you want to continue with a ${this.option.textContent} ?`,
            icon: 'question',
            confirmButtonText: 'Yes, Sir!',
            didClose: () => {
                console.log(`Usar la clase ${this.option.textContent}`)
                this.selected()
            },
        })*/

        Swal.fire({
            title: `Let's Go ${this.option.textContent}`,
            text: `Do you want to continue with a ${this.option.textContent} ?`,
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Save',
            denyButtonText: `Don't save`,
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                Swal.fire({
                    titel: 'Saved!',
                    text: '',
                    icon: 'success',
                    didClose: () => {
                        this.selected()
                        setTimeout(() => {
                            this.cambiarHash()
                        }, 500)
                    },
                })
            } else if (result.isDenied) {
                Swal.fire('Changes are not saved', '', 'info')
            }
        })
    }

    selected() {
        console.log(this.option)
        this.option.style.background = 'red'
        location.href = `#playerSelected`
    }

    cambiarHash() {
        let url = `${location.origin}${location.pathname}#playerSelected/${this.option.textContent}`
        let stateObj = { id: '100' }
        window.history.pushState(stateObj, 'Player', url)
    }
}

export { pickATeam }
