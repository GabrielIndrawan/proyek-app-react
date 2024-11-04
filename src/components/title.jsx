/* eslint-disable react/prop-types */
const Title = (props) => {
    const { htmlFor, children } = props;
  
    return (
        <div className="flex items-center justify-center h-16">
            <label
              htmlFor={htmlFor}
              className="block text-slate-800 text-2xl font-bold pb-0"
            >
              {children}
            </label>
        </div> 
    );
  };
  
  export default Title;