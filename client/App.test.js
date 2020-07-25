import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Search from './components/userComponents/Search'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Configtest from './configtest'
import QuestionList from './components/userComponents/QuestionList'
import app  from '../server/App'







describe( 'Test FrontEnd',function() {

it('App renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});


it('Search renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MuiThemeProvider> <Search /> </MuiThemeProvider>, div);
});


it('QuestionList renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MuiThemeProvider> <QuestionList Questions={Configtest.Questions} handleDelete={function(x,y){}} /> </MuiThemeProvider>, div);
});

});


describe('Test Backend API', function() {
  let request = require('supertest')
  it('Should handle Question Search Request', function(done) {
    request(app)
        .get('/qna/get/questions/apple')
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err,res) {
          expect(res.body.success).toBe(true);
          expect(res.body.data[0].title).toBe('apple')
          done();
        });
  });

  it('Should handle edit question Request', function(done) {
    request(app)
        .post('/qna/edit/')
        .send(Configtest.editQuestion)
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err,res) {
          expect(res.body.success).toBe(true);
          done();
        });
  });

  it('Should handle delete question Request', function(done) {
    request(app)
        .delete('/qna/delete/' + Configtest.deleteQuestion._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err,res) {
          expect(res.body.deleteStatus).toBe('Deleted Question');
          done();
        });
  });
 });
