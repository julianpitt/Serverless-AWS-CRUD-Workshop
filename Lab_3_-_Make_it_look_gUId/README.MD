# Serverless AWS CRUD Workshop
## Make it look gUId

In this lab, you'll take a half finished react fronted and complete the functionality. This will give you a working frontend to interface with your API.

### Requirements:
- Requirements in Lab 2
- Completion of Lab 2
- Basic knowledge of react

### Outcomes:
- Learn how to update a UI in response to an API Call
- Trigger API calls from a frontend

### Overview:
- Add your API endpoint to the frontend code
- Add CORS support to your backend code
- Fill in the method stubs to complete the CRUD react frontend


### Steps:
1. In your root directory. Create a new directory `backend`


2. Move all our existing work into the `backend` directory

3. Use the `frontend` directory as a starting point for the frontend. This project is the base create-react-app project with a few light tweaks.

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
9. Open frontend/src/App.js file and follow the instructions. Make sure to add your API Endpoint to the top of this file

### References
[Axios](https://github.com/axios/axios)
[Axios with react](https://alligator.io/react/axios-react/)