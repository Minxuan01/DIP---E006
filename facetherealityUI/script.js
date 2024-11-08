// Function to redirect to a specific URL when the button is clicked
function redirectToDownload() {
    // Change this URL to the page or site you want to redirect to
    window.location.href = 'https://entuedu-my.sharepoint.com/:u:/g/personal/tanj0304_e_ntu_edu_sg/EcxZTKLmkFZBqYBdQi5Pch4BRl4GJQqL4GbUSL4-rorWtA?e=5SHM9Q';
}

// Adding event listener to the button
document.addEventListener('DOMContentLoaded', function () {
    // Find the button by its class or ID
    const downloadButton = document.querySelector('.download-button');

    // Add click event to the button
    if (downloadButton) {
        downloadButton.addEventListener('click', redirectToDownload);
    }
});
