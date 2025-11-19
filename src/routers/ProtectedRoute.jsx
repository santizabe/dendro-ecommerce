import  { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import useAuth from "../custom-hooks/useAuth";
import { useDispatch } from "react-redux";
import { setAdmin } from "../redux/slices/adminSlice";
import { doc, getDoc } from 'firebase/firestore';
import { db } from "../firebase.config";
import LoadingPortal from "../components/Modals/LoadingPortal";

const ProtectedRoute = () => {
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const userInfo = useAuth();
  const dispatch = useDispatch();

  useEffect(() => {
    const checkAdmin = async (userId) => {
      console.log("checking admin..");
      const docRef = doc(db, 'administradores', userId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        dispatch(setAdmin(true));
        setIsAdmin(true);
        setLoading(false);
      }
      else {
        setLoading(false);
      }
    }
    if (userInfo !== null) {
      checkAdmin(userInfo.uid);
    }
  }, [userInfo]);

  return loading ? <LoadingPortal/> : isAdmin ? <Outlet /> : <Navigate to="/inicio"/>
};

export default ProtectedRoute;
