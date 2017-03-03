/*Answers to multiple choice and fill-in-the-blank questions*/
var add = tests.add;

/*
 * template:
 * add(question, answer0 [, answer1, ...]);
 */

//TEST5
add('1. What happens to runt frames received by a Cisco Ethernet switch?', 'The frame is dropped');
add('2. What are the two sizes minimum and maximum of an Ethernet frame? Choose two.', '64 bytes', '1518 bytes');
add('3. What statement describes Ethernet?', 'It defines the most common LAN type in the world.');
add('4. Which two statements describe features or functions of the logical link control sublayer in Ethernet standards? Choose two.', 'Logical link control is implemented in software.', 'The data link layer uses LLC to communicate with the upper layers of the protocol suite.');
add('5. What statement describes a characteristic of MAC addresses?', 'They must be globally unique.');
add('6. Which statement is true about MAC addresses?', 'The first three bytes are used by the vendor assigned OUI.');
add('7. Which destination address is used in an ARP request frame?', 'FFFF.FFFF.FFFF');
add('8. What addressing information is recorded by a switch to build its MAC address table?', 'the source Layer 2 address of incoming frames');
add('9. Refer to the exhibit. The exhibit shows a small switched network and the contents of the MAC address table of the switch. PC1 has sent a frame addressed to PC3. What will the switch do with the frame?', 'The switch will forward the frame to all ports except port 4.');
add('10. Which switching method uses the CRC value in a frame?', 'store-and-forward');
add('11. What is auto-MDIX?', 'a feature that detects Ethernet cable type');
add('12. True or False? When a device is sending data to another device on a remote network, the Ethernet frame is sent to the MAC address of the default gateway.', 'true');
add('13. The ARP table in a switch maps which two types of address together?', 'Layer 3 address to a Layer 2 address');
add('14. Refer to the exhibit. PC1 issues an ARP request because it needs to send a packet to PC2. In this scenario, what will happen next?', 'PC2 will send an ARP reply with its MAC address.');
add('15. Refer to the exhibit. A switch with a default configuration connects four hosts. The ARP table for host A is shown. What happens when host A wants to send an IP packet to host D?', 'Host A sends out a broadcast of FF:FF:FF:FF:FF:FF. Every other host connected to the switch receives the broadcast and host D responds with its MAC address.');
add('16. Refer to the exhibit. The switches are in their default configuration. Host A needs to communicate with host D, but host A does not have the MAC address for its default gateway. Which network hosts will receive the ARP request sent by host A?', 'only hosts B, C, and router R1');
add('17. Which statement describes the treatment of ARP requests on the local link?', 'They are received and processed by every device on the local network.');
add('18. What are two potential network problems that can result from ARP operation? Choose two.', 'On large networks with low bandwidth, multiple ARP broadcasts could cause data communication delays.', 'Network attackers could manipulate MAC address and IP address mappings in ARP messages with the intent of intercepting network traffic');
add('A collision fragment, also known as a RUNT frame, is a frame of fewer than 64 bytes in length.', 'RUNT');
add('On a Cisco switch, port-based memory buffering is used to buffer frames in queues linked to specific incoming and outgoing ports.', 'port-based');
add('ARP spoofing is a technique that is used to send fake ARP messages to other hosts in the LAN. The aim is to associate IP addresses to the wrong MAC addresses.', 'spoofing');


//TEST6
add('1. Which characteristic of the network layer in the OSI model allows carrying packets for multiple types of communications among many hosts?', 'the ability to operate without regard to the data that is carried in each packet');
add('2. What are two characteristics of IP? Choose two.', 'does not require a dedicated end-to-end connection', 'operates independently of the network media');
add('3. When a connectionless protocol is in use at a lower layer of the OSI model, how is missing data detected and retransmitted if necessary?', 'Upper-layer connection-oriented protocols keep track of the data received and can request retransmission from the upper-level protocols on the sending host.');
add('4. Which field in the IPv4 header is used to prevent a packet from traversing a network endlessly?', 'Time-to-Live');
add('5. What IPv4 header field identifies the upper layer protocol carried in the packet?', 'Protocol');
add('6. What is one advantage that the IPv6 simplified header offers over IPv4?', 'efficient packet handling');
add('7. Refer to the exhibit. Which route from the PC1 routing table will be used to reach PC2?', '192.168.10.0', '255.255.255.0', 'On-link', '192.168.10.10', '281');
add('8. Refer to the exhibit. R1 receives a packet destined for the IP address 192.168.2.10. Out which interface will R1 forward the packet?', 'Serial0/0/1');
add('9. What type of route is indicated by the code C in an IPv4 routing table on a Cisco router?', 'directly connected route');
add('10. What routing table entry has a next hop address associated with a destination network?', 'remote routes');
add('11. Which statement describes a hardware feature of a Cisco 1941 router that has the default hardware configuration?', 'It has two types of ports that can be used to access the console');
add('12. Following default settings, what is the next step in the router boot sequence after the IOS loads from flash?', 'Locate and load the startup-config file from NVRAM.');
add('13. What are two types of router interfaces? Choose two.', 'LAN', 'WAN');
add('14. Which two pieces of information are in the RAM of a Cisco router during normal operation? Choose two.', 'Cisco IOS', 'IP routing table');
add('15. A router boots and enters setup mode. What is the reason for this?', 'The configuration file is missing from NVRAM.');
add('16. What is the purpose of the startup configuration file on a Cisco router?', 'to contain the commands that are used to initially configure a router on startup');
add('17. Which three commands are used to set up secure access to a router through a connection to the console interface? Choose three.', 'line console 0', 'login', 'password cisco');
add('18. Which characteristic describes an IPv6 enhancement over IPv4?', 'The IPv6 header is simpler than the IPv4 header is, which improves packet handling.');
add('19. Open the PT Activity. The enable password on all devices is cisco. Perform the tasks in the activity instructions and then answer the question. For what reason is the failure occurring?', 'SW1 does not have a default gateway configured.');

