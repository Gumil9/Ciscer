/*Answers to multiple choice and fill-in-the-blank questions*/
var add = tests.add;

/*
 * template:
 * add(question, answer0 [, answer1, ...]);
 */

// CCNA3 Scaling Networks v6.0 Chapter 5
add('Which dynamic routing protocol was developed as an exterior gateway protocol to interconnect different Internet providers?',
    'BGP');
add('In the context of routing protocols, what is a definition for time to convergence?',
    'the capability to transport data, video, and voice over the same media');
add('An OSPF enabled router is processing learned routes to select best paths to reach a destination network. What is the OSPF algorithm evaluating as the metric?',
    'The cumulative bandwidth that is used along the routing path.');
add('What is the difference between interior and exterior routing protocols?',
    'Interior routing protocols are used to communicate within a single autonomous system. Exterior routing protocols are used to communicate between multiple autonomous systems.');
add('What are two purposes of dynamic routing protocols? (Choose two.)',
    'discover remote networks',
    'select best path to destination networks');
add('Which routing protocol is designed to use areas to scale large hierarchical networks?',
    'OSPF');
add('Which two routing protocols are classified as distance vector routing protocols? (Choose two.)',
    'EIGRP',
    'RIP');
add('A network administrator has configured RIPv2 in the given topology. Which path would a packet take to get from the LAN that is connected to R1 to the LAN that is connected to R7?',
    'R1–R2–R6–R7');
add('Which routing protocol sends a routing update to neighboring routers every 30 seconds?',
    'RIP');
add('After a network topology change occurs, which distance vector routing protocol can send an update message directly to a single neighboring router without unnecessarily notifying other routers?',
    'EIGRP');
add('Which feature provides secure routing updates between RIPv2 neighbors?',
    'routing protocol authentication');
add('What is maintained within an EIGRP topology table?',
    'all routes received from neighbors');
add('A network administrator is researching routing protocols for implementation in a critical network infrastructure. Which protocol uses the DUAL algorithm to provide almost instantaneous convergence during a route failover?',
    'EIGRP');
add('OSPF is used in the network. Which path will be chosen by OSPF to send data packets from Net A to Net B?',
    'R1, R3, R5, R7');
add('What are two features of the OSPF routing protocol? (Choose two.)',
    'calculates its metric using bandwidth',
    'uses Dijkstra’s algorithm to build the SPF tree');
add('Which two protocols are link-state routing protocols? (Choose two.)',
    'OSPF',
    'IS-IS');
add('Which routing protocol uses link-state information to build a map of the topology for computing the best path to each destination network?',
    'OSPF');
add('Which two requirements are necessary before a router configured with a link-state routing protocol can build and send its link-state packets? (Choose two.)',
    'The router has determined the costs associated with its active links.',
    'The router has established its adjacencies.');
add('What happens when two link-state routers stop receiving hello packets from neighbors?',
    'They consider the neighbor to be unreachable and the adjacency is broken.');
add('Which two events will trigger the sending of a link-state packet by a link-state routing protocol? (Choose two.)',
    'a change in the topology',
    'the initial startup of the routing protocol process');
add('What is the first step taken by a newly configured OSPF router in the process of reaching a state of convergence?',
    'It learns about directly connected links in an active state.');
add('Which two components of an LSP enable an OSPF router to determine if the LSP that is received contains newer information than what is in the current OSPF router link-state database? (Choose two.)',
    'sequence numbers',
    'aging informatio');
add('Which statement is an incorrect description of the OSPF protocol?',
    'When compared with distance vector routing protocols, OSPF utilizes less memory and less CPU processing power.');
add('What is a disadvantage of deploying OSPF in a large single area routing environment?',
    'OSPF uses excessive LSP flooding.');

// CCNA1 Introduction to Networks Final Exam A
add('What is a characteristic of a fault tolerant network?',
	'a network that recovers quickly when a failure occurs and depends on redundancy to limit the impact of a failure');
