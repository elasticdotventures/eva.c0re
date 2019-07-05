
# Pretty README

Slack: #pretty   
Video: https://meet.jitsi.org/elastic-ventures/channel-pretty

# Welcome

Before yei can dive into design; yei must get access to the #pretty files.

# Software

first step; install chocolatey (a windows package manager); use that to install everything else.

@margaret
Chocolatey 🍰 installer 
https://chocolatey.org/
```
# WIN+x  || select Windows Power Shell (Admin)
```

# MACOS 🍎:apple:
Because @pokey uses mac; 
i'm also going to include :apple: instructions as well. 

## getting started

Proposed Minimum Toolchain:
Node.js LTS 10.16.0 (or better)
https://nodejs.org/en/
Firefox Developer Edition
🤓 some people like The Firefox Developer Edition which is a modified version of Firefox that is specifically designed for web developers. It also uses a separate profile from the regular version so that running them side-by-side is an option.  By the time you are done with this tutorial yei will be more qualified to build software than 95% of the developers on the Interwebz. 😜🤣
Be sure to install: 
Vue developer tools (which if you’re planning to interact with the website; this is a MANDATORY plugin; so please 🛑 and install it right now; chrome; firefox or desktop is all same:same.) 

Global File Sharing/Storage
Git
🤓 Developed by Linus (the creator of Linux) to manage Linux open source development it has become the defacto standard for agile teams. Git is a distributed version tracking protocol used by developers. There are many git clients that use the same “git library” and git repository hosts such as github and aws codecommit.  
🤓 Git can be powerful; but is optimized mostly for text files and especially source code.  If a binary object such as a graphic changes even a single byte the whole file is copied.
The easiest GIT client I’ve seen is actually inside Visual Studio (i’ll link to training; on my todo list)
Conceptually git is a way to group a proposed set of changes together so they can be shared and reviewed. 
💡 Probably easiest to manage git via #vscode visual code studio; but I’ll cover that in the VS studio video. 
Clone
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

#jargon.md Term: Commit

Slack
Purpose: async discussions
Node.Js
While coding is not necessary
Shared Drive
EVA.core github repo  #pretty folder
Google Drive
# Google Drive Stream Win/Mac/?
https://support.google.com/drive/answer/7329379
^^ go here; download app. install
Text Editor
Microsoft Visual Code “VSCode” (Mac, Windows, Linux)
Download: https://code.visualstudio.com/
💡 VSCode ’s highly plugin-able via typescript (javascript framework); has intellisense ; there are lots of helpful plugins including 
Use GIT “Source Control” inside VSCode
https://www.youtube.com/watch?v=6n1G45kpU2o
^^ key concepts:  making a commit, changing branches

WikiFactory
#troublemakers has requested this collaboration tool for hardware files; SVG; etc. 

Acceptable File Formats
SVG Icons:
https://feathericons.com/
	http://materialdesignicons.com/

Upcoming
EV Storybook 
In eva.c0re
https://www.youtube.com/watch?v=lIgiiScIjgg
https://www.youtube.com/watch?v=9lQMmbITt0c
SVG Vector Editor
Inkscape
Adobe Illustrator
VisualStudio Code
Name: SVG Viewer
Id: cssho.vscode-svgviewer
Description: SVG Viewer for Visual Studio Code.
VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=cssho.vscode-svgviewer

-------
Created: dt20190705
Author/s: @b

