import createTag from "./createTag.js";

const body = document.body;
body.style.margin = 0;
body.style.padding = 0;
body.style.boxSizing = 'border-box';
const root = document.getElementById('root');
root.style.width = '100vw'
root.style.height = '100vh'
root.style.display = 'flex'
root.style.justifyContent = 'center'
root.style.alignItems = 'center'
  
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