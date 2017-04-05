FROM ubuntu:16.10
MAINTAINER Austin Middleton

RUN apt-get update

RUN apt-get install -y python3-pip

#pip is installed but needs to upgraded because the apt repo is behind
RUN pip3 install --upgrade pip

#the upgrade version of pip runs as `pip` NOT `pip3`
RUN pip install\
    Flask\
    eventlet\
    gunicorn\
    SQLAlchemy\
	psycopg2\
	requests

EXPOSE 8080
WORKDIR /var/reddiful/app
ENTRYPOINT ["gunicorn", "--access-logfile", "-", "--error-logfile", "-", "-b", "0.0.0.0:8080", "--reload", "--worker-class", "eventlet","api:app"]
