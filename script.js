const upload_an_image = document.querySelector('#image_input');
const try_me = document.querySelector('#try_me');
let imageFile;
let uploaded_image;
let net;
var image_to_test;

async function app() {
  console.log('Loading mobilenet..');

  // Load the model.
  net = await mobilenet.load();
  console.log('Successfully loaded model');
  //////// ###############################################
  const imgEl = uploaded_image; //// what is the image? How do I enter it???
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

try_me.addEventListener('click', function () {
  if (uploaded_image) {
    console.log('Try Me Clicked!');
    app();
  } else {
    console.log('Nothing to test!');
  }
});

//////// with their html this is example script from tensorflow
// async function app() {
//   console.log('Loading mobilenet..');

//   // Load the model.
//   net = await mobilenet.load();
//   console.log('Successfully loaded model');
//   //////// ###############################################
//   const imgEl = document.getElementById('img');
//   const result = await net.classify(imgEl);
//   console.log(result);
// }

// app();
