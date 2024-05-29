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
        resultContainer.innerHTML = "<p>Please enter a valid number</p>";
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
        resultContainer.innerHTML = "<p>Please enter a valid number</p>";
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

// Function to process conversion for salinity
function convertSalinity() {
    const input = parseFloat(document.getElementById("salinity-input").value);
    const fromUnit = document.getElementById("from-unit").value;
    const toUnit = document.getElementById("to-unit").value;
    const resultContainer = document.getElementById("salinity-result");

    if (isNaN(input)) {
        resultContainer.innerHTML = "<p>Please enter a valid number</p>";
        resultContainer.style.display = "block"; // Display the result container
        return;
    }

    // Calculate result based on conversion
    switch (fromUnit) {
        case "ppt":
            result = input;
            break;
        case "ppm":
            result = input / 1000;
            break;
        case "ppb":
            result = input / 1000000;
            break;
        default:
            result = "Invalid unit";
    }

    switch (toUnit) {
        case "ppt":
            break;
        case "ppm":
            result *= 1000;
            break;
        case "ppb":
            result *= 1000000;
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

// Function to process conversion for oxygen
function convertOxygen() {
    const input = parseFloat(document.getElementById("oxygen-input").value);
    const fromUnit = document.getElementById("from-unit").value;
    const toUnit = document.getElementById("to-unit").value;
    const resultContainer = document.getElementById("oxygen-result");

    if (isNaN(input)) {
        resultContainer.innerHTML = "<p>Please enter a valid number</p>";
        resultContainer.style.display = "block"; // Display the result container
        return;
    }

    // Calculate result based on conversion
    switch (fromUnit) {
        case "mg/L":
            result = input;
            break;
        case "ppm":
            result = input;
            break;
        case "%":
            result = input * 10;
            break;
        default:
            result = "Invalid unit";
    }

    switch (toUnit) {
        case "mg/L":
            break;
        case "ppm":
            break;
        case "%":
            result /= 10;
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

// Function to process conversion for temperature
function convertTemperature() {
    const input = parseFloat(document.getElementById("temperature-input").value);
    const fromUnit = document.getElementById("from-unit").value;
    const toUnit = document.getElementById("to-unit").value;
    const resultContainer = document.getElementById("temperature-result");

    if (isNaN(input)) {
        resultContainer.innerHTML = "<p>Please enter a valid number</p>";
        resultContainer.style.display = "block"; // Display the result container
        return;
    }

    // Calculate result based on conversion
    switch (fromUnit) {
        case "C":
            result = input;
            break;
        case "F":
            result = (input - 32) * (5 / 9);
            break;
        case "K":
            result = input - 273.15;
            break;
        default:
            result = "Invalid unit";
    }

    switch (toUnit) {
        case "C":
            break;
        case "F":
            result = (input * (9 / 5)) + 32;
            break;
        case "K":
            result += 273.15;
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

// Function to process conversion for temperature
function convertTemperature() {
    const input = parseFloat(document.getElementById("temperature-input").value);
    const fromUnit = document.getElementById("from-unit").value;
    const toUnit = document.getElementById("to-unit").value;
    const resultContainer = document.getElementById("temperature-result");

    if (isNaN(input)) {
        resultContainer.innerHTML = "<p>Please enter a valid number</p>";
        resultContainer.style.display = "block"; // Display the result container
        return;
    }

    // Calculate result based on conversion
    switch (fromUnit) {
        case "C":
            result = input;
            break;
        case "F":
            result = (input - 32) * (5 / 9);
            break;
        case "K":
            result = input - 273.15;
            break;
        default:
            result = "Invalid unit";
    }

    switch (toUnit) {
        case "C":
            break;
        case "F":
            result = (input * (9 / 5)) + 32;
            break;
        case "K":
            result += 273.15;
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

// Function to process conversion for volume
function convertVolume() {
    const input = parseFloat(document.getElementById("volume-input").value);
    const fromUnit = document.getElementById("from-unit").value;
    const toUnit = document.getElementById("to-unit").value;
    const resultContainer = document.getElementById("volume-result");

    if (isNaN(input)) {
        resultContainer.innerHTML = "<p>Please enter a valid number</p>";
        resultContainer.style.display = "block"; // Display the result container
        return;
    }

    // Calculate result based on conversion
    switch (fromUnit) {
        case "ml":
            result = input;
            break;
        case "l":
            result = input * 1000;
            break;
        case "m3":
            result = input * 1000000;
            break;
        default:
            result = "Invalid unit";
    }

    switch (toUnit) {
        case "ml":
            break;
        case "l":
            result /= 1000;
            break;
        case "m3":
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

