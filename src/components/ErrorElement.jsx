import { useRouteError } from "react-router-dom";

const ErrorElement = () => {
  const errorInfo = useRouteError();
  console.log(errorInfo);
  return <div className="font-bold text-4xl">There was an error...</div>;
};

export default ErrorElement;
