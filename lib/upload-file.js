"use strict";

const fs = require('fs-extra');

/**
 * Check if file exists and return bool
 * @param string file
 * @return Promise
 */
const fileExists = (file) => {
    return new Promise((resolve, reject) => {
        fs.stat(file, (err, file) => {
            if(err && err.code === 'ENOENT') {
                return resolve(false);
            }
            else if(err) {
                return reject( new Error(err) );
            }

            return resolve(true);
        })
    });
}

/**
 * Move file from current path to a new path
 * @param string currentPath
 * @param string newPath
 * @return Promise
 */
const moveFile = (currentPath, newPath) => {
    return new Promise((resolve, reject) => {
        fs.move(currentPath, newPath, (err) => {
            if(err) {
                return reject( new Error(err) );
            }

            return resolve(newPath);
        });
    });
}

let i = 0;

/**
 * Move uploaded file to specified path. Check for files that already exists with the same name and append numbers to the new image name
 * @param object file
 * @param string uploadPath
 * @return Promise
 */
function uploadFile(file, uploadPath) {
    let path = file.path;
    return fileExists(uploadPath).then((exists) => {
        if(exists === false) {
            return moveFile(path, uploadPath);
        }
        else {
            ++i;
            uploadPath = uploadPath.replace(/\(([\d]+)\)/, '').split('.');

            return uploadFile (
                { path },
                `${uploadPath[0]}(${i}).${uploadPath[1]}`
            );
        }
    });
}

module.exports = uploadFile;
