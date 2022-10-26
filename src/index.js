import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LiffProvider } from "react-liff";

import "./style.css";
import App from "./App";
import SecondPage from "./components/SecondPage.js";
import SeperateBill from "./components/seperatebill/seperateBillPage";
import AddAccountPage from "./components/addacc/addAccountPage.js";
import AddPromptpayPage from "./components/addacc/addPromptpay.js";

const liffId = "1657478303-ZWDEv42q";
const stubEnabled = false;

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <LiffProvider liffId={liffId} stubEnabled={stubEnabled}>
    <BrowserRouter>
      <App />
      <Routes>
        {/* <Route path="/first" element={<FirstPage />} /> */}
        <Route path="/" element={<SecondPage />} />

        {/* <Route path="/" element={<AddMemberPage />} /> */}
        {/* <Route path="/add_member" element={<AddMemberPage />} /> */}

        {/* <Route path="/" element={<SeperateBill />} /> */}
        <Route path="/separate_bill" element={<SeperateBill />} />

        {/* <Route path="/" element={<AddAccountPage />} /> */}
        <Route path="/add_account" element={<AddAccountPage />} />
        <Route path="/add_promptpay" element={<AddPromptpayPage />} />
      </Routes>
    </BrowserRouter>
  </LiffProvider>
);
