const upload_an_image = document.querySelector('#image_input');
const try_me = document.querySelector('#try_me');
let imageFile;
let uploaded_image;
let net;

var image_to_test;

// = new Image(); // Image constructor
// image_to_test.src = imageFile.name;
// image_to_test.alt = 'alt';
// document.body.appendChild(image_to_test);

// function thisDoesNothing() {
//   //{imageFile} = returns object
//   ////// imageFile: File {name: 'defaultImage.jpg', lastModified: 1642821742544, lastModifiedDate: Fri Jan 21 2022 22:22:22 GMT-0500 (Eastern Standard Time), webkitRelativePath: '', size: 958070, …}[[Prototype]]: Object
//   //imageFile.name = returns string
//   ///////defaultImage.jpg
//   //imageFile = returns file
//   ////// File {name: 'defaultImage.jpg', lastModified: 1642821742544, lastModifiedDate: Fri Jan 21 2022 22:22:22 GMT-0500 (Eastern Standard Time), webkitRelativePath: '', size: 958070, …}
//   //'defaultImage.jpg' - returns string

//   return true;
// }

async function app() {
  console.log('Loading mobilenet..');

  // Load the model.
  net = await mobilenet.load();
  console.log('Successfully loaded model');
  image_to_test = createImage();
  //////// ###############################################
  const imgEl = image_to_test; //// what is the image? How do I enter it???
  console.log('is this an image?', imgEl);

  // Make a prediction through the model on our image.
  console.log('Image being scanned.');
  const result = await net.classify(imgEl);
  console.log(result);
}

upload_an_image.addEventListener('change', function () {
  const reader = new FileReader();
  reader.addEventListener('load', () => {
    uploaded_image = reader.result;
    document.querySelector(
      '#display_image'
    ).style.backgroundImage = `url(${uploaded_image})`;
  });

  imageFile = this.files[0];
  reader.readAsDataURL(this.files[0]);
});

async function createImage() {
  await upload_an_image();
  image_to_test = new Image(); // Image constructor
  image_to_test.src = imageFile.name;
}

try_me.addEventListener('click', function () {
  if (uploaded_image) {
    console.log('Try Me Clicked!');
    app();
  } else {
    console.log('Nothing to test!');
  }
});
