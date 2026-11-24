#!/usr/bin/env bash
set -euo pipefail
root="$(cd "$(dirname "$0")/.." && pwd)"
cd "$root"
if [[ ! -d packed ]]; then
  echo "packed/ missing; nothing to unpack"
  exit 0
fi
tmpdir="$(mktemp -d)"
trap 'rm -rf "$tmpdir"' EXIT
cat packed/assets.tar.gz.b64.* | tr -d '\n\r' | base64 -d > "$tmpdir/assets.tar.gz"
echo "$(cut -d' ' -f1 packed/SHA256)  $tmpdir/assets.tar.gz" | sha256sum -c -
tar -xzf "$tmpdir/assets.tar.gz"
echo "Unpacked site assets."
