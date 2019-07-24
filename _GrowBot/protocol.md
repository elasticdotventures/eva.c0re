# SOFTWARE v201907

The purpose of this document is to describe in detail the initialization protocols for EVIOTMQTTJSONIPv1
starting at a very high level concepts, and diving down into the weeds.  

Testing Standards; 
starting with MVP “C” the following assertions will be true for any program or part of the system to be codified into what I intend to be a broader company vision & value system for shared module testing and collaboration.  I.e. “does code work or not?”;  i.e. “production ready”;  and so it will eventually deal with mundane implementation details; 
which I assure you probably seem innocuous but if we incorporate these test and verification patterns in both hardware and software; 
the resulting products will be SO MUCH BETTER; but it takes a lot more time to develop a system like that.   



* MQTT :: "Message Queuing Transmission", a misnomer since the eimjip protocol works with more than 
MQTT; HOWEVER MQTT will be the most common (98% of the traffic). HTTPS, and OTAA (over the air audio) 
are both supported in v1 as well. With support for Whisper (bluetooth) in the protocol, but not
implemented in the v1 interface code libraries (i'll explain what that means in a moment).  

🤓 MQTT is 93x faster than HTTP due to the reduced overhead and complexity. 
It is widely supported by firewalls; but HTTP backup should be an option since MQTT may have problems
in the field with various IDS systems or firewall settings.   Falling back to HTTPS then HTTP. 
We can start with either system; but both will be needed for the final verison and should be designed
with a neutral messaging transmission layer.  "LogXYZ" event, with a layered (onion) style which will 
be discussed later. 

MQTT has pretty short specification. There are only CONNECT, PUBLISH, SUBSCRIBE, UNSUBSCRIBE and DISCONNECT types that are significant for developers. 
Whereas HTTP specifications are much longer.  MQTT has a very short message header and the smallest packet message size of 2 bytes. 
Using text message format by HTTP protocol allows it to compose lengthy headers and messages. 
MQTT helps to eliminate troubles because it can be read by humans, but at the same time it’s useful for resource-constrained devices.

MQTT provides a platform neutral cloud interface for asychrononous transmission of messages between 
nodes on a network.  We'll need to work through the authentication; etc. and then get a working
ping/pong while we concurrently define the various GPIO ports and connecting those to sensors.

https://blog.heroku.com/freight-farms-on-heroku
^^^ freight farms could be a future partner of EV. 😉

The ping command is the HelloWorld; should be followed up with a priority "pong" and a replay of 
parameters received on the request.  We will be using MQTT level 1 transmissions; for this reason
a sequence number should be maintained by the application.   

For future optimization of bandwidth; yei will not transmit sensor data that is not changing;
tolerances will be specified on a per-sensor basis; usually ~5% and values will always be transmitted in hex.

The sensor tranmission event loop should maintain an internal state table of each sensor in memory
and the last time a function handler was run; and the next time the sensor needs to be checked.

The goal is to reduce the duty cycle by allowing the device to eventually go to sleep. 

using a golden ratio (fibonacci sequence) with a random() decrement of up to 50%; to create 
spacing for larger farms with many units that are all powered on at the same time. 

in terms of transmitting and backoffs; the next 
response will be 'expected' as the values change. 

[https://github.com/davidyaha/graphql-mqtt-subscriptions]
^^^ there is a mistake at 1:44; he says "IP" when he means TCP.
^^^ note: if MQTT becomes blocked; we will switch to an HTTPS protocol and we should design 
the system to be transport agnostic.

* GRAPHQL :: provides an api query language;  "sql api"; security marshalling layer for 
synchronizing datasets across devices.  GraphQL is the cloud backend behind MQTT. 
GraphQL is a lambda function; that triggers a processing chain of events that generate
a MQTT response. 
[https://github.com/davidyaha/graphql-mqtt-subscriptions]
^^^ this is the library we'll be using. 

* JSON :: JavaScript Object Notation is a way of writing things so they can be easily digested
by any language with a JSON interpreter library (which 99% have these days). JSON is also fairly 
easy for humans to read, and write. JSON can be identified by the starting and ending "squiggilies" 
{} and in between the squiggilies is data called the "payload".  Payloads can be described in smaller
terms as a series of "keys" and "values" which are delimited (separated) by commas.   

A key label describes the data such as { "FirstName":"Scooby", "LastName":"Doo" }
In the example here "Firstname" and "LastName" are both keys.

Values can further be broken down into /types/ which include: integers, floating-point (decimals), 
"strings", ["arrays","of",1,"or","more","comma","separated","data"], and {"nested":{"key","values"}}

ESP32 Json Library suggests "cJSON":
https://github.com/espressif/esp-idf/tree/master/components/json

alternatively we could use .eno; it's a bit more terse. but I think json is probably fine. 

😉🍰 what is the best way to issue/store a device serial number. 

🚀 I suggest we agree on a common schema as soon as possible (but this will probably require 
diving a bit into the types of hardware and systems)

* JSON-RPC: A 3rd level of transport that is more efficient than HTTP; but potentially much less
complex than GraphQL or MQTT. 


## JSON-RPC, MQTT, GRAPHQL 

Ultimately the same cloud data will be accessible; so it's really 
about which one makes the most sense to start with / easiest / compatible with ESP32? 
Espressif libraries. @tim? 🍰🤨


# MORE DETAIL

* DEVICE SHADOW :: 
A AWS pattern that uses a topic based system (MQTT, but neutral) to communicate between a cloud.
[https://iotbytes.wordpress.com/device-shadows-part-1-basics/]
My intention is to try AWS;  but Google offers https://xively.com/ and microsoft has an MQTT service
as well. 

🚀 The term "SHADOW" refers to the digital representation of an object in a state machine. 
In a self driving car, or a smart-city there is a state engine with records which coordinates the sensor data.
For example an autonomous car will take sensor data; apply image recognition "shadows" of people, cars, bikers, dogs,
off-ramps, etc.   Digital shadows are scary in dystopian places like China which track individual citizens.

* LIN NETWORK
The protocol defined in this document prior to transmission to the cloud 
will receive telemetry data from subsystems via a LIN network; 
https://en.wikipedia.org/wiki/Local_Interconnect_Network

The idea is that new modules (future sensors) can be added to the LIN network making the system
extendable.  LIN is limited to 20kbps; and variable length 2, 4, 8 byte data frames; up to 40m.
I think that means roughly a 2 or 4 digit command sequence; but I don't really u

🤓 EV is advising a 31m loop + 3m height maximum for complete LIN bus including hoist. 
Using this theory; a single GrowBot could monitor up to ~100sq/meters (or 300 cubic meters) 
of growable space per unit; or 10 units per square kilometer on a rail.
^^^ NOTE: The same unit could just as easily be drone controlled;

* SLUG LIN CONNECTED SUBSYSTEMS CHIPSET
Subsystems to the slug will be operating the STM32F103 chip; software will need to be developed
that can response to a 4 byte PING command with 8 byte PONG identifiers for each sensor in a subsystem.
(and a single subsystem may have multiple sensors)

# Internal state table
The SLUG with ESP32 processor software needs to maintain an internal state table since power on.
state table and eventually time series samples will be recorded from the state table to create 
moving averages on the device for trends and alarms.   (The idea is to be proactive, not reactive,
by putting tolerances in the config; we can check those and notify the cloud which takes the heavy
lifting in terms of notifications off the device). 

The state table should be kept in memory and also be periodically written to the flash card
along with errors (as they are logged); and critical alarms. For now we won't worry much about
debouncing alarms.  Debouncing an alarm makes it only trigger once in a set timeframe; 
there are all sorts of rules regarding this.  

For now let's assume we'll transmit everything; but long term we will want to suppress that;
and regardless the cloud could always compensate by pushing down a more restricted monitoring profile. 

The state table should probably be structured in our heads like a windows INI file; 
topics and key=values; it would be fine if it was written that way -- but I think JSON is
probably best since that will be the closest to the native format on the cloud and we don't
want to convert between formats if possible.  So it's JSON; but structurally organized like 
an INI file; data is stored grouped by topics, with scoped key-value pairs under each topic. 

The keys are unique to the subsystem; and a single STM32F103 actually be responsible for 
multiple subsystems based on it's role.  (For example; it might have many sets of lights)
in that case we will use an iterator starting at zero for #0 config messages.  

The idea here is that a single bus; while restricted to 16 devices; we can pass through. 
This just seems like the most expandable way; here is some psuedo code of how I see the state
table;  some values are read from the config.json during POST; and others are set by sensors
reporting; and others (such as environmental telemetry alarms and timers) are received from the cloud. 

```
{
    "cfg": {
        "v":"0",
    },
    "net": {
        "ssid":"xxxx",
        "pass":"xxx"
        "link":true, 
        "dns#0":"1.1.1.1", 
        "dns#1":"8.8.8.8",
    },
    "temp": {
        ... 
    },
    "sled": {
        "position-x": 0, 
    }
    "hoist": {
        "position-z": 0
        "moving":false, 
    },
    "pump": {
        "gpio":"##",
        "power-level": 0xFF, 
        "next":""
    },
    "led#00": {
        "model":"xyz", 
        "about":"
        "power": 0xFF
    }, 
    "_tasks()": [
        // this might be different than the format above .. due to the leading _; and keep sensor schedules; things like that. 
        // in a text parsable format. i.e. our own emulation of the event stack;  unless there is a better way to do this in a development library?
        // i'm thinking something like this: 
        [{'due-time','id','verb','sensor','createdby'::}]
    ]

    }
}
```
^^^ The idea is to keep it clean and readable; no complex  if (varType->[0]->[x] code); just make everything fit into simple logic tables. 
^^^ these are samples; the idea is that we have sample data files in this repo (as we move forward) and those become validations 
^^^ the nice piece here is the 'v':0   "version 0" and version will be required;  found or created will be logged. 

The statetable will be kept internally in a RAM based state table that is periodically transmitted.
Despite having cloud scale resources; we still want to try and be efficient in our protocols since these
will have a direct impact on the monthly data center bills (AI farms aren't cheap); so we 
ideally want to get to the point where we're only transmitting changes and keepalives. 

# TX the config on a crash; we'll log on server. 
Avoid dumping the whole config on every update; that's only on a fatal error a crash.
Write the whole config to an analysis log file. Crash dump. 
We will need to agree on the crash dump format since it will be recorded on the cloud.
I'm planning on using aws x-ray, handbrake and maybe a few more for crash recording in the app.

# Error Handling & Testing
Error codes (if possible) should be modelled after the old AMI BIOS beep codes; and also could be displayed 
in a morse code pattern using the LEDs; R2D2 sonic tranmission.

The idea is that we have a permanent forever list of checks and codes; it starts by chirping it's firmware release;
then the error code for that firmware version.

# Alarms & Warnings are NOT errors
Alarm is a situation where the system cannot sleep; usually this will be an environmental factor in growbot;
but the concept of an alarm and how to transmit them in a situation where reliability of signal is not guaranteed
will directly determine how robust the system is; i.e. 'rate of retransmission' for that reason I propose:

Alarm and warn conditions should be maintained in the state table. 
I.e. "every alarm has a unique hex code" the hex codes are allocated per system;  (we'll define this more later)

When a sensor is in alarm condition it triggers an immediate notification; and retransmits until acknowledged. 
    ^^^ note: this is ACK by cloud; NOT ACK by farmer. 

# Free vs (Enslaved) Professional AI models
When a sensor is in alarm or warn condition it's reporting frequency will increase linearly (1, 1+1, 2+1, 3+1)
When a sensor is normal condition it is reported at a fibonacci decay. (1, 1+1, 2+2, 4+4, 8+8, 16+16) 
until reaching a maximum of once per hour; but it probably makes more sense to do configurable data granularity
i.e. "once per day" for up to three plants is the free subscription (with ads); 
and the future 'pro-commercial' version might "records 5 minute intervals" (increased resolution) is paid. 

NOTE: there will be two software versions; but i'm not 100% certain which features will be in either. 
Our goal is to balance the free vs. paid models; for commercial growers who want more fine tuning (and more 
control knobs, faster updates, more at risk, quorum analysis, deadman trigger failsafes, etc.) opting to pay
and that providing a residual revenue stream for the device; while still allowing the company to sell these
so inexpensively that anybody who is hungry can afford one. 

🚀 I suspect in practice very few sensors will ever reach this state of equilibrium; since we're designing closed loop 
climate monitoring with feedback.  Long term this might (via the cloud) talk to a nest thermostat or smart power company
to decide when the optimal time to turn on is.  This will enable the growbot to be sold as part of smart grid packages.
^^^ future; obviously.  

🚀 In the first build(s) we should focus on just getting a system up and dumping information to the cloud. 
The software will improve with time; but I hope 

💀 Warning: Running a GrowBot in error or warning state may reduce the life of the electronics
and increaed bandwidth consumption due to the excessive telemetry logging; increased power consumption.

What we really want are opportunities for the main ESP32 to power down for short periods of time to reduce
it's CPU load; the goal of the system is actually to be idle (I call this the lazy farming approach).

?? I have no idea; to be discussed.  Let's not leave this for last; let's use the error handling
as an intercept (i.e. embed a tap inside the error handler to run our test cases) so sending 
an invalid command.  

# Power On Cycle
When the ESP32 initializes; 
* look for SD card; 
* BUS PROBE
    Attempt to detect other subsystems via LIN Bus: 
    * LIN ping target:*
      JSON: {"v":"ping", "target":"*"} ??
    
    Response:
    * LIN pong HoistMotor
      JSON: {"v":"pong", "iAm":"HoistMotor", ... }
    * LIN pong SledMotor ...
    * LIN pong Pump ...
    * LIN pong Lights ... 

* config.json   - contains setup; sensor config. 
```json
{
    "v":1, 
    "_GrowBot/Slug": {
        "id":"serial #", 
        "model":"sluggy-d1", 
    }
}
```
👆 in a perfect world I'd like to transmit that data via LED lights on the device.
this seems like a bit of a chicken and the egg problem; 


* crashdump.log - a datestamped list of transmitted messages; even those that weren't sent. 
    YdoyHHMMSS\tRX\tMESSAGE\n




If no config file is found; then it should emit (note: emit is a fancy word for 'run' or 'execute') 


# Sensor map
It's hard to know how many models we'll have at the end -- I'm still worried LIN will be insufficient.
To hedge our bet; yei should design the ESP32 and STM32F103 protocols so they support both LIN & CAN

At first we'll assume everything is a model D.
but we should probably design with a config file approach rather than embedding constants
into the software.   The config file is stored on the device's SD card and contains things 
like the wifi password; 

# Commands
* ping
* measure(SENSOR) 
    - lookup SENSOR definition; 
    - recall last-value from state table
    - review warn, alarm min/max
    - review warn, alarm change ~5% 
* moveTo(x,y,z) - coordinates movement the rail home is "0,0,0" 
* record(); 
* config()  

# Javascript
The cloud stuff will mostly be done in javascript; so the file formats need to be compatible with both C and JS;
which means probably JSON is best.

If you are new to Javascript and programming a few notes (google is a great 'more info' reference)

** ROCKET NOTES: 
Don't sweat all the types etc., remember JSON rules:
* always start and end with a squiggly {}   (like 'C')
* spaces outside of the "data" are ignored, 
* commas are important, especially inside "quotes" or "outside", "are" different.
* The case (UPPER-OR-lower) of "keys" is also important (ex: "FirstName", "Firstname", "firstname", "firstName"
are all different). 
* Computers are very precise and sometimes humans have trouble with that level of attention to detail, missing
squigglies, incorrect comma placement, and improper case are 90% of the most common things people get stuck on
in their first projects. 

^^^ EV attempts to mitigate (reduce) errors by using editors such as visual studio code with intellisense
which will detect errors. 

There is a bit more to Javascript (but not much), it is beyond the scope of this document (google it). 
One thing about Elastic protocols is that they will tend to be very "flat" with few nested javascript 
structures. Nested structures do not export well to CSV / Excel spreadsheets and have less complexity.   

* Interface :: also called an "API" or Application Programming Interface, is a point of delineation 
where two systems meet.  A way of sending command instructions and receiving results. 

🚀 ** ROCKET NOTES: 
API Interface designs are my speciality, it's a super-power of mine, from assembler, up to the brain of the 
user at the screen, technology is buit in layers, and I've worked with all of them.  

For example the asthetic  design of an application is called the "User Interface" or "UI" for short.  
An API is an interface that is designed for software-to-software communication, there are no mouse buttons, 
or fancy animations it's simply:  send json to "interface", receive back json response.  I can explain all the layers
behind that make the network operate as well. 

*** ROCKET NOTES ABOUT EIMJIP: 
 "eimjip" is a 'meta-interface' protocol which means it can be used to 
connect many different types of systems together [meme: ALL YOUR BASE BELONG TO US], 
a single message may pass through many systems being wrapped in layers like a smelly little onion.  
As such eimjip is a bit more complex, but it is designed to be put into libraries 
(reusable packages of program code commands and utilities) allowing us to 
improve, enhance, and expand over time without redesigning the whole system. 

For a non-technical user/customer service user - once you understand eimjip you'll be able to diagnose 
literally any 
part of the system that speaks it, and you'll see simple protocols like people who speak in clicks
and whistles, which somewhat ironically is a feature of EIMJIP (speaking in clicks and whistles,
more on that later). Using libraries means re-using existing code that is already tested and 
known to be working, new features or utilities added expand the overall library (like adding books
to a real library) making it smarter and more powerful but also bigger and slower to load). 

*  Protocol :: means a 'set of rules', which is literally this document. it defines what everything
means and how all the pieces.  For non-programmers you can probably use the word "protocol" and
"program" interchangeably, basically a program is just a set of instructions, add this, put 
this text here, go to this URL, execute this command and put the result here. 

** ROCKET NOTES: A protocol is rules saying what should happen.  That might also include how 
to handle errors // miscommunication (ex: detect it, retransmit, 3 attempts, then log detailed error
and show the user a "pretty" message).  
The distinction between a large scale and small-scale 
application will often be how errors are handled. A well engineered Elastic application will 
have built in diagnostic routines, versioning to facilitate upgrades, and comprehensive 
documentation and reasonable automated-quality-test code checking before going live.  
Most companies don't build these into their first versions, and spend years going back 
re-adding them. 

--------------------------------

Alright, now you're ready to jump into EIMJIP:

pronounced "emm-jyp": the universal language spoken by our devices when they talk to eachother. 
the final "a" in "EIMJIPa" is lowercase, for acronym, or abstract.  
This pattern of characters is very "grep"-worthy and will be one of a dozen different international 
trademarks we'll use to protect our intellectual property.

I hope you enjoy "eimjip" 

EIMJIP can be "spoken" (audio), "whispered" (bluetooth), "blinked" (using LED's), 
or "intertubed" (https, or mqtt over wifi). it is the same protocol, there is only one.

** NOTE: both growpotbot and robovend ONLY require "spoken" and "intertubed" libraries to be finished
for MVP ("Minimum Viable Product"). 

All devices will have a "program" (or "Learning" mode) where they can receive new instructions.
this will be controlled with a "learn" switch which must be set "on" for the system to receive commands.
when learn is in the "off" position the system is considered in a "read-only" state.

data structures in this file will be presented in { "JSON":"FORMAT" }, if you aren't familiar with JSON
it is an acyronym "JavaScript Object Notation" and 


REGISTRATION PROTOCOLS

# GOALS: r2d2
r2d2 is our chirp protocol; 
EIMJIP OTAA SOUND TRANSLATION (base64)  A-Z,a-z,0-9,!@#$%^&*()/
{
}


