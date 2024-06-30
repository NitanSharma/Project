
const texts = ['change.','impact.', 'growth.', 'good.'];
// let index = 0;

// // Function to change the innerText of the span
// function changeText() {
//     document.getElementById('mySpan').innerText = texts[index];
//     index = (index + 1) % texts.length; // Cycle through the array
// }

// // Set an interval to call the changeText function every 4 seconds
// setInterval(changeText, 2000);

texts.forEach((text, index) => {
    setTimeout(() => {
        document.getElementById('mySpan').innerText = text;
    }, index * 1000); // Set timeout for each text
});