import Button from "../components/button"
import Checkbox from "../components/checkbox"
import LabeledInput from "../components/labeledInput"

const FormSignIn = () =>
  {
    return (
    <div className="mt-16">
          <form action="">
            <div className="mb-6">
              <LabeledInput type="email" name="email" label ="email" placeholder="hello@example.com"/>
            </div>
            <div className="mb-6">
              <LabeledInput type="password" name="password" label="password" placeholder="hello@example.com"/>
            </div>
            <div className="mb-3">
              <Checkbox label="Keep me signed In"/>
            </div>
            <Button>Login</Button>
          </form>
    </div>
    );
  };

export default FormSignIn;