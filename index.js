// Code your solutions in this file

function writeCards(names, event) {
  let thanksArray = []

  for(let i = 0; i < names.length; i++) {
    thanksArray.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
  }

  return thanksArray;

}

function countDown(count) {
  while(count > 0) {
    console.log(count);
    count--;
  }
  console.log(count);
}

