#!/usr/bin/bash

export $(cat "$(dirname "$0")/.env" | xargs)
