import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {

  // const [name, setName] = useState('');

  const navigate = useNavigate();
  
  // const log = localStorage.getItem("loggedIn");
  // console.log(log);
  
  // if (log !== "yes") {
  //   navigate('/login');
  // } else {
  //   console.log('loggedIn');
  //   const user = JSON.parse(localStorage.getItem('user'));
  //   // console.log(user);
  //   setName(user.uName);
  // }

  
  const user = JSON.parse(localStorage.getItem('user'));
  // console.log(user);
  // setName(user.uName);

  const handleLogout = ()=> {
    localStorage.removeItem('loggedIn');
    navigate('/login');
  };

  return (
    <>
      <div className="box">
        Welcome {user.uName}
      <div className="logout_btn w-100 mt-2">
        <button type="button" onClick={handleLogout} className="btn">logout</button>
      </div>
      </div>
    </>
  );
}

export default Home;
