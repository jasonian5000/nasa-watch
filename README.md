# NASA Watch

## Description
NASA Watch is a website dedicated to helping users find interesting and fantastic photos related to NASA and current information about space exploration. The user will initially receive several pages full of images from NASA Images, Astronomy Picture of the Day, and the James Webb Telescope. They can additionally search NASA Images for more images. There is also a news component that aggregates space travel related news as well as reports from the International Space Station.

## Background
As a native of Houston, space travel and NASA were always a part of my life. When I was a kid I would take trips to the Johnson Space Center and marvel at the achievements in science and innovation that were made possible by the ingenuity and determination of these dedicated men and women. It taught me the value of curiousity and imagination. I hope that other people may be inspired by these images and take interest in what comes next.

## Technologies Used
This project was primarily built in React, Redux, and CSS. I used several APIs including, [NASA Images API](https://images.nasa.gov/), [Astronomy Picture of the Day API](https://apod.nasa.gov/), [James Webb Space Telescope API](https://jwstapi.com/), and [Space Flight News API](https://www.spaceflightnewsapi.net/).

## Colors
**Main:**
- background: #0064b2
- accent: #032949
- font: #cdd0d3

**Input field:**
- background: #2881e0
- font: #e9e9ea
- placeholder: #a9aaaa

## Usage
1. Clone the repository using whatever method you are most comfortable. You may use the **Code** button above and follow one of the methods provided.

2. Make sure you have node.js and npm installed in your coding environment. For more information read the [npm documentation](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm). It is also recommended you install [nodemon](https://www.npmjs.com/package/nodemon).

3. Navigate your coding terminal to the directory where the repository was downloaded and run the command `npm update`. This should install the necessary node modules. 

4. You will need a API key from [James Webb Space Telescope API](https://jwstapi.com/). Visit their site and follow instructions to obtain a key.

5. Open the file `./src/actions/jwstApiSearch.js`. On line 5 `myHeaders.append("X-API-KEY", YOUR_API_KEY)` insert your James Webb API key in place of "YOUR_API_KEY".

6. Navigate your terminal to the root directory of the repo and run the command `npm start`. This should open the website in your default browser.

## Challenges
1. General lack of experience using React Redux.
- The solution here came from a lot of research and the support from my cohort, instructor, and TA at DigitalCrafts.

2. Extracting relevant information from the APIs.
- The API's delivered quite a bit of information but much of it was too technical to be relevant to the average user. By making copies of sample data I was able to weed through and find parts that would be interesting to almost anyone.

3. Styling and layout.
- I was determined to use mostly raw css versus bootstrap or frameworks so that could get better at using this language. I have become accustomed to using Flexbox for most of my projects so the real challenge came in deciding on a design and color theme. I took inspiration for the colors from the NASA logo itself and page layout from websites like [Discord](www.discord.com) and [LinkedIn](www.linkedin.com). 

You can read more about how I made this at dev.to.