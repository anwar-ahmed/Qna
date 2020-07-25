import React, { Component } from 'react';
import $ from 'jquery';
import Appconfig from '../appconfig'


class EditQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title:this.props.editQuestion.title,
      desc:this.props.editQuestion.desc,
      tag:this.props.editQuestion.tag,
      edmitMesg:''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }


  handleSubmit(event) {

    event.preventDefault();
      let obj ={}
      obj.id = this.props.editQuestion._id;
      obj.title = this.state.title;
      obj.desc = this.state.desc;
      obj.tag = this.state.tag;

      console.log(obj)
      $.ajax({
          type:'POST',
          url: Appconfig.URLs.postEditQuestionURL,
          dataType: 'JSON',
          data : obj })
          .done(function(data){
          })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} autoComplete='on'>
        <label>
          Title:<br/>
          <input type="text" name="title" value={this.state.title} onChange={this.handleChange} required/>
        </label><br/>
        <label>
          Description:<br/>
          <textarea  name="desc" value={this.state.desc}  onChange={this.handleChange} required />
        </label><br/>
        <label>
          Tag:<br/>
          <input type="text" name="tag" value={ this.state.tag == null ? '' :  this.state.tag} onChange={this.handleChange} required />
        </label><br/><br/>
        <input type="submit" value="Submit" style={{margin:10}}/>
        <input type="button" value="Back" style={{margin:10}} />
      </form>
    );
  }
}

export default EditQuestion