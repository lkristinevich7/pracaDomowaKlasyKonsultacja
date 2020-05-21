class Pracownik {
    constructor(name, age, adress, position){
        this.name = name;
        this.age = age;
        this.adress = adress;
        this.position = position;
        
    }
    addToTeam(){
        return team.push()
    }

    deleateFromTeam(){

    }
}

class Adress{
    constructor(street, code, city){
        this.street = street;
        this.code = code;
        this.city= city;
    }
}


class Kierownik extends Pracownik {
    constructor(name, age, adress, position){
        super(name, age, adress)
        this.position = 'kierownik'

    }
}

class Team  {
    constructor(name){
        this.name=name
        this.team = [];
    }

    addToTeam(pracownik){
        return this.team.push(pracownik)
    }

    deleteFromTeam(pracownik){
      const index = this.team.indexOf(pracownik);
      if(index>-1){
        this.team.splice(index, 1)
      }
      return this.team
    }

}

let aniaAdress = new Adress ('Przewoz','123', 'Krakow')
let asiaAdress = new Adress ('Nadwislanska','456', 'Krakow')
let ania = new Pracownik('Ania','23','HR', aniaAdress );
let asia = new Kierownik('Asia','33', asiaAdress )
let newTeam = new Team('team1')
let newTeam2 = new Team('team2')
// console.log(ania)
// console.log(asia)
newTeam.addToTeam(ania)
newTeam.deleteFromTeam(ania)
newTeam2.addToTeam(asia)
console.log(newTeam)
console.log(newTeam2)