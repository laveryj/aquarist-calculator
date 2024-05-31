// ** LOCATION OF CONVERTER FUNCTIONS **

console.log('function-converters.js loaded');

// Global variables
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
    
        // Convert from fromUnit to base unit cm
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
            case "in":
                result = input * 2.54; // 1 in = 2.54 cm
                break;
            case "ft":
                result = input * 30.48; // 1 ft = 30.48 cm
                break;
            case "yd":
                result = input * 91.44; // 1 yd = 91.44 cm
                break;
            case "mi":
                result = input * 160934; // 1 mi = 160934 cm
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
            case "in":
                result /= 2.54; // 2.54 cm = 1 in
                break;
            case "ft":
                result /= 30.48; // 30.48 cm = 1 ft
                break;
            case "yd":
                result /= 91.44; // 91.44 cm = 1 yd
                break;
            case "mi":
                result /= 160934; // 160934 cm = 1 mi
                break;
            default:
                return "Invalid unit"; // error handling for invalid units
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
        case "oz":
            result = input * 28.3495; // Convert ounces to grams (1 oz = 28.3495 g)
            break;
        case "lb":
            result = input * 453.592; // Convert pounds to grams (1 lb = 453.592 g)
            break;
        case "st":
            result = input * 6350.29; // Convert stones to grams (1 st = 6350.29 g)
            break;
        case "ton":
            result = input * 907185; // Convert tons to grams (1 ton = 907185 g)
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
        case "oz":
            result /= 28.3495; // Convert grams to ounces (1 oz = 28.3495 g)
            break;
        case "lb":
            result /= 453.592; // Convert grams to pounds (1 lb = 453.592 g)
            break;
        case "st":
            result /= 6350.29; // Convert grams to stones (1 st = 6350.29 g)
            break;
        case "ton":
            result /= 907185; // Convert grams to tons (1 ton = 907185 g)
            break;
        default:
            result = "Invalid unit";
    }

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
            result = input / 1.0008; // Convert specific gravity to parts per thousand (1 sg = 0.000001 ppt)
            break;
        case "µS/cm":
            result = input / 1.968; // Convert conductivity to parts per thousand (assumed conversion, but needs clarification)
            break;
        case "psu":
            result = input; // Already in practical salinity units, which are equivalent to parts per thousand
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
            result *= 1.0008; // Convert parts per thousand to specific gravity (1 ppt = 1000000 sg)
            break;
        case "µS/cm":
            result *= 1.968; // Convert parts per thousand to conductivity (assumed conversion, but needs clarification)
            break;
        case "psu":
            // Already in practical salinity units, which are equivalent to parts per thousand, no conversion needed
        default:
            result = "Invalid unit";
    }

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
        default:
            result = "Invalid unit";
    }

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
        case "gal":
            result = input * 3785.41; // Convert gallons to milliliters (1 gallon = 3785.41 milliliters)
            break;
        case "oz":
            result = input * 29.5735; // Convert ounces to milliliters (1 ounce = 29.5735 milliliters)
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
        case "gal":
            result /= 3785.41; // Convert milliliters to gallons (1 milliliter = 0.000264172 gallons)
            break;
        case "oz":
            result /= 29.5735; // Convert milliliters to ounces (1 milliliter = 0.033814 ounces)
            break;
        default:
            result = "Invalid unit";
    }

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

// Function to process conversion of alkalinity
function convertAlkalinity() {
    const input = parseFloat(document.getElementById("alkalinity-input").value);
    const fromUnit = document.getElementById("from-unit").value;
    const toUnit = document.getElementById("to-unit").value;
    const resultContainer = document.getElementById("alkalinity-result");

    // Check if the input is a valid number
    if (isNaN(input)) {
        resultContainer.innerHTML = "<p>Please enter a valid number</p>";
        resultContainer.style.display = "block"; // Display the result container
        return;
    }

    let result;

    // Calculate result based on conversion from the input unit to ppm (parts per million)
    switch (fromUnit) {
        case "ppm":
            result = input; // Already in ppm
            break;
        case "meq/l":
            result = input * 50000; // Convert milliequivalents per liter to ppm (1 meq/l = 50000 ppm)
            break;
        case "dKH":
            result = input * 17.848; // Convert degrees carbonate hardness to ppm (1 dKH = 17.848 ppm)
            break;
        case "mg/l":
            result = input; // ppm is equivalent to mg/l in this context
            break;
        default:
            result = "Invalid unit";
    }

    // Convert the result from ppm to the target unit
    switch (toUnit) {
        case "ppm":
            // Already in ppm, no conversion needed
            break;
        case "meq/l":
            result /= 50000; // Convert ppm to milliequivalents per liter (1 ppm = 0.00002 meq/l)
            break;
        case "dKH":
            result /= 17.848; // Convert ppm to degrees carbonate hardness (1 ppm = 0.056 dKH)
            break;
        case "mg/l":
            // ppm is equivalent to mg/l in this context, no conversion needed
            break;
        default:
            result = "Invalid unit";
    }

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




// DO NOT KNOW WHAT THIS IS FOR
//     // Add event listeners to input fields and button
//     document.getElementById("input-value").addEventListener("input", convertUnitTest);
//     document.getElementById("input-unit").addEventListener("change", convertUnitTest);
//     document.getElementById("salinity-convert-btn").addEventListener("click", convertUnitTest);

//     function convertUnitTest() {
//         const inputValue = parseFloat(document.getElementById("input-value").value);
//         const inputUnit = document.getElementById("input-unit").value;

//         if (isNaN(inputValue)) {
//             clearOutputs();
//             return;
//         }

//         let valueInCm;

//         // Convert input value to centimeters first
//         switch (inputUnit) {
//             case "mm":
//                 valueInCm = inputValue / 10;
//                 break;
//             case "cm":
//                 valueInCm = inputValue;
//                 break;
//             case "m":
//                 valueInCm = inputValue * 100;
//                 break;
//             case "ft":
//                 valueInCm = inputValue * 30.48;
//                 break;
//             case "km":
//                 valueInCm = inputValue * 100000;
//                 break;
//             default:
//                 valueInCm = 0;
//         }

//         // Convert from centimeters to all other units
//         document.getElementById("output-mm").value = (valueInCm * 10).toFixed(2);
//         document.getElementById("output-cm").value = valueInCm.toFixed(2);
//         document.getElementById("output-m").value = (valueInCm / 100).toFixed(2);
//         document.getElementById("output-ft").value = (valueInCm / 30.48).toFixed(2);
//         document.getElementById("output-km").value = (valueInCm / 100000).toFixed(5);
//     }

//     function clearOutputs() {
//         document.getElementById("output-mm").value = '';
//         document.getElementById("output-cm").value = '';
//         document.getElementById("output-m").value = '';
//         document.getElementById("output-ft").value = '';
//         document.getElementById("output-km").value = '';
//     }