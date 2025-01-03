const axios = require('axios');

const getAppDetails = async (req, res) => {
  const { appids } = req.query; // Extract app ID from query params

  try {
    const response = await axios.get(`https://store.steampowered.com/api/appdetails/?appids=${appids}`);
    res.json(response.data); // Send the API response back to the client
  } catch (error) {
    console.error('Error fetching data from Steam API:', error.message);
    res.status(500).json({ error: 'Failed to fetch data from Steam API' });
  }
};

module.exports = {
  getAppDetails,
};
