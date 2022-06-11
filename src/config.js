const layersOrder = [
  { name: "background", number: 40 },
  // { name: "skin2", number: 40 },
  { name: "skin", number: 84 },
  { name: "eye", number: 22 },
  { name: "ear", number: 6 },
  { name: "hair", number: 6 },
  { name: "mouth", number: 11 },
  // { name: "pants", number: 5 },
  // { name: "cloth", number: 6 },
  // { name: "jacket", number: 6 },
  { name: "mix", number: 40 },
  { name: "neckless", number: 5 },
  { name: "handAccessory", number: 51 },
  // { name: "newHand", number: 20 },
  { name: "bracelet", number: 6 },
  // { name: "specialEye", number: 21 },
];

const format = {
  width: 1772,
  height: 1772,
};

const rarities = [
  { key: "", val: "normal", possibility: 5 },
  { key: "_1", val: "1", possibility: 1 },
  { key: "_2", val: "2", possibility: 2 },
  { key: "_3", val: "3", possibility: 3 },
  { key: "_4", val: "4", possibility: 4 },
  { key: "_9", val: "9", possibility: 9 },
  { key: "_30", val: "30", possibility: 30 },
  { key: "_big", val: "big", possibility: 500 },
  { key: "_xb", val: "bb", possibility: 900 },
  { key: "_250", val: "250", possibility: 250 },
];

const defaultEdition = 5;

module.exports = { layersOrder, format, rarities, defaultEdition };
