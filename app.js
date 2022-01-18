

function downloadFile(url,downloaded) {
    console.log(`Starting the download from ${url}`);
    
    setTimeout(() => {
        // console.log('file downloaded');
        const path = url.split('/').pop();  //give the name of file
        downloaded(path);
    },3000);

}

function compressFile(path,compressed) {
    console.log(`Starting the file compression for ${path}`);

    setTimeout(() => {

        const compressedPath = path.split('.')[0] + '.zip';
        compressed(compressedPath);
    },2000)
}

function uploadFile(compressedPath,uploaeded){

    console.log(`Starting the file from ${compressedPath}`);

    setTimeout(() => {
        const uploadedPath = 'http://localsystem/' + compressedPath;
        uploaeded(uploadedPath);
    },3000);

}
downloadFile('http://facebook.com/profile.jpg',function (path){
    console.log(`File Downloaded Successfully as ${path} `);
    compressFile(path, function (compressedPath) {
        console.log(`file compressed Successfully as ${compressedPath}`)
        uploadFile(compressedPath, function (uploadedPath){
            console.log(`File uploaded Successfully at ${uploadedPath}`);
            console.log('Everything Done!!');
        });
    });
});

// above code is asynch in nature as it will execute itself without disturbing other task in action like clicking the button
// call back ke ander call back ho rha h uppar and it is known as call back hell(difficult to handle for too many codes)

//now , write linear code using some other mechanism known as promises.