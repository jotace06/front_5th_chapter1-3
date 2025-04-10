import { memo } from "../../../@lib/hocs";
import { renderLog } from "../../../utils";
import { useThemeActions, useThemeState } from "../../theme/contexts";
import { useAuthActions, useAuthState } from "../../../auth/contexts";

import { RenderCounter } from "../../../@lib/devTools";

const Header: React.FC = memo(() => {
  renderLog("Header rendered");

  // state
  const { theme } = useThemeState();
  const { user } = useAuthState();

  // actions
  const { toggleTheme } = useThemeActions();
  const { login, logout } = useAuthActions();

  const handleLogin = () => {
    // 실제 애플리케이션에서는 사용자 입력을 받아야 합니다.
    login("user@example.com", "password");
    // eventBus로 대체
    // addNotification("로그인 성공", "success");
  };

  const handleLogout = () => {
    logout();
    // eventBus로 대체
    // addNotification("로그아웃되었습니다", "info");
  };

  return (
    <RenderCounter componentName="Header" borderColor="green">
      <header className="bg-gray-800 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">샘플 애플리케이션</h1>
          <div className="flex items-center">
            <button
              onClick={toggleTheme}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
            >
              {theme === "light" ? "다크 모드" : "라이트 모드"}
            </button>
            {user ? (
              <div className="flex items-center">
                <span className="mr-2">{user.name}님 환영합니다!</span>
                <button
                  onClick={handleLogout}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                >
                  로그아웃
                </button>
              </div>
            ) : (
              <button
                onClick={handleLogin}
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
              >
                로그인
              </button>
            )}
          </div>
        </div>
      </header>
    </RenderCounter>
  );
});

export { Header };
