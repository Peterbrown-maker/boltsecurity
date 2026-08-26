import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const [dark, setDark] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const stored = localStorage.getItem("theme");
    const mq = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)");

    const apply = (isDark: boolean) => {
      setDark(isDark);
      document.documentElement.classList.toggle("dark", isDark);
    };

    if (stored === "dark" || stored === "light") {
      apply(stored === "dark");
      return;
    }

    // No explicit user preference — follow system
    apply(mq ? mq.matches : false);

    const handler = (e: MediaQueryListEvent | MediaQueryList) => {
      apply(Boolean(e.matches));
    };

    if (mq && (mq as any).addEventListener) {
      (mq as MediaQueryList).addEventListener("change", handler as any);
      return () => (mq as MediaQueryList).removeEventListener("change", handler as any);
    } else if (mq && (mq as any).addListener) {
      (mq as any).addListener(handler as any);
      return () => (mq as any).removeListener(handler as any);
    }
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className="btn-glass relative h-10 w-10 rounded-full grid place-items-center transition-transform hover:scale-110"
    >
      {dark ? <Sun className="h-4 w-4 text-[var(--accent)]" /> : <Moon className="h-4 w-4 text-[var(--primary)]" />}
    </button>
  );
}
