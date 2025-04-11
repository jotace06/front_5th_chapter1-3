import { memo } from "../../@lib";
import { Item } from "../types";
import { RenderCounter } from "../../@lib/devTools";

interface ItemRowProps {
  item: Item;
  theme: string;
}

const ItemRow = memo(({ item, theme }: ItemRowProps) => {
  return (
    <RenderCounter componentName="ItemRow" borderColor="#B3DEFF">
      <li
        className={`p-2 rounded shadow ${theme === "light" ? "bg-white text-black" : "bg-gray-700 text-white"}`}
      >
        {item.name} - {item.category} - {item.price.toLocaleString()}원
      </li>
    </RenderCounter>
  );
});

export { ItemRow };
