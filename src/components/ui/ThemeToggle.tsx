import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { Button } from "@nextui-org/react";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  function toggleTheme() {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  return (
    <Button isIconOnly onClick={toggleTheme} className="bg-background">
      {theme === "dark" ? (
        <Sun className="h-5 w-5" />
      ) : (
        <Moon className="h-5 w-5" />
      )}
    </Button>
  );
}
