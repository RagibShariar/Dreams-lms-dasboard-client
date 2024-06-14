import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { app } from "../firebase/firebase.config";
import useAxiosPublic from "../hooks/useAxiosPublic";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const axiosPublic = useAxiosPublic();

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logOut = () => {
    setLoading(true);
    return signOut(auth).then(() => setUser(null));
  };
  const updateUserProfile = (name) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
    });
  };

  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
  //     setUser(currentUser);

  //     if (currentUser) {
  //       const userInfo = { email: currentUser.email };
  //       axiosPublic.post("/jwt", userInfo).then((res) => {
  //         if (res.data.token) {
  //           localStorage.setItem("access-token", res.data.token);
  //           }
  //           });
  //         setLoading(false);
  //     } else {
  //       console.log("user Signed out");
  //       setLoading(false);
  //       localStorage.removeItem("access-token");
  //     }
  //   });
  //   return () => unsubscribe();
  // }, [axiosPublic]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
        setUser(currentUser);
        if (currentUser) {
            // get token and store client
            const userInfo = { email: currentUser.email };
            axiosPublic.post('/jwt', userInfo)
              .then(res => {
                  // console.log(res.data.token)
                    if (res.data.token) {
                        localStorage.setItem('access_token', res.data.token);
                    }
                })
        }
        else {
            // TODO: remove token (if token stored in the client side: Local storage, caching, in memory)
            localStorage.removeItem('access_token');
        }
        setLoading(false);
    });
    return () => {
        return unsubscribe();
    }
}, [axiosPublic])

  const authInfo = {
    user,
    loading,
    createUser,
    login,
    logOut,
    updateUserProfile,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};
export default AuthProvider;
