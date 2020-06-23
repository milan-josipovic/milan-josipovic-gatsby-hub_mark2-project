import React from 'react'
import * as Survey from "survey-react";
import "survey-react/survey.css";
import surveyJson from '../../constants/obrazac-prijave.js'

const SurveyComponent = () => {
var model = new Survey.Model(surveyJson);
 return (
   <div >                  
        < Survey.Survey model={model} onComplete={sendDataToServer} />        
   </div>
 )
}

 function sendDataToServer(survey) {
  survey.sendResult('b820d39f-816b-459d-92a9-3ee5465b1242');   
 }


export default SurveyComponent
