document.addEventListener("DOMContentLoaded", function() {

    console.log('script.js loaded');

    // Global variables
    let result;
    let toUnit;
    const mainPage = document.getElementById("main-page");
    const resultContainer = document.getElementById("water-result");

    // **************** Load Partials **************** //
// Function to load partials
function loadPartial(id, url) {
    const element = document.getElementById(id);
    if (element) {
        fetch(url)
            .then(response => response.text())
            .then(data => {
                element.innerHTML = data;
            })
            .catch(error => console.error('Error loading partial:', error));
    } else {
        console.log(`Element with id "${id}" not found. Skipping loading of partial from ${url}`);
    }
}

// Load partials
loadPartial('import-header', '/aquarist-calculator/partials/header.html');
loadPartial('import-title', '/aquarist-calculator/partials/title.html');
loadPartial('import-footer', '/aquarist-calculator/partials/footer.html');
loadPartial('import-coming_soon', '/aquarist-calculator/partials/coming_soon.html');
    // ******************** END OF FUNCTION ******************** //


    // **************** Volume of a square tank **************** //
        const nav_volumeSquare = document.getElementById("nav-volume-square"); // Declare the MENU BUTTON
        const calc_volumeSquare = document.getElementById("calc-volume-square"); // Declare the CALCULATE BUTTON
    
     if (nav_volumeSquare) { // Check if the MENU BUTTON has been pressed
        nav_volumeSquare.addEventListener("click", function(event) { // Add event parameter to the function
            event.preventDefault();
            console.log("Navigation button clicked - Tank Volume Square"); // Log the press in the console
            window.location.href = "/aquarist-calculator/category/calculators/tank_volume_square.html"; // Redirect to the Tank Volume Square calculator page
        });
     }

     if (calc_volumeSquare) { // Check if the CALCULATE BUTTON has been pressed
        calc_volumeSquare.addEventListener("click", function(event) { // Add event parameter to the function
            console.log("Calculate/convert button clicked - Tank Volume Square"); // Log the press in the console
            calculateTankVolumeSquare(); // Call the relevent convert/calculate function
        });
     }
    // ******************** END OF FUNCTION ******************** //

    
    // **************** Volume of a cylinderical tank **************** //
    const nav_volumeCylinder = document.getElementById("nav-volume-cylinder"); // Declare the MENU BUTTON
    const calc_volumeCylinder = document.getElementById("calc-volume-cylinder"); // Declare the CALCULATE BUTTON

    if (nav_volumeCylinder) { // Check if the MENU BUTTON has been pressed
        nav_volumeCylinder.addEventListener("click", function(event) { // Add event parameter to the function
            event.preventDefault();
            console.log("Navigation button clicked - Tank Volume Cylinder"); // Log the press in the console
            window.location.href = "/aquarist-calculator/category/calculators/tank_volume_cylinder.html"; // Redirect to the Tank Volume Cylinder calculator page
        });
    }

    if (calc_volumeCylinder) { // Check if the CALCULATE BUTTON has been pressed
        calc_volumeCylinder.addEventListener("click", function(event) { // Add event parameter to the function
            console.log("Calculate/convert button clicked - Tank Volume Cylinder"); // Log the press in the console
            calculateTankVolumeCylinder(); // Call the relevent convert/calculate function
        });
    }
    // ******************** END OF FUNCTION ******************** //


    // **************** Convert Oxygen **************** //
    const nav_convertOxygen = document.getElementById("nav-convert-oxygen"); // Declare the MENU BUTTON
    const calc_convertOxygen = document.getElementById("calc-convert-oxygen"); // Declare the CALCULATE BUTTON

    if (nav_convertOxygen) { // Check if the MENU BUTTON has been pressed
        nav_convertOxygen.addEventListener("click", function(event) { // Add event parameter to the function
            event.preventDefault();
            console.log("Navigation button clicked - Convert Oxygen"); // Log the press in the console
            window.location.href = "/aquarist-calculator/category/converters/dissolved-oxygen.html"; // Redirect to the Convert Oxygen calculator page
        });
    }

    if (calc_convertOxygen) { // Check if the CALCULATE BUTTON has been pressed
        calc_convertOxygen.addEventListener("click", function(event) { // Add event parameter to the function
            console.log("Calculate/convert button clicked - Oxygen"); // Log the press in the console
            convertOxygen(); // Call the relevent convert/calculate function
        });
    }
    // ******************** END OF FUNCTION ******************** //


    // **************** Convert Salinity **************** //
    const nav_convertSalinity = document.getElementById("nav-convert-salinity"); // Declare the MENU BUTTON
    const calc_convertSalinity = document.getElementById("calc-convert-salinity"); // Declare the CALCULATE BUTTON
    
    if (nav_convertSalinity) { // Check if the MENU BUTTON has been pressed
        nav_convertSalinity.addEventListener("click", function(event) { // Add event parameter to the function
            event.preventDefault();
            console.log("Navigation button clicked - Convert Salinity"); // Log the press in the console
            window.location.href = "/aquarist-calculator/category/converters/salinity.html"; // Redirect to the Convert Salinity calculator page
        });
    }

    if (calc_convertSalinity) { // Check if the CALCULATE BUTTON has been pressed
        calc_convertSalinity.addEventListener("click", function(event) { // Add event parameter to the function
            console.log("Calculate/convert button clicked - Salinity"); // Log the press in the console
            convertSalinity(); // Call the relevent convert/calculate function
        });
    }
    // ******************** END OF FUNCTION ******************** //


    // **************** Convert Volume **************** //
    const nav_convertVolume = document.getElementById("nav-convert-volume"); // Declare the MENU BUTTON
    const calc_convertVolume = document.getElementById("calc-convert-volume"); // Declare the CALCULATE BUTTON

    if (nav_convertVolume) { // Check if the MENU BUTTON has been pressed
        nav_convertVolume.addEventListener("click", function(event) { // Add event parameter to the function
            event.preventDefault();
            console.log("Navigation button clicked - Convert Volume"); // Log the press in the console
            window.location.href = "/aquarist-calculator/category/converters/volume.html"; // Redirect to the Convert Volume calculator page
        });
    }

    if (calc_convertVolume) { // Check if the CALCULATE BUTTON has been pressed
        calc_convertVolume.addEventListener("click", function(event) { // Add event parameter to the function
            console.log("Calculate/convert button clicked - Volume"); // Log the press in the console
            convertVolume(); // Call the relevent convert/calculate function
        });
    }
    // ******************** END OF FUNCTION ******************** //


    // **************** Convert Weight **************** //
    const nav_convertWeight = document.getElementById("nav-convert-weight"); // Declare the MENU BUTTON
    const calc_convertWeight = document.getElementById("calc-convert-weight"); // Declare the CALCULATE BUTTON

    if (nav_convertWeight) { // Check if the MENU BUTTON has been pressed
        nav_convertWeight.addEventListener("click", function(event) { // Add event parameter to the function
            event.preventDefault();
            console.log("Navigation button clicked - Convert Weight"); // Log the press in the console
            window.location.href = "/aquarist-calculator/category/converters/weight.html"; // Redirect to the Convert Weight calculator page
        });
    }

    if (calc_convertWeight) { // Check if the CALCULATE BUTTON has been pressed
        calc_convertWeight.addEventListener("click", function(event) { // Add event parameter to the function
            console.log("Calculate/convert button clicked - Weight"); // Log the press in the console
            convertWeight(); // Call the relevent convert/calculate function
        });
    }
    // ******************** END OF FUNCTION ******************** //


    // **************** Convert Temperature **************** //
    const nav_convertTemperature = document.getElementById("nav-convert-temperature"); // Declare the MENU BUTTON
    const calc_convertTemperature = document.getElementById("calc-convert-temperature"); // Declare the CALCULATE BUTTON

    if (nav_convertTemperature) { // Check if the MENU BUTTON has been pressed
        nav_convertTemperature.addEventListener("click", function(event) { // Add event parameter to the function
            event.preventDefault();
            console.log("Navigation button clicked - Convert Temperature"); // Log the press in the console
            window.location.href = "/aquarist-calculator/category/converters/temperature.html"; // Redirect to the Convert Temperature calculator page
        });
    }

    if (calc_convertTemperature) { // Check if the CALCULATE BUTTON has been pressed
        calc_convertTemperature.addEventListener("click", function(event) { // Add event parameter to the function
            console.log("Calculate/convert button clicked - Temperature"); // Log the press in the console
            convertTemperature(); // Call the relevent convert/calculate function
        });
    }
    // ******************** END OF FUNCTION ******************** //


    // **************** Convert Length **************** //
    const nav_convertLength = document.getElementById("nav-convert-length"); // Declare the MENU BUTTON
    const calc_convertLength = document.getElementById("calc-convert-length"); // Declare the CALCULATE BUTTON

    if (nav_convertLength) { // Check if the MENU BUTTON has been pressed
        nav_convertLength.addEventListener("click", function(event) { // Add event parameter to the function
            event.preventDefault();
            console.log("Navigation button clicked - Convert Length"); // Log the press in the console
            window.location.href = "/aquarist-calculator/category/converters/length.html"; // Redirect to the Convert Length calculator page
        });
    }

    if (calc_convertLength) { // Check if the CALCULATE BUTTON has been pressed
        calc_convertLength.addEventListener("click", function(event) { // Add event parameter to the function
            console.log("Calculate/convert button clicked - Length"); // Log the press in the console
            convertLength(); // Call the relevent convert/calculate function
        });
    }
    // ******************** END OF FUNCTION ******************** //


    // **************** Convert Alkalinity **************** //
    const nav_convertAlkalinity = document.getElementById("nav-convert-alkalinity"); // Declare the MENU BUTTON
    const calc_convertAlkalinity = document.getElementById("calc-convert-alkalinity"); // Declare the CALCULATE BUTTON

    if (nav_convertAlkalinity) { // Check if the MENU BUTTON has been pressed
        nav_convertAlkalinity.addEventListener("click", function(event) { // Add event parameter to the function
            event.preventDefault();
            console.log("Navigation button clicked - Convert Alkalinity"); // Log the press in the console
            window.location.href = "/aquarist-calculator/category/converters/alkalinity.html"; // Redirect to the Convert Alkalinity calculator page
        });
    }

    if (calc_convertAlkalinity) { // Check if the CALCULATE BUTTON has been pressed
        calc_convertAlkalinity.addEventListener("click", function(event) { // Add event parameter to the function
            console.log("Calculate/convert button clicked - Alkalinity"); // Log the press in the console
            convertAlkalinity(); // Call the relevent convert/calculate function
        });
    }
    // ******************** END OF FUNCTION ******************** //



    // Check if edibleBtn pressed 
    // Check if waterBtn pressed 

    const waterBtn = document.getElementById("water-btn");
    const edibleBtn = document.getElementById("edible-btn");
    const edibleCalculateBtn = document.getElementById("edible-calculate-btn");
    const waterCalculateBtn = document.getElementById("water-calculate-btn");



});
