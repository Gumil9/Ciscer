/*Answers to multiple choice and fill-in-the-blank questions*/
var add = tests.add;

/*
 template:
 add(question, answer0 [, answer1, ...]);
 */
/*TEST 3*/
add('A network administrator is determining the best placement of VLAN trunk links. Which two types of point-to-point connections utilize VLAN trunking? Choose two.', 'between a switch and a server that has an 802.1Q NIC', 'between two switches that utilize multiple VLANs');
add('What happens to a port that is associated with VLAN 10 when the administrator deletes VLAN 10 from the switch?', 'The port goes back to the default VLAN.');
add('Refer to the exhibit. Interface Fa0/1 is connected to a PC. Fa0/2 is a trunk link to another switch. All other ports are unused. Which security best practice did the administrator forget to configure?', 'All user ports are associated with VLANs distinct from VLAN 1 and distinct from the ‘black-hole’ VLAN.');
add('Which command is used to remove only VLAN 20 from a switch?', 'no vlan 20');
add('A Cisco Catalyst switch has been added to support the use of multiple VLANs as part of an enterprise network. The network technician finds it necessary to clear all VLAN information from the switch in order to incorporate a new network design. What should the technician do to accomplish this task?', 'Delete the startup configuration and the vlan.dat file in the flash memory of the switch and reboot the switch.');
add('What is the effect of issuing a switchport access vlan 20 command on the Fa0/18 port of a switch that does not have this VLAN in the VLAN database?', 'VLAN 20 will be created automatically.');
add('Which command displays the encapsulation type, the voice VLAN ID, and the access mode VLAN for the Fa0/1 interface?', 'show interfaces Fa0/1 switchport');
add('Port Fa0/11 on a switch is assigned to VLAN 30. If the command no switchport access vlan 30 is entered on the Fa0/11 interface, what will happen?', 'Port Fa0/11 will be returned to VLAN 1.');
add('What must the network administrator do to remove Fast Ethernet port fa0/1 from VLAN 2 and assign it to VLAN 3?', 'Enter the switchport access vlan 3 command in interface configuration mode.');
add('Which two Layer 2 security best practices would help prevent VLAN hopping attacks? Choose two.', 'Disable DTP autonegotiation on end-user ports.', 'Change the native VLAN number to one that is distinct from all user VLANs and is not VLAN 1.');
add('In a basic VLAN hopping attack, which switch feature do attackers take advantage of?', 'the default automatic trunking configuration');
add('A Cisco switch currently allows traffic tagged with VLANs 10 and 20 across trunk port Fa0/5. What is the effect of issuing a switchport trunk allowed vlan 30 command on Fa0/5?', 'It allows only VLAN 30 on Fa0/5.');
add('Refer to the exhibit. A frame is traveling between PC-A and PC-B through the switch. Which statement is true concerning VLAN tagging of the frame?', 'No VLAN tag is added to the frame.');
add('Refer to the exhibit. PC-A and PC-B are both in VLAN 60. PC-A is unable to communicate with PC-B. What is the problem?', 'The VLAN that is used by PC-A is not in the list of allowed VLANs on the trunk.');
add('What VLANs are allowed across a trunk when the range of allowed VLANs is set to the default value?', 'All VLANs will be allowed across the trunk.');
add('Under which two occasions should an administrator disable DTP while managing a local area network? Choose two.', 'on links that should not be trunking', 'when connecting a Cisco switch to a non-Cisco switch');
add('Which PCs will receive the broadcast sent by PC-C?', 'PC-D, PC-E');
add('Which two statements are true about VLAN implementation? Choose two.', 'Devices in one VLAN do not hear the broadcasts from devices in another VLAN.', 'VLANs logically group hosts, regardless of physical location.');
add('Refer to the exhibit. DLS1 is connected to another switch, DLS2, via a trunk link. A host that is connected to DLS1 is not able to communicate to a host that is connected to DLS2, even though they are both in VLAN 99. Which command should be added to Fa0/1 on DLS1 to correct the problem?', 'switchport trunk native vlan 66');
add('Which switch feature ensures that no unicast, multicast, or broadcast traffic is passed between ports that are configured with this feature?', 'PVLAN protected port');
add('Which three statements accurately describe VLAN types? Choose three.', 'An 802.1Q trunk port, with a native VLAN assigned, supports both tagged and untagged traffic.', 'A management VLAN is any VLAN that is configured to access management features of the switch.', 'After the initial boot of an unconfigured switch, all ports are members of the default VLAN.');
add('Which command should the network administrator implement to prevent the transfer of DTP frames between a Cisco switch and a non-Cisco switch?', 'S1config-if# switchport nonegotiate');
add('25 Which combination of DTP modes set on adjacent Cisco switches will cause the link to become an access link instead of a trunk link?', 'dynamic auto – dynamic auto');
add('26. An administrator has determined that the traffic from a switch that corresponds to a VLAN is not being received on another switch over a trunk link. What could be the problem?', 'allowed VLANS on trunks');
add('27. What is the default DTP mode on Cisco 2960 and 3560 switches?', 'dynamic auto');
add('What can be determined from the output that is shown?', 'Interface FastEthernet 0/1 is configured with the switchport protected command.');
add('29. Which two characteristics match extended range VLANs? Choose two.', 'They are saved in the running-config file by default.', 'VLAN IDs exist between 1006 to 4094.');
add('31. Which type of VLAN is used to designate which traffic is untagged when crossing a trunk port?', 'native');
add('32. What are three primary benefits of using VLANs? Choose three.', 'security', 'improved IT staff efficiency', 'cost reduction');
add('33. What happens to switch ports after the VLAN to which they are assigned is deleted?', 'The ports stop communicating with the attached devices.');
add('34. Which two modes does Cisco recommend when configuring a particular switch port? Choose two.', 'trunk', 'access');

