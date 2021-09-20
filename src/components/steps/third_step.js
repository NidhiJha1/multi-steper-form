import React, { useContext } from "react";
import './third_step.css';
import { Button} from "@material-ui/core";
import { multiStepContext } from "../../stepContext";

const ThirdStep = () => {
    const {setCurrentStep,userData,setUserData} = useContext(multiStepContext);
    return(
        <>
          <div className="form-wrapper">

          <div className="step-wrapper">
                 step3/3
           </div>

           <div>
               <h1>Checkbox</h1>
           </div>
         
             <div className="input-wrapper">
             <div className="wrapper">
                 <input 
                 type="radio" 
                 name="select"
                 id="option-1"
                 value={userData['option-1']} 
                 onChange={(e) => setUserData({...userData,"value1":e.target.value})}
                 checked/>
                
                 <input 
                 type="radio" 
                 name="select" 
                 id="option-2"
                 value={userData['option-2']} 
                 onChange={(e) => setUserData({...userData,"value2":e.target.value})}
                 />
                 <label htmlFor="option-1" className="option option-1">
                 <div className="dot"></div>
                 <span>Option1</span>
                 </label>
                 <label htmlFor="option-2" className="option option-2">
                 <div className="dot"></div>
                 <span>Option2</span>
                </label>
                </div>
             </div>
            
          
             <div className="input-wrapper">
                 <ul className="unstyled">
                   <li>
                    <input 
                    className="styled-checkbox"
                     id="styled-checkbox-1"
                     type="checkbox" 
                    //  value="value1" 
                     value={userData['value1']} 
                     onChange={(e) => setUserData({...userData,"value1":e.target.value})}
                     checked/>
                    <label htmlFor="styled-checkbox-1">I want to add this option.</label>
                   </li>
                   <li>
                    <input 
                    className="styled-checkbox"
                     id="styled-checkbox-2"
                     type="checkbox" 
                    //  value="value2"
                     value={userData['value2']} 
                     onChange={(e) => setUserData({...userData,"value2":e.target.value})}/>
                    <label htmlFor="styled-checkbox-2">Let me click on this checkbox and choose some cool stuf.</label>
                   </li>
                 </ul>
             </div>
            
             <div className="button-wrapper">
             <Button variant="contained" onClick={() => setCurrentStep(2)}>Back</Button>
             <Button variant="contained" color="primary">Submit</Button>
             </div>
         </div>
        </>
    );
};

export default ThirdStep;