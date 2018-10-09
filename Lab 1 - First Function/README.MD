# Serverless AWS CRUD Workshop
## First Function

In this lab, we'll be creating our first lambda function using the serverless framework and setting up our project.

The serverless framework abstracts all the hassle of setting up, deploying, and maintaining out functions and their corresponding configuration and events
### Requirements:
- AWS CLI
- AWS account set up on CLI
- Postman
- Node.js v6+ installed
- Serverless framework installed globally
  
### Overview:
- Create a lambda function
- Locally invoking a function
- Deploying a function
- Cloud invoking a function
- Adding an API to the function
- Testing the API
  
### Steps:
1. Create a new project using the serverless framework create command
```
sls create --template aws-nodejs --name [your service name]
```

2. Open the `serverless.yaml` file and add the following to the bottom of the configuration file to create a new hello Function:
```yaml
functions:
  hello:
    handler: src/hello-handler.handler
```

3. Create a new directory called `src`
4. Create a new file called `hello-handler.js`
5. Place the following code in that function
```javascript

module.exports.handler = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Hello world'
    })
  };

  callback(null, response);
};

```

6. Test this function to confirm it prints "Hello world" with the serverless invoke local command
```bash
sls invoke local --function hello
```

7. Once you\'ve confirmed the function works as expected, we can deploy our function to our cloud account with 
```bash
sls deploy -v
```

8. Test that the function works in the cloud by running the invoke command again, but this time, without the local command
```bash
sls invoke --function hello
```

9. If you're able to get a response back, congratulations! You've deployed your first lambda function.
We now need to put an API in front of it if we want to call it from a website frontend.
Add an API and API endpoint to your project by adding the following code to your `serverless.yml` file. Under the hello handler.
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

11. After the deployment completes. You should see an api endpoint under `endpoints`. Click on this link to open it in the browser.

### Your task
1. Create a new directory in the src directory called `book`
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

### References
1. [Postman](https://www.getpostman.com/apps)
2. [Serverless Framework - CLI Reference](https://serverless.com/framework/docs/providers/aws/cli-reference/)
3. [Serverless Framework - AWS Functions](https://serverless.com/framework/docs/providers/aws/guide/functions/)
4. [Serverless Framework - AWS Function events](https://serverless.com/framework/docs/providers/aws/guide/events/)