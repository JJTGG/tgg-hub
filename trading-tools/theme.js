const TGGTheme = (() => {
    const STORAGE_KEY = "tgg-theme";
    const themes = ["light", "dark", "system"];

    function getStoredTheme() {
        const saved = localStorage.getItem(STORAGE_KEY);
        return themes.includes(saved) ? saved : "system";
    }

    function apply(theme) {
        const selected = themes.includes(theme) ? theme : "system";

        document.documentElement.dataset.theme = selected;
        localStorage.setItem(STORAGE_KEY, selected);
    }

    function init() {
        apply(getStoredTheme());
    }

    return {
        init,
        apply,
        getStoredTheme,
        themes
    };
})();

document.addEventListener("DOMContentLoaded", TGGTheme.init);