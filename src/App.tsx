import React from "react";

// providers
import { AuthProvider } from "./auth/contexts";
import { ThemeProvider } from "./shared/theme/contexts";
import { NotificationProvider } from "./notification/contexts";

// components
import { ThemeLayout } from "./shared/ui/layout";
import { Header } from "./shared/ui/layout/header";
import { Content } from "./shared/ui/layout/content";
import { NotificationSystem } from "./notification/components/notification-system";

// 메인 App 컴포넌트
const App: React.FC = () => {
  const providers = [NotificationProvider, ThemeProvider, AuthProvider];

  return providers.reduceRight(
    (children, Component) => React.createElement(Component, null, children),
    <ThemeLayout>
      <Header />
      <Content />
      <NotificationSystem />
    </ThemeLayout>,
  );
};

export default App;
