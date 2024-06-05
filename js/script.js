document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    const buttons = Array.from(document.getElementsByClassName('btn'));

    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            const value = e.target.getAttribute('data-value');
            let currentDisplay = display.value;

            if (value === '=') {
                try {
                    if (currentDisplay.includes('√')) {
                        currentDisplay = currentDisplay.replace(/√(\d+(\.\d+)?)/g, 'Math.sqrt($1)');
                    }
                    display.value = eval(currentDisplay);
                } catch {
                    display.value = 'Error';
                }
            } else if (value === 'C') {
                display.value = '';
            } else if (value === 'sqrt') {
                display.value += '√';
            } else if (value === '1/x') {
                display.value = 1 / parseFloat(currentDisplay);
            } else if (value === '^2') {
                display.value = Math.pow(parseFloat(currentDisplay), 2);
            } else {
                display.value += value;
            }
        });
    });

    document.getElementById('backspace').addEventListener('click', () => {
        const currentDisplay = display.value;
        if (currentDisplay) {
            display.value = currentDisplay.slice(0, -1);
        }
    });
});

