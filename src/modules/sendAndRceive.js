const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/NgrPIMwCaT40cxvBVGme/scores/';

const getData = async () => {
  try {
    const response = await fetch(url,
      {
        mathod: 'GET',
      });

    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};

// RENDER THE ARRAY OF SCORES IN THE HTML

export const refresh = async () => {
  const data = await getData();

  data.result.sort((a, b) => b.score - a.score);

  const scoreContainer = document.querySelector('.score-container');

  scoreContainer.innerHTML = '';

  for (let i = 0; i < data.result.length; i += 1) {
    const html = `<li>${data.result[i].user}: ${data.result[i].score}</li>`;

    scoreContainer.innerHTML += html;
  }
};

// ADD A NEW SCORE TO THE API

export const addYourData = () => {
  try {
    const inputName = document.querySelector('.inputName');

    const inputScore = document.querySelector('.inputScore');

    if (inputName !== '' && inputScore !== '') {
      const dataToSend = {

        user: inputName.value,

        score: parseInt(inputScore.value, 10),

      };

      fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/NgrPIMwCaT40cxvBVGme/scores/', {

        method: 'POST',

        headers: {

          'Content-Type': 'application/json',

        },

        body: JSON.stringify(dataToSend),

      });
    }

    inputName.value = '';

    inputScore.value = '';
  } catch (error) {
    return error;
  }

  return null;
};