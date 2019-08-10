

# Pretty README

Slack: #pretty   
Video: https://meet.jitsi.org/elastic-ventures/channel-pretty

# Daily Usage:
cd /p/c0re ; cd _CyberPunks/aws/lamb


Before yei can dive into design; yei must get access to the #pretty files.


#  Get windows subsystem for Linux
```
# https://www.microsoft.com/en-au/p/ubuntu-1804-lts/9n9tngvndl3q?rtc=1
Enable-WindowsOptionalFeature -Online -FeatureName Microsoft-Windows-Subsystem-Linux
# requires Build 14393.
systeminfo | Select-String "^OS Name","^OS Version"
# confirm it's built
Get-WindowsOptionalFeature -Online -FeatureName Microsoft-Windows-Subsystem-Linux

ln -s /mnt/c/projects /p
ln -s /mnt/c/projects /projects
cd /p


# note: first time users may need to run `ssh-keygen` to generate a private key
# then `cat ~/.ssh/id_rss.pub` to show the file and put that into github.com before you can use the clone command below.  
# 
git clone git@github.com:elasticdotventures/eva.c0re.git

ln -s eva.c0re c0re
git clone git@github.com:elasticdotventures/website
ln -s website elastic.ventures

sudo apt-get update
sudo apt install nodejs
# `node -v`
#    v8.10.0
# 👆 okay; now we can move on to the node.js parts

```

Add this section to your ~/.bashrc file which is a hidden file in the users WSL home directory.


```

source /projects/eva.c0re/files/git-prompt.sh # Show git branch name at command prompt
export GIT_PS1_SHOWCOLORHINTS=true # Option for git-prompt.sh to show branch name in color

# Terminal Prompt:
# Include git branch, use PROMPT_COMMAND (not PS1) to get color output (see git-prompt.sh for more)
export PROMPT_COMMAND='__git_ps1 "\w" "\n\\\$ "' # Git branch (relies on git-prompt.sh)
```
# 👆 start a new shell; at this point the shell will always show the directory and git branch (in color)
when in a directory managed by .git 



# Node.JS inside WSL
Proposed Minimum Toolchain:
Node.js LTS 10.16.0 (or better)
https://nodejs.org/en/

🤓 please note; the default versions of windows subsystem for linux (WSL); if node.js has been installed 
in the main windows C:\program files\ that directory has spaces; and that's fine inside windows, but really 
screws up a variety of 'unix' tools in the node.js toolchain .. basically non-windows developers don't test windows,
so less stuff works there - for that reason we setup a fresh node.js install inside WSL; and then 
modify the $PATH using the .bashrc to strip any directory with spaces. 

💀 Windows & Mac - never create directories with spaces, they frequently break things in Unix.

```
sudo apt-get install nvm
# setup a common node modules
mkdir /projects/node_modules
# setup .bashrc to export 
# we should also do something about "DEV" more here. 
echo 'export NODE_MODULES=/projects/node_modules' >> ~/.bashrc

```

## npm & nvm
* NPM "node package manager"  downloads node.js libraries
* NVM "node version manager"  

### install nvm
🔗 docs: https://github.com/nvm-sh/nvm
```tldr
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
# OR npm install -G nvm

nvm install lts/dubnium
nvm use lts/dubnium
```




### install npm
install npm "node manage package" npmjs.org 
```
sudo apt-get install npm
# 👇 a few global things we use
npm install -g vue-cli

```

## common node_modules
now yei will create a shared node_modules in the /projects folder (for all repos to share)
node_modules are downloaded by `npm install` 

```
cd /p/ ; mkdir node_modules ; 
ln -s node_modules c0re/node_modules 
ln -s node_modules elastic.ventures/node_modules

# 💀👇 add to ~/.bashrc
export NODE_MODULES=/p/node_modules

## now install the modules using npm -i
cd /p/c0re; if [ -s node_modules ] ; then npm install ; else echo "💩no node_modules!";  fi; 
```