add('Three bank employees are using the corporate network. The first employee uses a web browser to view a company web page in order to read some announcements. The second employee accesses the corporate database to perform some financial transactions. The third employee participates in an important live audio conference with other corporate managers in branch offices. If QoS is implemented on this network, what will be the priorities from highest to lowest of the different data types?',
	'audio conference, financial transactions, web page');
add('What is a benefit of using cloud computing in networking?',
	'Network capabilities are extended without requiring investment in new infrastructure, personnel, or software.');
add('What is the function of the shell in an OS?',
	'It interfaces between the users and the kernel.');
add('Which connection provides a secure CLI session with encryption to a Cisco switch?',
	'an SSH connection');
add('A network technician is attempting to configure an interface by entering the following command: SanJose(config)# ip address 192.168.2.1 255.255.255.0. The command is rejected by the device. What is the reason for this?',
	'The command is being entered from the wrong mode of operation.');
add('An administrator uses the Ctrl-Shift-6 key combination on a switch after issuing the ping command. What is the purpose of using these keystrokes?',
	'to interrupt the ping process');
add('Refer to the exhibit. A network administrator is configuring access control to switch SW1. If the administrator uses a console connection to connect to the switch, which password is needed to access user EXEC mode?',
	'lineconin');
add('On which switch interface would an administrator configure an IP address so that the switch can be managed remotely?',
	'VLAN 1');
add('What protocol is responsible for controlling the size of segments and the rate at which segments are exchanged between a web client and a web server?',
	'TCP');
add('What is an advantage to using a protocol that is defined by an open standard?',
	'It encourages competition and promotes choices.');
add('What are two benefits of using a layered network model? (Choose two.)',
	'It assists in protocol design.',
	'It prevents technology in one layer from affecting other layers.');
add('Which two OSI model layers have the same functionality as two layers of the TCP/IP model? (Choose two.)',
	'network',
	'transport');
add('Which name is assigned to the transport layer PDU?',
	'segment');
add('A network administrator is troubleshooting connectivity issues on a server. Using a tester, the administrator notices that the signals generated by the server NIC are distorted and not usable. In which layer of the OSI model is the error categorized?',
	'physical layer');
add('A network administrator is measuring the transfer of bits across the company backbone for a mission critical financial application. The administrator notices that the network throughput appears lower than the bandwidth expected. Which three factors could influence the differences in throughput? (Choose three.)',
	'the amount of traffic that is currently crossing the network',
	'the type of traffic that is crossing the network',
	'the latency that is created by the number of network devices that the data is crossing');
add('What is a characteristic of UTP cabling?',
	'cancellation');
add('What are two characteristics of fiber-optic cable? (Choose two.)',
	'It is not affected by EMI or RFI.',
	'It is more expensive than UTP cabling is');
add('What is a characteristic of the LLC sublayer?',
	'It places information in the frame allowing multiple Layer 3 protocols to use the same network interface and media.');
add('A network team is comparing physical WAN topologies for connecting remote sites to a headquarters building. Which topology provides high availability and connects some, but not all, remote sites?',
	'partial mesh');
add('What method is used to manage contention-based access on a wireless network?',
	'CSMA/CA');
add('What are the three primary functions provided by Layer 2 data encapsulation? (Choose three.)',
	'data link layer addressing',
	'detection of errors through CRC calculations',
	'delimiting groups of bits into frames');
add('What will a host on an Ethernet network do if it receives a frame with a destination MAC address that does not match its own MAC address?',
	'It will discard the frame.');
add('Which frame forwarding method receives the entire frame and performs a CRC check to detect errors before forwarding the frame?',
	'store-and-forward switching');
add('Refer to the exhibit. If host A sends an IP packet to host B, what will the destination address be in the frame when it leaves host A?',
	'BB:BB:BB:BB:BB:BB');
