import createTag from "./createTag.js";
import rootStyle from "./rootStyle.js";

// const http = require('http');
// const fs = require('fs');

rootStyle({
  width : '100vw',
  height : '100vh',
  backgroundColor : '#333',
  display : 'flex',
  justifyContent : 'center',
  alignItems : 'center'
})

createTag('div', {
  id : 'logInBox',
  width : '60vw',
  minWidth : '500px',
  height : '50vh',
  minHeight : '300px',
  backgroundColor : 'white',
  display : 'flex',
  justifyContent : 'center',
  alignItems : 'center',
  flexDirection : 'column'
}, root)

createTag('div', {
  id : 'lineUpLogIn',
  width : '300px',
  height : '150px',
  backgroundColor : 'greenYellow',
  marginBottom : '10px',
  display : 'flex',
  flexDirection : 'column',
  justifyContent : 'space-between'
}, logInBox)
createTag('button', {
  id : 'logInButton',
  width : '200px',
  height : '50px'
}, logInBox, "Log-In")

createTag('input', {
  id : 'ID',
  width : '290px',
  height : '60px',
  placeholder : "ID를 입력해주세요"
}, lineUpLogIn)

createTag('input', {
  id : 'Password',
  width : '290px',
  height : '60px',
  placeholder : "비밀번호를 입력해주세요"
}, lineUpLogIn)

