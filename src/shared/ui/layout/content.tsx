import { memo } from "../../../@lib/hocs";
import { ItemList } from "../../../items/components/item-list";
import { ComplexForm } from "../../../shared/ui/forms/complex-form";
import { useItems } from "../../../items/hooks";
import { RenderCounter } from "../../../@lib/devTools";

export const Content = memo(() => {
  const { items, addItems } = useItems({ initialCount: 1000, count: 1000 });

  return (
    <RenderCounter componentName="Content" borderColor="#40E0D0">
      <div className="container mx-auto px-4 py-8 ">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 md:pr-4">
            <ItemList items={items} onAddItemsClick={addItems} />
          </div>
          <div className="w-full md:w-1/2 md:pl-4">
            <ComplexForm />
          </div>
        </div>
      </div>
    </RenderCounter>
  );
});
