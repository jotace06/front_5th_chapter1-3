import { AuthProvider } from "./auth/contexts";
import { ThemeProvider } from "./shared/theme/contexts";
import { NotificationProvider } from "./notification/contexts";
import { ThemeLayout } from "./shared/ui/layout";
import { Header } from "./shared/ui/layout/header";
import { Content } from "./shared/ui/layout/content";
import { NotificationSystem } from "./notification/components/notification-system";

// 메인 App 컴포넌트
const App: React.FC = () => {
  return (
    <NotificationProvider>
      <ThemeProvider>
        <AuthProvider>
          <ThemeLayout>
            <Header />
            <Content />
            <NotificationSystem />
          </ThemeLayout>
        </AuthProvider>
      </ThemeProvider>
    </NotificationProvider>
  );
};

export default App;
