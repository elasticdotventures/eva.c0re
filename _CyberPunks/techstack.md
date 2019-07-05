# Elastic.ventures tech-stack
I'm not even show how to organize this at this point. 

This document is intended to be a thorough accounting of what each piece of software does and where it's documentation is kept. 
Eventually we'll score this 

* CSS "Cascading Style Sheets"
  * -bootstrap 4  we don't use bootsrap.
  * https://acss.io/  atomic css is used for generating atomic stylesheets; but doesn’t play nicely with others. 
  * https://github.com/lucagez/Debucsser - css debugging


* Javascript/Es6
  * node.js event loop
    https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/
    https://blog.bitsrc.io/understanding-asynchronous-javascript-the-event-loop-74cd408419ff
    
  * async programming using callbacks
    TUTORIAL BROKEN
  * 


# EV #pretty specification layer
* digital asset (.svg, .ttf, .wav, .png or .jpg images) integrity 
* future: interface compliance tests; 
!! * verify stylesheets contain required colors; variables work

# EV #prototypes specification layer
* ?digital asset (easyeda pcb design?; supplier checks)
* ?esp32 uses espressif framework; what tests can we do?
* ?platform.io interface to cloud via AWS MQTT or equivalent (tbd)

# EV #ops verification
* verify all directories have a README.md
* verify application loads in test environment

# EV #cyberpunks security review; pci compliance
* cross-site scripting attacks; other automated attacks as appropriate

# EV #red_team accessibility
!! * verify i10l compliance
!! * verify translation

# Channel #dataphiles metric & gdpr compliance

# Development Packaging Layer
* Nativescript code is packaged into Android

?? How is change management done? 

# Distribution Layer
* Cloud AWS 
  * Namecheap Domain Registrar delegates to AWS Route53 Global DNS
  * AWS Route53 authorizes AWS SES and Google as trusted Email providers, designates other tools as spam using DomainKeys and SPF records (secure email)
  * AWS Route53 authorizes AWS Cloudfront Global CDN as "A" record host for www and null host.   The CDN distributes files to the edge of the network.
  * AWS Certificate Manager provides LetsEncrypt certificate (free SSL)
  * AWS Cloudfront Proxies Requests between AWS S3 and AWS API Gateway based on URL 
  * AWS Cloudfront 
  * AWS S3 Bucket hosts static platform files including index.html; and an error handler going to index.html
  * AWS Lambda Functions provide execution


# Services Layer
  * AWS Step Functions https://aws.amazon.com/step-functions/ -- not used. 


# Interface Layer
!! * Google Sheets

!! * Cloud Microsoft? 





Command Line:
https://medium.com/@jdxcode/12-factor-cli-apps-dd3c227a0e46


notes:
Questions - how should the relationship between admin - superuser -- all that will be managed in a slack interface // command line || brilliant!
What are Lambda Layers // AppMesh?



-----



Setup lambda api --







There is no “right” way
There are lots of opinions - which one is right?
The ‘new’ stack vs. ‘old’s stack
The ‘new’ opportunities:  Single Page vs.
Considering the hidden costs // Identifying Winners
Recyclability of a ‘core’
Application maintenance is 96% of the total cost
Understanding Test-driven-development (TDD)
Procedural vs. Object-Oriented vs. Functional & Objective programming patterns
What exactly is “State” of an application
Thinking about “State” as a distributed 
Documentation
Modern Application Components: Cloud & Interfaces
Why ‘Javascript’’ -- can be summed up with two words: “localization” and “i18n”
But what about “python”, “java”, “perl”, blah blah blah
GraphQL vs. API’s
Choosing a “Cloud Infrastructure”
AWS
Google
Azure
Oracle
I really dislike Oracle, on a personal level for their heavy handed and often dubiously-ethical  business practices stemming from Database licensing.  If you are dumb enough to get locked into their cloud, somebody in your organization is probably getting a kickback.  Send a letter your state attorney. 
Choosing a “Router” 

Choosing a “Testing Framework”



