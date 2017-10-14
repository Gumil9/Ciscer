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



// CCNA1 Introduction to Networks v6.0 Chapter 9
add('Which two characteristics are associated with UDP sessions? (Choose two.)',
    'Destination devices receive traffic with minimal delay.',
    'Received data is unacknowledged.');
add('What happens if part of an FTP message is not delivered to the destination?',
    'The part of the FTP message that was lost is re-sent.');
add('A host device needs to send a large video file across the network while providing data communication to other users. Which feature will allow different communication streams to occur at the same time, without having a single data stream using all available bandwidth?',
    'multiplexing');
add('What kind of port must be requested from IANA in order to be used with a specific application?',
    'registered port');
add('What type of information is included in the transport header?',
    'destination and source port numbers');
add('What is a socket?',
    'the combination of a source IP address and port number or a destination IP address and port number');
add('What is the complete range of TCP and UDP well-known ports?',
    '0 to 1023');
add('Which flag in the TCP header is used in response to a received FIN in order to terminate connectivity between two network devices?',
    'ACK');
add('What is a characteristic of a TCP server process?',
    'There can be many ports open simultaneously on a server, one for each active server application.');
add('Which two flags in the TCP header are used in a TCP three-way handshake to establish connectivity between two network devices? (Choose two.)',
    'ACK',
    'SYN');
add('A PC is downloading a large file from a server. The TCP window is 1000 bytes. The server is sending the file using 100-byte segments. How many segments will the server send before it requires an acknowledgment from the PC?',
    '10 segments');
add('Which factor determines TCP window size?',
    'the amount of data the destination can process at one time');
add('During a TCP session, a destination device sends an acknowledgment number to the source device. What does the acknowledgment number represent?',
    'the next byte that the destination expects to receive');
add('What information is used by TCP to reassemble and reorder received segments?',
    'sequence numbers');
add('What does TCP do if the sending source detects network congestion on the path to the destination?',
    'The source will decrease the amount of data that it sends before it must receive acknowledgements from the destination.');
add('What is a characteristic of UDP?',
    'UDP reassembles the received datagrams in the order they were received.');
add('What does a client do when it has UDP datagrams to send?',
    'It just sends the datagrams.');
add('What happens if the first packet of a TFTP transfer is lost?',
    'The TFTP application will retry the request if a reply is not received.');
add('A host device is receiving live streaming video. How does the device account for video data that is lost during transmission?',
    'The device will continue receiving the streaming video, but there may be a momentary disruption.');
add('Why does HTTP use TCP as the transport layer protocol?',
    'because HTTP requires reliable delivery');
add('When is UDP preferred to TCP?',
    'when an application can tolerate some loss of data during transmission');
add('Which three application layer protocols use TCP? (Choose three.)',
    'SMTP',
    'FTP',
    'HTTP');

// CCNA1 Introduction to Networks v6.0 Chapter 10
add('Which two definitions accurately describe the associated application layer protocol? (Choose two.)',
    'Telnet – provides remote access to servers and networking devices',
    'DNS – resolves Internet names to IP addresses');
add('The application layer of the TCP/IP model performs the functions of what three layers of the OSI model? (Choose three.)',
    'session',
    'presentation',
    'application');
add('Which layer in the TCP/IP model is used for formatting, compressing, and encrypting data?',
    'application');
add('What are two characteristics of the application layer of the TCP/IP model? (Choose two.)',
    'the creation and maintenance of dialogue between source and destination applications',
    'closest to the end user');
add('A manufacturing company subscribes to certain hosted services from its ISP. The services that are required include hosted world wide web, file transfer, and e-mail. Which protocols represent these three key applications? (Choose three.)',
    'FTP',
    'HTTP',
    'SMTP');
add('What is an example of network communication that uses the client-server model?',
    'A workstation initiates a DNS request when the user types www.cisco.com in the address bar of a web browser.');
add('Two students are working on a network design project. One student is doing the drawing, while the other student is writing the proposal. The drawing is finished and the student wants to share the folder that contains the drawing so that the other student can access the file and copy it to a USB drive. Which networking model is being used?',
    'peer-to-peer');
add('What do the client/server and peer-to-peer network models have in common?',
    'Both models support devices in server and client roles.');
add('What is an advantage for small organizations of adopting IMAP instead of POP?',
    'Messages are kept in the mail servers until they are manually deleted from the email client.');
