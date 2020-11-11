/*Answers to multiple choice and fill-in-the-blank questions*/
var add = tests.add;

/*
 * template:
 * add(question, answer0 [, answer1, ...]);
 */

// CCNA4 v7.0 2 sem test modules 1-6
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
add('A technician is configuring a new Cisco 2960 switch. What is the effect of issuing the BranchSw(config-if)# ip address 172.18.33.88 255.255.255.0 command?', 'It applies an IPv4 address to the virtual interface.');
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
add('Match each DHCP message type with its description. (Not all options are used.)', 'DHCPACK - DHCP confirming'. 'DHCPREQUEST - client accepting', 'DHCPDISCOVER - client initiating', 'DHCPOFFER - DHCP responding');
add('What additional information is contained in the 12-bit extended system ID of a BPDU?', 'VLAN ID');
add('During the implementation of Spanning Tree Protocol, all switches are rebooted by the network administrator. What is the first step of the spanning-tree election process?', 'All the switches send out BPDUs advertising themselves as the root bridge.');
add('Which STP port role is adopted by a switch port if there is no other port with a lower cost to the root bridge?', 'root port');
add('Which two concepts relate to a switch port that is intended to have only end devices attached and intended never to be used to connect to another switch? (Choose two.)', 'edge port', 'PortFast');
add('Which three components are combined to form a bridge ID?', 'extended system ID', 'bridge priority', 'MAC address');
add('In which two port states does a switch learn MAC addresses and process BPDUs in a PVST network? (Choose two.)', 'forwarding', 'learning');
add('If no bridge priority is configured in PVST, which criteria is considered when electing the root bridge?', 'lowest MAC address');
add('When the show spanning-tree vlan 33 command is issued on a switch, three ports are shown in the forwarding state. In which two port roles could these interfaces function while in the forwarding state? (Choose two.)', 'designated', 'root');
add('What is the function of STP in a scalable network?', 'It disables redundant paths to eliminate Layer 2 loops.');
add('What is a characteristic of spanning tree?', 'It is enabled by default on Cisco switches.');
add('Which spanning tree standard supports only one root bridge so that traffic from all VLANs flows over the same path?', '802.1D');
add('What is the purpose of the Spanning Tree Protocol (STP)?', 'prevents Layer 2 loops');
add('What is the value used to determine which port on a non-root bridge will become a root port in a STP network?', 'the path cost');
add('What are two drawbacks to turning spanning tree off and having multiple paths through the Layer 2 switch network? (Choose two.)', 'The MAC address table becomes unstable.', 'Broadcast frames are transmitted indefinitely.');
add('A small company network has six interconnected Layer 2 switches. Currently all switches are using the default bridge priority value. Which value can be used to configure the bridge priority of one of the switches to ensure that it becomes the root bridge in this design?', '28672');
add('Refer to the exhibit. The administrator tried to create an EtherChannel between S1 and the other two switches via the commands that are shown, but was unsuccessful. What is the problem?', 'Traffic cannot be sent to two different switches through the same EtherChannel link.');
add('Which statement is true regarding the use of PAgP to create EtherChannels?', 'It is Cisco proprietary.');
add('What are two requirements to be able to configure an EtherChannel between two switches? (Choose two.)', 'All the interfaces need to work at the same speed.', 'All the interfaces need to be working in the same duplex mode.');
add('Refer to the exhibit. On the basis of the output that is shown, what can be determined about the EtherChannel bundle?', 'A Cisco proprietary protocol was used to negotiate the EtherChannel link.');
add('Which two parameters must match on the ports of two switches to create a PAgP EtherChannel between the switches? (Choose two.)', 'speed', 'VLAN information');
add('Refer to the exhibit. A network administrator is configuring an EtherChannel link between two switches, SW1 and SW2. Which statement describes the effect after the commands are issued on SW1 and SW2?', 'The EtherChannel fails to establish.');
add('Refer to the exhibit. A network administrator is configuring an EtherChannel link between two switches, SW1 and SW2. However, the EtherChannel link fails to establish. What change in configuration would correct the problem?', 'Configure SW2 EtherChannel mode to desirable.');
add('A network administrator configured an EtherChannel link with three interfaces between two switches. What is the result if one of the three interfaces is down?', 'The remaining two interfaces continue to load balance traffic.');
add('A network administrator is configuring an EtherChannel link between switches SW1 and SW2 by using the command SW1(config-if-range)# channel-group 1 mode auto . Which command must be used on SW2 to enable this EtherChannel?', 'SW2(config-if-range)# channel-group 1 mode desirable');
add('Which technology is an open protocol standard that allows switches to automatically bundle physical ports into a single logical link?', 'LACP');
add('What is a requirement to configure a trunking EtherChannel between two switches?', 'The allowed range of VLANs must be the same on both switches.');
add('What are two advantages of using LACP? (Choose two.)', 'It allows directly connected switches to negotiate an EtherChannel link.', 'It allows the use of multivendor devices.');
add('A switch is configured to run STP. What term describes a non-root port that is permitted to forward traffic on the network?', 'designated port');
add('What are two advantages of EtherChannel? (Choose two.)', 'Spanning Tree Protocol views the physical links in an EtherChannel as one logical connection.', 'Configuring the EtherChannel interface provides consistency in the configuration of the physical links.');
add('Refer to the exhibit. What are the possible port roles for ports A, B, C, and D in this RSTP-enabled network?', 'alternate, designated, root, root');
add('Refer to the exhibit. Which switching technology would allow each access layer switch link to be aggregated to provide more bandwidth between each Layer 2 switch and the Layer 3 switch?', 'EtherChannel');
add('Refer to the exhibit. An administrator wants to form an EtherChannel between the two switches by using the Port Aggregation Protocol. If switch S1 is configured to be in auto mode, which mode should be configured on S2 to form the EtherChannel?', 'desirable');
add('Open the PT Activity. Perform the tasks in the activity instructions and then answer the question. Which set of configuration commands issued on SW1 will successfully complete the EtherChannel link between SW1 and SW2?', 'interface GigabitEthernet0/1, channel-group 1 mode desirable');
add('A set of switches is being connected in a LAN topology. Which STP bridge priority value will make it least likely for the switch to be selected as the root?', '61440');
add('In which two PVST+ port states are MAC addresses learned? (Choose two.)', 'learning', 'forwarding');
add('Which port role is assigned to the switch port that has the lowest cost to reach the root bridge?', 'root port');
add('A switch is configured to run STP. What term describes the switch port closest, in terms of overall cost, to the root bridge', 'root port');
add('A switch is configured to run STP. What term describes a field used to specify a VLAN ID?', 'extended system ID');
add('A switch is configured to run STP. What term describes the reference point for all path calculations?', 'root bridge');
add('A switch is configured to run STP. What term describes a field that has a default value of 32,768 and is the initial deciding factor when electing a root bridge?', 'bridge priority');
add('Which statement describes an EtherChannel implementation?', 'A trunked port can be part of an EtherChannel bundle.');
add('Refer to the exhibit. A network administrator issued the show etherchannel summary command on the switch S1. What conclusion can be drawn?', 'The EtherChannel is not functional.');
add('Which statement describes a characteristic of EtherChannel?', 'It is made by combining multiple physical links that are seen as one link between two switches.');
add('Which two channel group modes would place an interface in a negotiating state using PAgP? (Choose two.)', 'desirable', 'auto');
add('Which mode configuration setting would allow formation of an EtherChannel link between switches SW1 and SW2 without sending negotiation traffic?', 'SW1: on; SW2: on');
add('Refer to the exhibit. An EtherChannel was configured between switches S1 and S2, but the interfaces do not form an EtherChannel. What is the problem?', 'The EtherChannel was not configured with the same allowed range of VLANs on each interface.');
add('When EtherChannel is configured, which mode will force an interface into a port channel without exchanging aggregation protocol packets?', 'on');
add('What are two load-balancing methods in the EtherChannel technology? (Choose two.)', 'source IP to destination IP', 'source MAC to destination MAC');
add('Which protocol provides up to 16 instances of RSTP, combines many VLANs with the same physical and logical topology into a common RSTP instance, and provides support for PortFast, BPDU guard, BPDU filter, root guard, and loop guard?', 'MST');
add('What is the outcome of a Layer 2 broadcast storm?', 'New traffic is discarded by the switch because it is unable to be processed.');
add('Which two network design features require Spanning Tree Protocol (STP) to ensure correct network operation? (Choose two.)', 'redundant links between Layer 2 switches', 'removing single points of failure with multiple Layer 2 switches');
add('A network administrator has configured an EtherChannel between two switches that are connected via four trunk links. If the physical interface for one of the trunk links changes to a down state, what happens to the EtherChannel?', 'The EtherChannel will remain functional.');


/*Prompts for matching questions and Packet Tracer Labs*/
add = prompts.add;

/*
 * template:
 * add('helper label');
 */

add('1)1 - the switch adds the source MAC address... 2 - Because the destination is not known');
add('2)type - a value for the tag protocol ID value; VLAN ID - a VLAN number; user priority - a value that supports; canonical format identifier - an identifier that enables');
add('3)dynamic desirable- actively; dynamic auto - passively; nonegotiate - requires; trunk - permanent trunking');
add('4)Rapid PVST+ - a Cisco; STP - the legacy; MSTP - a protocol');
add('5)Proprietary - Rapid PVST+; Cisco - PVST+; Fast converging - RSTP; IEEE - MSTP');
