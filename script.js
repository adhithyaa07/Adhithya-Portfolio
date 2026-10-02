document.addEventListener("DOMContentLoaded", () => {
    const toggleButton =
        document.getElementById("theme-toggle");

    const moonIcon =
        document.getElementById("icon-moon");

    const sunIcon =
        document.getElementById("icon-sun");

    const root = document.documentElement;

    if (!toggleButton || !moonIcon || !sunIcon) {
        console.error("Dark-mode elements were not found.");
        return;
    }

    const savedTheme =
        localStorage.getItem("theme");

    const deviceUsesDarkMode =
        window.matchMedia(
            "(prefers-color-scheme: dark)"
        ).matches;

    function updateIcons() {
        const darkModeEnabled =
            root.classList.contains("dark");

        moonIcon.style.display =
            darkModeEnabled ? "none" : "block";

        sunIcon.style.display =
            darkModeEnabled ? "block" : "none";
    }

    if (
        savedTheme === "dark" ||
        (!savedTheme && deviceUsesDarkMode)
    ) {
        root.classList.add("dark");
    }

    updateIcons();

    toggleButton.addEventListener("click", () => {
        root.classList.toggle("dark");

        const darkModeEnabled =
            root.classList.contains("dark");

        localStorage.setItem(
            "theme",
            darkModeEnabled ? "dark" : "light"
        );

        updateIcons();
    });
});
