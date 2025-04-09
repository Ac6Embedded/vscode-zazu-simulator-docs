---
sidebar_position: 2
---

# Advanced Configuration

## **Zazu Configuration Overview**

This section provides an in-depth explanation of the available configuration options within Zazu.

### **Ports Configuration**

To configure the ports, go to the **Configuration Menu** and click on **Ports**. This will open the port settings, which are critical for establishing communication between Zazu and the debugging tools.

![Zazu Ports Configuration](/img/portsconfig.png)

You will find the following fields in the **Ports** configuration:

- **GDB Port**: The port used by the GDB server created by Renode. VS Code connects to this port to initiate debugging sessions.
- **Board View Port**: The localhost port used for visualizing the board's state within Zazu. This allows you to monitor board behavior in real time.
- **Internal Port**: The communication port used internally between Renode and Zazu to synchronize operations and debug information.

### **Simulator Configuration**

Next, navigate to the **Configuration Menu** and click on **Simulator** to open the simulation-related settings.

![Zazu Simulator Configuration](/img/simulatorconfig.png)

This section contains the following fields:

- **Board Visualization Path**: This field is automatically populated once all dependencies are installed. It points to the directory containing the necessary files for visualizing the board in the simulation.
- **Renode Path**: This field defines the installation path for Renode, the simulation tool. The path is set automatically when you click **Install Dependencies**, ensuring that Renode is correctly linked to Zazu.

---

By understanding and configuring these options, you can fully customize the behavior of Zazu for debugging and simulation tasks. These settings enable you to fine-tune communication, visualization, and simulation processes to match your specific needs.
