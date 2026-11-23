import { createContext } from "react";

const GlobalContext = createContext(null);

export default GlobalContext;

// createContext(null) создаёт объект контекста.
// Пока в нём нет данных, поэтому начальное
// начение — null. Позже компонент Provider
// положит туда загруженные посты, и дочерние
// компоненты смогут их получить через useContext.
