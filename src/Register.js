import React from 'react'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import {users_data} from './GlobalUser.js';

export default function Register() {
    const [Name,setName] = useState('');
    const [Email,setEmail] = useState('');
    const [Phone_No,setPhone] = useState('');
    const [Password,setPassword] = useState('');
    const [Confirm_Password,setConfirmPassword] = useState('');
    let navigate = useNavigate();
   

    const Get_Name = (event) => {
        setName(event.target.value);
    }
    
    const Get_Email = (event) => {
       setEmail(event.target.value);
    }

    const Get_Phone_No = (event) => {
       setPhone(event.target.value);
    }
    
    const Get_Password = (event) => {
       setPassword(event.target.value);
    }
    
    const Get_Confirm_Password = (event) => {
        setConfirmPassword(event.target.value);
    }
    
    const Sign_Up = () => {
     
      if(Name && Email && Phone_No && Password && Confirm_Password){
        if(Password === Confirm_Password){
          const temp_user = {name:Name,email:Email,p_no:Phone_No,pass:Password,c_pass:Confirm_Password};
          users_data.push(temp_user);
          console.log(users_data);
          // users_data.splice(0, users_data.length);
          navigate('/login');
        }
        else{
          alert("password not match");
        }
      }
    }

    return (
        <div className='signup_main_container'>
          <div className='signup_sub_container'>
            <div style={{padding:"6vw"}}>
            <table className='signup_main_table'>
               <tr>
                 <td>Name</td>
                 <td><input type="text" placeholder='enter Name' onChange={Get_Name}/></td>
               </tr>
              <tr>
                  <td>Email</td>
                  <td><input type="text" placeholder='enter e-mail' onChange={Get_Email}/></td>
              </tr>
              <tr>
                <td>Phone No</td>
                <td><input type="text" placeholder="enter phone number" onChange={Get_Phone_No}></input></td>
              </tr>
              <tr>
                  <td>Password</td>
                  <td><input type="text" placeholder='enter password' onChange={Get_Password}/></td>
              </tr>
              <tr>
                  <td>Confirm Password</td>
                  <td><input type="text" placeholder='enter password' onChange={Get_Confirm_Password}/></td>
              </tr>
           </table>
            </div>
         
           {/* <NavLink to="/login" state={{Name,Email,Phone_No,Password,Confirm_Password}} onClick={Sign_Up}>Register</NavLink> */}
           <button onClick={Sign_Up}>Register</button>
          </div>
        </div>
      )
}
