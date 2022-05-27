# `README.md` - Planet Vitals Website

## 🌍 About the App

A fully responsive MERN application about the planet that categorizes related topics and provides direct links to the most credible websites and databases. Connects to the OpenWeatherAPI using Express as a backend and provides local weather based on city entry.

## Demo Link



## 📝 How to Use

Download or clone this repository. You will need node and npm installed globally on your machine.

#### Cloning Repository: 

Open your terminal. Navigate to where you want to clone the repo, e.g.

```
cd documents
```  
 
Run

```
git clone <repo url>
```

Navigate inside the repository with 

```
cd <repo title>
``` 

#### Installation:

```
npm install
``` 

To Run Test Suite:

```
npm test
``` 

To Start Server:

```
npm start
``` 

To Visit App:

### `localhost:3000` in web browser


## 🔨 Technologies

![React.js Badge](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Node.js Badge](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express Badge](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![Material UI Badge](https://img.shields.io/badge/Material--UI-0081CB?style=for-the-badge&logo=material-ui&logoColor=white)
![HTML Badge](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS Badge](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

OpenWeather API


## 🤔 Reflection

This was my capstone project for my Advanced Full Stack Web Development Course. 

I set out to build an information hub for those who are interested in looking into some of the vital signs of our planet. With an earth science research background, I have always wanted a site where credible resources such as radars, trackers, and databases are provided about the planet's vitals. These vitals include things like current air pollution stats, global temperature stats, storm reports, fire radars, etc. I wanted this to be a resource people could use to help on research projects, class presentations, and to learn something new about the planet we all inhabit.

My focus was to make this website visually appealing and easily accessible. Since the user audience could expand out of those in the earth science research field, I wanted to add descriptions and images that would make the information provided on this website easily digestable and appealing. Also, those who are not experienced in earth science research may not even be aware that websites that provide such information about our planet are available and I wanted to make an easy way for people to access this information in one place. 

Some struggles I came across was trying to make this website friendly to all audiences while trying to keep it's primary target audience, those in the earth science field who would more likely frequent this site, engaged. Some terminology commonly used in the earth science field is present as there was no other way to describe some of the complex ways we analyze the planet, but it was kept minimal and added in tandem with easily understandable descriptions. It would not disable other users who are not in the field from understanding or accessing the information provided.

I used React.js to build this project and Material UI to help design it. I also created a back-end with Express in order to safely connect to the OpenWeather API. There is a page section of the website that allows users to check current weather stats based on city. 

The npm packages that I used are: 
<a href="https://www.npmjs.com/package/react-helmet-async" alt="react-helmet-asynch npm package link">
 react-helmet-async,
</a>

<a href="https://www.npmjs.com/package/axios" alt="axios npm package link">
 axios,
</a>

<a href="https://www.npmjs.com/package/express" alt="express npm package link">
 express,
</a>

<a href="https://www.npmjs.com/package/cors" alt="cors npm package link">
 cors,
</a>

<a href="https://www.npmjs.com/package/dotenv" alt="dotenv npm package link">
 dotenv,
</a>

<a href="https://www.npmjs.com/package/nodemon" alt="nodemon npm package link">
 nodemon
</a>

