/*Answers to multiple choice and fill-in-the-blank questions*/
var add = tests.add;

/*
 * template:
 * add(question, answer0 [, answer1, ...]);
 */

//TEST3
add('A network administrator is determining the best placement of VLAN trunk links. Which two types of point-to-point connections utilize VLAN trunking?​ (Choose two.)', 'between a switch and a server that has an 802.1Q NIC', 'between two switches that utilize multiple VLANs');
add('What happens to a port that is associated with VLAN 10 when the administrator deletes VLAN 10 from the switch?', 'The port becomes inactive.');
add('Refer to the exhibit. Interface Fa0/1 is connected to a PC. Fa0/2 is a trunk link to another switch. All other ports are unused. Which security best practice did the administrator forget to configure?', 'All user ports are associated with VLANs distinct from VLAN 1 and distinct from the ‘black-hole’ VLAN.');
add('Which command is used to remove only VLAN 20 from a switch?','no vlan 20');
add('A Cisco Catalyst switch has been added to support the use of multiple VLANs as part of an enterprise network. The network technician finds it necessary to clear all VLAN information from the switch in order to incorporate a new network design. What should the technician do to accomplish this task?', 'Delete the startup configuration and the vlan.dat file in the flash memory of the switch and reboot the switch.');
add('What is the effect of issuing a switchport access vlan 20 command on the Fa0/18 port of a switch that does not have this VLAN in the VLAN database?', 'VLAN 20 will be created automatically.');
add('Which command displays the encapsulation type, the voice VLAN ID, and the access mode VLAN for the Fa0/1 interface?', 'show interfaces Fa0/1 switchport*');
add('Port Fa0/11 on a switch is assigned to VLAN 30. If the command no switchport access vlan 30 is entered on the Fa0/11 interface, what will happen?', 'Port Fa0/11 will be returned to VLAN 1.');
add('What must the network administrator do to remove Fast Ethernet port fa0/1 from VLAN 2 and assign it to VLAN 3?', 'Enter the switchport access vlan 3 command in interface configuration mode.');
add('Which two Layer 2 security best practices would help prevent VLAN hopping attacks? (Choose two.)', 'Disable DTP autonegotiation on end-user ports.', 'Change the native VLAN number to one that is distinct from all user VLANs and is not VLAN 1.');
add('In a basic VLAN hopping attack, which switch feature do attackers take advantage of?', 'the default automatic trunking configuration');
add('A Cisco switch currently allows traffic tagged with VLANs 10 and 20 across trunk port Fa0/5. What is the effect of issuing a switchport trunk allowed vlan 30 command on Fa0/5?', 'It allows only VLAN 30 on Fa0/5.');
add('Refer to the exhibit. A frame is traveling between PC-A and PC-B through the switch. Which statement is true concerning VLAN tagging of the frame?', 'No VLAN tag is added to the frame.');
add('Refer to the exhibit. PC-A and PC-B are both in VLAN 60. PC-A is unable to communicate with PC-B. What is the problem?', 'The VLAN that is used by PC-A is not in the list of allowed VLANs on the trunk.');
add('What VLANs are allowed across a trunk when the range of allowed VLANs is set to the default value?', 'All VLANs will be allowed across the trunk.');
add('Under which two occasions should an administrator disable DTP while managing a local area network? (Choose two.)', 'when connecting a Cisco switch to a non-Cisco switch', 'on links that should not be trunking');
add('Open the PT Activity. Perform the tasks in the activity instructions and then answer the question. Which PCs will receive the broadcast sent by PC-C?', 'PC-D, PC-E');
add('Which two statements are true about VLAN implementation? (Choose two.)', 'Devices in one VLAN do not hear the broadcasts from devices in another VLAN.', 'VLANs logically group hosts, regardless of physical location.');
add('Refer to the exhibit. DLS1 is connected to another switch, DLS2, via a trunk link. A host that is connected to DLS1 is not able to communicate to a host that is connected to DLS2, even though they are both in VLAN 99. Which command should be added to Fa0/1 on DLS1 to correct the problem?', 'switchport trunk native vlan 66');
add('Which switch feature ensures that no unicast, multicast, or broadcast traffic is passed between ports that are configured with this feature?', 'PVLAN protected port');
add('Fill in the blank. Use the full command syntax.', ' show vlan brief');
add('Which three statements accurately describe VLAN types? (Choose three).', 'An 802.1Q trunk port, with a native VLAN assigned, supports both tagged and untagged traffic.', 'A management VLAN is any VLAN that is configured to access management features of the switch.', 'After the initial boot of an unconfigured switch, all ports are members of the default VLAN.');
add('Which command should the network administrator implement to prevent the transfer of DTP frames between a Cisco switch and a non-Cisco switch?', 'S1(config-if)# switchport nonegotiate');
add('Which combination of DTP modes set on adjacent Cisco switches will cause the link to become an access link instead of a trunk link?', 'dynamic auto – dynamic auto');
add('An administrator has determined that the traffic from a switch that corresponds to a VLAN is not being received on another switch over a trunk link. What could be the problem?', 'allowed VLANS on trunks');
add('What is the default DTP mode on Cisco 2960 and 3560 switches?', 'dynamic auto');
add('What can be determined from the output that is shown?', 'Interface FastEthernet 0/1 is configured with the switchport protected command.');
add('Which two characteristics match extended range VLANs?', 'They are saved in the running-config file by default.', 'VLAN IDs exist between 1006 to 4094.');
add('Match the IEEE 802.1Q standard VLAN tag field in the description. Place the options', 'User Priority – value that supports', 'Type – value for the tag', 'Canonical – identifier that', 'VLAN ID – VLAN number');
add('Match the DTP mode with its function. options in', 'permanent nontrunking -', 'passively - dynamic auto', 'requiers - nonegotiate', 'actively - dynamic desirable', 'permanent trunking - trunk');
add('Which type of VLAN is used to designate which traffic is untagged when crossing a trunk port', 'native', 'What are three primary benefits of using VLANs?', 'security', 'improved IT staff efficiency', 'cost reduction');
add('What happens to switch ports after the VLAN to which they are assigned is deleted', 'The ports stop communicating with the attached devices.');
add('Which two modes does Cisco recommend when configuring a particular switch port?', 'trunk', 'access');

