/*Answers to multiple choice and fill-in-the-blank questions*/
var add = tests.add;

/*
 * template:
 * add(question, answer0 [, answer1, ...]);
 */

//TEST1
add('1. A network administrator enters the command copy running-config startup-config. Which type of memory will the startup configuration be placed into?', 'NVRAM');
add('2. Which packet-forwarding method does a router use to make switching decisions when it is using a forwarding information base and an adjacency table?', 'Cisco Express Forwarding');
add('3. When a router receives a packet, it examines the destination address of the packet and looks in the Routing table to determine the best path to use to forward the packet.', 'Routing');
add('4. What are two functions of a router? Choose two.', 'A router connects multiple IP networks.', 'It determines the best path to send packets.');
add('5. In order for packets to be sent to a remote destination, what three pieces of information must be configured on a host? Choose three.', 'IP address', 'subnet mask', 'default gateway');
add('6. Which software is used for a network administrator to make the initial router configuration securely?', 'terminal emulation client software');
add('7. Refer to the exhibit. A network administrator has configured R1 as shown. When the administrator checks the status of the serial interface, the interface is shown as being administratively down. What additional command must be entered on the serial interface of R1 to bring the interface up?', 'no shutdown');
add('8. What is a characteristic of an IPv4 loopback interface on a Cisco IOS router?​', 'It is a logical interface internal to the router.');
add('9. What two pieces of information are displayed in the output of the show ip interface brief command? Choose two.', 'IP addresses', 'Layer 1 statuses');
add('10. Which two items are used by a host device when performing an ANDing operation to determine if a destination address is on the same local network? Choose two.', 'destination IP address', 'subnet mask');
add('11. Refer to the exhibit. PC A sends a request to Server B. What IPv4 address is used in the destination field in the packet as the packet leaves PC A?', '192.168.12.16');
add('12. Refer to the exhibit. What does R1 use as the MAC address of the destination when constructing the frame that will go from R1 to Server B?', 'If the destination MAC address that corresponds to the IPv4 address is not in the ARP cache, R1 sends an ARP request.');
add('13. Refer to the exhibit. If PC1 is sending a packet to PC2 and routing has been configured between the two routers, what will R1 do with the Ethernet frame header attached by PC1?', 'remove the Ethernet header and configure a new Layer 2 header before sending it out S0/0/0');
add('14. Refer to the exhibit. What will the router do with a packet that has a destination IP address of 192.168.12.227?', 'Send the packet out the Serial0/0/0 interface.');
add('15. Which two statements correctly describe the concepts of administrative distance and metric? Choose two.', 'Administrative distance refers to the trustworthiness of a particular route.', 'Routes with the smallest metric to a destination indicate the best path.');
add('16. Which two parameters are used by EIGRP as metrics to select the best path to reach a network? Choose two.', 'bandwidth', 'delay');
add('17. What route would have the lowest administrative distance?', 'a directly connected network');
add('18. Which two statements correctly describe the concepts of administrative distance and metric? Choose two.', 'Administrative distance refers to the trustworthiness of a particular route.', 'Routes with the smallest metric to a destination indicate the best path.');
add('19. Consider the following routing table entry for R1: D 10.1.1.0/24 [90/2170112] via 209.165.200.226, 00:00:05, Serial0/0/0 What is the significance of the Serial0/0/0?', 'It is the interface on R1 used to send data that is destined for 10.1.1.0/24.');
add('20. Refer to the exhibit. A network administrator issues the show ipv6 route command on R1. What two conclusions can be drawn from the routing table? Choose two.', 'R1 does not know a route to any remote networks.', 'The interface Fa0/1 is configured with IPv6 address 2001:DB8:ACAD:A::12.');
add('21. A network administrator configures the interface fa0/0 on the router R1 with the command ip address 172.16.1.254 255.255.255.0. However, when the administrator issues the command show ip route, the routing table does not show the directly connected network. What is the possible cause of the problem?', 'The interface fa0/0 has not been activated.');
add('22. A network administrator configures a router by the command ip route 0.0.0.0 0.0.0.0 209.165.200.226. What is the purpose of this command?', 'to provide a route to forward packets for which there is no route in the routing table');
add('23. What are two common types of static routes in routing tables? Choose two', 'a default static route', 'a static route to a specific network');
add('24. What is the effect of configuring the ipv6 unicast-routing command on a router?', 'to enable the router as an IPv6 router');

