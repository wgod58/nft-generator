"use strict";

const fs = require("fs");
const path = require("path");
const isLocal = typeof process.pkg === "undefined";
const basePath = isLocal ? process.cwd() : path.dirname(process.execPath);

// const description = "";

console.log(basePath);
try {
  fs.unlinkSync(`${basePath}/json/main.json`);
} catch (error) {}

const baseUri = "ipfs://QmNyyhftyKAiM1t6KYhziEGsB26XbQ96wse935BpDYuXTq/";
// ipfs://cid/0.json

// read json data
// let rawdata = fs.readFileSync(`${basePath}/build/_metadata.json`);
// let data = JSON.parse(rawdata);

const getElements = (path) => {
  return fs.readdirSync(path).filter((item) => !/(^|\/)\.[^\/\.]/g.test(item));
  // .map((item) => item.split(".")[0] + ".png");
};

const jsonFilesName = getElements(`${basePath}/json/`);

console.log(jsonFilesName);

const result = jsonFilesName.map((element) => {
  const rawData = fs.readFileSync(`${basePath}/json/${element}`);
  const jsonData = JSON.parse(rawData);
  jsonData.image = `${baseUri}${element.split(".")[0]}.png`;
  return jsonData;
});

console.log(JSON.stringify(result));

fs.writeFileSync(`${basePath}/json/main.json`, JSON.stringify(result, null, 2));

// data.forEach((item, index) => {
//   const id = index + 1;
//   item.image = `${baseUri}/${id}.png`;

//   let attributes;

//   attributes = item.attributes.map((element) => {
//     return {
//       trait_type: element.trait_type,
//       value: element.value,
//     };
//   });

//   const metaData = {
//     image: `${baseUri}/${id}.png`,
//     attributes,
//   };
//   fs.writeFileSync(`${basePath}/json/${id}`, JSON.stringify(metaData, null, 2));
// });

// fs.writeFileSync(
//   `${basePath}/json/_metadata.json`,
//   JSON.stringify(data, null, 2)
// );

// console.log(`Updated baseUri for images to ===> ${baseUri}`);

// {
// "image": "ipfs://QmQn9BnEMHrbqApJ59wDnFqEjtoZE6pKy4LoxFhWA7MKPw",
// "attributes": [
// {
// "trait_type": "Hat",
// "value": "Sea Captain's Hat"
// },
// {
// "trait_type": "Mouth",
// "value": "Phoneme Vuh"
// },
// {
// "trait_type": "Eyes",
// "value": "Sad"
// },
// {
// "trait_type": "Background",
// "value": "New Punk Blue"
// },
// {
// "trait_type": "Fur",
// "value": "Golden Brown"
// }
// ]
// }
