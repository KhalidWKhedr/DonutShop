function loadForm() {
    fetch('./signup-form.html')
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
