FROM ubuntu:16.10
MAINTAINER Austin Middleton

RUN apt-get update

RUN apt-get install -y python3-pip

#pip is installed but needs to upgraded because the apt repo is behind
RUN pip3 install --upgrade pip

#the upgrade version of pip runs as `pip` NOT `pip3`
ADD requirements.txt requirements.txt
RUN pip install -r requirements.txt

EXPOSE 80
WORKDIR /var/reddiful
ENTRYPOINT ["gunicorn", "--access-logfile", "-", "--error-logfile", "-", "-b", "0.0.0.0:80", "--reload", "--worker-class", "eventlet","app.api:app"]
