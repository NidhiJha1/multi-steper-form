import React, { useContext } from "react";
import { Button,TextField,InputLabel } from "@material-ui/core";
import { multiStepContext } from "../../stepContext";

const FirstStep = () => {
  const {setCurrentStep,userData,setUserData} = useContext(multiStepContext);
    return(
       <>
         <div className="form-wrapper">

            <div className="step-wrapper">
                 step1/3
           </div>  

           <div className="input-wrapper">
                <div>
                  <InputLabel htmlFor="component-simple">First Name</InputLabel>
                     <TextField 
                     className="input-box-small"
                     value={userData['firstname']} 
                     onChange={(e) => setUserData({...userData,"firstname":e.target.value})} 
                     margin="normal" 
                     variant="outlined" 
                     color="primary" />
                 </div>
                 <div>
                 <InputLabel htmlFor="component-simple">Last Name</InputLabel>
                   <TextField 
                     className="input-box-small"
                     value={userData['lastname']} 
                     onChange={(e) => setUserData({...userData,"lastname":e.target.value})} 
                     margin="normal"
                     variant="outlined"
                    color="primary" />
                 </div>
             </div>

        <div className="input-wrapper">
          <div>   
          <InputLabel htmlFor="component-simple">Date of Birth</InputLabel>    
          <TextField
                className="input-box-small"
                value={userData['contactNumber']} 
                onChange={(e) => setUserData({...userData,"contactNumber":e.target.value})} 
                margin="normal"
                type="date"
                variant="outlined"
                color="primary" required/>
           </div>
           <div >
           <InputLabel htmlFor="component-simple">Email Address</InputLabel>
                <TextField 
                className="input-box-small" 
                value={userData['email']} 
                onChange={(e) => setUserData({...userData,"email":e.target.value})} 
                margin="normal" 
                type="email"
                variant="outlined" 
                color="primary"
                />
           </div> 
        </div>

      <div className="input-wrapper">
           <div>
           <InputLabel htmlFor="component-simple">Address</InputLabel>
           <TextField 
           className="input-box-large" 
           margin="normal"
           variant="outlined" 
           color="primary"
           value={userData['email']} 
           onChange={(e) => setUserData({...userData,"email":e.target.value})}  /> 
           </div>

      </div>
       <div className="input-wrapper">
           <hr/>
       </div>
       <div className="button-wrapper">
          <Button variant="contained" color="primary" onClick={() => setCurrentStep(2)}>Next Step</Button>
       </div>

     </div>
       </>
    );
};

export default FirstStep;