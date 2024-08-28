#!/bin/bash
cargo contract build --release;

seedfile() {
   mkdir -p "$(dirname "$1")"
   touch "$1"
}

seedfile ../../../../wavedata-api/contract/ink_contracts/metadata.json;
cp ./target/ink/metadata.json ../../../../wavedata-api/contract/ink_contracts/metadata.json;
