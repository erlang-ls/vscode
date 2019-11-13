FROM erlang:21

RUN curl -sL https://deb.nodesource.com/setup_12.x | bash -

RUN apt update && apt install -y \
        git \
        make \
        nodejs \
 && apt -y autoremove \
 && apt -y clean \
 && rm -rf /var/lib/apt/lists/*
