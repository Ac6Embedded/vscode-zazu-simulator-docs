---
sidebar_position: 3
---

# Installation

## Requirements

* VS Code
* On Linux: Bash
* On macOS: Bash

## Installation

The installation consists on installing the VSCode extension then the host tools required for the Zazu simulator

1. Open Visual Studio Code then enter the Extension Marketplace
2. Search for "Zazu" extension
3. Click on Install

![Install from Marketplace](/img/marketplace.png)

## Dependencies Installation

Zazu requires you to install some host dependencies. 

Zazu relies on the following dependencies:  

- [**Renode**](https://github.com/renode/renode): An open-source simulation software.  
- **zazu-templates**: A collection of files that enable visualization of the simulation.  

These files are installed in: `$HOME/.ac6-zazu`.

#### Install Dependencies

1. Click on "ZAZU" button on the VSCode activity bar
2. Click on "InstallDependencies" to download and to install the Zazu dependencies
![InstallDependencies](/img/InstallDependencies.png)
3. Once the installation is complete, the button will update to display the version of the dependencies
![DependenciesInstalled](/img/DependenciesInstalled.png)

## Debug Requirements

To be able to debug, you'll need to install a tool chain that matches the architecture of your target device.