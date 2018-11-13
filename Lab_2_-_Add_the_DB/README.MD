# Serverless AWS CRUD Workshop
## Add the DB

In this lab, we'll be adding a DynamoDB database and write the code in our functions to interact with the database.

### Requirements:
- Requirements in lab 1
- Completion of lab 1


### Outcomes:
- How DynamoDB operates and how to use the AWS SDK
- How to create a DynamoDB table using CloudFormation
- Using environment variables in the Serverless framework
- How to debug using CloudWatch
- How to use Postman for CRUD based operations

### Overview:
- Create a DynamoDB database
- Create the insert function
- Test the insert function locally
- Create the read function
- Test the read function locally
- Create the update function
- Test the update function locally
- Create the delete function
- Test the delete function locally
- Deploy all functions
- Test functions remotely
- Debug the issue using CloudWatch
- Fix the issue and redeploy the functions

### Steps:
1. We need to create a DynamoDB Table so we'll need some more CloudFormation
Paste the following in your Resources section:
```yaml
BooksTable:
  Type: AWS::DynamoDB::Table
  Properties:
    TableName: ${self:service}-${self:provider.stage}-books
    AttributeDefinitions:
      - AttributeName: bookId
        AttributeType: S
    KeySchema:
      - AttributeName: bookId
        KeyType: HASH
    ProvisionedThroughput:
      ReadCapacityUnits: 1
      WriteCapacityUnits: 1
```

2. Deploy the new DynamoDB table with `sls deploy -v`
3. Now that we've created a new table we need to allow our Lambdas to communicate with the table.
   Instead of hard coding the table name we're going to use Environment variables to pass the table name
   To the lambda functions
  In the providers section add the following
```yaml
provider:
  name: aws
  runtime: nodejs8.10
  environment:
    BOOK_TABLE_NAME: ${self:service}-${self:provider.stage}-books
```
4. Now that all our lambda functions have this environment variable
   We need to get it
   Test out the environment variable in the Create function by saving it to a variable and outputting it
```javascript
  const tableName = process.env.BOOK_TABLE_NAME
```
5. Now we need to pull in the aws sdk to allow us to communicate with AWS resources in our code
   Go to the root of your directory and run `npm init -y` to create a new package.json file
   Then run `npm -s install aws-sdk`
6. Now we should create a library that handles all our dynamo actions for us so create a new directory in `src` called `lib`
7. Copy over the book.js file into the lib directory
8. Link up the handlers to the appropriate lib/book method
9. Fill in the missing TODO's in book.js
10. Test our all your functions

### References
[AWS Dynamo DocumentClient API](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB/DocumentClient.html)
[Serverless Framework Creating resources](https://serverless.com/framework/docs/providers/aws/guide/resources/)