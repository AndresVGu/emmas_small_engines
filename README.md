# Project Title Emma's Small Engines

# Steps to work with GIT:

# How to clone a repository from GITHUB:
1. download and install git from https://git-scm.com/
2. select a folder in your PC where you want to work
3. press rigth-click >> Show more options >> Open Git Bash here
4. yo need to go to Github and find the repository that you want download
    "in this case is this link: https://github.com/AndresVGu/emmas_small_engines.git"
5. in your terminal/Bash type:
    git clone https://github.com/AndresVGu/emmas_small_engines.git
6.you have download the Emma's Small Engine Repository, now you're all set.

# How to work with this repostory:
```git
1.You must have a folder with the repository name. Open this folder with 
Visual Studio Code

2.in the navbar on the top of visual studio type <new terminal, and open
a new terminal

3.change the terminal with bash, do this allow us to work with git

4.Once you are in Bash, make sure you are in the project folder and type:
    git init
    
5.And then type:
    git config --global user.email "in this field you need use the same email that you use in github"
    
6.then Type:
    git config --global user.name "Put your name"
    
7.Now make sure you are working in the current branch, type
    git branch
    >>this sould show all branches we have
    
8.then type
    git checkout "name of the branch"
    >>this allows to change branches
    in our case we need type
    git checkout prototype_2
    >> wen you reach this branch, you will get all the code
    
9.Before you start to work in your work you need update the code, type:
    git pull
    
10.Once you have the code updated, I recomend to make a new branch, this 
help us to avoid collition errors, to create a new branch type:
    git checkout -b "the name of the branch you want"
    
11.Now YOU CAN WORK and edit the code, when you finish and you want post your work
you should type:
    git add .
    >>this code add all new files to a stage area before a commit
    
12. the make a commit, type
    git commit -m "short message that describe your work"
    example => git commit -m "Add CSS"
    
14. TO POST YOUR WORK IN GIT HUB type:
    git remote add origin https://github.com/AndresVGu/emmas_small_engines.git
15. you can check if you are gonna post your work in the correct link with:
    git remote -v
    
17. If the link is correct you must type:
    git push -u origin "name of your branch"
    >>this push post all yor code in a new branch in github
    
```

