import {React} from "react";



   
    const Current = ({current, location}) => {

        return(
        
        <div className="container mt-5">
        
        <h4 className="text-white text-center">Current weather of {location.name}, {location.region}</h4>
        
        <div className="row">
        
        {/* Col-1 */}
        
        <div className="col-3">
        
        <div class="card" >
        
        <img src={currentWeather.condition.text} class="card-img-top" alt="..."/>
        
        <div class="card-body">
        
        <h5 class="card-title"> {current.condition.text}</h5> 
        </div>
     </div>
 </div>
        
        

{/* Col-2 */}
<div className="col-3">

<div class="card">

<div class="card-body">

<h5 class="card-title">


{current.temp_c}

</h5>

</div>

</div>

</div>





{/* column 3 */}

<div className="col-3">

<div class="card">

<div class="card-body">

<h5 class="card-title">

{""}

{current.temp_f}

</h5>

</div>

</div>

</div>





{/* column 4*/}
<div className="col-3">

<div class="card">

<div class="card-body">

<h5 class="card-title">

{""}

{current.humidity}

</h5>

</div>

</div>

</div>




   </div>

</div>

        )   
    


    }

export default Current;