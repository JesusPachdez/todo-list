import PropTypes from "prop-types";
import Image from "../../assets/icon-cross.svg";

export default function TodoItem({
  completed,
  title,
  handleCompleteTask,
  id,
  handleDeleteTask,
}) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
      }}
    >
      <div
        onClick={() => handleCompleteTask(id)}
        style={{
          marginRight: 10,
          justifyContent: "center",
          width: 16,
          height: 16,
          backgroundColor: completed ? "gray" : "white",
          borderWidth: 1,
          borderStyle: "solid",
          borderColor: "gray",
          borderRadius: "50%",
          cursor: "pointer",
        }}
      />

      <p
        onClick={() => handleCompleteTask(id)}
        style={{
          color: "black",
          fontFamily: "-moz-initial",
          fontSize: "20px",
          textDecoration: completed ? "line-through" : " ",
          opacity: completed ? "0.5" : "1",
          cursor: "pointer",
        }}
      >
        {title}
      </p>

      <img
        onClick={() => handleDeleteTask(id)}
        src={Image}
        alt="cross"
        style={{ marginLeft: 50, cursor: "pointer" }}
      />
    </div>
  );
}

TodoItem.proptype = {
  completed: PropTypes.bool,
  title: PropTypes.string,
  handleCompleteTask: PropTypes.func,
  id: PropTypes.number,
  handleDeleteTask: PropTypes.func,
};
