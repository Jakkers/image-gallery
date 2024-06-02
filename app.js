// Example array of image filenames
const images = [
  {
    thumbSrc: "mountain-1-250px.jpeg",
    largeSrc: "mountain-1.jpeg",
    alt: "A mountain range at night with a beautiful galaxy in the background",
    classNameThumb: "thumbnail-image-1",
  },
  {
    thumbSrc: "mountain-2-250px.jpeg",
    largeSrc: "mountain-2.jpeg",
    alt: "A mountain range with a blanket of clouds in the foreground",
    classNameThumb: "thumbnail-image-2",
  },
  {
    thumbSrc: "mountain-3-250px.jpeg",
    largeSrc: "mountain-3.jpeg",
    alt: "A snowy mountain range on a partly cloudy day",
    classNameThumb: "thumbnail-image-3",
  },
  {
    thumbSrc: "mountain-4-250px.jpeg",
    largeSrc: "mountain-4.jpeg",
    alt: "A mountain range with a pine forest in the forground",
    classNameThumb: "thumbnail-image-4",
  },
  {
    thumbSrc: "mountain-5-250px.jpeg",
    largeSrc: "mountain-5.jpeg",
    alt: "A partly sillouetted mountain range with a clear sky at twilight",
    classNameThumb: "thumbnail-image-5",
  },
  {
    thumbSrc: "mountain-6-250px.jpeg",
    largeSrc: "mountain-6.jpeg",
    alt: "A mountain range with a sunset in the background",
    classNameThumb: "thumbnail-image-6",
  },
  {
    thumbSrc: "mountain-7-250px.jpeg",
    largeSrc: "mountain-7.jpeg",
    alt: "A mountain valley with the sun shining through",
    classNameThumb: "thumbnail-image-7",
  },
  {
    thumbSrc: "mountain-8-250px.jpeg",
    largeSrc: "mountain-8.jpeg",
    alt: "A mountain range in the dark with a purple looking mid mid-ground",
    classNameThumb: "thumbnail-image-8",
  },
  {
    thumbSrc: "mountain-9-250px.jpeg",
    largeSrc: "mountain-9.jpeg",
    alt: "A snowy mountain range with a blanket of clouds in the foreground",
    classNameThumb: "thumbnail-image-9",
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

images.forEach((image) => {
  // Create a new img element
  let img = document.createElement("img");

  // Set attributes template literals
  img.src = `./assets/${image.thumbSrc}`;
  img.alt = `${image.alt}`;
  img.className = `${image.classNameThumb}`;

  // Append the img element to the container
  thumbContainer.appendChild(img);

  //event to change image on click
  img.addEventListener("click", () => {
    displayImage.src = `./assets/${image.largeSrc}`;
  });
  //change image on button click
  const next = document.querySelector(".next");
  console.log(next);

  next.addEventListener("click", () => {
    displayImage.src = `./assets/${image.largeSrc}`;
  });
});

//allows elements to be focused on
const elements = document.querySelectorAll("button, .thumbnail-image");
console.log(elements);

elements.forEach((element) => {
  element.addEventListener("focus", function (event) {
    console.log(`Element: ${event.target} is focused`);
  });
});
