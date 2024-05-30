// ** LOCATION OF CALCULATE FUNCTIONS **

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