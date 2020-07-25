import React , {Component} from 'react';
import './Style.css'
import Question from './Question'
import EditQuestion from './EditQuestion'

class QuestionList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editPaper: 'false',
            editQuestionId:'',
        };
        
    }

      
    setEditQuestionStates =(flag,id) => {
        this.setState({
            editPaper:flag,
            editQuestionId:id
        })
    }

   
    render () {

        let  renderAllQuestions = this.props.Questions.map((question, index) => {
            return <Question key={index} question={question} setEditQuestionStates={this.setEditQuestionStates}
            handleDelete={this.props.handleDelete.bind(this)}
            />;
        });
        

        let editQuestion = this.props.Questions.find((obj) => { 
            return obj._id === this.state.editQuestionId });
        return (
            <div>
            { this.state.editPaper === 'true' ? <EditQuestion editQuestion={editQuestion}/> : renderAllQuestions  }
          </div>
        )
        
    }
}


export default QuestionList;