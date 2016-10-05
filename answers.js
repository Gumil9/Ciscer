/*Answers to multiple choice and fill-in-the-blank questions*/
var add = tests.add;

/*
 template:
 add(question, answer0 [, answer1, ...]);
 */

/*TEST 10*/
add('Which three layers of the OSI model provide similar network services to those provided by the application layer of the TCP/IP model? (Choose three.)',
    'session layer','application layer','presentation layer');
add('Which two tasks are functions of the presentation layer? (Choose two.)',
    'compression','encryption');
add('Select three protocols that operate at the Application Layer of the OSI model. (Choose three.)',
    'FTP','POP3','DHCP');
add('A manufacturing company subscribes to certain hosted services from their ISP. The services required include hosted world wide web, file transfer, and e-mail. Which protocols represent these three key applications? (Choose three.)',
    'FTP','HTTP','SMTP');
add('What are two characteristics of peer-to-peer networks? (Choose two.)',
    'decentralized resources','resource sharing without a dedicated server');
add('What is an example of network communication that uses the client-server model?',
    'A workstation initiates a DNS request when the user types www.cisco.com in the address bar of a web browser.');
add('What is an advantage for small organizations of adopting IMAP instead of POP?',
    'Messages are kept in the mail servers until the client manually deletes them.');
add('Which two actions are taken by SMTP if the destination email server is busy when email messages are sent? (Choose two.)',
    'SMTP tries to send the messages at a later time.','SMTP periodically checks the queue for messages and attempts to send them again.');
add('Which application layer protocol uses message types such as GET, PUT, and POST?',
    'HTTP');
add('A DHCP-enabled client PC has just booted. During which two steps will the client PC use broadcast messages when communicating with a DHCP server? (Choose two.)',
    'DHCPDISCOVER','DHCPREQUEST');
add('A user accessed the game site www.nogamename.com last week. The night before the user accesses the game site again, the site administrator changes the site IP address. What will be the consequence of that action for the user?',
    'The user will access the site without problems.');
add('Which DNS server in the DNS hierarchy would be considered authoritative for the domain name records of a company named netacad?',
    'netacad.com');
add('Which three statements describe a DHCP Discover message? (Choose three.)',
    'The destination IP address is 255.255.255.255.','The message comes from a client seeking an IP address.','All hosts receive the message, but only a DHCP server replies.');
add('Which phrase describes an FTP daemon?',
    'a program that is running on an FTP server');
add('What is true about the Server Message Block protocol?',
    'Clients establish a long term connection to servers.');
add('When would it be more efficient to use SMB to transfer files instead of FTP?',
    'when downloading large numbers of files from the same server');
add('What is the acronym for the protocol that is used when securely communicating with a web server?',
    'HTTPS');
add('What command was used to resolve  a given host name by querying the name servers?',
    'nslookup');
add('Which PC or PCs are sending FTP packets to the server?',
    'PC_2');
add('Which two definitions accurately describe the associated application layer protocol? (Choose two.)',
    'Telnet – provides remote access to servers and networking devices','DNS – resolves Internet names to IP addresses');
add('The application layer of the TCP/IP model performs the functions of what three layers of the OSI model? (Choose three.)',
    'session','presentation','application');
add('Which layer in the TCP/IP model is used for formatting, compressing, and encrypting data?',
    'application');
add('What are two characteristics of the application layer of the TCP/IP model? (Choose two.)',
    'the creation and maintenance of dialogue between source and destination applications','closest to the end user');
add('A manufacturing company subscribes to certain hosted services from its ISP. The services that are required include hosted world wide web, file transfer, and e-mail. Which protocols represent these three key applications? (Choose three.)',
    'FTP','HTTP','SMTP');
add('What is an example of network communication that uses the client-server model?',
    'A workstation initiates a DNS request when the user types www.cisco.com in the address bar of a web browser.');
add('Two students are working on a network design project. One student is doing the drawing, while the other student is writing the proposal. The drawing is finished and the student wants to share the folder that contains the drawing so that the other student can access the file and copy it to a USB drive. Which networking model is being used?',
    'peer-to-peer');
add('What do the client/server and peer-to-peer network models have in common?',
    'Both models support devices in server and client roles');
add('What is an advantage for small organizations of adopting IMAP instead of POP?',
    'Messages are kept in the mail servers until they are manually deleted from the email client.');
add('Which application layer protocol uses message types such as GET, PUT, and POST?',
    'HTTP');
add('When retrieving email messages, which protocol allows for easy, centralized storage and backup of emails that would be desirable for a small- to medium-sized business?',
    'IMAP');
