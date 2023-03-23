import Button from "../Button/Button";
import ToDoText from "../ToDoText/ToDoText";
import styles from "./ToDoItem.module.css";

function ToDoItem({ elem, removeHandle, completeTask }) {
  return (
    <div
      className={`${styles["ToDoItem"]} ${
        elem.completed ? styles["Done"] : ""
      }`}
    >
      <ToDoText
        itemId={elem.id}
        itemName={elem.title}
        itemProgress={elem.completed}
      />
      <div className={styles["ButtonContainer"]}>
        {elem.completed ? (
          ""
        ) : (
          <Button
            actionName={"Done"}
            action={() => {
              completeTask(elem);
            }}
          />
        )}
        <Button
          actionName={"Delete"}
          action={() => {
            removeHandle(elem);
          }}
        />
      </div>
    </div>
  );
}

export default ToDoItem;
