import { createContext, useState } from "react";

export const adminContext = createContext(null);

const Wrapper = (props) => {
  const [loginStatus, setLoginStatus] = useState(false);
  return (
    <adminContext.Provider value={[loginStatus,setLoginStatus]}>
      {props.children}
    </adminContext.Provider>
  );
};

export default Wrapper;
