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
3. Use the frontend directory as a starting point for the frontend. This project is the base create-react-app project with a few light tweaks. To see how I created this project See Appendix

4. Now change into the new frontend directory and install all the dependencies with
```
cd frontend
npm install
```
5. In the `backend/serverless.yml` file add
```
 cors: true
```
to every HTTP method event
6. In each function handlers in the backend/handlers, add the following to the response object to allow CORS
```JS
headers: {
    'Access-Control-Allow-Origin': '*'
}
```
7. Redeploy the backend using `sls deploy -v`
8. Change into the frontend directory again and start the frontend with `npm start`
9. Open frontend/src/App.js and follow the instructions

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