let domSend = document.querySelector('#send');
let domResponse = document.querySelector('#response');
let domFile = document.querySelector('#upload-file');
let domUpload = document.querySelector('#upload');
let domPreview = document.querySelector('#preview');

const doGet = async (url) => {
    let response = await fetch(url);
    return await response.json();
}

const doPost = async (url) => {
    let params = {
        action: 'demo',
        data: { a: 1, b: 2 }
    };

    let options = {
        method: 'POST',
        body: JSON.stringify(params)
    };

    let response = await fetch(url, options);
    return await response.json();
}

const doUploadFile = async (url, file) => {

}

domSend.addEventListener('click', async () => {
    console.log('send!');
    // let url = 'https://book.niceinfos.com/frontend/api/?action=sleep&timer=3';
    // let response = await doGet(url);
    // console.log(response);
    // domResponse.innerHTML = response.data;

    // let url = 'https://book.niceinfos.com/frontend/api/';
    // let response = await doPost(url);
    // console.log(response);
    // domResponse.innerHTML = JSON.stringify(response.data);



})

const previewImage = (file) => {
    return new Promise((resolve, reject) => {
        let reader = new FileReader;
        reader.onload = () => {
            return resolve(reader.result)
        }
        reader.readerAsDataURL(file);//base64 encode非加密

        // encrypt 加密
    })
}

domUpload.addEventListener('click', async () => {
    let url = 'https://book.niceinfos.com/frontend/api/';
    let file = domFile.files[0];

    if (!file) {
        return;
    }

    let type = file.type.split('/');
    if (type[0] != 'image') {
        Swal.fire({
            title: '格式錯誤',
            html: '只允許圖片類型',
            icon: 'error'
        })
        domFile.value = '';
        return;
    }

    let sizeMB = file.size / 1024 / 1024;

    if (sizeMB > 5) {
        Swal.fire({
            title: '圖片太大了',
            html: '只允許5MB以下圖片',
            icon: 'error'
        })
        return;
    }

    console.log(file);
    let preview = await previewImage(file);
    console.log(preview);
    domPreview.src = preview;
})