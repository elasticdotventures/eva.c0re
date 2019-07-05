# eva.c0re repo
EV Public c0re

😁 this repository will *eventually* hold all public artificats, 
components, public facing documentation of http://Elastic.Ventures

# Emoji Symbology
* 🚀 :rocket: @b's comments/opinions (highly opinionated, not gospel)
* 🤓 :nerd: means extra credit; or attribution reference (not required reading)
* 🍫 :chocolate: Windows / Chocolately installer instructions 
* 🍎 :apple: MacOS Notes
* 🐧 :penguin: Linux Notes 
* ⛔ :stop: hints how to fix problems in earlier commands ^^^ (means above)



# 🍰👇 Please help improve this documentation!!

🚀 I'm looking for ways to simplify this process; feel free to add your own notes.

🤓 This README.md is in MarkDown format: https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet  

🚀 Also; VSCode has a markdown plugin CTRL+SHIFT+V split window mode for realtime formatting as yei write markdown. 

# What is this?

Broadly the pre-release development versions of EV tech; as well as instructions how to setup \ the development environment; and all files for testing. 
As we develop new tools they will be included in this repo.

# Slack _channel (NOT #channel😉)
🚀 EV slack channel will have a _channel directory inside eva.c0re repo. 


## # Hash is for Comments; NOT Channels.
🚀 underscore _channel syntax inside github is more resilient

🤓 Hashtag (#) is the reserved character for a comment in Unix. 
A hash-mark means ignore everything after the # in URLs as well.  As such hashtags introduces significant diagnostic challenges when something doesn't work
 in the real world. It's not always obvious to a yei they need to add a backtick  \# to fix the problem); so it's probably just easier to avoid using hashtags in filenames -@b/🚀

# GIT Basic Survival Guide
🚀 A highly opinionated guide to using GIT within EV. 🤣

This file (README.md) is inside the EV GIT REPO "eva.c0re" ; it has multiple branches. The full SSH URL of the repo is `git@github.com:elasticdotventures/eva.c0re.git`  but internally we call it "c0re" (or core; with a zero)

🤓 GIT is a protocol, code-library; AND an application.  

The GIT library is embedded into many different types of software development tools and also available as a command line tool.

* 🍎https://git-scm.com/downloads
* 🍫 For windows; open a shell:
``` 
choco install git
git clone git@github.com:elasticdotventures/eva.c0re.git
# ^^ creates a directory eva.c0re
mv eva.c0re c0re        # ubuntu shell
rename eva.c0re c0re    # windows powershell
```
⛔ ^^ if the `choco` command fails; 
keep skip down to the Chocolatey Installer 👇

🚀 It's a great time to do the following additional steps to optimize your workflow; since you'll probably be using this folder -- setting up shortcuts
makes a simple tasks even easier. 

* right click on the c0re folder in Windows Explorer and ..
** pin to quick access
** pin to start
** Include in other libraries such as downloads; or create a new library

🚀 Sometimes I'll rename the shortcuts from c0re to _c0re because the underscore
will sort alphabetically before letters; so it's always the first thing to appear.

## 🤓 Guide to GIT

🚀 Hopefully by now you've had a few moments to peruse the repo file structure;
now let's talk about how to contribute. 

GIT Branches allow many versions of files to co-exist in the same repo with the same name and be tracked independently. GIT tracks each version of a file within each branch.  When the branch is changed all TRACKED FILES will change.

A TRACKED FILE means a file that has been committed to the GIT REPO. 
an UNTRACKED FILE/s may exist inside a repo subdirectory but has not been explicitly COMMITTED to the REPO.  
  * 🚀 in visual studio "Source Control" (SHIFT-CTRL-G) shows the number of 
  tracked files that have changed 

  * 🤓 there are many ways to commit; using a command line `git add filename` or using visual studio; or any piece of 'git' software.  

An individual GIT repo can only be viewing one "branch" at a time; it can be changed on the command line using the `git checkout branch-YYYYMM-purpose` command; or inside visual studio. 

Untracked files will not be included in a PUSH command; nobody else besides the 
author has a copy of them; they cannot be restored using the `git checkout filename` command. 

🚀 after making a change; right after the test is working is a great time for a
commit. getting in the habit of committing often and early; and having meaningful commit messages (summary of why/what changed) is what separates good and great developers. 

New files are added to a branch; then the branch is verified by @b; then merged
into "master" and deployed. 

* There's a lot of tricks to git and we'll list a few in the document as well. Look for the 🤓 for hints. 
* The daily/nightly changes will happen on branches; with merges to the "master" branch. 

🚀 The master branch should be the safe/working and each channel should also create it's own GIT branch something like "channel-YYYYMM-purpose" 🤓 don't confuse a branch name with a directory name.  For branches we won't use the leading underscore OR hashtag. 

# 🍫 Chocolately Installer Scripts
[1]: chocolatey
@margaret
To access the vue-intranet-app here are the basic requirements/instructions
please see how far you can get; For  (Windows) yei'r going to use Chocolately 
https://chocolatey.org/ which provides the `choco install package`  or `choco uninstall package` commands. 

🍎 For MacOS/Linux; .. tbd. 

## Useful files:
+ jargon.md is the glossary to EV vocabulary. 

## _channels
+ [_general](_general/README.md)
+ [_pretty](_pretty/README.md)
    + [assets](_pretty/assets) 
+ [_dataphiles](_datafiles/README.md) -- in development
+ [_cyberpunks](_cyberpunks/README.md)  -- in development

# vue-intranet-app
🚀 I don't have these files served anyplace beyond github yet; still in development.  

# How to Clone this Repo
```
git clone git@github.com:elasticdotventures/eva.c0re.git 
```
🤓 create a project using `mkdir ~/projects` then `cd ~/projects` then type the command above. Take a few moments to add shortcut links in windows. 

# 🍫 Selecting a command prompt/shell 
🚀 NOTE most GIT will be done inside of visual studio code; but i'll include the command references anyway.  There are too many ways to skin cats; and plugins
depending on the order they are installed may overwrite eachothers shortcut-key-bindings. 

1. for windows 10 I recommend the Ubuntu Shell
  https://tutorials.ubuntu.com/tutorial/tutorial-ubuntu-on-windows
1. for MacOS a standard terminal emulator/shell prompt should be fine. 
1. in VSCode a command/prompt shell 

🚀 that's C:\/projects/c0re on my pc ; inside ubuntu /projects is a symlink to /mnt/c/projects

## clone this github repo to your computer
- using the shell cd into the /c0re/vue-intranet-app directory ```cd vue-intranet-app```
- first time only: ```npm i``` : will download and install any missing libraries. 
- then: ```npm run serve ``` : a webserver will start on your PC; then you can access the site  from a browser; usually http://localhost:8080 (*it will say on screen)
- or ```npm run lint ``` : performs a basic syntax check
- or ```npm run storybook:serve``` : runs the storybook (not finished)


## what happened?
- let @b know in #cyberpunks. thx.  
