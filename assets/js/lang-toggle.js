document.addEventListener('DOMContentLoaded', function() {
  const savedLang = localStorage.getItem('preferred-lang');
  const currentPath = window.location.pathname;
  const isFrench = currentPath.startsWith('/fr/') || currentPath === '/fr/';
  const hasFrenchVersion = [
    '/about/', '/', '/publications/', '/projects/', '/teaching/', 
    '/cv/', '/press/', '/beyond/'
  ];

  // If user prefers French but is on an English page that has a French version
  if (savedLang === 'fr' && !isFrench) {
    const frPath = '/fr' + currentPath;
    if (hasFrenchVersion.includes(currentPath) || currentPath === '/') {
      window.location.replace(frPath === '/fr/' ? '/fr/' : frPath);
    }
  }

  // If user prefers English but is on a French page, redirect to English
  if (savedLang === 'en' && isFrench) {
    window.location.replace(currentPath.replace('/fr', '') || '/');
  }

  // Save preference when toggle is clicked
  const btn = document.getElementById('lang-toggle');
  if (btn) {
    btn.addEventListener('click', function() {
      localStorage.setItem('preferred-lang', isFrench ? 'en' : 'fr');
    });
  }
});
