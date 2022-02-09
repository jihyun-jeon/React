import propTypes from "prop-types";
import styles1 from "./Button.module.css";
import styles2 from "./app.module.css";
// react는 css코드를 js의 obj로 변환시켜 줌.
// styles = {btn: font-size: 18px, }

function Button({ text }) {
  return (
    <>
      <h1 className={styles2.title}>text</h1>
      <button className={styles1.btn}>{text}</button>
    </>
  );
}

Button.propTypes = {
  text: propTypes.string.isRequired,
};

export default Button;
