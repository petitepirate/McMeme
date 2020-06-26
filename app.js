
const form = document.querySelector('form');
const topTextInp = document.querySelector('#top');
const bottomTextInp = document.querySelector('#bottom');
const image = document.querySelector('#img')
const finishedMeme = document.querySelector('#generated-memes');


form.addEventListener('submit', function (e) {
    e.preventDefault();
    const newMeme = makeDiv(img
    );
    finishedMeme.appendChild(newMeme);
    form.reset();
});

//make the div
function makeDiv(url) {
    const memeDiv = document.createElement('div');
    const topText = document.createElement('H2');
    const memeImage = document.createElement('img');
    const bottomText = document.createElement('H3');
    memeDiv.setAttribute('id', 'memediv');

    topText.setAttribute('id', 'memetop');
    topText.textContent = topTextInp.value;
    memeDiv.appendChild(topText);


    memeImage.setAttribute('src', image.value);
    memeDiv.appendChild(memeImage);


    bottomText.setAttribute('id', 'memebottom');
    bottomText.innerText = bottomTextInp.value;
    memeDiv.appendChild(bottomText);

    let removeButton = document.createElement("button");
    removeButton.innerText = "I Don't Like This Meme!";
    memeDiv.appendChild(removeButton);

    return memeDiv;
};

finishedMeme.addEventListener("click", function (event) {
    if (event.target.tagName === "BUTTON") {
        event.target.parentElement.remove();
    }
});
