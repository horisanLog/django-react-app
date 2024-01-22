FROM python:3.8.8-slim

# ENV PYTHONBUFFERED 1
RUN pip install --upgrade pip

COPY ./requirements.txt .
RUN pip install -r requirements.txt

COPY . /app
WORKDIR /app

CMD python3 manage.py runserver 0.0.0.0:8000
