import { createContext, useState } from "react" 
import {onAuthStateChanged, signInWithEmailAndPassword, signOut} from "firebase/auth"
import {auth, db} from "../config/firebase"
import { doc, getDoc } from "firebase/firestore"
import { toast } from "react-toastify"

export const authContext = createContext()

const AuthWrapper = (props) => {

  const [curuser, setCurUser] = useState(null); 
  const [loading, setLoading] = useState(true);



  const unsubscribe = onAuthStateChanged(auth, async (user)=>{
    if(!user) {
      setCurUser(user);
      setLoading(false)
      return;
    }

    // try {
    //   const adminDta = await getDoc(doc(db,"admin_data",user.uid))
    //   const data = adminDta.exists() ? adminDta.data()  : null;
      
      
    // } catch (err) {
    //   await signOut(user)
    //   setCurUser(user)
    //   console.error(err)
    //   toast.err("unauthorized access")
    // }
  });

  const loginFnc =  async (email,password)=>{

    console.log(email,password)

    const {user} = await signInWithEmailAndPassword(auth , email , password)
    console.log(user)

    const checkDbExits = doc(db,"admin_data",user.uid);
    const checkDocExits = await getDoc(checkDbExits);

    if(!checkDocExits.exists()){
      await signOut(auth);
      throw new Error("No user data found!")
    }

    const adminDta = checkDocExits.data();
    const role = adminDta.role;

    if(role !== "admin"){
      await signOut(auth);
      throw new Error("unauthorized access")
    }

    return user;

  }

  const logoutFnc = async ()=>{
    await signOut(auth)
  }
 

  return (
    <authContext.Provider value={{loginFnc, logoutFnc}}>
      {props.children}
    </authContext.Provider>
  )
}

export default AuthWrapper;