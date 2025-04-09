---
sidebar_position: 3
---

# JSON Configuration

## **Zazu Configuration Overview**  

VS Code and its extensions can also be manually configured using JSON files. This allows you to fully customize your development environment by modifying these configuration files. The two most commonly used files for this purpose are **`launch.json`** and **`tasks.json`**.

In **VS Code**, the **`launch.json`** and **`tasks.json`** files are used to configure and automate project execution and debugging.  

---

## **1️⃣ `launch.json` (Debug Configuration)**
This file defines how to **run and debug** a project in VS Code. It is located in:  
📂 **.vscode/launch.json**  

### **🔹 What is it used for?**  
- Launching a program with **specific options** (arguments, environment variables, etc.).  
- Setting up an **entry point** for debugging.  
- Attaching a debugger to an already running process.  
- Defining **breakpoints**, **logs**, or **stepping through execution**.  

### **🔹 Zazu launch configuration:**  
```json
{
    "version": "0.2.0",  // Version of the debug configuration schema
    "configurations": [
        {
            "name": "Zazu",  // Name of the debugging configuration, visible in the VS Code UI
            "type": "cppdbg",  // Debugger type for C++ (cppdbg)
            "request": "launch",  // Specifies that this configuration is for launching the program
            "preLaunchTask": "Run Zazu",  // Calls the preLaunchTask "Run Zazu" before launching the debugger (defined in tasks.json)
            "miDebuggerServerAddress": "localhost:3990",  // Address of the debugger server (localhost in this case)
            "cwd": "${workspaceRoot}",  // The current working directory (root of the workspace)
            "stopAtEntry": true,  // Tells the debugger to stop at the program's entry point (start)
            "miDebuggerPath": "/home/lakbiri/tarek/arm-zephyr-eabi-gdb",  // Path to the GDB debugger executable
            "program": "${config:ac6-zazu.projectPath}/zephyr.elf",  // Path to the ELF executable to debug
            "svdPath": "${config:ac6-zazu.installDir}/NUCLEO_WBA55CG.svd"  // Path to the System View Description file (used for debugging hardware/simulation)
        }
    ]
}

``` 
---

## **2️⃣ `tasks.json` (Task Automation)**
This file is used to **execute automated tasks** like compiling, testing, or linting. It is located in:  
📂 **.vscode/tasks.json**  

### **🔹 What is it used for?**  
- Running **custom commands** without opening a terminal.  
- Automatically compiling code (**TypeScript, C++, Java...**).  
- Automating the execution of **unit tests** or **scripts**.  
- Chaining multiple tasks together.  

### **🔹 "Run Zazu" task to start Renode:**  
```json
{
    "label": "Run Zazu",  // The name/label of the task that can be referenced in other configurations
    "type": "process",  // Type of task, indicating this is a process-based task (running a command)
    "command": "${command:zazu.debugZazuCommand}",  // The command to execute, referring to a custom command defined elsewhere
    "args": [
        "${workspaceRoot}"  // Arguments passed to the command, in this case, the root of the workspace
    ],
    "problemMatcher": [],  // Defines any problem matchers to link issues to the task (empty here)
    "dependsOn": [
        "West Build"  // Specifies that this task depends on the completion of another task, "West Build"
    ],
    "options": {
        "localHostPort": "8657",  // Local port for communication with the task
        "internalPort": "9657",  // Internal port for the task's process
        "boardName": "NUCLEO_WBA55CG",  // The name of the hardware board being used for debugging
        "boardVisuPath": "${config:ac6-zazu.installDir}/templates",  // Path to templates used for board visualization
        "renodePath": "${config:ac6-zazu.installDir}/renode/renode"  // Path to the Renode tool for simulating embedded hardware
    },
    "group": {
        "isDefault": true  // Indicates this task is the default task for the group (the first task run in the group)
    }
}

``` 

---
