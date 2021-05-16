import React, { Component, useState } from "react";
import * as Survey from "survey-react";
import "survey-react/survey.css";
import "./Survey.css";

//here we use survey react js library to be able to set a little questionnaire
Survey.StylesManager.applyTheme("default");
class Questions extends Component {
 
  //  constructor() {
  //       super(); 
  //   }
   
  //once the user is done answering the questions this function is called and then an alert message displays the suggestion 
  //made by the logic within this function
  onComplete(survey) {
    let options=['Emergernt Works','Underdog Devs','Justice Through Code', 'Next Chapter'];
    
    if(survey.data['exLvl'] === 'New' && survey.data['exJS'] === 'None' ){
      alert(`We suggest you start with:\n ${options[0]}`);
    }else if(survey.data['exLvl'] === 'Intermidate' && survey.data['exJS'] === 'Some'  ){
      alert(`We suggest you start with:\n ${options[0]}\n ${options[2]}`);
    }else if(survey.data['exLvl'] === 'Advance' && survey.data['exJS'] === 'Advance'){
      alert(`We suggest you start with:\n ${options[3]}`);
    }else{
      alert(`We suggest you start with:\n ${options[0]}\n ${options[1]}\n ${options[2]}`);
    }
    console.log("Survey results: " + JSON.stringify(survey.data));
    // alert(JSON.stringify(survey.data));
    // console.log(this.suggestion);
  }
  
  render() {
  const json = {
  title: "If you are having trouble deciding where to apply take our quiz for us to provide suggestions ☺",
  showProgressBar: "bottom",
  firstPageIsStarted: true,
  startSurveyText: "Start Quiz",
  pages: [
    { questions: [ {type: "html", html: "Please click on <b>'Start Quiz'</b> button when you are ready." } ] },
    {
      questions: [
        {
          type: "radiogroup",
          name: "exLvl",
          title: "What is your experience level with coding?",
          choices: [ "New", "Intermidate", "Advance" ],
        }
      ]
    },
    {
      questions: [
        {
          type: "radiogroup",
          name: "exJS",
          title: "What is your experience with JavaSrcipt?",
          choices: [ "None", "Some", "Intermidate", "Advance" ],
        }
      ]
    },
    {
      questions: [
        {
          type: "radiogroup",
          name: "learningStyle",
          title: "What is your perfered learning style?",
          choices: [ "Self learner", "Mentor/mentee perferably", "I am okay with both" ],
        }
      ]
    }
  ],
};
const survey = new Survey.Model(json);

        return (
          <div className="surveyContainer">
            <Survey.Survey
                model={survey}
                onComplete={this.onComplete}
            />
          
          </div>
        );
    }
}

export default Questions;
