const images = ["newyork1.jpg", "newyork2.jpg", "newyork3.jpeg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;
console.log(chosenImage);

document.body.appendChild(bgImage);
