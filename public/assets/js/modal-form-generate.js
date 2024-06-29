function createModal(html) {
    const modal = document.createElement('div');
    modal.classList.add('modal');
    const modalContent = document.createElement('div');
    modalContent.classList.add('modal-content');
    modalContent.innerHTML = html;
    modal.appendChild(modalContent);

    // Add close button
    const span = document.createElement('span');
    span.classList.add('close');
    span.innerHTML = '&times;';
    modalContent.insertBefore(span, modalContent.firstChild);

    document.getElementById('modalContainer').innerHTML = '';
    document.getElementById('modalContainer').appendChild(modal);

    // Close modal when 'x' is clicked
    span.onclick = function() {
        modal.style.display = "none";
    }

    // Close modal when clicking outside the modal content
    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    }

    // Display the modal
    modal.style.display = "flex";
}

async function fetchForm(url, cssFile) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const html = await response.text();
        createModal(html);

        // Load the appropriate CSS file
        const existingLink = document.getElementById('formStyles');
        if (existingLink) {
            existingLink.remove();
        }
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = cssFile;
        link.id = 'formStyles';
        document.head.appendChild(link);
    } catch (error) {
        console.error('Error loading form:', error);
    }
}

// Get the buttons that open the modal
const signupBtn = document.getElementById("signUp");
const loginBtn = document.getElementById("logIn");

// When the user clicks the button, open the corresponding modal
signupBtn.onclick = async function() {
    await fetchForm('/main-page/signup-form', '/assets/css/modal-form.css');
}

loginBtn.onclick = async function() {
    await fetchForm('/main-page/login-form', '/assets/css/modal-form.css');
}
