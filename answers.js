/*Answers to multiple choice and fill-in-the-blank questions*/
var add = tests.add;

/*
 template:
 add(question, answer0 [, answer1, ...]);
 */

/*TEST 6*/
add('After troubleshooting a router, the network administrator wants to save the router configuration so that it will be used automatically the next time that the router reboots. What command should be issued?',
    'copy running-config startup-config');
add('Which IPv4 header field is responsible for defining the priority of the packet?',
    'differentiated services');
add('When connectionless protocols are implemented at the lower layers of the OSI model, what are usually used to acknowledge the data receipt and request the retransmission of missing data?',
    'upper-layer connection-oriented protocols');
add('Why is NAT not needed in IPv6?',
    'Any host or user can get a public IPv6 network address because the number of available IPv6 addresses is extremely large.');
add('A packet leaving PC-1 has to traverse “three” hops to reach PC-4',
    'three');
add('Which two interfaces will allow access via the VTY lines to configure the router? (Choose two.)',
    'WAN interfaces','LAN interfaces');
add('A technician is manually configuring a computer with the necessary IP parameters to communicate over the corporate network. The computer already has an IP address, a subnet mask, and a DNS server. What else has to be configured for Internet access?',
    'the default gateway address');
add('Which three commands are used to set up a password for a person who attaches a cable to a new router so that an initial configuration can be performed? (Choose three.)',
    'password cisco','line console 0','login');
add('Which statement about router interfaces is true?',
    'A configured and activated router interface must be connected to another device in order to operate.');
add('A technician is configuring a router that is actively running on the network. Suddenly, power to the router is lost. If the technician has not saved the configuration, which two types of information will be lost? (Choose two.)',
    'routing table','ARP cache');
add('How do hosts ensure that their packets are directed to the correct network destination?',
    'They have to keep their own local routing table that contains a route to the loopback interface, a local network route, and a remote default route.');
add('What is a service provided by the Flow Label field of the IPv6 header?',
    'It informs network devices to maintain the same path for real-time application packets.');
add('During the process of forwarding traffic, what will the router do immediately after matching the destination IP address to a network on a directly connected routing table entry?',
    'switch the packet to the directly connected interface');
add('In a router, “ROM ” is the nonvolatile memory where the diagnostic software, the bootup instructions, and a limited IOS are stored.',
    'ROM');
add('Which two commands can be used on a Windows host to display the routing table? (Choose two.)',
    'route print','netstat -r');
add('A computer has to send a packet to a destination host in the same LAN. How will the packet be sent?',
    'The packet will be sent directly to the destination host.');
add('Which command displays a summary chart of all router interfaces, their IP addresses, and their current operational status?',
    'show ip interface brief');
add('Which two files, if found, are copied into RAM as a router with the default configuration register setting boots up? (Choose two.)',
    'startup configuration','IOS image file');
add('Does the router have enough RAM and flash memory to support the new IOS?',
    'The router has enough RAM and flash memory for the IOS upgrade.');
add('When would the Cisco IOS image held in ROM be used to boot the router?',
    'when the full IOS cannot be found');
add('Which type of static route that is configured on a router uses only the exit interface?',
    'directly connected static route');
add('Which characteristic of the network layer in the OSI model allows carrying packets for multiple types of communications among many hosts?',
    'the ability to operate without regard to the data that is carried in each packet');
add('What are two characteristics of IP? (Choose two.)',
    'does not require a dedicated end-to-end connection','operates independently of the network media');
add('When a connectionless protocol is in use at a lower layer of the OSI model, how is missing data detected and retransmitted if necessary?',
    'Upper-layer connection-oriented protocols keep track of the data received and can request retransmission from the upper-level protocols on the sending host.');
add('Which field in the IPv4 header is used to prevent a packet from traversing a network endlessly?',
    'Time-to-Live');
add('What IPv4 header field identifies the upper layer protocol carried in the packet?',
    'Protocol');
add('What is one advantage that the IPv6 simplified header offers over IPv4?',
    'efficient packet handling');
add('Refer to the exhibit. Which route from the PC1 routing table will be used to reach PC2?',
    'Network Destination 192.168.10.0 Netmask 255.255.255.0');
add('Refer to the exhibit. R1 receives a packet destined for the IP address 192.168.2.10. Out which interface will R1 forward the packet?',
    'Serial0/0/1');
