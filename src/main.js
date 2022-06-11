const fs = require("fs");
const { createCanvas, loadImage } = require("canvas");
const console = require("console");
const { layersOrder, format, rarities } = require("./config.js");
const { Randomize } = require("./random");

if (!process.env.PWD) {
  process.env.PWD = process.cwd();
}

const buildDir = `${process.env.PWD}/build`;
const metDataFile = "_metadata.json";
const layersDir = `${process.env.PWD}/layers`;

let metadata = [];
let attributes = [];
let hash = [];
let decodedHash = [];
const Exists = new Map();

const addRarity = (_str) => {
  let itemRarity;

  rarities.forEach((rarity) => {
    if (_str.includes(rarity.key)) {
      itemRarity = rarity.val;
    }
  });

  return itemRarity;
};

const addPossibility = (_str) => {
  let itemRarity;
  rarities.forEach((rarity) => {
    if (_str.includes(rarity.key)) {
      itemRarity = rarity.possibility;
    }
  });

  return itemRarity;
};

const cleanName = (_str) => {
  let name = _str.slice(0, -4);
  rarities.forEach((rarity) => {
    name = name.replace(rarity.key, "");
  });
  return name;
};

const getElements = (path) => {
  return fs
    .readdirSync(path)
    .filter((item) => !/(^|\/)\.[^\/\.]/g.test(item))
    .map((i, index) => {
      const data = {
        id: index + 1,
        name: cleanName(i),
        fileName: i,
        rarity: addRarity(i),
        possibility: addPossibility(i),
      };
      return data;
    });
};

const layersSetup = (layersOrder) => {
  const layers = layersOrder.map((layerObj, index) => ({
    id: index,
    name: layerObj.name,
    location: `${layersDir}/${layerObj.name}/`,
    elements: getElements(`${layersDir}/${layerObj.name}/`),
    position: { x: 0, y: 0 },
    size: { width: format.width, height: format.height },
    number: layerObj.number,
  }));

  return layers;
};

const buildSetup = () => {
  if (fs.existsSync(buildDir)) {
    fs.rmSync(buildDir, { recursive: true });
  }
  fs.mkdirSync(buildDir);
};

const saveLayer = (_canvas, _edition) => {
  fs.writeFileSync(
    `${buildDir}/${_edition}.png`,
    _canvas.toBuffer("image/png")
  );
};

const addMetadata = (_edition) => {
  let dateTime = Date.now();
  let tempMetadata = {
    hash: hash.join(""),
    edition: _edition,
    date: dateTime,
    attributes: attributes,
  };
  metadata.push(tempMetadata);
  attributes = [];
  hash = [];
  decodedHash = [];
};

const addAttributes = (_element, _layer) => {
  let tempAttr = {
    id: _element.id,
    trait_type: _layer.name,
    value: _element.name,
    rarity: _element.rarity,
  };
  if (
    tempAttr.value.toLowerCase() !== "empty" &&
    tempAttr.value.toLowerCase() !== "nose"
  ) {
    attributes.push(tempAttr);
  }
  decodedHash.push({ [_layer.id]: _element.id });
};

const drawLayer = async (_layer, _edition, _canvas) => {
  if (_layer.selectElement) {
    const ctx = _canvas.getContext("2d");
    addAttributes(_layer.selectElement, _layer);
    const image = await loadImage(
      `${_layer.location}${_layer.selectElement.fileName}`
    );

    ctx.drawImage(
      image,
      _layer.position.x,
      _layer.position.y,
      _layer.size.width,
      _layer.size.height
    );
    saveLayer(_canvas, _edition);
  }
};

const createFiles = async (edition) => {
  const layers = layersSetup(layersOrder);

  let numDupes = 0;
  for (let i = 1; i <= edition; i++) {
    hash = [];
    const selectLayers = [];
    await layers.forEach(async (layer, index) => {
      let randomElement = Randomize(layer);
      layer.selectElement = randomElement;
      selectLayers.push(layer);
      hash.push(index);
      hash.push(randomElement.id);
    });

    let key = hash.toString();
    if (Exists.has(key)) {
      console.log(
        `Duplicate creation for edition ${i}. Same as edition ${Exists.get(
          key
        )}`
      );

      numDupes++;
      if (numDupes > edition) break; //prevents infinite loop if no more unique items can be created
      i--;
    } else {
      Exists.set(key, i);
      const canvas = createCanvas(format.width, format.height);

      await selectLayers.forEach(async (_layer) => {
        await drawLayer(_layer, i, canvas);
      });
      addMetadata(i);
      console.log("Creating edition " + i);
    }
  }
};

const createMetaData = () => {
  fs.stat(`${buildDir}/${metDataFile}`, (err) => {
    if (err == null || err.code === "ENOENT") {
      fs.writeFileSync(
        `${buildDir}/${metDataFile}`,
        JSON.stringify(metadata, null, 2)
      );
    } else {
      console.log("Oh no, error: ", err.code);
    }
  });
};

module.exports = { buildSetup, createFiles, createMetaData };
