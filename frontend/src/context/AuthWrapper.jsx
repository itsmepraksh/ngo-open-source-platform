import { createContext, useContext, useEffect, useState } from "react"
import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../config/firebase";
import { doc, getDoc } from "firebase/firestore";

export const authContext = createContext()

const AuthWrapper = (props) => {

  const [user, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, async (u)=>{

    if(u){

      try {
       const userDoc = await getDoc(doc,(db,"users",u.uid));

       const adminFlag = userDoc.exists() ? userDoc.data().isAdmin === true : false;
        setUser(u)
        setIsAdmin(adminFlag);

      } catch{
        setUser(u)
        isAdmin(false);
      }

    }else{
      setUser(null);
      setIsAdmin(false)
    }
    setLoading(false)
  });

  return ()=> unsubscribe();
  }, [])

  const login = async (email , password )=>{
    try {
      const userCredential = await signInWithEmailAndPassword(auth,email,password);
      const u = userCredential.user;

      const userDoc = await getDoc(doc,db ,"users",u.uid);
      const adminFlag = userDoc.exists() ? userDoc.isAdmin === true : false;
      setUser(u);
      setIsAdmin(adminFlag);

      return {ok:true , isAdmin:adminFlag};
    } catch (err) {
      return {ok:false , error : err.message}
    }
  }

  const logout = async ()=>{

    await signOut(auth)
    setUser(null);
    setIsAdmin(false);
  }
  
 

  return (
    <authContext.Provider value={{user, loading, isAdmin, login, logout}}>
      {props.children}
    </authContext.Provider>
  )
}

export default AuthWrapper;