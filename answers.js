/*Answers to multiple choice and fill-in-the-blank questions*/
var add = tests.add;

/*
 template:
 add(question, answer0 [, answer1, ...]);
 */

/*TEST 2*/
add('Refer to the exhibit. A switch was configured as shown. A ping to the default gateway was issued, but the ping was not successful. Other switches in the same network can ping this gateway. What is a possible reason for this?',
    'The no shutdown command was not issued for VLAN 1.');
add('While trying to solve a network issue, a technician made multiple changes to the current router configuration file. The changes did not solve the problem and were not saved. What action can the technician take to discard the changes and work with the file in NVRAM?',
    'Issue the reload command without saving the running configuration.');
add('Why is it important to configure a hostname on a device?',
    'to identify the device during remote access (SSH or telnet)');
add('Which procedure is used to access a Cisco 2960 switch when performing an initial configuration in a secure environment?',
    'Use the console port to locally access the switch from a serial or USB interface of the PC.');
add('What criterion must be followed in the design of an IPv4 addressing scheme for end devices?',
    'Each IP address must be unique within the local network.');
add('A network administrator needs to keep the user ID, password, and session contents private when establishing remote CLI connectivity with a switch to manage it. Which access method should be chosen?',
    'SSH');
add('Which interface allows remote management of a Layer 2 switch?',
    'the switch virtual interface');
add('What is a result of using the service password-encryption command on a Cisco network device?',
    'All passwords in the configuration are not shown in clear text when viewing the configuration.');
add('Match the definitions to their respective CLI hot keys and shortcuts.',
    'Tab -> Completes abbreviated commands and parameters' +
    '<br>Ctrl-R -> returns directly to the privileged EXEC mode' +
    '<br>Up Arrow -> scrolls backwards through previously entered commands' +
    '<br>Ctrl-Z -> cancels any command currently being entered and returns directly to privileged EXEC mode' +
    '<br>Ctrl-C -> Redisplays, on a new line, the command currently being typed' +
    '<br>Other answer.' +
    '<br>The shortcuts with their functions are as follows:' +
    '<br>Tab –> Completes the remainder of a partially typed command or keyword' +
    '<br>Space bar –> displays the next screen' +
    '<br>? –> provides context-sensitive help' +
    '<br>Up Arrow –> Allows user to scroll backward through former commands' +
    '<br>Ctrl-C –> cancels any command currently being entered and returns directly to privileged EXEC mode' +
    '<br>Ctrl-Shift-6 –> Allows the user to interrupt an IOS process such as ping or traceroute');
add('A network administrator is planning an IOS upgrade on several of the head office routers and switches. Which three questions must be answered before continuing with the IOS selection and upgrade? (Choose three.)',
    'What models of routers and switches require upgrades?',
    'Do the routers and switches have enough RAM and flash memory for the proposed IOS versions?',
    'What features are required for the devices?');
add('What benefit does DHCP provide to a network?',
    'Hosts can connect to the network and get an IP address without manual configuration.');
add('Which two functions are provided to users by the context-sensitive help feature of the Cisco IOS CLI? (Choose two.)',
    'displaying a list of all available commands within the current mode',
    'determining which option, keyword, or argument is available for the entered command ');
add('A router has a valid operating system and a configuration stored in NVRAM. When the router boots up, which mode will display?',
    'user EXEC mode');
add('Which two features are characteristics of flash memory? (Choose two.)',
    'Flash provides nonvolatile storage',
    'The contents of flash may be overwritten');
add('Passwords can be used to restrict access to all or parts of the Cisco IOS. Select the modes and interfaces that can be protected with passwords. (Choose three.)',
    'privileged EXEC mode' +
    '<br>VTY interface' +
    '<br>console interface');
add('Why would a Layer 2 switch need an IP address?',
    'to enable the switch to be managed remotely');
add('What is a user trying to determine when issuing a ping 10.1.1.1 command on a PC?',
    'if there is connectivity with the destination device');
add('What command can be used on a Windows PC to see the IP configuration of that computer?',
    'ipconfig');
add('Which statement is true about the running configuration file in a Cisco IOS device?',
    'It affects the operation of the device immediately when modified.');
add('Which two characters are allowed as part of the hostname of a Cisco device? (Choose two.)',
    'numbers' +
    '<br>underline');
add('A new network administrator has been asked to enter a banner message on a Cisco device. What is the fastest way a network administrator could test whether the banner is properly configured?',
    'Exit enable mode and press Enter.' +
    '<br>Exit privileged EXEC mode and press Enter. *TRUE*');
