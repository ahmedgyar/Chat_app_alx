import { createContext, useCallback, useEffect, useState } from "react";
import { postRequest, baseUrl } from "../utils/services";

export const AuthContext = createContext();

export const AuthcontextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [registerError, setRegisterError] = useState(null);
  const [isRegisterLoading, setIsRegisterLoading] = useState(false);
  const [registerInfo, setRegisterInfo] = useState({
    name: "",
    email: "",
    password: "",
  });



  const [loginError, setLoginError] = useState(null);
  const [isLoginLoading, setIsLoginLoading] = useState(false);
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });

  console.log("User", user);
  console.log("loginInfo", loginInfo);



  // const [loginInfo, setLoginInfo] = useState({
  //   email: "",
  //   password: "",
  // });

  

  useEffect(() => {
    const user = localStorage.getItem("user"); // Use the same key as used when storing
    if (user) {
      setUser(JSON.parse(user));
    }
  }, []);

 

  

  console.log("registerInfo", registerInfo);

  // Updates registration info with new user input
  const updateRegisterInfo = useCallback((info) => {
    setRegisterInfo((prev) => ({ ...prev, ...info }));
  }, []);


  const updateLoginInfo = useCallback((info) => {
    setLoginInfo((prev) => ({ ...prev, ...info }));
  }, []);


  // Registers a new user
  const registerUser = useCallback(
    async (e) => {
      e.preventDefault();

      setIsRegisterLoading(true);
      setRegisterError(null);

      // Make the POST request using the provided `postRequest` utility
      const response = await postRequest(
        `${baseUrl}/users/register`,
        registerInfo
      );

      setIsRegisterLoading(false);

      if (response.error) {
        setRegisterError(response.message); // Store only the message for easier error display
        return;
      }

      // Store user info in local storage and update the user state
      localStorage.setItem("user", JSON.stringify(response));
      setUser(response);
    },
    [registerInfo]
  );

<<<<<<< HEAD

  const loginUser = useCallback(async(e) =>{

    e.preventDefault();

    setIsLoginLoading(true);
    setLoginError(null);


    const response = await postRequest(
      `${baseUrl}/users/login`,
      loginInfo
    );

    if (response.error)
    {
      return setLoginError(response);
    }

    localStorage.setItem("User", JSON.stringify(response));
    setUser(response);
    setIsLoginLoading(false);
   }, [loginInfo]); 


  const logoutUser = useCallback(() => {
    localStorage.removeItem("user");
    setUser(null);
  }, [])
=======
  const logoutUser = useCallback(() => {
    localStorage.removeItem("User");
    setUser(null);
  }, []);
>>>>>>> 6bef62c (log out)

  return (
    <AuthContext.Provider
      value={{
        user,
        registerInfo,
        updateRegisterInfo,
        registerUser,
        registerError,
        isRegisterLoading,
        logoutUser,
        loginError,
        loginUser,
        updateLoginInfo,
        isLoginLoading,
        loginInfo,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
