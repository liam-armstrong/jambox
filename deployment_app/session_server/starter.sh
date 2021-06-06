#!/bin/bash
echo "Service 'All': Status"

rc-status -a

rc-service jamulus start

rc-service nodeapp start

tail -f /dev/null