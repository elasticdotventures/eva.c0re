source /projects/eva.core/files/git-prompt.sh # Show git branch name at command prompt      
export GIT_PS1_SHOWCOLORHINTS=true # Option for git-prompt.sh to show branch name in color  

# Terminal Prompt:
# Include git branch, use PROMPT_COMMAND (not PS1) to get color output (see git-prompt.sh fo
export PROMPT_COMMAND='__git_ps1 "\w" "\n\\\$ "' # Git branch (relies on git-prompt.sh)     

