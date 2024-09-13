import { useState } from "react";
import TableComponent from "./tablecomponents";


export const LoginForm = () => {
  const [FormData, setFormData] = useState({
    userName: "",
    password: "",
    city: "",
  });

  const [submittedData, setSubmittedData] = useState([]);

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(FormData);
    setSubmittedData([...submittedData, FormData]);
    setFormData({ userName: "", password: "", city: "" }); 
  };

  const clickHandler = (event) => {
    const { name, value } = event.target;
    setFormData({ ...FormData, [name]: value });
  };

  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center gap-5"
    >
      <form
        className="p-4 border rounded bg-light"
        onSubmit={onSubmit}
        style={{
          width: "30vw",
        }}
      >
        <div className="form-group" >
          <label htmlFor="userName">UserName:</label>
          <input
            type="text"
            className="form-control"
            id="userName"
            value={FormData.userName}
            onChange={clickHandler}
            name="userName"
          />
        </div><br></br>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={FormData.password}
            onChange={clickHandler}
            name="password"
          />
        </div><br></br>

        <div className="form-group">
          <label htmlFor="city">City:</label>
          <input
            type="text"
            className="form-control"
            id="city"
            value={FormData.city}
            onChange={clickHandler}
            name="city"
          />
        </div><br></br>

        <button type="submit" className="btn btn-default" style={{marginLeft:"40%", border:"1px solid black"}}>
          Submit
        </button>
      </form>

      <div>
        <TableComponent rowData={submittedData} />
      </div>
    </div>
  );
};
