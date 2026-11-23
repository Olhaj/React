import styles from "./styles.module.css";

function Post({ post }) {
  return (
    <div>
      <h2 className={styles.title}>{post.title}</h2>
      <p className={styles.body}>{post.body}</p>
      <p className={styles.author}>Автор: пользователь №{post.userId}</p>
    </div>
  );
}

export default Post;
