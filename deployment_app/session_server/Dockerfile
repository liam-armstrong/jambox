FROM alpine:3.11 as builder

ENV JAMULUS_VERSION 3_7_0

RUN \
 echo "**** updating system packages ****" && \
 apk update

RUN \
 echo "**** install build packages ****" && \
   apk add --no-cache --virtual .build-dependencies \
        build-base \
        wget \
        qt5-qtbase-dev \
        qt5-qttools-dev \
        qtchooser

WORKDIR /tmp
RUN \
 echo "**** getting source code ****" && \
   wget "https://github.com/jamulussoftware/jamulus/archive/r${JAMULUS_VERSION}.tar.gz" && \
   tar xzf r${JAMULUS_VERSION}.tar.gz

# Github directory format for tar.gz export
WORKDIR /tmp/jamulus-r${JAMULUS_VERSION}
RUN \
 echo "**** compiling source code ****" && \
   qmake "CONFIG+=nosound headless" Jamulus.pro && \
   make clean && \
   make && \
   cp Jamulus /usr/local/bin/ && \
   rm -rf /tmp/* && \
   apk del .build-dependencies

FROM node:16-alpine

RUN apk add --update --no-cache \
    qt5-qtbase-x11 icu-libs tzdata openrc

COPY --from=builder /usr/local/bin/Jamulus /usr/local/bin/Jamulus

VOLUME /sys/fs/cgroup

COPY jamulus.initrc /etc/init.d/jamulus
RUN chmod +x /etc/init.d/jamulus
RUN rc-update add jamulus default\
    && mkdir /run/openrc\
    && touch /run/openrc/softlevel      # Workaround for the Error Message

COPY ./node/nodeapp.initrc /etc/init.d/nodeapp 
RUN chmod +x /etc/init.d/nodeapp
RUN rc-update add nodeapp default

COPY starter.sh starter.sh

WORKDIR /app
COPY ./node/package.json /app
RUN npm install
COPY ./node /app

COPY starter.sh starter.sh

CMD sh /app/starter.sh

# CMD tail -f /dev/null
