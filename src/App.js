import './App.css';
import image from './image.jpg';
import { Box,Stepper,StepLabel,Step } from '@material-ui/core';
import { multiStepContext } from './stepContext';
import FirstStep from './components/steps/first_step';
import SecondStep from './components/steps/second_step';
import ThirdStep from './components/steps/third_step';
import { useContext } from 'react';

function App() {

  const {currentStep} = useContext(multiStepContext);

 function showStep(step){
   switch(step){
     case 1:
       return <FirstStep/>

     case 2:
       return <SecondStep/>  

     case 3:
       return <ThirdStep/>  
     default:
       return;  
   }
 }

  return (
    <>
    <div>
    <div className="App">
     <div className="image-wrapper">
        <img src={image} alt="banner" />
     </div>
     <div className="form-wrapper-box">
      <Box sx={{ width: '100%' }}>
        <Stepper activeStep={currentStep -1}>
          <Step >
            <StepLabel>Sign Up</StepLabel>
          </Step>
          <Step >
            <StepLabel>Message</StepLabel>
          </Step>
          <Step >
            <StepLabel>Checkbox</StepLabel>
          </Step>
      </Stepper>
    </Box>
    <div className="hr-wrapper">
       
    </div>
   
    {showStep(currentStep)}
    </div>
    </div>
    </div>
    </>
  );
}

export default App;
