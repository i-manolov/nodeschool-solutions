var inputWords = ['Apple', 'Banana', 'Apple', 'Durian', 'Durian', 'Durian']

// console.log(countWords(inputWords))

// =>
// {
//   Apple: 2,
//   Banana: 1,
//   Durian: 3
// }

function countWords(inputWords) {
    return inputWords.reduce(function(obj, cur, index, array) {
        if (obj[cur] === undefined) {
            obj[cur] = 1;
        } else {
            obj[cur] += 1;
        }
        return obj;
    }, {});
}



module.exports = countWords;
