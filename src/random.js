// For Shuffle and Random
function shuffle(array) {
  // refference: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

const Randomize = (layer) => {
  let total = layer.number;
  let considerList = [];
  for (let i = 0; i < total; i++) {
    const possibility = layer.elements[i].possibility;

    Math.floor(Math.random() * (possibility[1] - possibility[0] + 1)) +
      possibility[1];
    for (let j = 0; j < possibility; j++) {
      considerList.push(layer.elements[i].id);
    }
  }
  shuffle(considerList);


  console.log(layer.name);
  console.log(considerList.length);
  console.log(JSON.stringify(considerList));
  let index = Math.floor(Math.random() * parseInt(considerList.length));

  let randElementNum = considerList[index];

  return layer.elements[randElementNum - 1];
};

module.exports = { Randomize };
