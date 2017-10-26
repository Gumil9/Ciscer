/*Answers to multiple choice and fill-in-the-blank questions*/
var add = tests.add;

/*
 * template:
 * add(question, answer0 [, answer1, ...]);
 */

// CCNA3 Scaling Networks v6.0 Chapter 6
add('When an EIGRP-enabled router uses a password to accept routes from other EIGRP-enabled routers, which mechanism is used?',
    'EIGRP authentication');
add('What is the purpose of using protocol-dependent modules in EIGRP?',
    'to accommodate routing of different network layer protocols');
add('If all router Ethernet interfaces in an EIGRP network are configured with the default EIGRP timers, how long will a router wait by default to receive an EIGRP packet from its neighbor before declaring the neighbor unreachable?',
    '15 seconds');
add('Which statement describes a characteristic of the delivery of EIGRP update packets?',
    'EIGRP uses a reliable delivery protocol to send all update packets.');
add('Which two EIGRP packet types are sent with unreliable delivery? (Choose two.)',
    'hello',
    'acknowledgment');
add('Which destination MAC address is used when a multicast EIGRP packet is encapsulated into an Ethernet frame?',
    '01-00-5E-00-00-0A');
add('What is identified within the opcode of an EIGRP packet header?',
    'the EIGRP message type that is being sent or received from a neighbor');
add('An administrator issues the router eigrp 100 command on a router. What is the number 100 used for?',
    'as the autonomous system number');
add('Why would a network administrator use a wildcard mask in the network command when configuring a router to use EIGRP?',
    'to exclude some interfaces from the EIGRP process');
add('What information does EIGRP maintain within the routing table?',
    'only successors');
add('Which table is used by EIGRP to store all routes that are learned from EIGRP neighbors?',
    'the topology table');
add('Which command or commands must be entered on a serial interface of a Cisco router to restore the bandwidth to the default value of that specific router interface?',
    'no bandwidth');
add('Which three metric weights are set to zero by default when costs in EIGRP are being calculated? (Choose three.)',
    'k2',
    'k4',
    'k5');
add('A new network administrator has been asked to verify the metrics that are used by EIGRP on a Cisco device. Which two EIGRP metrics are measured by using static values on a Cisco device? (Choose two.)',
    'bandwidth',
    'delay');
add('Which two networks contain feasible successors? (Choose two.)',
    '192.168.71.0',
    '10.44.100.252');
add('A network administrator wants to verify the default delay values for the interfaces on an EIGRP-enabled router. Which command will display these values?',
    'show interfaces');
add('R3 has two possible paths to the 172.16.99.0 network. What is the reported distance of the feasible successor route?',
    '2816');
add('R2 has two possible paths to the 192.168.10.4 network. What would make the alternate route meet the feasibility condition?',
    'a reported distance less than 3523840');
add('Which two factors does an EIGRP router use to determine that a route to a remote network meets the feasible condition and is therefore loop-free? (Choose two.)',
    'the reported distance on a neighbor router',
    'the feasible distance on the local router');
add('Which configuration is necessary to ensure successful operation of EIGRP for IPv6?',
    'The no shutdown command is required within the router configuration mode.');
add('EIGRP uses the protocol to deliver EIGRP packets to neighbors.',
    'RTP');
add('In an EIGRP topology table, a route that is in a/an state will cause the Diffusing Update Algorithm to send EIGRP queries that ask other routers for a path to this network.',
    'active');
add('Which code is displayed on the web server?',
    'Complete');


// CCNA 2 Routing and Switching v6.0 Chapters 1,2
add('A network administrator enters the command copy running-config startup-config. Which type of memory will the startup configuration be placed into?',
    'NVRAM');
add('Which packet-forwarding method does a router use to make switching decisions when it is using a forwarding information base and an adjacency table?',
    'Cisco Express Forwarding');
add('What are two functions of a router? (Choose two.)',
    'A router connects multiple IP networks.',
    'It determines the best path to send packets.');
add('In order for packets to be sent to a remote destination, what three pieces of information must be configured on a host? (Choose three.)',
    'IP address',
    'subnet mask',
    'default gateway');
add('Which software is used for a network administrator to make the initial router configuration securely?',
    'terminal emulation client software');
add('Refer to the exhibit. A network administrator has configured R1 as shown. When the administrator checks the status of the serial interface, the interface is shown as being administratively down. What additional command must be entered on the serial interface of R1 to bring the interface up?',
    'no shutdown');
add('What is a characteristic of an IPv4 loopback interface on a Cisco IOS router?​',
    'It is a logical interface internal to the router.');
add('What two pieces of information are displayed in the output of the show ip interface brief command? (Choose two.)',
    'IP addresses',
    'Layer 1 statuses');
add('Which two items are used by a host device when performing an ANDing operation to determine if a destination address is on the same local network? (Choose two.)',
    'destination IP address',
    'subnet mask');