/* TEST 4 */

add('What type of IPv6 address is required as a minimum on IPv6 enabled interfaces?', 'link-local');
add('In order for packets to be sent to a remote destination, what three pieces of information must be configured on a host? Choose three.', 'default gateway', 'IP address', 'subnet mask');
add('What two pieces of information are displayed in the output of the show ip interface brief command? Choose two.', 'Layer 1 statuses', 'IP addresses');
add('Which two items are used by a host device when performing an ANDing operation to determine if a destination address is on the same local network? Choose two.', 'destination IP address', 'subnet mask');
add('Refer to the exhibit. A network administrator issues the show ipv6 route command on R1. What two conclusions can be drawn from the routing table? Choose two.', 'R1 does not know a route to any remote networks.', 'The interface Fa0/1 is configured with IPv6 address 2001:DB8:ACAD:A::12.');
add('Refer to the exhibit. What is the purpose of the highlighted field in the line that is displayed from the show ip route command?', 'It indicates that this route was learned via EIGRP.');
add('Which two statements correctly describe the concepts of administrative distance and metric? Choose two.', 'Routes with the smallest metric to a destination indicate the best path.', 'Administrative distance refers to the trustworthiness of a particular route.');
add('What are two functions of a router? Choose two.', 'It determines the best path to send packets.', 'It connects multiple IP networks.');
add('A packet moves from a host on one network to a device on a remote network within the same company. If NAT is not performed on the packet, which two items remain unchanged during the transfer of the packet from source to destination? Choose two.', 'source IP address', 'destination IP address');
add('Refer to the exhibit. PC1 attempts to connect to File_server1 and sends an ARP request to obtain a destination MAC address. Which MAC address will PC1 receive in the ARP reply?', 'the MAC address of the G0/0 interface on R1');
add('A network administrator configures the interface fa0/0 on the router R1 with the command ip address 172.16.1.254 255.255.255.0. However, when the administrator issues the command show ip route, the routing table does not show the directly connected network. What is the possible cause of the problem?', 'The interface fa0/0 has not been activated.');
add('Which command is used to configure an IPv6 address on a router interface so that the router will combine a manually specified network prefix with an automatically generated interface identifier?', 'ipv6 address ipv6-address/prefix-length eui-64');
add('A network administrator configures a router by the command ip route 0.0.0.0 0.0.0.0 209.165.200.226. What is the purpose of this command?', 'to provide a route to forward packets for which there is no route in the routing table');
add('Refer to the exhibit. A network administrator issues the show ipv6 route command on R1. Which two types of routes are displayed in the routing table? Choose two.', 'directly connected network', 'local host route');
add('What address changes as a packet travels across multiple Layer 3 Ethernet hops to its final destination?', 'source Layer 2 address');
add('Refer to the exhibit. What will the router do with a packet that has a destination IP address of 192.168.12.227?', 'Send the packet out the Serial0/0/0 interface.');
add('A network administrator is implementing dynamic routing protocols for a company. Which command can the administrator issue on a router to display the supported routing protocols?','Router(config)# router ?');
add('Refer to the exhibit. A network administrator has configured R1 as shown. When the administrator checks the status of the serial interface, the interface is shown as being administratively down. What additional command must be entered on the serial interface of R1 to bring the interface up?', 'no shutdown');
add('What is one feature that distinguishes routers from Layer 2 switches?', 'Routers support a variety of interface types. Switches typically support Ethernet interfaces.');
add('Which statement describes a route that has been learned dynamically?', 'It is automatically updated and maintained by routing protocols.');
add('Refer to the exhibit. A network administrator issues the show ip route command on R2. What two types of routes are installed in the routing table? Choose two.', 'directly connected networks', 'routes that are learned through the EIGRP routing protocol');
add('When a computer is pinging another computer for the first time, what type of message does it place on the network to determine the MAC address of the other device?', 'an ARP request');
add('25. Which two network parameters are used by EIGRP as metrics to select the best path to reach a network? Choose Two.', 'bandwidth', 'delay');
add('26.What route would have the lowest administrative distance?', 'a directly connected network');
add('27. Which two parameters are used by EIGRP as metrics to select the best path to reach a network? Choose two.', 'bandwidth', 'delay');
add('28. What are two common types of static routes in routing tables? Choose two', 'a default static route', 'a static route to a specific network');
add('29. Which software is used for a network administrator to make the initial router configuration securely?', 'terminal emulation client software');
add('What is the significance of the Serial0/0/0?', 'It is the interface on R1 used to send data that is destined for 10.1.1.0/24.');
add('PC A sends a request to Server B. What IPv4 address is used in the destination field in the packet as the packet leaves PC A?', '192.168.12.16');
add('32. What command will enable a router to begin sending messages that allow it to configure a link-local address without using an IPv6 DHCP server?', 'the ipv6 unicast-routing command');
add('33. What are two types of static routes in routing tables? choose two', 'default static route', 'static route to specific network');
add('34. what is a characteristic of an IPv4 interface on a Cisco IOS router?', 'it is a logical int internal to the router');
add('What does R1 use as the MAC address of the destination when constructing the frame that will go from R1 to Server B?', 'If the destination MAC address that corresponds to the IPv4 address is not in the ARP cache, R1 sends an ARP request.');
add('If PC1 is sending a packet to PC2 and routing has been configured between the two routers, what will R1 do with the Ethernet frame header attached by PC1?', 'remove the Ethernet header and configure a new Layer 2 header before sending it out S0/0/0');
add('37.What is a characteristic of an IPv4 loopback interface on a Cisco IOS router?', 'It is a logical interface internal to the router.');

