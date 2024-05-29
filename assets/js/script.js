document.addEventListener("DOMContentLoaded", function() {

    // Global variables
    let result;
    let toUnit;

    // Function to load partials
    function loadPartial(id, url) {
        fetch(url)
            .then(response => response.text())
            .then(data => {
                const element = document.getElementById(id);
                if (element) {
                    element.innerHTML = data;
                } else {
                    console.error(`Element with id "${id}" not found.`);
                }
            })
            .catch(error => console.error('Error loading partial:', error));
    }

    // Load partials
    loadPartial('import-header', '/aquarist-calculator/partials/header.html');
    loadPartial('import-title', '/aquarist-calculator/partials/title.html');
    loadPartial('import-footer', '/aquarist-calculator/partials/footer.html');
    loadPartial('import-coming_soon', '/aquarist-calculator/partials/coming_soon.html');

    const mainPage = document.getElementById("main-page");
    const calculatorPage = document.getElementById("calculator-page");
    const backButton = document.getElementById("back-button");
    const waterBtn = document.getElementById("water-btn");
    const edibleBtn = document.getElementById("edible-btn");
    const edibleCalculateBtn = document.getElementById("edible-calculate-btn");
    const waterCalculateBtn = document.getElementById("water-calculate-btn");
    const createRecordLink = document.getElementById("create-record-link");
    const resultContainer = document.getElementById("water-result");

    // Global declaration of converter buttons
    const converter1 = document.getElementById("length-btn");
    const converter2 = document.getElementById("temperature-btn");
    const converter3 = document.getElementById("weight-btn");
    const converter4 = document.getElementById("volume-btn");

    // Global declaration of converter category buttons
    const lengthConverterBtn = document.getElementById("length-converter");
    const temperatureConverterBtn = document.getElementById("temperature-converter");
    const weightConverterBtn = document.getElementById("weight-converter");
    const volumeConverterBtn = document.getElementById("volume-converter");

    const lengthConvertBtn = document.getElementById("length-convert-btn");
    const weightConvertBtn = document.getElementById("weight-convert-btn");
    const temperatureConvertBtn = document.getElementById("temperature-convert-btn");
    const volumeConvertBtn = document.getElementById("volume-convert-btn");

    // Global declaration of category variables
    const nutritionCategoryBtn = document.getElementById("nutrition-btn");
    const medicineCategoryBtn = document.getElementById("medicine-btn");
    const convertersCategoryBtn = document.getElementById("converters-btn");
    const volumetricCategoryBtn = document.getElementById("volumetric-btn");

    // Check if converter 1 has been selected
    if (converter1) {
        converter1.addEventListener("click", function(event) { // Add event parameter to the function
            event.preventDefault();
            window.location.href = "/category/converters/length.html"; // Redirect to the length converter page
        });
    }

    // Check if converter 2 has been selected
    if (converter2) {
        converter2.addEventListener("click", function(event) { // Add event parameter to the function
            event.preventDefault();
            window.location.href = "/category/converters/temperature.html"; // Redirect to the temperature converter page
        });
    }

    // Check if converter 3 has been selected
    if (converter3) {
        converter3.addEventListener("click", function(event) { // Add event parameter to the function
            event.preventDefault();
            window.location.href = "/category/converters/weight.html"; // Redirect to the weight converter page
        });
    }

    // Check if converter 4 has been selected
    if (converter4) {
        converter4.addEventListener("click", function(event) { // Add event parameter to the function
            event.preventDefault();
            window.location.href = "/category/converters/volume.html"; // Redirect to the volume converter page
        });
    }

    // Check if nutrition category has been selected
    if (nutritionCategoryBtn) {
        nutritionCategoryBtn.addEventListener("click", function(event) { // Add event parameter to the function
            event.preventDefault();
            window.location.href = "/category/menu/nutrition.html"; // Redirect to the nutrition page
        });
    }

    // Check if medicine category has been selected
    if (medicineCategoryBtn) {
        medicineCategoryBtn.addEventListener("click", function(event) { // Add event parameter to the function
            event.preventDefault();
            window.location.href = "/category/menu/medicine.html"; // Redirect to the medicine page
        });
    }

    // Check if converters category has been selected
    if (convertersCategoryBtn) {
        convertersCategoryBtn.addEventListener("click", function(event) { // Add event parameter to the function
            event.preventDefault();
            window.location.href = "/category/menu/converters.html"; // Redirect to the converters page
        });
    }

    // Check if volumetric category has been selected
    if (volumetricCategoryBtn) {
        volumetricCategoryBtn.addEventListener("click", function(event) { // Add event parameter to the function
            event.preventDefault();
            window.location.href = "/category/menu/volumetric.html"; // Redirect to the volumetric page
        });
    }

    // Check if edibleBtn pressed 
    if (edibleBtn) {
        edibleBtn.addEventListener("click", function(event) { // Add event parameter to the function
            event.preventDefault();
            window.location.href = "/category/calculators/edible_calculator.html"; // Redirect to the Edible Drugs calculator page
        });
    }

    // Check if waterBtn pressed 
    if (waterBtn) {
        waterBtn.addEventListener("click", function(event) { // Add event parameter to the function
            event.preventDefault();
            window.location.href = "/category/calculators/water_soluble_calculator.html"; // Redirect to the Water Soluble calculator page
        });
    }

    // Check if backButton pressed   
    if (backButton) {
        backButton.addEventListener("click", function(event) { // Add event parameter to the function
            // window.location.href = "/index.html"; // Redirect to the main page
            window.history.back(); // Navigate to the previous page
        });
    }

    // Check if reset button pressed 
    const resetButton = document.getElementById("reset-button");
    if (resetButton) {
        resetButton.addEventListener("click", function(event) { // Add event parameter to the function
            // Call the resetInputFields function here
            resetInputFields();
        });
    }

    // Check if water calculate pressed 
    if (waterCalculateBtn) {
        waterCalculateBtn.addEventListener("click", function(event) { // Add event parameter to the function
            calculateWaterSoluble();
        });
    }

    // Check if edible calculate pressed 
    if (edibleCalculateBtn) {
        edibleCalculateBtn.addEventListener("click", function(event) { // Add event parameter to the function
            calculateEdible();
        });
    }

    // Check if length converter button pressed
    if (lengthConvertBtn) {
        lengthConvertBtn.addEventListener("click", function(event) { // Add event parameter to the function
            console.log("Convert button clicked");
            convertLength();
        });
    }

    // Check if weight converter button pressed
    if (weightConvertBtn) {
        weightConvertBtn.addEventListener("click", function(event) { // Add event parameter to the function
            console.log("Convert button clicked");
            convertWeight();
        });
    }
    
    // Function to show the main page and reset calculator values to zero
    function showMainPage() {
        mainPage.style.display = "block";
        calculatorPage.style.display = "none";
        resetInputFields();
    }

    // Reset all values
    function resetInputFields() {
        // Reload the page to clear results
        window.location.reload
        ();
        // Clear result
        document.getElementById("water-result").innerHTML = "";
        // Reset input fields
        document.getElementById("volume").value = "";
        document.getElementById("target-concentration").value = "";
        document.getElementById("drug-concentration").value = "";
        // Hide the result container and create a record link
        document.getElementById("water-result").style.display = "none";
        if (createRecordLink) {
            createRecordLink.style.display = "none";
        }
    }

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


// Check if create record link is clicked
if (createRecordLink) {
    createRecordLink.addEventListener("click", function(event) {
        console.log("Create record link clicked");
        // Prevent the default action of the link (opening the href)
        event.preventDefault();

        // Get the result and toUnit values from the DOM
        const resultText = document.getElementById("length-result").textContent.trim();
        const result = resultText.split(' ')[1]; // Extracting the number part after splitting by space        
        const fromUnit = document.getElementById("from-unit").value;
        const toUnit = document.getElementById("to-unit").value;

        // Log the values of result and toUnit
        console.log("Result:", result);
        console.log("To Unit:", toUnit);

        // Pop up a prompt to ask for the user's email address
        const userEmail = prompt("Please enter your email address:");

        // If the user cancels the prompt, return early
        if (!userEmail) {
            alert("Email address is required to create a record.");
            return;
        }

        // If the user enters an empty string, return early
        if (userEmail.trim() === "") {
            alert("Email address is required to create a record.");
            return;
        }

        // If the user enters an email address, proceed to create the record
        createEmailRecord(userEmail, result, fromUnit, toUnit);
    });
}

    // Function to create email record
    function createEmailRecord(userEmail, result, fromUnit, toUnit) {
        console.log("Creating email record");

        // Get the current date and time
        const currentDate = new Date();

        // Options for formatting the date
        const options = {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        };

        // Format the date with the specified options
        const formattedDate = currentDate.toLocaleDateString(undefined, options);

        // Get the current time
        const formattedTime = currentDate.toLocaleTimeString(undefined, {
            hour: '2-digit',
            minute: '2-digit'
        });

        // Customize the subject and body of the email
        const subjectContent = `Aquarist Calculator - Record created ${formattedDate} at ${formattedTime}`;
        const bodyContent = `Conversion used: from "${fromUnit}" to "${toUnit}"\n\nResult: ${result}${toUnit}\n\n\n\n`;
        const footer = "Sent by the Aquarist Calculator (www.josephlavery.co.uk/tools).\n\n\n\n";

        // Concatenate the body and footer content
        const body = `${bodyContent}\n\n${footer}`;

        // Create a mailto link
        const mailtoLink = `mailto:${userEmail}?subject=${encodeURIComponent(subjectContent)}&body=${encodeURIComponent(body)}`;

        // Create a temporary <a> element
        const linkElement = document.createElement('a');
        linkElement.href = mailtoLink;

        // Trigger a click event on the <a> element
        linkElement.click();
    }

});
