let searchBtn = document.querySelector('#searchBtn');

searchBtn.addEventListener('click', checkError);

let entered = document.querySelector('.entered');

let related = document.querySelector('.related');
let closelyRelated = document.querySelector('.closelyRelated');
let relatedList = document.querySelector('.relatedList');

function checkError() {

  let myHeaders = new Headers();
  myHeaders.append("apikey", "fVeKBbh6Mdw5kN4AyKlivIEYLizTfIYB");

  let input = document.querySelector('#input').value;
  let request = `https://api.apilayer.com/spell/spellchecker?q=${input}`;

  let requestOptions = {
    method: 'GET',0
    redirect: 'follow',
    headers: myHeaders
  };

  fetch(request, requestOptions)
    .then(response => response.json())
    .then(result => {
      /*corrections: Array(1)
0: Object
best_candidate: "will"
candidates: Array(12)
text: "Gill"
__proto__: Object
length: 1
__proto__: Array(0)*/
      entered.innerHTML = result.original_text;
      related.innerHTML = '';
      relatedList.innerHTML = '';
      console.log(result.corrections);

      if (result.corrections.length > 0) {

        related.innerHTML = result.corrections[0].best_candidate;

      } else {
        related.innerHTML = 'You entered a correct word';
      };
      for (let i = 0; i < result.corrections[0].candidates.length; i++) {

        relatedList.innerHTML += `
  <li>${result.corrections[0].candidates[i]}</li>


`;
      }
    })
    .catch(error => console.log('error', error));
}