add('Refer to the exhibit. PC A sends a request to Server B. What IPv4 address is used in the destination field in the packet as the packet leaves PC A?',
    '192.168.12.16');
add('Refer to the exhibit.\
    What does R1 use as the MAC address of the destination when constructing the frame that will go from R1 to Server B?',
    'If the destination MAC address that corresponds to the IPv4 address is not in the ARP cache, R1 sends an ARP request.');
add('Refer to the exhibit. If PC1 is sending a packet to PC2 and routing has been configured between the two routers, what will R1 do with the Ethernet frame header attached by PC1?',
    'remove the Ethernet header and configure a new Layer 2 header before sending it out S0/0/0');
add('Refer to the exhibit. What will the router do with a packet that has a destination IP address of 192.168.12.227?',
    'Send the packet out the Serial0/0/0 interface.');
add('Which two statements correctly describe the concepts of administrative distance and metric? (Choose two.)',
    'Administrative distance refers to the trustworthiness of a particular route.',
    'Routes with the smallest metric to a destination indicate the best path.');
add('Which two parameters are used by EIGRP as metrics to select the best path to reach a network? (Choose two.)​',
    'bandwidth',
    'delay');
add('What route would have the lowest administrative distance?',
    'a directly connected network');
add('Which two statements correctly describe the concepts of administrative distance and metric? (Choose two.)',
    'Administrative distance refers to the trustworthiness of a particular route.',
    'Routes with the smallest metric to a destination indicate the best path.');
add('Consider the following routing table entry for R1:\
    \
    D 10.1.1.0/24 [90/2170112] via 209.165.200.226, 00:00:05, Serial0/0/0\
    \
    What is the significance of the Serial0/0/0?',
    'It is the interface on R1 used to send data that is destined for 10.1.1.0/24.');
add('Refer to the exhibit. A network administrator issues the show ipv6 route command on R1. What two conclusions can be drawn from the routing table? (Choose two.)',
    'R1 does not know a route to any remote networks.',
    'The interface Fa0/1 is configured with IPv6 address 2001:DB8:ACAD:A::12.');
add('A network administrator configures the interface fa0/0 on the router R1 with the command ip address 172.16.1.254 255.255.255.0. However, when the administrator issues the command show ip route, the routing table does not show the directly connected network. What is the possible cause of the problem?',
    'The interface fa0/0 has not been activated.');
add('A network administrator configures a router by the command ip route 0.0.0.0 0.0.0.0 209.165.200.226. What is the purpose of this command?',
    'to provide a route to forward packets for which there is no route in the routing table');
add('What are two common types of static routes in routing tables? (Choose two)',
    'a default static route',
    'a static route to a specific network');
add('What is the effect of configuring the ipv6 unicast-routing command on a router?',
    'to enable the router as an IPv6 router');
add('When a router receives a packet, it examines the destination address of the packet and looks in the Routing table to determine the best path to use to forward the packet.',
    'Routing');
add('What are two advantages of static routing over dynamic routing? (Choose two.)',
    'Static routing is more secure because it does not advertise over the network.',
    'Static routing uses fewer router resources than dynamic routing.');
add('Refer to the exhibit. What routing solution will allow both PC A and PC B to access the Internet with the minimum amount of router CPU and network bandwidth utilization?',
    'Configure a static default route from R1 to Edge, a default route from Edge to the Internet, and a static route from Edge to R1.');
add('What is the correct syntax of a floating static route?',
    'ip route 209.165.200.228 255.255.255.248 10.0.0.1 120');
add('What is a characteristic of a static route that matches all packets?',
    'It identifies the gateway IP address to which the router sends all IP packets for which it does not have a learned or static route.');
add('What type of route allows a router to forward packets even though its routing table contains no specific route to the destination network?',
    'default route');
add('Why would a floating static route be configured with an administrative distance that is higher than the administrative distance of a dynamic routing protocol that is running on the same router?',
    'to be used as a backup route');
add('A company has several networks with the following IP address requirements:\
    IP phones – 50\
    PCs – 70\
    IP cameras – 10\
    wireless access points – 10\
    network printers – 10\
    network scanners – 2\
    \
    Which block of addresses would be the minimum to accommodate all of these devices if each type of device was on its own network?',
    '172.16.0.0/24');
add('What happens to a static route entry in a routing table when the outgoing interface associated with that route goes into the down state?',
    'The static route is removed from the routing table.');
add('The network administrator configures the router with the ip route 172.16.1.0 255.255.255.0 172.16.2.2 command. How will this route appear in the routing table?',
    'S 172.16.1.0 [1/0] via 172.16.2.2');
