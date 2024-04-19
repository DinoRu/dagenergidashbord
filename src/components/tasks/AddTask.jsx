import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddTask = () => {
  const navigate = useNavigate();
  const [task, setTask] = useState({
    task_id: "",
    code: "",
    name: "",
    address: "",
    current_indication: 0,
    implementer: "",
    comment: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Convertir les valeurs en entiers
    const taskWithIntValues = {
      ...task,
      current_indication: parseFloat(task.current_indication),
      longitude: parseFloat(task.longitude),
      latitude: parseFloat(task.latitude),
    };
    try {
      const response = await axios.post(
        "http://45.147.176.236:5000/tasks",
        taskWithIntValues
      );
      if (response.status === 201) {
        console.log(response.data);
        navigate("/dashboard/do_tasks");
      }
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  return (
    <div className="d-flex justify-content-center align-items-center mt-3">
      <div className="p-3 rounded w-50 border">
        <h2>Добавить ЗАДАЧ</h2>
        <br />
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="task_id">ID</label>
            <input
              type="text"
              name="task_id"
              placeholder="ID"
              className="form-control"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="code">Код</label>
            <input
              type="text"
              id="code"
              maxLength={15}
              name="code"
              placeholder="Код"
              className="form-control"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="address">Адрес</label>
            <input
              type="text"
              name="address"
              id="address"
              placeholder="Адрес"
              className="form-control"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="name">Имя</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Имя"
              className="form-control"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="implementer">Исполнитель</label>
            <input
              type="text"
              id="implementer"
              name="implementer"
              placeholder="Исполнитель"
              className="form-control"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="current_indication">Текущий показание</label>
            <input
              type="number"
              id="current_indication"
              name="current_indication"
              placeholder="Текущий показание"
              className="form-control"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="comment">Комментарий</label>
            <textarea
              id="comment"
              className="form-control"
              rows="5"
              name="comment"
              placeholder="Комментарий"
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="my-4 col-12">
            <button type="submit" className="btn btn-primary w-100">
              Добавить
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTask;
