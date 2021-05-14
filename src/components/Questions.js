import React, { Component, useState, setState } from "react";
import * as Survey from "survey-react";
import "survey-react/survey.css";
import "./Survey.css";

Survey.StylesManager.applyTheme("default");
class Questions extends Component {


   onComplete(survey) {
    let options=['Emergernt Works','Underdog Devs','Justice Through Code', 'Next Chapter', 'Reboot LA'];
    let message ='We suggest you start with:';
    let suggestions=[];

    if(survey.data['exLvl'] === 'New' && survey.data['exJS'] === 'None' ){
      suggestions.push(options[0]);
    }else if(survey.data['exLvl'] === 'Intermidate' && survey.data['exJS'] === 'Some'){
      suggestions.push(options[0]);
      suggestions.push(options[2]);
    }else if(survey.data['exLvl'] === 'Advance' && survey.data['exJS'] === 'Advance'){
      suggestions.push(options[3]);
    }else{
      suggestions.push(options[0]);
      suggestions.push(options[1]);
      suggestions.push(options[2]);
    }

    if(survey.data['inLA'] === 'Yes'){
     suggestions.push(options[4]);
    }
     alert(`${message}\n${suggestions}`);
    //  console.log("Survey results: " + JSON.stringify(survey.data));
  }


  render() {
  
  const json = {
  title: `Having trouble deciding where to apply? Take our quiz to provide suggestions ☺`,
  showProgressBar: "bottom",
  firstPageIsStarted: true,
  startSurveyText: "Start",
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
    },
    {
      questions: [
        {
          type: "radiogroup",
          name: "inLA",
          title: "Are you living in Los Angeles County?",
          choices: ["Yes", "No"],
        }
      ]
    }
  ],
};


const survey = new Survey.Model(json);

        return (
          <>
            <Survey.Survey
                model={survey}
                onComplete={this.onComplete}
            />
          </>
        );
    }
}

export default Questions;
