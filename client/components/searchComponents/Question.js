import React, { Component } from 'react';
import './Style.css';
import {Card, CardTitle, CardText,CardActions,CardHeader} from 'material-ui/Card';
import IconButton from 'material-ui/IconButton';


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
                    <CardHeader
                        title={postedBy}
                            subtitle={postedDate}
                            //  avatar="../../public/images/ic_person_black_24dp_2x.png"
                        />             
                    <CardTitle>
                        <div> <h3> 
                                < a href='' > {this.props.question.title} </a>
                            </h3> 
                     </div>
                    </CardTitle>
                    <CardText>
                    {this.props.question.desc}
                    </CardText>
                    <CardActions className='Card-action-outer'>
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