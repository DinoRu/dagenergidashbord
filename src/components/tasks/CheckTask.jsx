import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CheckTask = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const response = await axios.get(
          "http://45.147.176.236:5000/tasks/?offset=0&limit=1000&order=ASC&condition=%D0%92%D1%8B%D0%BF%D0%BE%D0%BB%D0%BD%D0%B5%D0%BD%D0%BE"
        );
        if (response.status === 200) {
          const taskData = response.data.result.data;
          console.log(taskData);
          setTasks(taskData);
        }
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchTask();
  }, []);

  return (
    <div className="px-5 mt-3">
      <div className="d-flex justify-content-center">
        <h3>ЗАДАЧИ</h3>
      </div>
      <div className="d-flex mt-5 justify-content-between">
        <div className="d-flex">
          <Link to="/dashboard/add_tasks" className="btn btn-dark me-4">
            Добавить задач
          </Link>
          <Link to="/dashboard/do_tasks" className="btn btn-info me-3">
            Выполняется
          </Link>
          <Link to="/dashboard/task" className="btn btn-warning me-3">
            Проверяется
          </Link>
          <Link to="/dashboard/check_task" className="btn btn-success me-3">
            Выполнено
          </Link>
          <Link to="" className="btn btn-danger me-3">
            Просрочено
          </Link>
        </div>
        <Link to="" className="btn btn-primary me-3">
          <i className="fas fa-download me-1"></i> Скачать excel файл
        </Link>
      </div>
      <hr />
      <div className="my-4">
        <table className="table">
          <thead>
            <tr>
              <th>Код</th>
              <th>ИМЯ</th>
              <th>Адрес</th>
              <th>Исполнитель</th>
              <th>Текущий показание</th>
              <th>Долгота</th>
              <th>Широта</th>
              <th>фотография</th>
              <th>Статус</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <tr key={task.task_id}>
                <td>{task.code}</td>
                <td>{task.name}</td>
                <td>{task.address}</td>
                <td>{task.implementer}</td>
                <td>{task.current_indication}</td>
                <td>{task.longitude}</td>
                <td>{task.latitude}</td>
                <td>
                  <img
                    src={task.far_photo_url}
                    alt="far_photo"
                    width="50"
                    height="50"
                  />
                </td>
                <td>{task.status}</td>
                <td className="text-center">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    checked
                    disabled
                    style={{ zoom: "1.5" }}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CheckTask;
