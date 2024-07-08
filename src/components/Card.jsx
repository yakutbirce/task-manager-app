import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTask, editTask } from "../redux/taskSlice";
import Modal from "./Modal";

const Card = ({ task }) => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [completed, setCompleted] = useState(task.completed || false);

  const {
    id,
    task: taskName,
    category,
    type,
    description,
    deadline,
    status,
  } = task;

  const getClassName = () => {
    switch (status) {
      case "Yüksek Öncelik":
        return "high-priority";
      case "Orta Öncelik":
        return "medium-priority";
      case "Düşük Öncelik":
        return "low-priority";
      default:
        return "";
    }
  };

  const handleDelete = () => {
    const isConfirmed = window.confirm(
      "Bu görevi silmek istediğinizden emin misiniz?"
    );
    if (isConfirmed) {
      dispatch(deleteTask(id));
    }
  };

  const handleEdit = () => {
    setIsModalOpen((prevState) => !prevState);
  };

  const handleCheckboxChange = () => {
    setCompleted(!completed);
    dispatch(editTask({ ...task, completed: !completed }));
  };

  return (
    <div className={`card ${completed ? "completed" : ""}`}>
      {/* üst kısım */}
      <div className="head">
        <div className="letter">
          <p> {category[0]} </p>
        </div>

        <div className="info">
          <p> {taskName} </p>
          <p> {category} </p>
        </div>
      </div>
      {/* alt kısım */}
      <div className="body">
        <div className="field">
          <img src="/images/task.png" alt="" />
          <p> {description} </p>
        </div>
        <div className="field">
          <img
            src="/images/file.png"
            alt=""
            style={{
              verticalAlign: "middle",
              marginLeft: "10px",
            }}
          />
          <p> {type} </p>
        </div>
        <div className="field">
          <img src="/images/calendar.png" alt="" />
          <p> {deadline} </p>
        </div>
        <div className="status">
          <img
            src="/images/time-management.png"
            alt=""
            style={{
              width: "23px",
              height: "23px",
              verticalAlign: "middle",
              marginRight: "1px",
            }}
          />
          <span className={getClassName()}>{status}</span>
        </div>
      </div>
      <div className="checkbox">
        <input
          type="checkbox"
          checked={completed}
          onChange={handleCheckboxChange}
          id={`checkbox-${id}`}
        />
        <label htmlFor={`checkbox-${id}`}>Tamamlandı</label>
      </div>
      <div className="card-actions">
        <button className="delete-button" onClick={handleDelete}>
          Sil
        </button>
        <button className="edit-button" onClick={handleEdit}>
          Düzenle
        </button>
      </div>
      {isModalOpen && (
        <Modal task={task} closeModal={() => setIsModalOpen(false)} />
      )}
    </div>
  );
};

export default Card;
