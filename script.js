var rect1 = document.getElementById('rect1'),
    rect2 = document.getElementById('rect2'),
    saving = document.getElementById('saving'),
    circle = document.getElementById('circle'),
    counting = document.getElementById('counting'),
    numb = document.getElementById('numb');

var MAX_VALUE = 1000;
getText("https://interview-8e4c5-default-rtdb.firebaseio.com/front-end/counter1.json");

async function getText(file) {
  let x = await fetch(file);
  let START_NUMB = await x.text();
  circle.style.display = "none";
  saving.style.display = "none";

  if(START_NUMB == "null"){
                       numb.innerHTML = 1;
                       counting.innerHTML = "Counter value : " + (1);
    }
  else{ numb.innerHTML = START_NUMB;
        counting.innerHTML = "Counter value : " + (START_NUMB);}
}

rect1.onclick = function(){
  var temp = Number(numb.innerHTML);
  if(temp > 1){
   numb.innerHTML = temp - 1;
   counting.innerHTML = "Counter value: " + (temp-1);
   http.put(
   'https://interview-8e4c5-default-rtdb.firebaseio.com/front-end.json',
        (temp-1));
 }
}
rect2.onclick = function(){
  var temp = Number(numb.innerHTML);
  if(temp < MAX_VALUE){
   numb.innerHTML = temp + 1;
   counting.innerHTML = "Counter value: " + (temp+1);
   http.put(
   'https://interview-8e4c5-default-rtdb.firebaseio.com/front-end.json',
        (temp+1));
 }
}

class EasyHTTP {

   async put(url, data) {

     circle.style.display = "block";
     saving.style.display = "block";

    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({"Gourav Tailor" : data})
    });

    const resData = await response.json();

    circle.style.display = "none";
    saving.style.display = "none";

    return resData;
  }
}
const http = new EasyHTTP;

http.put(
'https://interview-8e4c5-default-rtdb.firebaseio.com/front-end.json',
     data)
