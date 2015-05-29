function getShortMessages(messages) {
	var filteredArray = messages.filter(function (messageObj) {
		return messageObj.message.length <50;
	}).map (function (messageObj) {
		return messageObj.message;
	});

	return filteredArray;
}

module.exports = getShortMessages;
