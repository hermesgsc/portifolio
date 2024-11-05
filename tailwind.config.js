import { fontFamily } from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export const darkMode = ["class"]; // Class-based dark mode

export const content = [
  "./src/**/*.{js,jsx,ts,tsx}", // Ensure this reflects your directory structure
  "app/**/*.{ts,tsx}",
  "components/**/*.{ts,tsx}",
];

export const theme = {
  container: {
    center: true,
    padding: "2rem",
    screens: {
      "2xl": "1400px", // Custom screen size for larger displays
    },
  },
  extend: {
    animation: {
      "infinite-scroll": "infinite-scroll 40s linear infinite",
    },
    keyframes: {
      "infinite-scroll": {
        "0%": { transform: "translateX(0)" },
        "100%": { transform: "translateX(-100%)" },
      },
    },
    colors: {
      "custom-1": "#032B33",
      "custom-2": "#0B4955",
      "custom-3": "#267180",
      "custom-4": "#4F9BAA",
      "custom-5": "#87C8D5",
      "custom-grey": "#151515",
      border: "hsl(var(--border))",
      input: "hsl(var(--input))",
      ring: "hsl(var(--ring))",
      background: "hsl(var(--background))",
      foreground: "hsl(var(--foreground))",
      primary: {
        DEFAULT: "hsl(var(--primary))",
        foreground: "hsl(var(--primary-foreground))",
      },
      secondary: {
        DEFAULT: "hsl(var(--secondary))",
        foreground: "hsl(var(--secondary-foreground))",
      },
      destructive: {
        DEFAULT: "hsl(var(--destructive))",
        foreground: "hsl(var(--destructive-foreground))",
      },
      muted: {
        DEFAULT: "hsl(var(--muted))",
        foreground: "hsl(var(--muted-foreground))",
      },
      accent: {
        DEFAULT: "hsl(var(--accent))",
        foreground: "hsl(var(--accent-foreground))",
      },
      popover: {
        DEFAULT: "hsl(var(--popover))",
        foreground: "hsl(var(--popover-foreground))",
      },
      card: {
        DEFAULT: "hsl(var(--card))",
        foreground: "hsl(var(--card-foreground))",
      },
    },
    backdropBlur: {
      lg: "10px", // Custom backdrop blur value
    },
    borderRadius: {
      lg: "var(--radius)", // Use custom radius values
      md: "calc(var(--radius) - 2px)",
      sm: "calc(var(--radius) - 4px)",
    },
    fontFamily: {
      sans: ["var(--font-sans)", ...fontFamily.sans], // Custom sans font
    },
  },
};

// eslint-disable-next-line @typescript-eslint/no-require-imports, no-undef
export const plugins = [require("tailwindcss-animate")];
