import React, {useState, useEffect} from "react";
import styles from "./style";
import {Navbar, Hero, CTA, Footer, Login, Dashboard} from "./components";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {UserContext} from "./UserContext";
import User from "./models/User";

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userEmail = localStorage.getItem("userEmail");
    const authToken = localStorage.getItem("authToken");

    if (userEmail && authToken) {
      setUser(
        new User(
          userEmail,
          "password123", // This is just an example, you can use a more secure way to store passwords
          "John Doe",
          1000
        )
      );
    }
  }, []);

  return (
    <UserContext.Provider value={{user, setUser}}>
      <BrowserRouter>
        <div className="bg-primary w-full overflow-hidden">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                    <div className={`${styles.boxWidth}`}>
                      <Navbar />
                    </div>
                  </div>

                  <div className={`bg-primary ${styles.flexStart}`}>
                    <div className={`${styles.boxWidth}`}>
                      <Hero />
                    </div>
                  </div>

                  <div
                    className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}
                  >
                    <div className={`${styles.boxWidth}`}>
                      <CTA />
                      <Footer />
                    </div>
                  </div>
                </>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </div>
      </BrowserRouter>
    </UserContext.Provider>
  );
};

export default App;
