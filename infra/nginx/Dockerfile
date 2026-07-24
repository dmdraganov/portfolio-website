FROM nginx:1.30.4-alpine

ARG SOURCE_COMMIT

LABEL org.opencontainers.image.source-commit=${SOURCE_COMMIT}

COPY nginx.conf.template /etc/nginx/templates/default.conf.template
