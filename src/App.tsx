import React from "react";

import { AuthProvider } from "./auth/contexts";
import { NotificationProvider } from "./notification/contexts";
import { ThemeProvider } from "./shared/theme/contexts";
import { Header } from "./shared/ui/layout/header";
import { ItemList } from "./items/components/item-list";
import { ComplexForm } from "./shared/ui/forms/complex-form";
import { NotificationSystem } from "./notification/components/notification-system";
import { ThemeLayout } from "./shared/ui/layout";
import { useItems } from "./items/hooks";

// 메인 App 컴포넌트
const App: React.FC = () => {
  const { items, addItems } = useItems({ initialCount: 1000, count: 1000 });

  return (
    <NotificationProvider>
      <ThemeProvider>
        <AuthProvider>
          <ThemeLayout>
            <Header />
            <div className="container mx-auto px-4 py-8">
              <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/2 md:pr-4">
                  <ItemList items={items} onAddItemsClick={addItems} />
                </div>
                <div className="w-full md:w-1/2 md:pl-4">
                  <ComplexForm />
                </div>
              </div>
            </div>
            <NotificationSystem />
          </ThemeLayout>
        </AuthProvider>
      </ThemeProvider>
    </NotificationProvider>
  );
};

export default App;
