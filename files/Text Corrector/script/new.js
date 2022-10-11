var myHeaders = new Headers();
myHeaders.append("apikey", "{API-KEY}");

var raw = "{body}";

var requestOptions = {
  method: 'POST',
  redirect: 'follow',
  headers: myHeaders,
  body: raw
};

fetch("https://api.apilayer.com/keyword", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
/*{
  "result": [
    {
      "score": 0.720896,
      "text": "face masks"
    },
    {
      "score": 0.62029,
      "text": "Premier League clubs"
    },
    {
      "score": 0.607939,
      "text": "face mask"
    },
    {
      "score": 0.604552,
      "text": "European countries"
    },
    {
      "score": 0.603681,
      "text": "Getty ImagesCopyright"
    },
    {
      "score": 0.585557,
      "text": "close contact"
    },
    {
      "score": 0.579943,
      "text": "general view"
    },
    {
      "score": 0.576317,
      "text": "new research results"
    },
    {
      "score": 0.565451,
      "text": "Main dans la Main"
    },
    {
      "score": 0.559895,
      "text": "Getty Images"
    },
    {
      "score": 0.556723,
      "text": "EU tourism ministers"
    },
    {
      "score": 0.554509,
      "text": "Further research"
    },
    {
      "score": 0.551862,
      "text": "clear face mask"
    },
    {
      "score": 0.549818,
      "text": "Premier League"
    },
    {
      "score": 0.545431,
      "text": "Dutch government"
    },
    {
      "score": 0.543823,
      "text": "mink farm"
    },
    {
      "score": 0.542226,
      "text": "first confirmed case of animal"
    },
    {
      "score": 0.540288,
      "text": "second highest number"
    },
    {
      "score": 0.54025,
      "text": "agriculture minister Carola Schouten"
    },
    {
      "score": 0.537304,
      "text": "major impact"
    }
  ]
}
*/
