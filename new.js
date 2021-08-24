let person = {
    name:"Amanda",
    age: 25,
    hobbies: ["write", "sing", "bake"]
}

console.log(person)

function changePerson(person){
    person.age = 40 
    person.hobbies.push("run")
    person = {
        name:"Rachel",
        age: 3,
        hobbies: ["eat", "cry", "color"]
    }
    return person
}

let thirdPerson = changePerson(person)
console.log(person)
console.log(thirdPerson)