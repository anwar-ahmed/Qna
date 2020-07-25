import React , {Component} from 'react';
import './Style.css'
import Question from './Question'

class QuestionList extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
       
    }
  
    render () {

        let  renderAllQuestions = this.props.Questions.map((question, index) => {
            return <Question key={index} question={question}/>;
        });
        return (
            <div>
            {  renderAllQuestions  }
          </div>
        ) 
    }
}

export default QuestionList;