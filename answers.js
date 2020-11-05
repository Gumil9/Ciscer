/*Answers to multiple choice and fill-in-the-blank questions*/
var add = tests.add;

/*
 * template:
 * add(question, answer0 [, answer1, ...]);
 */

// CCNA4 v7.0 test modules 1-4
add('Which tasks can be accomplished by using the command history feature? (Choose two.)', 'Set the command history buffer size.', 'Recall previously entered commands.');
add('What is the first action in the boot sequence when a switch is powered on?', 'load a power-on self-test program');
add('What must an administrator have in order to reset a lost password on a router?', 'physical access to the router');
add('When configuring a switch for SSH access, what other command that is associated with the login local command is required to be entered on the switch?', 'username username secret secret');
add('Which command displays information about the auto-MDIX setting for a specific interface?​', 'show controllers');
add('If one end of an Ethernet connection is configured for full duplex and the other end of the connection is configured for half duplex, where would late collisions be observed?', 'on the half-duplex end of the connection');
add('Which command is used to set the BOOT environment variable that defines where to find the IOS image file on a switch?', 'boot system');
add('What does a switch use to locate and load the IOS image?', 'BOOT environment variable');
add('Which protocol adds security to remote connections?', 'SSH');
add('What is a characteristic of an IPv4 loopback interface on a Cisco IOS router?​', 'It is a logical interface internal to the router.');
add('What is the minimum Ethernet frame size that will not be discarded by the receiver as a runt frame?', '64 bytes');
add('After which step of the switch bootup sequence is the boot loader executed?', 'after POST execution');
add('Which impact does adding a Layer 2 switch have on a network?', 'an increase in the size of the broadcast domain');
add('Which characteristic describes cut-through switching?', 'Frames are forwarded without any error checking.');
add('What is the significant difference between a hub and a Layer 2 LAN switch?', 'A hub extends a collision domain, and a switch divides collision domains.');
add('Which statement is correct about Ethernet switch frame forwarding decisions?', 'Frame forwarding decisions are based on MAC address and port mappings in the CAM table.');
add('How do switch buffers affect network performance?', 'They store frames received, thus preventing premature frame discarding when network congestion occurs.');
add('Which switch characteristic helps keep traffic local and alleviates network congestion?', 'high port density');
add('Which switch component reduces the amount of packet handling time inside the switch?', 'ASIC');
add('What information is added to the switch table from incoming frames?', 'source MAC address and incoming port number');
add('Which switching method ensures that the incoming frame is error-free before forwarding?', 'store-and-forward');
add('Refer to the exhibit. How many broadcast domains are displayed?', '8');
add('Under which two occasions should an administrator disable DTP while managing a local area network? (Choose two.)', 'when connecting a Cisco switch to a non-Cisco switch', 'on links that should not be trunking');
add('Which two characteristics describe the native VLAN? (Choose two.)', 'The native VLAN traffic will be untagged across the trunk link.', 'The native VLAN provides a common identifier to both ends of a trunk.');
add('On a switch that is configured with multiple VLANs, which command will remove only VLAN 100 from the switch?', 'Switch(config)# no vlan 100');
add('Refer to the exhibit. A network administrator is reviewing port and VLAN assignments on switch S2 and notices that interfaces Gi0/1 and Gi0/2 are not included in the output. Why would the interfaces be missing from the output?', 'They are configured as trunk interfaces.');
add('A network contains multiple VLANs spanning multiple switches. What happens when a device in VLAN 20 sends a broadcast Ethernet frame?', 'Only devices in VLAN 20 see the frame.');
add('Refer to the exhibit. All workstations are configured correctly in VLAN 20. Workstations that are connected to switch SW1 are not able to send traffic to workstations on SW2. What could be done to remedy the problem?', 'Allow VLAN 20 on the trunk link.');
add('What happens to switch ports after the VLAN to which they are assigned is deleted?', 'The ports stop communicating with the attached devices.');
add('Refer to the exhibit. In what switch mode should port G0/1 be assigned if Cisco best practices are being used?', 'trunk');
add('Port Fa0/11 on a switch is assigned to VLAN 30. If the command no switchport access vlan 30 is entered on the Fa0/11 interface, what will happen?', 'Port Fa0/11 will be returned to VLAN 1.');
add('Which command displays the encapsulation type, the voice VLAN ID, and the access mode VLAN for the Fa0/1 interface?', 'show interfaces Fa0/1 switchport');
add('Refer to the exhibit. A technician is programming switch SW3 to manage voice and data traffic through port Fa0/20. What, if anything, is wrong with the configuration?', 'The command used to assign the voice VLAN to the switch port is incorrect.');
add('Which four steps are needed to configure a voice VLAN on a switch port? (Choose four).', 'Assign the voice VLAN to the switch port.', 'Ensure that voice traffic is trusted and tagged with a CoS priority value.', 'Add a voice VLAN.', 'Configure the switch port in access mode.');
add('Refer to the exhibit. PC1 is unable to communicate with server 1. The network administrator issues the show interfaces trunk command to begin troubleshooting. What conclusion can be made based on the output of this command?', 'Interface G0/2 is not configured as a trunk.');
add('Refer to the exhibit. What is the cause of the error that is displayed in the configuration of inter-VLAN routing on router CiscoVille?', 'The encapsulation dot1Q 20 command has not been configured.​');
add('Refer to the exhibit. A network administrator has configured router CiscoVille with the above commands to provide inter-VLAN routing. What command will be required on a switch that is connected to the Gi0/0 interface on router CiscoVille to allow inter-VLAN routing?​', 'switchport mode trunk');
add('A high school uses VLAN15 for the laboratory network and VLAN30 for the faculty network. What is required to enable communication between these two VLANs while using the router-on-a-stick approach?', 'A switch with a port that is configured as a trunk is needed when connecting to the router.');
add('When routing a large number of VLANs, what are two disadvantages of using the router-on-a-stick inter-VLAN routing method rather than the multilayer switch inter-VLAN routing method? (Choose two.)', 'A dedicated router is required.', 'Multiple subinterfaces may impact the traffic flow speed.');
add('Refer to the exhibit. A network administrator is verifying the configuration of inter-VLAN routing. Users complain that PCs on different VLANs cannot communicate. Based on the output, what are two configuration errors on switch interface Gi1/1? (Choose two.)', 'Gi1/1 is in the default VLAN.', 'Gi1/1 is configured as trunk mode.');
add('Refer to the exhibit. A network administrator is verifying the configuration of inter-VLAN routing. Users complain that PC2 cannot communicate with PC1. Based on the output, what is the possible cause of the problem?', 'The encapsulation dot1Q 5 command contains the wrong VLAN.');
add('Refer to the exhibit. A network administrator has configured router CiscoVille with the above commands to provide inter-VLAN routing. What type of port will be required on a switch that is connected to Gi0/0 on router CiscoVille to allow inter-VLAN routing?', 'trunk port');
add('Refer to the exhibit. A network administrator is configuring RT1 for inter-VLAN routing. The switch is configured correctly and is functional. Host1, Host2, and Host3 cannot communicate with each other. Based on the router configuration, what is causing the problem?', 'IP addresses on the subinterfaces are incorrectly matched to the VLANs.');
add('Refer to the exhibit. A router-on-a-stick configuration was implemented for VLANs 15, 30, and 45, according to the show running-config command output. PCs on VLAN 45 that are using the 172.16.45.0 /24 network are having trouble connecting to PCs on VLAN 30 in the 172.16.30.0 /24 network. Which error is most likely causing this problem?​', 'There is an incorrect IP address configured on GigabitEthernet 0/0.30.');
add('What is a characteristic of a routed port on a Layer 3 switch?', 'It is not assigned to a VLAN.');
add('Refer to the exhibit. A network administrator needs to configure router-on-a-stick for the networks that are shown. How many subinterfaces will have to be created on the router if each VLAN that is shown is to be routed and each VLAN has its own subinterface?', '4');
add('A technician is configuring a new Cisco 2960 switch. What is the effect of issuing the BranchSw(config-if)# mdix auto command?', 'It automatically adjusts the port to allow device connections to use either a straight-through or a crossover cable.');
add(' A technician is configuring a new Cisco 2960 switch. What is the effect of issuing the BranchSw(config-if)# ip address 172.18.33.88 255.255.255.0 command?', 'It applies an IPv4 address to the virtual interface.');
add('A technician is configuring a new Cisco 2960 switch. What is the effect of issuing the BranchSw# configure terminal command?', 'It enters the global configuration mode.');
add('A technician is configuring a new Cisco 2960 switch. What is the effect of issuing the BranchSw(config-if)# shutdown command?', 'It disables a virtual or physical switch interface.');
add('A technician is configuring a new Cisco 2960 switch. What is the effect of issuing the BranchSw(config-if)# ipv6 address 2001:db8:a2b4:88::1/64 command?', 'It applies an IPv6 address to the virtual interface.');
add('A technician is configuring a new Cisco 2960 switch. What is the effect of issuing the BranchSw(config-if)# exit command?', 'It returns to global configuration mode.');
add('A technician is configuring a new Cisco 2960 switch. What is the effect of issuing the BranchSw> enable command?', 'It enters privileged mode.');
add('A technician is configuring a new Cisco 2960 switch. What is the effect of issuing the BranchSw(config-if)# duplex full command?', 'It allows data to flow in both directions at the same time on the interface.');
add('What type of VLAN should not carry voice and network management traffic?', 'data VLAN');
add('What type of VLAN is designed to reserve bandwidth to ensure IP Phone quality?', 'voice VLAN');
add('What type of VLAN is initially the management VLAN?', 'default VLAN');
add('What type of VLAN is designed to have a delay of less than 150 ms across the network?', 'voice VLAN');
add('What type of VLAN is used to separate the network into groups of users or devices?', 'data VLAN');
add('What type of VLAN is configured specifically for network traffic such as SSH, Telnet, HTTPS, HHTP, and SNMP?', 'management VLAN');
add('What type of VLAN supports untagged traffic?', 'native VLAN');
add('Refer to the exhibit. A network administrator has configured R1 as shown. When the administrator checks the status of the serial interface, the interface is shown as being administratively down. What additional command must be entered on the serial interface of R1 to bring the interface up?', 'no shutdown');
add('Refer to the exhibit. The network administrator wants to configure Switch1 to allow SSH connections and prohibit Telnet connections. How should the network administrator change the displayed configuration to satisfy the requirement?', 'Modify the transport input command.');
add('Which solution would help a college alleviate network congestion due to collisions?', 'a high port density switch');
add('Which two statements are correct with respect to SVI inter-VLAN routing? (Choose two.)', 'Switching packets is faster with SVI.', 'There is no need for a connection to a router.');
add('Refer to the exhibit. A network administrator is configuring inter-VLAN routing on a network. For now, only one VLAN is being used, but more will be added soon. What is the missing parameter that is shown as the highlighted question mark in the graphic?', 'It identifies the VLAN number.');
add('Which type of VLAN is used to designate which traffic is untagged when crossing a trunk port?', 'native');
add('A network administrator issues the show vlan brief command while troubleshooting a user support ticket. What output will be displayed?', 'the VLAN assignment and membership for all switch ports');
add('Open the PT Activity. Perform the tasks in the activity instructions and then answer the question.', 'File Server');
add('Match each DHCP message type with its description. (Not all options are used.)', 'DHCPACK - DHCP confirming', 'DHCPREQUEST - client accepting', 'DHCPDISCOVER - client initiating', 'DHCPOFFER - DHCP responding');





/*Prompts for matching questions and Packet Tracer Labs*/
add = prompts.add;

/*
 * template:
 * add('helper label');
 */

add('1 - the switch adds the source MAC address... 2 - Because the destination is not known');
add('type - a value for the tag protocol ID value; VLAN ID - a VLAN number; user priority - a value that supports; canonical format identifier - an identifier that enables');
add('dynamic desirable- actively; dynamic auto - passively; nonegotiate - requires; trunk - permanent trunking');
