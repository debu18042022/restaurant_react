import React from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import _ from "lodash";
import "./Test.json";
const data = require("./Test.json");
export default function SinglePage() {
  const restaurant = data.restaurants;
  const x = useLocation();
  const [find_restaurant, setfind_restaurant] = useState(x.state.rest_name);
  console.log(find_restaurant);

const addClass  = () => {
  // alert()
  let x = document.getElementById('new_hour');
  if(x.className === "hours")
     x.className += "hr"
}

const removeClass  = () => {
  // alert()
  let x = document.getElementById('new_hour');
     x.className = "hours"
}

  return (
    <div className="single_page_main_container">
      {restaurant.map((item) => (
        <>
          {item.name === find_restaurant ? (
            <>
              <div className="single_page_image_container">
                <img src={item.photograph} alt="abc"></img>
              </div>
              <div className="single_page_content">
                <div className="sub_single_page_content">
                  <h2>{item.name}</h2>
                  <p>{item.address}</p>
                  <p>₹ 1,000 for 2 (approx) | {item.cuisine_type} </p>
                  <p>Time: Open from 11:00 am to 12:00 pm
                    <h4 id='timer_hours' onPointerEnter={addClass} onPointerLeave={removeClass}>show whole Schedule</h4>
                  </p>
                  <div className="hours" id="new_hour" style={{backgroundColor:"black",color:"white"}}>
                  {
                   Object.keys(item.operating_hours).map(function(key, index) {
                     
                  return <p>{key} : {item.operating_hours[key]}</p>
                  })
                  }
                  </div>
                </div>

                <div style={{ marginTop: "15px" }}>
                  <button
                    style={{
                      width: "3rem",
                      height: "4rem",
                      backgroundColor: "green",
                    }}
                  >
                    4.1
                  </button>
                  <div
                    style={{
                      fontFamily: "cursive",
                      fontSize: "small",
                      marginTop: "5px",
                      marginRight: "15px",
                    }}
                  >
                    112 reviews
                  </div>
                  <hr style={{ marginRight: "15px" }}></hr>
                </div>
              </div>
              <div className="ApnaRasoiOffer">
                <h3
                  style={{
                    marginRight: "10%",
                    display: "inline-block",
                    fontFamily: "cursive",
                  }}
                >
                  ApniRasoi Pay
                </h3>
                <div style={{ display: "inline-block", fontFamily: "cursive" }}>
                  Combine any offer with ApnaRasoi Pay to save up to 10% more on
                  your bill
                </div>
              </div>

              <div className="menu_main_container">
                <div style={{ paddingBottom: "10px" }}>
                  <h3>Menu</h3>
                </div>
                <div className="menu">
                  <div className="menuItem" style={{ marginRight: "1%" }}>
                    <img
                      src="https://im1.dineout.co.in/images/uploads/restaurant/sharpen/1/t/d/m19748-16474290226231c59e4fe50.jpg?tr=tr:n-xlarge"
                      alt="abc"
                    ></img>
                    <div
                      style={{
                        textAlign: "center",
                        backgroundColor: "black",
                        color: "white",
                      }}
                    >
                      Food Menu (14)
                    </div>
                  </div>
                  <div className="menuItem" style={{ marginLeft: "1%" }}>
                    <img
                      src="https://im1.dineout.co.in/images/uploads/restaurant/sharpen/1/v/q/m19748-164270517661e9b11819895.jpg?tr=tr:n-xlarge"
                      alt="abc"
                    ></img>
                    <div
                      style={{
                        textAlign: "center",
                        backgroundColor: "black",
                        color: "white",
                      }}
                    >
                      Bar Menu (19)
                    </div>
                  </div>
                </div>
              </div>

              <div className="single_page_reviews">
                {
                  item.reviews.map((i) => (
                   
                    <>
                     <span style={{ marginRight: "10px" }}>
                  <i
                    class="fa-solid fa-circle-user"
                    style={{ fontSize: "2rem", color: "grey" }}
                  ></i>
                </span>
                <span style={{ marginRight: "10px", fontWeight: "bold" }}>
                 {i.name}
                </span>
                <div style={{ fontSize: "small" }}>{i.date}</div>
                <div>
                {_.times(i.rating, (i) => (
               <i
               className="icons_star"
               class="fa-solid fa-star"
               style={{ color: "green" }}
             ></i>
                 ))}
                
                </div>
                <div style={{ fontWeight: "lighter", fontSize: "small" }}>
                  {i.comments}
                </div>
                    </>

                  ))
                }
               
              </div>
            </>
          ) : (
            <></>
          )}
        </>
      ))}
    </div>
  );
}
