import React ,{useState} from 'react'
import {FaStar} from 'react-icons/fa'
function StarSearch({Hover, setHover}) {
    const [rating, setRating] = useState(null)

    return (
        <div>
            
            {[...Array(5)].map((star,i) =>{
                const ratingValue= i + 1 ;
                return <label>
                <input  
                className="inputStar"
                 type="radio" 
                 name="rating"
                 value={ratingValue}
                 
                  />
                 <FaStar className="star" 
                  size={50} 
                 onMouseEnter = {()=> setHover(ratingValue)}
                 onMouseLeave= {()=> setHover(null)}
                 color={ratingValue <= (Hover ||rating) ? "#ffc107" :"#e4e5e9"}

                 /> </label>})}
           
       </div>
    )
}

export default StarSearch;
