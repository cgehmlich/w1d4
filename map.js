var words = ["ground", "control", "to", "major", "tom"];

function map(words, cb) {
  var output = [];
  for (i = 0; i < words.length; i++){
      output.push(cb(words[i]))
    }
    console.log(output);
}
map(words, function(word) {
  return word.length;
});

map(words, function(word) {
  return word.toUpperCase();
});

map(words, function(word) {
  return word.split('').reverse().join('');
});