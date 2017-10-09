/*Answers to multiple choice and fill-in-the-blank questions*/
var add = tests.add;

/*
 * template:
 * add(question, answer0 [, answer1, ...]);
 */

// CCNA3 Scaling Networks v6.0 Chapter 3
add('Which two network design features require Spanning Tree Protocol (STP) to ensure correct network operation? (Choose two.)',
    'redundant links between Layer 2 switches',
    'removing single points of failure with multiple Layer 2 switches');
add('What is the outcome of a Layer 2 broadcast storm?',
    'New traffic is discarded by the switch because it is unable to be processed.');
add('What is the purpose of the Spanning Tree Protocol (STP)?',
    'prevents Layer 2 loops');
add('What is a characteristic of a Layer 2 loop?',
    'Broadcast frames are forwarded back to the sending switch.');
add('What additional information is contained in the 12-bit extended system ID of a BPDU?',
    'VLAN ID');
add('Which three components are combined to form a bridge ID?',
    'extended system ID',
    'MAC address',
    'bridge priority');
add('Which switch will be elected the root bridge and which switch will place a port in blocking mode? (Choose two.)',
    'SW4 will get a port blocked.',
    'SW3 will become the root bridge.');
add('Which trunk link will not forward any traffic after the root bridge election process is complete?',
    'Trunk2');
add('Which protocol provides up to 16 instances of RSTP, combines many VLANs with the same physical and logical topology into a common RSTP instance, and provides support for PortFast, BPDU guard, BPDU filter, root guard, and loop guard?',
    'MST');
add('Which Cisco switch feature ensures that configured switch edge ports do not cause Layer 2 loops if a port is mistakenly connected to another switch?',
    'BPDU guard');
add('Which two types of spanning tree protocols can cause suboptimal traffic flows because they assume only one spanning-tree instance for the entire bridged network? (Choose two.)',
    'STP',
    'RSTP');
add('Which spanning tree standard supports only one root bridge so that traffic from all VLANs flows over the same path?',
    '802.1D');
add('What is an advantage of PVST+?',
    'PVST+ optimizes performance on the network through load sharing.');
add('In which two port states does a switch learn MAC addresses and process BPDUs in a PVST network? (Choose two.)',
    'forwarding',
    'learning');
add('If no bridge priority is configured in PVST, which criteria is considered when electing the root bridge?',
    'lowest MAC address');
add('Which RSTP ports are connected to end devices?',
    'edge ports');
add('A network administrator is preparing the implementation of Rapid PVST+ on a production network. How are the Rapid PVST+ link types determined on the switch interfaces?',
    'Link types are determined automatically.');
add('Which port state will switch ports immediately transition to when configured for PortFast?',
    'forwarding');
add('Which STP priority configuration would ensure that a switch would always be the root switch?',
    'spanning-tree vlan 10 priority 0');
add('What is the role of the SW3 switch?',
    'root bridge');
add('To obtain an overview of the spanning tree status of a switched network, a network engineer issues the show spanning-tree command on a switch. Which two items of information will this command display? (Choose two.)',
    'The root bridge BID.',
    'The role of the ports in all VLANs.');
add('What port type is used to interconnect switches in a switch stack?',
    'StackWise');
add('Fill in the blank. Do not use abbreviations.',
    'mode rapid-pvst');
add('Which switch is the root bridge?',
    'Switch_4');

// CCNA3 Scaling Networks v6.0 Chapter 4
add('Which switching technology would allow each access layer switch link to be aggregated to provide more bandwidth between each Layer 2 switch and the Layer 3 switch?',
    'EtherChannel');
add('Which statement is true regarding the use of PAgP to create EtherChannels?',
    'It is Cisco proprietary.');
add('Which two protocols are used to implement EtherChannel? (Choose two.)',
    'Port Aggregation Protocol',
    'Link Aggregation Control Protocol');
add('Which statement describes a characteristic of EtherChannel?',
    'It is made by combining multiple physical links that are seen as one link between two switches.');
add('Which statement describes an EtherChannel implementation?',
    'A trunked port can be part of an EtherChannel bundle.');
add('An EtherChannel link using LACP was formed between two switches, S1 and S2. While verifying the configuration, which mode combination could be utilized on both switches?',
    'S1-passive and S2-active');
add('What is an advantage of using LACP?',
    'allows automatic formation of EtherChannel links');
add('What is a best practice to use before beginning an EtherChannel implementation?',
    'Shut down each of the affected interfaces.');
add('Which PAgP mode combination will establish an EtherChannel?',
    'switch 1 set to desirable; switch 2 set to desirable.');
