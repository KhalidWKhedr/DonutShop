async function loadForm() {
    try {
        const response = await fetch('/main-page/login-form.html');
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const html = await response.text();
        console.log(html); // Log the HTML content to verify it's retrieved correctly

        // Replace the form action to match the fetched form
        const form = document.getElementById('modal-form');
        form.action = '/main-page/login'; // Adjust action URL

        // Create modal structure and display it
        createModal(html);
    } catch (error) {
        console.error('Fetch error:', error);
    }
}
