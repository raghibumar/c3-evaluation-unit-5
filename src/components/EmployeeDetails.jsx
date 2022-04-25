import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const EmployeeDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8080/employee").then((res) => {
      const filteredData = res.data.filter((e) => {
        return e.id == id;
      });
      setData(filteredData);
    });
  }, []);

  return (
    <>
      {data.map((ele) => (
        <div className="user_details" key={ele.id}>
          <img className="user_image" src={ele.image} />
          <h4 className="user_name">{ele.employee_name}</h4>
          <span className="user_salary">${ele.salary}</span>
          <span className="tasks">
            {ele.tasks.map((e, i) => (
              <li className="task">{e}</li>
            ))}
          </span>
          Status: <b className="status">{ele.status}</b>
          Title: <b className="title">{ele.title}</b>
          {/* Show this button only if user is not already terminated (users status is working) */}
          <button className="fire">Fire Employee</button>
          {/* Show this button only if user is not already team lead or terminated */}
          <button className="promote">promote</button>
        </div>
      ))}
    </>
  );
};
