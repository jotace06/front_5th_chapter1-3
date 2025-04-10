import { useThemeState } from "../../theme/contexts";

export const ThemeLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { theme } = useThemeState();

  return (
    <div
      className={`min-h-screen ${theme === "light" ? "bg-gray-100" : "bg-gray-900 text-white"}`}
    >
      {children}
    </div>
  );
};
