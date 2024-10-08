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

                }
               
                return characters[Math.floor(Math.random() * characters.length)];
            })
            .join('');

        
        if (iterations >= text.length) {
            clearInterval(interval);  
        }
        iterations += 1 / 3; 
    }, 50);  
};


const targetText = 'Decrypting...'; 
const textElement = document.getElementById('scramble-text');
scrambleText(textElement, targetText);