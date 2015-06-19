function logger(namespace) {
  return console.log.bind(null, namespace);
}


// var logger = logger("INFO: ");
// logger('some new string');

module.exports = logger;