#!/usr/bin/env sh
set -eu

if [ "$#" -ne 3 ]; then
  echo "Usage: $0 <site-url> <yandex-metrica-id> <output-directory>" >&2
  exit 64
fi

site_url=$1
metrica_id=$2
output_dir=$3
source_commit=$(git rev-parse --verify HEAD)

if [ -n "$(git status --porcelain)" ]; then
  echo "Refusing to build a release artifact from a dirty worktree." >&2
  exit 1
fi

case "$output_dir" in
  /*) ;;
  *)
    echo "Output directory must be an absolute path." >&2
    exit 64
    ;;
esac

app_image="portfolio-website:${source_commit}"
proxy_image="portfolio-website-proxy:${source_commit}"

mkdir -p "$output_dir"

docker build \
  --build-arg "SITE_URL=$site_url" \
  --build-arg "YANDEX_METRICA_ID=$metrica_id" \
  --build-arg "SOURCE_COMMIT=$source_commit" \
  --tag "$app_image" \
  .

docker build \
  --build-arg "SOURCE_COMMIT=$source_commit" \
  --tag "$proxy_image" \
  deploy/nginx

archive="$output_dir/portfolio-website-$source_commit.tar"
docker save --output "$archive" "$app_image" "$proxy_image"
sha256sum "$archive" >"$archive.sha256"

printf 'SOURCE_COMMIT=%s\nPORTFOLIO_IMAGE=%s\nPORTFOLIO_PROXY_IMAGE=%s\nARCHIVE=%s\nSHA256=%s\n' \
  "$source_commit" "$app_image" "$proxy_image" "$archive" "$(cut -d ' ' -f 1 "$archive.sha256")"
