function loadForm() {
    fetch('./modal-form.html')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.text();
        })
        .then(html => {
            // Process the HTML content
            console.log(html); // Log the HTML content to verify it's retrieved correctly

            // Create modal structure and display it
            createModal(html);
        })
        .catch(error => {
            console.error('Fetch error:', error);
        });
}

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

// Get the button that opens the modal
const btn = document.getElementById("openModal");

// When the user clicks the button, open the modal
btn.onclick = function() {
    loadForm();
}
