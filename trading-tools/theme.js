const TGGTheme = (() => {
    const STORAGE_KEY = "tgg-theme";
    const themes = ["light", "dark", "system"];

    const getStoredTheme = () => {
        const saved = localStorage.getItem(STORAGE_KEY);
        return themes.includes(saved) ? saved : "system";
    };

    const apply = (theme) => {
        const selected = themes.includes(theme) ? theme : "system";

        document.documentElement.dataset.theme = selected;
        localStorage.setItem(STORAGE_KEY, selected);
    };

    const bindSelector = () => {
        const selector = document.querySelector("#theme-select");

        if (!selector) {
            return;
        }

        selector.value = getStoredTheme();

        selector.addEventListener("change", (event) => {
            apply(event.target.value);
        });
    };

    const init = () => {
        apply(getStoredTheme());
        bindSelector();
    };

    return {
        init,
        apply,
        getStoredTheme,
        themes
    };
})();

document.addEventListener("DOMContentLoaded", TGGTheme.init);