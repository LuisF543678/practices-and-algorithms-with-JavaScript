console.clear();

const userList = [
    { id: 1, name: 'Domicode', city: 4 },
    { id: 2, name: 'wilfredo', city: 3 },
    { id: 3, name: 'alfredo', city: 2 },
    { id: 4, name: 'dany', city: 1 }
];

const citiesList = {
    1: 'Barcelona',
    2: 'new york',
    3: 'santo domingo',
    4: 'madrid'
};

function getUsers() {
    return new Promise((resolved, reject) => {
        setTimeout(() => {
            resolved(userList);
        }, 2000)
    });
}

function getCities() {
    return new Promise((resolved) => {
        setTimeout(() => {
            resolved(citiesList);
        }, 1000);
    });
}

/* getUsers().then((res) => {
    console.log('Users->', res);
}); */

/* getCities().then(res => {
    console.log('Cities' , res);
});
 */
/* console.log('Hola 1');
console.log('Hola 2');
console.log('Hola 3');
 */


 const userPromise = getUsers();
/*
userPromise.then(users => {
    console.log('Users->', users);
    return getCities();
}).then(cities => {
    console.log('Cities', cities);
}).catch((error) => {
    console.log(error);
}); */


async function getInfo() {
    const users = await getUsers();
    const cities = await getCities();
    console.log('Users->', users);
    console.log('Cities->',cities);
}

getInfo();