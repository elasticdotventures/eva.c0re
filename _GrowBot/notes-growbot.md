
GrowBot : robot contenedor de cultivo

Related Documents:
CAD files:  
https://cad.onshape.com/documents/25a8c07f740a142456e75a9a/w/7141350cd52e6f56236dfefb/e/926b91712b65901056fac3ad
Needs revisions due to 3 LIN wire configuration; currently 4 wire CAN
Replace GBPI connectors with automotive 3 pin and wire gauges for 5v. 

Slide Deck:
http://bit.ly/elasticventures-growpotbot

Original Business Plan Concept (obsolete)
[https://docs.google.com/document/d/1yc40f-2bAT1PHWPuw5Kjon7FpP9khWAvrAZfCo2ZH3A/edit#]

Earlier Revisions
MVP A (obsolete)
🦨 [https://docs.google.com/document/d/1LgiFVHFWSE1na5NtCoHCOSXM-eUPyGu3x6_61xXtoSk/edit] 

MVP B (obsolete)
🦨 [https://docs.google.com/document/d/1d_j0_PmCoj4SQjCngVlhwKP6mr3o_HrShNq4TvaQqxs/edit#] 

The Adventures of GRowBOT (a non-technical “style” and UI guide // needs revisions)
[https://docs.google.com/document/d/1MFW5G_-u5K8SVERlzvUBFsMYYdzspyCP8rpH8wEUjfA/edit#heading=h.w413exagw8ou]

Supplier Spreadsheet:
https://docs.google.com/spreadsheets/d/1ggYgUUJMrzTTMUF3Na7Uw0QZiaTDA4n-RFVyKsAn-Hs/edit#gid=2037530597

MVP D :  this document (authorative as of dt201907 @b #compliance)

hardware
STM32F030F4
main: https://www.st.com/content/st_com/en/products/microcontrollers-microprocessors/stm32-32-bit-arm-cortex-mcus/stm32-mainstream-mcus/stm32f0-series/stm32f0x0-value-line/stm32f030f4.html
tutorial: https://www.youtube.com/watch?v=T5MBKtjZDtg
info: https://datasheet.lcsc.com/szlcsc/STMicroelectronics-STM32F030F4P6_C32908.pdf
buy: aliexpress; https://lcsc.com/product-detail/ST-Microelectronics_STMicroelectronics_STM32F030F4P6_STM32F030F4P6_C32908.html


circuit diagram(s)
http://www.circuitdiagram.org/24v-to-12v-converter.html

🍰 we need to design some of these on custom PCB's so yeI can work on the cases; certain tests are currently infeasible.
hardware: Need to develop OV2640 or equivalent camera interface, get working with espressif framework.

🚀 !todo need to work on wifi setup and boarding routines in software with @tim . 

@tim 
We will need a mobile app to interact; this will be done in nativescript; using vue.js. 
Please install the [install.md] in the root of the repo to access the chocolately scripts. 
I'm suggesting we start there; at the provisioning step -- open to other ideas how to chip away at this iceberg. 
I'm happy to use the github issues system if you'd like to create some project management and timelines; or maybe that's a bit premature. 

Defining the protocols that will be used; 
how the system will work from the ESP32 software; and then move out to the other systems which will hopefully run on STM32F103's for the edge.
The goal is to have a million of these things in the field and not be overrun with support issues; even if we take shortcuts "get it working"
we should try to adhere to a scalable pattern as much as possible; use and develop libraries when available. 

The various subsystems in growbot break into Lower/Middle/Upper/sections; and the SLUG is in the middle. 
The middle section is the SLUG; which has the WIFI; etc.
🐌 (it's a slug because it moves around the container on a rail).  The final shape will depend on the sensor configurations; 
but generally will be flat with a OV2640 camera connected to the ESP32.  

🚀 My assumption is we that using 4 or 8 GPIO pins yei could multiplex 128+ low bandwidth sensors; 
but I don't explicitly know how to do that. 
The GPIO for sensors if we need to (and yei probably will need to); but we can start with simple 
GPIO and add the muxing as the complexity grows.  
It's just important to consider having a source of truth for all data.

In that sense; github provides the RCS "Revision Control System" for our designs.  My primary concern right now is doing some
interop testing with the PCB file formats to design them in a way we can validate them later using something like:
http://ngspice.sourceforge.net/

In that sense; we will end up developing both a position system and a movement system (with GPIO switches to detect environment). 
The whole system will be connected with a LIN (Local Interconnect Network); the STM32 and ESP32 both support LIN as a low bandwidth serial protocol; 
and as much as possible we'll want to use that serial protocol [protocol.md] 

# Current status // Recent Changes

# 201907
🚀@b I can experiment until October 1st; after that I'm offline for a few months; until I'm in the USA. 
I'm suffering from knowledge fatigue; too many specializations.
Electronics in the prototypes aren’t even CLOSE to ready; no delivery yet from #touit but happy to have @tim just joined the project. 
Given the recent lack of progress; we missed the July 1st as the new project “drop dead date”; but perserve regardless. 

I’m already receiving pressure to start contributing and getting a regular office job; it is not fair for Wendy to support me indefinitely.  As such; everybody involved is on notice. 

I will continue to chip away on my own; but I really expected a much higher level of contribution from everybody involved.  If you aren’t sure what YOUR role in this is; then let’s chat. 

@colin - in our last conversation on 20190125 - you proposed two high level changes:
Replacing the CAN bus with LIN (Local Area Interconnect) due to price & complexity
Implementing small embedded processors (STM32f030F4 ) in the upper, lower, and sled assemblies.

# HOW MANY WIRES?

My thoughts: 😄 Yes; these are good changes .. of course; they requires some non-trivial rethinking of the existing physical models; doh! So the bad news: 😱 The 3 to 4 wire; has a ripple effect through the entire project; i.e. a non-trivial # of the cad designs will need to be rethought and/or torn down to handle a processor and we’ll treat this new major revision -- accordingly this document is named “MVP C” which I’ll try and hobble together over the next few days; into a cohesive “it does this; it doesn’t do that” -- honestly the electronic designs are lagging. @colin and @dvizma; 

 i’m going to add a lot of detail to newer pieces about the software as well.  If you (or anybody reading this) has any last minute changes - this would be a great time to share them -- i.e. it’s MVP “Final”; later modifications will require hardware to be rethought.    There are a number of future systems I’d like to mark as “FUTURE 🚀” i.e. we need to leave traces and pins for some experiments.    I’m going to use this opportunity to chat about how I see the automated testing & assembly line verification process workflow;  I can feel this project is really close to the production transition but there are still a few concerns as well. I’ll put a  🍰 in front of those which are outstanding or where you specifically see your name (i.e. @colin) if you can CTRL-F for that correct; revise; etc. those are the areas where I would like to focus our next conversation. 

@Colin: so you mentioned “a stage” in your workflow where you could the files over to a person named “chi?” (assistant?) for “tracing” 🤔 -- would you be okay with trying to find a way to share-collaborate on a circuit design at the layer you’d hand it off to “Chi”;  🤣


My goal for each of these upcoming revisions is to create a basic module + inventory + sketch of each module i.e. I think ‘these pieces’ when connected ‘this way’ will do ‘this (or these) things’.  
Assuming you are on board with this -- what tracing software would you recommend we use to accomplish this?  Let’s get a time on the calendar for a 1:1 training session “how you do this task” 


# Lower Assembly
* Flow meter; water level sensors for the bucket
@colin - shouldn't cost much to fabricate a water level that would test water and flow.

GrowPotBot is a new product; people don’t search for it.  Even if they see it online; people will want to see this before they buy it; so a physical presence is critical in my opinion (and I don’t think it will be difficult to market it to different shopping channels).  We should be working directly with large retailers like Home Depot; etc.    If we intend to be stores for Xmas 2019 instead of 2020 we need to able to use FoMo. 

We break up the world by region; i.e. “US; Europe; Asia” for now. Vendors 

@Fabio; semi-automated Call Center Script “ARCHER”  
This is a script for a call agent; or possibly for all call agents but selectively i.e. a break from the day to day.  This is silly but I think it could work - if you can do your part in the game. I.e. approaching business with gamified theory.  First; Archer - “boop”; this is “beep boop” (say it with me);
https://www.youtube.com/watch?v=C6NRA69SdoM

Call Center Agent -- on Repeat Loop; day after day. Hire based on creativity, improvision, and enthusiam skills test. Being behaving like a robot. A person; with a small bit of coaching.  The script: A human denying they are a robot. 
The script is simple (and short): Hello I am hoping to reach the head of purchasing for your company; do you know how I can reach them?    
(We can also do this via email; sms; targeted advertising; etc.) 
For call center agents we tell them there is a “don’t call” back; and they must mark that with a “beep boop” for the integrity of the recording. 
If the customer inquires about the noise (and ONLY) if the person on the other end of the call does not ask them about 

At that point the agent can explain they have 
Hello; I am looking for ($person i.e. your head of purchasing; the head of purchasing) can you assist me?  Hello I am hoping to reach the head of purchasing for your company; do you know how I can reach them? 

^^ Just 

I am calling on behalf of Mr. Fabio Chechin with Elastic.Ventures; would it be possible for me to setup a meeting with you two?










Narrative Development :: Hydro vs. Aero
In a zen moment - I feel like saying that as I personally search for a place in peoples homes; to put a device that is useful and not part of the clutter; in fact by having it it reduces clutter.  The system could easily be adapted in a variety of ways.  First off; I’m not a pure aero-ponic guy; the fact is that soil does add flavor that liquid fertilizers can’t deliver.

Narrative Development :: scented fertilizer (optional? I.e. fart 

 and the different styles of growpot’s I eventually arrive at the ways this space could be used. 

Electronics

@Colin: what is the name for 

Older version(s):




Sled on rail (X) & Hoist  (y) movement
Input(s):   24vdc, 1 lin bus
Physical concerns:
 🍰 Realistically this is a small piece; it should be lightweight.  It will be fully enclosed and moving so I’ll probably put some airfoils on it to try and move air across it.   The incoming 24v current from the tinfoil tape wiring bus are going to be very scary; please plan accordingly and rectify/clean up signals as much as you can.
Microprocessor: STM32F03
Controls: 
Hoist Motor: 
Qty 2x ULN2003 stepper driver for x-y movement
Qty 2 motors 28BYJ-48-xx; 12vdc load of 0.5a ~ 2a.
🚓One called “hoist” which moves the unit up and down
The motors have either a 5 or 6 pin wiring harness
Upper Assembly
Microprocessor: STM32F03
Input(s):   24vdc, 1 lin bus
Major Features:
Open Sesame; Shazam; sound plus motion sensor.  4 pins;
Power sensing i.e. how intense are the lights; measures current draw and reports as signal. 🍰 what type of component does this?
Curtain Controller (NOT FINISHED)
Driver will be a ULN2003 
Motor will most likely be a 28BYJ-48-xx motor (same as in hoist & sled)
Components: DHT11
[C0] Automatic Light Curtain Motor (optional module)
Needs a 12vdc connector to power a small motor that can open and close a curtain.
[C1] & [CR2] Curtain Relay 1 & 2; 
two wire switch connectors to detect position 
LIN INPUT:   UA__ 
TXC1
LIN OUTPUT:
[] Temperature & Humidity
Access a DHT11   (long term this might upgrade to a DHT22)
Recorded in 5 minute increments; but only transmitted once per hour unless outside of allowed operating parameters.   
Temperature and humidity should ideally be in the upper assembly near the fan.  
Accuracy: I think +/- ~0.5 degree should be fine; Doesn't need to be super precise.




Lower Assembly
Microprocessor: STM32F03
Input(s):   110v/220v A/C
Output(s):   24vdc
Role: power supply & pump controller & future *OPTIONAL* bucket sensors (ph, float, heat cool and flow)
Components
Remote [PROG] “Program” diagnostic button
12vdc pump switch
Design Considerations:
Compartment EF (Electronics) should house all 110v/220v components safely; heat may be a factor.  
Diagnostic lights should be placed logistically near buttons. 
Will have an external ON/OFF switch and power cord that is 46mm x 20mm.  For the “clip” we need 1mm around that (50mm x 22mm) the plastic will need to be 1mm thick so the power connector can clip in.  It’s an a IEC 60320 C13/c14 style connector which is not part of the mold, but part of the assembly.   The power switch is wired to the power supply, the power supply is wired to the PCB. 
Both the power supply and PCB itself will be mounted on standoffs
The power supply will be roughly 32mm height & 60x85 and the rear of that will have the wires that connect to both the power switch AND the PCB.   (the power supply is a 12v transformer).   
GrowBot brain
Microprocessor: Esp32
Input(s):   24vdc, 1 lin bus
Sensors: 
🎥CAM1 : Ov2640 1600x1200 with FPC connector.
@B TODO: I need to simulate the image stitching on my side over here using similar lighting to determine if the quality will be suitable.  (Follow up; this seems pretty straightforward). 
Optional:
Motor gyro control 12v 2 GPIO.  
Will generate a roughly ~5,625k bitmap
I will integrate the camera into the design of the lower assembly EF compartment so it’s a really short  ~10cm cable to LA PCB (with an ESP32S chip) 
BOTH CAMERAS ONLY FOR IMAGE (NOT VIDEO) ACQUISITION
DOES NOT NEED TO OPERATE SIMULTANEOUSLY
Cameras need to be able to auto-focus; or have some initialization routine
Need to develop an auto calibration protocol (probably using QR codes of known images) 
NOTE: I may revisit my position on storing raw images vs jpeg after I finish testing.  Currently I am planning to store raw images. 









Sensors:


[STORAGE]
I guess we’re going to need someplace to store images and data before they are transmitted (or while the network is down)
I would prefer to do this on chip; or in RAM (not NVRAM) if possible
The entire amount of data ready to transmit will be like < 32mb
@dvizma I know you would prefer Flash SDCARD slot and I’m probably fine with that too if it’s much easier; especially for prototypes. 
[PROG] Button
There should be an external button called “PROGRAM” when it is pushed in and the system is powered on then system should start it’s initialization “program ready” mode;  see Program Button Interface
R2d2 Audio Subsystem
[SPK1] Onboard Speaker
Mounted in lower assembly near button. 
[MIC1] Onboard Microphone
Needs to support “Program Sequence” (described in IOT software)
Think “Fax machine” to transmit via audio the wifi; genetic profile; operating parameters.
Could potentially also use bluetooth; but that’s rather complicated and buggy on a lot of phones.  Audio would be cheaper and opens the door for other features in the future features like a ‘cuckoo clock’; 

Potential for devices to discover each other; and communicate in a mesh using audible or in-audible (ultrasonic) communication. 
[FV1] Float valve  (optional module)
Determines level of water in the tank
External “fluid” display
[MS1] Moisture Sensor (optional)
Detects flow of water from pump to roots
a three pin connector for future moisture sensor; or PWM flow meter on pump. 
[HEAT] Heater (optional module)
Needs a 12 vdc connector to power a small heater
[COOL] Chiller (optional module)
Needs a  12vdc connector to power a small fan + heat sink (radiator)
Expansion relay sensors, etc. 
Future optional connectors and sensors
PWM based chemical “Ph” sensors
Relay controlled microbe killing UV light
External Motion sensor;  i.e. behave differently if a person is in the room.
Yes, a PIR sensor would work fine; it’d be best if we just had a few general purpose I/O pins and maybe a 5v connector on the upper assembly to plug into and send commands to the cloud.
Would be nice if it had a DIN jack for amplified WIFI speaker integrated with POT. 

Upper Assembly
Requirements:  
CAN Controlled; 24vdc Input
12v Fan
on / off
Would be nice if it could be reversed? (optional; future)
Dual Phyto COB LED 12v - constant current with software controllable intensity (off/low/med/high)
Dedicated LED Board
H2.54mm connector
Qty 2  -- 2.4v - 2.6v x 3 red led
Qty 2 - 3.6v x 3 blue led
Currently using a YP-026-1 PCB; 32mm round slugs which have 3 LED’s each however I’m strongly considering replacing these with SMD3035 or SMD2835’s on four custom PCBs with 6 LED’s per board (giving us 24 red & 24 blue)
LHT11 (or equivalent)
temperature & humidity sensor 
Motion Sensor
Light Sensor
External Lights (optional)
Qty 3 external lights; 


Note: I’m HOPING for ~“SDCARD” size; or possibly two SDCARD sized PCB’s connected by a 4 wire (GBPI) cable? 
GBPI IN & GBPI OUT
Dupont or H2.54 connectors -- not surface mounted RJ11 (for the PCB)
The GBPI (GrowBot Power Interface) - which is 24v +/-  (pins 1 & 4) and two pins to the CAN network (pins 2 & 3)
The PCB will need:
Buck converter from 24v to 5v (for qty 2x motors)
Logic to address as CAN bus slave from the ESP32 processor
Detect “i.e. is unit present -- perhaps a loop with a clock?”
QTY-2 switches (probably optical - detect “black vs white”) 
One that detects “HOME” (H.254 connector) on the upper rail
This is a piece of black tape/sticker on the bottom of the rail. 
One that detects “END OF LINE” (H.254 connector) on the hoist cable
I’m planning on using a white cable and having the end have some black tape on it. 
I’m thinking something like this sensor: 
https://www.aliexpress.com/item/Smart-Electronics-New-for-Arduino-Diy-Smart-Car-Robot-Reflective-Photoelectric-3pin-IR-Infrared-Obstacle-Avoidance/32462888575.html
But the sensor itself doesn’t need to be on that board; i.e. the motors are on a loop; and they just need a way to detect an arbitrary “HOME” position. 
The sensor would NOT be included on this PCB.

We need the ability for the ESP32 using the CAN bus to send commands that select (address?) the motor (sled or hoist) + specify direction + include either a power or duration AND the ability for the ESP32 to send another “interrupt; stop moving signal” (i.e. “endstop reached” triggers the hoist motor to stop immediately)
We need the ability for the ESP32 to receive the following signals from the board: 
“Is home?”; true/false  (for sled motor)
“Is End Of Cable”; true/false (for hoist motor)
Last completed command (this could also be used for diagnostics?)
In all cases if either “Home or End of Cable” is reached then all other movement commands on that motor should cease immediately; it ideally shouldn’t wait for the ESP32 to relay that command. 
If we go brushless -- non stepper; then I’m fine if the motor(s) always receives the same amount of power; but it’s important that if (via CAN) we say “move 300ms forward” that’s it receives the same amount of power during each 300ms interval;  but it’s not important if 600ms is double the 300ms value -- if that makes sense i.e. time doesn’t need to be linear; because I will calculate the time it takes to complete a loop.  The more clues we can have about our position; distance; blah - the more accurate and easier it’s going to be build reliable software -- your feedback is appreciated!
From a protocol standpoint -- if there is a ‘maximum movement’ of > ~3 seconds (or whatever) that would be fine; it doesn’t need to move fast -- we’re growing plants.   In the current design there is a pulley with an elastic band involved so it’s not super precise; I suppose it could be replaced with a GT16 timing belt.
If possible from a protocol standpoint -- a high and low speed (power) would also be terrific.  It would obviously be better if it was able to continually move; and in both directions (up or down; and side to side) at the same time -- but neither are technically /requirements/ ... just nice to have. 
Pins
The PCB is going to need 2 PINs to each motor;  (4 pins total) for brushless; and I think 5 pins per motor for the 28BYJ-48-xx (so 10 total) if we go that route. 
4 pins for GBPI IN/4 pins for GBPI out  (NOT RJ11 - just H2.54 or dupont style is fine)
2 pins x two switches (4 pins total)
Please pay attention to the orientation of the pins; i.e. assume somebody who is high and/or drunk is putting this together. ;-) 
I wouldn’t be opposed at all to some micro LED lights which indicate the status of the pins -- if you build that; then we can build a test protocol for the boards using a camera. 
It’s possible in the future that we might have multiple SLED’s on a single loop
Each unit would need to be addressable; i.e. have a 2-pin DIP setting or jump of 0-3 or something like that - with the default “master unit” being all 00’s and two 11’s being “test mode” -- tbd (not required)
We would be two extra switches (front and rear collision)
I have a version in my head which is able to do pruning and possibly kill pests using magnets to “link” two addition sleds and then move like a kossel printer; the cloud based neural network would be able to simulate this using the amazon (aws) robomaker https://aws.amazon.com/robomaker/;
This would also let us add additional and different intensity of lights; which since they’re on a loop could move around the plant.  So there’s quite a few applications if we have the ability to address a unit. 
Can all this fit inside a PCB the size of an SDCARD; or could you guesstimate the amount of room I’m going to need to allocate for this.  Trying to keep everything small and lightweight. ;-) 



[PROG] Program Button Interface 
The lower assembly power supply has one switch (red; for power) and one button (blue; for program).   Push to reset and initialize in diagnostic program state for 30 seconds; if no commands are received - then dump a configuration tone. 

The program button is housed on the bottom of the lower assembly in a recessed area;   the command to reset is send over the LIN bus there should be another “hard” program button in the actual growbot as well.  

The logic for the reset is in the growbot control unit microprocessor; the lower assembly simply records button push and duration and transmits that via LIN. 
 
Long Press: 
enter program mode; attempt to pair; emits a diagnostic beep code (like a fax machine)  [see Over the Air Audio Programming]
Short press 
If there is an audible alarm; one press of suppresses the alarm.  That is all.  
If no alarm (or alarm suppressed); a short push triggers a diagnostic; 
Produces something like the early PC BIOS beep codes
Using long and short codes; these could potentially be transmitted over the phone to a tech support center (or mobile app; chatbot) for diagnostics. 
Flashes external LED lights to match beeps. 
Attempts to send a current snapshot to the cloud; receive a new program.


RE: CAN vs LIN - 
Okay, yep I'm on board.
Three wires; is better than four. LIN bandwidth of either 2.4kbps or 19.2kbps is sufficient for our needs and I think I can whip up a serial protocol that is pretty straightforward (I want to put some thought into the logging & diagnostic aspects).

Resources:
https://hackaday.com/2017/05/26/embed-with-elliot-lin-is-for-hackers/
https://en.wikipedia.org/wiki/Local_Interconnect_Network
https://en.wikipedia.org/wiki/Local_Interconnect_Network

the lack of tutorial videos about LIN is concerning; but I’ve read the protocol documentation and I think I understand it.  The LIN stuff isn't remotely as well documented using my normal methods of learning.    Most of the LIN stuff (except NXp) isn't available grey market -- but I suppose that's fine; i.e. there’s lots of components on Mouser and DigiKey that I can’t find anywhere else. 

According to the article - “The Microchip transceivers that I’ve seen run down to 5.5 V, while the ones from NXP and Melexis run down at 5v”; I’m going to assume we’ll use 12v and so those are all same:same (best price?);  assuming we’re using an STM32F04 the digital IO’s are 2.4v ~ 3.3v -- so my assumption is that we’ll need some type of level shifter to convert the IO pins to 12v.  

I'll start on a redesign of the rail(s) and it will be much smaller / better with three wires; specifically the hoist will be much better (i’ll be using a 3 ring; 5 spring tension design). 
I’ll look into other 3 wire locking connectors; probably something from the automotive space.


Questions about LIN:


LIN v1.3 vs LIN v2.0 -
Byte array up to 8 bytes on LIN v2.0 (i will assume v2.0 unless told otherwise)
How does each LIN slave know what it’s “ID” is?  I.e. that a frame is intended for a device?
Protected identifier
Is “Object oriented” i.e. frames specify their target; and each target knows what it’s ID is.
So … it’s not really 16 devices; it’s 16 objects.
What is the maximum payload of LIN; i.e. a MASTER sends a frame to the SLAVE the SLAVE responds; in the examples it’s always a header, 4 bytes of payload, an a crc -- according to the specification it is 1 to 8 bytes. 
How will we use the “GO TO SLEEP” command?
Sporadic Frames?
Mandatory node configuration commands?
What are “diagnostics is added?”
A LIN Product identification for each node is standardized?
What is a Node Capability File (NCF) and how do we generate one?


I assume we’ll need some sort of Voltage Regulator for the transceiver?
The voltage regulator supplies the application and generates the MCU reset signal. The LIN transceiver is the physical line interface between the SCI (Serial Communication Interface) TDI and RDO pins of the microcontroller and the LIN bus line. The microcontroller handles the LIN protocol and the application functions.
MCP1703-3302E/DB  10 @ $3.20  "Fixed LDO Voltage Regulator"
LM317MBSTT3G  10 @ $5.60   "500ms AdjOut Positive Voltage Regulator"
MIC2951-02YM  8-SOIC   10 @ 2.42  "micropower voltage regulators"

RE: Processor

the STM32f030F4 seems like a great fit. it's cheap; and it's a tiny TSSOP20 package; that feels like a winner for the motor driver's, etc.    it totally makes more sense than trying to implement that into discrete logic if we want to get a product to market this century.   The Amtel/AVR would be another suitable choice - but I’d rather have all our units use the same processor(s).  STM8S might also be suitable as an MCU. 

Reference:
* https://www.st.com/en/microcontrollers/stm32f030f4.html

I'm thinking we'll end up with three processors in the Upper Assembly; Lower Assembly and the Hoist/Sled assembly.  I'll move the curtain motor and sensors so they plugin to the upper assembly.  I.e. we can encode a lot of data in very small payloads. 

LED’s

For LED's, I’m still trying to figure out how/what we want to control.   We should NOT use PWM 

Will we need something like a STP16CP05TTR  "Low Voltage 16bit constant current LED sink driver" in addition to; or in lieu of a processor?  it seems like that takes serial in; so can it be connected directly to a TJA1020T? Or L9637, L9638 (STM version) -- seems the TJA1020T is best fit-price (10 @ $2.95) package is SOT96-1 supports LIN 2.0, wake & sleep modes. 


I don’t think we’ll need any level shifters; a 74HC405D? ($0.15) 

Components:
* TXS0108E:  1.2v ~ 3.6v => 1.65v ~ 5.5v





Reminder: Areas with 🍰 desire your attention; please contribute comments. 






Business Plan Bla-Bla

The initial market is a residential “home” client, we’re maknig a home ‘garden appliance’;  however the system is designed so that the same GrowBot units can be applied in a commercial setting -- it’s just not the focus on day #1 (too hard to sell until we have awareness).   

In a commercial setting instead of using a 12v pump to provide nutrients for one plant; the system could connect to a 12v relay switch; and turn on/off a pump of any size in a industrial grow tent off the same controller; keeping cameras on only one plant ‘inspection’.  GrowBot is the future of urban farming; we get the economy of scale and accurate data models from the residential clients and eventually the commercial farmers (who are much slower to adopt new technology) will pick up on this because of the efficiency. 

GrowPotBot is intended to be a retail-class aeroponic controller as such we will need to have sensors collecting data once per hour transmitting that the cloud for analysis.   The market for these are GLOBAL; and the software and interfaces will be designed to work in multiple languages in the first revision. 

The electronics footprint is intended to be very simple; small; and slow.  There are no immediate plans to deploy machine learning models to the actual device; instead it will transmit all it’s data to the cloud where the logic will be hosted and let the cloud send back operating parameters.   This will allow the cloud to crunch much bigger machine learning models and leave a lightweight electrical footprint on site.    No need to ship that much ‘iron’ (hardware) to the customer beyond the sensors and relays. 

If you want to to talk about lowering the price, improving delivery; field reliability; those are open topics. 

LA - lower assembly, a plastic decorative (no electronics) piece which provides fertilizer; technically the PUMP and sensors are integrated into the LA; but controlled through the PSU.   This will likely come in many shapes and sizes based suitable for the plant types.  Also has a circular CURTAIN rail. 
MA - middle assembly; this 3 ½” pvc pipes called AB, CD, and EF.  which attach to the Lower assembly and form the infrastructure.  The EF pipe carries the GBPI (telephone cord).  There is also a CURTAIN RING at the top and BOTTOM; which matches the fabric UPPER & LOWER CANOPY (to prevent light from escaping)
UA - upper assembly;   upper lights; fan.   This is actually two pieces the “ceiling and roof”; which come-pre assembled.

Our secret sauce:

I’d like to sell a few million of these GrowPotBot units, and to do that I need to consider a lot details about shipping, packaging, and assembly to control “hidden” costs and hit the price point.   The lower assembly brings together a wide variety of irrigation (AquaTech) and electronic systems, it must be able to be packaged (with the upper assembly) into a small box for lightweight shipping and minimum space in retail stores. 

A lot of the design tweaks i’m going to ask for are designed to control assembly and packaging costs. I.e. it’s more work for you -- but increases the durability and decreases assembly and support costs. #sorrynotsorry  I’m intending to use plastic injection form molding to create an integrated system of shapes that snap together off the shelf components easily and inexpensively, in a durable fashion.  




Errata
ANTI-CIRCUMVENTION

We will use the mac address on the device to create a serial number using an hmac for the version and linked to a master account.  The serial number is a scratch off style; generated on a label printer output by the test.   The initial prototypes won’t have that restriction.  The microcode will check the license file and avoid reverse engineering the algorithm that generates the license.  I.e. we need a way to sign the key;  i think this is simply a sha-256 



http://bit.ly/elasticventures-r2d2

NPK Sensors
[NIT1] Nitrogen sensor
NOTE: this really needs to be an NPK  (Nitrogen, Phosphorus, Potassium) sensor; which doesn’t really exist in a “LAB ON CHIP” format at this point which can reliably measure TDS (Total dissolved Solids) and Ph Level.  
Commercial units start at around $600. 
I’m still working on this part of the invention; there’s quite a few ways we can ‘guesstimate’ the values in software by tracking fertilizer inputs.
That might include a chemical test kit that comes with the fertilizer; or just an approximation of efficacy based on our tests.  
I need a way to measure the nitrogen; ph; and other aspects of the fertilizer to determine their effectiveness.  I need to research how to do this. 
https://www.aliexpress.com/item/Liquid-PH-Value-Detection-detect-Sensor-Module-Monitoring-Control-For-arduino/32371896246.html
I think it requires this electrode: https://www.aliexpress.com/item/BNC-Electrode-Probe-Connector-Hydroponic-for-PH-Aquarium-Controller-Meter-Sensor/32451849114.html
MQ-5; i’m hoping I can use this to somehow measure the nitrogen in the liquid fertilizer (or at least approximate it)
CJMCU-4541
MICS-4514
MICS-6814
@WOW these are like $9-$12 each. 














Software (in progress)

NICE (not required) Features:
* Esp should have ability to anticipate power demand; reduce lights intensity. 

Internal Logic: 
MQTT over HTTP (or equivalent) bi-directional communication channel
Transmits events to cloud (actions completed; acknowledgements)
Deadman switch on cloud will catch unacknowledged events. 
Transmits captured images with environment telemetry data
Receives instructions
New program; fan speed; light settings; duration; period of operation  
Track time of day; logging of events
Alert Event Conditions
Loss of Wifi
No Server Communication for more than 12 hours
Sound
Ability to load custom sound files (i.e. custom alarm ‘themes’) from cloud;  this would allow us to trigger themed alarms (which will be popular with consumers).   


License?
Attribution?
WaterLine?
Sails.js?


Admin
Genetics
Dwarf Cannabis
Farmers
Farms
GrowBots

Register a Farmer // website?
Link to fb, blahblah AWS Incognito
Country / Language
First, Last name, Email, Password
Register a Farm
Farming Style: Commercial vs. Hobby
Name the Farm
Farm Wifi Config

Farm View
Active GrowBots
Add GrowBot
Stage: 
^^ starts with a “baby flower”

GrowBotView
Status
Reset


Goals: 
Read QR Code
Display QR Code in app


Aws amplify

Going to need some cms? Strapi.io?

TypeScript?
Vuetify?
Nativescript vs. Capacitor vs. 
VueNative => compiles to ReactNative


python /home/gru3h/esp/esp-idf/components/esptool_py/esptool/esptool.py --chip esp32 --port COM3 --baud 115200 --before default_reset --after hard_reset write_flash -u --flash_mode dio --flash_freq 26m --flash_size detect 0x1000 /home/gru3h/esp/hello_world/build/bootloader/bootloader.bin 0x10000 /home/gru3h/esp/hello_world/build/hello-world.bin 0x8000 /home/gru3h/esp/hello_world/build/partitions_singleapp.bin






Update 2019-01-12
@colin - read this section after the 2019-01-10 update please! 

Upon further testing -- it seems the 5v N130 motor may not have sufficient locked rotor torque for the curtain motor (and possibly the hoist & sled motors as well; depending on the final weight); so I’m looking at other motors now.  The 28BYJ-48-xx series stepper motors seem like they’ll almost certainly do the job; they come in 5v and 12v flavors and either 1:16 or 1:64 resolution; they are used primarily in HVAC applications and known for their mass availability and durability.   The ULN2003 controller is also really well documented. They’re about 2.5x the cost of the N130 brushless. 

Let’s assume we’re going to use and ULN2003 driver instead of the N130.   I’m going to do some more testing with the N130; it might still work -- love those motors they’re only $0.30ea!  The ULN2003 will drive both -- 28BYJ-48-xx will be around $1.50; in total we’ll need a total of three motors - one for x; one for y; and one for the curtains. 





Overview

All “FUTURE” references are included; but considered out of scope for the MVP.  






Functional Description of Components:
GBPI  (GrowBot Bus Power and I2C Interface)
We will distribute the power throughout the system using the GBPI
Standardized 4-pin RJ11 analog telephone connector. 
Example: https://www.aliexpress.com/item/10PCS-Lot-RJ11-socket-RJ12-telephone-90-degrees-4pin-crystal-female-4p4c-socket/32770459264.html
RJ11 Pin 2&3 CAN bus
RJ11 Pin 1&4 24VDC  (+/- respectively)
*If we use a 6 pin; the middle two pins will always be I2C; to avoid putting 24v into a phone jack; i.e. ‘some jackass is going to plug this into a phone’
If we need additional power in future models we can move to either a 6pin or RJ45 8pin variants and the legacy connectors would still fit. 
RJ11 uses 24AWG cable and connectors are relatively cheap and heavily shielded hopefully boosting reliability; additionally they lock into place which is nice (and important for the LIFT module)
Industrial designers and modder hobbyists will most likely already have familiarity with RJ45 and be less intimidated i.e. it’s one of the few worldwide standards we can depend on. 
In the GBPI each sub-system will receive 24vdc and then step down to the current it needs using inductors for efficiency (step down bucks?) am I saying this correctly? 🍰
Power efficiency is important and I’m thinking it’ll be more efficient to push 24vdc through the internals of the system and then step it down to 1.8, 3.3, 5v or 12v as we need to. 
I don’t think this will add a ton to the cost and it really cleans everything up in the design and future expandability -- For example -- to simplify aspects of the design -- I’ve dropped the internal lights in the curtain; but I’ve left a GBPI connector for them on the UA RAIL. 
yes; I know the acronym should be GBBPI2CI but GBPI is just easier. ;-) 
https://en.wikipedia.org/wiki/I%C2%B2C
🍰The total wire length for the system is:
+2.5m from PSU to UA (24AWG)
+2m from UA to GROWBOT   (24AWG)
+~2m (2mm copper foil tape and a copper washer)
Example: https://www.aliexpress.com/item/1-Roll-3mmx30m-Single-Conductive-Copper-Foil-Tape-Strip-Adhesive-Shielding-Mask-High-Temperature-Tape/32833930501.html
There’s also some various RJ11 connectors; probably ~16
I need to prepare a list of all the SMbus addresses to make sure we won’t have any collisions. 


Power Supply Unit (PSU)
CAD Drawing: https://cad.onshape.com/documents/25a8c07f740a142456e75a9a/w/7141350cd52e6f56236dfefb/e/e8f869d81b2111068759ccc1
For logistical reasons I’ve split out the power supply to it’s own box that attaches to the outside of the Pot/Bucket.  The PSU connects to the ½” PVC strut labelled “EF” which is drilled so that a GBPI cable can be passed to the upper assembly; and a 12vdc 5.5x2.1mm DC power connector can be sent through the lower assembly to the pump (hiding the wires).  
It’s safer & easier to move electronics outside the Lower Assembly (which is now purely a decorative irrigation and infrastructure support piece)
This will make the GrowPot design task for independent industrial designers much easier since they won’t need to deal with any electronics; only RJ11 phone cords. It also means the LA designs can be much more experimental and produced much faster.  I.e. “Growing towers” of berries and things of that nature. 
The PSU hides it’s cables by running them into a ½” PVC pipe; into the upper assembly.   BUT the same cable could also be zip tied to a piece of bamboo; or easily integrated into a any number of plastic strut styles.  I’m using ½” 15mm PVC because it’s readily available and cheap. 
24v 6a power supply in a custom enclosure giving us roughly ~100w of power
NOTE: I don’t have complete power requirements yet; this is a back of napkin calculation; but at this point I’m thinking actual usage should be < 100w; but effective output will be closer to 150w of light per plant.
🍰 Not sure if we should design our own 250/110ac power supply or just buy boards pre-assembled and connect to our own PCB in our own enclosure?  Can buy 6a-24vdc for ~$6 USD ea. 
Also for expansion; I’m wondering if it makes sense to go with a 6 pin RJ11 connector and have a spare 24v @ 6a 
🍰 PSU internal PCB Requirements (minimal I2C interfaces)
I2C Controlled PUMP relay @12vdc via external round 5.5x2.1mm Female DC connector.
GBPI for connector to UA & LIFT and supplies OUTPUT 24vdc @ 6a to the bus. 
Fuse protected, optional GFCI (i’d really love to avoid killing anybody and have these be safe enough for a childrens room; i.e. a “WALL-E” inspired model)
FUTURE modules (below)
SUPPORT FOR “FUTURE” modules
FUTURE modules are intended to deliver additional revenue once the installed base is large enough to warrant their development. 
FUTURE: An I2C PH Sensor (2 pin DUPONT connector)
https://www.aliexpress.com/item/Liquid-PH-Value-Detection-detect-Sensor-Module-Monitoring-Control-For-arduino/32371896246.html   (need to figure out the probe)
FUTURE: An I2C FLOAT switch sensor (2 pin DUPONT) to detect fertilizer PH levels.
FUTURE: An I2C MOISTURE switch sensor (2 pin DUPONT) to detect blocked fertilizer emitters.
FUTURE: An I2C NPK sensor (2+ pin DUPONT?) -- does not exist yet; no time to build right now.  Follow links for more detail; but basically it is a micropump and a clear glass tube that receives fertilizer;  it has several different wavelengths of LED’s which pointed at the tube; that is projected (possibly through a prism) onto a white background; the GROWBOT camera looks at the projection to determine the chemical composition of the fertilizer. 
FUTURE: An I2C Heater which warms the fertilizer and prevents the plant from freezing; i.e. “a radiator”
FUTURE: An I2C Chiller which uses a heatsink + fan to “water cool” the plant. 
For the “FUTURE” expansion modules; we just assume we’re going to provide qty-2 I2C pins; an qty-2 voltage pins which could be 24v or something smaller like 5v; or possibly with Physical DIP settings to make it switchable between 5v and 12v.   Alternatively; one or more GBPI interface with RJ11 splitters would also work.    I listed the sensors in the order I expect them to be available. 

Lower Assembly (LA)
RESERVOIR
No electronics; passive piece that distributes fertilizer from PUMP
PUMP is 12vdc
Formerly called the LNP (Lower Nutrient Pump)
Connects to the round 5.5x2.1mm DC power connector
Power Consumption: ~8w @ 12vdc
https://huaxiajinfeng.en.alibaba.com/product/60707033758-805640685/AISHANG_Brand_high_quality_8W_12_volt_v_dc_mini_Submersible_Solar_rotor_Water_Pump.html
CAD: https://cad.onshape.com/documents/25a8c07f740a142456e75a9a/w/7141350cd52e6f56236dfefb/e/926b91712b65901056fac3ad
LOWER CANOPY
Is a decorative cloth piece that attaches to the BUCKET (using elastic) and hides the mechanisms inside.  It connects to a LOWER CURTAIN RAIL.
LOWER CURTAIN RAIL
Guides the curtain along a circular path (similar to a track for a closet door; but along a circular path.)
Comes in 3x 120 degree segments.
A passive component.
FUTURE: Uses a GBPI interface from the LOWER PSU and provides embedded lights; currently this adds too much complexity to the manufacturing process.  I.e. “sewing around electronics == not fun” but could add both internal and external (decorative) lighting. 
Middle Assembly (MA)
EF Strut  (and AB, CD struts)
PURPOSE: The EF Strut runs the GBPI (telephone) cable from the LA to the UA.   
ASSEMBLY: 7 pieces per strut (21 total); with the EF requiring a cord to be run internally. 
EF is technically the only REQUIRED strut;  But in the current design there are also struts AB & CD (reflecting their orientation along the LA & UA hexagon faces)
🤓 Strut EF is actually not required; as the UA could be suspended from the ceiling; and the LA on the floor with simply a GBPI telephone cable run in the wall i.e. which is appropriate for a built-in hanging wall mounted GROWPOT. 
In the LA
Connects to RESERVOIR
Delivers the 5.5x2.1mm 12v DC power for the PUMP.
Provides support (with AB & CD struts) for LOWER CURTAIN RAIL
In the UA 
Breaks out the GBPI interfaces in the UA to connect the RAIL & CEILING+ROOF (hiding the cables)
Provides support (with AB & CD struts) for UPPER CURTAIN RAIL. 
MA CURTAIN
The CURTAIN is physically an inner reflective layer glued to a outer fabric; with minimal chamfering to make it fold.  
The bottom 


The GROWBOT will either be connected to the SLED; or UA; or both (to achieve a xyz movement) 

The curtain is fixed on an outer rail track; it’s custom plastic and designed to match a GT2 timing belt for each gearing internally. 
The curtain is moved by the SLED. 
TBD -- but either using a magnet or physical nylon arm (currently testing different mechanisms; waiting for parts)
I’m still working through the mechanics of how to build this; design is no complete yet. I am using models from automated curtains. 
PCB
Is OPEN?
Is CLOSED?
MOTOR driver (*looking for opinions)





GrowBot (GB)
CAD:   
Attached to the SLED or CEILING (TBD)
ESP32 w/Cam $6.99
https://www.aliexpress.com/item/ESP32-CAM-WiFi-Bluetooth-Module-Camera-Module-Development-Board-ESP32-with-Camera-Module-OV2640-2MP
https://www.espressif.com/sites/default/files/documentation/esp32_datasheet_en.pdf
According to this document; any GPIO pins can be used for I2S
🍰 TODO: need a PCB design which includes
GBPI connector (surface mount)
12v step down for clippers
5v step down for ESP32
1.8v x 3 (red led)
3.6v x 3 (blue led)
Female Dupont Headers for ESP32 w/Cam 
HC-SR04 UltraSonic Range Sensor
LED “Headlight Ring” white full spectrum light
DHT22 Temperature/Thermostat & Humidity
R2D2 // Speakers, Microphone & Program Button
OPTION: 12vdc GPIO PIN for Clipper
OPTION: 12vdc GPIO PIN for Rocket





Upper Assembly (UA)
Consists of multiple physical parts that come out of the box and must be assembled via screws or zip ties.  
UA CEILING
PURPOSE:  Lights
Lights
LIFT connector. 
MVP E; needs a redesign to incorporate GBPI - issues with bridge. 
https://cad.onshape.com/documents/25a8c07f740a142456e75a9a/w/7141350cd52e6f56236dfefb/e/bb5bed5b077f4af89458411c
UA ROOF
Fan Mount
Carbon Filter
Design status: IN  MVP A; printing issues. 
https://cad.onshape.com/documents/25a8c07f740a142456e75a9a/w/7141350cd52e6f56236dfefb/e/bb5bed5b077f4af89458411c
UA CANOPY
Made of CURTAIN fabric, reflects phyto lights back down and prevents light leakage. 
Attaches to UA ROOF & UA RAIL
Design status: NOT FINISHED; pending UA RAIL
UA RAIL
This piece is still a bit “fuzzy” (not fully defined) - I’ve done a few designs; continually simplifying - not happy yet.   I’m waiting for a few mechanical pieces to arrive before finalizing.   
Assembly: 3 Physical 120° pieces called AB, CD, and EF that can be joined together using screws or zip ties.   EF Rail contains additional GBPI connector and I2C switches for detecting SLED via a physical switch or photoresistor (TBD). 
The Rail internally has qty-4 2mm Foil tape and copper washers with compression spring loaded feet to connect GBPI from the Upper Assembly to the EF Rail.   Allowing the RAIL to be a BUS and connecting the SLED+GROWBOT to move along it. 
https://www.aliexpress.com/item/1-Roll-3mmx30m-Single-Conductive-Copper-Foil-Tape-Strip-Adhesive-Shielding-Mask-High-Temperature-Tape/32833930501.html
https://www.aliexpress.com/item/100-20Pcs-10-14-1MM-Copper-Sealing-Washer-Solid-Gasket-Sump-Plug-Oil-For-Boat-Crush/32890174556.html
CAD (RAIL style  B)
https://cad.onshape.com/documents/25a8c07f740a142456e75a9a/w/7141350cd52e6f56236dfefb/e/360da7b01eaecfa44e421a6f
CAD (RAIL style A)
https://cad.onshape.com/documents/25a8c07f740a142456e75a9a/w/7141350cd52e6f56236dfefb/e/5de506bcad7da8e9fac7901a
🍰 TODO: PCB
GBPI interface (from PSU)
GPBI interface (to LIFT)
GPBI interface (to CURTAIN)
The RAIL is separate from the UA; connected by a GBPI interface.
The RAIL needs to prevent light from escaping both vertically and horizontally; and will connect the CANOPY to the ROOF. 
UA SLED
The SLED fits inside the RAIL track.  It moves; it’s like a little slot car.    At this point I’m not sure if it will use an N130 motor or a Stepper motor.  It will MOST LIKELY use the same motor as the LIFT;  technically the LIFT might also appear on the SLED.
The SLED provides a GBPI interface at it’s bottom; and that is the cord which is connected to the LIFT and used to suspend the GROWBOT. 
UA LIFT
PURPOSE: The LIFT provides the GROWBOT with vertical (Y axis) up and down motion. 
Attaches to the SLED (below the RAIL)
HOW IT WORKS: The GROWBOT is a suspended by an RJ11 telephone cord; it is rolled up using a small motor and switches to indicate that it has reached the top or bottom. 
CAD:https://cad.onshape.com/documents/25a8c07f740a142456e75a9a/w/7141350cd52e6f56236dfefb/e/c74147e8c40acb1e86531a51
🍰 TODO: need a PCB
GPBI connector
N130 motor or https://www.aliexpress.com/item/5pcs-4-wire-2-phase-DC-Micro-stepper-motor-step-angle-18-Degree-with-output-gear/32391079830.html
ULN2003 (if we need a stepper?) 






The new plan with MVP B is to design an enclosure that goes top to bottom; with round edges.
So it’s not a hexagon; it’s a half circle on either end; and other extension units could be added.

Trying to figure out how to make it a powerbar; and add an upper rail that the growbot runs around; the growbot is losing a camera; and getting two servo motors that raise and lower it; along with a distance finder for 3d visualization  -- it’s now able to move up and down; and most of the logic can be centralized near the controller; which will be very lightweight (hopefully); 

The growpotbot will be hung from either a powered two or four rail system (right now we’re planning on 4 rails but hoping we can run CAN over the power and just use two rails; this same design works with both two and four rail configurations.  
Metal rails (especially bent ones) are super expensive until we’re ordering by the container; I’m hoping to use durable molded plastic; at least for the first 500 units.  The most sensible decision would be to use existing LED track light designs and simply design our own connector; i.e. how the robot moves from one rail to the other will be a concern;  currently i’m thinking something more like a slot car or a spring or piece of bent metal; all these will need to be sourced and assembled -- quite a nightmare. 




As far as the GPB itself; there is an upper piece I’m calling the “sled” which a small pully and a motor for raising and lowering the GPB.  The GPB will be raised and lowered by something like paracord; and using a screw drive. 

3.3v to 5v logic level converter
https://www.aliexpress.com/item/10PCS-IIC-I2C-Logic-Level-Converter-Bi-Directional-Board-Module-5V-3-3V-DC-Module-For/32848861724.html

How difficult would it be to build something that was like 48v? Looks like it makes more sense to run a 16awg or 18awg cable up to the top at 110/220v to avoid a massive loss of DC voltage -- does that make sense? 

I2C Communication
ISO11898 

Each curtain needs to have a way to register; i.e. to know that it needs to move it’s motor; and some sort of button saying it’s fully open i.e. a “switch” ; if we have extension 

CAN notes:
https://docs.espressif.com/projects/esp-idf/en/latest/api-reference/peripherals/can.html
http://www.iotsharing.com/2017/09/how-to-use-arduino-esp32-can-interface.html
http://www.ni.com/white-paper/2732/en/
http://www.ti.com/lit/an/sloa101b/sloa101b.pdf
ESP32 is SJA1000 COMPATIBLE
$0.50 // SOP28 only
TI 
http://www.ti.com/lit/ds/symlink/sn65hvd230.pdf
TMS320Lx240x controller
Can’t find details or pricing?
TMS320D is the chip in a tesla
SN65HVD230  SN65HVD231QD SN65HVD232QD
SN65HVD230DR = sample  ordered breakout boards x3
SN65HVD230D = pkg. 75
SN65HVD230DR = pkg. 2500
Replacement for PCA82C250
~ $0.50 ea
For use with TMS320Lx240x
1mbs 
10 @ $2.74 SOP-8
SN65LBC031
UC5350
MicroChip
MCP2561/2FD
https://www.youtube.com/watch?v=RXsL8f3vnCY
MCP2561FD with SPLIT pin & MCP2562FD with VIO pin 
Optimized for CAN FD (Flexible Data rate) at 2, 5 and 8 Mbps Operation
ordered breakout boards x3 


MCP2515
https://www.microchip.com/wwwproducts/en/en010406
Standalone CAN controller with SPI interface CAN v2.0B
Packages: 18 LEAD PDIP/SOIC, 20 SOP, 20 LEAD QFN
https://www.aliexpress.com/item/MCP2515-CAN-Bus-Module-Board-TJA1050-Receiver-SPI-For-51-MCU-ARM-Controller/32584470193.html
https://www.aliexpress.com/item/WAVGAT-MCP2515-CAN-Bus-Module-Board-TJA1050-Receiver-SPI-For-51-MCU-ARM-Controller-NEW/32848599420.html
SOP ~$0.75ea
Uses a TJA1050 
ordered breakout boards x3
MCP2551
Obsolete - replaced by MCP2561 
http://ww1.microchip.com/downloads/en/DeviceDoc/20001667G.pdf
12V & 24V
5@$1.65 https://www.aliexpress.com/item/MCP2551I-MCP2551-MCP2551-I-SN-MCP2551T-I-SN-SOP8-CAN-5pcs-Free-postage/32819501782.html
NXP
Automotive ECU Power Management
https://youtu.be/ClRovRcBCPE
TJA1043
TJA1042
TJA1051
PCA82C250
1@$0.36 https://www.aliexpress.com/item/PCA82C250-A82C250-82C250-SOP-8-CAN-Interface-IC-CAN-CTRLR-170uA-5V-new-original/32834902820.html
10 @ $3.10 SOP-8
PCA82C251
10 @ $4.00 SOP-8

TJA1020
NOT CAN -- LIN “Local Interconnect Network”
LIN over powerline = ISO/AWI 17987-8
https://en.wikipedia.org/wiki/Local_Interconnect_Network
Qty 10 @ $0.30ea // SOP8


TJA1021
Unknown
TJA1042
Unknown
TJA1048
Only in Russian? 
TJA1050  High Speed CAN transceiver
5 @ $2.08 SOP-8
5 @ $3.04 PCB
Obsolete? Ordered 2x
TJA1051 1@$1.10  https://www.aliexpress.com/item/CJMCU-1051-TJA1051-High-Speed-Low-Power-Consumption-And-CAN-Transceiver-Module-3V-5V-Replace-TJA1050/32837871720.html
MLX80104
https://www.melexis.com/-/media/files/documents/datasheets/mlx80105-4-datasheet-melexis.pdf


Other
L9615D CAN BUS TRANSCEIVER
50pcs @ $44.95
https://www.aliexpress.com/item/USB-CAN-debugger-Adapter-USB-to-CAN-CAN-Bus-Analyzer/32878710246.html
$13.50 
NUP2105 SOT-23 CAN BUS PROTECTOR
50 @ 7.50
PESD1CAN SOT-23 CAN BUS PROTECTOR
100 @ 7.58



I2C GPIO 

CJMCU-9306 PCA9306 @ 2-bit bindirectional i2c bus and SMBus voltage level translator board // @ $0.40 ea @ qty 50;  $1.88 in a prototype board
https://www.aliexpress.com/item/PCA9306-Translator-Board-Module-2-Bit-Bidirectional-I2C-IIC-Bus-And-SMBus-Voltage-Level-Translation/32953554470.html
AT24C256 I2C Interface EEPROM? Not sure what this does.  I don’t think we need this.
MCP23S17 Bidirectional 16-bit I/O expznd SPI serial serial interface (it says it can do both I2C and SPI)   -- $0.86
http://www.chaoticfocus.net/posts/2017/09/esp8266-using-i2c-with-mongoose-os/
M62320FP M62320 8bit I/O expander -- no breakout boards; but cheaper @ $1.85 for 5 units.  L6598D; M62393P MG2446AFP  -- this looks like some sort of LED driver (specifically the L6598D)
PCF7941
this is some type of remote for a car; not sure how it ended up in this list. 
INA3221
(big brother to a INA3219)  3 channel current sensor - could be used to determine lights (if they are working; etc)  @ 1.83ea.
https://www.youtube.com/watch?v=n9tnBJ0_Rxw

MCP4725
I2C DAC  $0.76ea 
TCA9548A
1 to 8way I2C 8channel multi-channel
@ $1.09
PCF8574 is around $0.26ea @ qty50; breakout boards aren’t much more $0.67
https://hackaday.com/2008/12/27/parts-8bit-io-expander-pcf8574/
There’s a reference to it working in the Mongoose OS core issues/#1 lol. 
https://github.com/mongoose-os-libs/core/issues/1
(lol it’s the only open issue)
PCA9685 16channel 12bit PWM/Servo Driver
Confirmed working on mongoose os https://github.com/mongoose-os-libs/arduino-adafruit-pwm-servo
MCP4725 IAC DAC Breakout Board; no references to it working with mongoose; $0.75
VL53L0X - laser ToF range measuring model


3D Sensor
HC-SR04 will be used for distance sensing
I feel pretty confident I can link this to a joystick and we can use that for improving the training
VL53L0X


A series of very relevant articles can be found here:
https://www.azom.com/article.aspx?ArticleID=14005

--
ESP32-CAM notes

https://wiki.ai-thinker.com/esp32-cam :: < broken URL. 
https://www.es.co.th/Schemetic/PDF/ESP32.PDF : the ESP32S chip schemetic. 

https://github.com/igrr/esp32-cam-demo
Requires
https://github.com/espressif/esp-idf

requires:
https://docs.espressif.com/projects/esp-idf/en/stable/get-started/windows-setup.html

To enter (in windows just access program msys64 - it will bring up a terminal window)

requires:
http://www.msys2.org/
(follow instructions to update)

pacman -S git
cd ~/esp
git clone -b v3.1.1 --recursive https://github.com/espressif/esp-idf.git

To get the IDF modules I had to open powershell and run:
I had to run C:\msys64\mingw32.exe
C:\msys64\mingw32.exe
cd ~/esp
cd esp-idf
tools/windows/windows_install_prerequisites.sh


?? Setup Path to ESP-IDF

The toolchain programs access ESP-IDF using IDF_PATH environment variable. This variable should be set up on your PC, otherwise projects will not build. Setting may be done manually, each time PC is restarted. Another option is to set up it permanently by defining IDF_PATH in user profile. To do so, follow instructions specific to Windows , Linux and MacOS in section Add IDF_PATH to User Profile.

# from powershell
atom C:\msys64\etc\profile
export IDF_PATH=/c/msys64/home/gru3h/esp/esp-idf
export IDF_PATH=~/esp/esp-idf/




https://docs.espressif.com/projects/esp-idf/en/stable/


http://wiki.aithinker.com/esp32-cam
https://robotzero.one/esp32-camera-module/


----  more Notes:



@B: ^^ this is the ESP32 that I’m using.
I have yet to get this working over serial; I think it’s my cheap USB-TTL serial module so I’ve ordered a different one.
Despite the chip saying it runs at 3.3v and 1.8v when I try to connect anything less than a 5v power supply it doesn’t finish POST.
From the chip documentation - it says “ESP32-WROOM-32 integrates a 4 MB SPI flash, which is connected to GPIO6, GPIO7, GPIO8, GPIO9, GPIO10 and GPIO11”

The Lower Assembly Processor: ESP32S
CHIP DOCUMENT: https://www.espressif.com/sites/default/files/documentation/esp32-wroom-32_datasheet_en.pdf
• 448 KB of ROM for booting and core functions. • 520 KB of on-chip SRAM for data and instructions. • 8 KB of SRAM in RTC, which is called RTC FAST Memory and can be used for data storage; it is accessed by the main CPU during RTC Boot from the Deep-sleep mode. • 8 KB of SRAM in RTC, which is called RTC SLOW Memory and can be accessed by the co-processor during the Deep-sleep mode. • 1 Kbit of eFuse: 256 bits are used for the system (MAC address and chip configuration) and the remaining 768 bits are reserved for customer applications, including flash-encryption and chip-ID.

The sleep current of the ESP32 chip is less than 5 µA, making it suitable for battery powered and wearable electronics applications
TLS 1.2 w/hardware acceleration
What happens on AWS when they upgrade (test no TLS support)

Questions;What is PIN 4 sensor_vp, PIN 5 sensor_vn
Pin “EN” Module-enable signal. Active high.
Are the pins shared?
What is a STRAPPING PIN?  MTDI, GPIO0, MTD0, GPIO5  A: The strapping bits configure the device’s boot mode, the operating voltage of VDD_SDIO and other initial system settings.
I would like to better understand the concept of “High Impedance”
Reflow profile?
Discharge Circuit?

AT Commands
Each command set contains four types of AT commands. 
Test Command AT+=? Queries the Set Commands' internal parameters and their range of values. 
Query Command AT+? Returns the current value of parameters. 
Set Command AT+=<…> Sets the value of user-defined parameters in commands, and runs these commands. 
Execute Command AT+ Runs commands with no user-defined parameters.

https://www.espressif.com/sites/default/files/documentation/esp32_at_instruction_set_and_examples_en.pdf
https://www.espressif.com/sites/default/files/documentation/ESP32_AT_Instruction_Set_and_Examples__EN.pdf

GPIO16 is RXD
GPIO17 is TXD
GPIO14 is RTS
GPIO15 is CTS
** The debug log will output through UART0 by default, which TXD0 is GPIO1 and RXD0 is GPIO3, but user can change it in menuconfig if needed.

How to access USB? I.e. for “cross device” communication 
How to access wifi and transmit data over TCPIP?
The ESP32 Configuration
AT+CWJAP=<ssid>,<pwd>
AT+CWJAP:<ssid>,<bssid>,<channel>,<rssi>

AT+CWJAP vs  AT+CWSAP? 

TODO: Handle error codes on ESP32   AT+CWJAP command
‣ 1: connection timeout. ‣ 2: wrong password. ‣ 3: cannot find the target AP. ‣ 4: connection failed. ‣ others: unknown error occurred. 

AT+CWLAP -- lists available access points  (we may want to communicate this using R2D2)
AT+CWDHCP enables/disables dhcp


AT+CIPSTART
AT+CIPSEND or AT+CIPSENDEX
AT+

ESP32 w/ov2640
https://www.youtube.com/watch?v=iw5b26QmWbE

The Lower Assembly Processor: ESP32S
https://www.espressif.com/sites/default/files/documentation/esp32-wroom-32_datasheet_en.pdf
• 448 KB of ROM for booting and core functions. • 520 KB of on-chip SRAM for data and instructions. • 8 KB of SRAM in RTC, which is called RTC FAST Memory and can be used for data storage; it is accessed by the main CPU during RTC Boot from the Deep-sleep mode. • 8 KB of SRAM in RTC, which is called RTC SLOW Memory and can be accessed by the co-processor during the Deep-sleep mode. • 1 Kbit of eFuse: 256 bits are used for the system (MAC address and chip configuration) and the remaining 768 bits are reserved for customer applications, including flash-encryption and chip-ID.

The sleep current of the ESP32 chip is less than 5 µA, making it suitable for battery powered and wearable electronics applications
TLS 1.2 w/hardware acceleration
What happens on AWS when they upgrade (test no TLS support)

Questions;What is PIN 4 sensor_vp, PIN 5 sensor_vn
Pin “EN” Module-enable signal. Active high.
Are the pins shared?
What is a STRAPPING PIN?  MTDI, GPIO0, MTD0, GPIO5  A: The strapping bits configure the device’s boot mode, the operating voltage of VDD_SDIO and other initial system settings.
I would like to better understand the concept of “High Impedance”
Reflow profile?
Discharge Circuit?

AT Commands
Each command set contains four types of AT commands. 
Test Command AT+=? Queries the Set Commands' internal parameters and their range of values. 
Query Command AT+? Returns the current value of parameters. 
Set Command AT+=<…> Sets the value of user-defined parameters in commands, and runs these commands. 
Execute Command AT+ Runs commands with no user-defined parameters.

https://www.espressif.com/sites/default/files/documentation/esp32_at_instruction_set_and_examples_en.pdf
https://www.espressif.com/sites/default/files/documentation/ESP32_AT_Instruction_Set_and_Examples__EN.pdf

GPIO16 is RXD
GPIO17 is TXD
GPIO14 is RTS
GPIO15 is CTS
** The debug log will output through UART0 by default, which TXD0 is GPIO1 and RXD0 is GPIO3, but user can change it in menuconfig if needed.

How to access USB? I.e. for “cross device” communication 
How to access wifi and transmit data over TCPIP?
The ESP32 Configuration
AT+CWJAP=<ssid>,<pwd>
AT+CWJAP:<ssid>,<bssid>,<channel>,<rssi>

AT+CWJAP vs  AT+CWSAP? 

TODO: Handle error codes on ESP32   AT+CWJAP command
‣ 1: connection timeout. ‣ 2: wrong password. ‣ 3: cannot find the target AP. ‣ 4: connection failed. ‣ others: unknown error occurred. 

AT+CWLAP -- lists available access points  (we may want to communicate this using R2D2)
AT+CWDHCP enables/disables dhcp


AT+CIPSTART
AT+CIPSEND or AT+CIPSENDEX
AT+

ESP32 w/ov2640
https://www.youtube.com/watch?v=iw5b26QmWbE

The Camera
The camera issues has caused me some loss of sleep; at this point I think we’re going to move forward with an ov7670 and try the https://en.m.wikipedia.org/wiki/Super-resolution_imaging approach.  

🍰 Dirty Glasses: JPEG vs. RAW Images?
@dvizmas:  Ov2640 has JPEG encoding inbuilt, Jpeg can be implemented on MCU as well
@b:  my issue with jpeg compression is that it’s a fairly lossy protocol in terms of resultant image quality (a human can’t tell; but a computer might); and since our image is going to be studied by machine learning algorithms I think it will get them an uncompressed “signal” if I can transfer the raw images; or interlaced sections of the raw image (not sure how big these files would be) .. from my perspective feeding a machine learning algorithm JPEG data is like putting on dirty glasses.   The compression I mentioned above would be inferior to JPEG but would be lossless. 🤓 https://whatis.techtarget.com/definition/lossless-and-lossy-compression

@dvizma // Raw images are in BMP format. If we are going for OV7670, maximum resolution will be  640 * 480, much less than OV2640 which has 1622x1200 resolution. Image size has already shrunk considerably. Compression not required as much?   

I am concerned about the transfer speed of RS232 -- so max baud is 115,200bps & 8-N-1 is 12.8kBps; I am assuming the raw image size of a 1600x1200x24 bit color is 15.36mb -- transfer time ~ 1200 seconds (20 hours); and for 640x480x24bit will be 921.6k -- so 71s;  bot times are pretty bad.   Can we control the JPEG quality on the cameras? Also will we be able to write the image to the SD card and then have another process that just sends that file?  (or is that step unnecessary)

@b // Yes; I would prefer the BMP format over the JPG; the main reason for dropping to OV7670 is cost; it’s just so much cheaper and some of the intractable problems (how to transfer images from UC to LC) become possible. 


Refer above about resolution. Writing to SD card and sending it later is a better approach. SD cards are much more versatile as compared to normal flash chips. They do not degrade quickly due to sector allotment algorithms inbuilt. Baud rate can go higher too. 

🍰 Also would this be accomplished with something like a MAX232 chip 
https://www.aliexpress.com/item/10PCS-MAX232CPE-MAX-232-CPE-IC-integrated-circuit-MAX-232-CPE-MAX232/32875480871.html

Yes UART to RS232 conversion is done by MAX232, MAX3232 and similar chips. 
🍰  
Counterfeit Chips
Regarding the concern of counterfeit chips; I’ve consulted with advisers on this.  

If I go and visit the suppliers in China the likelihood of counterfeit chips drops significantly;  so for the prototypes we’re going to order components off Mouser or equivalent; and then for the fabrication I’ll plan on picking them up in Shenzhen (which is a $350 flight for me from Australia); 

I’ve also reached out to a contact of mine (Jeff Grass) to discuss possibly solving this issue using smart contracts; blockchain and “bonding” (similar to insurance);  I’ll keep you both informed as this moves forward. 
An accurate clock
I realized in the course of writing this that the system will need to have a clock that keeps track of the time of day for logging.  Once the system is on the network it will get time from the cloud which will be synchronized with NIST.  I’m not exactly sure where to put this requirement. 

I will need a way to efficiently hook subroutines onto a timer; but I suppose the worst case is I can write my own event loop. 
An internal filesystem
@Dvizma: suggested using a FATFS implementation. Its like a user env text file in linux. 

@B: I'm assuming you're going to send me a link like this:
https://www.aliexpress.com/item/1pcs-Micro-SD-card-mini-TF-card-reader-module-SPI-interfaces-with-level-converter-chip-for/32583289463.html

@B What I really want to know is how much will it cost to get something like that on my own PCB? 
@Dvizma: Price of connector and SD card only

@B If we wanted to assemble our own like that; but on our own PCB?  I.e. how long would it take to design; test; fabricate; etc. obviously that depends on country; but I’m assuming I’d need to send them some sort of finished circuit diagram; how can we build and test that? 
@Dvizma: I have designed systems with SD card. Once we have reached schematics stage for growbot, I can add it effortlessly. For firmware I have prebuilt libraries. 

@B also -- are there cheaper ways to go (i.e. "no connector; no card");   I think all of our devices are going to require some internal state machine; but it probably won’t be much more than a few mb i.e. something like this:
https://www.aliexpress.com/item/10pcs-free-shipping-MX25L8005PC-15G-MX25L8005PC-DIP-8-MXIC-8MBit-1MB-SPI-FLASH-BIOS-flash-memory/32506817434.html
(or do you have other suggestions)

@Dvizma : SD card is a better approach for now. Flash chips as MX25L8005 or WinBond or Microchip has write cycle limitations. We can work with flash chips as long we are not writing it a lot. For eg MXL8005PC has minimum 100,000 write/ erase cycles as mentioned in datasheet. 


https://www.mct.net/download/macronix/mx25l8005.pdf


@b i’m not happy about this, just a bad feeling in my gut -- one of the goals was trying to figure out how to secure a device like this; with an SD Card; the device is going to get cloned/hacked/etc.  
I feel like having all the core code on a flash drive means it’s exponentially more likely to get cloned or modded quickly.   I suppose the alternative is EPROM for OS? And write everything to RAM?   I’m not sure what the SD card slots cost at production cost; and I’m going to assume you’re suggesting two SD cards (one for upper and one for lower)? Looks like the cheapest will be about $1.50/per sd card, plus connector. 

@dvizma SD card is not to be used for storing program(core code), only the images/ logs / config files. We can work with flash chip too. I can implement sector allocation algorithm. EEPROM is an option for configuration too. Costs $0.2 - $1 depending on memory size

@b the config file won’t change very often, and it’s all that needs to persist between reboots (because it has the wifi password);  the rest could be written to very slow and cheap ram perhaps? We need some ram for the camera on the lower assembly anyway - not sure if we could simply use one chip. 

.e. 

Global State Machine
So starting to dive into program logic; i’m thinking there will be a global file; something like an .ini file or similar on the internal NVRAM or SDCARD that is read at boot; and it also has some logic about the configuration; i.e. ‘program settings’ for the lights; pumps; etc. different genetics at their different stages of growth based on their health;  i think for simplicity this could all be kept in one big config file; and it would look something like this:




serial=1234\n
cloudkey=abcd\n
ssid=your_network\n
psk=abcdef0123456789\n
key=WPA2\n
TODO: … sensor settings; and behaviors; 

Log File
There should be a rotating log file recording transactions; as sensors are polled (using the command language below);  the times and responses are written to the log file; and the log file is transmitted to the cloud once it reaches an “appropriate” size; let’s say something like 100kb; ideally this would be compressed pre-transmissions;  once it is transmitted it is discarded.   In the case of an image arriving from the slave unit it would write multiple log files as it dumps the FIFO; 

If logs cannot be written to the cloud; and the device is filling up; the unit will continue its current programming; and play a “ERR=NETBROKE” tone then delete the oldest file; note: there might be many reasons the network is broke; if possible; be more specific.  

TODO: sample of log file

#
Besides in most cases I'm going to be sending a "timenow + offset; do TASK; loop: X"
EVA.TX: 




Master/Slave Logic Units

At this point I’m wondering if it makes more sense to have two separate controllers in the upper and lower assemblies.   The lower pcb + controller (master) has the WIFI; beefy processor; some flash (or sd card) for writing an image; and an internal “state machine” for the unit and is the Master;  and upper pcb (slave) receives power;  

The upper unit basically has a relay with a few GPIO pins that can be individually addressed; and also an interface to the camera which can be dumped by the upper (slave) processor down the lower (master) processor. 

In this situation the master will receive all commands; and be aware of slave capabilities and issue commands (using the same command logic described below); 

@dvizma : keeping two PCB’s will be best. 
Wiring

The UA STM32F03  and LA ESP32 will be connected via USB and a bi-directional serial interface (described below);

I’m proposing we use a single 8 wire CAT5e [24 awg] cable with 4 data pins for USB; and use the remaining 2 pairs to send 24v @ 3a (72w); per pair x 2 - delivering 144wt capacity (I used this tool: http://www.solar-wind.co.uk/cable-sizing-DC-cables.html to verify this was well within the cables specifications);  I think this will be much safer than running 110v/220v to an upper power supply (keep in mind these could end up in childrens rooms). 


Master/Slave communication
We are planning to use “USB” between the upper and lower assemblies;
I’m assuming it will be possible to transmit something similar to the hayes “AT” command set between the UA processor (STM32F03) and LA processor (ESP32S)  

I’m going to propose that “AT” style commands always be terminated with a CR sequence; that that any binary data transmitted (i.e. raw images) will need to be escaped so it does not contain a CR;

During this escaping we may also be able to do basic compression on images using something like huffman coding (probably not necessary); also possibly an ECM (error correction mode) and/or parity bits; checksums;  I’ll spend more time on that if we decide to this direction.  (simple might be be best -- thoughts?!) 

I would like to use the same “AT” or “GCODE” style serial protocol for both SLAVE and Audio programming as well; that way the whole unit is operating on one command language; and we can hopefully send program codes via an App; or over the phone (via speaker phone). I have no idea how difficult or reliable this will be; so I’m hoping to start testing in that space as quickly as I can.  Remote diagnostics and troubleshooting of these devices over IVR is absolutely something I can build; i.e. giving people cloud api interfaces to these. 



Block Diagram 

Older version:


Fabrication & Assembly


Plastic Injection Molding and surface mounting + fabrication of the PCB done will be done in the city of Johor Bahru; Malaysia which is located directly on the border of Singapore.


We will rent a small warehouse and receive items & components from China; and have them assembled locally by our staff (or partner with a local vendor); put into boxes and shipped around the world in containers; directly to retailers or to vendors such as Amazon who will sell them online.   Not sure how to avoid black market chips and things like that (yet). 

The total electronics budget to build the units for around <$25 USD total with sensors; etc. (at 5,000 unit scale) that’s a full chip mounted on a pcb; dual cameras; power supply; led lights; etc. so cost of component and finding innovative affordable ways to build something is a concern. 

The current list of components and supplier costs can be found in this document:
https://docs.google.com/spreadsheets/d/1ggYgUUJMrzTTMUF3Na7Uw0QZiaTDA4n-RFVyKsAn-Hs/edit#gid=2037530597


Hardware:
Processor and PCB

A matrix of processors can be found here:
https://docs.google.com/spreadsheets/d/1ggYgUUJMrzTTMUF3Na7Uw0QZiaTDA4n-RFVyKsAn-Hs/edit#gid=199815432

Power Supply
[PS1] 220w Power Supply
Input: 110v/220v auto-switching (if possible, depending on cost)
Not opposed to using external/separate board w/connectors 
We will use external board for now
Build custom board with TI reference design once parts are function
Needs to be integrated; low cost; highly reliable - with fuse for protection
Should use a IEC 320 (C13/C14) connector; or possibly C7/C8 (does this need to be grounded?) 
[BAT1]
Optional battery connector; for areas which may not have reliable power or to connect to 12vdc solar and charge during the day.  (This could be a separate module; and should NOT be included in all units)
~75 (nominal) 150w (maximum) power for lights
~8w for pump
The total system capacity should be ~220w with the remainder for chip and sensors.   
Pumps & Fans
[LNP] Lower Nutrient Pump - 12v ~8w controlled relay
Part of lower assembly pump wiring harness
Connector will be 12v DC on bottom of lower assembly. 
Should be able to be replaced by a 12v DC relay in industrial models. 
https://huaxiajinfeng.en.alibaba.com/product/60707033758-805640685/AISHANG_Brand_high_quality_8W_12_volt_v_dc_mini_Submersible_Solar_rotor_Water_Pump.html
[UF1] Upper Fan - 120x120mm 12v fan controlled relay
Part of upper assembly
Used to vent fresh air and also provide strength to the plants by exercising their branches. 
It would be NICE if the direction was reversible so air and humidity data could be measured externally without needing two sensors.
H Bridge with a PWM driver
Is there a way to tell if Fan’s have this without asking the manufacturer?
https://huaxiajinfeng.en.alibaba.com/product/60788717209-805738573/12volt_120mm_air_plastic_fan.html
Should be able to be replaced by a 12v DC relay in industrial models.  

Lights
All lights will connect through the upper assembly; there will be a connector cable that runs from the lower to the upper.  The total length will be less than 2 meters (so SPI should still work for the upper assembly camera). 

Want ability to have different shapes and styles on the upper assembly.  


[UL1] Upper assembly
Will have either 4 or 6 bright ‘white’ lights;
Still sourcing; lights // not sure the best way to go here [[so many options!]]
Would be nice to control intensity (either by # of lights)
Could be pure SMD LED’s; need to be able to do RED, BLUE, WHITE
[ML1] - [ML6]  Middle Assembly Lights
Along the side; six strands of Red & Blue lights; or RGB lights? 
SMD 5050 chips; i’m not sure the most cost efficient way to produce these.
Hoping to just buy these directly from china; 
External LED light connector for “mood lighting” and visual signalling
I.e. “the pot with a red blinking light has a caterpillar” 
It would be nice if the board had small diagnostic LED’s at each external connector to help diagnose issues such as WIFI connectivity; and to debug issues with sensors in the field.  

@dvizma wrote: Have a look at neopixel, very cheap at aliexpress
@b wrote: I think I have one; I ordered a couple different sets of lights; but ultimately I need to find the most cost effective way to produce this.  I can still change the design on the struts to support different LED’s so I’m not too worried about it; but I don’t really understand how the SMD5050 is driven by the microcontroller.   I need to do some research; suggestions appreciated!

Sensors:
🍰 [NIT1] Nitrogen sensor
NOTE: this really needs to be an NPK  (Nitrogen, Phosphorus, Potassium) sensor; which doesn’t really exist in a “LAB ON CHIP” format at this point which can reliably measure TDS (Total dissolved Solids) and Ph Level.  
Commercial units start at around $600. 
I’m still working on this part of the invention; there’s quite a few ways we can ‘guesstimate’ the values in software by tracking fertilizer inputs.
That might include a chemical test kit that comes with the fertilizer; or just an approximation of efficacy based on our tests.  
I need a way to measure the nitrogen; ph; and other aspects of the fertilizer to determine their effectiveness.  I need to research how to do this. 
https://www.aliexpress.com/item/Liquid-PH-Value-Detection-detect-Sensor-Module-Monitoring-Control-For-arduino/32371896246.html
I think it requires this electrode: https://www.aliexpress.com/item/BNC-Electrode-Probe-Connector-Hydroponic-for-PH-Aquarium-Controller-Meter-Sensor/32451849114.html
MQ-5; i’m hoping I can use this to somehow measure the nitrogen in the liquid fertilizer (or at least approximate it)
CJMCU-4541
MICS-4514
MICS-6814
@WOW these are like $9-$12 each. 

[TS1] Temperature & Humidity
Access a DHT11   (long term this might upgrade to a DHT22)
Recorded in 5 minute increments; but only transmitted once per hour unless outside of allowed operating parameters.   
Temperature and humidity should ideally be in the upper assembly near the fan.  
Accuracy: I think +/- ~0.5 degree should be fine; Doesn't need to be super precise.

[STORAGE]
I guess we’re going to need someplace to store images and data before they are transmitted (or while the network is down)
I would prefer to do this on chip; or in RAM (not NVRAM) if possible
The entire amount of data ready to transmit will be like < 32mb
@dvizma I know you would prefer Flash SDCARD slot and I’m probably fine with that too if it’s much easier; especially for prototypes. 
[CAM1] & [CAM2] Camera(s)
BH TODO: I need to simulate the image stitching on my side over here using similar lighting to determine if the quality will be suitable. 
Ov7670 640x480 for upper assembly
Will generate a roughly ~900k bitmap
I can also link this camera so it is ~10cm to the UA PCB (with a STM32F03 chip)
Ov2640 1600x1200 for lower assembly
Will generate a roughly ~5,625k bitmap
I will integrate the camera into the design of the lower assembly EF compartment so it’s a really short  ~10cm cable to LA PCB (with an ESP32S chip) 
BOTH CAMERAS ONLY FOR IMAGE (NOT VIDEO) ACQUISITION
DOES NOT NEED TO OPERATE SIMULTANEOUSLY
Cameras need to be able to auto-focus; or have some initialization routine
Need to develop an auto calibration protocol (probably using QR codes of known images) 
NOTE: I may revisit my position on storing raw images vs jpeg after I finish testing.  Currently I am planning to store raw images. 
[PROG] Button
There should be an external button called “PROGRAM” when it is pushed in and the system is powered on then system should start it’s initialization “program ready” mode;  see Program Button Interface
R2d2 Audio Subsystem
[SPK1] Onboard Speaker
Mounted in lower assembly near button. 
[MIC1] Onboard Microphone
Needs to support “Program Sequence” (described in IOT software)
Think “Fax machine” to transmit via audio the wifi; genetic profile; operating parameters.
Could potentially also use bluetooth; but that’s rather complicated and buggy on a lot of phones.  Audio would be cheaper and opens the door for other features in the future features like a ‘cuckoo clock’; 

Potential for devices to discover each other; and communicate in a mesh using audible or in-audible (ultrasonic) communication. 
[FV1] Float valve  (optional module)
Determines level of water in the tank
External “fluid” display
[MS1] Moisture Sensor (optional)
Detects flow of water from pump to roots
a three pin connector for future moisture sensor; or PWM flow meter on pump. 
[HEAT] Heater (optional module)
Needs a 12 vdc connector to power a small heater
[COOL] Chiller (optional module)
Needs a  12vdc connector to power a small fan + heat sink (radiator)
[CM1] Automatic Light Curtain Motor (optional module)
Needs a 12vdc connector to power a small motor that can open and close a curtain.
[CR1] & [CR2] Curtain Relay 1 & 2; 
two wire switch connectors to detect position 
Expansion relay sensors, etc. 
Future optional connectors and sensors
PWM based chemical “Ph” sensors
Relay controlled microbe killing UV light
External Motion sensor;  i.e. behave differently if a person is in the room.
Yes, a PIR sensor would work fine; it’d be best if we just had a few general purpose I/O pins and maybe a 5v connector on the upper assembly to plug into and send commands to the cloud.
Would be nice if it had a DIN jack for amplified WIFI speaker integrated with POT. 


IOT Software:
Currently planning on using MongooseOS on the ESP32; but open to other suggestions.  
Needs to be software upgradable (Flash; not RAM);  ideally over WIFI. 
https://mongoose-os.com/

I am not sure the best way to do this [[DISCUSSION]]
It would be nice if each device had a unique serial number (i.e. “mac address”);  I’m worried about Chinese reversing engineering.  [[DISCUSSION TOPIC]];  but most likely this can be prevented during the registration phase; by including a registration card with a one-time registration QR code input into the app; that allows it to add a new plant. 

@dvizma: C would be better for the uC, its most flexible and can be optimized as per need.
Firmware over the air (FOTA) can be easily implemented. Tried and tested.

🍰 @B: when you say “firmware over the air” can you send me an example of the last system you used?  How is that implemented // who do we need to pay?  I’m hoping to find a platform that is pretty straightforward and works with the AWS, Google, or Microsoft (Azure) clouds.   Most of the embedded vendor solutions are REALLY BAD and notoriously insecure; i’d like to pick on IOT system for all the projects. 

@dvizma // Last we created a system for firmware update over WiFi. User pushes a button for device to go into firmware update mode. Device creates a hotspot. User connects to hotspot, goes to specific page and uploads firmware.  

@b ^^^ definitely DO NOT want to do that; really dislike “kludges” like that; a lot of moving pieces so much to go wrong. 

@dvizma // Alternatively, device updates its own firmware from FTP when a newer version is available. We pay only for cloud storage.  

@b ^^^ not interested, so many things that can wrong there -- firewall’s on device, etc. I want to develop the audible and ultrasonic versions of the R2D2 protocol; and I want to use that in all our devices (assuming a microphone and speaker are cheap and easy to build to);  it’s critical the device be able to self diagnose and communicate that in audible tones that we can receive .. i do NOT want non-technical customers trying to describe what is wrong; or guessing why something doesn’t work; it’s literally hold the phone to the unit, press the button.  I realize you probably don’t see “why” this wouldn’t work but there are literally a hundred reasons why those types of systems break down (i.e. my vpn software doesn’t like it when systems do that; it blocks all connections; just one example; i could go on all day!!!) I want to bring the number of setup installation “onboarding” issues people have as close to zero as possible, each bad experience is a negative review, it’s a missed opportunity and usually a very high expense. 

@B:  Yes, I agree for the Upper Assembly -- so that would be a different kind of chip then?
also, how strong is your c-programming?   Is this fairly easy (something you’ve done before) or something totally new? Just trying to get an assessment on what’s easy and difficult.  

I have done this before for FOTA over WiFi as well as GSM. I’ll rate it 7/10 for difficulty. Camera is 8/10. My embedded C programming is pretty strong

[PROG] Program Button Interface (r2d2)
The device has one switch (red; for power) and one button (blue; for program).  The button MUST be able to detect a long press vs. a short press; and has a different behavior if the system is powered on while the button is depressed.  

The button is housed on the bottom of the lower assembly in a recessed area.   It should be directly mounted to the main PCB. 
 
External “PROGRAM” button
Long Press: program mode; emits a beep code (like a fax machine) that a nearby smart phone running app uses to transmit.    [see Over the Air Audio Programming]
Short press 
If there is an audible alarm; one press of suppresses the alarm. 
If no alarm (or alarm suppressed); a short push triggers a diagnostic; 
Produces something like the early PC BIOS beep codes
Using long and short codes; these could potentially be transmitted over the phone to a tech support center (or mobile app; chatbot) for diagnostics. 
Flashes external LED lights to match beeps. 
Attempts to send a current snapshot to the cloud; receive a new program.

Internal Logic: 
MQTT over HTTP (or equivalent) bi-directional communication channel
Transmits events to cloud (actions completed; acknowledgements)
Deadman switch on cloud will catch unacknowledged events. 
Transmits captured images with environment telemetry data
Receives instructions
New program; fan speed; light settings; duration; period of operation  
Track time of day; logging of events
Alert Event Conditions
Loss of Wifi
No Server Communication for more than 12 hours
Sound
Ability to load custom sound files (i.e. custom alarm ‘themes’) from cloud;  this would allow us to trigger themed alarms (which will be popular with consumers).   
Over the Air Audio Programming
In theory we can run C; C++ libraries through LLVM; but I’d rather try and use native Javascript libraries for processing.   I’m hoping we can setup a DSP to trigger an interrupt and run a bit of code when a certain tone is detected in the microphone. 

I’ve ordered 
https://www.aliexpress.com/item/5pcs-lot-New-Ultra-thin-Mini-speaker-8-ohms-0-25-watt-0-25W-8R-speaker/32859973633.html
https://www.aliexpress.com/item/Electret-Microphone-Amplifier-Stable-MAX9814-module-Auto-Gain-Control/32864107454.html
https://www.aliexpress.com/item/Electret-Microphone-Amplifier-MAX4466-Adjustable-Gain-Breakout-Board-For-Arduino/32767112890.html
I assume those will be able to be used for the Audio processing; but I really have NO IDEA what I’m doing here. ;-) 

Here are the Node.JS / Javascript packages: 
NOTE: the libraries below ARE NOT the ones we’ll use; but rather samples of what we could use; these might be V2 or V3 of our audio protocol; they’re all quite a bit faster. 

https://www.npmjs.com/package/audio-network
https://www.npmjs.com/package/chirp-connect
Oval-blue Key: 17FA6F01CC5a09C4dcfB26e60
Oval-blue Secret: 4C025EACBc58c0feF63FaBDF09beAE9cc7FfAfFF1Ce8C27cfD
Oval-green Expiry Date: 15-06-2018

https://github.com/rraval/pied-piper
https://www.cueaudio.com/
https://electronics.stackexchange.com/questions/9340/how-could-you-transfer-data-over-an-audio-line
^^ the link mentioned above is dead, but the google search "Using an arduino as an FSk modem" returns lots of tutorials. 

even something as simple as morse code might work: 
https://morsecode.scphillips.com/labs/audio-decoder-adaptive/
https://energia.nu/guide/tutorials/digital/tutorial_tone/


If you want to understand the environment; and the physical components will be located in “Compartment EF” documentation later in this document.   But effectively the board will be mounted on M5 

---
Packaging & Design

Current CAD Designs:
https://cad.onshape.com/documents/a5dd1557891c8d1050f27b63/w/9ae5080ffc405784006ad8c1/e/59689254a468e21ad1572167



For the 3d modelling there are three areas:
1. Upper assembly
2. Middle infrastructure (just a few bits and pieces)
3. Lower assembly

PLEASE Keep in mind i’ve never done plastic injection molding so I don’t know how to advise you what is and isn’t possible.  I’ve taken a udemy course on it -- so I feel like I know a bit.   -BH

I CAPITALIZE and BOLD terms on their first use. 

NOTE: Both the LOWER ASSEMBLY and UPPER ASSEMBLY will be the same width (but different heights).   I want to see how hard the lower assembly is before we work on the upper assembly.  (The Lower assembly is my priority)  So this document mostly focuses on the lower assembly right now. 

I’d like to sell a few million of these GrowPotBot units, and to do that I need to consider a lot details about shipping, packaging, and assembly to control “hidden” costs and hit the price point.   The lower assembly brings together a wide variety of irrigation (AquaTech) and electronic systems, it must be able to be packaged (with the upper assembly) into a small box for lightweight shipping and minimum space in retail stores. 

A lot of the design tweaks i’m going to ask for are designed to control assembly and packaging costs. I.e. it’s more work for you -- but increases the durability and decreases assembly and support costs. #sorrynotsorry  I’m intending to use plastic injection form molding to create an integrated system of shapes that snap together off the shelf components easily and inexpensively, in a durable fashion.  

Also before we dive too far in, I’m going to ask if you COULD design the internal reservoir as one “Layer” and each compartment A, B, C, D, E, F as separate layers  i.e. “layers in photoshop” - it would let me output the layers individually via standard 3d printer and glue them together -- that would make this process go WAY FASTER -- the final product would be one molded piece, but we’re still back at prototype.  I need to do a run of ~250-500 units to start training and testing components, and I could do that on my 3d printer.   I’d also be very open to having three compartments AB, CD, EF if that makes sense.    As you’re reading please keep in mind I’m open to either of those combinations (in fact AB, CD, EF probably makes the most sense, the walls between BC DE FA are very rigid // structural and water tight, and the walls between AB, CD, EF can be “bridges” with open spans for components and wiring passing through them.   I’ve adopted the AB, CD, EF parlance in this document. 

 I’m still working through a lot of the internal wiring, and getting a physical version of this will accelerate that process a lot.  I’m hopeful we can print out a 3d printed model next week or so??  (Do you think this is possible? I.e. so we don’t need to ship prototypes) 


Feel free to use the Google Docs “comment” feature to ask any questions or mark anything which isn’t clear.   I’ve done a bit of 3d design / cad myself but this is too complex for me it would take me several weeks!!! 

Lower Assembly: 


To get your head around the shape looking from the top down it’s a hexagon, with an inner circular donut hole.  Kind of like a “nut” that would attach to a bolt.   Around the donut hole (inside) is a fluid reservoir and inside the Hexagon shape, are 6 interior compartments A-F.  The compartments have dividers which provide structural integrity.   Each of the dividers has a hole that is 12mm diameter call the “strut receiver” the receiver’s for the struts that connect the upper & lower assemblies.    The struts (described in the middle diagram) are 12cm - 15cm curtain rods, with some plastic elbows.    The picture above does NOT include holes for the struts, or any external connectors for cameras or power in the lid. 

There’s a GREAT picture of this: 

The problem with this picture is the lower assembly looks like a mushroom, and the upper assembly isn’t the right width.  



For manufacturing and assembly reasons the lower assembly is actually two pieces which i’ll refer to as the “CONTAINER” and “LID” (bottom and top respectively).    The container is three (or six) compartments AB, CD, EF, -- the container hides the electronics, wiring, etc.  the compartments attach to a fluid reservoir in the shape of a donut that holds liquid fertilizer.   The lid provides a waterproof cover to route water back into the bucket through the donut hole.     The container is THREE COMPARTMENTS (AB, CD, EF) glued together with the DONUT SHAPED RESERVOIR, there’s also a BUCKET which sits inside the reservoir and holds the actual plant. 



NOTE: the lower assembly (container + lid) SITS on a physical “BUCKET” that is purchased separately from a hardware store.  I.e. the picture above is ONLY the lower assembly.  The lower bucket is NOT part of the assembly, but the inner bucket (for the plant) is, although it’s not described in this document currently. 

I'd like to label the internal compartments A-F, each compartment has a different role in the machine.  You need to label them A-F (i.e. a embossed raised plastic A -F).   We’ll cover the compartments later.  









One other thing to note about the picture above is it DOES NOT have an obvious RESERVOIR. 


The compartments have internal plastic dividers that are 2.8mm thick (6 in total A-F) -- for example E is the “electronics”.   “E & F” will have stuff like a power supply, circuit board, on-off switch, stuff like that.  I want to keep water as FAR away from “E”  as possible. ;-)     

Exact measurements are provided below.  

 I’ll need you to be able to generate diagrams which include the power supply, circuit board, switches, etc. (“COMPONENTS”) for ASSEMBLY, but also I’ll need the components removed for MOLDING.   I.e. the “E” compartment will have one we send to the plastic guys, and another we send to the assembly guys.   There’s a handful of concerns since we’re mixing power and water in terms of international safety concerns. 

I assume you can do those on different layers.  It would be helpful if both the LID, CONTAINER, and COMPONENTS are each on separate layers.   My main goal at the moment is to get a quote on MOLDING and then I can get a separate quote for assembly.   Please make a point to start with version #’s, it’ll make this much easier to stay in sync.   You can share .STL or .OBJ files with me if you want -- I don’t need rasterized versions.   I can give you access to a google folder or dropbox for sharing if that would be acceptable for you. 

NOTE: If you can design the compartments as separate units make each wall 1.4mm thick please and that way I can print each compartment on a smaller printer and glue them together with epoxy.   The one ‘stick’ part of this plan is that the reservoir will ultimately  have three protruding  ‘IRRIGATOR PIPES’  (not shown in ANY of Ken’s drawings) that will pierce the lid and provide a mist (picture below).    I’m still sourcing these (see the grey head on the emitter below)   So there will be a total of THREE IRRIGATOR PIPES that connect to THREE MIST EMITTERS that are molded as part of the reservoir.  




Lower Assembly Container

I think for stability the lower assembly should be no wider than 2x the "bucket" base so I'm going to say the total hexagon ‘radius’ ? (edge-to-edge) should be 720mm (~28.34 inches) -- this *may* change (get smaller),  since it changes the fabrication, packaging, material costs a lot.  But I think that guess is my best at this moment.   I’m still sourcing the struts.   The strut holes should be inside, and reinforced with 2.5cm of plastic that is attached at the corner.   The strut poles (i.e. tent poles or bamboo poles) will slide into these and provide the infrastructure for the light curtain and LED lights to hang on.  I think the proper angle will be 22.5 degrees @ 12mm internal radius to maintain the strength and durability I’d like.   The lid will need corresponding holes of 12mm and it’d be nice if it had a little lip that fit inside the strut hole and the struts were actually part of the mechanism that attaches the lid and container together (i.e. the mouth of the strut receiver could be 15mm for the first 2mm, then decrease to 12mm, then the lid has an interior protruding hole of 12mm diameter, with 1.5cm ring that goes into the 15mm hole (i.e. outer dimension is 15cm, inner dimension is 12mm) -- when the strut is inserted through the lid into the container, it effectively attaches the container and lid together (remember the strut is at a 22.5 degree angle directionally facing away from the center) 

The diameter of the donut hole in the center (interior of the reservoir) needs to support a 10” net pot so let’s say the inner diameter will be 260mm and 25mm high on the inside of the donut hole.   The inner 260mm donut hole is the fluid reservoir.   The reservoir can be heated or cooled (not all models will have this) to control temperature and that is why it surrounds the plant’s roots.   


Not all models will have heating and cooling controllers, and most of those will be packaged separately and installed by the customer in the other compartments A & B.  I.e. the growbot controller will detect that it’s too cold and “suggest” that purchase if it’s necessary.   That’s for later, most models won’t be sold with those.  But it’s why we’ll either need to have access panels on those compartments and DC power connectors on the PCB for them, or at least let customers pull the LID off to install them (i hope this makes sense).   

The heater will literally be a heating element that glues to the reservoir, and the cooling system will also be a small fan + glued heatsink, so not terribly sophisticated) the idea is to keep them in AB & CD on the other side of the unit from the electronics (EF).    Ideally I’d like to have a” BSP/NPT threaded connector with lightweight plastic that is created with the injection molding system and extrude 19cm (~0.75”) into the AB & CD compartments (two connectors).  The plastic at the top of the protrusion would be very lightweight (1mm thick).    A punch-able or drill-able threaded access. 

The heater and chiller units would come with a small “drill punch” to open punch into the reservoir and the heater and chiller units would come with a rubber gasket that lets them screw into the reservoir and seal against the gasket.   
Additionally for future industrial applications these will provide a standardized ½” connector they can use to pump water into the system i.e. connecting this to a fish tank to use fish poo as fertilizer.  (not for model #1, but future models, using the same base, but stacked together with a giant aquarium underneath  i.e. large commercial growers don’t want to manage 100x little pumps, they’d want one big one.)  
 

The LOWER ASSEMBLY LID

The LID of the lower assembly should be tapered approximately to allow water flow into the 10” donut hole center.  The outer wall of the CONTAINER COMPARTMENTS should be 35mm high, if I do my math correctly that means a 260mm inner donut radius, and a 720mm external radius (hexagon) means the lid is 230mm from interior donut hole to exterior wall.  The 35mm is to provide sufficient structure for the struts without them bending.    

THE FLUID RESERVOIR

Summary: 
260mm inner donut
1mm thick walls
12 mm internal fluid chamber


**NOTE: the fluid reservoir is a donut with a 260mm internal hole diameter; it is a two walled chamber with 10mm gap interior radius (a total of 13mm wide, with 1.0mm walls) the unit will be 25mm tall, but 10mm will be the height of the container at the point it intersects with the  reservoir  (i.e. the COMPARTMENT HEIGHT)  and 15cm of the reservoir will be “inside” the BUCKET below the CONTAINER.    The reservoir sits beneath the lower assembly container -- the purpose for this is to maximize the effective reservoir size, while minimizing the manufacturing and packaging requirements.     Also the reservoir needs a way to connect the submerged pump in the bucket.  This will be accomplished using a ¼” recessed pressure coupler.    I.e. it’s a tapered cone that allows a ¼ pipe to be fitted over it inside a recessed cavity in the reservoir, the rationale for the cavity is that I don’t want it to get broken or damaged during shipping.   The ¼” non-threaded pipe connector should act as a bulkhead fitting to the reservoir and should extend to the top (above the IRRIGATOR PIPES) -- the reason for this is to reduce the load on the submerged pump by not having the entire reservoir drain if the pump turns off.   The purpose of the reservoir is to equalize the water pressure against all the MIST EMITTERS (i.e the reservoir is pressurized).   The irrigator pipes should be ¼” in internal diameter and extend 100mm.   They should be spaced equally and located against the walls of compartments AB, either side of CD  (none in E & F which have electronics), I’d like to print all of these so for the prototypes maybe set it up so I can zip tie it to the compartment walls.  
The IRRIGATOR PIPES should have a ¼” BSP threaded connector and should extrude at an ?? (not important) angle from the reservoir and pop through the lid at around 100cm away from the reservoir. 
They probably need to curve and become more up-down vertical as they approach the lid.   

The MIST EMITTERS may blocked from time to time by organic debris that gets into the system in the system, so I will be attaching a filter and mist emitter to that threaded connection.   I’m still mentally refining that model -- it’s a separate piece, and potentially a lot of innovation can happen here, but most likely it’ll be a flexible pipe that screws onto the top of the IRRIGATOR PIPE, it runs through a filter to the mist emitter.   There will probably be some type of tapered skirt that prevents any water from going through the lid into the compartments (I hope that makes sense).   The FILTERS are a separate component we can model later, for the prototypes we can use a standard drip irrigation system filter available at any hardware store.

The emitters themselves need to be raised up a bit -- since they need to be in view of the lower camera (in compartment E) -- three colored pipes (Yellow, Green, Blue) so the Machine Learning algorithm can detect if an emitter is not working and identify the problem.   I like the idea of flexible pipes because it’s something the human “feels” they can control and move around -- sort of like an elevator ‘close door’ button that it’s connected to anything. 


^^ the picture above is NOT to scale.  But illustrates the lower assembly. 

The lower assembly needs to be designed to rest securely on top of both a 5G (US) and 20L (Metric) bucket, while still providing access to fluid reservoir inside the donut hole. 

The 5G bucket has a 11.91" (302.514mm) top outer diameter -- this is standardized in the USA. Here is an example: 
https://www.homedepot.com/p/The-Home-Depot-5-Gal-Homer-Bucket-05GLHD2/100087613

The 20L bucket has a 280mm top outer diameter -- i'm not as sure these are internationally standardized.   Here is an example:
https://www.bunnings.com.au/handy-pail-20l-white-plastic-pail-with-lid_p4475875

The upper assembly is a hexagon “donut” in that the center has a hole where the plant and bucket sits.  The width of the bucket the center should be is 10”  (254mm) 
https://www.amazon.com/Hydrofarm-HG10MESHPOT-10-Inch-Bucket-Basket/dp/B0049XEDMK 
(NOTE: we will be manufacturing our own buckets, but the product above is the “inspiration”) -- the link shows a bucket that is designed to fit on top of the bucket by itself.  In the design on amazon above the 5G or 20L bucket must be drilled, and then fitted with a waterproof external bulkhead connector, external pump, in our design the submersible pump and hose are inside the bucket.   Quite messy and ugly!    We want ours to look really clean. 

To sit on the bucket the lower assembly should have a series of rings (lips?) approximately 20mm tall and 2mm thick.   Currently I’m thinking two rings (one for the 20L and one for the 5G bucket).   

The outer ring should have 6 holes in it that centered in line with each of the panels on the top.   

The inner ring should be 10” wide and that should be the donut itself. 

The lower container needs to be thick enough in plastic to support the entire upper assembly (which should be around 4-5kg) so inside the walls of the compartments.   I’m thinking that 1.8mm should be thick enough, assuming the compartment walls hold it all together. 

Middle Assembly

Struts are tent poles; sourcing supplier -- will be 12mm diameter, the length should be 30cm in length.   There will be a total of four tent poles per strut, and a total 6 struts, meaning there are 24 poles total per unit.  -- estimate purchasing is 5000 units.   These could also be sourced out of fiberglass, or plastic.  It is possible that cables could be run inside the pipes. 

https://www.alibaba.com/catalog/aluminum-pipes_cid131001

Sourcing Letter:
Hello, 

I am sourcing components for an agricultural application.   

We require ~12mm outer diameter tent poles which are deburred (free of sharp edges).

The poles need to be 30cm in length.

Our ordering plan will be:
1. small sample of 25 poles for testing, qualification shipped to Australia. 
2. an order of 6,250 poles for prototypes shipped to Australia.
3. subsequent orders will be 120,000 poles per order we expect these to continue every month indefinitely shipped to Malaysia. 

Please let me know if you can supply our requirements, with materials and approximate costs per unit. 

Thank you!
-Brian Horakh
b@Elastic.Ventures

Going to assume the radius of the middle is 320cm diamater or roughly ~1m fabric per unit. 

Hello, Looking for new supplier.
 
Require 120cm minimum width roles with high reflectivity, low heat transfer. 
Expected requirement is 5,000m per month.
 
Will need one role with 10m shipped to Australia for quality test of material.
Please let me if you can assist me.
Thank you!
 
您好，正在寻找新的供应商。
 
最小宽度为120cm，反射率高，传热低。
预计需求量为每月5,000米。
 
将需要一个10米的角色运到澳大利亚进行材料的质量测试。
如果你能帮助我，请告诉我。
谢谢！


Hydroton:
Hello, 

I am requiring a supplier of Hydroton media; sorry I was not able to visit you last year.   
This is for a retail hydroponic application; do you put it into clear bags? or do you ship it in bulk and I will need to bag it?  

I am interested in the 4-8cm and 8-10cm media specifically.
I will require a small sample for quality assurance testing and photography - sent to Australia < 2 kg should be sufficient.  
That will follow with a smaller order of approximately 125kg for retail samples. 

Ultimately we will be purchase 2500kg per month.   (I'm not sure of the exact weights at this point, the samples will determine that)
The first samples will be sent to Australia, the second to the USA, and the final products will be shipped to Malaysia. 

Please let me know if you have any questions. 
Thank you!


Compartment EF (Electronics)

Compartment EF (Electronics) should house all components.   
will have a clip in bulkhead external ON/OFF switch and power cord that is 46mm x 20mm.  For the “clip” we need 1mm around that (50mm x 22mm) the plastic will need to be 1mm thick so the power connector can clip in.  It’s an a IEC 60320 C13/c14 style connector which is not part of the mold, but part of the assembly.   The power switch is wired to the power supply, the power supply is wired to the PCB. 

Both the power supply and PCB itself will be mounted on M2.5 standoffs (that should be included in the mold) 
https://www.aliexpress.com/item/180pcs-lot-M2-5-nylon-standoff-kit-Male-to-Female-M2-5-6-8-10-12/32873907379.html  -- the PCB design is NOT finished, but it will be roughly 50mm x 200mm (although we can change this to fit the space inside compartment EF)

The power supply will be roughly 32mm height & 60x85 and the rear of that will have the wires that connect to both the power switch AND the PCB.   (the power supply is a 12v transformer).   


There will be a lot of small 30 AWG (0.24mm) wires that connect to the electrical pieces together and power the 5v and 12v systems, for this reason the compartments will need to have a small notches in the internal compartment walls, near the outside of the reservoir in order to route cables, and ideally the cable management would be integrated into the mold -- I think 10mm “U” shaped cable gulleys around the reservoir that let the wires lay nicely inside will be fine.   

Also there will be a DC power cable run from the PCB mounted in compartment E to the reservoir pump bulkhead connector -- for this reason I think the bulkhead connector for the reservoir should be located near compartment EF, probably in CD.  but near EF to minimize wiring.   I suppose we’ll end up with other (optional) internal power connectors for AB & CD anyway (not required for the prototypes). 

 I’m picturing a something like this for the pumps external DC power bulkhead connector:
https://www.aliexpress.com/item/50Pcs-A-Set-DC-005-Black-DC-Power-Jack-Socket-Connector-DC005-5-5-2-1mm/32790495886.html

That would pumps DC power connector (above) would be inside the pump cavity, ideally separated by a very thin plastic wall from the tapered ¼” pump water fitting that is used to fill the reservoir. 

 -- if you could try to make that whole bulkhead area very “sturdy” (reinforced) that would be awesome.  I can draw this out more if you’d like.   The whole idea is to do as much of the routing as I can with the plastic molds. 

Finally the Unit should have a place (under compartment EF) a flat surface for a sticker that describes it’s UL certification, etc.   

There is also a “configuration” button under compartment EF, this should (if possible) be hidden within a cavity, it will be connected to the PCB.   There might also be one or more USB connectors also near the program button for expansion and adding external lights. 

Finally, there is a speaker and microphone which will be mounted on the PCB, and so there should be a mesh in the plastic under the PCB to allow for better input and output. 

Also not sure if this was obvious or not -- but there is a power switch, and a configuration button (hidden in a cavity, ideally next to the USB connectors) -- to program the unit the person needs to hold in the button, turn on the power (it will start beeping) -- then hold their phone next to the microphone and speaker to program the unit.   So all those should be near eachother and probably towards the outside of the unit --- but the power cable should have loops to route it under the bucket and to the wall. 

Okay… I think I got it all out of my head.  Looking forward to your questions!


  


** Confidential; please do not distribute!  AS YOU READ PLEASE USE THE GOOGLE COMMENT FEATURE TO ASK QUESTIONS OR MAKE SUGGESTIONS. 

Watch the overview video: https://www.youtube.com/watch?v=_d4SeumFVjw

Here are my technical specifications // expectations of the GrowPot (aesthetics) & GrowBot (electronics).  I’m not sure that all of these will explicitly correct or necessary; but I’d rather put them in, discuss and then eliminate them later.  


THIS DOCUMENT IS NOW DEPRECATED (OUT OF DATE / NO LONGER MAINTAINED); PLEASE REFER TO MVP B. https://docs.google.com/document/d/1d_j0_PmCoj4SQjCngVlhwKP6mr3o_HrShNq4TvaQqxs/edit

THIS DOCUMENT IS NOW VERY OBSOLETE; PLEASE REFER TO MVP C. 
https://docs.google.com/document/d/1JoU5qIMG_o4ggdV3wpzW4ykzLFtndIZMkkuqRcs3LlU/edit#





🍰 




Areas with 🍰 need your attention; please update them. 

The industrial and EE designs need to achieve the v1 “minimum viable product” requirements; but also leave room for v2 and v3 without going through a massive redesign.


Dear Engineers -- There are many aspects of the project which are probably “not how you’d do it” and that’s fine; happy to discuss those.   However there are requirements for a reason, please don’t try to re-engineer the product or business model to make your job easier.   Please do not tell me it’s impossible; I’m quite certain it’s feasible; but my progress is slow as I’m learning as I’m going.  The human interface is a major concern for me; the product needs to be usable and reasonably intuitive and easy to assemble. ;-)


The initial market is a residential “home” client, it’s a home ‘garden appliance’;  however the system is designed so that the same GrowBot units can be applied in a commercial setting -- it’s just not the focus on day #1 (too hard to sell until we have awareness).   

In a commercial setting instead of using a 12v pump to provide nutrients for one plant; the system could connect to a 12v relay switch; and turn on/off a pump of any size in a industrial grow tent off the same controller; keeping cameras on only one plant ‘inspection’.  GrowBot is the future of urban farming; we get the economy of scale and accurate data models from the residential clients and eventually the commercial farmers (who are much slower to adopt new technology) will pick up on this because of the efficiency. 

GrowPotBot is intended to be a retail-class aeroponic controller as such we will need to have sensors collecting data once per hour transmitting that the cloud for analysis.   The market for these are GLOBAL; and the software and interfaces will be designed to work in multiple languages in the first revision. 

The electronics footprint is intended to be very simple; small; and slow.  There are no immediate plans to deploy machine learning models to the actual device; instead it will transmit all it’s data to the cloud where the logic will be hosted and let the cloud send back operating parameters.   This will allow the cloud to crunch much bigger machine learning models and leave a lightweight electrical footprint on site.    No need to ship that much ‘iron’ (hardware) to the customer beyond the sensors and relays. 

If you want to to talk about lowering the price, improving delivery; field reliability; those are open topics. 



Outstanding Issues/Concerns/Todo:	3
The Camera	4
Counterfeit Chips	4
An accurate clock	5
Global State Machine	5
Log File	5
Master/Slave Logic Units	5
Wiring	6
Master/Slave communication	6
Audio Communication	7
Standard ASCII transmission;	7
Audio “Command” & “Response” Segments;	8
Block Diagram  (v1)	10
Fabrication & Assembly	10
Hardware:	11
Processor and PCB	11
Power Supply	11
[PS1] 220w Power Supply	11
Pumps & Fans	12
[LNP] Lower Nutrient Pump - 12v ~8w controlled relay	12
[UF1] Upper Fan - 120x120mm 12v fan controlled relay	12
Lights	12
[UL1] Upper assembly	12
[ML1] - [ML6]  Middle Assembly Lights	12
Sensors:	13
[TS1] Temperature & Humidity	13
[CAM1] & [CAM2] Camera(s)	13
[PROG] Button	13
Audio Subsystem	13
[SPK1] Onboard Speaker	13
[MIC1] Onboard Microphone	13
[FV1] Float valve  (optional module)	13
[MS1] Moisture Sensor (optional)	14
[HEAT] Heater (optional module)	14
[COOL] Chiller (optional module)	14
[CM1] Automatic Light Curtain Motor (optional module)	14
[CR1] & [CR2] Curtain Relay 1 & 2;	14
IOT Software:	14
[PROG] Program Button Interface	14
Internal Logic:	15
Over the Air Audio Programming	15
Packaging & Design	16
Lower Assembly:	18
Lower Assembly Container	20
The LOWER ASSEMBLY LID	21
THE FLUID RESERVOIR	21
Middle Assembly	23
Hydroton:
Hello,	25
Compartment EF (Electronics)	25


Please note: there are specific height and shape dimensions for the upper assembly and lower assembly; although it is unlikely we will encounter difficulty fitting into those dimensions. 

The output
Plant Data
Temperature
Humidity
System telemetry data
Wifi data
System memory (AT+SYSRAM?  On ESP32)
image(s)


The Upper Assembly Processor: STM32F030
Notes are coming!


[PROG] Program Button Interface 
The device has one switch (red; for power) and one button (blue; for program).  The button MUST be able to detect a long press vs. a short press; and has a different behavior if the system is powered on while the button is depressed.  

The button is housed on the bottom of the lower assembly in a recessed area.   It should be directly mounted to the main PCB. 
 
External “PROGRAM” button
Long Press: program mode; emits a beep code (like a fax machine) that a nearby smart phone running app uses to transmit.    [see Over the Air Audio Programming]
Short press 
If there is an audible alarm; one press of suppresses the alarm. 
If no alarm (or alarm suppressed); a short push triggers a diagnostic; 
Produces something like the early PC BIOS beep codes
Using long and short codes; these could potentially be transmitted over the phone to a tech support center (or mobile app; chatbot) for diagnostics. 
Flashes external LED lights to match beeps. 
Attempts to send a current snapshot to the cloud; receive a new program.

Internal Logic: 
MQTT over HTTP (or equivalent) bi-directional communication channel
Transmits events to cloud (actions completed; acknowledgements)
Deadman switch on cloud will catch unacknowledged events. 
Transmits captured images with environment telemetry data
Receives instructions
New program; fan speed; light settings; duration; period of operation  
Track time of day; logging of events
Alert Event Conditions
Loss of Wifi
No Server Communication for more than 12 hours
Sound
Ability to load custom sound files (i.e. custom alarm ‘themes’) from cloud;  this would allow us to trigger themed alarms (which will be popular with consumers).   
Counterfeit Chips
Regarding the concern of counterfeit chips; I’ve consulted with advisers on this.  

If I go and visit the suppliers in China the likelihood of counterfeit chips drops significantly;  so for the prototypes we’re going to order components off Mouser or equivalent; and then for the fabrication I’ll plan on picking them up in Shenzhen (which is a $350 flight for me from Australia); 

I’ve also reached out to a contact of mine (Jeff Grass) to discuss possibly solving this issue using smart contracts; blockchain and “bonding” (similar to insurance);  I’ll keep you both informed as this moves forward. 
An accurate clock
I realized in the course of writing this that the system will need to have a clock that keeps track of the time of day for logging.  Once the system is on the network it will get time from the cloud which will be synchronized with NIST.  I’m not exactly sure where to put this requirement. 

I will need a way to efficiently hook subroutines onto a timer; but I suppose the worst case is I can write my own event loop. 
An internal filesystem
@Dvizma: suggested using a FATFS implementation. Its like a user env text file in linux. 

@B: I'm assuming you're going to send me a link like this:
https://www.aliexpress.com/item/1pcs-Micro-SD-card-mini-TF-card-reader-module-SPI-interfaces-with-level-converter-chip-for/32583289463.html

@B What I really want to know is how much will it cost to get something like that on my own PCB? 
@Dvizma: Price of connector and SD card only

@B If we wanted to assemble our own like that; but on our own PCB?  I.e. how long would it take to design; test; fabricate; etc. obviously that depends on country; but I’m assuming I’d need to send them some sort of finished circuit diagram; how can we build and test that? 
@Dvizma: I have designed systems with SD card. Once we have reached schematics stage for growbot, I can add it effortlessly. For firmware I have prebuilt libraries. 

@B also -- are there cheaper ways to go (i.e. "no connector; no card");   I think all of our devices are going to require some internal state machine; but it probably won’t be much more than a few mb i.e. something like this:
https://www.aliexpress.com/item/10pcs-free-shipping-MX25L8005PC-15G-MX25L8005PC-DIP-8-MXIC-8MBit-1MB-SPI-FLASH-BIOS-flash-memory/32506817434.html
(or do you have other suggestions)

@Dvizma : SD card is a better approach for now. Flash chips as MX25L8005 or WinBond or Microchip has write cycle limitations. We can work with flash chips as long we are not writing it a lot. For eg MXL8005PC has minimum 100,000 write/ erase cycles as mentioned in datasheet. 


https://www.mct.net/download/macronix/mx25l8005.pdf


@b i’m not happy about this, just a bad feeling in my gut -- one of the goals was trying to figure out how to secure a device like this; with an SD Card; the device is going to get cloned/hacked/etc.  
I feel like having all the core code on a flash drive means it’s exponentially more likely to get cloned or modded quickly.   I suppose the alternative is EPROM for OS? And write everything to RAM?   I’m not sure what the SD card slots cost at production cost; and I’m going to assume you’re suggesting two SD cards (one for upper and one for lower)? Looks like the cheapest will be about $1.50/per sd card, plus connector. 

@dvizma SD card is not to be used for storing program(core code), only the images/ logs / config files. We can work with flash chip too. I can implement sector allocation algorithm. EEPROM is an option for configuration too. Costs $0.2 - $1 depending on memory size

@b the config file won’t change very often, and it’s all that needs to persist between reboots (because it has the wifi password);  the rest could be written to very slow and cheap ram perhaps? We need some ram for the camera on the lower assembly anyway - not sure if we could simply use one chip. 

.e. 

Global State Machine
So starting to dive into program logic; i’m thinking there will be a global file; something like an .ini file or similar on the internal NVRAM or SDCARD that is read at boot; and it also has some logic about the configuration; i.e. ‘program settings’ for the lights; pumps; etc. different genetics at their different stages of growth based on their health;  i think for simplicity this could all be kept in one big config file; and it would look something like this:




serial=1234\n
cloudkey=abcd\n
ssid=your_network\n
psk=abcdef0123456789\n
key=WPA2\n
TODO: … sensor settings; and behaviors; 

Log File
There should be a rotating log file recording transactions; as sensors are polled (using the command language below);  the times and responses are written to the log file; and the log file is transmitted to the cloud once it reaches an “appropriate” size; let’s say something like 100kb; ideally this would be compressed pre-transmissions;  once it is transmitted it is discarded.   In the case of an image arriving from the slave unit it would write multiple log files as it dumps the FIFO; 

If logs cannot be written to the cloud; and the device is filling up; the unit will continue its current programming; and play a “ERR=NETBROKE” tone then delete the oldest file; note: there might be many reasons the network is broke; if possible; be more specific.  

TODO: sample of log file

#
Besides in most cases I'm going to be sending a "timenow + offset; do TASK; loop: X"
EVA.TX: 




Master/Slave Logic Units

At this point I’m wondering if it makes more sense to have two separate controllers in the upper and lower assemblies.   The lower pcb + controller (master) has the WIFI; beefy processor; some flash (or sd card) for writing an image; and an internal “state machine” for the unit and is the Master;  and upper pcb (slave) receives power;  

The upper unit basically has a relay with a few GPIO pins that can be individually addressed; and also an interface to the camera which can be dumped by the upper (slave) processor down the lower (master) processor. 

In this situation the master will receive all commands; and be aware of slave capabilities and issue commands (using the same command logic described below); 

@dvizma : keeping two PCB’s will be best. 
Wiring
3 wires - AWG TBD; currentis DC 24v @ 6a (144w);
http://www.solar-wind.co.uk/cable-sizing-DC-cables.html to verify this was well within the cables specifications); 

LIN BUS Master/Slave communication
A command will always be followed by a CR (EOL)
Each system will use one character identifier. 
U

I’m going to propose that “AT” style commands always be terminated with a CR sequence; that that any binary data transmitted (i.e. raw images) will need to be escaped so it does not contain a CR;

During this escaping we may also be able to do basic compression on images using something like huffman coding (probably not necessary); also possibly an ECM (error correction mode) and/or parity bits; checksums;  I’ll spend more time on that if we decide to this direction.  (simple might be be best -- thoughts?!) 

I would like to use the same “AT” or “GCODE” style serial protocol for both SLAVE and Audio programming as well; that way the whole unit is operating on one command language; and we can hopefully send program codes via an App; or over the phone (via speaker phone). I have no idea how difficult or reliable this will be; so I’m hoping to start testing in that space as quickly as I can.  Remote diagnostics and troubleshooting of these devices over IVR is absolutely something I can build; i.e. giving people cloud api interfaces to these. 





Fabrication & Assembly


Plastic Injection Molding and surface mounting + fabrication of the PCB done will be done in the city of Johor Bahru; Malaysia which is located directly on the border of Singapore.


We will rent a small warehouse and receive items & components from China; and have them assembled locally by our staff (or partner with a local vendor); put into boxes and shipped around the world in containers; directly to retailers or to vendors such as Amazon who will sell them online.   Not sure how to avoid black market chips and things like that (yet). 

The total electronics budget to build the units for around <$25 USD total with sensors; etc. (at 5,000 unit scale) that’s a full chip mounted on a pcb; dual cameras; power supply; led lights; etc. so cost of component and finding innovative affordable ways to build something is a concern. 

The current list of components and supplier costs can be found in this document:
https://docs.google.com/spreadsheets/d/1ggYgUUJMrzTTMUF3Na7Uw0QZiaTDA4n-RFVyKsAn-Hs/edit#gid=2037530597


Hardware:
Processor and PCB

A matrix of processors can be found here:
https://docs.google.com/spreadsheets/d/1ggYgUUJMrzTTMUF3Na7Uw0QZiaTDA4n-RFVyKsAn-Hs/edit#gid=199815432

Power Supply
[PS1] 220w Power Supply
Input: 110v/220v auto-switching (if possible, depending on cost)
Not opposed to using external/separate board w/connectors 
We will use external board for now
Build custom board with TI reference design once parts are function
Needs to be integrated; low cost; highly reliable - with fuse for protection
Should use a IEC 320 (C13/C14) connector; or possibly C7/C8 (does this need to be grounded?) 
[BAT1]
Optional battery connector; for areas which may not have reliable power or to connect to 12vdc solar and charge during the day.  (This could be a separate module; and should NOT be included in all units)
~75 (nominal) 150w (maximum) power for lights
~8w for pump
The total system capacity should be ~220w with the remainder for chip and sensors.   
Pumps & Fans
[LNP] Lower Nutrient Pump - 12v ~8w controlled relay
Part of lower assembly pump wiring harness
Connector will be 12v DC on bottom of lower assembly. 
Should be able to be replaced by a 12v DC relay in industrial models. 
https://huaxiajinfeng.en.alibaba.com/product/60707033758-805640685/AISHANG_Brand_high_quality_8W_12_volt_v_dc_mini_Submersible_Solar_rotor_Water_Pump.html
[UF1] Upper Fan - 120x120mm 12v fan controlled relay
Part of upper assembly
Used to vent fresh air and also provide strength to the plants by exercising their branches. 
It would be NICE if the direction was reversible so air and humidity data could be measured externally without needing two sensors.
H Bridge with a PWM driver
Is there a way to tell if Fan’s have this without asking the manufacturer?
https://huaxiajinfeng.en.alibaba.com/product/60788717209-805738573/12volt_120mm_air_plastic_fan.html
Should be able to be replaced by a 12v DC relay in industrial models.  

Lights
All lights will connect through the upper assembly; there will be a connector cable that runs from the lower to the upper.  The total length will be less than 2 meters (so SPI should still work for the upper assembly camera). 

Want ability to have different shapes and styles on the upper assembly.  


[UL1] Upper assembly
Will have either 4 or 6 bright ‘white’ lights;
Still sourcing; lights // not sure the best way to go here [[so many options!]]
Would be nice to control intensity (either by # of lights)
Could be pure SMD LED’s; need to be able to do RED, BLUE, WHITE
[ML1] - [ML6]  Middle Assembly Lights
Along the side; six strands of Red & Blue lights; or RGB lights? 
SMD 5050 chips; i’m not sure the most cost efficient way to produce these.
Hoping to just buy these directly from china; 
External LED light connector for “mood lighting” and visual signalling
I.e. “the pot with a red blinking light has a caterpillar” 
It would be nice if the board had small diagnostic LED’s at each external connector to help diagnose issues such as WIFI connectivity; and to debug issues with sensors in the field.  

@dvizma wrote: Have a look at neopixel, very cheap at aliexpress
@b wrote: I think I have one; I ordered a couple different sets of lights; but ultimately I need to find the most cost effective way to produce this.  I can still change the design on the struts to support different LED’s so I’m not too worried about it; but I don’t really understand how the SMD5050 is driven by the microcontroller.   I need to do some research; suggestions appreciated!




IOT Software:
Currently planning on using MongooseOS on the ESP32; but open to other suggestions.  
Needs to be software upgradable (Flash; not RAM);  ideally over WIFI. 
https://mongoose-os.com/

I am not sure the best way to do this [[DISCUSSION]]
It would be nice if each device had a unique serial number (i.e. “mac address”);  I’m worried about Chinese reversing engineering.  [[DISCUSSION TOPIC]];  but most likely this can be prevented during the registration phase; by including a registration card with a one-time registration QR code input into the app; that allows it to add a new plant. 

@dvizma: C would be better for the uC, its most flexible and can be optimized as per need.
Firmware over the air (FOTA) can be easily implemented. Tried and tested.

🍰 @B: when you say “firmware over the air” can you send me an example of the last system you used?  How is that implemented // who do we need to pay?  I’m hoping to find a platform that is pretty straightforward and works with the AWS, Google, or Microsoft (Azure) clouds.   Most of the embedded vendor solutions are REALLY BAD and notoriously insecure; i’d like to pick on IOT system for all the projects. 

@dvizma // Last we created a system for firmware update over WiFi. User pushes a button for device to go into firmware update mode. Device creates a hotspot. User connects to hotspot, goes to specific page and uploads firmware.  

@b ^^^ definitely DO NOT want to do that; really dislike “kludges” like that; a lot of moving pieces so much to go wrong. 

@dvizma // Alternatively, device updates its own firmware from FTP when a newer version is available. We pay only for cloud storage.  

@b ^^^ not interested, so many things that can wrong there -- firewall’s on device, etc. I want to develop the audible and ultrasonic versions of the R2D2 protocol; and I want to use that in all our devices (assuming a microphone and speaker are cheap and easy to build to);  it’s critical the device be able to self diagnose and communicate that in audible tones that we can receive .. i do NOT want non-technical customers trying to describe what is wrong; or guessing why something doesn’t work; it’s literally hold the phone to the unit, press the button.  I realize you probably don’t see “why” this wouldn’t work but there are literally a hundred reasons why those types of systems break down (i.e. my vpn software doesn’t like it when systems do that; it blocks all connections; just one example; i could go on all day!!!) I want to bring the number of setup installation “onboarding” issues people have as close to zero as possible, each bad experience is a negative review, it’s a missed opportunity and usually a very high expense. 

@B:  Yes, I agree for the Upper Assembly -- so that would be a different kind of chip then?
also, how strong is your c-programming?   Is this fairly easy (something you’ve done before) or something totally new? Just trying to get an assessment on what’s easy and difficult.  

I have done this before for FOTA over WiFi as well as GSM. I’ll rate it 7/10 for difficulty. Camera is 8/10. My embedded C programming is pretty strong



Over the Air Audio Programming
See R2D2 ; until further notice this aspect of the project has been deprecated. Hoping to use light pulses from the cell phone screen and lights flashing to program; or air-kiss -- the app will be totally self diagnostic. 

Basic steps:
Turn on forward camera on phone
Align phone in front of growbot controller and push program button. I would like to include the r2d2 hardware if we could. 



-https://docs.google.com/document/d/1xXAnLZohOxO95gsVXGz6iqJ2BwpZaj24C0fXgC7HOWM/edit

---
Packaging & Design

Current CAD Designs:
https://cad.onshape.com/documents/a5dd1557891c8d1050f27b63/w/9ae5080ffc405784006ad8c1/e/59689254a468e21ad1572167



For the 3d modelling there are three areas:
1. Upper assembly
2. Middle infrastructure (just a few bits and pieces)
3. Lower assembly

 PLEASE Keep in mind i’ve never done plastic injection molding so I don’t know how to advise you what is and isn’t possible.  I’ve taken a udemy course on it -- so I feel like I know a bit.   -BH


Also before we dive too far in, I’m going to ask if you COULD design the internal reservoir as one “Layer” and each compartment A, B, C, D, E, F as separate layers  i.e. “layers in photoshop” - it would let me output the layers individually via standard 3d printer and glue them together -- that would make this process go WAY FASTER -- the final product would be one molded piece, but we’re still back at prototype.  I need to do a run of ~250-500 units to start training and testing components, and I could do that on my 3d printer.   I’d also be very open to having three compartments AB, CD, EF if that makes sense.    As you’re reading please keep in mind I’m open to either of those combinations (in fact AB, CD, EF probably makes the most sense, the walls between BC DE FA are very rigid // structural and water tight, and the walls between AB, CD, EF can be “bridges” with open spans for components and wiring passing through them.   I’ve adopted the AB, CD, EF parlance in this document. 

 I’m still working through a lot of the internal wiring, and getting a physical version of this will accelerate that process a lot.  I’m hopeful we can print out a 3d printed model next week or so??  (Do you think this is possible? I.e. so we don’t need to ship prototypes) 


Feel free to use the Google Docs “comment” feature to ask any questions or mark anything which isn’t clear.   I’ve done a bit of 3d design / cad myself but this is too complex for me it would take me several weeks!!! 


