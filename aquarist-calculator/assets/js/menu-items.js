
console.log('menu-items.js loaded');

    // **************** Back Button **************** //
    const backButton = document.getElementById("back-button"); // Declare the BACK BUTTON

    if (backButton) { // Check if back button pressed 
        backButton.addEventListener("click", function(event) { // Add event parameter to the function
            console.log("Back button clicked"); // Log the press in the console
            window.history.back(); // Navigate to the previous page
        });
    }
    // ******************** END OF FUNCTION ******************** //


    // **************** Reset Button **************** //
    const resetButton = document.getElementById("reset-button"); // Declare the RESET BUTTON

    if (resetButton) { // Check if reset button pressed 
        resetButton.addEventListener("click", function(event) { // Add event parameter to the function
            console.log("Reset button clicked"); // Log the press in the console
            window.location.reload(); // Reload the page
        });
    }
    // ******************** END OF FUNCTION ******************** //


    // **************** Menu Buttons **************** //
    const nav_calculators = document.getElementById("nav-calculators"); // Declare the MENU BUTTON
    const nav_converters = document.getElementById("nav-converters"); // Declare the MENU BUTTON
    const nav_nutrition = document.getElementById("nav-nutrition"); // Declare the MENU BUTTON
    const nav_medicine = document.getElementById("nav-medicine"); // Declare the MENU BUTTON

    if (nav_calculators) { // Check if the MENU BUTTON has been pressed
        nav_calculators.addEventListener("click", function(event) { // Add event parameter to the function
            event.preventDefault();
            console.log("Navigation button clicked - Calculators"); // Log the press in the console
            window.location.href = "/aquarist-calculator/category/menu/calculators.html"; // Redirect to the Calculators category page
        });
    }

    if (nav_converters) { // Check if the MENU BUTTON has been pressed
        nav_converters.addEventListener("click", function(event) { // Add event parameter to the function
            event.preventDefault();
            console.log("Navigation button clicked - Converters"); // Log the press in the console
            window.location.href = "/aquarist-calculator/category/menu/converters.html"; // Redirect to the Converters category page
        });
    }

    if (nav_nutrition) { // Check if the MENU BUTTON has been pressed
        nav_nutrition.addEventListener("click", function(event) { // Add event parameter to the function
            event.preventDefault();
            console.log("Navigation button clicked - Nutrition"); // Log the press in the console
            window.location.href = "/aquarist-calculator/category/menu/nutrition.html"; // Redirect to the Nutrition category page
        });
    }

    if (nav_medicine) { // Check if the MENU BUTTON has been pressed
        nav_medicine.addEventListener("click", function(event) { // Add event parameter to the function
            event.preventDefault();
            console.log("Navigation button clicked - Medicine"); // Log the press in the console
            window.location.href = "/aquarist-calculator/category/menu/medicine.html"; // Redirect to the Medicine category page
        });
    }
    // ******************** END OF FUNCTION ******************** //



    // **************** Create a Record **************** //    
    const createRecordLink = document.getElementById("create-record-link");

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

    function createEmailRecord(userEmail, result, fromUnit, toUnit) { // Function to create email record
        console.log("Creating email record");

        const currentDate = new Date(); // Get the current date and time

        const options = { // Options for formatting the date
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        };
        
        const formattedDate = currentDate.toLocaleDateString(undefined, options); // Format the date with the specified options

        const formattedTime = currentDate.toLocaleTimeString(undefined, { // Get the current time
            hour: '2-digit',
            minute: '2-digit'
        });

        // Customize the subject and body of the email
        const subjectContent = `Aquarist Calculator - Record created ${formattedDate} at ${formattedTime}`;
        const bodyContent = `Conversion used: from "${fromUnit}" to "${toUnit}"\n\nResult: ${result}${toUnit}\n\n\n\n`;
        const footer = "Sent by the Aquarist Calculator (www.josephlavery.co.uk/tools).\n\n\n\n";

        const body = `${bodyContent}\n\n${footer}`; // Concatenate the body and footer content

        const mailtoLink = `mailto:${userEmail}?subject=${encodeURIComponent(subjectContent)}&body=${encodeURIComponent(body)}`; // Create a mailto link

        const linkElement = document.createElement('a'); // Create a temporary <a> element
        linkElement.href = mailtoLink;

        linkElement.click(); // Trigger a click event on the <a> element
    }
    // ******************** END OF FUNCTION ******************** //