# FOR SETUP

1. Firstly, clone your fork to your local machine.

2. Then, add upstream with the help of following command.
    -[git remote add upstream https://github.com/ashiscs/BEGIN.git]

3. For verifying the above two commands execute
    -[git remote -v]

# FOR CONTRIBUTING PART

1. Never commit from your master branch leave as it is.

2. Create a new branch by executing the following command
    -[git branch any_name]
    For example, [git branch add]

3. Now for moving on this branch execute the following command.
    -[git checkout branch_name]
    For example, [git checkout add]

4. Do the required changes from the branch created and then save the file.

5. Then execute the following command 
    -[git add -A]
After executing the following command the colour of [git status] command will change from red to green

# FOR COMMITTING AND PUSHING

1. git commit --signoff -m "message"

2. git push --force-with-lease origin your_branch_name

3. And now you are good to go, now go to your github interface and you will get a notification for ***comparing and pull request*** click it and create a pull request.

4. After that it will be reviewed and merged.

# DONE WITH THE INITIAL SETUP

1. After your initial setup phase is done you are good to deal with further contributions and execute the following commands for being on the safe side before doing any further changes(Always execute it before doing any changes).

2. git fetch upstream

3. git checkout master

4. git merge upstream/master