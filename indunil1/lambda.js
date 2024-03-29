let AWS = require('aws-sdk');
const sns = new AWS.SNS();

exports.handler = function (event, context, callback) {
    sns.publish({
        Message: 'checktest',
        Subject: 'test1',
        MessageAttributes: {
            '1': {
                'DataType': 'String',
                'StringValue': 'abc'
            },
            '2': {
                'DataType': 'Number',
                'StringValue': '10'
            }
        },
        MessageStructure: 'String',
        TopicArn: 'arn:aws:sns:us-east-1:318300609668:TestSNS'
    }).promise()
        .then(data => {
            // your code goes here
        })
        .catch(err => {
            // error handling goes here
        });

    callback(null, { "message": "Successfully executed" });
}