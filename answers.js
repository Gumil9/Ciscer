/*Answers to multiple choice and fill-in-the-blank questions*/
var add = tests.add;

/*
 * template:
 * add(question, answer0 [, answer1, ...]);
 */

//TEST10
add('1. Which two definitions accurately describe the associated application layer protocol? Choose two.', 'Telnet – provides remote access to servers and networking devices', 'DNS – resolves Internet names to IP addresses');
add('2. The application layer of the TCP/IP model performs the functions of what three layers of the OSI model? Choose three.', 'session', 'presentation', 'application');
add('3. Which layer in the TCP/IP model is used for formatting, compressing, and encrypting data?', 'application');
add('4. What are two characteristics of the application layer of the TCP/IP model? Choose two.', 'the creation and maintenance of dialogue between source and destination applications', 'closest to the end user');
add('5. A manufacturing company subscribes to certain hosted services from its ISP. The services that are required include hosted world wide web, file transfer, and e-mail. Which protocols represent these three key applications? Choose three.', 'FTP', 'HTTP', 'SMTP');
add('6. What is an example of network communication that uses the client-server model?', 'A workstation initiates a DNS request when the user types www.cisco.com in the address bar of a web browser.');
add('7. Two students are working on a network design project. One student is doing the drawing, while the other student is writing the proposal. The drawing is finished and the student wants to share the folder that contains the drawing so that the other student can access the file and copy it to a USB drive. Which networking model is being used?', 'peer-to-peer');
add('8. What do the client/server and peer-to-peer network models have in common?', 'Both models support devices in server and client roles.');
add('9. What is an advantage for small organizations of adopting IMAP instead of POP?', 'Messages are kept in the mail servers until they are manually deleted from the email client');
add('10. Which application layer protocol uses message types such as GET, PUT, and POST?', 'HTTP');
add('11. When retrieving email messages, which protocol allows for easy, centralized storage and backup of emails that would be desirable for a small- to medium-sized business?', 'IMAP');
add('12. Which three statements describe a DHCP Discover message? Choose three.', 'The destination IP address is 255.255.255.255.', 'The message comes from a client seeking an IP address', 'All hosts receive the message, but only a DHCP server replies');
add('13. What part of the URL, http://www.cisco.com/index.html, represents the top-level DNS domain?', '.com');
add('14. Which two tasks can be performed by a local DNS server? Choose two.', 'mapping name-to-IP addresses for internal hosts', 'forwarding name resolution requests between servers');
add('15. Which phrase describes an FTP daemon?', 'a program that is running on an FTP server');
add('16. Which statement is true about FTP?', 'The client can download data from or upload data to the server.');
add('17. What is true about the Server Message Block protocol?', 'Clients establish a long term connection to servers.');
add('18. Which application layer protocol is used to provide file-sharing and print services to Microsoft applications?', 'SMB');
add('What is the acronym for the protocol that is used when securely communicating with a web server?', 'HTTPS');
add('The HTTP message type used by the client to request data from the web server is the GET message.', 'GET');
add('Refer to the exhibit. What command was used to resolve a given host name by querying the name servers?', 'NSLOOKUP');
add('24. Open the PT Activity. Perform the tasks in the activity instructions and then answer the question. Which PC or PCs are sending FTP packets to the server?', 'PC_2');

