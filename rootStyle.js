function rootStyle(props){
  const root = document.getElementById('root');
  const body = document.body;
  body.style.margin = 0;
  body.style.padding = 0;
  body.style.boxSizing = 'border-box';
  for(const cssValue in props){
    root.style[cssValue] = props[cssValue]
  }
}

export default rootStyle