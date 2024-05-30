FROM ianwalter/puppeteer:latest
WORKDIR /app
ADD . /app

RUN curl -sL https://deb.nodesource.com/setup_20.x | sudo -E bash - && \
    sudo apt-get install -y nodejs

COPY package.json ./
RUN npm install

COPY . /appium-tests

EXPOSE 4723

ARG test_script

RUN if [ "${test_script}" == "individual-appointment" ]; then \
    echo "Running individual appointment test script"; \
    npm run ia; \
elif [ "${test_script}" == "group-appointment" ]; then \
    echo "Running group appointment test script"; \
    npm run ga; \
fi

CMD npx wdio