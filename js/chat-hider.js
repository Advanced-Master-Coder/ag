
        const iframes = document.querySelectorAll('.iframe-container');
        let currentIndex = 0;
    
        function showIframe(index) {
            iframes.forEach((iframe, i) => {
                if (i === index) {
                    iframe.style.display = 'block';
                } else {
                    iframe.style.display = 'none';
                }
            });
        }
    
        document.getElementById('navLeft').addEventListener('click', function() {
            currentIndex = (currentIndex - 1 + iframes.length) % iframes.length;
            showIframe(currentIndex);
        });
    
        document.getElementById('navRight').addEventListener('click', function() {
            currentIndex = (currentIndex + 1) % iframes.length;
            showIframe(currentIndex);
        });
    
        // Show the initial iframe
        showIframe(currentIndex);
const sequence = ['blue', 'black', 'red'];
let userClicked = [];

document.querySelectorAll('.codeEditor_dot').forEach(button => {
    button.addEventListener('click', () => {
        const color = button.style.backgroundColor;
        userClicked.push(color);

        // Check if userClicked length is same as sequence length
        if (userClicked.length === sequence.length) {
            let match = true;
            for (let i = 0; i < sequence.length; i++) {
                if (userClicked[i] !== sequence[i]) {
                    match = false;
                    break;
                }
            }
            if (match) {
                document.querySelector('.chat-viewer').style.display = 'block';
            } else {
                document.querySelector('.chat-viewer').style.display = 'none';
            }
        } else {
            document.querySelector('.chat-viewer').style.display = 'none';
        }
    });
});

document.getElementById('passButton').addEventListener('click', () => {
    userClicked = [];
    document.querySelector('.chat-viewer').style.display = 'none';
});

document.getElementById('clearButton').addEventListener('click', () => {
    userClicked = [];
    document.querySelector('.chat-viewer').style.display = 'none';
});

document.getElementById('closeButton').addEventListener('click', () => {
    const userConfirmed = confirm('Are you sure you want to log out?');
    if (userConfirmed) {
        document.querySelector('iframe').src = 'https://advanced-master-coder.github.io/t/index.html';
        userClicked = [];
        document.querySelector('.chat-viewer').style.display = 'none';
    }
});