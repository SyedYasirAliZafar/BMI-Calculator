function calculateBMI() {
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;

    if (weight && height) {
        const heightInMeters = height / 100;
        const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(0);

        let category = '';
        if (bmi <= 18.5) {
            category = 'Underweight';
        } else if (bmi <= 24.9) {
            category = 'Normal weight';
        } else if (bmi <= 29.9) {
            category = 'Overweight';
        } else {
            category = 'Obesity';
        }

        document.getElementById('result').innerHTML = `Your BMI is ${bmi} (${category}).`;
    } else {
        document.getElementById('result').innerHTML = 'Please enter valid values.';
    }
}