add('What addresses are mapped by ARP?',
	'destination MAC address to a destination IPv4 address');
add('What are two services provided by the OSI network layer? (Choose two.)',
	'routing packets toward the destination',
	'encapsulating PDUs from the transport layer');
add('What are two functions of NVRAM? (Choose two.)',
	'to retain contents when power is removed',
	'to store the startup configuration file');
add('Refer to the exhibit. What will be the result of entering this configuration the next time a network administrator connects a console cable to the router and no additional commands have been entered?',
	'The administrator will be presented with the R1> prompt.');
add('What is the dotted decimal representation of the IPv4 address 11001011.00000000.01110001.11010011?',
	'203.0.113.211');
add('What are three characteristics of multicast transmission? (Choose three.)',
	'A single packet can be sent to a group of hosts.',
	'Multicast transmission can be used by routers to exchange routing information.',
	'Routers will not forward multicast addresses in the range of 224.0.0.0 to 224.0.0.255.');
add('What are the three ranges of IP addresses that are reserved for internal private use? (Choose three.)',
	'10.0.0.0/8',
	'172.16.0.0/12',
	'192.168.0.0/16');
add('What purpose does NAT64 serve in IPv6?',
	'It converts IPv6 packets into IPv4 packets.');
add('What is the most compressed representation of the IPv6 address 2001:0000:0000:abcd:0000:0000:0000:0001?',
	'2001:0:0:abcd::1');
add('Which range of link-local addresses can be assigned to an IPv6-enabled interface?',
	'FE80::/10');
add('How many valid host addresses are available on an IPv4 subnet that is configured with a /26 mask?',
	'62');
add('A site administrator has been told that a particular network at the site must accommodate 126 hosts. Which subnet mask would be used that contains the required number of host bits?',
	'255.255.255.128');
add('Which subnet would include the address 192.168.1.96 as a usable host address?',
	'192.168.1.64/26');
add('Which statement is true about variable-length subnet masking?',
	'The size of each subnet may be different, depending on requirements');
add('Which scenario describes a function provided by the transport layer?',
	'A student has two web browser windows open in order to access two web sites. The transport layer ensures the correct web page is delivered to the correct browser window');
add('A user opens three browsers on the same PC to access www.cisco.com to search for certification course information. The Cisco web server sends a datagram as a reply to the request from one of the web browsers. Which information is used by the TCP/IP protocol stack in the PC to identify which of the three web browsers should receive the reply?',
	'the destination port number');
add('What are two ways that TCP uses the sequence numbers in a segment? (Choose two.)',
	'to identify missing segments at the destination.',
	'to reassemble the segments at the remote location');
add('Which two tasks are functions of the presentation layer? (Choose two.)',
	'compression',
	'encryption');
add('What is a key characteristic of the peer-to-peer networking model?',
	'resource sharing without a dedicated server');
add('A technician can ping the IP address of the web server of a remote company but cannot successfully ping the URL address of the same web server. Which software utility can the technician use to diagnose the problem?',
	'nslookup');
add('Which domain name would be an example of a top-level domain?',
	'.com');
add('A PC obtains its IP address from a DHCP server. If the PC is taken off the network for repair, what happens to the IP address configuration?',
	'The address is returned to the pool for reuse when the lease expires.');
add('A wireless host needs to request an IP address. What protocol would be used to process the request?',
	'DHCP');
add('Which example of malicious code would be classified as a Trojan horse?',
	'malware that was written to look like a video game');
add('When applied to a router, which command would help mitigate brute-force password attacks against the router?',
	'login block-for 60 attempts 5 within 60');
add('A network technician suspects that a particular network connection between two Cisco switches is having a duplex mismatch. Which command would the technician use to see the Layer 1 and Layer 2 details of a switch port?',
	'show interfaces');
add('Where are Cisco IOS debug output messages sent by default?',
	'console line');

