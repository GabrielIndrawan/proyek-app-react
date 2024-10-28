import { Link } from "react-router-dom";
import Button from "../components/button";
import LabeledInput from "../components/labeledinput";


const FormForgetPassword = () => {
  return (
    <form action="">
      <div className="mb-6">
        <LabeledInput label="Email Address" placeholder="hello@example.com" name="email" type="email"/>
      </div>
      <Button>
        <div className="text-lg">
          Password Reset
        </div>
      </Button>
      <Link to="/login">
        <div className="block text-gray-500 text-lg font-bold text-center mt-3 mb-2">
          Back to login
        </div>
      </Link>
    </form>
  );
};

export default FormForgetPassword