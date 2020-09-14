import React ,{useState} from 'react'
import {FaStar} from 'react-icons/fa'
function Star({note}) {
    const [rating, setRating] = useState(note)
    

    return (
        <div>
            
            {[...Array(5)].map((star,i) =>{
                const ratingValue= i + 1 ;
                return <label>
                <input  
                className="inputStar"
                 type="radio" 
                 name="rating"
                 onClick= {()=> setRating(ratingValue)}
                  />
                 <FaStar className="star" color={ratingValue <= (rating) ? "#ffc107" :"#e4e5e9"}
                /> </label>})}
           
       </div>
    )
}

export default Star;
