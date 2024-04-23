{/* <script> */}
        function DisplayDate(){
            document.getElementById("popup-signup").innerHTML = Date();
        }

        let x = document.getElementById("show-signUp");
        x.addEventListener("click", function() {
            // Create a new XMLHttpRequest object
            let xhr = new XMLHttpRequest();

            // Define the file you want to fetch
            xhr.open('GET', 'register.html', true);

            // Set up a function to execute when the request is complete
            xhr.onload = function() {
                if (this.status == 200) {
                    document.getElementById("popup-signup").innerHTML = this.responseText;
                }
            };

            // Send the request
            xhr.send();
        });
    // </script>







// Popup Element[login]
document.querySelector("#show-logIn").addEventListener("click", function(){

  document.querySelector(".popup").classList.add("active");
});

// Close Log In Popup
document.querySelector(".popup .close-btn").addEventListener("click", function(){

  document.querySelector(".popup").classList.remove("active");
});




// Popup Element[Sign Up]
document.querySelector("#show-signUp").addEventListener("click", function(){

  document.querySelector(".popup-signup").classList.add("active");
});

// Close Sign Up Popup
document.querySelector(".popup-signup .close-btn").addEventListener("click", function(){

  document.querySelector(".popup-signup").classList.remove("active");
});




// Form validation
function validateform(){
    let x = document.forms["login_form"]["email"].value;
    if(x == "")
    {
        alert("Please Enter your Email");
        return false;
    }

    
let password = document.getElementById("password").value;
    if (!/(?=.*[@])(?=.*\d).*/.test(password)) {
        alert("Password must include at least one $ OR one @, and one number");
        return false;
}
}


    // document.getElementById('btn_1').addEventListener('click', function() {
    //   loadImage('cars-big\audia1.jpg'); // Replace 'image1.jpg' with the path to your image
    // });

    // document.getElementById('btn_2').addEventListener('click', function() {
    //   loadImage('cars-big\golf6.jpg'); // Replace 'image2.jpg' with the path to your image
    // });

    // document.getElementById('btn_3').addEventListener('click', function() {
    //     loadImage('cars-big\toyotacamry.jpg'); // Replace 'image2.jpg' with the path to your image
    //   });

    //   document.getElementById('btn_4').addEventListener('click', function() {
    //     loadImage('cars-big\bmw320.jpg'); // Replace 'image1.jpg' with the path to your image
    //   });
  
    //   document.getElementById('btn_5').addEventListener('click', function() {
    //     loadImage('cars-big\benz.jpg'); // Replace 'image2.jpg' with the path to your image
    //   });
  
    //   document.getElementById('btn_6').addEventListener('click', function() {
    //       loadImage('cars-big\passatcc.jpg'); // Replace 'image2.jpg' with the path to your image
    //     });

    // function loadImage(imageSrc) {
    //   var xhr = new XMLHttpRequest();
    //   xhr.open('GET', imageSrc, true);
    //   xhr.responseType = 'blob'; // Response type as blob
    //   xhr.onload = function() {
    //     if (this.status === 200) {
    //       var blob = this.response;
    //       var imageUrl = URL.createObjectURL(blob); // Create image URL from blob
    //       var img = document.createElement('img');
    //       img.src = imageUrl;
    //       document.getElementById('imageContainer').appendChild(img);
    //     }
    //   };
    //   xhr.send();
    // }
  


    // Get references to all buttons and the image container
const buttons = document.querySelectorAll('.car_list_butt');
const imageContainer = document.getElementById('imageContainer');

// Function to display the corresponding image based on button ID
function displayImage(button) {
  const carModel = button.textContent.trim(); // Extract car model text from button content
  let imageName;

  // Map car model to corresponding image name (replace with your actual image names)
  switch (carModel) {
    case 'Audi A1 S-Line':
      imageName = 'audia1.jpg';
      break;

    case 'VW Golf 6':
      imageName = 'golf6.jpg';
      break;

      case 'Toyota Canary':
        imageName = 'toyotacamry.jpg';
        break;

        case 'BMW 320 MadernLine':
      imageName = 'bmw320.jpg';
      break;

      case 'Mercedes-Benz GLK':
      imageName = 'benz.jpg';
      break;

      case 'VW Passat CC':
      imageName = 'passatcc.jpg';
      break;
    // Add cases for other car models and image names
    default:
      imageName = 'placeholder.jpg'; // Use a placeholder image for unknown models
  }

  // Create a new image element
  const img = document.createElement('img');
  img.src = `images/cars-big/${imageName}`; // Assuming images folder is named "images"

  // Clear any existing image in the container
  imageContainer.innerHTML = ''; // Remove previous image

  // Append the new image to the container
  imageContainer.appendChild(img);
}

// Add click event listener to all buttons
buttons.forEach(button => {
  button.addEventListener('click', () => displayImage(button));
});


// Smooth Scrooling
document.querySelectorAll('a.scroll-smooth').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const target = document.querySelector(this.getAttribute('href'));

      if (target) {
          const targetPosition = target.offsetTop;
          const startPosition = window.scrollY || window.pageYOffset;
          const distance = targetPosition - startPosition;
          const duration = 1000; // Adjust this value to control the duration of the scroll animation
          let start = null;

          function step(timestamp) {
              if (!start) start = timestamp;
              const progress = timestamp - start;
              window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
              if (progress < duration) {
                  window.requestAnimationFrame(step);
              }
          }

          function easeInOutCubic(t, b, c, d) {
              // cubic easing in/out - acceleration until halfway, then deceleration
              t /= d / 2;
              if (t < 1) return c / 2 * t * t * t + b;
              t -= 2;
              return c / 2 * (t * t * t + 2) + b;
          }

          window.requestAnimationFrame(step);
      }
  });
});

