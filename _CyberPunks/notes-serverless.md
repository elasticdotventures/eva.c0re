
```header
rtfm: _CyberPunks/notes-serverless-framework.md
Author: @b
license: ev-license.txt

UsedBy:  _Bot_Eva
WasUsedBy: various experiments. 
Status: offline & pr0d lambda



```
# Review
npm start
👆 runs `sls offline` port :3000
👆 supports live code reloading. 



# Commands
* Yei can run commands with "serverless" or the shortcut "sls"
* Pass `--verbose` to `sls` to get in-depth plugin info
* 🙏Pass `--no-color` to disable CLI colors and formatting to avoid export suprises.
* Pass `--help` after any <command> for contextual help

Framework
* Documentation: https://serverless.com/framework/docs/

`sls config` ........................ Configure Serverless
`sls config credentials` ............ Configures a new provider profile for the Serverless Framework
🍰 where is this stored?
https://serverless.com/framework/docs/providers/aws/guide/serverless.yml/

`sls create` ........................ Create new Serverless service
`sls install` ....................... Install a Serverless service from GitHub or a plugin from the Serverless registry
`sls package` ....................... Packages a Serverless service

`deploy` ........................ Deploy a Serverless service 
```log dt201907;


# _CyberPunks/Cloud_AWS
EVSecrets -- 

## hapi-lambda-demo
* npm start
curl http://localhost:3000/
curl http://localhost:3000/hello/user
curl http://localhost:3000/health/check
curl http://localhost:3000/health/status
curl http://localhost:3000/health/201





### 🦨 notes: 

# sls deploy
Serverless: Packaging service...
Serverless: Excluding development dependencies...
Serverless: Uploading CloudFormation file to S3...
Serverless: Uploading artifacts...
Serverless: Uploading service serverless-slackbot.zip file to S3 (303.05 KB)...
Serverless: Validating template...
Serverless: Updating Stack...
Serverless: Checking Stack update progress...
..........
Serverless: Stack update finished...
Service Information
service: serverless-slackbot
stage: dev
region: us-east-1
stack: serverless-slackbot-dev
resources: 14
api keys:
  None
endpoints:
  POST - https://8sinkmjl62.execute-api.us-east-1.amazonaws.com/dev/callback
  GET - https://8sinkmjl62.execute-api.us-east-1.amazonaws.com/dev/install
functions:
  callbacks: serverless-slackbot-dev-callbacks
layers:
  None
Serverless: Removing old service artifacts from S3...
Serverless Enterprise: Run `serverless login` and deploy again to explore, monitor, secure your serverless project for free.
/p/eva/bot (master)

////////////////////////////// PRE UPDATE 👇

# sls deploy
Serverless: Packaging service...
Serverless: Excluding development dependencies...
🍰 ^^^ what does this mean? 
Serverless: Uploading CloudFormation file to S3...
Serverless: Uploading artifacts...
Serverless: Uploading service serverless-slackbot.zip file to S3 (303.05 KB)...
Serverless: Validating template...
Serverless: Updating Stack...
Serverless: Checking Stack update progress...
............
Serverless: Stack update finished...
Service Information
service: serverless-slackbot
stage: dev
region: us-east-1
stack: serverless-slackbot-dev
resources: 14

api keys:
  None
endpoints:
  POST - https://8sinkmjl62.execute-api.us-east-1.amazonaws.com/dev/callback
  GET - https://8sinkmjl62.execute-api.us-east-1.amazonaws.com/dev/install
  🍰 ^^^ Is this the same as sls list or was a new endpoint created. 
functions:
  callbacks: serverless-slackbot-dev-callbacks
  🍰 ^^^ where did this come from? 
layers:
  None
Serverless: Removing old service artifacts from S3...
Serverless Enterprise: Run `serverless login` and deploy again to explore, monitor, secure your serverless project for free.
/p/eva/_Bot_Eva/201808-serverless-slackbot (master)
#

```

`deploy function` ............... Deploy a single function from the service
`deploy list` ................... List deployed version of your Serverless Service 
`deploy list functions` ......... List all the deployed functions and their versions
deploy list functions ......... List all the deployed functions and their versions



```log dt201907;
# sls deploy list
Serverless: Listing deployments:
Serverless: -------------
Serverless: Timestamp: 1535332048127
Serverless: Datetime: 2018-08-27T01:07:28.127Z
Serverless: Files:
Serverless: - compiled-cloudformation-template.json
Serverless: - serverless-slackbot.zip
Serverless: -------------
Serverless: Timestamp: 1535334291478
Serverless: Datetime: 2018-08-27T01:44:51.478Z
Serverless: Files:
Serverless: - compiled-cloudformation-template.json
Serverless: - serverless-slackbot.zip
Serverless: -------------
Serverless: Timestamp: 1535336010031
Serverless: Datetime: 2018-08-27T02:13:30.031Z
Serverless: Files:
Serverless: - compiled-cloudformation-template.json
Serverless: - serverless-slackbot.zip
Serverless: -------------
Serverless: Timestamp: 1535336271357
Serverless: Datetime: 2018-08-27T02:17:51.357Z
Serverless: Files:
Serverless: - compiled-cloudformation-template.json
Serverless: - serverless-slackbot.zip
Serverless: -------------
Serverless: Timestamp: 1535337636370
Serverless: Datetime: 2018-08-27T02:40:36.370Z
Serverless: Files:
Serverless: - compiled-cloudformation-template.json
Serverless: - serverless-slackbot.zip

```


invoke ........................ Invoke a deployed function
invoke local .................. Invoke function locally
info .......................... Display information about the service
logs .......................... Output the logs of a deployed function
metrics ....................... Show metrics for a specific function
print ......................... Print your compiled and resolved config file
remove ........................ Remove Serverless service and all resources
rollback ...................... Rollback the Serverless service to a specific deployment
rollback function ............. Rollback the function to a specific version
slstats ....................... Enable or disable stats
plugin ........................ Plugin management for Serverless
plugin install ................ Install and add a plugin to your service
plugin uninstall .............. Uninstall and remove a plugin from your service
plugin list ................... Lists all available plugins
plugin search ................. Search for plugins

Plugins
AwsCommon, AwsCompileAlexaSkillEvents, AwsCompileAlexaSmartHomeEvents, AwsCompileApigEvents, AwsCompileCloudWatchEventEvents, AwsCompileCloudWatchLogEvents, AwsCompileCognitoUserPoolEvents, AwsCompileFunctions, AwsCompileIoTEvents, AwsCompileLayers, AwsCompileS3Events, AwsCompileSNSEvents, AwsCompileSQSEvents, AwsCompileScheduledEvents, AwsCompileStreamEvents, AwsCompileWebsockets, AwsConfigCredentials, AwsDeploy, AwsDeployFunction, AwsDeployList, AwsInfo, AwsInvoke, AwsInvokeLocal, AwsLogs, AwsMetrics, AwsPackage, AwsProvider, AwsRemove, AwsRollback, AwsRollbackFunction, Config, Create, Deploy, Info, Install, Invoke, Logs, Metrics, Package, Plugin, PluginInstall, PluginList, PluginSearch, PluginUninstall, Print, Remove, Rollback, ServerlessEnterprisePlugin, SlStats



