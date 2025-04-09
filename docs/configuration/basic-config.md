---
sidebar_position: 1
---

# Basic Configuration

## Configure the simulator

1. Click on "Zazu Configuration" to open the Zazu Configuration view
![zazuConfigurationView](/img/zazuConfigurationView.png)  

2. The **View Configuration** consists of three sections:  
    - **Ports**: Allows configuration of the generator's ports, primarily for advanced use.  
    - **Projects**: Contains the necessary information for the simulator to interact with your project.  
    - **Simulator**: Includes simulator-specific configurations, useful for advanced scenarios. 

## **Field Descriptions**  

You will see several fields in the following order:  

- **Board Name**: Allows you to select your target board.  
- **Debugger**: Lets you choose your debugger. We recommend using **cppdbg** for VS Code.  
- **Project Path**: Specifies the folder of your project, where the configuration will be saved inside a `.vscode` directory.  
- **Executable Path**: Defines the executable you want to load into the simulator.  
- **GDB Path**: Specifies the path to your toolchain's GDB for debugging your project.


