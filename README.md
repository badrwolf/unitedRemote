# TECHNOLOGIE: REACT NATIVE
## Installation
Install Expo to run the app
```bash
npm install -g expo-cli
```
Then run the following commands to enter and run the app
```bash
cd hid
npm start # you can also use: expo start
```
## Components
the GitList.js is the file containing the javascript code.
To get the most starred Github repos created in the last 30 days with the pagination using this line of code:
```bash
const gitApiCall = await fetch('https://api.github.com/search/repositories?q=created:%3E2017-10-22&sort=stars&order=desc&page='+this.state.page);
```
##Results