//TEST7
add('1. How many bits are in an IPv4 address?', '32');
add('2. Which two parts are components of an IPv4 address? Choose two.', 'network portion', 'host portion');
add('3. What does the IP address 172.17.4.250/24 represent?', 'host address');
add('4. What is the purpose of the subnet mask in conjunction with an IP address?', 'to determine the subnet to which the host belongs');
add('5. What subnet mask is represented by the slash notation /20?', '255.255.240.0');
add('6. A message is sent to all hosts on a remote network. Which type of message is it?', 'directed broadcast');
add('7. What are three characteristics of multicast transmission? Choose three.', 'A single packet can be sent to a group of hosts.', 'Multicast transmission can be used by routers to exchange routing information.', 'The range of 224.0.0.0 to 224.0.0.255 is reserved to reach multicast groups on a local network.');
add('8. Which three IP addresses are private ? Choose three.', '10.1.1.1', '172.16.4.4', '192.168.5.5');
add('9. Which two IPv4 to IPv6 transition techniques manage the interconnection of IPv6 domains? Choose two.', 'dual stack', 'tunneling');
add('10. Which of these addresses is the shortest abbreviation for the IP address: 3FFE : 1044 : 0000 : 0000 : 00AB : 0000 : 0000 : 0057?', '3FFE : 1044 : 0 : 0 : AB :: 57');
add('11. What type of address is automatically assigned to an interface when IPv6 is enabled on that interface?', 'link-local');
add('12. What are two types of IPv6 unicast addresses? Choose two.', 'loopback', 'link-local');
add('13. What are three parts of an IPv6 global unicast address? Choose three.', 'a global routing prefix that is used to identify the network portion of the address that has been provided by an ISP', 'a subnet ID that is used to identify networks inside of the local enterprise site', 'an interface ID that is used to identify the local host on the network');
add('14. An administrator wants to configure hosts to automatically assign IPv6 addresses to themselves by the use of Router Advertisement messages, but also to obtain the DNS server address from a DHCPv6 server. Which address assignment method should be configured?', 'stateless DHCPv6');
add('15. Which protocol supports Stateless Address Autoconfiguration SLAAC for dynamic assignment of IPv6 addresses to a host?', 'ICMPv6');
add('16. Which two things can be determined by using the ping command? Choose two.', 'the average time it takes a packet to reach the destination and for the response to return to the source', 'the destination device is reachable through the network');
add('17. What is the purpose of ICMP messages?', 'to provide feedback of IP packet transmissions');
add('18. What is indicated by a successful ping to the ::1 IPv6 address?', 'IP is properly installed on the host.');
add('19. A user is executing a tracert to a remote device. At what point would a router, which is in the path to the destination device, stop forwarding the packet?', 'when the value in the TTL field reaches zero');
add('20. What field content is used by ICMPv6 to determine that a packet has expired?', 'Hop Limit field');
add('The decimal equivalent of the binary number 10010101 is 149 .', '149');
add('The binary equivalent of the decimal number 232 is 11101000', '11101000');
add('What is the decimal equivalent of the hex number 0x3F?', '63');


/*Prompts for matching questions and Packet Tracer Labs*/
add = prompts.add;

/*
 * template:
 * add('helper label');
 */

add('Надеюсь, что делал это не просто так. И хоть кто-нибудь проставит мне хотя бы шоколадку');
add('Прости, Олег, но, похоже, нет...');

add('cut-through > low latency');
add('cut-through > may forward runt frames');
add('cut-through > begins forwarding when the destination address is received');
add('store-and-forward > always stores the entire frame');
add('store-and-forward > checks the CRC before forwarding');
add('store-and-forward > checks the frame length before forwarding');

add('R1config# > service password-encrytion');
add('R1> > enable');
add('R1# > copy running-config startup-config');
add('R1config-line# > login');
add('R1config-if# > ip address 192.168.4.4 255.255.255.0');

add('169.254.1.5 > a link-local address');
add('192.0.2.123 > a TEST-NET address');
add('240.2.6.255 > an experimental address');
add('172.19.20.5 > a private address');
add('127.0.0.1 > a loopback address');
