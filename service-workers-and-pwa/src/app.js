export function initApp() {
    // Service Worker Registration
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('sw.js')
    }

    // Notification Button Click Event
    const notificationButton = document.getElementById('notification-button');
    if (notificationButton) {
        notificationButton.addEventListener('click', () => {
            // Request Notification Permission
            Notification.requestPermission().then(permission => {
                if (permission === 'granted') {
                    // Show Notification
                    const notification = new Notification('Hello, there!', {
                        body: 'I can send you notifications even from outer space!',
                        icon: 'images/rocket.jpg'
                    });
                }

            });

        });

    }
}