//TEST11
add('1. A newly hired network technician is given the task of ordering new hardware for a small business with a large growth forecast. Which primary factor should the technician be concerned with when choosing the new devices?', 'devices with support for modularity');
add('2. Which network design consideration would be more important to a large corporation than to a small business?', 'redundancy');
add('3. Which two traffic types require delay sensitive delivery? Choose two.', 'voice', 'video');
add('4. A network administrator for a small company is contemplating how to scale the network over the next three years to accommodate projected growth. Which three types of information should be used to plan for network growth? Choose three.', 'documentation of the current physical and logical topologies', 'analysis of the network traffic based on protocols, applications, and services used on the network', 'inventory of the devices that are currently used on the network');
add('5. Which two statements describe how to assess traffic flow patterns and network traffic types using a protocol analyzer? Choose two.', 'Capture traffic during peak utilization times to get a good representation of the different traffic types.', 'Perform the capture on different network segments.');
add('6. Some routers and switches in a wiring closet malfunctioned after an air conditioning unit failed. What type of threat does this situation describe?', 'environmental');
add('7. Which type of network threat is intended to prevent authorized users from accessing resources?', 'DoS attacks');
add('8. Which two actions can be taken to prevent a successful network attack on an email server account? Choose two.', 'Never send the password through the network in a clear text.', 'Limit the number of unsuccessful attempts to log in to the server.');
add('9. Which firewall feature is used to ensure that packets coming into a network are legitimate responses initiated from internal hosts?', 'stateful packet inspection');
add('10. What is the purpose of the network security authentication function?', 'to require users to prove who they are');
add('11. A network administrator is issuing the login block-for 180 attempts 2 within 30 command on a router. Which threat is the network administrator trying to prevent?', 'a user who is trying to guess a password to access the router');
add('12. What is the purpose of using SSH to connect to a router?', 'It allows a secure remote connection to the router command line interface.');
add('13. Which two steps are required before SSH can be enabled on a Cisco router? Choose two.', 'Give the router a host name and domain name.', 'Generate a set of secret keys to be used for encryption and decryption.');
add('14. What is the purpose of issuing the commands cd nvram: then dir at the privilege exec mode of a router?', 'to list the content of the NVRAM');
add('15. Which command will backup the configuration that is stored in NVRAM to a TFTP server?', 'copy startup-config tftp');
add('16. Refer to the exhibit. Baseline documentation for a small company had ping round trip time statistics of 36/97/132 between hosts H1 and H3. Today the network administrator checked connectivity by pinging between hosts H1 and H3 that resulted in a round trip time of 1458/2390/6066. What does this indicate to the network administrator?', 'Something is causing a time delay between the networks.');
add('17. When should an administrator establish a network baseline?', 'at regular intervals over a period of time');
add('18. Refer to the exhibit. An administrator is trying to troubleshoot connectivity between PC1 and PC2 and uses the tracert command from PC1 to do it. Based on the displayed output, where should the administrator begin troubleshooting?', 'R1');
add('19. Which statement is true about CDP on a Cisco device?', 'CDP can be disabled globally or on a specific interface.');
add('20. A network administrator for a small campus network has issued the show ip interface brief command on a switch. What is the administrator verifying with this command?', 'the status of the switch interfaces and the address configured on interface vlan 1');
add('21. A network technician issues the arp -d * command on a PC after the router that is connected to the LAN is reconfigured. What is the result after this command is issued?', 'The ARP cache is cleared.');
add('22. A network technician issues the C:\> tracert -6 www.cisco.com command on a Windows PC. What is the purpose of the -6 command option?', 'It forces the trace to use IPv6.');
add('23. Which command should be used on a Cisco router or switch to allow log messages to be displayed on remotely connected sessions using Telnet or SSH?', 'terminal monitor');
add('VoIP defines the protocols and technologies that implement the transmission of voice data over an IP network', 'VoIP', 'Buy me some Ritter Sport please');
add('The show file systems command provides information about the amount of free nvram and flash memory with the permissions for reading or writing data.', 'file systems');
add('The show version command that is issued on a router is used to verify the value of the software configuration register.', 'show version');


/*Prompts for matching questions and Packet Tracer Labs*/
add = prompts.add;

/*
 * template:
 * add('helper label');
 */

add('Надеюсь, что делал это не просто так. И хоть кто-нибудь проставит мне хотя бы шоколадку');
add('Прости, Олег, но, похоже, нет...');

add('no dedicated server is required > peer-to-peer network');
add('client and server roles are set on a per request basis > peer-to-peer network');
add('requires a specific user interface > peer-to-peer aplication');
add('a background service is required > peer-to-peer aplication');

add('DHCP > dynamically assigns IP address to clients');
add('DNS > maps URLs to numerical addresses');
add('IMAP > allows viewing of messages on email clients');
add('HTTP > displays web pages');
add('SMTP > sends email messages');

add('installing virus code to destroy surveillance recordings for certain days > data loss');
add('pretending to be someone else by using stolen personal information to apply for a credit card > identity theft');
add('preventing userd from accessing a website by sending a large number of link requests in a short period > disruption of service');
add('obtaining trade secret documents illegally > information theft');

