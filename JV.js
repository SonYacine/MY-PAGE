const images = [
  "image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg", "image5.jpg",
  "image6.jpg", "image7.jpg", "image8.jpg", "image9.jpg", "image10.jpg",
  "image11.jpg", "image12.jpg", "image13.jpg", "image14.jpg", "image15.jpg",
  "image16.jpg", "image17.jpg", "image18.jpg", "image19.jpg", "image20.jpg",
  "image21.jpg", "image22.jpg", "image23.jpg", "image24.jpg", "image25.png",
  "image26.jpg", "image27.jpg", "image28.jpg", "image29.png", "image30.png",
  "image31.png", "image32.png"
];

let currentIndex = -1;

function openPopup(imageSrc) {
  const popup = document.getElementById('image-popup');
  const popupImage = document.getElementById('popup-image');
  popup.style.display = 'flex';
  popupImage.src = imageSrc;
  
  currentIndex = images.indexOf(imageSrc);
}

function closePopup() {
  const popup = document.getElementById('image-popup');
  popup.style.display = 'none';
}

function showPrevImage() {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = images.length - 1;
  }
  const popupImage = document.getElementById('popup-image');
  popupImage.src = images[currentIndex];
}

function showNextImage() {
  if (currentIndex < images.length - 1) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }
  const popupImage = document.getElementById('popup-image');
  popupImage.src = images[currentIndex];
}

document.getElementById("show-gallery-btn").addEventListener("click", function () {
  const gallery = document.getElementById("image-gallery");
  if (gallery.style.display === "none" || gallery.style.display === "") {
    gallery.style.display = "flex";
  } else {
    gallery.style.display = "none";
  }
});
