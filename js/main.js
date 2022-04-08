//const suggestion = document.querySelector('p');

const synth = window.speechSynthesis; //Added Voice synthesis
document.getElementById('generate').addEventListener('click', excuse);
function excuse(){
	//document.querySelector('h2').textContent = 'Still Bored?';
	//let activity = document.querySelector('select').value;
	//document.querySelector('h2').style.display = 'none';
	//document.querySelector('p').style.display = 'none';	
	//document.querySelector('label').textContent	= 'Pick something else';
	const url = `https://excuser.herokuapp.com/v1/excuse`;
	fetch(url, {mode: 'cors'})
    .then(res => res.json()) // parse response as JSON
    .then(data => {
       // console.log(data[0].excuse);
        document.querySelector('h1').textContent = data[0].excuse;
        document.querySelector('h2').textContent = 'generate another excuse!';
    	synth.speak(new SpeechSynthesisUtterance(document.querySelector('h1').textContent));//This reads any text in that element
    })
    .catch(err => {
    	console.log(`error ${err}`)
    });


	const url2 = 'https://asli-fun-fact-api.herokuapp.com/';
    fetch(url2, {mode: 'cors'})
    .then(res => res.json()) // parse response as JSON
    .then(data => {
    	//console.log(data.data.fact);
    	document.getElementById('random').textContent = data.data.fact;
    	//document.querySelector('h1').textContent = `You can ${data.activity}`;
    })
    .catch(err => {
    	console.log(`error ${err}`);
    });


}