#!/usr/bin/env sh
set -eu

if [ "$#" -ne 1 ]; then
  echo "Usage: $0 <https-base-url>" >&2
  exit 64
fi

base_url=${1%/}
work_dir=$(mktemp -d)
trap 'rm -rf "$work_dir"' EXIT

require_status() {
  path=$1
  output=$2
  status=$(curl --silent --show-error --location --output "$output" --write-out '%{http_code}' "$base_url$path")
  if [ "$status" != 200 ]; then
    echo "Expected 200 for $path, received $status." >&2
    exit 1
  fi
}

for path in / /projects/weather-app /projects/sound-engineer; do
  require_status "$path" "$work_dir/$(echo "$path" | tr '/' '_').html"
done

home_html=$work_dir/_.html
framework_asset=$(grep -Eo '(/_next/static/[^" ]+\.(css|js))' "$home_html" | head -n 1 || true)
media_asset=$(grep -Eo '(/media/[^" ]+)' "$home_html" | head -n 1 || true)
optimized_image=$(grep -Eo '(/_next/image\?[^" ]+)' "$home_html" | head -n 1 || true)
optimized_image=$(printf '%s' "$optimized_image" | sed 's/\&amp;/\&/g')

for asset in "$framework_asset" "$media_asset" "$optimized_image"; do
  if [ -z "$asset" ]; then
    echo "Could not discover a representative framework, media, or optimized-image asset from /." >&2
    exit 1
  fi
  require_status "$asset" "$work_dir/asset"
done

if [ -n "${SMOKE_EXPECTED_COMMIT:-}" ]; then
  require_status /healthz "$work_dir/healthz"
  if ! grep -Fq "$SMOKE_EXPECTED_COMMIT" "$work_dir/healthz"; then
    echo "Health response does not contain the expected source commit." >&2
    exit 1
  fi
fi

printf 'Smoke passed for %s\n' "$base_url"
