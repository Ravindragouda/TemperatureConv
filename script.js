function convertTemperature() {
    // Get user input
    const inputTemperature = parseFloat(document.getElementById('inputTemperature').value);
    const unitFrom = document.getElementById('unitFrom').value;
    const unitTo = document.getElementById('unitTo').value;

    // Check if input is a valid number
    if (isNaN(inputTemperature)) {
        alert('Please enter a valid number for temperature.');
        return;
    }

    // Perform conversion
    let result;
    if (unitFrom === 'celsius' && unitTo === 'fahrenheit') {
        result = (inputTemperature * 9/5) + 32;
    } else if (unitFrom === 'fahrenheit' && unitTo === 'celsius') {
        result = (inputTemperature - 32) * 5/9;
    } else {
        // If units are the same, no conversion needed
        result = inputTemperature;
    }

    // Display the result
    document.getElementById('result').innerText = `Result: ${result.toFixed(2)} ${unitTo}`;
}
