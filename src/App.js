// import { useState } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import "./App.css";

function App() {
  const { register, handleSubmit } = useForm();
  const [userInfo, setUserInfo] = useState();
  const onSubmit = (data) => {
    setUserInfo(data);
    console.log(data);
  };

  return (
    <div className="container">
      <pre>{JSON.stringify(userInfo, undefined, 2)}</pre>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Registration Form</h1>
        <div className="ui divider"></div>
        <div className="ui form">
          <div className="field">
            <label>Username</label>
            <input type="text" name="username" placeholder="username"
            {...register('name', { required: true })}
            />
          </div>
          <div className="field">
            <label>email</label>
            <input type="email" name="email" placeholder="Email"
            {...register('email', { required: true })} />
          </div>
          <div className="field">
            <label>Phone number</label>
            <input type="number" name="number" placeholder="phone number" 
            {...register('number', { required: true })}/>
          </div>
          <div className="field">
            <label>Birthday</label>
            <input type="date" name="birthday" placeholder="phone DOB" 
            {...register('date', { required: true })}/>
          </div>
          <button className="btn-grad">submit</button>
        </div>
      </form>
    </div>
  );
}

export default App;
