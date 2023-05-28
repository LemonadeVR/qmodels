const fs = require('fs');

// Edit these v
const inputDif = '';
const outputDif = '';


function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomNum(min, max) {
  return (Math.random() * (max - min + 1)) + min;
}

fs.readFile(inputDif, 'utf8', (error, data) => {
  if (error) {
    console.log('File not found! Make sure inputDif and outputDif are correct.');
    return;
  }

  const map = JSON.parse(data);

  // YOUR CODE GOES HERE

	




	// END

  const outputJSON = JSON.stringify(map, null, 2);

  fs.writeFile(outputDif, outputJSON, 'utf8', (error) => {
    if (error) {
      console.error('An error occurred:', error);
      return;
    }
    console.log('Success!');
  });
});
