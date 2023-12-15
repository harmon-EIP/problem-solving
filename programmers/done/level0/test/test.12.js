// Create keyed object from array
// 중요도: 4
// Let’s say we received an array of users in the form {id:..., name:..., age... }.

// Create a function groupById(arr) that creates an object from it, with id as the key, and array items as values.

// For example:

let users = [
    { id: 'john', name: "John Smith", age: 20 },
    { id: 'ann', name: "Ann Smith", age: 24 },
    { id: 'pete', name: "Pete Peterson", age: 31 },
];

let usersById = groupById(users);

function groupById(users) {
    return users.reduce((obj, value) => {
        // console.log('obj', obj);
        // console.log('value', value);
        obj[value.id] = value;
        return obj;
    }, {})
}
console.log(usersById)

/*
// after the call we should have:

usersById = {
  john: {id: 'john', name: "John Smith", age: 20},
  ann: {id: 'ann', name: "Ann Smith", age: 24},
  pete: {id: 'pete', name: "Pete Peterson", age: 31},
}
*/
// Such function is really handy when working with server data.

// In this task we assume that id is unique. There may be no two array items with the same id.

// Please use array .reduce method in the solution.

