import IdleTimer from "react-idle-timer";
import { useNavigate } from "react-router-dom";

export const Redirect = () => {
  let navigate = useNavigate();

  const handleOnIdle = (event) => {
    navigate("/");
  };

  const handleOnActive = (event) => {
    // console.log('user is active', event);
  };

  const handleOnAction = (event) => {
    // console.log('user did something', event);
  };

  return (
    <>
      <IdleTimer
        timeout={60000}
        onIdle={handleOnIdle}
        onActive={handleOnActive}
        onAction={handleOnAction}
        debounce={500}
      />
    </>
  );
};
