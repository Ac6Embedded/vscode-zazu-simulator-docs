---
sidebar_position: 10
---
# Debug Session

## Create and configure the debug session

### Zazu Configuration

To create or configure the debug session, click on "Zazu Configuration" to open a debug configuration form.

![Debug Manager](/img/zazuConfigurationView.png)

1. The **View Configuration** consists of three sections:  
    - **Ports**: Allows configuration of the generator's ports, primarily for advanced use.  
    - **Projects**: Contains the necessary information for the simulator to interact with your project.  
    - **Simulator**: Includes simulator-specific configurations, useful for advanced scenarios. 

2. Select the right board for your project

3. Click on the **Project Path** field—a dropdown list of projects in your workspace will appear. Select your project.  
![AutoCompletion](/img/AutoCompletion.gif)  

### Start debugging

To start the debug session, click on "Debug".
If a previous debug session was already configure, you can relaunch the debug session from VS Code **Run and Debug** view.
1. Go to the "Run and Debug" (Ctrl+Shift+D) activity panel
2. Select the launch configuration for your project
3. Click on the Run button
   
![Run and Debug](/img/debug/debug_run_session.png)

## Debug your application

After starting the debug session, the code should breaks on main or earlier (depends on optimizations set up for your project). 
![Debug Overview](/img/debug/debug_overview.png)

### Debug actions

The "Debug Toolbar" appears on the top and allows you to: 
![Debug Toolbar](/img/debug/zw_debug_toolbar.png)

| Action                      | Explanation               | 
| --------------------------- | ------------------- | 
| **Continue/Pause** `F5`     | Continue: Resume normal program/script execution (up to the next breakpoint). Pause: Inspect code executing at the current line and debug line-by-line.  |
| **Step Over** `F10`         | Execute the next method as a single command without inspecting or following its component steps.    | 
| **Step Into** `F11`         | Enter the next method to follow its execution line-by-line.     | 
| **Step Out** `Shift+F11`    | When inside a method or subroutine, return to the earlier execution context by completing remaining lines of the current method as though it were a single command.     | 
| **Restart** `Ctrl+Shift+F5` | Terminate the current program execution and start debugging again using the current run configuration.    | 
| **Stop** `Shift+F5`         | Terminate the current program execution.    | 


### Data inspect

Inspect variables and CPU registers on the left panel
![Debug Variables](/img/debug/zw_debug_variables.png)

If the SVD file was set in the debug configuration, the peripherals are displayed in the "xperipherals" view.
![Debug XPeripherals](/img/debug/zw_debug_xperipherals.png)

To debug in disassembly, right-click on the code then select "Open Disassembly View".
![Debug Open DASM](/img/debug/zw_debug_open_disasm.png)
![Debug DASM](/img/debug/zw_debug_disasm.png)

More information about [Debugging on VSCODE](https://code.visualstudio.com/docs/editor/debugging)