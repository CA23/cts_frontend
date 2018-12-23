const app = document.getElementById('root');



const container = document.createElement('div');
container.setAttribute('class', 'container');


app.appendChild(container);

var request = new XMLHttpRequest();
request.open('GET', 'http://127.0.0.1:8000', true);
request.onload = function () {

  // Begin accessing JSON data here
  var json = JSON.parse(this.response);
  var a_from = [];
var a_until = [];
var m_names = [];

for(var i = 0; i < json.length; i++){
    a_from.push(json[i].available_from);
    a_until.push(json[i].available_until);
    m_names.push(json[i].first_name + " " + json[i].last_name);
}

var max = 0;
var max_hr = 0;

for(var j = 0; j < 24; j++){
    var count = 0;
    for(var k = 0; k < a_from.length; k++){
        if (j >= a_from[k] && j < a_until[k]){
            count = count + 1;
        }
    if (count > max){
        max = count;
        max_hr = j;
    }
    }
}
console.log(max);
console.log(max_hr);
var a_members = [];

for (var m = 0; m < m_names.length; m++){
    if (max_hr >= a_from[m] && max_hr < a_until[m]){
        availability = "Available from " + String(a_from[m]) + " :00 to " + String(a_until[m]) + ":00 HRS";
        a_members.push([m_names[m], availability]);
    }
}

a_members.forEach(function(member){
    console.log(member);
});



const h3 = document.createElement('h3');
h3.setAttribute('class', 'time');

h3.textContent = "The optimal hour long span during which maximum members are available is " +
String(max_hr) + ":00 HRS";
app.appendChild(h3);

  if (request.status >= 200 && request.status < 400) {
    a_members.forEach(member => {
      const card = document.createElement('div');
      card.setAttribute('class', 'card');

      const h1 = document.createElement('h1');
      h1.textContent = member[0];

      const p = document.createElement('p');
      p.textContent = member[1];

      container.appendChild(card);
      card.appendChild(h1);
      card.appendChild(p);
    });
  } else {
    const errorMessage = document.createElement('marquee');
    errorMessage.textContent = 'Oops, looks like something is wrong.';
    app.appendChild(errorMessage);
  }
}

request.send();