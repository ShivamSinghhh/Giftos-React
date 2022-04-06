import React from "react";
import { Route, Routes } from "react-router-dom";

import { Cartpage } from "../pages/Cartpage";
import { Contactuspage } from "../pages/Contactuspage";
import { Errorpage } from "../pages/Errorpage";
import { Forgotpage } from "../pages/Forgotpage";
import { Homepage } from "../pages/Homepage";
import { Loginpage } from "../pages/Loginpage";
import { Shoppage } from "../pages/Shoppage";
import { Testinomialpage } from "../pages/Testinomialpage";
import { Whyuspage } from "../pages/Whyuspage";


export default function Myroutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/shop" element={<Shoppage />}></Route>
        <Route path="/whyus" element={<Whyuspage />}></Route>
        <Route path="/testinomial" element={<Testinomialpage />}></Route>
        <Route path="/contact" element={<Contactuspage />}></Route>
        <Route path="/login" element={<Loginpage />}></Route>
        <Route path="/cart" element={<Cartpage />}></Route>
        <Route path="/forgot" element={<Forgotpage />}></Route>
        <Route path="*" element={<Errorpage />}></Route>
      </Routes>
    </div>
  );
}
