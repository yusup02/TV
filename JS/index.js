if (navigator.userAgent.match(/Macintosh/)) {
    // Определено, что клиент использует Android TV
    // Показываем кнопку "Скачать"
    document.querySelector('.download-button').style.display = 'block';
}