add('Which three statements describe a DHCP Discover message? (Choose three.)',
    'The destination IP address is 255.255.255.255.','The message comes from a client seeking an IP address.','All hosts receive the message, but only a DHCP server replies');
add('What part of the URL, http://www.cisco.com/index.html, represents the top-level DNS domain?',
    '.com');
add('Which two tasks can be performed by a local DNS server? (Choose two.)',
    'mapping name-to-IP addresses for internal hosts','forwarding name resolution requests between servers');
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
add('The HTTP message type used by the client to request data from the web server is the  message',
    'GET');
add('What command was used to resolve a given host name by querying the name servers?)',
    'NSLOOKUP');


/*TEST 11*/

add('Which two statements about a service set identifier (SSID) are true? (Choose two.)',
    'all wireless devices on the same WLAN must have the same SSID','tells a wireless device to which WLAN it belongs');
add('Which type of network attack involves the disabling or corruption of networks, systems, or services?',
    'denial of service attacks');
add('Which command will backup the configuration that is stored in NVRAM to a TFTP server?',
    'copy startup-config tftp');
add('How long will a user be blocked if the user exceeds the maximum allowed number of unsuccessful login attempts?',
    '3 minutes');
add('The command that is issued on a router is used to verify the value of the software configuration register.',
    'show version');
add('What is a security feature of using NAT on a network?',
    'allows internal IP addresses to be concealed from external users');
add('A network administrator has determined that various computers on the network are infected with a worm. Which sequence of steps should be followed to mitigate the worm attack?',
    'containment, inoculation, quarantine, and treatment');
add('Which WLAN security protocol generates a new dynamic key each time a client establishes a connection with the AP?',
    'WPA');
add('Baseline documentation for a small company had ping round trip time statistics of 36/97/132 between hosts H1 and H3. Today the network administrator checked connectivity by pinging between hosts H1 and H3 that resulted in a round trip time of 1458/2390/6066. What does this indicate to the network administrator?',
    'Something is causing a time delay between the networks.');
add('When should an administrator establish a network baseline?',
    'at regular intervals over a period of time');
add('A ping fails when performed from router R1 to directly connected router R2. The network administrator then proceeds to issue the show cdp neighbors command. Why would the network administrator issue this command if the ping failed between the two routers?',
    'The network administrator wants to verify Layer 2 connectivity.');
add('Which statement is true about CDP on a Cisco device?',
    'CDP can be disabled globally or on a specific interface.');
add('What is the purpose of issuing the commands cd nvram: then dir at the privilege exec mode of a router?',
    'to list the content of the NVRAM');
add('A network administrator checks the security log and notices there was unauthorized access to an internal file server over the weekend. Upon further investigation of the file system log, the administrator notices several important documents were copied to a host located outside of the company. What kind of threat is represented in this scenario?',
    'information theft');
add('If a configuration file is saved to a USB flash drive attached to a router, what must be done by the network administrator before the file can be used on the router?',
    'Edit the configuration file with a text editor.');
add('Which network design consideration would be more important to a large corporation than to a small business?',
    'redundancy');
add('Which protocol supports rapid delivery of streaming media?',
    'RTP');
add('An administrator is trying to troubleshoot connectivity between PC1 and PC2 and uses the tracert command from PC1 to do it. Based on the displayed output, where should the administrator begin troubleshooting?',
    'R1');
add('Which two statements characterize wireless network security? (Choose two.)',
    'Using the default IP address on an access point makes hacking easier.','With SSID broadcast disabled, an attacker must know the SSID to connect.');
add('Which two actions can be taken to prevent a successful attack on an email server account? (Choose two.)',
    'Never send the password through the network in a clear text.','Limit the number of unsuccessful attempts to log in to the server.');
add('How should traffic flow be captured in order to best understand traffic patterns in a network?',
    'during peak utilization times');
add('What do WLANs that conform to IEEE 802.11 standards allow wireless user to do?',
    'connect wireless hosts to hosts or services on a wired Ethernet network');
add('defines the protocols and technologies that implement the transmission of voice data over an IP network.',
    'VoIP');
add('The show command provides information about the amount of available and free flash memory and its permissions for reading or writing data.',
    'file systems');
add('A newly hired network technician is given the task of ordering new hardware for a small business with a large growth forecast. Which primary factor should the technician be concerned with when choosing the new devices?',
    'devices with support for modularity');
add('Which network design consideration would be more important to a large corporation than to a small business?',
    'redundancy');
add('Which two traffic types require delay sensitive delivery? (Choose two.)',
    'voice','video');
