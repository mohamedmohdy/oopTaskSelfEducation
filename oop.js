class AlkapirAwayAwy {
    //! private attrbute
        #first;
        #age;
        #stateus;

  constructor(firstName, LastName, age, state) {
    //!selv invokid function
    this.#first = firstName;
    this.last = LastName || "alkapir";
    this.#age = age;
    this.#stateus = state;
  }

  sleeping() {
    //!Abstracted function
    throw new Error("mustt write implemntation function after inhert");
  }

  working() {
    //!Abstracted function
    throw new Error("mustt write implemntation function after inhert");
  }

  eating() {
    return "eating 3 o'clock";
  }

// seter Function
    setFirstName(first_name){
        this.#first = first_name ;
    }
    setAge(Age){
        this.#age = Age ;
    }
    setStatus(status){
        this.#stateus = status ;
    }
// Getter function
    getFirstName(){
        return `${this.#first}`
    }
    getAge(){
        return `${this.#age}`
    }
    getStatus(){
        return `${this.#stateus}`
    }

// printDate
  displayDate() {
    return `
            first name is ${this.#first}
            last name is ${this.last}
            age is ${this.#age}
            state is ${this.#stateus}
        `;
  }

}

class AlkapirAway extends AlkapirAwayAwy {
  constructor(firstName, LastName, age, state) {
    super(firstName, LastName, age, state);
  }

  working() {
    return "working at village mayor"; //!overRiding
  }

  sleeping() {
    return "sleeping at 10 o'clock";
  }
}

class jonyAlkapir extends AlkapirAwayAwy {
  constructor(firstName, LastName, age, state, nationality, Languages) {
    super(firstName, LastName, age, state);
    this.nationality = nationality;
    this.Languages = Languages;
  }

  sleeping() {
    return "sleeping at 12 o'clock"; //!overRiding
  }

  working() {
    return "working at Sochial media"; //!overRiding
  }
}

class hizalqumAlkapir extends AlkapirAwayAwy {
  constructor(firstName, LastName, age, state) {
    super(firstName, LastName, age, state);
  }
  sleeping() {
    return "sleeping at 11 o'clock"; //!overRiding
  }

  working() {
    return "working at Mafia leader"; //!overRiding
  }
}


let johny = new jonyAlkapir();

johny.setFirstName("john");
johny.setAge(30);
johny.setStatus("single");
johny.displayDate();


console.log(johny.working());
console.log(johny.displayDate());


let hazlqum = new hizalqumAlkapir();

hazlqum.setFirstName("hazaqum");
hazlqum.setAge(30);
hazlqum.setStatus("single");
hazlqum.displayDate();



console.log(hazlqum.working());
console.log(hazlqum.displayDate());

//! *****************************************************************************************
