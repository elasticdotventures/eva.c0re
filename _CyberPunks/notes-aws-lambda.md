# AWS Lambda

https://aws.amazon.com/about-aws/whats-new/2018/11/aws-lambda-now-supports-custom-runtimes-and-layers/

You can implement an AWS Lambda runtime in any programming language. A runtime is a program that runs a Lambda function's handler method when the function is invoked. You can include a runtime in your function's deployment package in the form of an executable file named bootstrap.

A runtime is responsible for running the function's setup code, reading the handler name from an environment variable, and reading invocation events from the Lambda runtime API. The runtime passes the event data to the function handler, and posts the response from the handler back to Lambda.

Your custom runtime runs in the standard Lambda execution environment. It can be a shell script, a script in a language that's included in Amazon Linux, or a binary executable file that's compiled in Amazon Linux.


	serverless-slackbot-dev-callbacks		Node.js 4.3	303.1 kB	8 days ago

eva_utils_contactform		Node.js 8.10	1.2 kB	last year

contact-form-api-dev-send		Node.js 8.10	2.2 kB	last month

eva-core-dev-hello		Node.js 8.10	9.7 kB	11 months ago

eva_fb_link	A starter AWS Lambda function.	nodejs6.10	2.4 kB	last year

SecretsManagerac3cd0b9-e1a4-4f5e-a14a-2aaf7d9db5a8	Conducts an AWS SecretsManager secret rotation for RDS MySQL using single user rotation scheme	Python 2.7	76.5 kB	last year

hapi-lambda-demo-dev-api		Node.js 8.10	377.6 kB	2 months ago

serverlessrepo-standard-r-StandardRedirectsForClou-PJRK6J3TA87E	Standard Redirects for CloudFront by Digital 


Sailors via the Serverless Application Repository.	Node.js 8.10	60.1 kB	1 hour ago



hapi-lambda-demo-dev-api
  {
    method: 'GET',
    path: '/health/check',
    handler: controller.getCheck,
  },
  {
    method: 'GET',
    path: '/health/status',
    handler: controller.getStatus,
  },
  {
    method: 'GET',
    path: '/health/201',
    handler: controller.getStatus201,
  }
  