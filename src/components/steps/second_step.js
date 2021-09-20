import React, { useContext } from "react";
import { Button,TextField,InputLabel } from "@material-ui/core";
import { multiStepContext } from "../../stepContext";
import './third_step.css';


const SecondStep = () => {

    const {setCurrentStep,userData,setUserData} = useContext(multiStepContext);
    return(
        <>
         <div className="form-wrapper">

           <div className="step-wrapper">
                 step2/3
           </div> 

           <div>
               <h1>Message</h1><br/>
           </div>

           <div className="input-wrapper">
           <  div>
              <InputLabel htmlFor="component-simple">Message</InputLabel>  <br/>  
              <TextField
               id="outlined-multiline-static"
               multiline
               rows={6}
               className="input-box-large"
               variant="outlined"
               placeholder="please enter message"
               value={userData['message']} 
               onChange={(e) => setUserData({...userData,"message":e.target.value})}
               />
             </div> 
            </div>
            <div className="input-wrapper-checkbox">

                <div>
                    <input 
                    className="styled-checkbox"
                     id="styled-checkbox-1" 
                     type="checkbox" 
                    //  value="value1" 
                     value={userData['value1']} 
                     onChange={(e) => setUserData({...userData,"value1":e.target.value})}
                     checked/>
                    <label htmlFor="styled-checkbox-1">the number one choice</label>
                </div>
                <div>
                    <input 
                    className="styled-checkbox"
                     id="styled-checkbox-2"
                     type="checkbox" 
                    //  value="value2"
                     value={userData['value2']} 
                     onChange={(e) => setUserData({...userData,"value2":e.target.value})}/>
                    <label htmlFor="styled-checkbox-2">The number two choice</label>
                </div>

            </div>
             <div className="button-wrapper">
             <Button className="cancel-button" variant="contained" onClick={() => setCurrentStep(1)}>Back</Button>
             <Button variant="contained" color="primary" onClick={() => setCurrentStep(3)}>Next Step</Button>
             </div>
            
       
         </div>
        </>
    );
};

export default SecondStep;