/* TEST 5 */

add('What is a disadvantage of using multilayer switches for inter-VLAN routing?', 'Multilayer switches are more expensive than router-on-a-stick implementations.');
add('Refer to the exhibit. A router-on-a-stick configuration was implemented for VLANs 15, 30, and 45, according to the show running-config command output. PCs on VLAN 45 that are using the 172.16.45.0 /24 network are having trouble connecting to PCs on VLAN 30 in the 172.16.30.0 /24 network. Which error is most likely causing this problem?', 'There is an incorrect IP address configured on GigabitEthernet 0/0.30.');
add('Refer to the exhibit. A network administrator has configured router CiscoVille with the above commands to provide inter-VLAN routing. What command will be required on a switch that is connected to the Gi0/0 interface on router CiscoVille to allow inter-VLAN routing?', 'switchport mode trunk');
add('Refer to the exhibit. The switch does the routing for the hosts that connect to VLAN 5. If the PC accesses a web server from the Internet, at what point will a VLAN number be added to the frame?', 'No VLAN number is added to the frame in this design.');
add('Inter-VLAN communication is not occurring in a particular building of a school. Which two commands could the network administrator use to verify that inter-VLAN communication was working properly between a router and a Layer 2 switch when the router-on-a-stick design method is implemented? Choose two.', 'From the switch, issue the show interface trunk command.', 'From the router, issue the show ip route command.');
add('Refer to the exhibit. Router RA receives a packet with a source address of 192.168.1.35 and a destination address of 192.168.1.85. What will the router do with this packet?', 'The router will forward the packet out interface FastEthernet 0/1.2.');
add('What condition is required to enable Layer 3 switching?', 'The Layer 3 switch must have IP routing enabled.');
add('Which type of inter-VLAN communication design requires the configuration of multiple subinterfaces?', 'router on a stick');
add('Refer to the exhibit. A network administrator is configuring RT1 for inter-VLAN routing. The switch is configured correctly and is functional. Host1, Host2, and Host3 cannot communicate with each other. Based on the router configuration, what is causing the problem?', 'IP addresses on the subinterfaces are incorrectly matched to the VLANs.');
add('How is traffic routed between multiple VLANs on a multilayer switch?', 'Traffic is routed via internal VLAN interfaces.');
add('Refer to the exhibit. Communication between the VLANs is not occurring. What could be the issue?', 'The Gi1/1 switch port is not in trunking mode.');
add('What is a disadvantage of using router-on-a-stick inter-VLAN routing?', 'does not scale well beyond 50 VLANs');
add('Which statement describes a disadvantage of using router subinterfaces for inter-VLAN routing?', 'Routed traffic must contend for bandwidth on a single router interface.');
add('Refer to the exhibit. A network administrator is verifying the configuration of inter-VLAN routing. Users complain that PC2 cannot communicate with PC1. Based on the output, what is the possible cause of the problem?', 'The encapsulation dot1Q 5 command contains the wrong VLAN.');
add('Refer to the exhibit. A network administrator is verifying the configuration of inter-VLAN routing. Users complain that PCs on different VLANs cannot communicate. Based on the output, what are two configuration errors on switch interface Gi1/1? Choose two.', 'Gi1/1 is configured as trunk mode.', 'Gi1/1 is in the default VLAN.');
add('While configuring inter-VLAN routing on a multilayer switch, a network administrator issues the no switchport command on an interface that is connected to another switch. What is the purpose of this command?', 'to create a routed port for a single network');
add('A small college uses VLAN 10 for the classroom network and VLAN 20 for the office network. What is needed to enable communication between these two VLANs while using legacy inter-VLAN routing?', 'A router with at least two LAN interfaces should be used.');
add('Refer to the exhibit. After attempting to enter the configuration that is shown in router RTA, an administrator receives an error and users on VLAN 20 report that they are unable to reach users on VLAN 30. What is causing the problem?', 'RTA is using the same subnet for VLAN 20 and VLAN 30.');
add('Refer to the exhibit. A network administrator needs to configure router-on-a-stick for the networks that are shown. How many subinterfaces will have to be created on the router if each VLAN that is shown is to be routed and each VLAN has its own subinterface?', '4');
add('Refer to the exhibit. Which command can the administrator issue to change the VLAN10 status to up?', 'Switch1config# vlan 10');
add('24. How are IP addressing designs affected by VLAN implementations?', 'Each VLAN must have a different network number.');
add('25. What is a characteristic of a routed port on a Layer 3 switch?', 'It is not assigned to a VLAN.');
add('26.An administrator is attempting to configure a static route on a Cisco 2960 series switch. After the administrator types the command ip route 0.0.0.0 0.0.0.0 10.1.1.1, an error message appears stating that the command is not recognized. What must the administrator do so that this command is accepted?', 'Enter the command sdm prefer lanbase-routing and reload.');
add('27.Refer to the exhibit. In this network design, which connection or connections if any, add the VLAN ID number if host H1 sends information to host H2?', 'no link');
add('28. What is a characteristic of legacy inter-VLAN routing?', 'The router requires one Ethernet link for each VLAN. *');
add('In what switch mode should port G0/1 be assigned if Cisco best practices are being used?', 'trunk');
add('What is the problem with this configuration, based on the output of the router?', 'The encapsulation has not been configured on the subinterface.');
add('A network administrator is verifying the configuration of inter-VLAN routing. Based on the partial output that is displayed by the use of the show vlan command, which conclusion can be drawn for the Gi1/1 interface?', 'It is configured as trunk mode.');

