const pickARole = 'pick a role!'

class Role {
    constructor(
        _attack = 50,
        _defense = 50,
        _intelligence = 50,
        _jump = 50,
        _velocity = 50
    ) {
        this.attack = _attack
        this.defense = _defense
        this.intelligence = _intelligence
        this.jump = _jump
        this.velocity = _velocity
        this.role = 'Role'
    }

    attack() {
        console.log(`el ataque de ${this.role} es de ${this.attack}`)
    }
    defense() {}
    think() {}
    jump() {}
    velocity() {}
}

class PointGuard extends Role {
    constructor() {
        super(_attack, _defense, _intelligence, _jump, _velocity)
        this.pointGuard = 'Point Guard'
    }
}

export { pickARole }
