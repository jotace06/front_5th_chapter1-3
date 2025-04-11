import { memo } from "../../@lib";
import { useThemeState } from "../../shared/theme/contexts";
import { Item } from "../types";
import { ItemRow } from "./item-row";
import { RenderCounter } from "../../@lib/devTools";

interface ItemRowsProps {
  filteredItems: Item[];
}

const ItemRows = memo(({ filteredItems }: ItemRowsProps) => {
  const { theme } = useThemeState();

  return (
    <RenderCounter
      componentName="ItemRows"
      borderColor="#FFC8A2"
      position="top-left"
    >
      <ul className="space-y-2">
        {filteredItems.map((item, index) => (
          <ItemRow key={index} item={item} theme={theme} />
        ))}
      </ul>
    </RenderCounter>
  );
});

export { ItemRows };