// CCNA1 Introduction to Networks Final Exam B (additional answers)
add('A company is expanding its business to other countries. All branch offices must remain connected to corporate headquarters at all times. Which network technology is required to support this requirement?',
	'WAN');
add('A home user is looking for an ISP connection that provides high speed digital transmission over regular phone lines. What ISP connection type should be used?',
	'DSL');
add('How does quality of service help a network support a wide range of applications and services?',
	'by providing mechanisms to manage congested network traffic');
add('After making configuration changes on a Cisco switch, a network administrator issues a copy running-config startup-config command. What is the result of issuing this command?',
	'The new configuration will be loaded if the switch is restarted.');
add('Refer to the exhibit. A network administrator is configuring access control to switch SW1. If the administrator has already logged into a Telnet session on the switch, which password is needed to access privileged EXEC mode?',
	'secretin');
add('Which connection provides a secure CLI session with encryption to a Cisco network device?',
	'an SSH connection');
add('What function does pressing the Tab key have when entering a command in IOS?',
	'It completes the remainder of a partially typed word in a command.');
add('What layer is responsible for routing messages through an internetwork in the TCP/IP model?',
	'internet');
add('Which statement accurately describes a TCP/IP encapsulation process when a PC is sending data to the network?',
	'Segments are sent from the transport layer to the internet layer.');
add('What unique address is embedded in an Ethernet NIC and used for communication on an Ethernet network?',
	'MAC address');
add('Which procedure is used to reduce the effect of crosstalk in copper cables?',
	'twisting opposing circuit wire pairs together');
add('During the encapsulation process, what occurs at the data link layer for a PC connected to an Ethernet network?',
	'The physical address is added.');
add('What are two characteristics of Ethernet MAC addresses? (Choose two.)',
	'They are globally unique.',
	'They are expressed as 12 hexadecimal digits.');
add('If a device receives an Ethernet frame of 60 bytes, what will it do?',
	'drop the frame');
add('Under which two circumstances will a switch flood a frame out of every port except the port that the frame was received on? (Choose two.)',
	'The frame has the broadcast address as the destination address.',
	'The destination address is unknown to the switch.');
add('Which switching method has the lowest level of latency?',
	'fast-forward');
add('Which two commands can be used on a Windows host to display the routing table? (Choose two.)',
	'route print',
	'netstat -r');
add('Which two functions are primary functions of a router? (Choose two.)',
	'packet forwarding',
	'path selection');
add('What is the binary representation of 0xCA?',
	'11001010');
add('At a minimum, which address is required on IPv6-enabled interfaces?',
	'link-local');
add('Which service provides dynamic global IPv6 addressing to end devices without using a server that keeps a record of available IPv6 addresses?',
	'SLAAC');
add('What is the purpose of the command ping ::1?',
	'It tests the internal configuration of an IPv6 host.');
add('How many usable IP addresses are available on the 192.168.1.0/27 network?',
	'30');
add('A network administrator wants to have the same subnet mask for three subnetworks at a small site. The site has the following networks and numbers of devices: Subnetwork A: IP phones – 10 addresses Subnetwork B: PCs – 8 addresses Subnetwork C: Printers – 2 addresses What single subnet mask would be appropriate to use for the three subnetworks?',
	'255.255.255.240');
add('What subnet mask is needed if an IPv4 network has 40 devices that need IP addresses and address space is not to be wasted?',
	'255.255.255.192');
add('What are two characteristics shared by TCP and UDP? (Choose two.)',
	'port numbering',
	'use of checksum');
add('Why are port numbers included in the TCP header of a segment?',
	'to enable a receiving host to forward the data to the appropriate application');
add('Which two protocols operate at the highest layer of the TCP/IP protocol stack? (Choose two.)',
	'DNS',
	'POP');
add('What is one difference between the client-server and peer-to-peer network models?',
	'Every device in a peer-to-peer network can function as a client or a server.');
