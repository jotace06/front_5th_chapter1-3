import { memo } from "../hocs";
import { useRenderCounter } from "../../hooks/use-render-counter";

interface RenderCounterProps {
  children: React.ReactNode;
  componentName: string;
  borderColor: string;
}

export const RenderCounter: React.FC<RenderCounterProps> = memo(
  ({ children, componentName, borderColor }) => {
    const count = useRenderCounter();

    return (
      <div
        className="relative"
        style={{
          border: `2px solid ${borderColor}`,
          padding: "1px",
          transition: "all 0.2s",
        }}
      >
        <div className="absolute top-0 right-0 bg-black text-white px-2 py-1 text-xs rounded-bl z-50">
          {componentName}: {count}
        </div>
        {children}
      </div>
    );
  },
);
