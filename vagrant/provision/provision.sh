#!/bin/bash -eu

set -o pipefail

echo "Running provision script as `whoami`"
sleep 2

# Configure APT to use Canadian mirror
sed -i -e 's/us.archive.ubuntu.com/ca.archive.ubuntu.com/' /etc/apt/sources.list
sed -i -e 's/security.ubuntu.com/security.ca.archive.ubuntu.com/' /etc/apt/sources.list
sudo apt-get update

# Utilities
sudo apt-get -y install htop wget curl apt-file

# Google Chrome repo
wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | sudo apt-key add -
sudo apt-add-repository 'deb http://dl.google.com/linux/chrome/deb/ stable main'

# NodeSource repo with up to date node
curl -sL https://deb.nodesource.com/setup_5.x | bash -

# Update the APT cache now that all the PPAs have been configured
sudo apt-get update

# Install key packages for development
sudo apt-get install -y git nodejs \
    xfonts-scalable \
    google-chrome-stable xvfb xfonts-100dpi xfonts-75dpi \
    libjpeg-dev libpng-dev

# Move to the sync'd project directory
cd /vagrant

# Run installations
npm install

# Set up privileged files
sudo cp vagrant/provision/files/sync-clock.sh /etc/cron.hourly/sync-clock.sh
sudo chmod +x /etc/cron.hourly/sync-clock.sh

echo "Provisioning script is done"
