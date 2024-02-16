import { createContext, useState } from "react";

export const AppProvider = createContext();

const AppContext = (props) => {
  const [username, setUsername] = useState("");

  const updateUsername = (value) => {
    setUsername(value);
  };
    return (
      <AppProvider.Provider value={[username, updateUsername]}>
        {props.children}
      </AppProvider.Provider>
    );
};

export default AppContext;