add('Which networking model is being used when an author uploads one chapter document to a file server of a book publisher?',
	'client/server');
add('What network service resolves the URL entered on a PC to the IP address of the destination server?',
	'DNS');
add('A network engineer is analyzing reports from a recently performed network baseline. Which situation would depict a possible latency issue?',
	'an increase in host-to-host ping response times');
add('Which firewall feature is used to ensure that packets coming into a network are legitimate responses to requests initiated from internal hosts?',
	'stateful packet inspection');
add('What is one indication that a Windows computer did not receive an IPv4 address from a DHCP server?',
	'The computer receives an IP address that starts with 169.254');
add('Which command can an administrator issue on a Cisco router to send debug messages to the vty lines?',
	'terminal monitor');
add('Fill in the blank. During data communications, a host may need to send a single message to a specific group of destination hosts simultaneously. This message is in the form of a Multicast message.',
	'Multicast');

// CCNA1 Introduction to Networks Final Exam C (additional answers)
add('A medium-sized business is researching available options for connecting to the Internet. The company is looking for a high speed option with dedicated, symmetric access. Which connection type should the company choose?',
	'leased line');
add('What is the purpose of having a converged network?',
	'to reduce the cost of deploying and maintaining the communication infrastructure');
add('What characteristic of a network enables it to quickly grow to support new users and applications without impacting the performance of the service being delivered to existing users?',
	'scalability');
add('After several configuration changes are made to a router, the copy running-configuration startup-configuration command is issued. Where will the changes be stored?',
	'NVRAM');
add('Refer to the exhibit. From global configuration mode, an administrator is attempting to create a message-of-the-day banner by using the command banner motd V Authorized access only! Violators will be prosecuted! V When users log in using Telnet, the banner does not appear correctly. What is the problem?',
	'The delimiting character appears in the banner message.');
add('What are three characteristics of an SVI? (Choose three.)',
	'It is not associated with any physical interface on a switch.',
	'It provides a means to remotely manage a switch.',
	'It is associated with VLAN1 by default.');
add('A technician configures a switch with these commands: SwitchA(config)# interface vlan 1 SwitchA(config-if)# ip address 192.168.1.1 255.255.255.0 SwitchA(config-if)# no shutdown What is the technician configuring?',
	'SVI');
add('In computer communication, what is the purpose of message encoding?',
	'to convert information to the appropriate form for transmission');
add('What is the process of dividing a data stream into smaller pieces before transmission?',
	'segmentation');
add('When IPv4 addressing is manually configured on a web server, which property of the IPv4 configuration identifies the network and host portion for an IPv4 address?',
	'subnet mask');
add('A network engineer is measuring the transfer of bits across the company backbone for a mission critical database application. The engineer notices that the network throughput appears lower than the bandwidth expected. Which three factors could influence the differences in throughput? (Choose three.)',
	'the amount of traffic that is currently crossing the network',
	'the type of traffic that is crossing the network',
	'the latency that is created by the number of network devices that the data is crossing');
add('Which type of UTP cable is used to connect a PC to a switch port?',
	'straight-through');
add('What are two actions performed by a Cisco switch? (Choose two.)',
	'using the source MAC addresses of frames to build and maintain a MAC address table',
	'utilizing the MAC address table to forward frames via the destination MAC address');
add('What are two examples of the cut-through switching method? (Choose two.)',
	'fast-forward switching',
	'fragment-free switching');
add('What information is added during encapsulation at OSI Layer 3?',
	'source and destination IP address');
add('Refer to the exhibit. The network administrator for a small advertising company has chosen to use the 192.168.5.96/27 network for internal LAN addressing. As shown in the exhibit, a static IP address is assigned to the company web server. However, the web server cannot access the Internet. The administrator verifies that local workstations with IP addresses that are assigned by a DHCP server can access the Internet, and the web server is able to ping local workstations. Which component is incorrectly configured?',
	'default gateway address');
