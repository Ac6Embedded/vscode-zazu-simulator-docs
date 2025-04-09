---
sidebar_position: 1
---

# Simulate a STM32 project

This section is a tutorial that guides you through the use of Zazu and shows you the steps you need to take to launch your first simulation of “blinky” application for the STM32WBA55CG board using STM32 VS Code Extension.

## Create your application for the STM32WBA55CG

The following link provides a tutorial to guide you through creating your project using STM32 VS Code Extension : [link](https://community.st.com/t5/stm32-mcus/how-to-use-vs-code-with-stm32-microcontrollers/ta-p/742589)

### Configure the simulator

1. Click on "Zazu Configuration" to open the Zazu Configuration view
![zazuConfigurationView](/img/zazuConfigurationView.png)  

2. The **View Configuration** consists of three sections:  
    - **Ports**: Allows configuration of the generator's ports, primarily for advanced use.  
    - **Projects**: Contains the necessary information for the simulator to interact with your project.  
    - **Simulator**: Includes simulator-specific configurations, useful for advanced scenarios. 

3. We will configure the **Projects** section using the **blinky** example created in [the first step](#create-your-application-for-the-STM32WBA55CG). 

4. Select the **STM32WBA55CG** board and keep the default debugger.
 ![GDBAutoCompletion](/img/gdb-completion.gif)  
If you have installed **STM32 VS Code Extension** and configured it, the "GDB Path" will be filled in automatically. Otherwise, enter them manually.

6. Click on the **Project Path** field—a dropdown list of projects in your workspace will appear. Select **blinky**.  
![AutoCompletion](/img/exec-completion.gif)  
If you have compiled your program, the "Executable Path" will be filled in automatically. Otherwise, enter them manually.

### Start the simulation

When you press Run or Debug, the configurations are automatically saved. However, if you want to save your configurations without starting a simulation, simply click Apply.

- Run: Starts the simulation.
- Debug: Starts the simulation with a debugging instance.

1. Click on "Debug" and start the debug
![Debug](/img/debugwba55cg.png) 