# add function to clone git repo
# add function to add git remote
# add function to push to git remote
# add function to pull from git remote
# add function to push to git remote

# add function to clone git repo
git_clone() {
  echo "Enter git repo url"
  read git_repo_url
  echo "Enter git repo name"
  read git_repo_name
  echo "Enter git repo folder location"
  read git_repo_folder
  git clone $git_repo_url $git_repo_folder/$git_repo_name
}

# add function to add git remote
git_add_remote() {
  echo "Enter git repo url"
  read git_repo_url
  echo "Enter git repo name"
  read git_repo_name
  echo "Enter git repo folder location"
  read git_repo_folder
  cd $git_repo_folder/$git_repo_name
  git remote add origin $git_repo_url
}

# add function to push to git remote
git_push() {
  echo "Enter git repo folder location"
  read git_repo_folder
  echo "Enter git repo name"
  read git_repo_name
  cd $git_repo_folder/$git_repo_name
  git add .
  echo "Enter commit message"
  read commit_message
  git commit -m "$commit_message"
  git push origin master
}

# add function to pull from git remote
git_pull() {
  echo "Enter git repo folder location"
  read git_repo_folder
  echo "Enter git repo name"
  read git_repo_name
  cd $git_repo_folder/$git_repo_name
  git pull origin master
}

# add function to push to git remote
git_push() {
  echo "Enter git repo folder location"
  read git_repo_folder
  echo "Enter git repo name"
  read git_repo_name
  cd $git_repo_folder/$git_repo_name
  git add .
  echo "Enter commit message"
  read commit_message
  git commit -m "$commit_message"
  git push origin master
}