/*Prompts for matching questions and Packet Tracer Labs*/
add = prompts.add;

/*
 template:
 add('helper label');
 */

add('cut-throught:');
add('+appropriate for high perfomance computing applications');
add('+forwarding process can be begin after receiving the destination address');
add('+may forward invalid frames');

add('store-and-forward:');
add('#error checking before forwarding');
add('#forwarding process only begins after receiving the entire frame');
add('#only forwards valid frames');

add('Layer 2 switches');
add('[+] typically used in the access layer of a switched network');
add('[+] forward traffic based on information in the Ethernet header');

add('Multilayer switches');
add('[#] can build a routing table');
add('[#] supports a few routing protocols');

add('Access layer');
add('[+] represents the network edge');
add('[+] provides network access to the user');

add('Distribution layer');
add('[#] implements network access policy');
add('[#] establishes Layer 3 routing boundaries');

add('Core layer');
add('[*] provides high-speed backbone connectivity');
add('[*] functions as an aggregator for all the campus blocks');

add('allows intelligent traffic load sharing by using all network resources -> flexibility');
add('facilitates understanding the role of each device at every tier, simplifies deployment, operation, management, and reduces fault domains at every tier -> hierarchical');
add('allows seamless network expansion and integrated service enablement on an on-demand basis -> modularity');
add('satisfies user expectations for keeping the network always on -> resiliency');

add('step 3');
add('– not scored –');
add('step 1');
add('step 4');
add('step 2');
add('step 5');
add('step 6');

add('[+] Create a local user.');
add('[+] Generate RSA keys.');
add('[+] Configure a domain name.');
add('[+] Use the login local command.');
add('[+] Use the transport input ssh command.');
add('[+] Order does not matter within this group.');

add('disable -> admin down');
add('Layer 1 problem -> down/down');
add('– not scored –');
add('Layer 2 problem -> up/down');
add('operational -> up/up');