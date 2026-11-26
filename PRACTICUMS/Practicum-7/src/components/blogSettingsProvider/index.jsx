import BlogSettingsContext from "../../context/blogSettingsContext";
import { useState } from "react";

function BlogSettingsProvider({ children }) {
  // Размер шрифта храним числом, а единицу px добавим при применении стиля
  const [fontSize, setFontSize] = useState(18);

  // Межстрочный интервал обычно задаётся числом без единицы измерения
  const [lineHeight, setLineHeight] = useState(1.6);

  return (
    <BlogSettingsContext.Provider
      value={{ fontSize, setFontSize, lineHeight, setLineHeight }}
    >
      {children}
    </BlogSettingsContext.Provider>
  );
}

export default BlogSettingsProvider;
