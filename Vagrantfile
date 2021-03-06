# -*- mode: ruby -*-
# vi: set ft=ruby :

# Vagrantfile API/syntax version. Don't touch unless you know what you're doing!
VAGRANTFILE_API_VERSION = "2"

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|
  # All Vagrant configuration is done here. The most common configuration
  # options are documented and commented below. For a complete reference,
  # please see the online documentation at vagrantup.com.

  config.vm.box_url = "https://atlas.hashicorp.com/ubuntu/boxes/trusty64"
  config.vm.box = "ubuntu/trusty64"
  config.vm.host_name = "fsm-vagrant"

  config.vm.network "private_network", ip: "192.168.6.3"

  # config.vm.forward_port 80, 8280
  # web tier
  # config.vm.network "forwarded_port", guest: 5000, host: 5000
  # db
  # config.vm.network "forwarded_port", guest: 5432, host: 5432

  # If true, then any SSH connections made will enable agent forwarding.
  # Default value: false
  config.ssh.forward_agent = true
  config.ssh.forward_x11 = true

  # Share an additional folder to the guest VM. The first argument is
  # the path on the host to the actual folder. The second argument is
  # the path on the guest to mount the folder. And the optional third
  # argument is a set of non-required options.
  config.ssh.forward_agent = true

  # Sync folders
  config.vm.synced_folder ".", "/vagrant/", create: true

  # Configure VM box
  config.vm.provider :virtualbox do |vb|
    vb.customize ["modifyvm", :id, "--memory", "1024", "--cpus", "1"]
  end

  # Provision with a shell script
  config.vm.provision "shell", path: "vagrant/provision/provision.sh"

  # Install base files (owned by the vagrant user)
  config.vm.provision "file", source: "vagrant/provision/files/.profile", destination: "/home/vagrant/.profile"

  # Copy .git config
  config.vm.provision "file", source: "~/.gitconfig", destination: "/home/vagrant/.gitconfig"
  # Copy .bashrc
  config.vm.provision "file", source: "~/.bashrc", destination: "/home/vagrant/.bashrc"

end
