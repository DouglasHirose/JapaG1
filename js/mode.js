document.addEventListener('DOMContentLoaded', () => {
    const toggleThemeButton = document.getElementById('toggle-theme');
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme) {
        document.body.classList.add(currentTheme);
    } else {
        document.body.classList.add('light'); // tema padrão
    }

    toggleThemeButton.addEventListener('click', () => {
        let newTheme;
        if (document.body.classList.contains('light')) {
            document.body.classList.remove('light');
            document.body.classList.add('dark');
            newTheme = 'dark';
        } else {
            document.body.classList.remove('dark');
            document.body.classList.add('light');
            newTheme = 'light';
        }
        localStorage.setItem('theme', newTheme);
    });
});
