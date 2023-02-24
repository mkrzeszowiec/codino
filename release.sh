#!/bin/bash

echo  "******* fetch new version *******"
git fetch
git reset --hard origin/main

echo  "******* set correct node version *******"
~/.nvm/nvm.sh use 16.10.0

echo "******* install dependencies *******"
npm install

echo "******* build project *******"
npm run build

echo "******* reload node process *******"
pm2 reload strona-codino