add('Why does a Layer 3 device perform the ANDing process on a destination IP address and subnet mask?',
	'to identify the network address of the destination network');
add('Which three addresses are valid public addresses? (Choose three.)',
	'198.133.219.17',
	'128.107.12.117',
	'64.104.78.227');
add('What type of IPv6 address is FE80::1?',
	'link-local');
add('Refer to the exhibit. On the basis of the output, which two statements about network connectivity are correct? (Choose two.)',
	'There is connectivity between this device and the device at 192.168.100.1.',
	'There are 4 hops b**etween this device and the device at 192.168.100.1.');
add('How many hosts are addressable on a network that has a mask of 255.255.255.248?',
	'6');
add('Refer to the exhibit. Consider the IP address of 192.168.10.0/24 that has been assigned to a high school building. The largest network in this building has 100 devices. If 192.168.10.0 is the network number for the largest network, what would be the network number for the next largest network, which has 40 devices?',
	'192.168.10.128');
add('In what two situations would UDP be the preferred transport protocol over TCP? (Choose two.)',
	'when a faster delivery mechanism is needed',
	'when applications do not need to guarantee delivery of the data');
add('What important information is added to the TCP/IP transport layer header to ensure communication and connectivity with a remote network device?',
	'destination and source port numbers');
add('What is the TCP mechanism used in congestion avoidance?',
	'sliding window');
add('Which three statements characterize UDP? (Choose three.)',
	'UDP provides basic connectionless transport layer functions.',
	'UDP relies on application layer protocols for error detection.',
	'UDP is a low overhead protocol that does not provide sequencing or flow control mechanisms.');
add('Which two roles can a computer assume in a peer-to-peer network where a file is being shared between two computers? (Choose two.)',
	'client',
	'server');
add('What is the function of the HTTP GET message?',
	'to request an HTML page from a web server');
add('When planning for network growth, where in the network should packet captures take place to assess network traffic?',
	'on as many different network segments as possible');
add('Refer to the exhibit. An administrator is testing connectivity to a remote device with the IP address 10.1.1.1. What does the output of this command indicate?',
	'A router along the path did not have a route to the destination.');
add('A user is unable to reach the web site when typing http://www.cisco.com in a web browser, but can reach the same site by typing http://72.163.4.161. What is the issue?',
	'DNS');
add('What source IP address does a router use by default when the traceroute command is issued?',
	'the IP address of the outbound interface');



/*Prompts for matching questions and Packet Tracer Labs*/
add = prompts.add;

/*
 * template:
 * add('helper label');
 */

// CCNA3 Scaling Networks v6.0 Chapter 5
add('adv: event, building, fast');
add('disadv: bandwidth, memory, CPU');

// CCNA1 Introduction to Networks Final Exam prompts
add('Changes made affect the operation of the device as a whole > Global Config Mode');
add('Accessed by entering enable command > privilleged EXEC mode');
add('Identified by a prompt ending with the # character > privilled EXEC mode');
add('Limited number of basic monitoring commands > user EXEC mode');
add('Accessed by entering configure terminal command > Global Config Mode');
add('The first entrance into the CLI of an IOS device > user EXEC mode');
add('Used to enable the password for vty lines > Nothing');

add('Copper < horizontal cabling structure');
add('Copper < desktop PC in an enterprise office');
add('Fiber-Optic < backbone cabling in an enterprise');
add('Fiber-Optic < long-haul networks');
add('Wireless < guest access in a coffee shop');
add('Wireless < waiting rooms in a hospital');

add('172.17.10.5 > FE 1/1');
add('172.17.12.10 > FE 1/0');
add('172.17.14.8 > FE 0/1');
add('172.17.8.20 > Serial 0/0/0');
add('172.17.6.15 > FE 0/0');

add('location of a desktop PC in a classroom > physical');
add('path of cables that connect rooms to wiring closets > physical');
add('IP address of a server > logical');
