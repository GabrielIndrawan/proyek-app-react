/* eslint-disable react/prop-types */
const Logo = (props) => {
    const {variant = "text-primary text-4xl"} = props;
    return (
      <div className={`flex justify-center my-5 font-poppins tracking-wide animate-bounce ${variant}`}>
        <span className="font-bold ">FINE</span>bank
        <span className="font-bold">.IO</span>
      </div>
    );
  };
  
  export default Logo;