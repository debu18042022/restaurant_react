import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import {users_data} from './GlobalUser.js';
import { useNavigate } from 'react-router-dom';
export default function Login(props) {

    
    let navigate = useNavigate();
    const [login_email,setLogin_email] = useState("");
    const [login_password,setlogin_password] = useState("");

    console.log(users_data);

    const get_login_Email = (event) => {
        setLogin_email(event.target.value);
       console.log(setLogin_email)
    }
    const get_login_Password = (event) =>{
        setlogin_password(event.target.value)
        console.log(setlogin_password);
    }
    
    const Login_User = (event) => {
        
        if(login_email && login_password){
         
           users_data.map((item) => { 
             
            if(item.email === login_email){
           
                if(item.pass === login_password){
                   
                    navigate('/restaurant')
                }
            }
            else{
              
                navigate('');
            }
           })
        }
        else{
            alert("some fields are empty");
        }
    }
    

    return (
        <div className='signup_main_container'>
          <div className='signup_sub_container'>
          <table className='signup_main_table'>
              <tr>
                  <td>Email</td>
                  <td><input type="text" placeholder='enter e-mail' onChange={get_login_Email}/></td>
              </tr>
              <tr>
                  <td>Password</td>
                  <td><input type="text" placeholder='enter password' onChange={ get_login_Password}/></td>
              </tr>
           </table>
           <button onClick={Login_User}>Login</button>
          </div>
        </div>
      )
}
