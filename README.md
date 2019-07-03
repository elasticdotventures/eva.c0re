# eva.c0re
EV Assistant Public Core

this repository will *eventually* hold all public artificats of Elastic.Ventures
for now, only the jargon file.  To make this easy; I've put everything into the master
branch. 

@pokey, @margaret - 
I will demo some of these pieces tomorrow in our meeting; but it might be helpful if you can follow along.   

to access the vue-intranet-app here are the basic requirements/instructions
please see how far you can get; i'm not going to be able to write out every click
but I'll try to provide a list.

this will enable you to see the daily/nightly changes i'm making; and as we develop
new tools they will be included in this repo.  There will probably need to be some 
git configuration before you can upload -- tbd. 

## download and install #pretty minimum toolchain
* https://docs.google.com/document/d/16-Y4VVg4VisunWma03BY9ejK5zF_ete9o5r3ozFu-U0/edit#
* 🚀 I'm looking for ways to simplify this process; feel free to add your own notes.

## a command prompt/shell 
* NOTE everything *can* be done inside of visual studio code; .. but I think this is better, so for now you'll need some command prompt or unix shell. 
* for windows 10 I recommend the Ubuntu Shell
  https://tutorials.ubuntu.com/tutorial/tutorial-ubuntu-on-windows
* for MacOS a standard terminal emulator/shell prompt should be fine. 
* cd /path/to/repo   
- 🚀 that's C:\/projects/c0re on my pc ; inside ubuntu /projects is a symlink to /mnt/c/projects

## clone this github repo to your computer
- using the shell cd into the vue-intranet-app directory ```cd vue-intranet-app```
- first time only: ```npm i``` : will download and install any missing libraries. 
- then: ```npm run serve ``` : a webserver will start on your PC; then you can access the site  from a browser; usually http://localhost:8080 (*it will say on screen)
- or ```npm run lint ``` : performs a basic syntax check
- or ```npm run storybook:serve``` : runs the storybook (not finished)

## what happened?
- let me know. thx.  the ability to download and access a development environment is
the beginning to being able to make your own changes // having your own branch; 
so hopefully we can simplify this before we have more #humans.
