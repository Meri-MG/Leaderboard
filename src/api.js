export const postScore = async (name, points) => {
  const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/jFXCKqZ2A8LhRXmh0pbi/scores/';
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
  return response.json();
};

export const getScore = async () => {
  const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/jFXCKqZ2A8LhRXmh0pbi/scores/';
  const response = await fetch(url);
  return response.json();
};

export default { getScore, postScore };
