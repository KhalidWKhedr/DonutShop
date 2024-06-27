function loadForm() {
    fetch('/main-page/login-form.html')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.text();
        })
        .then(html => {
            // Process the HTML content
            console.log(html); // Log the HTML content to verify it's retrieved correctly

            // Replace the form action to match the fetched form
            const form = document.getElementById('modal-form');
            form.action = '/main-page/login'; // Adjust action URL

            // Create modal structure and display it
            createModal(html);
        })
        .catch(error => {
            console.error('Fetch error:', error);
        });
}