add('What type of route is indicated by the code C in an IPv4 routing table on a Cisco router?',
    'directly connected route');
add('What routing table entry has a next hop address associated with a destination network?',
    'remote routes');
add('Which statement describes a hardware feature of a Cisco 1941 router that has the default hardware configuration?',
    'It has two types of ports that can be used to access the console.');
add('Following default settings, what is the next step in the router boot sequence after the IOS loads from flash?',
    'Locate and load the startup-config file from NVRAM.');
add('What are two types of router interfaces? (Choose two.)',
    'LAN','WAN');
add('Which two pieces of information are in the RAM of a Cisco router during normal operation? (Choose two.)',
    'Cisco IOS','IP routing table');
add('A router boots and enters setup mode. What is the reason for this?',
    'The configuration file is missing from NVRAM.');
add('What is the purpose of the startup configuration file on a Cisco router?',
    'to contain the commands that are used to initially configure a router on startup');
add('Which three commands are used to set up secure access to a router through a connection to the console interface? (Choose three.)',
    'line console 0','login','password cisco');
add('Which characteristic describes an IPv6 enhancement over IPv4?',
    'The IPv6 header is simpler than the IPv4 header is, which improves packet handling.');
add('Open the PT Activity. The enable password on all devices is cisco. Perform the tasks in the activity instructions and then answer the question. For what reason is the failure occurring?​',
    'SW1 does not have a default gateway configured.');


/*TEST 7*/
add('A PC is downloading a large file from a server. The TCP window is 1000 bytes. The server is sending the file using 100-byte segments. How many segments will the server send before it requires an acknowledgment from the PC?',
    '10 segments');
add('A host device needs to send a large video file across the network while providing data communication to other users. Which feature will allow different communication streams to occur at the same time, without having a single data stream using all available bandwidth?',
    'multiplexing');
add('A technician wishes to use TFTP to transfer a large file from a file server to a remote router. Which statement is correct about this scenario?',
    'The file is segmented and then reassembled in the correct order at the destination, if necessary, by the upper-layer protocol.');
add('Which scenario describes a function provided by the transport layer?',
    'A student has two web browser windows open in order to access two web sites. The transport layer ensures the correct web page is delivered to the correct browser window.');
add('Which transport layer feature is used to guarantee session establishment?',
    'TCP 3-way handshake');
add('What is the complete range of TCP and UDP well-known ports?',
    '0 to 1023');
add('Which two TCP header fields are used to confirm receipt of data?',
    'acknowledgment number',
    'sequence number');
add('​What is a beneficial feature of the UDP transport protocol?',
    'fewer delays in transmission');
add('Which two flags in the TCP header are used in a TCP three-way handshake to establish connectivity between two network devices? (Choose two.)',
    'SYN','ACK');
add('What happens if the first packet of a TFTP transfer is lost?',
    'The TFTP application will retry the request if a reply is not received.');
add('Compared to UDP, what factor causes additional network overhead for TCP communication?',
    'network traffic that is caused by retransmissions');
add('Which factor determines TCP window size?',
    'the amount of data the destination can process at one time');
add('During a TCP session, a destination device sends an acknowledgment number to the source device. What does the acknowledgment number represent?',
    'the next byte that the destination expects to receive');
add('What is a socket?',
    'the combination of a source IP address and port number or a destination IP address and port number');
add('During a TCP session, the “SYN” field is used by the client to request communication with the server.',
    'SYN');
add('A total of 4 messages are exchanged during the TCP session termination process between the client and the server',
    '4');
add('A host device sends a data packet to a web server via the HTTP protocol. What is used by the transport layer to pass the data stream to the proper application on the server?',
    'destination port number');
add('What does a client do when it has UDP datagrams to send?',
    'It just sends the datagrams.');
add('What does a client application select for a TCP or UDP source port number?',
    'a random value in the range of the registered ports');
add('How many bits are in an IPv4 address?',
    '32');
add('Which two parts are components of an IPv4 address? (Choose two.)',
    'network portion',
    'host portion');
add('What does the IP address 172.17.4.250/24 represent?',
    'host address');
add('What is the purpose of the subnet mask in conjunction with an IP address?',
    'to determine the subnet to which the host belongs');
add('What subnet mask is represented by the slash notation /20?',
    '255.255.240.0');
add('A message is sent to all hosts on a remote network. Which type of message is it?',
    'directed broadcast');
