import styles from "./styles.module.css";

function MainContent({ theme }) {
  return (
    <main className={`main_content ${theme}`}>
      <div className={styles.main_container}>
        <div className={styles.main_first__container}>
          <h3>First paragraph</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed,
            natus? Natus maiores earum officiis aspernatur reiciendis soluta
            repudiandae itaque, adipisci ex, perspiciatis aliquam voluptates ea
            optio recusandae. Expedita explicabo veniam non nostrum hic debitis
            inventore blanditiis laudantium, dolores distinctio quisquam at
            aliquam eaque, magni, nam vel. Sit illum ab laborum voluptatem?
            Eaque, rem maiores at veniam unde quam magnam et!
          </p>
        </div>
        <div className={styles.main_second__container}>
          <h3>Second paragraph</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            qui saepe, natus repellat ab accusamus at illum, voluptas deserunt
            dolore magnam dolorem id quas aspernatur rem et nostrum voluptatem
            explicabo perspiciatis nobis. Facilis nisi, quia ducimus qui
            quisquam quibusdam deleniti animi, rem cupiditate suscipit harum a
            sequi assumenda hic possimus odio mollitia, delectus eveniet beatae
            tempora error quos reprehenderit doloribus? Dolorum earum, eius
            iusto suscipit eveniet eaque magni sit ducimus accusamus nam fugit.
            Placeat ipsum blanditiis nemo ab laudantium? Necessitatibus iure
            veritatis eum, enim, iusto dolore libero nesciunt ab saepe tenetur
            temporibus quos eius architecto ipsa. Maiores exercitationem quo
            illo in possimus soluta eos quisquam, mollitia accusamus beatae
            eligendi incidunt? Earum quam unde nihil voluptatem magnam harum
            quos molestias deserunt!
          </p>
        </div>
      </div>
    </main>
  );
}

export default MainContent;
