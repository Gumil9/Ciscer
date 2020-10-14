/*Answers to multiple choice and fill-in-the-blank questions*/
var add = tests.add;

/*
 * template:
 * add(question, answer0 [, answer1, ...]);
 */

// CCNA4 v7.0 test 5
add('Which action is performed by a client when establishing communication with a server via the use of UDP at the transport layer?', 'The client randomly selects a source port number.');
add('Which transport layer feature is used to guarantee session establishment?', 'TCP 3-way handshake');
add('What is the complete range of TCP and UDP well-known ports?', '0 to 1023​');
add('What is a socket?', 'the combination of a source IP address and port number or a destination IP address and port number');
add('A PC is downloading a large file from a server. The TCP window is 1000 bytes. The server is sending the file using 100-byte segments. How many segments will the server send before it requires an acknowledgment from the PC?', '10 segments');
add('Which factor determines TCP window size?', 'the amount of data the destination can process at one time');
add('What does a client do when it has UDP datagrams to send?', 'It just sends the datagrams.');
add('Which three fields are used in a UDP segment header? (Choose three.)', 'Length', 'Source Port', 'Checksum');
add('What are two roles of the transport layer in data communication on a network? (Choose two.)', 'identifying the proper application for each communication stream', 'tracking the individual communication between applications on the source and destination hosts');
add('What information is used by TCP to reassemble and reorder received segments?', 'sequence numbers');
add('What important information is added to the TCP/IP transport layer header to ensure communication and connectivity with a remote network device?', 'destination and source port numbers');
add('Which two characteristics are associated with UDP sessions? (Choose two.)', 'Destination devices receive traffic with minimal delay.', 'Received data is unacknowledged.');
add('Which flag in the TCP header is used in response to a received FIN in order to terminate connectivity between two network devices?', 'ACK');
add('Which protocol or service uses UDP for a client-to-server communication and TCP for server-to-server communication?', 'DNS');
add('What is a characteristic of UDP?', 'UDP reassembles the received datagrams in the order they were received.');
add('What kind of port must be requested from IANA in order to be used with a specific application?', 'registered port');
add('Which three application layer protocols use TCP? (Choose three.)', 'SMTP', 'FTP', 'HTTP');
add('Which three statements characterize UDP? (Choose three.)', 'UDP provides basic connectionless transport layer functions.', 'UDP relies on application layer protocols for error detection.', 'UDP is a low overhead protocol that does not provide sequencing or flow control mechanisms.');
add('Which two fields are included in the TCP header but not in the UDP header? (Choose two.)', 'window', 'sequence number');
add('Which field in the TCP header indicates the status of the three-way handshake process?', 'control bits');
add('Why does HTTP use TCP as the transport layer protocol?', 'because HTTP requires reliable delivery');
add('Which two types of applications are best suited for UDP? (Choose two.)', 'applications that handle reliability themselves', 'applications that can tolerate some data loss, but require little or no delay');
add('How are port numbers used in the TCP/IP encapsulation process?', 'If multiple conversations occur that are using the same service, the source port number is used to track the separate conversations.');
add('In what two situations would UDP be better than TCP as the preferred transport protocol? (Choose two.)', 'when a faster delivery mechanism is needed', 'when applications do not need to guarantee delivery of the data');
add('What are three responsibilities of the transport layer? (Choose three.)', 'meeting the reliability requirements of applications, if any', 'multiplexing multiple communication streams from many users or applications on the same network', 'identifying the applications and services on the client and server that should handle transmitted data');
add('Which three statements describe a DHCP Discover message? (Choose three.)', 'The destination IP address is 255.255.255.255.', 'The message comes from a client seeking an IP address.', 'All hosts receive the message, but only a DHCP server replies.');
add('Which two protocols may devices use in the application process that sends email? (Choose two.)', 'SMTP', 'DNS');
add('What is true about the Server Message Block protocol?', 'Clients establish a long term connection to servers.');
add('What is the function of the HTTP GET message?', 'to request an HTML page from a web server');
add('Which OSI layer provides the interface between the applications used to communicate and the underlying network over which messages are transmitted?', 'application');
add('Which networking model is being used when an author uploads one chapter document to a file server of a book publisher?', 'client/server');
add('What do the client/server and peer-to-peer network models have in common?', 'Both models support devices in server and client roles.');
add('In what networking model would eDonkey, eMule, BitTorrent, Bitcoin, and LionShare be used?', 'peer-to-peer');
add('What is a common protocol that is used with peer-to-peer applications such as WireShare, Bearshare, and Shareaza?', 'Gnutella');
add('What is a key characteristic of the peer-to-peer networking model?', 'resource sharing without a dedicated server');
add('The application layer of the TCP/IP model performs the functions of what three layers of the OSI model? (Choose three.)', 'session', 'presentation', 'application');
add('What is an example of network communication that uses the client-server model?', 'A workstation initiates a DNS request when the user types www.cisco.com in the address bar of a web browser.');
add('Which layer in the TCP/IP model is used for formatting, compressing, and encrypting data?', 'application');
add('What is an advantage of SMB over FTP?​', 'SMB clients can establish a long-term connection to the server.​');
add('A manufacturing company subscribes to certain hosted services from its ISP. The services that are required include hosted world wide web, file transfer, and e-mail. Which protocols represent these three key applications? (Choose three.)', 'FTP, HTTP, SMTP');
add('Which application layer protocol uses message types such as GET, PUT, and POST?', 'HTTP');
add('What type of information is contained in a DNS MX record?', 'the domain name mapped to mail exchange servers');
add('Which three protocols operate at the application layer of the TCP/IP model? (Choose three.)', 'FTP, POP3, DHCP');
add('Which protocol is used by a client to communicate securely with a web server?', 'HTTPS');
add('Which applications or services allow hosts to act as client and server at the same time?', 'P2P applications');
add('What are two characteristics of peer-to-peer networks? (Choose two.)', 'decentralized resources', 'resource sharing without a dedicated server');
add('Which scenario describes a function provided by the transport layer?', 'A student has two web browser windows open in order to access two web sites. The transport layer ensures the correct web page is delivered to the correct browser window.');
add('Which three layers of the OSI model provide similar network services to those provided by the application layer of the TCP/IP model? (Choose three.)', 'session layer', 'application layer', 'presentation layer');
add('A PC that is communicating with a web server has a TCP window size of 6,000 bytes when sending data and a packet size of 1,500 bytes. Which byte of information will the web server acknowledge after it has received two packets of data from the PC?', '3001');
add('A PC that is communicating with a web server has a TCP window size of 6,000 bytes when sending data and a packet size of 1,500 bytes. Which byte of information will the web server acknowledge after it has received three packets of data from the PC?', '4501');
add('A PC that is communicating with a web server has a TCP window size of 6,000 bytes when sending data and a packet size of 1,500 bytes. Which byte of information will the web server acknowledge after it has received four packets of data from the PC?', '6001');
add('A client creates a packet to send to a server. The client is requesting TFTP service. What number will be used as the destination port number in the sending packet?', '69');
add('A client creates a packet to send to a server. The client is requesting FTP service. What number will be used as the destination port number in the sending packet?', '21');
add('A client creates a packet to send to a server. The client is requesting SSH service. What number will be used as the destination port number in the sending packet?', '22');
add('A client creates a packet to send to a server. The client is requesting HTTP service. What number will be used as the destination port number in the sending packet?', '80');
add('A client creates a packet to send to a server. The client is requesting POP3 service. What number will be used as the destination port number in the sending packet?', '110');
add('A client creates a packet to send to a server. The client is requesting telnet service. What number will be used as the destination port number in the sending packet?', '23');
add('A client creates a packet to send to a server. The client is requesting SNMP service. What number will be used as the destination port number in the sending packet?', '161');
add('A client creates a packet to send to a server. The client is requesting SMTP service. What number will be used as the destination port number in the sending packet?', '25');
add('A client creates a packet to send to a server. The client is requesting HTTPS service. What number will be used as the destination port number in the sending packet?', '443');

/*Prompts for matching questions and Packet Tracer Labs*/
add = prompts.add;

/*
 * template:
 * add('helper label');
 */

add('1 client FIN; 2 server ACK; 3 server FIN; 4 client ACK');
