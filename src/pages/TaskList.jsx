import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setTasks, setError } from "../redux/taskSlice";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Filter from "../components/Filter";
import Modal from "../components/Modal";

const TaskList = () => {
  const state = useSelector((store) => store.tasks);
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3001/tasks")
      .then((res) => dispatch(setTasks(res.data)))
      .catch((error) => dispatch(setError(error)));
  }, [dispatch]);

  const openEditModal = (task) => {
    setSelectedTask(task);
    setIsModalOpen(true);
  };

  const closeEditModal = () => {
    setIsModalOpen(false);
    setSelectedTask(null);
  };

  console.log(state);

  return (
    <div className="list-page">
      <Filter />
      <h3 className="task-count">
        Bulunan ({state.mainTasks.length}) görev arasından ({state.tasks.length}
        ) tanesini görüntüleniyor
      </h3>
      <section className="task-list">
        {/*API'den cevap bekleniyorsa */}
        {!state.initialized && <p>Yükleniyor...</p>}
        {state.initialized && !state.isError ? (
          state.tasks.map((task) => (
            <Card key={task.id} task={task} openEditModal={openEditModal} />
          ))
        ) : (
          <p>Üzgünüm, bir hata oluştu.</p>
        )}
      </section>
      {isModalOpen && <Modal task={selectedTask} closeModal={closeEditModal} />}
    </div>
  );
};

export default TaskList;