//TEST4
add('What type of IPv6 address is required as a minimum on IPv6 enabled interfaces?', 'link-local');
add('In order for packets to be sent to a remote destination, what three pieces of information must be configured on a host?', 'default gateway', 'IP address', 'subnet mask');
add('What two pieces of information are displayed in the output of the show ip interface brief command?', 'Layer 1 statuses', 'IP addresses');
add('Which two items are used by a host device when performing an ANDing operation to determine if a destination address is on the same local network?', 'destination IP address', 'subnet mask');
add('Refer to the exhibit. A network administrator issues the show ipv6 route command on R1. What two conclusions can be drawn from the routing table?', 'R1 does not know a route to any remote networks.', 'The interface Fa0/1 is configured with IPv6 address 2001:DB8:ACAD:A::12.');
add('Refer to the exhibit. What is the purpose of the highlighted field in the line that is displayed from the show ip route command?', 'It indicates that this route was learned via EIGRP.');
add('Which two statements correctly describe the concepts of administrative distance and metric?', 'Routes with the smallest metric to a destination indicate the best path.', 'Administrative distance refers to the trustworthiness of a particular route.');
add('What are two functions of a router?', 'It determines the best path to send packets.', 'It connects multiple IP networks.');
add('A packet moves from a host on one network to a device on a remote network within the same company. If NAT is not performed on the packet, which two items remain unchanged during the transfer of the packet from source to destination?', 'source IP address', 'destination IP address');
add('Refer to the exhibit. PC1 attempts to connect to File_server1 and sends an ARP request to obtain a destination MAC address. Which MAC address will PC1 receive in the ARP reply?', 'the MAC address of the G0/0 interface on R1');
add('A network administrator configures the interface fa0/0 on the router R1 with the command ip address 172.16.1.254 255.255.255.0. However, when the administrator issues the command show ip route, the routing table does not show the directly connected network. What is the possible cause of the problem?', 'The interface fa0/0 has not been activated.');
add('Which command is used to configure an IPv6 address on a router interface so that the router will combine a manually specified network prefix with an automatically generated interface identifier?', 'ipv6 address ipv6-address/prefix-length eui-64');
add('Fill in the blank. When a router receives a packet, it examines the destination address of the packet', 'routing');
add('A network administrator configures a router by the command ip route 0.0.0.0 0.0.0.0 209.165.200.226. What is the purpose of this command?', 'to provide a route to forward packets for which there is no route in the routing table');
add('Refer to the exhibit. A network administrator issues the show ipv6 route command on R1. Which two types of routes are displayed in the routing table?', 'directly connected network', 'local host route');
add('What address changes as a packet travels across multiple Layer 3 Ethernet hops to its final destination?', 'source Layer 2 address');
add('Refer to the exhibit. What will the router do with a packet that has a destination IP address of 192.168.12.227?', 'Send the packet out the Serial0/0/0 interface.');
add('A network administrator is implementing dynamic routing protocols for a company. Which command can the administrator issue on a router to display the supported routing protocols?', 'Router(config)# router ?');
add('Refer to the exhibit. A network administrator has configured R1 as shown. When the administrator checks the status of the serial interface, the interface is shown as being administratively down. What additional command must be entered on the serial interface of R1 to bring the interface up?', 'no shutdown');
add('What is one feature that distinguishes routers from Layer 2 switches?', 'Routers support a variety of interface types. Switches typically support Ethernet interfaces.');
add('Which statement describes a route that has been learned dynamically?', 'It is automatically updated and maintained by routing protocols.');
add('Refer to the exhibit. A network administrator issues the show ip route command on R2. What two types of routes are installed in the routing table?', 'directly connected networks', 'routes that are learned through the EIGRP routing protocol');
add('When a computer is pinging another computer for the first time, what type of message does it place on the network to determine the MAC address of the other device?', 'an ARP request');
add('Which two network parameters are used by EIGRP as metrics to select the best path to reach a network?', 'bandwidth', 'delay');
add('What route would have the lowest administrative distance?', 'a directly connected network');
add('Which two parameters are used by EIGRP as metrics to select the best path to reach a network?', 'bandwidth', 'delay');
add('What are two common types of static routes in routing tables?', 'a default static route', 'a static route to a specific network');
add('Which software is used for a network administrator to make the initial router configuration securely?', 'terminal emulation client software');
add('What is the significance of the Serial0/0/0', 'It is the interface on R1 used to send data that is destined for 10.1.1.0/24');
add('PC A sends a request to Server B. What IPv4 address is used in the destination field in the packet as the packet leaves PC A?', '192.168.12.16');
add('What command will enable a router to begin sending messages that allow it to configure a link-local address without using an IPv6 DHCP server?', 'the ipv6 unicast-routing command');
add('What are two types of static routes in routing tables?', 'default static route', 'static route to specific network');
add('what is a characteristic of an IPv4 interface on a Cisco IOS router?', 'it is a logical int internal to the router');
add('What does R1 use as the MAC address of the destination when constructing the frame that will go from R1 to Server B?', 'If the destination MAC address that corresponds to the IPv4 address is not in the ARP cache, R1 sends an ARP request.');
add('If PC1 is sending a packet to PC2 and routing has been configured between the two routers, what will R1 do with the Ethernet frame header attached by PC1?', 'remove the Ethernet header and configure a new Layer 2 header before sending it out S0/0/0');
add('What is a characteristic of an IPv4 loopback interface on a Cisco IOS router?​', 'It is a logical interface internal to the router.');

/*Prompts for matching questions and Packet Tracer Labs*/
add = prompts.add;

/*
 * template:
 * add('helper label');
 */