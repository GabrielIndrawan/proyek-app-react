/* eslint-disable react/prop-types */

const Button = (props) => {
    const { children, variant = "bg-primary w-full text-white" } = props;
  
    return (
      <button className={`h-12 rounded-md text-sm ${variant}`} type="submit">
        {children}
      </button>
    );
  };
  
  export default Button;