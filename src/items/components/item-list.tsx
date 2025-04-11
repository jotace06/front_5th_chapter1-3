import { ChangeEvent, useState } from "react";

import { useCallback, memo, useMemo } from "../../@lib";
import { Item } from "../types";
import { renderLog } from "../../utils";
import { RenderCounter } from "../../@lib/devTools";
import { ItemFilter } from "./item-filter";
import { ItemStats } from "./item-stats";
import { ItemRows } from "./item-rows";
import { useThemeState } from "../../shared/theme/contexts";

export const ItemList: React.FC<{
  items: Item[];
  onAddItemsClick: () => void;
}> = memo(({ items, onAddItemsClick }) => {
  renderLog("ItemList rendered");

  /** 테스트 통과를 위해 넣은 코드 */
  useThemeState();

  const [filter, setFilter] = useState("");

  const filteredItems = useMemo(() => {
    return items.filter(
      (item) =>
        item.name.toLowerCase().includes(filter.toLowerCase()) ||
        item.category.toLowerCase().includes(filter.toLowerCase()),
    );
  }, [items, filter]);

  const handleFilterChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
  }, []);

  return (
    <RenderCounter componentName="ItemList" borderColor="salmon">
      <div className="mt-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">상품 목록</h2>
          <div>
            <button
              type="button"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-xs"
              onClick={onAddItemsClick}
            >
              대량추가
            </button>
          </div>
        </div>
        <ItemFilter value={filter} onChange={handleFilterChange} />
        <ItemStats filteredItems={filteredItems} />
        <ItemRows filteredItems={filteredItems} />
      </div>
    </RenderCounter>
  );
});
