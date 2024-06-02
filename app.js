// Example array of image filenames
const images = [
  {
    thumbSrc: "mountain-1-250px.jpeg",
    largeSrc: "mountain-1.jpeg",
    alt: "A mountain range at night with a beautiful galaxy in the background",
    classNameThumb: "thumbnail-image",
  },
  {
    thumbSrc: "mountain-2-250px.jpeg",
    largeSrc: "mountain-2.jpeg",
    alt: "A mountain range with a blanket of clouds in the foreground",
    classNameThumb: "thumbnail-image",
  },
  {
    thumbSrc: "mountain-3-250px.jpeg",
    largeSrc: "mountain-3.jpeg",
    alt: "A snowy mountain range on a partly cloudy day",
    classNameThumb: "thumbnail-image",
  },
  {
    thumbSrc: "mountain-4-250px.jpeg",
    largeSrc: "mountain-4.jpeg",
    alt: "A mountain range with a pine forest in the forground",
    classNameThumb: "thumbnail-image",
  },
  {
    thumbSrc: "mountain-5-250px.jpeg",
    largeSrc: "mountain-5.jpeg",
    alt: "A partly sillouetted mountain range with a clear sky at twilight",
    classNameThumb: "thumbnail-image",
  },
  {
    thumbSrc: "mountain-6-250px.jpeg",
    largeSrc: "mountain-6.jpeg",
    alt: "A mountain range with a sunset in the background",
    classNameThumb: "thumbnail-image",
  },
  {
    thumbSrc: "mountain-7-250px.jpeg",
    largeSrc: "mountain-7.jpeg",
    alt: "A mountain valley with the sun shining through",
    classNameThumb: "thumbnail-image",
  },
  {
    thumbSrc: "mountain-8-250px.jpeg",
    largeSrc: "mountain-8.jpeg",
    alt: "A mountain range in the dark with a purple looking mid mid-ground",
    classNameThumb: "thumbnail-image",
  },
  {
    thumbSrc: "mountain-9-250px.jpeg",
    largeSrc: "mountain-9.jpeg",
    alt: "A snowy mountain range with a blanket of clouds in the foreground",
    classNameThumb: "thumbnail-image",
  },
];

// Container element where images will be added
let thumbContainer = document.getElementById("thumbnail-container");
console.log(thumbContainer);
let largeContainer = document.getElementById("large-image-container");
console.log(largeContainer);

//selecting where the image will be
let displayImage = document.getElementById("large-image-display");
console.log(displayImage);

let i = 0;

images.forEach((image, index) => {
  // Create a new img element
  let img = document.createElement("img");

  // Set attributes template literals
  img.src = `./assets/${image.thumbSrc}`;
  img.alt = `${image.alt}`;
  img.className = `${image.classNameThumb}`;
  img.tabIndex = 0;

  // Append the img element to the container
  thumbContainer.appendChild(img);

  //image changes to selected. Also resets index so button order matches.
  img.addEventListener("click", () => {
    i = index;
    displayImage.src = `./assets/${image.largeSrc}`;
  });
});

tabIndex = 0;

//change image on button click
const next = document.querySelector(".next");
console.log(next);

const previous = document.querySelector(".previous");
console.log(previous);

//creates sequential order and cycles
console.log(i);
previous.addEventListener("click", () => {
  i = (i - 1 + images.length) % images.length;
  displayImage.src = `./assets/${images[i].largeSrc}`;
});
next.addEventListener("click", () => {
  i = (i + 1) % images.length;
  displayImage.src = `./assets/${images[i].largeSrc}`;
});

//allows elements to be focused on
const elements = document.querySelectorAll("button, .thumbnail-image");
console.log(elements);

//! The below code seems to be battling the arrows so i've left off for now
// element.focus();

// elements.forEach((element) => {
//   element.addEventListener("focus", function (event) {
//     console.log(`Element: ${event.target} is focused`);
//   });
// });

//arrow keys change image
document.addEventListener("keydown", (e) => {
  e.preventDefault();
  if (e.key === "ArrowRight") {
    i = (i + 1) % images.length;
    displayImage.src = `./assets/${images[i].largeSrc}`;
  }
});

document.addEventListener("keydown", (e) => {
  e.preventDefault();
  if (e.key === "ArrowLeft") {
    i = (i - 1 + images.length) % images.length;
    displayImage.src = `./assets/${images[i].largeSrc}`;
  }
});

//Enter to select image
// document.addEventListener("keypress", (event) => {
//   e.preventDefault();
//   if (event.key === "Enter") {
//   }
// });
