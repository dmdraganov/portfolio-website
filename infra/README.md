# Production delivery

`compose.yaml` runs a commit-pinned standalone application image behind a private Nginx proxy. The proxy is the only service that publishes ports `80` and `443`; the application is reachable only on the `private` Compose network.

## Build a release artifact

Start from a clean, fully verified commit. Build on the release workstation (never from a VPS checkout):

```sh
scripts/release-build.sh https://example.ru 123456789 /absolute/path/to/release-artifacts
```

The script builds the application and proxy from that commit, saves both images to one tarball, and writes a SHA-256 sidecar. Keep the tarball and sidecar as the release evidence and preserve the previous verified pair for rollback.

## Transfer and deploy

On the release workstation, transfer the archive, SHA-256 file, `compose.yaml`, and this commit's `deploy/` directory to the VPS. On the VPS, first verify and load the exact artifact:

```sh
sha256sum -c portfolio-website-<commit>.tar.sha256
docker load --input portfolio-website-<commit>.tar
```

Create a release environment file outside the checkout with the exact values printed by `release-build.sh`:

```dotenv
SOURCE_COMMIT=<commit>
PORTFOLIO_IMAGE=portfolio-website:<commit>
PORTFOLIO_PROXY_IMAGE=portfolio-website-proxy:<commit>
SITE_HOST=example.ru
TLS_CERTS_DIR=/srv/portfolio/tls
```

`TLS_CERTS_DIR` must provide `live/<SITE_HOST>/fullchain.pem` and `privkey.pem`. It is mounted read-only. Then deploy from the transferred release directory:

```sh
docker compose --env-file /srv/portfolio/release.env up -d --remove-orphans
SMOKE_EXPECTED_COMMIT=<commit> scripts/release-smoke.sh https://example.ru
```

The smoke check requires all three HTML routes and discovers one framework asset, one `/media/` asset, and one optimized Next image from the rendered Home HTML. With `SMOKE_EXPECTED_COMMIT`, it also checks that the private app health response contains the immutable source commit.

## Roll back

Keep the immediately preceding verified image tarball, sidecar, compose file, and environment values. To roll back, verify and load that tarball, change only `SOURCE_COMMIT`, `PORTFOLIO_IMAGE`, and `PORTFOLIO_PROXY_IMAGE` in the release environment file to the prior values, then run:

```sh
docker compose --env-file /srv/portfolio/release.env up -d --remove-orphans
SMOKE_EXPECTED_COMMIT=<previous-commit> scripts/release-smoke.sh https://example.ru
```

Do not rebuild on the VPS during a rollback.