add('Which two characters are allowed as part of the hostname of a Cisco device? (Choose two.)',
    'dash *TRUE*' +
    '<br>numbers *TRUE*');

/*TEST 3*/
add('Which PDU format is used when bits are received from the network medium by the NIC of a host?',
    'frame*');
add('A user sends an HTTP request to a web server on a remote network. During encapsulation for this request, what information is added to the address field of a frame to indicate the destination?',
    'the MAC address of the default gateway*');
add('What is a benefit of using a layered model for network communications?',
    'fostering competition among device and software vendors by enforcing the compatibility of their products*');
add('What method can be used by two computers to ensure that packets are not dropped because too much data is being sent too quickly?',
    'flow control*');
add('A web client is sending a request for a webpage to a web server. From the perspective of the client, what is the correct order of the protocol stack that is used to prepare the request for transmission?',
    'HTTP, TCP, IP, Ethernet*');
add('Which statement accurately describes a TCP/IP encapsulation process when a PC is sending data to the network?',
    'Segments are sent from the transport layer to the internet layer.*');
add('Which protocol is responsible for controlling the size and rate of the HTTP messages exchanged between server and client?',
    'TCP*');
add('Launch PT Hide and Save PT. Open the PT Activity. Perform the tasks in the activity instructions and then answer the question. Based on the configured network, what IP address would PC1 and PC2 use as their default gateway?',
    '192.168.1.1*');
add('A computer in a given network is communicating with a specific group of computers. What type of communication is this?',
    'multicast*');
add('What is a function of Layer 4 of the OSI model?',
    'to describe the ordered and reliable delivery of data between source and destination*');
add('What is an advantage of network devices using open standard protocols?',
    'A client host and a server running different operating systems can successfully exchange data.*');
add('Which IEEE standard enables a wireless NIC to connect to a wireless AP that is made by a different manufacturer?',
    '802.11*');
add('If the default gateway is configured incorrectly on the host, what is the impact on communications?',
    'The host can communicate with other hosts on the local network, but is unable to communicate with hosts on remote networks.*');
add('What statement describes the function of the Address Resolution Protocol?',
    'ARP is used to discover the MAC address of any host on the local network.*');
add('At which layer of the OSI model would a logical address be encapsulated?',
    'network layer*');
add('What is the general term that is used to describe a piece of data at any layer of a networking model?',
    'protocol data unit*');
add('Which statement is true about the TCP/IP and OSI models?​',
    'The TCP/IP transport layer and OSI Layer 4 provide similar services and functions.*');
add('Which address provides a unique host address for data communications at the internet layer?',
    'logical address*');
add('A user is viewing an HTML document located on a web server. What protocol segments the messages and manages the segments in the individual conversation between the web server and the web client?',
    'TCP*');
add('Which address does a NIC use when deciding whether to accept a frame?',
    'destination MAC address*');
add('What are proprietary protocols?',
    'protocols developed by organizations who have control over their definition and operation*');
add('Which protocol is used by a computer to find the MAC address of the default gateway on an Ethernet network?',
    '**ARP**');
add('Refer to the exhibit. PC-A and PC-B are both in VLAN 60. PC-A is unable to communicate with PC-B. What is the problem?',
    '?(new question)');
add('Which command is used to remove only VLAN 20 from a switch?',
    'no vlan 20');



/*Prompts for matching questions and Packet Tracer Labs*/
add = prompts.add;

/*
 template:
 add('helper label');
 */

add('step 5 => R1 replaces the address 192.168.10.10 with a translated inside global address.');
add('step 2 => R1 checks the NAT configuration to determine if this packet should be translated.');
add('step 4 => R1 selects an available global address from the dynamic address pool.');
add('step 1 => The cost sends packets that request a connection to the server at the address 209.165.200.254');
add('step 3 => If there is no translation entry for this IP address, R1 determines that the source address 192.168.10.10 must be translated.');

add('full operating system > flash');
add('limited operating system > ROM');
add('routing table > RAM');
add('startup configuration file > NVRAM');

add('Each router is responsible for “saying hello” to its neighbors on directly connected networks. > step 2');
add('Each router builds a Link-State Packet (LSP) containing the state of each directly connected link > step 3');
add('Each router learns about its own directly connected networks. > step 1');
add('Each router floods the LSP to all neighbors, who then store all LSPs received in a database > step 4');
add('Each router uses the database to construct a complete map of the topology and computes the best > step 5');

add('buffering > 1');
add('full-duplex > 2');
add('collision domain > 3');
add('MAC address table > 4');
