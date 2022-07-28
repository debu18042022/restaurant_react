import React, { useState } from 'react'
// import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import "./Test.json"
const data = require("./Test.json")
export default function Restaurant() {
    let restaurant = data.restaurants;
    // console.log(restaurant);
    const [searchRestaurant,setSearchRestaurant] = useState('');

    const get_search_Value = (event) => {
      setSearchRestaurant(event.target.value);
    }

    const set_click_restaurant = (searchItem) => {
      setSearchRestaurant(searchItem);
    }

  return (
    <div>
        <nav>
               <div className='navbar_logo_container' style={{dislay:"inline-block"}}><img className="apni_rasoi" src="apni_rasoi2.jpeg" alt=""></img></div>
               <div className='navbar_item_container'>
                    <div><button>Home</button></div>
                    <div><button>About Us</button></div>
                    {/* <div><button></button></div> */}
               </div>
        </nav>

       <div className='set_main_background_color'> 
           <div className='set_div_image'>
                <div>
                    <input className="set_input_width_height_input" type="search"  placeholder="Search by Name/Neighbourhood/Cuisine" value={searchRestaurant} onChange={get_search_Value}/>
                </div>
                <div style={{backgroundColor:"white",color:"grey",position:"absolute",marginTop:"15rem"}}>
                  {
                    restaurant.filter(item => {
                      const searchItem = searchRestaurant.toLowerCase();
                      const name = item.name.toLocaleLowerCase();
                      const neighbour = item.neighborhood.toLocaleLowerCase();
                      const cuisine = item.cuisine_type.toLocaleLowerCase();
                      return searchItem && (name.startsWith(searchItem) || neighbour.startsWith(searchItem) || cuisine.startsWith(searchItem)) && searchItem !== name;
                    }).map(item => (
                      // <div style={{marginTop:""}}onClick = {() => set_click_restaurant(item.name)}>{item.name}</div>

                      <NavLink to="/SinglePage" state={{rest_name:item.name}} onClick= {() => set_click_restaurant(item.name)} style={{display:"block"}}>{item.name}</NavLink>
                    ))
                }
               </div>

           </div>
           <h2 style={{margin:"10px"}}>Restaurants Near You</h2>
            <div className='flex_container'>
              {
                restaurant.map((item) => (
                    <>  
                        <div className='flex_item'>
                            <img src={item.photograph} alt="" />
                            <div className='details'>
                                <h4>{item.name}</h4>
                                <p>{item.address}</p>
                                <p>₹ 1,000 for 2 (approx) | {item.cuisine_type}</p>
                            </div>
                        </div>
                    </>
                ))
              }
            </div>
       </div>
    </div>
  )
}
