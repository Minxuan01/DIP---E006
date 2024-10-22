// Function to redirect to a specific URL when the button is clicked
function redirectToDownload() {
    // Change this URL to the page or site you want to redirect to
    window.location.href = 'https://entuedu-my.sharepoint.com/personal/geor0014_e_ntu_edu_sg/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fgeor0014%5Fe%5Fntu%5Fedu%5Fsg%2FDocuments%2FDIP%20E028%2FARware%20Game%2FDrugARwarenessGameForIntegration%2Eapk&parent=%2Fpersonal%2Fgeor0014%5Fe%5Fntu%5Fedu%5Fsg%2FDocuments%2FDIP%20E028%2FARware%20Game&ga=1';
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
