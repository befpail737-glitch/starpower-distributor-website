// Add this code block inside the DOMContentLoaded listener in main.js

    // Product Detail Page Tabs
    const tabLinks = document.querySelectorAll('.tab-link');
    const tabContents = document.querySelectorAll('.tab-content');

    tabLinks.forEach(link => {
        link.addEventListener('click', () => {
            const tabId = link.getAttribute('data-tab');

            // Deactivate all links and content
            tabLinks.forEach(item => item.classList.remove('active'));
            tabContents.forEach(item => item.classList.remove('active'));

            // Activate the clicked link and corresponding content
            link.classList.add('active');
            document.getElementById(tabId).classList.add('active');
        });
    });