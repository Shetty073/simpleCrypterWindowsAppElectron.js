// Main logic
button = document.getElementById("cryptonyte")

// Changes the modename string in UI based on the checkbox state
function uiState(mode) {
	if (mode == 0) {
		document.getElementById("messageDisplay").innerHTML = "Message for encryption:"
		document.getElementById("keyDisplay").innerHTML = "Key for encryption:"
		document.getElementById("cryptonyte").innerHTML = "Encrypt"
		document.getElementById("output").innerHTML = "Encrypted message appears here"
		document.getElementById("message").placeholder = "Message for encryption"
		document.getElementById("key").placeholder = "Key for encryption"
	} else if (mode == 1) {
		document.getElementById("messageDisplay").innerHTML = "Message for decryption:"
		document.getElementById("keyDisplay").innerHTML = "Key for decryption:"
		document.getElementById("cryptonyte").innerHTML = "Decrypt"
		document.getElementById("output").innerHTML = "Decrypted message appears here"
		document.getElementById("message").placeholder = "Message for decryption"
		document.getElementById("key").placeholder = "Key for decryption"
	}
}

// Our main encryption decryption logic
// TODO: implement randomness
function cipher(mode, msg, key) {
	const alph = "lm2pik5oMKO3ESWNLPI1JBdrzes9awqCU4FTFX8DZHYG7njbhuv6y gcftx0RQA".split("")
	key = key % 63
	var newMsg = ""
	for (let i = 0; i < msg.length; i++) {
		var currChar = msg[i]
		var currIndex = alph.indexOf(currChar)
		if (mode == 0) {
			var newIndex = currIndex + key
		} else if (mode == 1) {
			var newIndex = currIndex - key
		}
		if (newIndex > 62) newIndex = newIndex - 63
		if (newIndex < 0) newIndex = 63 + newIndex
		newMsg += alph[newIndex]
	}
	return newMsg
}

// Event listener added to button
// Will listen to button clicks and executes the following code when button is clicked
button.addEventListener('click', function () {
	var msg = document.getElementById("message").value
	var key = document.getElementById("key").value
	if (document.getElementById("encrypt-me").checked) {
		var outMsg = cipher(mode = 0, msg, key)
		document.getElementById("output").innerHTML = outMsg
	} else if (document.getElementById("decrypt-me").checked) {
		var outMsg = cipher(mode = 1, msg, key)
		document.getElementById("output").innerHTML = outMsg;
	}
})