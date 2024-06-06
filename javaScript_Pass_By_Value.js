//Evaluera dessa:
//#1
[2] === [2] 
//Kommer ge falskt som svar
{} === {} 
//Kommer ge falskt som svar

//#2 Vad blir värdet a i varje objekt?.
const object1 = { a: 5 }; 
//a = 4
const object2 = object1; 
// a = 4 
const object3 = object2; 
// a = 4 
const object4 = { a: 5}; 
object1.a = 4;
// a = 5


//#3 Skapa två klasser: En djur och däggdjurs klass. 
// Skapa en ko som tar emot, en färg and has a sound method that ett ljud som t.ex moo's henns namn, typ och färg. 

class Djur {
constructor(farg, ljud, namn, typ) {
this.farg = farg;
this.ljud = ljud;
this.namn = namn;
this.typ = typ;
}

}

class daggDjur extends Djur {
  constructor(farg, ljud, namn, typ) {
    super(farg, ljud, namn, typ)
  }
sound() {
    console.log(`Hej jag är en ko, har färgen ${this.farg}, brukar göra ljudet ${this.ljud}, min typ är ${this.typ}, mitt namn är ${this.name}`);
}

} 
const Ko = new Ko("Röd", "Moooo", "Vincent", "Brun");













