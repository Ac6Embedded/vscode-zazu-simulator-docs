---
sidebar_position: 3
---

# Simulate a RISCV project
This section is a tutorial that guides you through the use of Zazu and shows you the steps you need to take to launch your first simulation of “hello_world” application for the SiFive_HiFive1 board using Zephyr Workbench.

## Create your application for the SiFive_HiFive1

To simulate an application, it must first be created. We recommend using the Zephyr Workbench tool for this purpose. The following link provides a tutorial to guide you through creating your project : [link](https://zephyr-workbench.com/docs/category/getting-started)

### Configure the simulator

1. Click on "Zazu Configuration" to open the Zazu Configuration view
![zazuConfigurationView](/img/zazuConfigurationView.png)  

2. The **View Configuration** consists of three sections:  
    - **Ports**: Allows configuration of the generator's ports, primarily for advanced use.  
    - **Projects**: Contains the necessary information for the simulator to interact with your project.  
    - **Simulator**: Includes simulator-specific configurations, useful for advanced scenarios. 

3. We will configure the **Projects** section using the **blinky** example created in [the first step](#create-your-application-for-the-SiFive_HiFive1). 

4. Select the **SiFive_HiFive1** board and keep the default debugger.

6. Click on the **Project Path** field—a dropdown list of projects in your workspace will appear. Select **hello_world**.  
![AutoCompletion](/img/AutoCompletion.gif)  
If you have installed **Zephyr Workbench** and compiled your program, the other fields will be filled in automatically. Otherwise, enter them manually.

### Start the simulation

When you press Run or Debug, the configurations are automatically saved. However, if you want to save your configurations without starting a simulation, simply click Apply.

- Run: Starts the simulation.
- Debug: Starts the simulation with a debugging instance.

1. Click on "Debug" and start the debug
![Debug](/img/debugsifive.png) 
