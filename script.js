window.onload = () => {
    document.getElementById("button").onclick = runAll;
}

var requestOptions = {
    method: 'GET',
    redirect: 'follow'
};

const getItems = () => {
    return fetch("http://localhost:8080/character?memberShipType=1&memberShipId=4611686018451018706&character=2305843009270276511", requestOptions)
        .then(response => response.json())
        .then(result => result)
        .catch(error => console.log('error', error));
}
const displayImage = (data) => {
    let src = 'https://www.bungie.net' + data,
        img = document.createElement('img');
    img.src = src;
    document.body.appendChild(img);
}

const runAll = () => {
    getItems().then((data) => {
        for (let i = 0; i < data.length; i++) {
            displayImage(data[i].displayProperties.icon);
        }
    })
}