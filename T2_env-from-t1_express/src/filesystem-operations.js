const path = require('path');
const fs = require('fs');
const { promises: fsp } = fs;

async function readFile() {
  return fsp.readFile(path.join(__dirname, 'db.json'), 'utf8')
    .then((data, err) => {
      if(err) throw err;
      return JSON.parse(data)
  });
}

async function writeFile(data) {
  await fsp.writeFile(path.join(__dirname, 'db.json'), JSON.stringify(data), 'utf-8');
}

module.exports = {
  readFile, writeFile
};

