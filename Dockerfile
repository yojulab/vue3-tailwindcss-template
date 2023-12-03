# See here for image contents: https://github.com/microsoft/vscode-dev-containers/tree/v0.217.4/containers/javascript-node/.devcontainer/base.Dockerfile

# [Choice] Node.js version (use -bullseye variants on local arm64/Apple Silicon): 16, 14, 12, 16-bullseye, 14-bullseye, 12-bullseye, 16-buster, 14-buster, 12-buster
ARG VARIANT="16-bullseye"
FROM mcr.microsoft.com/vscode/devcontainers/javascript-node:0-${VARIANT}

# 시간 및 날짜 설정
ENV TZ Asia/Seoul

RUN apt-get update && apt-get install -y locales
RUN locale-gen ko_KR.UTF-8
RUN export LC_ALL=ko_KR.UTF-8

# 테마 적용
RUN sed -i 's/codespaces/agnoster/' /home/node/.zshrc
RUN sed -i'' -r -e "/prompt_hg/a\  prompt_newline" /home/node/.oh-my-zsh/themes/agnoster.zsh-theme

# [Optional] Uncomment if you want to install an additional version of node using nvm
ARG EXTRA_NODE_VERSION=16.14.0
RUN su node -c "source /usr/local/share/nvm/nvm.sh && nvm install ${EXTRA_NODE_VERSION}"

# [Optional] Uncomment if you want to install more global node modules
RUN su node -c "npm install -g yarn @vue/cli parcel-bundler"
