#
# ---- Base Node ----
# https://hub.docker.com/_/nginx/?tab=description
FROM nginx:1.19.7-alpine

ARG BUILD_NR
ENV BUILD_NR=${BUILD_NR}

ARG BUILD_DATE
ENV BUILD_DATE=${BUILD_DATE}

ARG BUILD_BRANCH
ENV BUILD_BRANCH=${BUILD_BRANCH}

ARG BUILD_COMMIT
ENV BUILD_COMMIT=${BUILD_COMMIT}

# set working directory
WORKDIR /usr/share/nginx/html

COPY ./storybook-static /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]
