---
sidebar_label: 'Getting Started '
sidebar_position: 2
---

# Getting Started

This section is a tutorial that guides you through the use of Zazu and shows you the steps you need to take to launch your first simulation of “hello_world” application for the STM32F4_DISCOVERY board.

## Create your application for the STM32F4_DISCOVERY

To simulate an application, it must first be created. We recommend using the Zephyr Workbench tool for this purpose. The following link provides a tutorial to guide you through creating your project : [link](https://zephyr-workbench.com/docs/category/getting-started)

However zazu also offers the following solutions:

- MCUXpresso
- STM32CubeIDE
- STM32 VS Code Extension
- PlatformIO

## Setting Up the Zazu simulation

### Install Dependencies

1. Click on "ZAZU" button on the VSCode activity bar
2. Click on "InstallDependencies" to download and to install the Zazu dependencies
![InstallDependencies](/img/InstallDependencies.png)
3. Once the installation is complete, the button will update to display the version of the dependencies
![DependenciesInstalled](/img/DependenciesInstalled.png)

### Configure the simulator

1. Click on "Zazu Configuration" to open the Zazu Configuration view
![zazuConfigurationView](/img/zazuConfigurationView.png)  

2. The **View Configuration** consists of three sections:  
    - **Ports**: Allows configuration of the generator's ports, primarily for advanced use.  
    - **Projects**: Contains the necessary information for the simulator to interact with your project.  
    - **Simulator**: Includes simulator-specific configurations, useful for advanced scenarios. 

3. We will configure the **Projects** section using the **hello_world** example created in [the first step](#create-your-application-for-the-stm32f4_discovery). 



4. Select the **STM32F4_Discovery** board and keep the default debugger.  

6. Click on the **Project Path** field—a dropdown list of projects in your workspace will appear. Select **hello_world**.  
![AutoCompletion](/img/AutoCompletion.gif)  
If you have installed **Zephyr Workbench** and compiled your program, the other fields will be filled in automatically. Otherwise, enter them manually.

### Start the simulation

When you press Run or Debug, the configurations are automatically saved. However, if you want to save your configurations without starting a simulation, simply click Apply.

- Run: Starts the simulation.
- Debug: Starts the simulation with a debugging instance.

1. Click on "Debug" and start the debug
![Debug](/img/debug.gif) 

Congratulations, you have just launched your first simulation with Zazu!