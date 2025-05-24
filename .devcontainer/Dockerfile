FROM mcr.microsoft.com/devcontainers/javascript-node:20

# Install additional OS packages
RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
    && apt-get -y install --no-install-recommends \
    git \
    curl \
    && apt-get clean -y \
    && rm -rf /var/lib/apt/lists/*

# Set working directory
WORKDIR /workspace

# Set environment variables
ENV NODE_ENV=development
ENV PATH=/workspace/node_modules/.bin:$PATH

# Install global npm packages
RUN npm install -g npm@latest

# Set up non-root user
USER node