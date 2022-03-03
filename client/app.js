export default () => {
  let count = 0;
  const text = 'SUP i hope i can display some lambda metrics';

  const newDiv = document.createElement('div');
  document.getElementById('root').appendChild(newDiv);


  const element = document.createElement('h1');
  element.innerHTML = text;

  const button = document.createElement('button');
  button.setAttribute('id', 'incrementButton');
  button.type = 'button';
  button.innerHTML = 'increment count by 1';

  const countText = document.createElement('h3');
  countText.setAttribute('id', 'count');
  countText.innerHTML = count;

  button.onclick = function() {
    console.log('increment button clicked');

    // fetch request is the trigger for the lambda function, which will then send an incremented value;
    const data = await fetch('/lambda');
    let json = data.json();

    let value = parseInt(document.getElementById('count').innerHTML);
    // let value = parseInt(element.innerHTML);

    console.log('value is: ', value);
    
    document.getElementById('count').innerHTML = parseInt(value);

  
  }

  newDiv.appendChild(element);
  newDiv.appendChild(button);
  
  return countText;
};