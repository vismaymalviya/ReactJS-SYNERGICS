let [firstName, middleName, lastName] = ['dylan', 'john', 'doe'];
middleName = 'neil';
console.log(firstName, middleName, lastName);

function addressMaker(city, state) {
    const newAdd = {city, state};
    console.log(newAdd);
}
addressMaker('Austin', 'Texas');