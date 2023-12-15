let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [john, pete, mary];

let usersMapped = users.map(v => ({
    // let fullName = v.name + ' ' + v.surname;
    // let id = v.id;

    // return { 'fullName': fullName, 'id': id };

    fullName: `${v.name} ${v.surname}`,
    id: v.id
}))

console.log(usersMapped);

/*
usersMapped = [
  { fullName: "John Smith", id: 1 },
  { fullName: "Pete Hunt", id: 2 },
  { fullName: "Mary Key", id: 3 }
]
*/

// alert(usersMapped[0].id) // 1
// alert(usersMapped[0].fullName) // John Smith
