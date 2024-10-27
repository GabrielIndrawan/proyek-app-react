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
      <div className="block text-gray-500 text-lg font-bold text-center mt-3 mb-2">
        Back to login
      </div>
    </form>
  );
};

export default FormForgetPassword