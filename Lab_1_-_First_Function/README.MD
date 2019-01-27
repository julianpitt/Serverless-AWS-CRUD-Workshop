# Serverless AWS CRUD Workshop
## First Function

In this lab, we'll be creating our first lambda function using the Serverless framework and setting up our project.

The Serverless framework abstracts all the hassle of setting up, deploying, and maintaining out functions and their corresponding configuration and events.

## Requirements:
- AWS CLI
- AWS account set up on CLI
- Postman
- Node.js v8.10+ installed
- Serverless framework installed globally
  
## Outcomes:

We will achieve the following outcomes by the end of this lab

- Create a Lambda function using the Serverless Framework
- Locally invoke a function
- Deploy a function to AWS
- Test a remote function
  
## Overview:

Overview of the steps are as follows 

- Create a lambda function
- Locally invoking a function
- Deploying a function
- Cloud invoking a function
- Adding an API to the function
- Testing the API
  
### Steps: Create a lambda function

1. Go to the root folder, e.g. Serverless-AWS-CRUD-Workshop/ and create a new project using the Serverless framework create command where [your service name] is something you call to your service e.g. myTestService. Make sure you do not use special characters like underscore "_".
```
sls create --template aws-nodejs --name [your service name]
```

2. Open the Serverless-AWS-CRUD-Workshop/serverless.yml file. This file contains all the configuration and resources for your serverless project. To tell the serverless framework to use AWS, replace everything in the document with the configuration as follows 

```yaml
provider:
  name: aws
  runtime: nodejs8.10
  stage: dev
  region: ap-southeast-2
  timeout: 30
  versionFunctions: false
```
The configuration above will tell the serverless framework that you want to deploy your service in the Sydney region.
Next, we're going to specify our functions to deploy.
Paste the configuration below under the previous configuration.
```yaml
functions:
  hello:
    handler: src/hello-handler.handler
```
This creates a new hello `Function` with handler method defined in `hello-handler.js` which we will do next

### Locally invoking a function

3. Create a new directory called `Serverless-AWS-CRUD-Workshop/src`
4. Create a new file called `Serverless-AWS-CRUD-Workshop/src/hello-handler.js`
5. Place the following code in that function
```javascript

module.exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Hello world'
    })
  };
};

```
Alternatively you can copy the file from Lab_1_-_First_Function/solution/Task/src/hello-handler.js


6. Test this function to confirm it prints "Hello world" with the serverless invoke local command
```bash
sls invoke local --function hello
```
You shoud revieve 
```json
{
    "statusCode": 200,
    "body": "{\"message\":\"Hello world\"}"
}
```
At this point you can delete `Serverless-AWS-CRUD-Workshop/handler.js` file since we are no longer using it.

### Deploying a function

7. Once you\'ve confirmed the function works as expected, we can deploy our function to our cloud account with 
```bash
sls deploy -v
```
### Cloud invoking a function

8. Test that the function works in the cloud by running the invoke command again, but this time, without the local command
```bash
sls invoke --function hello
```

### Adding an API to the function

9. If you're able to get a response back, congratulations! You've deployed your first lambda function. You can see where your lambda function by logging into AWS console and your lambda functions in the Sydney region.
We now need to put an API in front of it if we want to call it from a website frontend.
Add an API and API endpoint to your project by adding the code under `### Add everything below` to your `serverless.yml` file, under the existing hello handler.
```yaml
functions:
  hello:
    handler: src/hello-handler.handler
    ### Add everything below
    events:
        - http:
            path: hello
            method: get
    
```

10. Now that we've made a change to the `serverless.yml` file, we need to deploy our changes again with.
```bash
sls deploy -v
```

11. After the deployment completes. You should see an api endpoint under `endpoints`. Click on this link to open it in the browser. You can see your deployed endpoint at AWS console under `API gateway` under dev-myTestService and he you can find the API url under Stages->dev called Invoke URL

## Your task

1. Create a new directory under the src directory called `book`
2. Create four new functions in the serverless yaml file:
   - createBook
   - getBook
   - updateBook
   - deleteBook
  
Each function should have the same API event path of `book` but the methods should be:
   - POST
   - GET
   - PUT
   - DELETE
  
3. Create a new function handler file for each of these functions and copy the same code from the initial hello handler.  
4. Change each function's return message and confirm they're all working with Postman. 

### Solution
You can copy Lab_1_-_First_Function/solution/Task folder contents to root folder and run 
```
sls deploy
```

### Testing the API

After you have deployed the book endpoints you can test your work using Postman. Import the `AWS Serverless CRUD.postman_collection.json` into postman. 
- create a new environment called "meetup-book"
- in the environment, define a new variable called "API_ENDPOINT" and assign it to your API URL eg https://XXXXXX.execute-api.ap-southeast-2.amazonaws.com/dev
- Now you can choose any of the function endpoints under "AWS Serverless CRUD" collection and see if it works!

### References
1. [Postman](https://www.getpostman.com/apps)
2. [Serverless Framework - CLI Reference](https://serverless.com/framework/docs/providers/aws/cli-reference/)
3. [Serverless Framework - AWS Functions](https://serverless.com/framework/docs/providers/aws/guide/functions/)
4. [Serverless Framework - AWS Function events](https://serverless.com/framework/docs/providers/aws/guide/events/)