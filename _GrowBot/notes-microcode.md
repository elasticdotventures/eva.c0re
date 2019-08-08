
# microcode notes
-----

features:
--------
wake up lighting  (internal)
sentry modes (speaker; diagnostics)
pet detection and interaction


---
mic can be switched on/off 

firmware power on sequence
init - 
transmit audio signal; listen mic loop diagnostic


transmit datetime now  <-- signal to correct; plz log time shift. 
transmit model & version & serial # <-- signal; 
transmit subsystem status reports
internet connectivity: up/down (down triggers: last online; last reboot.  <-- option to trigger reboot via DTMF )
dns: up/down  (down triggers last valid: time )