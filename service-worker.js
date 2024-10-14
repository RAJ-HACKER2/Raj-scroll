let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
  // Prevent the default prompt from appearing automatically
  e.preventDefault();
  deferredPrompt = e;

  // Show your custom install button
  const installBtn = document.getElementById('install-button');
  installBtn.style.display = 'block';

  installBtn.addEventListener('click', () => {
    // Show the install prompt
    deferredPrompt.prompt();

    // Wait for the user to respond
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the install prompt');
      } else {
        console.log('User dismissed the install prompt');
      }
      deferredPrompt = null;
    });
  });
})
