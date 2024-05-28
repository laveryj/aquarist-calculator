document.addEventListener("DOMContentLoaded", function() {

    const mainPage = document.getElementById("main-page");
    const calculatorPage = document.getElementById("calculator-page");
    const backButton = document.getElementById("back-button");
    const waterBtn = document.getElementById("water-btn");
    const edibleBtn = document.getElementById("edible-btn");
    const edibleCalculateBtn = document.getElementById("edible-calculate-btn");
    const waterCalculateBtn = document.getElementById("water-calculate-btn");
    const createRecordLink = document.getElementById("create-record-link");
    const resultContainer = document.getElementById("water-result");

    // Check if edibleBtn pressed 
    if (edibleBtn) {
        edibleBtn.addEventListener("click", function(event) {
            event.preventDefault();
            showEdibleCalculatorPage();
        });
    }
  
    // Check if waterBtn pressed 
    if (waterBtn) {
        waterBtn.addEventListener("click", function(event) {
            event.preventDefault();
            showWaterCalculatorPage();
        });
    }

    // Check if backButton pressed   
    if (backButton) {
        backButton.addEventListener("click", function() {
            window.location.href = "index.html"; // Redirect to the main page
        });
    }

    // Check if reset button pressed 
    const resetButton = document.getElementById("reset-button");
    if (resetButton) {
        resetButton.addEventListener("click", function() {
            // Call the resetInputFields function here
            resetInputFields();
        });
    }

    // Check if water calculate pressed 
     if (waterCalculateBtn) {
        waterCalculateBtn.addEventListener("click", function() {
            calculateWaterSoluble();
        });
    }
  
     // Check if edible calculate pressed 
     if (edibleCalculateBtn) {
        edibleCalculateBtn.addEventListener("click", function() {
            calculateEdible();
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
        // Clear result
        document.getElementById("water-result").innerHTML = "";
        // Reset input fields
        document.getElementById("volume").value = "";
        document.getElementById("target-concentration").value = "";
        document.getElementById("drug-concentration").value = "";
        // Hide the result container and create a record link
        document.getElementById("water-result").style.display = "none";
        document.getElementById("create-record-link").style.display = "none";
    }
  
    // Function to display edible calculator page
    function showEdibleCalculatorPage() {
        window.location.href = "edible_calculator.html"; // Redirect to the Edible Drugs calculator page
    }
 
    // Function to display water calculator page
    function showWaterCalculatorPage() {
        window.location.href = "water_soluble_calculator.html"; // Redirect to the Water Soluble calculator page
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
         createRecordLink.style.display = "inline"; // Show the link
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
        createRecordLink.style.display = "inline"; // Show the link
    }

    function createEmailRecord() {
        const result = document.getElementById("result-container").textContent;
        const userEmail = prompt("Please enter your email address:");
    
        if (!userEmail) {
            alert("Email address is required to create a record.");
            return;
        }
    
        const emailData = {
            subject: "Record",
            body: `Calculation result: ${result}`,
            to: userEmail
        };
    
        fetch('send_email.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(emailData)
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert("Email sent successfully!");
            } else {
                alert("Failed to send email.");
            }
        })
        .catch(error => {
            console.error("Error sending email:", error);
            alert("An error occurred while sending the email.");
        });
    }

  });
  