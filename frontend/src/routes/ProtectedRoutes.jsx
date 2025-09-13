import { useContext } from "react";



const ProtectedRoutes = (props) => {

  const {currentUser} = useContext()
    

  return props.children;
}

export default ProtectedRoutes