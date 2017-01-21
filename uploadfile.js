const uploadFile = require('./lib/upload-file');

let file = {
    path: 'test.txt'
}

uploadFile(file, 'tests/test.txt').then(newFile => {
    console.log("newFile", newFile);
}).catch(err => {
    throw err;
});
