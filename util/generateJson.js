"use strict";

const fs = require("fs");
const path = require("path");
const isLocal = typeof process.pkg === "undefined";
const basePath = isLocal ? process.cwd() : path.dirname(process.execPath);

console.log(basePath);

const baseUri =
  "https://ipfs.io/ipfs/QmY7gTMqx6r6MPU2hstGLLYqPnWns1aEiFtoCG54nBdcpk";

// read json data
let rawdata = fs.readFileSync(`${basePath}/build/_metadata.json`);
let data = JSON.parse(rawdata);

console.log(data);

data.forEach((item, index) => {
  const id = index + 1;
  item.image = `${baseUri}/${id}.png`;
  fs.writeFileSync(
    `${basePath}/json/${id}.json`,
    JSON.stringify(item, null, 2)
  );
});

fs.writeFileSync(
  `${basePath}/json/_metadata.json`,
  JSON.stringify(data, null, 2)
);

console.log(`Updated baseUri for images to ===> ${baseUri}`);
