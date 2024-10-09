const scrambleText = (element, text) => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+=-[]{}|;:",.<>?/`~';
    let iterations = 0;

    // Initially fill the text element with random characters to start fully scrambled
    element.innerText = text
        .split('')
        .map(() => characters[Math.floor(Math.random() * characters.length)])
        .join('');

    const interval = setInterval(() => {
        element.innerText = text
            .split('')
            .map((char, index) => {
                if (index < iterations) {
                    return char;  // Show the correct character after a certain iteration
                }
                // Keep scrambling the rest of the characters
                return characters[Math.floor(Math.random() * characters.length)];
            })
            .join('');

        // Increment until all characters are revealed
        if (iterations >= text.length) {
            clearInterval(interval);  // Stop the interval when all text is revealed
        }
        iterations += 1 / 3;  // Adjust this speed for faster/slower reveal
    }, 50);  // Interval for each frame
};

// Usage
const targetText = 'Decrypting...';  // The final text to be unscrambled
const textElement = document.getElementById('scramble-text');
scrambleText(textElement, targetText);