import { createContext, useContext } from "react";

const BlogSettingsContext = createContext(null);

// Этот хук позволит компонентам удобно читать контекст
export function useBlogSettings() {
  const settings = useContext(BlogSettingsContext);

  // Помогаем найти ошибку, если компонент использован без Provider
  if (settings === null) {
    throw new Error(
      "useBlogSettings нужно вызывать внутри BlogSettingsProvider",
    );
  }

  return settings;
}

export default BlogSettingsContext;

// BlogSettingsProvider хранит значения настроек и функции для их изменения.
//  Он передаёт их дочерним компонентам через value. Позже SettingsPanel
// получит функции setFontSize и setLineHeight, а Article — текущие
// fontSize и lineHeight.