add('Refer to the exhibit. What two commands will change the next-hop address for the 10.0.0.0/8 network from 172.16.40.2 to 192.168.1.2? (Choose two.)',
    'A(config)# no ip route 10.0.0.0 255.0.0.0 172.16.40.2',
    'A(config)# ip route 10.0.0.0 255.0.0.0 192.168.1.2');
add('Which type of static route that is configured on a router uses only the exit interface?',
    'directly connected static route');
add('Refer to the graphic. Which command would be used on router A to configure a static route to direct traffic from LAN A that is destined for LAN C?',
    'A(config)# ip route 192.168.4.0 255.255.255.0 192.168.3.2');
add('Refer to the exhibit. The network administrator needs to configure a default route on the Border router. Which command would the administrator use to configure a default route that will require the least amount of router processing when forwarding packets?',
    'Border(config)# ip route 0.0.0.0 0.0.0.0 s0/0/1');
add('What two pieces of information are needed in a fully specified static route to eliminate recursive lookups? (Choose two.)',
    'the interface ID exit interface',
    'the IP address of the next-hop neighbor');
add('Refer to the exhibit. What command would be used to configure a static route on R1 so that traffic from both LANs can reach the 2001:db8:1:4::/64 remote network?',
    'ipv6 route 2001:db8:1:4::/64 2001:db8:1:3::2');
add('Refer to the exhibit. Which default static route command would allow R1 to potentially reach all unknown networks on the Internet?',
    'R1(config)# ipv6 route ::/0 G0/1 fe80::2');
add('Consider the following command:\
    \
    ip route 192.168.10.0 255.255.255.0 10.10.10.2 5\
    \
    Which route would have to go down in order for this static route to appear in the routing table?',
    'a static route to the 192.168.10.0/24 network');
add('Refer to the exhibit. The routing table for R2 is as follows:\
    Gateway of last resort is not set\
    \
    10.0.0.0/30 is subnetted, 2 subnets\
    C 10.0.0.0 is directly connected, Serial0/0/0\
    C 10.0.0.4 is directly connected, Serial0/0/1\
    192.168.10.0/26 is subnetted, 3 subnets\
    S 192.168.10.0 is directly connected, Serial0/0/0\
    C 192.168.10.64 is directly connected, FastEthernet0/0\
    S 192.168.10.128 [1/0] via 10.0.0.6\
    \
    What will router R2 do with a packet destined for 192.168.10.129?',
    'send the packet out interface Serial0/0/1');
add('A network administrator has entered a static route to an Ethernet LAN that is connected to an adjacent router. However, the route is not shown in the routing table. Which command would the administrator use to verify that the exit interface is up?',
    'show ip interface brief');
add('Consider the following command:\
    \
    ip route 192.168.10.0 255.255.255.0 10.10.10.2 5\
    \
    How would an administrator test this configuration?',
    'Manually shut down the router interface used as a primary route.');
add('Refer to the exhibit. The small company shown uses static routing. Users on the R2 LAN have reported a problem with connectivity. What is the issue?',
    'R1 needs a static route to the R2 LAN.');
add('Which three IOS troubleshooting commands can help to isolate problems with a static route? (Choose three.)',
    'ping',
    'show ip route',
    'show ip interface brief');
add('An administrator issues the ipv6 route 2001:db8:acad:1::/32 gigabitethernet0/0 2001:db8:acad:6::1 100 command on a router. What administrative distance is assigned to this route?',
    '100');
add('Refer to the exhibit. The network engineer for the company that is shown wants to use the primary ISP connection for all external connectivity. The backup ISP connection is used only if the primary ISP connection fails. Which set of commands would accomplish this goal?',
    'ip route 0.0.0.0 0.0.0.0 s0/0/0\
    ip route 0.0.0.0 0.0.0.0 s0/1/0 10');
add('Open the PT Activity. Perform the tasks in the activity instructions and then answer the question.\
    \
    Why are the pings from PC0 to Server0 not successful?',
    'The static route to network 192.168.2.0 is misconfigured on Router1.');
add('Open the PT Activity. Perform the tasks in the activity instructions and then answer the question.\
    What IPv6 static route can be configured on router R1 to make a fully converged network?',
    'ipv6 route 2001:db8:10:12::/64 S0/0/1');

/*Prompts for matching questions and Packet Tracer Labs*/
add = prompts.add;

/*
 * template:
 * add('helper label');
 */

// CCNA3 Scaling Networks v6.0 Chapter 6
add('1 > eigrp, 2 > IPv4 on loopback, 3 > IPv4 on active');
add('IPv4 > routable, IPv6 > link-local, both > 32-bit');

// CCNA2 Routing and Switching v6.0 Chapters 1,2
add('172.16.2.2 -> next hop');
add('10.3.0.0 -> destination network');
add('21024000 -> metric');
add('1 -> administrative distance');
add('00:22:15 -> route timestamp');
add('D -> route  source protocol');
