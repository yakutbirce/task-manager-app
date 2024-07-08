import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editTask } from "../redux/taskSlice";

const Modal = ({ task, closeModal }) => {
  const dispatch = useDispatch();
  const [editedTask, setEditedTask] = useState({ ...task });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedTask((prevTask) => ({ ...prevTask, [name]: value }));
  };

  const handleSave = () => {
    dispatch(editTask(editedTask));
    closeModal();
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Görev Düzenle</h2>
        <label>
          Görev:
          <input
            className="input-style"
            type="text"
            name="task"
            value={editedTask.task}
            onChange={handleChange}
          />
        </label>
        <label>
          Kategori:
          <input
            className="input-style"
            type="text"
            name="category"
            value={editedTask.category}
            onChange={handleChange}
          />
        </label>
        <label>
          Açıklama:
          <input
            className="input-style"
            type="text"
            name="description"
            value={editedTask.description}
            onChange={handleChange}
          />
        </label>
        <label>
          Tür:
          <input
            className="input-style"
            type="text"
            name="type"
            value={editedTask.type}
            onChange={handleChange}
          />
        </label>
        <label>
          Deadline:
          <input
            className="input-style"
            type="date"
            name="deadline"
            value={editedTask.deadline}
            onChange={handleChange}
          />
        </label>
        <label>
          Durum:
          <input
            className="input-style"
            type="text"
            name="status"
            value={editedTask.status}
            onChange={handleChange}
          />
        </label>
        <div className="button-container">
          <button className="save-button" onClick={handleSave}>
            Kaydet
          </button>
          <button className="cancel-button" onClick={closeModal}>
            İptal
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
