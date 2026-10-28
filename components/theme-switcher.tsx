"use client";

import { useEffect, useRef, useState } from "react";

type ThemePreference = "system" | "light" | "dark";

const STORAGE_KEY = "tgg-hub-theme";

const themeOptions: {
  value: ThemePreference;
  label: string;
}[] = [
  { value: "system", label: "System" },
  { value: "light", label: "Light" },
  { value: "dark", label: "Dark" }
];

function isThemePreference(
  value: string | undefined | null
): value is ThemePreference {
  return (
    value === "system" ||
    value === "light" ||
    value === "dark"
  );
}

function applyTheme(
  preference: ThemePreference,
  systemPrefersDark = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches
) {
  const theme =
    preference === "system"
      ? systemPrefersDark
        ? "dark"
        : "light"
      : preference;

  const root = document.documentElement;

  root.dataset.themePreference = preference;
  root.dataset.theme = theme;

  document
    .getElementById("tgg-hub-theme-color")
    ?.setAttribute(
      "content",
      theme === "dark" ? "#12161C" : "#F7F6F2"
    );
}

export function ThemeSwitcher() {
  const [preference, setPreference] =
    useState<ThemePreference>("system");

  const detailsRef = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    const root = document.documentElement;
    let initialPreference: ThemePreference | null = null;

    if (isThemePreference(root.dataset.themePreference)) {
      initialPreference = root.dataset.themePreference;
    }

    if (!initialPreference) {
      try {
        const stored = window.localStorage.getItem(STORAGE_KEY);

        if (isThemePreference(stored)) {
          initialPreference = stored;
        }
      } catch {
        initialPreference = null;
      }
    }

    const initial = initialPreference ?? "system";

    setPreference(initial);
    applyTheme(initial);

    const media = window.matchMedia(
      "(prefers-color-scheme: dark)"
    );

    function handleSystemChange(event: MediaQueryListEvent) {
      if (root.dataset.themePreference !== "system") {
        return;
      }

      applyTheme("system", event.matches);
    }

    media.addEventListener("change", handleSystemChange);

    return () => {
      media.removeEventListener("change", handleSystemChange);
    };
  }, []);

  function chooseTheme(next: ThemePreference) {
    setPreference(next);
    applyTheme(next);

    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // The current selection still applies if storage is unavailable.
    }

    detailsRef.current?.removeAttribute("open");
  }

  return (
    <details className="theme-switcher" ref={detailsRef}>
      <summary aria-label="Choose colour theme">
        <span className="theme-switcher__icon" aria-hidden="true">
          ◐
        </span>
        <span>Theme</span>
      </summary>

      <div
        className="theme-switcher__panel"
        role="group"
        aria-label="Colour theme"
      >
        {themeOptions.map((option) => (
          <button
            className="theme-switcher__option"
            type="button"
            key={option.value}
            aria-pressed={preference === option.value}
            onClick={() => chooseTheme(option.value)}
          >
            <span>{option.label}</span>
            <span
              className="theme-switcher__check"
              aria-hidden="true"
            >
              {preference === option.value ? "✓" : ""}
            </span>
          </button>
        ))}
      </div>
    </details>
  );
}