import { useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { MdColorLens, MdOutlineAttachEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

function SignUp() {

    const navigate = useNavigate();
    
    const [register, setRegister] = useState({uName:"", 
        eMail:"", password:""});

    const handleChange = (e)=>{
        setRegister({...register, [e.target.name]:e.target.value})
    };

    const handleSubmit = (e)=>{
        e.preventDefault();
        localStorage.setItem("user", JSON.stringify(register));
        navigate('/login');
    };

  return (
    <>
      <div className="box">
        <div className="heading_box">
              <h1> Sign Up </h1>
          </div>

          <form onSubmit={handleSubmit}>
              <div className="input_container">
                  <label className="icon" htmlFor='username'>
                      <FaRegUser />
                  </label>
                  <input name="uName" value={register.uName} onChange={handleChange} className="input" type="text" id="username" placeholder='Enter Username here' />
              </div>

              <div className="input_container">
                  <label className="icon" htmlFor='email'>
                      <MdOutlineAttachEmail />
                  </label>
                  <input name="eMail" value={register.eMail} onChange={handleChange}  className="input" type="email" id="email" placeholder='Enter E-Mail here' />
              </div>

              <div className="input_container">
                  <label className="icon" htmlFor='password'>
                      <RiLockPasswordFill />
                  </label>
                  <input name="password" value={register.password} onChange={handleChange}  className="input" type="password" id="password" placeholder='Enter Password here' />
              </div>

              <div className="submit_container">
                      <button type="submit" className={'btn'} >Sign Up</button>
              </div>
          </form>
      </div>
    </>
  );
}
;
export default SignUp;
