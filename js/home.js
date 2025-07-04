const images = [
  "media0.webp",
  "media1.jpg",
  "media2.webp",
  "media3.webp",
  "media4.jpg",
  "media5.webp",
  "media6.jpg",
  "media7.webp",
  "media8.webp",
  "media9.jpg",
  "media10.jpg",
  "media11.jpg",
  "media12.jpg",
  "media13.jpg",
  "media14.webp",
  "media15.jpg",
  "media16.webp",
  "media17.jpg",
  "media18.jpg",
  "media19.webp",
  "media20.jpg",
  "media21.webp",
  "media22.webp",
  "media23.webp",
  "media24.jpg",
  "media25.webp",
  "media26.webp",
  "media27.jpg",
  "media28.jpg",
  "media29.jpg",
  "media30.jpg",
  "media31.webp",
  "media32.jpg",
];

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

//carosello con 6 immagini per riga
function populateCarousel(carouselId, images) {
  const carouselInner = document.getElementById(carouselId);
  carouselInner.innerHTML = "";
  for (let i = 0; i < images.length; i += 6) {
    const activeClass = i === 0 ? "active" : "";
    const item = document.createElement("div");
    item.className = `carousel-item ${activeClass}`;
    const row = document.createElement("div");
    row.className = "row";
    for (let j = i; j < i + 6 && j < images.length; j++) {
      const col = document.createElement("div");
      col.className = "col-6 col-md-3 col-lg-2 mb-2";
      const img = document.createElement("img");
      img.src = `/Netflix-assets/assets/media/${images[j]}`;
      img.className = "img-fluid";
      img.alt = `Show ${j + 1}`;
      col.appendChild(img);
      row.appendChild(col);
    }
    item.appendChild(row);
    carouselInner.appendChild(item);
  }
}

//carosello Trending Now
const shuffledImages = shuffle([...images]);
populateCarousel("trending-carousel-inner", shuffledImages);

const shuffledImages2 = shuffle([...images]);
populateCarousel("watch-again-carousel-inner", shuffledImages2);

const shuffledImages3 = shuffle([...images]);
populateCarousel("new-releases-carousel-inner", shuffledImages3);
