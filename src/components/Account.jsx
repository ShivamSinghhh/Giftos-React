import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Usercontext } from "../context/Usercontext";
import { Forgotpage } from "../pages/Forgotpage";



export function Account() {

  const {setData} = useContext(Usercontext)
 
  let navigate = useNavigate();
  const [flag, setFlag] = useState(false);

  const login = () => {   
    setFlag(true);
  };
  const registration = () => {   
    setFlag(false);
  };

  const [form, setForm] = useState({
    username: "",
    password: "",
    email: "",
  });

  const handleChange = ({ target }) => {
    const {name, value} = target;
    setForm({ ...form, [name]: value });    
  };
   

  const createUser = (event) => {
    event.preventDefault();
    console.log("account form =",form)

    //-------get userData collection from localStorage or set it---------//
    let userDetails = JSON.parse(localStorage.getItem("userData")) || [];

    //----------check for empty values-------//
    if (
      form.username.length < 1 ||
      form.email.length < 1 ||
      form.password.length < 1
    ) {
      window.alert("Input invalid");
      // setForm({
      //   username:"",
      //   email:"",
      //   password:""
      // })
      form.username = "";
      form.email = "";
      form.password = "";
      let RegForm = document.getElementById("RegForm");
      RegForm.user1.value = "";
      RegForm.email1.value = "";
      RegForm.pass1.value = "";
      return;
    }

    //------- check if user already exist---------//
    let flag = false;
    userDetails.forEach(function check(ele) {
      if (ele.email === form.email) {
        flag = true;
        window.alert("This Email is already resgistered with us!");
        form.username = "";
        form.email = "";
        form.password = "";
        let RegForm = document.getElementById("RegForm");
        RegForm.user1.value = "";
        RegForm.email1.value = "";
        RegForm.pass1.value = "";
        return;
      }
    });
    if (flag) {
      return;
    }

    if (form.password.length < 8) {
      window.alert("Password should be more than 8 characters.");
      form.username = "";
      form.email = "";
      form.password = "";
      let RegForm = document.getElementById("RegForm");
      RegForm.user1.value = "";
      RegForm.email1.value = "";
      RegForm.pass1.value = "";
      return;
    }

    //------if above case passed -- push new user to the userData array in localStorage----//

    userDetails.push(form); // added a new user

    localStorage.setItem("userData", JSON.stringify(userDetails));
   

    window.alert(`Welcome to GIFTOS !
     Please login with your credential.`);
    login();

    // console.log("form data =", form);

    //------setting all value to empty again in the form---------//
    form.username = "";
    form.email = "";
    form.password = "";
    let RegForm = document.getElementById("RegForm");
    RegForm.user1.value = "";
    RegForm.email1.value = "";
    RegForm.pass1.value = "";
  };

  //---------------signIn function-----------------//

  const signIn = (event) => {
    event.preventDefault();
    // console.log("form Login =", form);

    //-------get userData collection from localStorage or set it---------//
    let userDetails = JSON.parse(localStorage.getItem("userData"));
    if(!userDetails) {
      window.alert("Register yourself");
      form.email = "";
      form.password = "";
      let RegForm = document.getElementById("LoginForm");
      RegForm.email2.value = "";
      RegForm.pass2.value = "";
      registration();
      return;
    }

    //----------check for empty values-------//
    if (form.email.length < 1 || form.password.length < 1) {
      window.alert("Input invalid");
      form.email = "";
      form.password = "";
      let RegForm = document.getElementById("LoginForm");
      RegForm.email2.value = "";
      RegForm.pass2.value = "";
      return;
    }

    let flag = true;
    let flagError = false;
    userDetails.forEach(function check(ele) {
      if (ele.email === form.email) {
        if (ele.password === form.password) {
          flag = false;
          localStorage.setItem("currentUser", JSON.stringify(ele));
           setData(ele)
          // console.log("user details =",ele)        
          window.alert("logged in successfully");      
          navigate(-1);
          return;
        }
        window.alert("Credential Error!");
        flagError = true;
        form.email = "";
        form.password = "";
        let RegForm = document.getElementById("LoginForm");
        RegForm.email2.value = "";
        RegForm.pass2.value = "";
        return;
      }
    });
    if (flagError) {
      return;
    }
    //----if user doesn't exist in our database------//
    if (flag) {
      window.alert("Register yourself");
      form.email = "";
      form.password = "";
      let RegForm = document.getElementById("LoginForm");
      RegForm.email2.value = "";
      RegForm.pass2.value = "";
      registration();
    }
  };

  return (
    <>
      <div className="account-page">
        <div className="container">
          <div className="row">
            <div className="col-2">
              <img src="images/slider-img.png" alt="slider-img" width="50%" />
            </div>
            <div className="col-2">
              <div className="form-container">
                <div className="form-btn">
                  <span onClick={login}>Login</span>
                  <span onClick={registration}>Register</span>
                  <hr
                    style={
                      flag
                        ? { transform: "translateX(0px)" }
                        : { transform: "translateX(100px)" }
                    }
                    id="Indicator"
                  />
                </div>

                <form
                  onSubmit={signIn}
                  style={
                    flag
                      ? { transform: "translateX(300px)" }
                      : { transform: "translateX(0px)" }
                  }
                  id="LoginForm"
                >
                  <input
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    id="email2"
                    type="email"
                    placeholder="Email"
                  />
                  <input
                    name="password"
                    onChange={handleChange}
                    id="pass2"
                    type="password"
                    placeholder="Password"
                  />

                  <button id="btn2" type="submit" className="btn">
                    Login
                  </button>
                  <Link to="/forgot" element={<Forgotpage />}>
                    Forgot Password
                  </Link>
                </form>

                <form
                  onSubmit={createUser}
                  style={
                    flag
                      ? { transform: "translateX(300px)" }
                      : { transform: "translateX(0px)" }
                  }
                  id="RegForm"
                >
                  <input
                    onChange={handleChange}
                    name="username"
                    id="user1"
                    type="text"
                    placeholder="Username"
                  />
                  <input
                    onChange={handleChange}
                    name="email"
                    id="email1"
                    type="email"
                    placeholder="Email"
                  />
                  <input
                    onChange={handleChange}
                    name="password"
                    id="pass1"
                    type="password"
                    placeholder="Password"
                  />
                  <button id="btn1" type="submit" className="btn">
                    Register
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


