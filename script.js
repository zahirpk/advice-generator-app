

const myId = document.getElementById('idNumber');
const advice = document.getElementById('adviceMsg');
const button = document.getElementById('myButton')

async function fetchAdviceSlip() {
  const response = await fetch("https://api.adviceslip.com/advice");
  const data = await response.text();
  return data
}

function clickBtn() {
  fetchAdviceSlip().then((data) => {
    const newData = JSON.parse(data);
    button.addEventListener('click', myFunction);
    function myFunction() {
      myId.innerText = 'ADVICE #' + newData.slip.id;
      advice.innerText = '"' + newData.slip.advice + '"';
    }
  });
}









