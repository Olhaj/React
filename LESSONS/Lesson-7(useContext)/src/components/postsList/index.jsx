import { useContext } from "react";
import GlobalContext from "../context/index";
import styles from "./styles.module.css";

function PostsList() {
  // Получаем из контекста данные, которые передал PostsProvider
  const { posts, error, isLoading } = useContext(GlobalContext);

  // Пока запрос выполняется, показываем сообщение о загрузке
  if (isLoading) {
    return <p>Загружаю посты...</p>;
  }

  // Если Provider сохранил ошибку, показываем её на странице
  if (error) {
    return <p>{error}</p>;
  }

  return (
    <ul className={styles.box_list}>
      {posts.map((post) => (
        <li className={styles.list} key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          <small>Автор: пользователь №{post.userId}</small>
        </li>
      ))}
    </ul>
  );
}

export default PostsList;
