#!/bin/bash
cd "$(dirname "$0")/site"
exec python3 -m http.server 8765
