import React, { Component } from 'react';
import './Style.css';
import {Card,CardActions} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import DeleteButton from './DeleteButton';


 
class Question extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
        };
    }

    handleEditOnClick = () => {
        this.props.setEditQuestionStates('true',this.props.question._id);
    }
    
    render() {
        let postedDate = 'Posted Date: ' + this.props.question.createdDate.substring(0,10)
        let postedBy = 'Posted By: ' + this.props.question.username
        let answers = this.props.question.answers
        return(
            <div>
            <Card 
                className='Question-card' > 
                            <div className='Post-details'>
                                    <div> {postedBy} </div>
                                    <div> {postedDate} </div>
                            </div>    
                            <div className='Posted-Question'> 
                        <div> <h4> 
                                < a href='' >{this.props.question.title} </a>
                            </h4> 
                     </div>
                     <div>
                         </div>
                     {this.props.question.desc}
                         </div>
                    <CardActions className='Card-action-outer'>
                        <div className='Card-action'>
                        <FlatButton label='EDIT' onClick={this.handleEditOnClick} >
                        {/* <Link to='/EditQuestion'>EDIT</Link> */}
                        </FlatButton>
                        <DeleteButton style={{display:'inline-block'}} question={this.props.question} handleDelete={this.props.handleDelete.bind(this)}/>
                        </div>
                        <div >
                            <div ><span title="0 answers">{answers}</span></div>
                            <div>answers</div>
                        </div>
                        <IconButton style={{float:'right'}}
                            tooltip={this.props.question.dislike}
                            tooltipPosition="top-center" >                         
                        <i className="material-icons">thumb_down</i>
                        </IconButton>
                        <IconButton style={{float:'right'}}
                             tooltip={this.props.question.like}
                             tooltipPosition="top-center"
                        ><i className="material-icons">thumb_up</i>
                        </IconButton>
                        

                    </CardActions>
       
            </Card>

        </div>   
        )
    }

    
}


export default Question;