# eva.c0re repo

## 🚀EV Public c0re dump

😁 this repository will *eventually* hold all public artificats, 
components, public facing documentation of http://Elastic.Ventures

# Emoji Symbology 
* 🚀 :rocket: @b's comments/opinions (highly opinionated, not gospel)
* 🤓 :nerd: means extra credit; or attribution reference (not required reading)
* 🍫 :chocolate: Windows / Chocolately installer instructions 
* 🍎 :apple: MacOS Notes
* 🍰 :cake: is a tracking and reward incentivization system ("contributor points")
* .. please see jargon.md for more

# 🍰👇 Please help improve this documentation!!

🚀 Yei'r looking for ways to simplify this process; feel free to add notes. 

🤓 This README.md is in MarkDown format: https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet  

🚀 Also; VSCode has a markdown plugin CTRL+SHIFT+V split window mode for realtime formatting as yei write markdown. 

# What is this repo.

Broadly the pre-release development versions of EV tech; as well as instructions how to setup 
our development environment; and all files for testing.  This is the "pre-release" channel. 
As we develop new tools they will be included in this repo.

# Slack _Channel (NOT #channel😉)
🚀 EV slack channels will use a _Channel directory inside eva.c0re repo. 


## # Hash is for Comments; NOT Channels.
🚀 underscore _Channel syntax inside github is more resilient

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

🍎 For MacOS/Linux; .. ?? 🤔

🚀 !!todo should 🍰 be in the repo?  (public disclosure🤔)

# Most resources are organized by _Channel

+ [_general](_general/README.md) 
    + [jargon.md](_general/jargon.md) is the glossary to EV vocabulary. 
    + [:cake:](_general/cake-help.md) help &amp; EV [blockchain.log](_general/blockchain.log)
    + [staff](_general/staff) 👈GET 🍰🙏 UPLOAD AVATAR [HERE](_general/staff)👈
+ [_thinking_culture](_thinking_culture/README.md) 
    + 👆 teaching #human to study better; practice toward mastery. 
    + 🚀 spend a bit of time going through this material. 

## design files & assets
+ [_pretty](_pretty/README.md) #pretty readme
    + [fonts](_pretty/fonts) .woff, .ttf
    + [img](_pretty/img) .png, .jpg, .gif
      + [stock](_pretty/stock) 
      + [backgrounds](_pretty/backgrounds) 
      + [logos](_pretty/logos) 
      + 🚀 ^^^ very handy for presentations!

## Sales & Business Development
+ [_salesvikings](_salesvikings/README.md) sales strategy, bot driven client acquisition
+ [_b2bcbd](_b2bcbd/README.md) http://b2bcbd.us CBD Isolate Broker
+ [_opportunities](_opportunities/README.md) post project plans here!

## Regional Channels
+ [_shenzhen](_shenznen/README.md) Shenzhen, China (or China)
+ [_city_sandiego](_city_sandiego/README.md) California, San Diego USA
+ [_europe](_europe/README.md) Europe Slack
+ [_srilanka](_srilanka/README.md) SriLanka 
^^^ !! #bali? - needs a captain. 🍰

## Lifestyle & Fun 
+ [_yogicentral](_yogicentral/README.md) Yei Health &amp; Wellness
+ [_airstream](_airstream/README.md) The EV silver rocket disco toaster, share pictures! 
  +  also 2020 Party Planning, #passionpods
+ [_travel](_travel/README.md) Resources for travel (post for local help)
+ [_random](_random/README.md) No charter; no rules. 

## X-Engineering .. in development 🤔
+ [_dataphiles](_datafiles/README.md) business metrics &amp; kpi's
+ [_cyberpunks](_cyberpunks/README.md) cybersecurity &amp; software development
+ [_red_team](_red_team/README.md) channel captain chat (please read channel rules)
+ [_prototypes](_prototypes/README.md) mechantronic development 
+ [_growbot](_growbot/README.md) GrowBot Electronics Platform
+ [_growpot](_growpot/README.md) GrowPot Design Files

# Applications

## vue-intranet-app
🚀 I don't have these files served anyplace beyond github yet;



# Downloading

Yei need to download the local repo to access the files.

# 🍎
1. for MacOS a standard terminal emulator/shell prompt should be fine. 

# 🍫 Selecting a command prompt/shell WSL vs PSH
Windows 10 offers a total of 3 different "shell" environments; for compatibility with many different generations of software.  As such; it's a bit complicated. 

🚀 just pay attention to enter the commands in the right shell

* WSL "Windows Subsystem for Linux"
  * preferred/best compatibility
  * Linux/Unix command syntax 
  * access WIN+R (Run); Open: "wsl.exe"
  * https://tutorials.ubuntu.com/tutorial/tutorial-ubuntu-on-windows
* PSH "PowerShell"
  * .NET command syntax, compatible with PowerShell Integrated Scripting
  * access WIN+R (Run) ; Open "PowerShell.exe"
* CMD.exe "MS-DOS shell"
  * Pre-Internet windows ancient compatibility layer
  * access WIN+R (Run); Open "cmd.exe"

🤓 Both PSH & WSL are supported inside visual studio code
🤓 Some commands such as `git` will work the same regardless of shell

## How to Clone this Repo

```
# Shell: WSL 
mkdir ~/projects
cd ~/projects
git clone git@github.com:elasticdotventures/eva.c0re.git 
ln -s eva.c0re core
```
🤓 Take a few moments to add shortcut links in windows to the c0re

## Using GIT

🤓 GIT is a super powerful tool; with a complex but extremely powerful syntax.
🤓 "Nobody get's (understands) git the first time" 👈 try to learn basic core concepts like a commit, branch and push. 

🚀 NOTE most GIT will be done inside of visual studio code; but i'll include the command references to show what's happening and to increase exposure. 

🚀 Also; with GIT there are too many ways to skin cats; and plugins depending on the order they are installed may overwrite eachothers shortcut-key-bindings.  Git is embedded into a lot of software and none of the interfaces are terribly user friendly.

🚀 that's C:\/projects/c0re on my pc ; but it doesn't really matter where you install the repo
just create shortcuts in your downloads directory. 


# Running the App/s
App components are still in development; getting more yei on the developer environment 
is huge progress towards our goal. 

```
# Shell WSL or PSH
# using "npm" (Node Package Manager)

cd ~/c0re/vue-intranet-app 

# 🚀 FIRST TIME & AFTER UPDATES
# 👇 the node.js npm command below will download and install any missing libraries. 
npm i

# then ... 👇 start a webserver using this node.js command:
npm run serve

# ^^^ then open a browser (such as firefox developer edition)
# http://localhost:8080
# 🚀 Also; the screen will display a url with IP address like http://192.168.1.100:8080
# 👆 Use the IP address to access from a phone browser on the same wireless network

# Did something break? 👇 How about some Diagnostics!?! 🤓
npm run lint    # syntax test
npm run test    # automated testing scripts

# Need to access our storybook (not finsihed)
npm run storybook:serve
```

## what happened?
- let @b know in #cyberpunks. thx.
