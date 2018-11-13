# Serverless AWS CRUD Workshop
## Make it look gUId

In this lab, 

### Requirements:
- Requirements in Lab 2
- Completion of Lab 2

### Outcomes:
- 

### Overview:



### Steps:
1. In your root directory. Create a new directory `backend`
2. Move all our existing work into the `backend` directory
3. Copy the frontend directory in this lab to your project directory. This project is the base create-react-app project with a few light tweaks. To see how I created this project See Appendix

4. Now change into the new directory and install all the dependencies with
```
cd frontend
npm install
```
5. In the `serverless.yml` file add
```
 cors: true
```
to every HTTP method
6. In each function handler in the backend, add the following to the response object to allow CORS
```JS
headers: {
    'Access-Control-Allow-Origin': '*'
}
```

### References
[AWS Amplify](https://aws-amplify.github.io/)
[Axios with react](https://alligator.io/react/axios-react/)

### Appendix
#### Create react app from scratch
Note: This only works on a Mac or linux machine
```bash
npm install -g create-react-app
create-react-app frontend
cd frontend
npm install
rm README.md src/logo.svg src/serviceWorker.js src/App.css src/App.js src/App.test.js src/index.js
touch src/App.css
npm install --save axios
```
Then I removed code out of index.js and App.js and updated public/manifest.json