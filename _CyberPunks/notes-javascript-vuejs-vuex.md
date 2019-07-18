notes-javascript-vue

Vue Component Standards:  A component should be in a hierarchy; i.e. a filesystem based on it’s interface role & responsibility.   I want to avoid generic names like “modal_box” as much as possible and just farm those out to a “common” area.  In order for a module to be in /common it must share at least two dependencies.     Large groups of components will be organized in “subsystems” i.e. “farm management”; and they shall have unit tests declaring what modules they individually require i.e. the subsystem level gets it’s own ‘jargon’ word.  

Unit testing; upcoming discussion. 

