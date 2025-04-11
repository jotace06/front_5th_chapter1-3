import { memo, useMemo } from "../../@lib";
import { Item } from "../types";
import { RenderCounter } from "../../@lib/devTools";

interface ItemStatsProps {
  filteredItems: Item[];
}

const ItemStats: React.FC<ItemStatsProps> = memo(({ filteredItems }) => {
  const { totalPrice, averagePrice } = useMemo(() => {
    const totalPrice = filteredItems.reduce((sum, item) => sum + item.price, 0);
    const averagePrice = Math.round(totalPrice / filteredItems.length) || 0;

    return { totalPrice, averagePrice };
  }, [filteredItems]);

  return (
    <RenderCounter
      componentName="ItemStats"
      borderColor="green"
      position="top-left"
    >
      <ul className="mb-4 mx-4 flex gap-3 text-sm justify-end">
        <li>검색결과: {filteredItems.length.toLocaleString()}개</li>
        <li>전체가격: {totalPrice.toLocaleString()}원</li>
        <li>평균가격: {averagePrice.toLocaleString()}원</li>
      </ul>
    </RenderCounter>
  );
});

export { ItemStats };
