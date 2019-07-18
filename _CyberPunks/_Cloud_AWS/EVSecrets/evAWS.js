/* 
evAWS

interface to all things EV + AWS
 -- this might get eventually get broken into sub-services; but for now this is fine. 

  let gs = await evAWS.getAWSSecret("prod/vtiger")
  .then( (x)=>{
    // console.log('main',x); 
    return(x); 
    } )
  .catch(console.error);

*/
'use strict';

exports.getAWSSecret = async (SecretId) => {
    /*     let r = await evAWS.getSecret("prod/vtiger");
        return(r);
     */
    var AWS = require('aws-sdk');
    var region = "us-east-1",
        secret,
        decodedBinarySecret;
    
    // Create a Secrets Manager client
    var client = new AWS.SecretsManager({
        region: region
    });
    
    let p1 = new Promise( function(resolve,reject) {
        let x = client.getSecretValue({SecretId},
        (err,data)=>{
            if (err) { 
                if (err.code === 'DecryptionFailureException')
                // Secrets Manager can't decrypt the protected secret text using the provided KMS key.
                // Deal with the exception here, and/or rethrow at your discretion.
                throw err;
            else if (err.code === 'InternalServiceErrorException')
                // An error occurred on the server side.
                // Deal with the exception here, and/or rethrow at your discretion.
                throw err;
            else if (err.code === 'InvalidParameterException')
                // You provided an invalid value for a parameter.
                // Deal with the exception here, and/or rethrow at your discretion.
                throw err;
            else if (err.code === 'InvalidRequestException')
                // You provided a parameter value that is not valid for the current state of the resource.
                // Deal with the exception here, and/or rethrow at your discretion.
                throw err;
            else if (err.code === 'ResourceNotFoundException')
                // We can't find the resource that you asked for.
                // Deal with the exception here, and/or rethrow at your discretion.
                throw err;
    
            // everything else is a reject
            reject(err); 
            }
    
            var r = null; 
            if ('SecretString' in data) {
                secret = data.SecretString;
                r = secret;
            } else {
                let buff = new Buffer(data.SecretBinary, 'base64');
                decodedBinarySecret = buff.toString('ascii');
                r = decodedBinarySecret;
            }
    
            // TODO: check for valid JSON.
            r = JSON.parse(r);
            // console.log('getSecretValue Response',r)
            resolve(r);
        })
    });
    
    let r = await p1;
    
    // console.log(r);
    return(r)
    };

