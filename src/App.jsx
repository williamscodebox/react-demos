import React from "react";
import { createContext, useRef } from "react";
import Greet from "./components/Greet";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import Button from "./components/Button";
import CopyInput from "./components/CopyInput";
import Switcher from "./components/Switcher";
import ComponentA from "./components/ComponentA";
import UserProfile from "./components/UserProfile";
import { UserProvider } from "./providers/UserContext";
import UpdateUser from "./components/UpdateUser";
import Counter from "./components/Counter";
import FocusInput from "./components/FocusInput";

// export const Data = createContext();

function App() {
  const name = "JimBobJoe";
  return (
    <div style={{ margin: 5, padding: 10 }}>
      <FocusInput />
      {/* <UserProvider>
        <UserProfile />
        <UpdateUser />
      </UserProvider> */}
      {/* //   <Data.Provider value={name}>
    //     <CopyInput />
    //     <Switcher />
    //     <ComponentA />

    //     {/* <Header />
    //   <MainContent />
    //   <Greet></Greet>
    //   <Button />
    //   <Footer /> 
    //   </Data.Provider>  */}
    </div>
  );
}

export default App;
