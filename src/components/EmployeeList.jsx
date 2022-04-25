import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const EmployeeList = () => {
  const [employeeData, setEmployeeData] = useState([]);
  // console.log(employeeData);

  useEffect(() => {
    axios
      .get("http://localhost:8080/employee")
      .then((res) => setEmployeeData(res.data));
  }, []);

  return (
    <div className="list_container">
      {/* On clicking this card anywhere, user goes to user details */}
      {employeeData.map((el) => (
        <Link to={`/employees/${el.id}`}>
          <div className="employee_card" key={el.id}>
            <img className="employee_image" src={el.image} />
            <span className="employee_name">{el.employee_name}</span>
            <span className="employee_title">{el.title}</span>
          </div>
        </Link>
      ))}
    </div>
  );
};
