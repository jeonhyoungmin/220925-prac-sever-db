function createTag(tagName, props, parent, content = ''){
  const elementTag = document.createElement(tagName);
  for(const cssValue in props){
    if(cssValue === "id"){
      elementTag.id = props[cssValue]
    } else if(cssValue === 'placeholder'){
      elementTag.placeholder = props[cssValue]
    } else {
      elementTag.style[cssValue] = props[cssValue]
    }
  };
  elementTag.innerText = content;
  return parent.appendChild(elementTag)
}

export default createTag