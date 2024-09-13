
import { useState } from "react";
import { LoginForm } from "./logins";

export const FormData = () => {
  const [isForm, setIsForm] = useState(false);

  const formHandler = () => {
    setIsForm((prevState) => !prevState);
  };

  return (
    
    <div>
      <button onClick={formHandler} style={{ backgroundColor: "green" }}>
        Add +
      </button>

      {isForm && <LoginForm />}
    </div>
  );
};
