import fs from 'fs';

export const writeFile = (file, data) =>
    new Promise((resolve, reject) => {
        fs.writeFile(file, data, 'utf8', (err) => {
            if (err) {
                return reject(err);
            }
            resolve(data);
        });
    });