# Severless Framework
serverless framework [http://serverless.com]
```
sudo npm install -G serverless serverless-offline
```




# Firefox Developer Edition
🤓 some people like The Firefox Developer Edition which is a modified version of Firefox that is specifically designed for web developers. It also uses a separate profile from the regular version so that running them side-by-side is an option.  By the time you are done with this tutorial yei will be more qualified to build software than 95% of the developers on the Interwebz. 😜🤣
Be sure to install: 
Vue developer tools (which if you’re planning to interact with the website; this is a MANDATORY plugin; so please 🛑 and install it right now; chrome; firefox or desktop is all same:same.) 


# Global File Sharing/Storage


## Git
* download: https://git-scm.com/download/

🤓 Developed by Linus (the creator of Linux) to manage Linux open source development it has become the defacto standard for agile teams. Git is a distributed version tracking protocol used by developers. There are many git clients that use the same “git library” and git repository hosts such as github and aws codecommit.  
🤓 Git can be powerful; but is optimized mostly for text files and especially source code.  If a binary object such as a graphic changes even a single byte the whole file is copied.
The easiest GIT client I’ve seen is actually inside Visual Studio (i’ll link to training; on my todo list)
Conceptually git is a way to group a proposed set of changes together so many versions can be concurrently tracked and shared. 
💡 Probably easiest to manage git via #vscode visual code studio; but I’ll cover that in the VS studio later. 

Repo(sitory) URL: https://github.com/elasticdotventures/eva.c0re
Cmd w/ ssh
git clone git@github.com:elasticdotventures/eva.c0re.git
Purpose:  allows distributed development
What is a “repo” - that’s short for repository; it’s all the files ^^^
What is a “Clone”
A clone of a downstream copy of a repo.  Downstream means that any changes made to the original will be PUSHED upstream to the “origin”.  
Hint: Try to clone using the “ssh” protocol; http authorization can be more complicated and also much slower.   When cloning a repo; you’ll have an option to use HTTPS or SSH; ssh is better.
https://github.com/elasticdotventures/eva.c0re
git@github.com:elasticdotventures/eva.c0re.git
What is a “Branch” 
A branch is a working set of changes; usually made by one person.  The branches can be “merged” together, and also unmerged (which is possible; but complicated). 
What is a “Commit”
A commit records a snapshot of one or more files.
This is usually a single task;  or a series of highly related tasks that would logically be done together.  I.e. “new button designs”, or “fixed margins”;  smaller commits mean more recovery points and make reviewing changes easier. 
What is a “Fork”
A fork is a copy controlled by somebody else; you may need to fork somebody else’s repo in order to fix a but.  Forks can create “pull requests”  (just like branches) 
What is a “Pull Request”



“master” is the top branch; “production" each channel should have it’s own branch #pretty or even #pretty-slackid-YYYMM-purpose;  branches can be created inside vs studio 

# GIT [jargon.md] Term: Commit
Purpose: async discussions
Node.Js
While coding is not necessary
Shared Drive


# Google Drive
Google Drive Stream Win/Mac/?
```
https://support.google.com/drive/answer/7329379
```
👆 go here; download app. install

# Visual Studio Code
Text Editor
Microsoft Visual Code “VSCode” (Mac, Windows, Linux)
Download: https://code.visualstudio.com/
💡 VSCode ’s highly plugin-able via typescript (javascript framework); has intellisense ; there are lots of helpful plugins including 
Use GIT “Source Control” inside VSCode
https://www.youtube.com/watch?v=6n1G45kpU2o
^^ key concepts:  making a commit, changing branches

# troublesh00ting. 



end of document.


🦨🛑 -------
Created: dt20190705
Author/s: @b

spawn <--
npm install -g vue-cli


# screen 
```
export SCREENDIR=$HOME/.screen
mkdir ~/.screen && chmod 700 ~/.screen
```
* https://codingrandomly.com/2018/07/running-screen-in-wsl/

mkdir ~/.screen && chmod 700 ~/.screen
 
  screen -AmdS awshapi sls offline


# 🍫 Windows 10; 
first step; install chocolatey (a windows package manager); we aren't using this extensively YET
but it's planned. 
Chocolatey 🍰 installer 
https://chocolatey.org/

```
# WIN+x  || select Windows Power Shell (Admin)
```
🦨 in hindsight; chocolately isn't the best choice because so much is going to be done in WSL
which chocolately can't interface with; so you can skip this.

Other windows tips:
WIN + D = new desktop
WIN + SHIFT + arrows move between desktops


