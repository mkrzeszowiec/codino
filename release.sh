#!/bin/bash

echo  "******* fetch new version *******"
git reset --hard origin/main

echo "******* install dependencies *******"
npm install

echo "******* build project *******"
npm run build

echo "******* reload node process *******"
pm2 reload strona-codino