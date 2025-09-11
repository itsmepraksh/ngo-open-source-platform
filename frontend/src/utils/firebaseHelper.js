import { collection, getDocs } from "firebase/firestore"
import { db } from "../config/firebase"
import { toast } from "react-toastify";

export const renderData = async (setData)=>{
    

    try {
      
      const snapDta = await getDocs(collection(db,"volunteer"));

      const trsData = snapDta.docs.map((dd)=>{
        const data = dd.data()

        return {
            id : dd.id,
            ...data,
        }
      })
        console.log(trsData);
        setData(trsData)
    } catch (err) {
      toast.error(err.message || "something got wrong..")
      console.error("Error in fetching : ",err)
    }
  }