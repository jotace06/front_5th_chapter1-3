import { ChangeEventHandler } from "react";

import { memo } from "../../@lib/hocs";
import { RenderCounter } from "../../@lib/devTools";

interface ItemFilterProps {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

const ItemFilter = memo(({ value, onChange }: ItemFilterProps) => {
  return (
    <RenderCounter componentName="ItemFilter" borderColor="purple">
      <input
        type="text"
        placeholder="상품 검색..."
        value={value}
        onChange={onChange}
        className="w-full p-2 mb-4 border border-gray-300 rounded text-black"
      />
    </RenderCounter>
  );
});

export { ItemFilter };
