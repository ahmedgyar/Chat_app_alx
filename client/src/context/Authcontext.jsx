import { createContext, useCallback, useState } from "react";
import { postRequest } from "../utils/services";

export const Authcontext = createContext();

export const AuthcontextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [registerError, setregisterError] = useState(null);
  const [isRegisterLoading, setisRegisterLoading] = useState(false);
  const [registerInfo, setRegisterInfo] = useState({
    name: "",
    email: "",
    password: "",
  });

  console.log("registerInfo", registerInfo);

  const updateRegisterInfo = useCallback((info) => {
    setRegisterInfo(info);
  }, []);

  const registerUser = useCallback(async (e) => {
    e.preventDefault();

    setisRegisterLoading(true);
    setregisterError(null);

    const response = await postRequest(`${baseUrl}/users/register`, JSON.stringify(registerInfo));

    setisRegisterLoading(false);

    if (response.error) {
      return setregisterError(response);
    }

    localStorage.setItem("user", JSON.stringify(response));
    setUser(response);
  }, [registerInfo]);


  return (
    <Authcontext.Provider
      value={{
        user,
        registerInfo,
        updateRegisterInfo,
        registerUser,
        registerError,
        isRegisterLoading,
      }}
    >
      {children}
    </Authcontext.Provider>
  );
};