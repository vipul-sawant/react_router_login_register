import { useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate();
    
    const [login, setLogin] = useState({uName:"", password:""});

    const handleChange = (e)=>{
        setLogin({...login, [e.target.name]:e.target.value})
    };

    const handleLogin = (e)=>{
        e.preventDefault();
        const loggedUser = JSON.parse(localStorage.getItem("user"));

        if (login.uName === loggedUser.uName && login.password === loggedUser.password) {          
          navigate('/');
          localStorage.setItem('loggedIn', true);
        } else {
          alert('Username or password is incorrect');
        }
    };

  return (
    <>
      <div className="box">
        <div className="heading_box">
              <h1> Login </h1>
          </div>

          <form onSubmit={handleLogin}>
              <div className="input_container">
                  <label className="icon" htmlFor='username'>
                      <FaRegUser />
                  </label>
                  <input onChange={handleChange} value={login.uName} name="uName" className="input" type="text" id="username" placeholder='Enter Username here' />
              </div>

              <div className="input_container">
                  <label className="icon" htmlFor='password'>
                      <RiLockPasswordFill />
                  </label>
                  <input onChange={handleChange} value={login.password} name="password" className="input" type="password" id="password" placeholder='Enter Password here' />
              </div>

              <div className="forgot_password">
                    <a href="#" style={{textDecoration:"none"}}>forgot password?</a>
                </div>

              <div className="submit_container">
                      <button type="submit" className={'btn'} >Sign Up</button>
              </div>
          </form>
      </div>
    </>
  );
}

export default Login;
