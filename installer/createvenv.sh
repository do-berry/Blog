#!/bin/bash
# Bash script for virtual environment named: venv
# Create, run, upgrade and install requirements.txt

cd ../backend
python3 -m venv venv
source venv/bin/activate
python3 -m pip install --upgrade pip
pip install -r requirements.txt
