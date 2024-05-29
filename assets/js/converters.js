// ** LOCATION OF CONVERTER FUNCTIONS **

// Global variables
const createRecordLink = document.getElementById("create-record-link");

// Declare global variables to store result and toUnit
let result;
let fromUnit;
let toUnit;

// Function to process conversion for length
function convertLength() {
    const input = parseFloat(document.getElementById("length-input").value);
    const fromUnit = document.getElementById("from-unit").value;
    const toUnit = document.getElementById("to-unit").value;
    const resultContainer = document.getElementById("length-result");

    if (isNaN(input)) {
        resultContainer.innerHTML = "<p>Please enter a valid number.</p>";
        resultContainer.style.display = "block"; // Display the result container
        return;
    }

    // Calculate result based on conversion
    switch (fromUnit) {
        case "mm":
            result = input / 10;
            break;
        case "cm":
            result = input;
            break;
        case "m":
            result = input * 100;
            break;
        case "km":
            result = input * 100000;
            break;
        default:
            result = "Invalid unit";
    }

    switch (toUnit) {
        case "mm":
            result *= 10;
            break;
        case "cm":
            break;
        case "m":
            result /= 100;
            break;
        case "km":
            result /= 100000;
            break;
        default:
            result = "Invalid unit";
    }

    console.log("Result:", result); // Log result to console
    console.log("To Unit:", toUnit); // Log toUnit to console

    // Display the result
    resultContainer.innerHTML = `<p>Result: ${result} ${toUnit}</p>`;
    resultContainer.style.display = "block"; // Display the result container

    // Show the create record link
    if (createRecordLink) {
        createRecordLink.style.display = "inline"; // Show the link
    }

}

// Function to process conversion for weight
function convertWeight() {
    const input = parseFloat(document.getElementById("weight-input").value);
    const fromUnit = document.getElementById("from-unit").value;
    const toUnit = document.getElementById("to-unit").value;
    const resultContainer = document.getElementById("length-result");

    if (isNaN(input)) {
        resultContainer.innerHTML = "<p>Please enter a valid number.</p>";
        resultContainer.style.display = "block"; // Display the result container
        return;
    }

    // Calculate result based on conversion
    switch (fromUnit) {
        case "mg":
            result = input / 1000;
            break;
        case "g":
            result = input;
            break;
        case "kg":
            result = input * 1000;
            break;
        case "t":
            result = input * 1000000;
            break;
        default:
            result = "Invalid unit";
    }

    switch (toUnit) {
        case "mg":
            result *= 1000;
            break;
        case "g":
            break;
        case "kg":
            result /= 1000;
            break;
        case "t":
            result /= 1000000;
            break;
        default:
            result = "Invalid unit";
    }

    console.log("Result:", result); // Log result to console
    console.log("To Unit:", toUnit); // Log toUnit to console

    // Display the result
    resultContainer.innerHTML = `<p>Result: ${result} ${toUnit}</p>`;
    resultContainer.style.display = "block"; // Display the result container

    // Show the create record link
    if (createRecordLink) {
        createRecordLink.style.display = "inline"; // Show the link
    }

}