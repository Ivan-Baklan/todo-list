import styles from "./CreateTaskForm.module.css";

function CreateTaskForm({ title, setTask, changeHandle }) {
  return (
    <form className={styles["FormContainer"]}>
      <input
        className={styles["TextInput"]}
        type="text"
        placeholder="Type ToDo..."
        value={title}
        onChange={setTask}
      />
      <input
        className={styles["ButtonInput"]}
        type="submit"
        value="Add"
        onClick={changeHandle}
      />
    </form>
  );
}

export default CreateTaskForm;
