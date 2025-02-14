import React from 'react'
import './ExploreMenu.css'
import { city_list } from '../../assets/assets'

const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Choose Movie Here</h1>
        <p className='paraExplore-menu'>MoViE M@StI is a one-stop solution for movies to watch this weekend. Find the latest Bollywood, Hollywood, Tollywood and Kollywood movies near you and book tickets online with discounts</p>
        {category}
        <div className='row'>
            {city_list.map((item,index)=>{
                return(
                    <div item={index}
                        className='explore-menu-list-items'>
                            <img className={category===item.city_name? 'active' : ''} onClick={()=>setCategory((p)=>p===item.city_name? 'Everything' :item.city_name)} src={item.city_image} alt='cityimage'/>
                            <p>{item.city_name}</p>
                            </div>
                )

            })}
           
        </div>
        <hr/>
    </div>
  )
}

export default ExploreMenu
