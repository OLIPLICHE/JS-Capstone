/* eslint-disable indent */
/* eslint-disable no-console */
/* eslint-disable linebreak-style */
const API = {
  getMeals: async (endpoint) => {
    console.log(endpoint);
    const res = await fetch(`${endpoint}`, { method: 'GET' });
    if (!res.ok) {
      throw new Error(`API error! status: ${res.status}`);
    } else {
      const data = await res.json();
      return data;
    }
  },
};

export default API;
