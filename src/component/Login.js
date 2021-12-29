import { useState, useEffect } from "react";
import axios from 'axios'
import { withRouter } from "react-router";


const Login = (props) => {

  const { history, log } = props

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState()
  const [error, setError] = useState(false)

  useEffect(() => {
    axios.get('http://localhost:8080/users')
    .then(function (response) {
      setUsers(response.data)
    })
  }, [])

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    users.forEach(user => {
      if(user.email===email && user.password===password){
        login(user)       
      }else{
        setEmail("")
        setPassword("")
        setError(!error)
      }
    });
  };

  const login = (user)=>{
    log(user)
    return history.push("/home");
  }


  
  return (
    <div>


    
            <div className="form-group container">
                <div>
                    <h2 className="title">Login</h2>
                    {error&& <h5 className="text-danger">Make sure the creditionals are correct</h5>}
                </div>
                <form className="form-wrapper">
                    <div className="email">
                        {error?  <label className="label text-danger" >email</label> :  <label className="label" >email</label>}
                        <input className="input form-control" placeholder="Enter email" type="text" name="email" value={email} onChange={handleChangeEmail}/>  
                    </div>
                    <div className="password">
                    {error?  <label className="label text-danger" >password</label> :  <label className="label" >password</label>}
                        <input className="input form-control" placeholder="Enter Password" type="password" name="password" value={password} onChange={handleChangePassword}/>
                    </div>
                    <div>
                        <button className="btn btn-success submit" onClick={handleSubmit}> Login </button>
                        
                    </div>
                </form>
            </div>
        


    </div>
  );
}

export default withRouter(Login);

