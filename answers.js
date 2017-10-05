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


/*Prompts for matching questions and Packet Tracer Labs*/
add = prompts.add;

/*
 * template:
 * add('helper label');
 */

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
