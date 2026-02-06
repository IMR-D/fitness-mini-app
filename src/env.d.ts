// src/env.d.ts
interface TelegramWebAppUser {
    id: number;
    first_name: string;
    last_name?: string;
    username?: string;
    language_code?: string;
  }
  
  interface TelegramWebAppThemeParams {
    bg_color?: string;
    text_color?: string;
    button_color?: string;
    button_text_color?: string;
    secondary_bg_color?: string;
    hint_color?: string;
  }
  
  interface TelegramWebAppInitDataUnsafe {
    user?: TelegramWebAppUser;
    query_id?: string;
    auth_date?: number;
    hash?: string;
  }
  
  interface TelegramWebApp {
    initData: string;
    initDataUnsafe: TelegramWebAppInitDataUnsafe;
    themeParams: TelegramWebAppThemeParams;
    ready(): void;
    expand(): void;
    showAlert(message: string, callback?: () => void): void;
  }
  
  interface TelegramGlobal {
    WebApp?: TelegramWebApp;
  }
  
  interface Window {
    Telegram?: TelegramGlobal;
  }