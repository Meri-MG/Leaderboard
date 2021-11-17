const getID = async () => {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      name: 'My cool new game',
    }),
  });
  // const data = await response.json();
  //  console.log(data);
};
getID();

export const postScore = async (name, points) => {
  const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/nVuQ1qNTM7A30xlNLM5b/scores/';
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        user: name,
        score: points,
      }),
    });
    return await response.json();
  } catch (error) {
    return error;
  }
};

postScore();

export const getScore = async () => {
  const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/nVuQ1qNTM7A30xlNLM5b/scores/';
  try {
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    return error;
  }
};

getScore();
export default { getScore, postScore };
