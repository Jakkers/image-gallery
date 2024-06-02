console.log("🙌🏼");

//element to store image values ->
const myImages = [
  {
    src: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    largeSrc:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "A mountain range at night with a beautiful galaxy in the background",
    width: "300px",
  },
  {
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D ",
    largeSrc:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D ",
    alt: "A mountain range with a blanket of clouds in the foreground",
    width: "300px",
  },
  {
    src: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?q=80&w=2976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    largeSrc:
      "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?q=80&w=2976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "A snowy mountain range on a partly cloudy day",
    width: "300px",
  },
  {
    src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    largeSrc:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "A mountain range with a pine forest in the forground",
    width: "300px",
  },
  {
    src: "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?q=80&w=2976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    largeSrc:
      "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?q=80&w=2976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "A partly sillouetted mountain range with a clear sky at twilight",
    width: "300px",
  },
  {
    src: "https://images.unsplash.com/photo-1485160497022-3e09382fb310?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    largeSrc:
      "https://images.unsplash.com/photo-1485160497022-3e09382fb310?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "A mountain range with a sunset in the background",
    width: "300px",
  },
  {
    src: "https://images.unsplash.com/photo-1434394354979-a235cd36269d?q=80&w=2951&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    largeSrc:
      "https://images.unsplash.com/photo-1434394354979-a235cd36269d?q=80&w=2951&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "A mountain valley with the sun shining through",
    width: "300px",
  },
  {
    src: "https://images.unsplash.com/photo-1477346611705-65d1883cee1e?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    largeSrc:
      "https://images.unsplash.com/photo-1477346611705-65d1883cee1e?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "A mountain range in the dark with a purple looking mid mid-ground",
    width: "300px",
  },
  {
    src: "https://images.unsplash.com/photo-1491904768633-2b7e3e7fede5?q=80&w=3131&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    largeSrc:
      "https://images.unsplash.com/photo-1491904768633-2b7e3e7fede5?q=80&w=3131&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "A very snowy mountain on a partly cloudy day",
    width: "300px",
  },
  {
    src: "https://images.unsplash.com/photo-1458668383970-8ddd3927deed?q=80&w=2967&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    largeSrc:
      "https://images.unsplash.com/photo-1458668383970-8ddd3927deed?q=80&w=2967&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "A snowy mountain range with a blanket of clouds in the foreground",
    width: "300px",
  },
];

//!(optional) carousel or arrow keys
//global variable to store the current img index for the big image
//let currentIndex = 0;

let thumbnailContainer = document.getElementById("thumbnail-container");

let largeImageContainer = document.getElementById("large-image-container");

//select the DOM elements that contain our images with a document method
//select the thumbnail-container
//select the large-image-container

//function to create my thumbnail images --> action
function createThumbnails(thumbnails) {
  //a loop to create multiple images -->
  thumbnails.forEach((thumbnail) => {
    let newThumb = document.createElement("img");

    newThumb.src = thumbnail.src;
    newThumb.alt = thumbnail.alt;

    // newThumb.width = thumbnail.width;

    thumbnailContainer.appendChild(newThumb);

    thumbnailContainer.addEventListener("Click", function () {
      createLargeImage(largeImageDisplay);
    });
    // for (let i = 0; i++; ) {}

    //a document method that creates a DOM element (img)
    //assign a value to the img attributes (eg. img.src="value")
    //optional: assign a class name to the image element (.className property)
    //append the new elements to the DOM useing a document method (appendChild)
    //add an event listener for each image for click event
    //parameter.addEventListener("click", function (){})
  });
}

createThumbnails(myImages);

// let largeImageDisplay = document.querySelector("#large-image-display");
// function createLargeImage(gallery) {
//   largeImageDisplay.src = gallery["large-image-container"].src;
//   for (let i = 0; i++; ) {}
// 

// createThumbnails(argument --> images)

// createLargeImage(myImages);
// function createLargeImage(largeImages) {
//   largeImages.forEach((largeImage) => {
//     let newLargeImage = document.createElement("largeImg");

//     newLargeImage.largeSrc = largeImage.largeSrc;
//     newLargeImage.alt = largeImage.alt;

//     largeImageContainer.appendChild(newLargeImage);
//   });

//problem --> the images appear one after the other (innerHTML = "")
//create an image element
//(optional) add a class name
//set the src value
//set the alt value
//append the large image to the DOM

let next = document.querySelector(".next");

next.addEventListener("click", () => {
  let largeImages = document.querySelectorAll("#large-image-display");
  document.querySelector(".slide").appendChild(largeImages[0++]);
});
