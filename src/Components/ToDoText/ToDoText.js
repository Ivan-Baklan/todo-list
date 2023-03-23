import styles from "./ToDoText.module.css";

function ToDoText({ itemName, itemId, itemProgress }) {
  return (
    <div className={styles["TextContainer"]}>
      <h3 className={itemProgress ? styles["Stroke"] : ""}>{itemName}</h3>
      <p>{itemId}</p>
    </div>
  );
}

export default ToDoText;
