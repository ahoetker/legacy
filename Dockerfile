FROM python:3.6-stretch

RUN adduser serveruser

WORKDIR /home/serveruser

COPY requirements.txt /

RUN \
    python3 -m pip --no-cache-dir install pip --upgrade && \
    python3 -m pip --no-cache-dir install setuptools --upgrade && \
    python3 -m pip --no-cache-dir install wheel --upgrade && \
    python3 -m pip --no-cache-dir install -r /requirements.txt && \
    rm -rf /root/.cache

COPY app app
COPY legacy legacy
COPY tests tests
COPY config.py setup.py webapp.py wsgi.py docker/boot.sh docker/wait_for_it.sh ./

RUN mkdir ./resources
RUN mkdir ./local_data
RUN chmod +x boot.sh wait_for_it.sh
RUN chown -R serveruser:serveruser ./
USER serveruser

EXPOSE 5000
ENTRYPOINT ["./boot.sh"]
