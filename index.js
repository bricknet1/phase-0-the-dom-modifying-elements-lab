// Write your code here!
document.querySelector('main').remove();

//document.body.append(document.createElement('h1'));

//const newHeader = document.querySelector('h1');

//newHeader.id = 'victory';

//newHeader.textContent = 'Nick is the champion';







const newHeader = document.createElement("h1");

newHeader.id = "victory"

newHeader.textContent = "Nick is the champion"

document.body.append(newHeader);