var wrestlers = [
  { name: 'AJ Styles',
    finisher: 'Styles Clash'
  },
  { name: 'The Miz',
    finisher: 'Skull Crushing Finale'
  },
  { name: 'Y2J',
    finisher: 'Code Breaker'
  },
]; 

var finisher;
for (var wrestler of wrestlers) {
  if (wrestler.name === 'Y2J') {
    finisher = wrestler.finisher;
  }
}

console.log(wrestlers[2]);



