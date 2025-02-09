import { Link } from "react-router-dom";
import Button from "../components/button";
import LabeledInput from "../components/labeledinput";
import { useContext } from "react";
import { DarkModeContext } from "../context/darkmodeContext";

const FormSignUp = () => {
  return (
    <form action="">
      <div className="mb-6">
        <LabeledInput
          label="Name"
          type="text"
          placeholder="John Doe"
          name="name"
        />
      </div>
      <div className="mb-6">
        <LabeledInput
          label="Email Address"
          type="email"
          placeholder="hello@example.com"
          name="email"
        />
      </div>
      <div className="mb-6">
        <LabeledInput
          label="Password"
          type="password"
          placeholder="*************"
          name="password"
        />
      </div>
      <Link to="/">
        <Button variant="bg-primary w-full text-white" type="submit">
          Sign Up
        </Button>
      </Link>  
    </form>
  );
};

export default FormSignUp;
