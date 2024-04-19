// eslint-disable-next-line no-unused-vars
import axios from "axios";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [taskTotal, setEmployeeTotal] = useState([]);
  const [userTotal, setUserTotal] = useState([]);

  useEffect(() => {
    tasksCount();
  }, []);

  const tasksCount = async () => {
    try {
      const response = await axios.get("http://45.147.176.236:5000/tasks/");
      if (response.status === 200) {
        const taskData = response.data.result.data;
        console.log(taskData);
      }
    } catch (error) {
      console.error("Error", error);
    }
  };

  return (
    <div>
      <div className="p-3 d-flex justify-content-around mt-3">
        <div className="px-3 pt-2 pb-3 border shadow-sm w-25">
          <div className="text-center pb-1">
            <h4>Админ</h4>
          </div>
          <hr />
          <div className="">
            <h5>Итого: </h5>
          </div>
        </div>
        <div className="px-3 pt-2 pb-3 border shadow-sm w-25">
          <div className="text-center pb-1">
            <h4>ЗАДАЧИ</h4>
          </div>
          <hr />
          <div className="">
            <h5>Итого: </h5>
          </div>
        </div>
        <div className="px-3 pt-2 pb-3 border shadow-sm w-25">
          <div className="text-center pb-1">
            <h4>Сотрудники</h4>
          </div>
          <hr />
          <div className="">
            <h5>Итого: </h5>
          </div>
        </div>
      </div>
    </div>
  );
  //create a div with class home
};

export default Home;
