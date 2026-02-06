// src/mocks/mockTelegramWebApp.ts
export function setupMockTelegramWebApp() {
    if (window.Telegram?.WebApp) return;
  
    const mockWebApp: TelegramWebApp = {
      initData: '',
      initDataUnsafe: {
        user: {
          id: 123,
          first_name: 'Mock',
          username: 'mock_user',
          language_code: 'ru',
        },
      },
      themeParams: {
        bg_color: '#181818',
        text_color: '#ffffff',
      },
      ready() {},
      expand() {},
      showAlert(message: string) {
        // eslint-disable-next-line no-alert
        alert(`[Telegram mock] ${message}`);
      },
    };
  
    window.Telegram = { WebApp: mockWebApp };
  }