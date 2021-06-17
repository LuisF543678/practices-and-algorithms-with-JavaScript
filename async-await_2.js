

async function showData() {

    try {
    const json = await getData();

    console.log('Nombre del canal:´$(json.nombre)´')
    console.log('Tipo del canal:´$(json.category)´')
    } catch(err) {
        console.error(err);
    }
}


function getData() {
    fetch('http://localhost:3000/api')
    .then(response => response.json())
    .then(json => json);
//        {
//        console.table(json);
//        return json;
//    })
//    .catch(err => {
//        console.error(err)
//    })
}

//getData();
showData();