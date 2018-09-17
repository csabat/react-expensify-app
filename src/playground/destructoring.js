console.log('dectructoring');

const person = {
    name: 'Andrew',
    age: 26,
    location: {
        city: 'Philadelphia',
        temp: 92
    }
};

const { name = 'Anonymus', age } = person;
const { city, temp } = person.location;
console.log(name);

console.log('this is ' + name);

const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
}

const address = ['1299 S Juniper street', 'Philadelphia', 'Pennsylvania', '19872'];

const [street, mycity, state, zip] = address;

console.log(state);

const item = ['coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [product, small, medium, large] = item;

console.log('A medium ' + product + ' costs ' + medium);