add('Which application layer protocol uses message types such as GET, PUT, and POST?',
    'HTTP');
add('When retrieving email messages, which protocol allows for easy, centralized storage and backup of emails that would be desirable for a small- to medium-sized business?',
    'IMAP');
add('Which three statements describe a DHCP Discover message? (Choose three.)',
    'The destination IP address is 255.255.255.255.',
    'The message comes from a client seeking an IP address.',
    'All hosts receive the message, but only a DHCP server replies.');
add('What part of the URL, http://www.cisco.com/index.html, represents the top-level DNS domain?',
    '.com');
add('Which two tasks can be performed by a local DNS server? (Choose two.)',
    'mapping name-to-IP addresses for internal hosts',
    'forwarding name resolution requests between servers');
add('Which phrase describes an FTP daemon?',
    'a program that is running on an FTP server');
add('Which statement is true about FTP?',
    'The client can download data from or upload data to the server.');
add('What is true about the Server Message Block protocol?',
    'Clients establish a long term connection to servers.');
add('Which application layer protocol is used to provide file-sharing and print services to Microsoft applications?',
    'SMB');
add('What is the acronym for the protocol that is used when securely communicating with a web server?',
    'HTTPS');
add('The HTTP message type used by the client to request data from the web server is the GET message.',
    'GET');
add('Refer to the exhibit. What command was used to resolve a given host name by querying the name servers? NSLOOKUP',
    'NSLOOKUP');
add('Open the PT Activity. Perform the tasks in the activity instructions and then answer the question. Which PC or PCs are sending FTP packets to the server?',
    'PC_2');

// CCNA1 Introduction to Networks v6.0 Chapter 11
add('A newly hired network technician is given the task of ordering new hardware for a small business with a large growth forecast. Which primary factor should the technician be concerned with when choosing the new devices?',
    'devices with support for modularity');
add('Which network design consideration would be more important to a large corporation than to a small business?',
    'redundancy');
add('Which two traffic types require delay sensitive delivery? (Choose two.)', 
    'voice',
    'video');
add('A network administrator for a small company is contemplating how to scale the network over the next three years to accommodate projected growth. Which three types of information should be used to plan for network growth? (Choose three.)',
    'documentation of the current physical and logical topologies',
    'analysis of the network traffic based on protocols, applications, and services used on the network',
    'inventory of the devices that are currently used on the network');
add('Which two statements describe how to assess traffic flow patterns and network traffic types using a protocol analyzer? (Choose two.)',
    'Capture traffic during peak utilization times to get a good representation of the different traffic types.',
    'Perform the capture on different network segments.');
add('Some routers and switches in a wiring closet malfunctioned after an air conditioning unit failed. What type of threat does this situation describe?', 
    'environmental');
add('Which type of network threat is intended to prevent authorized users from accessing resources?',
    'DoS attacks');
add('Which two actions can be taken to prevent a successful network attack on an email server account? (Choose two.)', 
    'Never send the password through the network in a clear text.',
    'Limit the number of unsuccessful attempts to log in to the server.');
add('Which firewall feature is used to ensure that packets coming into a network are legitimate responses initiated from internal hosts?', 
    'stateful packet inspection');
add('What is the purpose of the network security authentication function?',
    'to require users to prove who they are');
add('A network administrator is issuing the login block-for 180 attempts 2 within 30 command on a router. Which threat is the network administrator trying to prevent?',
    'a user who is trying to guess a password to access the router');
add('What is the purpose of using SSH to connect to a router?',
    'It allows a secure remote connection to the router command line interface.');
add('Which two steps are required before SSH can be enabled on a Cisco router? (Choose two.)',
    'Give the router a host name and domain name.',
    'Generate a set of secret keys to be used for encryption and decryption.');
add('What is the purpose of issuing the commands cd nvram: then dir at the privilege exec mode of a router?', 
    'to list the content of the NVRAM');
add('Which command will backup the configuration that is stored in NVRAM to a TFTP server?',
    'copy startup-config tftp');
add('Refer to the exhibit. Baseline documentation for a small company had ping round trip time statistics of 36/97/132 between hosts H1 and H3. Today the network administrator checked connectivity by pinging between hosts H1 and H3 that resulted in a round trip time of 1458/2390/6066. What does this indicate to the network administrator?',
    'Something is causing a time delay between the networks.');
