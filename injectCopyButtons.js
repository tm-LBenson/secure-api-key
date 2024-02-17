'use strict';
document.addEventListener('DOMContentLoaded', (event) => {
    // Find all <pre><code> blocks
    const codeBlocks = document.querySelectorAll('pre code');


    codeBlocks.forEach((block) => {
        const preElement = block.parentNode;
        preElement.style.position = 'relative'; 

        const copyButton = document.createElement('button');
        copyButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256"><path fill="currentColor" d="M216 32H88a8 8 0 0 0-8 8v40H40a8 8 0 0 0-8 8v128a8 8 0 0 0 8 8h128a8 8 0 0 0 8-8v-40h40a8 8 0 0 0 8-8V40a8 8 0 0 0-8-8m-56 176H48V96h112Zm48-48h-32V88a8 8 0 0 0-8-8H96V48h112Z"/></svg>`;
        copyButton.className = 'copy-btn';
        copyButton.style.position = 'absolute';
        copyButton.style.top = '5px';
        copyButton.style.right = '5px';
        copyButton.style.border = 'none';
        copyButton.style.background = 'none';
        copyButton.style.cursor = 'pointer';

        copyButton.addEventListener('click', () => {
            const code = block.textContent;
            navigator.clipboard.writeText(code).then(() => {
                copyButton.firstChild.style.fill = 'green';
                setTimeout(() => copyButton.firstChild.style.fill = 'currentColor', 2000); 
            }).catch(err => {
                console.error('Error copying text: ', err);
            });
        });

        // Insert the button within the <pre> element
        preElement.appendChild(copyButton);
    });
});
