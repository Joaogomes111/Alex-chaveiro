@import "tailwindcss";

:root {
  --background: #ffffff;
  --foreground: #09090b;
  --muted: #71717a;
  --accent: #c91524;
  --accent-dark: #9f101b;
}

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --font-sans: "Geist", "Geist Fallback", ui-sans-serif, system-ui, sans-serif;
  --font-mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
    "Liberation Mono", "Courier New", monospace;
}

* {
  box-sizing: border-box;
}

html {
  background: #000000;
  overflow-x: clip;
  scroll-behavior: smooth;
}

body {
  min-height: 100vh;
  background: var(--background);
  color: var(--foreground);
  font-family: var(--font-geist-sans), "Geist", "Geist Fallback", ui-sans-serif,
    system-ui, sans-serif;
  overflow-x: clip;
  text-rendering: geometricPrecision;
}

::selection {
  background: var(--accent);
  color: #ffffff;
}

a,
button {
  -webkit-tap-highlight-color: transparent;
}

button {
  cursor: pointer;
}

img {
  max-width: 100%;
}

section {
  scroll-margin-top: 80px;
}

@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }

  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    scroll-behavior: auto !important;
    transition-duration: 0.01ms !important;
  }
}