add('Which three options must match in order to establish an EtherChannel between two directly connected switches? (Choose three.)',
    'VLAN memberships of the interfaces that are used for EtherChannel',
    'speed of the interfaces that are used for EtherChannel',
    'duplex settings of the interfaces that are used for EtherChannel');
add('A network administrator is configuring an EtherChannel link between switches SW1 and SW2 by using the command SW1(config-if-range)# channel-group 1 mode passive. Which command must be used on SW2 to enable this EtherChannel?',
    'SW2(config-if-range)# channel-group 1 mode active');
add('An EtherChannel was configured between switches S1 and S2, but the interfaces do not form an EtherChannel. What is the problem?',
    'The EtherChannel was not configured with the same allowed range of VLANs on each interface.');
add('A network administrator has decided that an EtherChannel between ports 0/1 and 0/2 on switches S1 and S2 would help performance. After making the configuration, the administrator notices no performance gain. Based on the output that is shown, what two possible assumptions could a network administrator make? (Choose two.)',
    'The EtherChannel bundle is not working.',
    'One of the ports on S2 was not configured correctly.');
add('A network administrator issued the show etherchannel summary command on the switch S1. What conclusion can be drawn?',
    'The EtherChannel is not functional.');
add('Based on the command output shown, what is the status of the EtherChannel?',
    'The EtherChannel is in use and functional as indicated by the SU and P flags in the command output.');
add('What is a requirement to configure a trunking EtherChannel between two switches?',
    'The allowed range of VLANs must be the same on both switches.');
add('What is the purpose of HSRP?',
    'It provides a continuous network connection when a router fails.');
add('Which nonproprietary protocol provides router redundancy for a group of routers which support IPv4 LANs?',
    'VRRPv2');
add('A network administrator configured routers R1 and R2 as part of HSRP group 1. After the routers have been reloaded, a user on Host1 complained of lack of connectivity to the Internet The network administrator issued the show standby brief command on both routers to verify the HSRP operations. In addition, the administrator observed the ARP table on Host1. Which entry should be seen in the ARP table on Host1 in order to gain connectivity to the Internet?',
    'the virtual IP address and the virtual MAC address for the HSRP group 1');
add('What statement is true about the output of the show standby command?',
    'The router is currently forwarding packets.');
add('A network engineer is troubleshooting host connectivity on a LAN that uses a first hop redundancy protocol. Which IPv4 gateway address should be configured on the host?',
    '192.168.2.100');
add('A network administrator would like to ensure that router R1 is always elected the active router for an HSRP group. Which set of commands would ensure the required results?',
    'R1(config-if)# ip address 192.168.1.100 255.255.255.0\nR1(config-if)# standby 1 ip 192.168.1.1\nR1(config-if)# standby 1 priority 255\nR1(config-if)# standby 1 preempt\nR1(config-if)# no shutdown');
add('Fill in the blank.',
    'virtual');
add('What are two reasons why the ping messages that are issued from Laptop0 towards Laptop1 are failing? (Choose two.)',
    'The channel group should be configured as a trunk on each switch.',
    'The two interfaces on each of the switches belong to different VLANs.');



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

/* is the following right?? */
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

// CCNA3 Scaling Networks v6.0 Chapter 4
add('show interfaces fa0/2 etherchannel -> This command shows information about the status of a port that is involved in the Etherchannel.');
add('show interfaces port-channel1 -> This command shows information about the reability of the port channel.');
add('show etherchannel summary -> This command is used to check what port channels are configured on a switch.');
add('show etherchannel port-channel -> This command shows the list of ports that are involved in the port channel and the time since the ports were bundled.');

// CCNA3 Scaling Networks v6.0 Chapter 3
add('Prop > Rapid');
add('Cisco > PVST');
add('Fast > RSTP');
add('IEEE > MSTP');


// CCNA1 Introduction to Networks v6.0 Chapter 9
add('source IP address > 192.168.1.2');
add('destination IP address > 192.168.2.2');
add('source port number > 2578');
add('destination port number > 80');

// CCNA1 Introduction to Networks v6.0 Chapter 10
add('P2P network > no dedicated server is required');
add('P2P network > client and server roles are set on a per request basis');
add('P2P app > requires a specific user interface');
add('P2P app > a background service is required');

add('DHCP > dynamically assigns IP address to clients');
add('DNS > maps URLs to numerical addresses');
add('IMAP > allows viewing of messages on email clients');
add('HTTP -> displays web pages');
add('SMTP -> sends email messages');

// CCNA1 Introduction to Networks v6.0 Chapter 11
add('installing virus code to destroy surveillance recordings for certain days > data loss');
add('pretending to be someone else by using stolen personal information to apply for a credit card > identity theft');
add('preventing userd from accessing a website by sending a large number of link requests in a short period > disruption of service');
add('obtaining trade secret documents illegally > information theft');
