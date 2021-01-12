AWS.config.update({
  region: "cn-north-1",
  // endpoint: 'http://localhost:5500',
  // accessKeyId default can be used while using the downloadable version of DynamoDB. 
  // For security reasons, do not store AWS Credentials in your files. Use Amazon Cognito instead.
  accessKeyId: "AKIA2FQ7HQ2U5SEYRAEF",
  // secretAccessKey default can be used while using the downloadable version of DynamoDB. 
  // For security reasons, do not store AWS Credentials in your files. Use Amazon Cognito instead.
  secretAccessKey: "x1gHk/tjivXcLYgNmEzcCuTWjkrXs34vCSeSju0f"
});

var docClient = new AWS.DynamoDB.DocumentClient();

function queryData() {
    // document.getElementById('textarea').innerHTML += "Querying for movies from 1985.";
    var desBucket = 'datago-data-kp54z56tiv'

    var params = {
        TableName : "DataReplicationS3Stack-S3MigrationTableB9CEF0C2-11VODGX62SKG5",
        // KeyConditionExpression: "objectKey",
        // ExpressionAttributeNames:{
        //     "#yr": "year"
        // },
        // ExpressionAttributeValues: {
        //     ":yyyy":1985
        // }
        
      //   Key:{
      //     // "objectKey": objectKey,
      //     // "title": title
      //     'desBucket': desBucket
      // }
    };

    docClient.scan(params, function(err, data) {
        if (err) {
            // document.getElementById('textarea').innerHTML += "Unable to query. Error: " + "\n" + JSON.stringify(err, undefined, 2);
            console.log(err)
        } else {
            // document.getElementById('textarea').innerHTML += "Querying for movies from 1985: " + "\n" + JSON.stringify(data, undefined, 2);
            console.log(data)
        }
    });
}

queryData()