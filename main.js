// NOTE: A "users" array is already loaded.
// See the "./data/users.js" script tag in index.html.

// The following line is here just to show you that the
// "users" array has already been loaded and is ready to go.
console.log(users)

// Append the katas to this element:
const main = document.querySelector('main')

const Kata1 = document.createElement ("h2")
Kata1.append ("Kata 1")
main.append (Kata1)
const active = users.filter(user => user.isActive)
console.log (active)
main.append (JSON.stringify(active))


const Kata2 = document.createElement ("h2")
Kata2.append ("Kata 2")
main.append (Kata2)
const email = users.map (user => user.email)
console.log(email)
main.append (JSON.stringify(email))

const Kata3 = document.createElement ("h2")
Kata3.append ("Kata 3")
main.append (Kata3)
const ovation = users.some (company => company = ("OVATION"))
console.log (ovation)
main.append (JSON.stringify(ovation))

const Kata4 = document.createElement ("h2")
Kata4.append ("Kata 4")
main.append (Kata4)
const findAge = users.find (user => user.age > 38)
console.log (findAge)
main.append (JSON.stringify(findAge))

const Kata5 = document.createElement ("h2")
Kata5.append ("Kata 5")
main.append (Kata5)
const active38 = users
    .filter (user => user.isActive)
    .find (user => user.age > 38)
    console.log (active38)
    main.append (JSON.stringify(active38))

const Kata6 = document.createElement ("h2")
Kata6.append ("Kata 6")
main.append (Kata6)
const zencoBalance = users
    .filter (user => user.company === "ZENCO")
    .map (user => user.balance)
    console.log (zencoBalance)
    main.append (JSON.stringify(zencoBalance))

const Kata7 = document.createElement ("h2")
Kata7.append ("Kata 7")
main.append (Kata7)
const ageFugiat = users
    .filter (user => user.tags.includes("fugiat"))
    .map (user => user.age)
    console.log (ageFugiat)
    main.append (JSON.stringify(ageFugiat))
    

