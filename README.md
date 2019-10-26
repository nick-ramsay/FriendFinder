# FriendFinder

Heroku Deployment: https://afternoon-savannah-83215.herokuapp.com/

## Problem Summary 
- As a social media user, I find it difficult to connect with ideal friends online.

## Overview
- This is a survey application which will allow users to find an optimal friend. This is done by having users complete a survey and then compare the results of the user's survey against the answers provided by prior users on their surveys.

## Installation & Prerequisites

![Dependent Packages](https://github.com/nick-ramsay/readme-images/blob/master/FriendFinder/dependent-packages.jpg?raw=true)

- The FriendFinder application is dependent upon two packages...
 1. Express
 2. Path
  - You'll notice a third package, ```body-parser```, is also in the package.json file. This will no longer be required for the application's functionality as body-parser middleware is included in Express.js 4.17.1.
 
- If you have cloned the repository with the package.json file, these packages can be installed using the npm-install command.

## Instructions

FriendFinder is deployed on Heroku for usage [here](https://afternoon-savannah-83215.herokuapp.com/).

![FriendFinder Homepage](https://github.com/nick-ramsay/readme-images/blob/master/FriendFinder/friendfinder-home.jpg?raw=true)

Users will first land on a homepage explaining the application to them and asking them to click a button to proceed to the survey.

![FriendFinder Survey](https://github.com/nick-ramsay/readme-images/blob/master/FriendFinder/friendfinder-survey.jpg?raw=true)

Upon reaching the survey page, users must complete all the questions presented to them. The page will not allow you to proceed and notify you with an alert if you fail to complete all fields.

![FriendFinder Survey Response](https://github.com/nick-ramsay/readme-images/blob/master/FriendFinder/friendfinder-response.jpg?raw=true)

Once all questions are completed and the user submits the survey, the application will execute and compare the user's answers against answers of friends stored in ```friends.js```. The friend with the most similar answers will be returned in a modal. 

## Built With
- The FriendFinder application was built using Node.js and the following Node Package Manage modules:

 1. Express.js
 1. Path

## Authors 
- Developer: Nick Ramsay (@nick-ramsay)