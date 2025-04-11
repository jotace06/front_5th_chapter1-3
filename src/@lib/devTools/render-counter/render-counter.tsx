import { memo } from "../../hocs";
import { useRenderCount } from "./use-render-count";

type CounterPosition =
  | "top-right"
  | "top-left"
  | "bottom-right"
  | "bottom-left";

interface RenderCounterProps {
  children: React.ReactNode;
  componentName: string;
  borderColor: string;
  position?: CounterPosition;
}

export const RenderCounter: React.FC<RenderCounterProps> = memo(
  ({ children, componentName, borderColor, position = "top-right" }) => {
    const count = useRenderCount();

    const getPositionClasses = (): string => {
      switch (position) {
        case "top-left":
          return "top-0 left-0 rounded-br";
        case "bottom-right":
          return "bottom-0 right-0 rounded-tl";
        case "bottom-left":
          return "bottom-0 left-0 rounded-tr";
        case "top-right":
        default:
          return "top-0 right-0 rounded-bl";
      }
    };

    return (
      <div
        className="relative"
        style={{
          border: `2px solid ${borderColor}`,
          padding: "1px",
          transition: "all 0.2s",
        }}
      >
        <div
          className={`absolute ${getPositionClasses()} bg-black text-white px-2 py-1 text-xs z-50`}
        >
          {componentName}: {count}
        </div>
        {children}
      </div>
    );
  },
);