add('A network administrator for a small company is contemplating how to scale the network over the next three years to accommodate projected growth. Which three types of information should be used to plan for network growth? (Choose three.)',
    'documentation of the current physical and logical topologies','analysis of the network traffic based on protocols, applications, and services used on the network','inventory of the devices that are currently used on the network');
add('Which two statements describe how to assess traffic flow patterns and network traffic types using a protocol analyzer? (Choose two.)',
    'Capture traffic during peak utilization times to get a good representation of the different traffic types.','Perform the capture on different network segments.');
add('Some routers and switches in a wiring closet malfunctioned after an air conditioning unit failed. What type of threat does this situation describe?',
    'environmental');
add('Which type of network threat is intended to prevent authorized users from accessing resources?',
    'DoS attacks');
add('Which two actions can be taken to prevent a successful network attack on an email server account? (Choose two.)',
    'Never send the password through the network in a clear text.','Limit the number of unsuccessful attempts to log in to the server.');
add('Which firewall feature is used to ensure that packets coming into a network are legitimate responses initiated from internal hosts?',
    'stateful packet inspection');
add('What is the purpose of the network security authentication function?',
    'to require users to prove who they are');
add('A network administrator is issuing the login block-for 180 attempts 2 within 30 command on a router. Which threat is the network administrator trying to prevent?',
    'a user who is trying to guess a password to access the router');
add('What is the purpose of using SSH to connect to a router?',
    'It allows a secure remote connection to the router command line interface.');
add('Which two steps are required before SSH can be enabled on a Cisco router? (Choose two.)',
    'Give the router a host name and domain name.','Generate a set of secret keys to be used for encryption and decryption.');
add('What is the purpose of issuing the commands cd nvram: then dir at the privilege exec mode of a router?',
    'to list the content of the NVRAM');
add('Which command will backup the configuration that is stored in NVRAM to a TFTP server?',
    'copy startup-config tftp');
add('Baseline documentation for a small company had ping round trip time statistics of 36/97/132 between hosts H1 and H3. Today the network administrator checked connectivity by pinging between hosts H1 and H3 that resulted in a round trip time of 1458/2390/6066. What does this indicate to the network administrator?',
    'Something is causing a time delay between the networks.');
add('When should an administrator establish a network baseline?',
    'at regular intervals over a period of time');
add('Which statement is true about CDP on a Cisco device?​',
    'CDP can be disabled globally or on a specific interface​.');
add('A network administrator for a small campus network has issued the show ip interface brief command on a switch. What is the administrator verifying with this command?',
    'the status of the switch interfaces and the address configured on interface vlan 1');
add('A network technician issues the arp -d * command on a PC after the router that is connected to the LAN is reconfigured. What is the result after this command is issued?',
    'The ARP cache is cleared.');
add('defines the protocols and technologies that implement the transmission of voice data over an IP network',
    'VoIP');
add('The show command provides information about the amount of free nvram and flash memory with the permissions for reading or writing data.',
    'file systems');
add('The command that is issued on a router is used to verify the value of the software configuration register.​',
    'show version');



/*Prompts for matching questions and Packet Tracer Labs*/
add = prompts.add;

/*
 template:
 add('helper label');
 */

/*TEST 10*/

add('end device address > A');
add('– not scored – > E');
add('authoritative name server > NS');
add('canonical name > CNAME');
add('mail exchange record > MX');

add('a message that is used to identify the explicit server and lease offer to accept');
add('a message that is used to locate any available DHCP server on a network');
add('– not scored –');
add('a message that is used to suggest a lease to a client');
add('a message that is used to acknowledge that the lease is successful');

add('no dedicated server is required > network');
add('client and server roles are set on a per request basis > network');
add('requires a specific user interface > application');
add('a background service is required > application');

add('no dedicated server is required > peer-to-peer network');
add('client and server roles are set on a per request basis > peer-to-peer network');
add('requires a specific user interface > peer-to-peer aplication');
add('a background service is required > peer-to-peer aplication');

add('DHCP -> dynamically assigns IP address to clients');
add('DNS -> maps URLs to numerical addresses');
add('IMAP -> allows viewing of messages on email clients');
add('HTTP -> displays web pages');
add('SMTP -> sends email messages');

/*TEST 11*/
add('installing virus code to destroy surveillance recordings for certain days -> data loss');
add('information to apply for a credit card -> identity theft');
add('preventing userd from accessing a website by sending a large number of link requests in a short period -> disruption of service');
add('obtaining trade secret documents illegally -> information theft');