add('When should an administrator establish a network baseline?',
    'at regular intervals over a period of time');
add('Refer to the exhibit. An administrator is trying to troubleshoot connectivity between PC1 and PC2 and uses the tracert command from PC1 to do it. Based on the displayed output, where should the administrator begin troubleshooting?',
    'R1');
add('Which statement is true about CDP on a Cisco device?',
    'CDP can be disabled globally or on a specific interface.');
add('A network administrator for a small campus network has issued the show ip interface brief command on a switch. What is the administrator verifying with this command?', 
    'the status of the switch interfaces and the address configured on interface vlan 1');
add('A network technician issues the arp -d * command on a PC after the router that is connected to the LAN is reconfigured. What is the result after this command is issued?', 
    'The ARP cache is cleared.');
add('A network technician issues the C:\> tracert -6 www.cisco.com command on a Windows PC. What is the purpose of the -6 command option?',
    'It forces the trace to use IPv6.');
add('Which command should be used on a Cisco router or switch to allow log messages to be displayed on remotely connected sessions using Telnet or SSH?',
    'terminal monitor');
add('VoIP defines the protocols and technologies that implement the transmission of voice data over an IP network',
    'VoIP');
add('The show file systems command provides information about the amount of free nvram and flash memory with the permissions for reading or writing data.',
    'file systems');
add('The show version command that is issued on a router is used to verify the value of the software configuration register.',
    'show version');

/*Prompts for matching questions and Packet Tracer Labs*/
add = prompts.add;

/*
 * template:
 * add('helper label');
 */

// CCNA3 Scaling Networks v6.0 Chapter 5
add('adv: event, building, fast');
add('disadv: bandwidth, memory, CPU');


//CCNA1 Introduction to Networks v6.0 PT Final Exam
add('HOST1/Rec124_1: 192.168.1.97 255.255.255.224, GW 192.168.1.126, 2001:DB8:ACAD:A::FF/64, GW FE80::1');
add('HOST2/Op124_5:  192.168.1.98 255.255.255.224, GW 192.168.1.126, 2001:DB8:ACAD:A::15/64, GW FE80::1');
add('HOST3/IT214_1:  192.168.1.145 255.255.255.240, GW 192.168.1.158, 2001:DB8:ACAD:B::FF/64, GW FE80::1');
add('TFTP: 192.168.1.146 255.255.255.240, GW 192.168.1.158, 2001:DB8:ACAD:B::15/64, GW FE80::1');

add('R:en/conf t/hostname Middle/enable secret class12345/service pass../banner motd $This is Router$');
add('R:security passwords min-length 10/login block-for 120 attempts 2 within 30/no ip domain-lookup');
add('R:ip domain-name ccnav6.com/crypto key generate rsa/1024');
add('R:line con 0/pass cisco12345/login/logging synchronous/exec-timeout 60/exit');
add('R:line vty 0 4/pass cisco12345/transport input ssh/login local/logging synchronous/exec-timeout 60/exit');
add('R:line aux 0/pass cisco12345/login/logging synchronous/exec-timeout 60/exit');
add('R:ip ssh version 2/ip ssh time-out 120/username netadmin privilege 15 secret Cisco_CCNA5');
add('R:int g0/0/ip addr 192.168.1.126 255.255.255.224/description (First Floor/IT Department) LAN');
add('R:ipv6 addr 2001:DB8:ACAD:A::1/64/ipv6 addr fe80::1 link-local/no shutdown/exit');
add('R:int g0/1/ip addr 192.168.1.158 255.255.255.240/description (Second Floor/Administration) LAN');
add('R:ipv6 addr 2001:DB8:ACAD:B::1/64/ipv6 address fe80::1 link-local/no shutdown/exit');
add('R:ipv6 unicast-routing/exit/write/copy running-config tftp: 192.168.1.146');
add('S:en/conf t/en secret class12345/serv pass../banner motd $Second Floor Switch$/no ip domain-lookup');
add('S:line console 0/password cisco12345/login/logging synchronous/exec-timeout 60/exit');
add('S:line vty 0 15/pass cisco12345/login/logging synchronous/exec-timeout 60/exit');
add('S:int vlan 1/ip addr 192.168.1.157 255.255.255.240/no shutdown/ip default-gate 192.168.1.158/exit/write');

