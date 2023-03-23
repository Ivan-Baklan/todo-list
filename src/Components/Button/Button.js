import styles from "./Button.module.css";

function Button({ actionName, action }) {
  return (
    <button className={styles[actionName]} onClick={action}>
      {actionName}
    </button>
  );
}

export default Button;
