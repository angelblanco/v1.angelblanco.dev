---
id: 3
date: '2020-09-19'
tweet: '1311017241203429377'
title: 'Install docker and docker compose on Ubuntu 20.04'
description: 'Learn to install docker and docker-compose with some easy copy-paste steps on the latest Ubuntu'
shareImage: '/share/install-docker-and-docker-compose-on-ubunt-20.04.png'
intro: |
  We are going to see how to install docker and docker compose on ubuntu 20.04 following the official documentation for your personal computer. Having docker installed on your local machine will let you have isolated containers (think of them as virtual machines) for each of your individual projects or scenarios.

  With docker you can have a nginx, a php-fpm, a mysql database, a mongodb instance, a redis with just a git pull of your repo. All the developers that run the same code will also have the same endpoint versions of the software. Sounds right? Lets install it!.
tags: ['docker']
---

## Docker installation

> This guide is a resume of the lines exposed by the [offical docker install for Ubuntu](https://docs.docker.com/install/linux/docker-ce/ubuntu/). If you got any problem you might refer to it looking for any change!

```bash
sudo apt-get remove docker docker-engine docker.io containerd runc

sudo apt-get update

sudo apt-get install \
    apt-transport-https \
    ca-certificates \
    curl \
    gnupg-agent \
    software-properties-common

curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -

sudo add-apt-repository \
   "deb [arch=amd64] https://download.docker.com/linux/ubuntu \
   $(lsb_release -cs) \
   stable"

sudo apt-get update

sudo apt-get install docker-ce docker-ce-cli containerd.io
```

At this point you must have access to docker as **root user**. We can verify it by runinng the following command.

```bash
sudo docker run hello-world
```

It's a little bit hidden on the docker docs but most developers need to follow the docker's [linux post installs intructions](https://docs.docker.com/install/linux/linux-postinstall).

### Non-root user docker install

The fist common task its to allow docker to be executed for non-root user in order to do that you could run the following commands:

```bash
# !! WARNING: non-root user
sudo groupadd -f docker
sudo usermod -aG docker $USER
newgrp docker
docker run hello-world
```

### Start docker on system boot

It's also usal to start the docker containers on system boot. If you want to achieve it you could enable it on `systemd`. You can read more about how to start containers automatically in [the official documentation](https://docs.docker.com/config/containers/start-containers-automatically/).

```
sudo systemctl enable docker
```

## Docker-compose installation

Normally in your applications yo will a need multi-container application. For example if you need a redis, a php-fpm service and a mysql database you probably need docker compose.
By defining a `docker-compose.yml` file you will have the hability to configure your application's services.

> This guide is a resume of the lines exposed by the [official install documentation](https://docs.docker.com/compose/install/#linux). If you got any problem you might refer to it looking for any change!

With this simple two lines you will the latest stable version of docker compose and make it executable.

```bash
sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
```

Finally we test the installation by checking it with `--version`. You should have installed the [latest docker-compose version](https://github.com/docker/compose/releases/latest).

```bash
docker-compose --version
# docker-compose version X.XX.XX, build 8a1c60f6
```
