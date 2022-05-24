const PORT = 8000

const express = require('express')
const cors = require('cors')
const axios = require('axios').default
require('dotenv').config()

const app = express()

app.use(cors())

app.use(express.urlencoded({extended:true}))

app.get('/', (req, res) => {
    res.json('hi')
})


app.get('/weather/:location', (req, res) => {
    const location = req.params.location
    const api_key = process.env.REACT_APP_API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${api_key}&units=imperial`;
  
          axios.request(url).then((response) => {
              res.json(response.data);
            });
}) 

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))