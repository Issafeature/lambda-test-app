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

  button.onclick = async function() {
    console.log('increment button clicked');

    // fetch request is the trigger for the lambda function, which will then send an incremented value;
    const results = await fetch('/lambda');
    let resultsJSON = data.json();

    parseInt(document.getElementById('count').innerHTML) = parseInt(resultsJSON)
    // let value = parseInt(element.innerHTML);

    console.log('value is: ', value);
  
  }

  newDiv.appendChild(element);
  newDiv.appendChild(button);
  
  return countText;
};