add('What are three characteristics of multicast transmission? (Choose three.)',
    'A single packet can be sent to a group of hosts.',
    'Multicast transmission can be used by routers to exchange routing information.',
    'The range of 224.0.0.0 to 224.0.0.255 is reserved to reach multicast groups on a local network.');
add('Which three IP addresses are private ? (Choose three.)',
    '10.1.1.1','172.16.4.4','192.168.5.5');
add('Which two IPv4 to IPv6 transition techniques manage the interconnection of IPv6 domains? (Choose two.)',
    'dual stack','tunneling');
add('Which of these addresses is the shortest abbreviation for the IP address: 3FFE : 1044 : 0000 : 0000 : 00AB : 0000 : 0000 : 0057?',
    '3FFE : 1044 : 0 : 0 : AB :: 57');
add('What type of address is automatically assigned to an interface when IPv6 is enabled on that interface?',
    'link-local');
add('What are two types of IPv6 unicast addresses? (Choose two.)',
    'loopback','link-local');
add('What are three parts of an IPv6 global unicast address? (Choose three.)',
    'a subnet ID that is used to identify networks inside of the local enterprise site','an interface ID that is used to identify the local host on the network');
add('An administrator wants to configure hosts to automatically assign IPv6 addresses to themselves by the use of Router Advertisement messages, but also to obtain the DNS server address from a DHCPv6 server. Which address assignment method should be configured?',
    'stateless DHCPv6');
add('Which protocol supports Stateless Address Autoconfiguration (SLAAC) for dynamic assignment of IPv6 addresses to a host?',
    'ICMPv6');
add('Which two things can be determined by using the ping command? (Choose two.)',
    'for the response to return to the source','the destination device is reachable through the network');
add('What is indicated by a successful ping to the ::1 IPv6 address?',
    'IP is properly installed on the host.');
add('A user is executing a tracert to a remote device. At what point would a router, which is in the path to the destination device, stop forwarding the packet?',
    'when the value in the TTL field reaches zero');
add('What field content is used by ICMPv6 to determine that a packet has expired?',
    'Hop Limit field');
add('The decimal equivalent of the binary number 10010101 is',
    '149');
add('he binary equivalent of the decimal number 232 is ',
    '11101000');
add('What is the decimal equivalent of the hex number 0x3F?',
    '63');


/*Prompts for matching questions and Packet Tracer Labs*/
add = prompts.add;

/*
 template:
 add('helper label');
 */

/*TEST 6*/
add('enable -> R1>');
add('copy running-config startup-config -> R1#');
add('login -> R1(config-line)#');
add('interface fastethernet 0/0 -> R1(config)#');

add('FastEthernet0/0 -> packets with destination of 172.17.6.15');
add('FastEthernet0/1 -> packets with destination of 172.17.14.8');
add('FastEthernet1/0 -> packets with destination of 172.17.12.10');
add('FastEthernet1/1 -> packets with destination of 172.17.10.5');
add('Serial0/0/0 -> packets with destination of 172.17.8.20');

add('IP v4 Header (A) -> Flags (A)');
add('IP v4 Header (B) -> Total Length (B)');
add('IP v6 Header (C) ->Traffic Class (C)');
add('IP v6 Header (D) -> Flow Label (D)');

add('R1(config)# -> service password-encrytion');
add('R1> -> enable');
add('R1# -> copy running-config startup-config');
add('R1(config-line)# -> login');
add('R1(config-if)# -> ip address 192.168.4.4 255.255.255.0');

/*TEST 7*/
add('192.168.1.2 -> source IP address');
add('192.168.2.2 -> destination IP address');
add('2578 -> source port number');
add('80 -> destination port number');

add('TCP  ->  window size');
add('TCP  -> 3-way handshake');
add('UDP -> connectionless');
add('UDP -> best for VoIP');
add('Both UDP and TCP -> checksum');
add('Both UDP and TCP -> port number');

add('TCP  -> HTTP');
add('TCP  -> FTP ');
add('TCP  -> TELNET');
add('UDP  -> TFTP');
add('UDP  -> DHCP ');

add('169.254.1.5 -> a link-local address');
add('192.0.2.123 -> a TEST-NET address');
add('240.2.6.255 -> an experimental address');
add('172.19.20.5 -> a private address');
add('127.0.0.1 -> a loopback address');