//TEST2
add('1. What are two advantages of static routing over dynamic routing? Choose two.', 'Static routing is more secure because it does not advertise over the network.', 'Static routing uses fewer router resources than dynamic routing.');
add('2. Refer to the exhibit. What routing solution will allow both PC A and PC B to access the Internet with the minimum amount of router CPU and network bandwidth utilization?', 'Configure a static default route from R1 to Edge, a default route from Edge to the Internet, and a static route from Edge to R1.');
add('3. What is the correct syntax of a floating static route?', 'ip route 209.165.200.228 255.255.255.248 10.0.0.1 120');
add('4. What is a characteristic of a static route that matches all packets?', 'It identifies the gateway IP address to which the router sends all IP packets for which it does not have a learned or static route.');
add('5. What type of route allows a router to forward packets even though its routing table contains no specific route to the destination network?', 'default route');
add('6. Why would a floating static route be configured with an administrative distance that is higher than the administrative distance of a dynamic routing protocol that is running on the same router?', 'to be used as a backup route');
add('7. A company has several networks with the following IP address requirements: IP phones – 50 PCs – 70 IP cameras – 10 wireless access points – 10 network printers – 10 network scanners – 2 Which block of addresses would be the minimum to accommodate all of these devices if each type of device was on its own network?', '172.16.0.0/24');
add('8. What happens to a static route entry in a routing table when the outgoing interface associated with that route goes into the down state?', 'The static route is removed from the routing table.');
add('9. The network administrator configures the router with the ip route 172.16.1.0 255.255.255.0 172.16.2.2 command. How will this route appear in the routing table?', 'S 172.16.1.0 [1/0] via 172.16.2.2');
add('10. Refer to the exhibit. What two commands will change the next-hop address for the 10.0.0.0/8 network from 172.16.40.2 to 192.168.1.2? Choose two.', 'A config # no ip route 10.0.0.0 255.0.0.0 172.16.40.2', 'A config # ip route 10.0.0.0 255.0.0.0 192.168.1.2');
add('11. Which type of static route that is configured on a router uses only the exit interface?', 'directly connected static route');
add('12. Refer to the graphic. Which command would be used on router A to configure a static route to direct traffic from LAN A that is destined for LAN C?', 'A config # ip route 192.168.4.0 255.255.255.0 192.168.3.2');
add('13. Refer to the exhibit. The network administrator needs to configure a default route on the Border router. Which command would the administrator use to configure a default route that will require the least amount of router processing when forwarding packets?', 'Border config # ip route 0.0.0.0 0.0.0.0 s0/0/1');
add('14. What two pieces of information are needed in a fully specified static route to eliminate recursive lookups? Choose two.', 'the interface ID exit interface', 'the IP address of the next-hop neighbor');
add('15. Refer to the exhibit. What command would be used to configure a static route on R1 so that traffic from both LANs can reach the 2001:db8:1:4::/64 remote network?', 'ipv6 route 2001:db8:1:4::/64 2001:db8:1:3::2');
add('16. Refer to the exhibit. Which default static route command would allow R1 to potentially reach all unknown networks on the Internet?', 'R1 config # ipv6 route ::/0 G0/1 fe80::2*');
add('17. Consider the following command: ip route 192.168.10.0 255.255.255.0 10.10.10.2 5 Which route would have to go down in order for this static route to appear in the routing table?', 'a static route to the 192.168.10.0/24 network');
add('18. Refer to the exhibit. The routing table for R2 is as follows: Gateway of last resort is not set 10.0.0.0/30 is subnetted, 2 subnets C 10.0.0.0 is directly connected, Serial0/0/0 C 10.0.0.4 is directly connected, Serial0/0/1 192.168.10.0/26 is subnetted, 3 subnets S 192.168.10.0 is directly connected, Serial0/0/0 C 192.168.10.64 is directly connected, FastEthernet0/0 S 192.168.10.128 [1/0] via 10.0.0.6 What will router R2 do with a packet destined for 192.168.10.129?', 'send the packet out interface Serial0/0/1');
add('19. A network administrator has entered a static route to an Ethernet LAN that is connected to an adjacent router. However, the route is not shown in the routing table. Which command would the administrator use to verify that the exit interface is up?', ' show ip interface brief');
add('20. Consider the following command: ip route 192.168.10.0 255.255.255.0 10.10.10.2 5 How would an administrator test this configuration?', 'Manually shut down the router interface used as a primary route.');
add('21. Refer to the exhibit. The small company shown uses static routing. Users on the R2 LAN have reported a problem with connectivity. What is the issue?', 'R1 needs a static route to the R2 LAN.');
add('22. Which three IOS troubleshooting commands can help to isolate problems with a static route? Choose three.', 'ping', 'show ip route', 'show ip interface brief');
add('23. An administrator issues the ipv6 route 2001:db8:acad:1::/32 gigabitethernet0/0 2001:db8:acad:6::1 100 command on a router. What administrative distance is assigned to this route?', '100');
add('24. Refer to the exhibit. The network engineer for the company that is shown wants to use the primary ISP connection for all external connectivity. The backup ISP connection is used only if the primary ISP connection fails. Which set of commands would accomplish this goal?', 'ip route 0.0.0.0 0.0.0.0 s0/0/0 ip route 0.0.0.0 0.0.0.0 s0/1/0 10');
add('25. Open the PT Activity. Perform the tasks in the activity instructions and then answer the question. Why are the pings from PC0 to Server0 not successful?', 'The static route to network 192.168.2.0 is misconfigured on Router1.​');
add('26. Open the PT Activity. Perform the tasks in the activity instructions and then answer the question. What IPv6 static route can be configured on router R1 to make a fully converged network?', 'ipv6 route 2001:db8:10:12::/64 S0/0/1')

