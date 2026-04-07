
const token = '';
fetch('https://api.start.gg/gql/alpha',
  {
    method: 'POST',
    headers: `{ "Authorization": "Bearer ${token}" }`
  })