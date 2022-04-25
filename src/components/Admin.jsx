import axios from "axios";
import { useState } from "react";

export const Admin = () => {
  const [employee, setEmployee] = useState({
    employee_name: "",
    employee_id: "",
    title: "",
    salary: "",
    image: "",
    username: "",
    password: "",
    tasks: "",
    status: "",
    team: "",
  });
  const handleData = (el) => {
    setEmployee({ ...employee, [el.target.value]: el.target.value });
  };

  const submitData = (e) => {
    e.preventDefault();

    axios.post("http://localhost:8080/employee", employee).then(() => {
      alert("Employee is added");
    });
  };

  return (
    <form
      className="createEmployee"
      onSubmit={(e) => {
        submitData(e);
      }}
    >
      <input
        type="text"
        placeholder="Employee Name"
        name="employee_name"
        onChange={handleData}
      />
      <input
        type="text"
        placeholder="Employee id"
        name="employee_id"
        onChange={handleData}
      />
      <select name="title" onChange={handleData}>
        <option value="intern">Intern</option>
        <option value="Jr Software Developer">Jr Software Developer</option>
        <option value="Sr Software Developer">Sr Software Developer</option>
        <option value="Team Lead">Team Lead</option>
      </select>
      <input
        type="number"
        placeholder="Salary"
        name="salary"
        onChange={handleData}
      />
      <input
        type="text"
        placeholder="Image"
        name="image"
        onChange={handleData}
      />
      <input
        type="text"
        placeholder="User Name"
        name="username"
        onChange={handleData}
      />
      <input
        type="password"
        placeholder="Password"
        name="password"
        onChange={handleData}
      />
      <input
        type="text"
        placeholder="Enter tasks separated by commas"
        name="tasks"
        onChange={handleData}
      />
      <select name="status" id="status" onChange={handleData}>
        <option value="">Select Status</option>
        <option value="terminated">Terminated</option>
        <option value="working">Working</option>
      </select>
      <select name="team" id="team" onChange={handleData}>
        <option value="">Select team</option>
        <option value="frontend">Frontend</option>
        <option value="backend">Backend</option>
        <option value="qa">QA</option>
      </select>
      <input className="createUser" type="submit" value={"submit"} />
    </form>
  );
};