//TEST1 v5
add('21 What tool is important to consider for use when making hardware improvement decisions about switches?', ' traffic flow analysis');
add('22 What is the maximum wire speed of a single port on a 48-port gigabit switch?', '1000 Mb/s');
add('23 When the installation of a network infrastructure is being planned, which technology will allow power to be provided via Ethernet cabling to a downstream switch and its connected devices?', 'PoE pass-through');
add('25. A local law firm is redesigning the company network so that all 20 employees can be connected to a LAN and to the Internet. The law firm would prefer a low cost and easy solution for the project. What type of switch should be selected?', ' fixed configuration');
add('26. What is a definition of a two-tier LAN network design?', ' distribution and core layers collapsed into one tier, and the access layer on a separate tier');
add('27. What two criteria are used by a Cisco LAN switch to decide how to forward Ethernet frames?', ' destination MAC address', ' ingress port');
add('28. Which statement describes the microsegmentation feature of a LAN switch?', ' Each port forms a collision domain.');
add('29. Which two previously independent technologies should a network administrator attempt to combine after choosing to upgrade to a converged network infrastructure? Choose two.', ' analog and VoIP phone traffic', ' user data traffic');
add('30. What is the destination address in the header of a broadcast frame?', 'FF-FF-FF-FF-FF-FF');
add('31. Which type of address does a switch use to build the MAC address table?', ' source MAC address');
add('32. Which two previously independent technologies should a network administrator attempt to combine after choosing to upgrade to a converged network infrastructure? Choose two.', ' analog and VoIP phone traffic', ' user data traffic');
add('Refer to the exhibit. How many broadcast domains are displayed?', '8');
add('Refer to the exhibit. Fill in the blank. How many collision domains are shown in the topology?', '2');
add('37. Which network device can be used to eliminate collisions on an Ethernet network?', 'switch');
add('Refer to the exhibit. Consider that the main power has just been restored. PC3 issues a broadcast IPv4 DHCP request. To which port will SW1 forward this request?​', 'to Fa0/1, Fa0/2, and Fa0/3 only');

//TEST2 v5
add('Which type of cable does a network administrator need to connect a PC to a switch to recover it after the Cisco IOS software fails to load?', 'a console cable');
add('While troubleshooting a connectivity problem, a network administrator notices that a switch port status LED is alternating between green and amber. What could this LED indicate?', 'The port is experiencing errors.');
add('Refer to the exhibit. The network administrator wants to configure Switch1 to allow SSH connections and prohibit Telnet connections. How should the network administrator change the displayed configuration to satisfy the requirement?', 'Modify the transport input command.');
add('Which three statements are true about using full-duplex Fast Ethernet?', 'Performance is improved with bidirectional data flow.', 'Full-duplex Fast Ethernet offers 100 percent efficiency in both directions.', 'Performance is improved because the collision detect function is disabled on the device.');
add('Which protocol or service sends broadcasts containing the Cisco IOS software version of the sending device, and the packets of which can be captured by malicious hosts on the network?', 'CDP');
add(' The network administrator enters the following commands on a Cisco switch: Switch config # interface vlan1 Switch config-if # ip address 192.168.1.2 255.255.255.0 Switch config-if # no shutdown What is the effect of entering these commands?', 'Users on the 192.168.1.0/24 subnet are able to ping the switch at IP address 192.168.1.2.');
add(' Refer to the exhibit. Port Fa0/2 has already been configured appropriately. The IP phone and PC work properly. Which switch configuration would be most appropriate for port Fa0/2 if the network administrator has the following goals?  No one is allowed to disconnect the IP phone or the PC and connect some other wired device.  The switch should automatically detect the MAC address of the IP phone and the PC and add those addresses to the running configuration.', 'switchport port-security\nswitchport port-security maximum 2\nswitchport port-security mac-address sticky');
add(' Refer to the exhibit. Which event will take place if there is a port security violation on switch S1 interface Fa0/1?', 'Packets with unknown source addresses will be dropped.');
add(' Refer to the exhibit. What media issue might exist on the link connected to Fa0/1 based on the show interface command?', 'There could be too much electrical interference and noise on the link.');
add(' Full-duplex communication allows both ends of a connection to transmit and receive data simultaneously.', 'Full-duplex');
add(' When port security is enabled, a switch port uses the default violation mode of shutdown until specifically configured to use a different violation mode.', 'shutdown');
add(' Refer to the exhibit. Which S1 switch port interface or interfaces should be configured with the ip dhcp snooping trust command if best practices are implemented?', 'only the G0/1 and G0/24 ports');
add(' What impact does the use of the mdix auto configuration command have on an Ethernet interface on a switch?', 'automatically detects copper cable type');
add(' Which command displays information about the auto-MDIX setting for a specific interface?​', 'show controllers');

/*Prompts for matching questions and Packet Tracer Labs*/
add = prompts.add;

/*
 * template:
 * add('helper label');
 */

add('172.16.2.2 -> next hop');
add('10.3.0.0 -> destination network');
add('21024000 -> metric');
add('1 -> administrative distance');
add('00:22:15 -> route timestamp');
add('D -> route  source protocol');

