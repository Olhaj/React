import { useEffect, useState } from "react";
import GlobalContext from "../context/index";
import axios from "axios";

const BASE_URL = "https://jsonplaceholder.typicode.com";

function PostsProvider({ children }) {
  // Здесь будут храниться посты после загрузки
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");
  // Эти состояния помогут показать ход загрузки и ошибку
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await axios.get(BASE_URL + "/posts");

        setPosts(response.data);
      } catch (error) {
        console.error(error);
        setError("Не удалось загрузить посты.");
      } finally {
        // Выполняется и при успехе, и при ошибке
        setIsLoading(false);
      }
    }

    fetchPosts();
  }, []);

  return (
    <GlobalContext value={{ posts, error, isLoading }}>
      {children}
    </GlobalContext>
  );
}

export default PostsProvider;

// Что здесь происходит:
//   - useState хранит посты, состояние загрузки и сообщение об ошибке.
//   - useEffect(..., []) запускает загрузку один раз при появлении Provider.
//   - fetch отправляет запрос, а await ждёт ответа.
//   - response.json() превращает ответ сервера в JavaScript-данные.
//   - PostsContext.Provider передаёт объект с постами и статусами всем вложенным компонентам.
//   - children — это компоненты, которые мы позже поместим внутрь.
