var inputWord = prompt("enter word");
var hiddenWordLength = inputWord.length;
var hiddenWord = "";

makeHiddenWord();


var images = ["0.png", "1.png", "2.png", "3.png", "4.png", "5.png", "6.png"];
var alphabet = "abcdefghijklmnopqrstuvwxyz";

var imageIndex = 0;


for (var j = 0; j < 26; j++)
{
	var c = alphabet.substr(j, 1);
	var button = document.createElement("button");
	button.innerHTML = c;
	document.body.appendChild(button);
	button.addEventListener("click", onClick, true);
}

function onClick(event)
{

	var characterTyped = event.currentTarget.textContent;
	event.currentTarget.disabled = true;
	console.log("you typed " + characterTyped);
	var found = checkCharacter(characterTyped);
	if (found === true)
	{
		if (hiddenWord === inputWord)
			alert("you win");

	}
	else
	{
		var imageVar = document.getElementById("image");
		imageIndex++;
		imageVar.src = images[imageIndex];
		if (imageIndex === 6)
			alert("you lose");
	}
}

function replaceCharacter(s, index, theCharacter)
{
	return s.substr(0, index) + theCharacter + hiddenWord.substr(index + 1);
}

function checkCharacter(theCharacter)
{
	var found = false;
	for (var i = 0; i < hiddenWordLength; i++)
	{
		var c = inputWord.substr(i, 1);
		console.log(c);
		if (c === theCharacter)
		{
			hiddenWord = replaceCharacter(hiddenWord, i, theCharacter);
			console.log(hiddenWord);
			found = true
		}

	}
	updateText();
	return found;
}
function makeHiddenWord()
{
	for (var i = 0; i < hiddenWordLength; i++)
	{
		var c = inputWord.substr(i, 1);
		if (c === " ")
		{
			hiddenWord = hiddenWord + " ";
		}
		else
		{
			hiddenWord = hiddenWord + "-";
		}
	}
	console.log("hidden word = " + hiddenWord);
	updateText();
}
function updateText()
{
	var h1 = document.getElementById("hiddenWord");
	h1.innerHTML = hiddenWord;
}