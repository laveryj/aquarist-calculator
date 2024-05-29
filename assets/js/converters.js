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
    
        // Convert from fromUnit to cm
        switch (fromUnit) {
            case "mm":
                result = input / 10; // 10 mm = 1 cm
                break;
            case "cm":
                result = input; // already in cm
                break;
            case "m":
                result = input * 100; // 1 m = 100 cm
                break;
            case "km":
                result = input * 100000; // 1 km = 100000 cm
                break;
            default:
                return "Invalid unit"; // error handling for invalid units
        }
    
        // Convert from cm to toUnit
        switch (toUnit) {
            case "mm":
                result *= 10; // 1 cm = 10 mm
                break;
            case "cm":
                break; // already in cm
            case "m":
                result /= 100; // 100 cm = 1 m
                break;
            case "km":
                result /= 100000; // 100000 cm = 1 km
                break;
            default:
                return "Invalid unit"; // error handling for invalid units
        }

    // Limit the result to two decimal places (two significant figures)
    result = Number(result.toFixed(2)); // Adjust the number of decimal places as needed

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
    const resultContainer = document.getElementById("weight-result"); // Result container for weight

    // Check if the input is a valid number
    if (isNaN(input)) {
        resultContainer.innerHTML = "<p>Please enter a valid number</p>";
        resultContainer.style.display = "block"; // Display the result container
        return;
    }

    let result;

    // Calculate result based on conversion
    // Convert from fromUnit to grams (base unit)
    switch (fromUnit) {
        case "mg":
            result = input / 1000; // Convert milligrams to grams (1 mg = 0.001 g)
            break;
        case "g":
            result = input; // Already in grams
            break;
        case "kg":
            result = input * 1000; // Convert kilograms to grams (1 kg = 1000 g)
            break;
        case "t":
            result = input * 1000000; // Convert metric tons to grams (1 t = 1000000 g)
            break;
        default:
            result = "Invalid unit";
    }

    // Convert from grams to the target unit
    switch (toUnit) {
        case "mg":
            result *= 1000; // Convert grams to milligrams (1 g = 1000 mg)
            break;
        case "g":
            // Already in grams, no conversion needed
            break;
        case "kg":
            result /= 1000; // Convert grams to kilograms (1 kg = 1000 g)
            break;
        case "t":
            result /= 1000000; // Convert grams to metric tons (1 t = 1000000 g)
            break;
        default:
            result = "Invalid unit";
    }

    // Limit the result to two decimal places (two significant figures)
    result = Number(result.toFixed(2)); // Adjust the number of decimal places as needed

    // Log result to console
    console.log("Result:", result);
    console.log("To Unit:", toUnit);

    // Display the result
    resultContainer.innerHTML = `<p>Result: ${result} ${toUnit}</p>`;
    resultContainer.style.display = "block"; // Display the result container

    // Show the create record link if applicable
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

    // Check if the input is a valid number
    if (isNaN(input)) {
        resultContainer.innerHTML = "<p>Please enter a valid number</p>";
        resultContainer.style.display = "block"; // Display the result container
        return;
    }

    let result;

    // Calculate result based on conversion
    // Convert from fromUnit to parts per thousand (ppt), which is the base unit for salinity
    switch (fromUnit) {
        case "ppt":
            result = input; // Already in parts per thousand
            break;
        case "ppm":
            result = input / 1000; // Convert parts per million to parts per thousand (1 ppm = 0.001 ppt)
            break;
        case "sg":
            result = input / 1000000; // Convert specific gravity to parts per thousand (1 sg = 0.000001 ppt)
            break;
        case "conductivity":
            result = input / 1000; // Convert conductivity to parts per thousand (assumed conversion, but needs clarification)
            break;
        default:
            result = "Invalid unit";
    }

    // Convert from parts per thousand (ppt) to the target unit
    switch (toUnit) {
        case "ppt":
            // Already in parts per thousand, no conversion needed
            break;
        case "ppm":
            result *= 1000; // Convert parts per thousand to parts per million (1 ppt = 1000 ppm)
            break;
        case "sg":
            result *= 1000000; // Convert parts per thousand to specific gravity (1 ppt = 1000000 sg)
            break;
        case "conductivity":
            result *= 1000; // Convert parts per thousand to conductivity (assumed conversion, but needs clarification)
            break;
        default:
            result = "Invalid unit";
    }

    // Limit the result to two decimal places (two significant figures)
    result = Number(result.toFixed(2)); // Adjust the number of decimal places as needed

    // Log result to console
    console.log("Result:", result);
    console.log("To Unit:", toUnit);

    // Display the result
    resultContainer.innerHTML = `<p>Result: ${result} ${toUnit}</p>`;
    resultContainer.style.display = "block"; // Display the result container

    // Show the create record link if applicable
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

    // Check if the input is a valid number
    if (isNaN(input)) {
        resultContainer.innerHTML = "<p>Please enter a valid number</p>";
        resultContainer.style.display = "block"; // Display the result container
        return;
    }

    let result;

    // Calculate result based on conversion from the input unit to mg/l (milligrams per liter)
    switch (fromUnit) {
        case "mg/l":
            result = input; // Already in mg/l
            break;
        case "ppm":
            result = input; // ppm is equivalent to mg/l in this context
            break;
        case "%":
            result = (input / 100) * 9; // Convert percentage to mg/l (1% = 9 mg/l)
            break;
        default:
            result = "Error: invalid unit";
    }

    // Convert the result from mg/l to the target unit
    switch (toUnit) {
        case "mg/l":
            // Already in mg/l, no conversion needed
            break;
        case "ppm":
            // ppm is equivalent to mg/l in this context, no conversion needed
            break;
        case "%":
            result = (input / 9) * 100; // Convert from mg/l to percentage (1 mg/l = 9%)
            break;
        default:
            result = "Error: invalid unit";
    }

    // Limit the result to two decimal places (two significant figures)
    result = Number(result.toFixed(2)); // Adjust the number of decimal places as needed

    // Log result to console
    console.log("Result:", result);
    console.log("To Unit:", toUnit);

    // Display the result
    resultContainer.innerHTML = `<p>Result: ${result} ${toUnit}</p>`;
    resultContainer.style.display = "block"; // Display the result container

    // Show the create record link if applicable
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

    // Check if the input is a valid number
    if (isNaN(input)) {
        resultContainer.innerHTML = "<p>Please enter a valid number</p>";
        resultContainer.style.display = "block"; // Display the result container
        return;
    }

    let result;

    // Calculate result based on conversion from the input unit to Celsius (C), which is the base unit for temperature
    switch (fromUnit) {
        case "C":
            result = input; // Already in Celsius
            break;
        case "F":
            result = (input - 32) * (5 / 9); // Convert Fahrenheit to Celsius
            break;
        case "K":
            result = input - 273.15; // Convert Kelvin to Celsius
            break;
        default:
            result = "Invalid unit";
    }

    // Convert the result from Celsius to the target unit
    switch (toUnit) {
        case "C":
            // Already in Celsius, no conversion needed
            break;
        case "F":
            result = (input * (9 / 5)) + 32; // Convert Celsius to Fahrenheit
            break;
        case "K":
            result += 273.15; // Convert Celsius to Kelvin
            break;
        default:
            result = "Invalid unit";
    }

    // Limit the result to two decimal places (two significant figures)
    result = Number(result.toFixed(2)); // Adjust the number of decimal places as needed

    // Log result to console
    console.log("Result:", result);
    console.log("To Unit:", toUnit);

    // Display the result
    resultContainer.innerHTML = `<p>Result: ${result} ${toUnit}</p>`;
    resultContainer.style.display = "block"; // Display the result container

    // Show the create record link if applicable
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

    // Check if the input is a valid number
    if (isNaN(input)) {
        resultContainer.innerHTML = "<p>Please enter a valid number</p>";
        resultContainer.style.display = "block"; // Display the result container
        return;
    }

    let result;

    // Calculate result based on conversion from the input unit to milliliters (ml), which is the base unit for volume
    switch (fromUnit) {
        case "ml":
            result = input; // Already in milliliters
            break;
        case "l":
            result = input * 1000; // Convert liters to milliliters (1 liter = 1000 milliliters)
            break;
        case "m3":
            result = input * 1000000; // Convert cubic meters to milliliters (1 cubic meter = 1000000 milliliters)
            break;
        default:
            result = "Invalid unit";
    }

    // Convert the result from milliliters to the target unit
    switch (toUnit) {
        case "ml":
            // Already in milliliters, no conversion needed
            break;
        case "l":
            result /= 1000; // Convert milliliters to liters (1 milliliter = 0.001 liters)
            break;
        case "m3":
            result /= 1000000; // Convert milliliters to cubic meters (1 milliliter = 0.000001 cubic meters)
            break;
        default:
            result = "Invalid unit";
    }

    // Limit the result to two decimal places (two significant figures)
    result = Number(result.toFixed(2)); // Adjust the number of decimal places as needed

    // Log result to console
    console.log("Result:", result);
    console.log("To Unit:", toUnit);

    // Display the result
    resultContainer.innerHTML = `<p>Result: ${result} ${toUnit}</p>`;
    resultContainer.style.display = "block"; // Display the result container

    // Show the create record link if applicable
    if (createRecordLink) {
        createRecordLink.style.display = "inline"; // Show the link
    }

}


