notes-growbot-software-ux.md


User Experience
The GrowBot will have a Mood indicated by an emoji.  
❤️ :everything is perfect (optimal 98th%; gifted)
😄 :happy; 80% happy - most systems are fine; no serious concerns. Signals within tolerance matching lifecycle stage (sleep; etc.)
🤔 :concerned; 60% not an alarm condition.
😨 :ohno: something is wrong; intervention sought (commercial version can optionally override sleep settings on phone; alarm condition).
👻 :dead: the plant is probably dead. (plays little tune; like player over; would you like to play again?)


# Upper Assembly
Fan Relay (12v)
Phyto COB LED 12v
--

# Lower Assembly
* CAN controller
* CAN bus terminator
* 200w Power Supply
* Power Switch & Fan
* Pump Connector

# Pump
* Pump 12v power
* Expansion for Float; PH; NPK

# Curtain Assembly
* Curtain Motor
* IsOpen Switch
* IsClosed Switched
* CAN Controller

# SLED & Hoist
Hoist Motor (Y Axis)  12v
Hoist position sensor
Sled Motor (X Axis)
CAN controller

# SLUG (Growbot)
* ESP32 / WIFI / Temperature
* 2gb SDCARD
* OV2640
* Humidity? 


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




