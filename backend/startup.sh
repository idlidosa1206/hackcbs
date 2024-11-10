#!/bin/bash

echo "Starting the ZAP service"
echo "API key - TESTKEY"

zap.sh -daemon -host 0.0.0.0 -port 8080 -config api.addrs.addr.name=.* -config api.addrs.addr.regex=true -config api.key=TESTKEY

echo "Starting flask backend service"

nohup python3 /home/ubuntu/hackcbs/backend/zap/app.py
