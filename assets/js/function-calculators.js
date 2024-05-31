// ** LOCATION OF CALCULATE FUNCTIONS **

console.log('function-calculators.js loaded');

 // Function to process calculation for edible
 function calculateEdible() {
    const volume = parseFloat(document.getElementById("volume").value);
    const targetConcentration = parseFloat(document.getElementById("target-concentration").value);
    const drugConcentration = parseFloat(document.getElementById("drug-concentration").value);

    if (isNaN(volume) || isNaN(targetConcentration) || isNaN(drugConcentration)) {
        resultContainer.innerHTML = "<p>Please enter valid digits for all fields.</p>";
        return;
    }

    const quantityNeeded = (targetConcentration * volume) / drugConcentration;
    resultContainer.innerHTML = `<p>Tablets needed: ${quantityNeeded.toFixed(2)}</p>`;
    resultContainer.style.display = "block"; // Display the result container
    if (createRecordLink) {
        createRecordLink.style.display = "inline"; // Show the link
    }
}

// Function to process calculation for water
function calculateWaterSoluble() {
    const volume = parseFloat(document.getElementById("volume").value);
    const targetConcentration = parseFloat(document.getElementById("target-concentration").value);
    const drugConcentration = parseFloat(document.getElementById("drug-concentration").value);

    if (isNaN(volume) || isNaN(targetConcentration) || isNaN(drugConcentration)) {
        resultContainer.innerHTML = "<p>Please enter valid digits for all fields.</p>";
        return;
    }

    const quantityNeeded = (targetConcentration * volume) / drugConcentration;
    resultContainer.innerHTML = `<p>Volume needed: ${quantityNeeded.toFixed(2)} ml</p>`;
    resultContainer.style.display = "block"; // Display the result container
    if (createRecordLink) {
        createRecordLink.style.display = "inline"; // Show the link
    }
}

// Function to process calculation for a cylindrical tank from diameter and height in cm
function calculateTankVolumeCylinder() {
    const diameter = parseFloat(document.getElementById("diameter").value);
    const height = parseFloat(document.getElementById("height").value);
    const resultContainer = document.getElementById("result");

    if (isNaN(diameter) || isNaN(height)) {
        resultContainer.innerHTML = "<p>Please enter valid digits for all fields</p>";
        resultContainer.style.display = "block"; // Display the result container
        return;
    }

    let result = (Math.PI * Math.pow(diameter / 2, 2) * height)/1000;

    console.log("Result:", result); // Log result to console

    resultContainer.innerHTML = `<p>Volume: ${result.toFixed(2)} litres</p>`;
    resultContainer.style.display = "block"; // Display the result container
    resultContainer.style.display = "block"; // Display the result container

    if (createRecordLink) {
        createRecordLink.style.display = "inline"; // Show the link
    }
}

// Function to process conversion for length
function calculateTankVolumeSquare() {
    const length = parseFloat(document.getElementById("length").value);
    const width = parseFloat(document.getElementById("width").value);
    const height = parseFloat(document.getElementById("height").value);
    const resultContainer = document.getElementById("result");

    if (isNaN(length) || isNaN(width) || isNaN(height)) {
        resultContainer.innerHTML = "<p>Please enter valid digits for all fields</p>";
        resultContainer.style.display = "block"; // Display the result container
        return;
    }

    let result = (length * width * height)/1000;

    console.log("Result:", result); // Log result to console

    // Display the result
    resultContainer.innerHTML = `<p>Volume: ${result.toFixed(2)} litres</p>`;
    resultContainer.style.display = "block"; // Display the result container

    // Show the create record link
    if (createRecordLink) {
        createRecordLink.style.display = "inline"; // Show the link
    }
}