fs = require('fs');

var wordList = []

fs.readFile('./assets/wordlist.txt', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  
  data.split(/[\r\n]+/).forEach(element => {
      if (element.length >= 5 && element.length <= 10) { 
        wordList.push(element)
      }
  });

  console.log("Loaded " + wordList.length + " words from dictionary")

});

const capitalise = (s) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
}

function generate_memorable_password(){
    pw = ""
    for (var i=0; i<4; i++) {
        pw += capitalise(wordList[Math.floor(Math.random()*wordList.length)])
    }
    pw += Math.floor(Math.random() * 10)

    return pw
}


function generate_passwords(passwordCount = 10, memorable=true) {
    toReturn = []

    for(var i=0; i<passwordCount; i++) {
        toReturn.push(generate_memorable_password())
    }

    return toReturn;
}

module.exports = {
    generate_passwords: generate_passwords
}