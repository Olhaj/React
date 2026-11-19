import styles from "./styles.module.css";

import logo from "../../assets/icons/cooljob_logo_gray.svg";
import linkedIn from "../../assets/icons/linkedIn.svg";
import google from "../../assets/icons/google.svg";
import twitter from "../../assets/icons/twitter.svg";
import facebook from "../../assets/icons/facebook_icon.svg";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_section}>
        <h3>Популярные города</h3>
        <div className={styles.footer_container_cities}>
          <a href="#">Осака</a>
          <a href="#">Коясан</a>
          <a href="#">Токио</a>
          <a href="#">Хаконэ</a>
          <a href="#">Наэба</a>
          <a href="#">Томаму</a>
          <a href="#">Йокогама</a>
          <a href="#">Нагоя</a>
          <a href="#">Саппоро</a>
          <a href="#">Кобе</a>
        </div>
        <div className={styles.footer_line}></div>
        <div className={styles.footer_logo}>
          <a href="#top">
            <img src={logo} alt="Logo" />
          </a>

          <div className={styles.footer_social_media}>
            <a href="#">
              <img src={linkedIn} alt="LinkedIn icon" />
            </a>
            <a href="#">
              <img src={google} alt="Google icon" />
            </a>
            <a href="#">
              <img src={twitter} alt="Twitter icon" />
            </a>
            <a href="#">
              <img src={facebook} alt="Facebook icon" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
