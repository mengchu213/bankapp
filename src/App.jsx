import React from "react";
import styles from "./style";
import {Navbar, Hero, CTA, Footer, Login, Dashboard} from "./components";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import UserContextProvider from "./UserContext";

const App = () => {
  return (
    <UserContextProvider>
      <BrowserRouter>
        <div className="bg-primary w-full overflow-hidden">
          <div className={`${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
              <Navbar />
            </div>
          </div>
          <Routes>
            <Route
              path="/"
              element={
                <>
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
                    </div>
                  </div>
                </>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
          <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
            <div className={`${styles.boxWidth}`}>
              <Footer />
            </div>
          </div>
        </div>
      </BrowserRouter>
    </UserContextProvider>
  );
};

export default App;
