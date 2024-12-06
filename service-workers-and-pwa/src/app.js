export function initApp() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('sw.js').then(() => {
            console.log('Service Worker registered successfully.');
        }).catch(error => {
            console.error('Service Worker registration failed:', error);
        });
    }

    document.getElementById('notification-button').addEventListener('click', () => {
        if (Notification.permission === 'default') {
            Notification.requestPermission().then(permission => {
                if (permission === 'granted') {
                    showNotification();
                }
            });
        } else if (Notification.permission === 'granted') {
            showNotification();
        }
    });

    function showNotification() {
        new Notification('Hello, there!', {
            body: 'I can send you notifications even from outer space!',
            icon: 'images/rocket.jpg'
        });
    }
}