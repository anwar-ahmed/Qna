import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import $ from 'jquery';
import Snackbar from 'material-ui/Snackbar';
import Appconfig from '../appconfig'

/**
 * Alerts are urgent interruptions, requiring acknowledgement, that inform the user about a situation.
 */
export default class DeleteButton extends React.Component {
  state = {
    open: false,
    deleteStatus:'',
    snackbarStatus: false
  };

  handleOpen = () => {
    this.setState({open: true});
  };
  handleClose = () => {
    this.setState({open: false});
  };

  handleRequestClose = () => {
    this.setState({
      snackbarStatus: false,
    });
  };


  handleDelete = () => {
    $.ajax({
      url: Appconfig.URLs.deleteQuestionURL + this.props.question._id,
      type: 'DELETE',
      dataType: 'JSON',
      success: function(data) {
              this.setState({deleteStatus: data.data});
      }.bind(this),
      error: function(err)
      {
        console.log(err);
      }
  });
    this.setState({open: false});
    this.setState({
      snackbarStatus: true,
    });

    this.props.handleDelete(this.props.question._id);
  };



  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handleClose}
      />,
      <FlatButton
        label="Delete"
        primary={true}
        onClick={this.handleDelete}
      />,
    ];

    return (
      <div>
        <FlatButton label="Delete" onClick={this.handleOpen} />
        <Dialog
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          Are you sure, you want to delete this question?
        </Dialog>
        <Snackbar
          open={this.state.snackbarStatus}
          message="Question deleted from database"
          autoHideDuration={4000}
          onRequestClose={this.handleRequestClose}
        />
      </div>
    );
  }
}