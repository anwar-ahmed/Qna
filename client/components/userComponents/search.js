import React,{Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import $ from 'jquery';
import './Style.css';
import QuestionList from './QuestionList'
import AutoComplete from 'material-ui/AutoComplete';
import FontIcon from 'material-ui/FontIcon';
import Pagination from  '../common/Pagination'
import Appconfig from '../appconfig'



class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Questions:[],
      dataSource:[],
      activePage:1,
      items:3,
      loginUsername:'',
      userInterestedArea:''
    }
  }

  handleSelect = (activePage) => {
    this.setState({activePage: activePage});
}

componentWillUpdate(nextProps, nextState) {
  if (nextState.Questions !== this.state.Questions ) {
    this.setState({activePage: 1});
  }
}

getQuestionsAPI = (searchText,searchType) => {
  $.ajax({
      url: Appconfig.URLs.getQuestionURL + searchText,
      type: 'GET',
      dataType: 'JSON',
      success: function(data) {
        let sortQuestions = data.data.sort(function (a, b) {
             return new Date(b.createdDate) - new Date(a.createdDate)
        });
              let questionsTitles = sortQuestions.map((data) => {
                  return data.title;
              });
              
              if(searchType === 'AutoComplete') {
                this.setState({dataSource: questionsTitles});
                this.setState({Questions: sortQuestions});
              } else if (searchType === 'InitialLoad' && this.state.loginUsername !== ''){      
                let userQuestions = sortQuestions.filter((x) => { return x.username === this.state.loginUsername});  
                this.setState({Questions: userQuestions});
              } else {
                this.setState({Questions: sortQuestions});
              }
            }.bind(this)
      });
}


handleAutoComplete = (inputValue) => {
  // if(inputValue !== '') {
    this.getQuestionsAPI(inputValue,'AutoComplete');
  // }
}

//  function to handle on Search Button Click
handleSearchButtonClick = () =>   {
  let searchText =this.textInput.refs.searchTextField.props.value;
  if(searchText !== '') {
  this.getQuestionsAPI(searchText,'SearchButtonClick');
  }

}

componentDidMount = () => {
  this.getQuestionsAPI('','InitialLoad');
}


handleDelete =(id) => {
  let newQuestionList = this.state.Questions.filter((question) => {
      return question._id !== id 
  }

  )
  this.setState({
      Questions: newQuestionList
  })
  // console.log(this.state.Questions)
}

  render() {

    const {activePage, items } = this.state;
    const lastItemOfActivePage = activePage * items;
    const firstItemOfActivePage = lastItemOfActivePage - items;
    const allQuestionOfActivePage = this.state.Questions.slice(firstItemOfActivePage, lastItemOfActivePage);


    return(
      
      <div > 
        <div>
        <RaisedButton  label="Ask Question" primary={true}  style={{float: 'right',marginight : 20}}/>
        </div>
        <div>
          <AutoComplete className='AutoComplete-style' ref={(input) => { this.textInput = input; }}
          floatingLabelText='Search Question Here'
          filter={AutoComplete.fuzzyFilter}
          dataSource={this.state.dataSource}
          maxSearchResults={5}
          errorStyle={{float:'left'}}
          onUpdateInput={this.handleAutoComplete}/>
          <RaisedButton className='Search-button'
          primary={true}
          onClick={this.handleSearchButtonClick}
          icon={<FontIcon className='material-icons' >search</FontIcon>}/> 
          </div>
           <Divider style={{marginTop: 10}}/>
           <div>
              <Paper style={{marginLeft: 400 ,marginRight: 400, float:'center'}} zDepth={1} >
              {this.state.Questions.length > 0 ? <QuestionList Questions={allQuestionOfActivePage} handleDelete={this.handleDelete.bind(this)}/> : null }
              </Paper>
          </div>
          <div>
                <Pagination activePage={activePage}
                    items={items}
                    total={this.state.Questions.length}
                    handleSelect={this.handleSelect}/>
             </div>
      </div> 
    )
   }
}

export default Search;
