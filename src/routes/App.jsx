import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "@styles/global.css";
import Layout from "@containers/Layout";
import Home from "@pages/Home";
import Login from "@pages/Login";
import RecoveryPassword from "@pages/RecoveryPassword";
import NotFound from "@pages/NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route
            exact
            path="/recovery-password"
            element={<RecoveryPassword />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
