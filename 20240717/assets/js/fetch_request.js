let domSend = document.querySelector('#send');
let domResponse = document.querySelector('#response');

domSend.addEventListener('click', async () => {
    console.log('send!');
    let response = await fetch('https://book.niceinfos.com/frontend/api/?action=sleep&timer=3');
    let data = await response.text();
    data = JSON.parse(data);
    // let data = await response.json();
    console.log(data);
    domResponse.innerHTML = data.data;
})