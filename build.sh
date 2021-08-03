#!/bin/bash
set -eux

# run tests
npm run test:no-watch

# git config
git config --global user.name "Build Agent"
git config --global user.email rmg.build.agent@users.noreply.github.com

# variables
export APP_NAME=rmg
BRANCH=$(git branch | grep \* | cut -d ' ' -f2 | tr '/' '.')
UAT_REPO_NAME=uat-rail-map-generator

# bump version and git tag
if [ "$BRANCH" = "master" ]
then
  # build with a normal version
  npm version patch -m "${APP_NAME}-%s release" --force || { echo "Release Error"; exit 1; }
  echo "RMG_VER=$(node -p "require('./package.json').version")" >> $GITHUB_ENV
else
  # build with a hashed version
  VERSION=`node -p "require('./package.json').version"`
  GITHASH=$(git log -n 1 --pretty=%h)
  echo "RMG_VER="$VERSION.$BRANCH.$GITHASH"" >> $GITHUB_ENV
fi

# build PRD and copy artifact to repository
CI='' npm run build
cp -r build/ PRD/

# build UAT and copy artifact to repository
cat package.json | sed '2 s/RailMapGenerator/uat-rail-map-generator/' > package-new.json
cp package-new.json package.json
CI='' npm run build
cp -r build/ UAT/

# push tag and commit
if [ "$BRANCH" = "master" ]
then
  git push origin HEAD
  git push origin "${APP_NAME}-${RMG_VER}"
fi

# print version
#echo "Build Success: $RMG_VER"
