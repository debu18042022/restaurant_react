import React from "react";
import { NavLink,Link, useLocation } from "react-router-dom";

function TableBooked() {
  const x = useLocation();

  return (
    <div className="main_table_receipt_container">
      
      <div className="table_receipt_container">
        <h3 style={{width:"80%",margin:"auto",paddingTop:"1vw"}}>Your Table is Booked Successfully</h3>
        <table className="receipt_table">
            <tr className="tr">
                <td className="td"><h4>Name:</h4></td>
                <td className="td"><h5>{x.state.Name}</h5></td>
            </tr>
            <tr className="tr">
                <td className="td"><h4>No.of Guest:</h4></td>
                <td className="td"><h5>{x.state.guests}</h5></td>
            </tr>
            <tr className="tr">
                <td className="td"><h4>slot date:</h4></td>
                <td className="td"><h5>{x.state.date}</h5></td>
            </tr>
            <tr className="tr">
                <td className="td"><h4>slot time:</h4></td>
                <td className="td"> <h5>{x.state.time}</h5></td>
            </tr>
            <tr className="tr">
                <td className="td"><h4>Email:</h4></td>
                <td className="td"><h5>{x.state.email}</h5></td>
            </tr>
            <tr className="tr">
                <td className="td"><h4>Phone No.:</h4></td>
                <td className="td"><h5>{x.state.phone}</h5></td>
            </tr>
        </table>
        <div className="adjuct_container">
            <div style={{width:"50%"}}>
                <img src="https://i.pinimg.com/736x/1c/73/20/1c73208b6091157fa166d1beb157ebf9.jpg" alt="abc" style={{width:"%"}}></img>
            </div>
            <div className="thank_you" style={{width:"50%",display:"grid",placeItems:"center"}}>
                <Link to="/restaurant" style={{width:"6vw",height:"4vh",textAlign:"center",textDecoration:"none",backgroundColor:"green",color:"black",paddingTop:"5px"}}>OK</Link>
            </div>
        </div>
       
        
      </div>
    </div>
  );
}

export default TableBooked;
