/*Answers to multiple choice and fill-in-the-blank questions*/
var add = tests.add;

/*
 template:
 add(question, answer0 [, answer1, ...]);
 */
/*FINAL TEST*/
add('Which communication tool allows real-time collaboration?',
   'instant messaging');
add('A host is accessing a Web server on a remote network. Which three functions are performed by intermediary network devices during this conversation? (Choose three.)',
   'regenerating data signals','applying security settings to control the flow of data','notifying other devices when errors occur');
add('A home user is looking for an ISP connection that provides high speed digital transmission over regular phone lines. What ISP connection type should be used?',
   'DSL');
add('A company is expanding its business to other countries. All branch offices must remain connected to corporate headquarters at all times. Which network technology is required to support this requirement?',
   'WAN');
add('Refer to the exhibit. From which location did this router load the IOS? ',
   'flash memory');
add('Which connection provides a secure CLI session with encryption to a Cisco network device?',
   'an SSH connection');
add('Refer to the exhibit. An administrator is trying to configure the switch but receives the error message that is displayed in the exhibit. What is the problem?',
   'The administrator must first enter privileged EXEC mode before issuing the command.');
add('An administrator uses the Ctrl-Shift-6 key combination on a switch after issuing the ping command. What is the purpose of using these keystrokes?',
   'to interrupt the ping process');
add('What function does pressing the Tab key have when entering a command in IOS?',
   'It completes the remainder of a partially typed word in a command.');
add('Refer to the exhibit. An administrator wants to change the name of a brand new switch, using the hostname command as shown. What prompt will display after the command is issued?',
   'Switch(config)#?');
add('Refer to the exhibit. A network administrator is configuring access control to switch SW1. If the administrator uses Telnet to connect to the switch, which password is needed to access user EXEC mode?',
   'linevtyin');
add('After making configuration changes, a network administrator issues a copy running-config startup-config command in a Cisco switch. What is the result of issuing this command?',
   'The new configuration will be loaded if the switch is restarted.');
add('Refer to the exhibit. Which action will be successful?',
   'PC2 can send a ping to 192.168.1.1.');
add('Which IPv4 address can be pinged to test the internal TCP/IP operation of a host?',
   '127.0.0.1');
add('What three application layer protocols are part of the TCP/IP protocol suite? (Choose three.)',
   'DHCP','DNS','FTP');
add('Which two protocols function at the internet layer? (Choose two.)',
   'ICMP','IP');
add('Which publicly available resources describe protocols, processes, and technologies for the Internet but do not give implementation details?',
   'Request for Comments');
add('Which address on a PC does not change, even if the PC is moved to a different network?',
   'MAC address');
add('What is the protocol that is used to discover a physical address from a known logical address and what message type does it use?',
   'ARP, broadcast');
add('What will happen if the default gateway address is incorrectly configured on a host?',
   'The host cannot communicate with hosts in other networks.');
add('What is an important function of the physical layer of the OSI model?',
   'It encodes frames into electrical, optical, or radio wave signals.');
add('Which procedure is used to reduce the effect of crosstalk in copper cables?',
   'twisting opposing circuit wire pairs together');
add('Which two statements describe the characteristics of fiber-optic cabling? (Choose two.)',
   'Fiber-optic cabling does not conduct electricity.','Fiber-optic cabling is primarily used as backbone cabling.');
add('What is contained in the trailer of a data-link frame?',
   'error detection');
add('What is the auto-MDIX feature on a switch?',
   'crossover Ethernet cable connection');
add('Refer to the exhibit. A ping to PC3 is issued from PC0, PC1, and PC2 in this exact order. Which MAC addresses will be contained in the S1 MAC address table that is associated with the Fa0/1 port?',
   'just PC0 and PC1 MAC addresses');
add('How does a Layer 3 switch differ from a Layer 2 switch?',
   'An IP address can be assigned to a physical port of a Layer 3 switch. However, this is not supported in Layer 2 switches.');
add('What is the purpose of the routing process?',
   'to select the paths that are used to direct traffic to destination networks');
add('Which technology provides a solution to IPv4 address depletion by allowing multiple devices to share one public IP address?',
   'NAT');
add('Refer to the exhibit. Consider the IP address configuration shown from PC1. What is a description of the default gateway address?',
   'It is the IP address of the Router1 interface that connects the PC1 LAN to Router1.');
add('Which of the following are primary functions of a router? (Choose two.)',
   'packet switching','path selection');
add('Which two statements correctly describe a router memory type and its contents? (Choose two.)',
   'RAM is volatile and stores the running configuration.','ROM is nonvolatile and stores bootup information.');
add('In which default order will a router search for startup configuration information?',
   'NVRAM, TFTP, setup mode');
add('What happens when part of an Internet VoIP transmission is not delivered to the destination?',
   'The transmission continues without the missing portion.');
add('Which three IP addresses are private ? (Choose three.)',
   '10.172.168.1','172.20.4.4','192.168.5.254');
add('How many bits make up the single IPv6 hextet :10CD:?',
   '16');
add('What is the effect of configuring the ipv6 unicast-routing command on a router?',
   'to enable the router as an IPv6 router');
add('Which group of IPv6 addresses cannot be allocated as a host source address?',
   'FF00::/8');
add('What is the purpose of ICMP messages?',
   'to provide feedback of IP packet transmissions');
add('Refer to the exhibit. A technician has configured a user workstation with the IP address and default subnet masks that are shown. Although the user can access all local LAN resources, the user cannot access any Internet sites by using either FQDN or IP addresses. Based upon the exhibit, what could account for this failure?',
   'The default gateway address in incorrect.');
add('Which subnet would include the address 192.168.1.96 as a usable host address?',
   '192.168.1.64/26');
add('A network administrator needs to monitor network traffic to and from servers in a data center. Which features of an IP addressing scheme should be applied to these devices?',
   'predictable static IP addresses for easier identification');
add('Refer to the exhibit. Which IP addressing scheme should be changed?',
   'Site 2');
add('Which two notations are useable nibble boundaries when subnetting in IPv6? (Choose two.)',
   '/64','/68');
add(' A host PC has just booted and is attempting to lease an address through DHCP. Which two messages will the client typically broadcast on the network? (Choose two.)',
   'DHCPDISCOVER','DHCPREQUEST');
add('What is the purpose of the network security accounting function?',
   'to keep track of the actions of a user');
add('When applied to a router, which command would help mitigate brute-force password attacks against the router?',
   'login block-for 60 attempts 5 within 60');
add('A particular website does not appear to be responding on a Windows 7 computer. What command could the technician use to show any cached DNS entries for this web page?',
   'ipconfig /displaydns');
add('Refer to the exhibit. The network administrator enters these commands into the R1 router:R1# copy running-config tftp Address or name of remote host [ ]? When the router prompts for an address or remote host name, what IP address should the administrator enter at the prompt?',
   '192.168.11.252');
add('What two preconfigured settings that affect security are found on most new wireless routers? (Choose two.)',
   'broadcast SSID','default administrator password');
add(' Which type of wireless security generates dynamic encryption keys each time a client associates with an AP?',
   'WPA');
add('Fill in the blank. is a best-effort, connectionless application layer protocol that is used to transfer files.',
   'TFTP');
add('Which two components are necessary for a wireless client to be installed on a WLAN? (Choose two.)',
   'wireless NIC','wireless client software');
add('Consider the following range of addresses: 2001:0DB8:BC15:00A0:0000:: 2001:0DB8:BC15:00A1:0000::2001:0DB8:BC15:00A2:0000::2001:0DB8:BC15:00AF:0000::The prefix-length for the range of addresses is.',
   '/60');
add('A host is accessing an FTP server on a remote network. Which three functions are performed by intermediary network devices during this conversation? (Choose three.)',
   'regenerating data signals','applying security settings to control the flow of data','notifying other devices when errors occur');
add('When is a dial-up connection used to connect to an ISP?',
   'when a regular telephone line is used');
add('On a school network, students are surfing the web, searching the library database, and attending an audio conference with their sister school in Japan. If network traffic is prioritized with QoS, how will the traffic be classified from highest priority to lowest priority?',
   'audio conference, database, HTTP');
add('During normal operation, from which location do most Cisco routers run the IOS?',
   'RAM');
add('Which connection provides a secure CLI session with encryption to a Cisco switch?',
   'an SSH connection');
add('Which keys act as a hot key combination that is used to interrupt an IOS process?',
   'Ctrl-Shift-6');
add('Refer to the exhibit. An administrator wants to change the name of a brand new switch, using the hostname command as shown. What prompt will display after the command is issued??',
   'Switch(config)#?');
add('After making configuration changes on a Cisco switch, a network administrator issues a copy running-config startup-config command. What is the result of issuing this command?',
   'The new configuration will be loaded if the switch is restarted.');
add('On which switch interface would an administrator configure an IP address so that the switch can be managed remotely?',
   'VLAN 1');
add('A technician uses the ping 127.0.0.1 command. What is the technician testing?',
   'the TCP/IP stack on a network host');
add('Which device should be used for enabling a host to communicate with another host on a different network?',
   'router');
add('A network technician is measuring the transfer of bits across the company backbone for a mission critical application. The technician notices that the network throughput appears lower than the bandwidth expected. Which three factors could influence the differences in throughput? (Choose three.)',
   'the amount of traffic that is currently crossing the network','the type of traffic that is crossing the network','the latency that is created by the number of network devices that the data is crossing');
add('Which characteristics describe fiber optic cable? (Choose two.)',
   'It is not affected by EMI or RFI.','It is the most expensive type of LAN cabling');
add('What are two features of a physical, star network topology? (Choose two.)',
   'It is straightforward to troubleshoot.','It is easy to add and remove end devices.');
add('A frame is transmitted from one networking device to another. Why does the receiving device check the FCS field in the frame?',
   'to check the frame for possible transmission errors');
add('What will a Layer 2 switch do when the destination MAC address of a received frame is not in the MAC table?',
   'It forwards the frame out of all ports except for the port at which the frame was received.');
add('Which switching method has the lowest level of latency?',
   'fast-forward');
add('Which parameter does the router use to choose the path to the destination when there are multiple routes available?',
   'the lower metric value that is associated with the destination network');
add('Which two statements describe the functions or characteristics of ROM in a router? (Choose two.)',
   'maintains instructions for POST diagnostics','stores bootstrap program');
add('Which statement describes a characteristic of the Cisco router management ports?',
   'A console port is not used for packet forwarding.');
add('What happens when part of an Internet radio transmission is not delivered to the destination?',
   'The transmission continues without the missing portion.');
add('What is the dotted decimal representation of the IPv4 address 11001011.00000000.01110001.11010011?',
   '203.0.113.211');
add(' Which three IP addresses are private ? (Choose three.)',
   '10.20.30.1','172.30.5.3','192.168.5.5');
add('What types of addresses make up the majority of addresses within the /8 block IPv4 bit space?',
   'public addresses');
add('Refer to the exhibit. What is the maximum TTL value that is used to reach the destination www.cisco.com??',
   '13');
add('A company has a network address of 192.168.1.64 with a subnet mask of 255.255.255.192. The company wants to create two subnetworks that would contain 10 hosts and 18 hosts respectively. Which two networks would achieve that? (Choose two.)',
   '192.168.1.64/27','192.168.1.96/28');
add('In a network that uses IPv4, what prefix would best fit a subnet containing 100 hosts?',
   '/25');
add('Which protocol supports rapid delivery of streaming media?',
   'Real-Time Transport Protocol');
add('Why would a network administrator use the tracert utility?',
   'to identify where a packet was lost or delayed on a network');
add('Refer to the exhibit. What is the significance of the asterisk (*) in the exhibited output?',
   'The asterisk designates which file system is the default file system.');
add('Which WLAN security protocol generates a new dynamic key each time a client establishes a connection with the AP?',
   'WPA');
add('Fill in the blank. Point-to-point communications where both devices can transmit and receive on the medium at the same time are known as .',
   'full-duplex');
add('A host is accessing a Telnet server on a remote network. Which three functions are performed by intermediary network devices during this conversation? (Choose three.)',
   'regenerating data signals','applying security settings to control the flow of data','notifying other devices when errors occur');
add('Refer to the exhibit. Which area would most likely be an extranet for the company network that is shown?',
   'area C');
add('What is the purpose of having a converged network?',
   'to reduce the cost of deploying and maintaining the communication infrastructure');
add('hree office workers are using the corporate network. The first employee uses a web browser to view a company web page in order to read some announcements. The second employee accesses the corporate database to perform some financial transactions. The third employee participates in an important live audio conference with other office workers in branch offices. If QoS is implemented on this network, what will be the priorities from highest to lowest of the different data types?',
   'audio conference, financial transactions, web page');
add('During normal operation, from which location do most Cisco switches and routers run the IOS?',
   'RAM');
add('A network administrator is making changes to the configuration of a router. After making the changes and verifying the results, the administrator issues the copy running-config startup-config command. What will happen after this command executes?',
   'The configuration will load when the router is restarted.');
add('What information does the loopback test provide?',
   'The TCP/IP stack on the device is working correctly.');
add('What is a characteristic of the LLC sublayer?',
   'It places information in the frame allowing multiple Layer 3 protocols to use the same network interface and media.');
add('What method is used to manage contention-based access on a wireless network?',
   'CSMA/CA');
add('What happens when a switch receives a frame and the calculated CRC value is different than the value that is in the FCS field?',
   'The switch drops the frame.');
add('Which destination address is used in an ARP request frame?',
   'FFFF.FFFF.FFFF');
add('What is the auto-MDIX feature on a switch?',
   'the automatic configuration of an interface for a straight-through or a crossover Ethernet cable connection');
add('Which frame forwarding method receives the entire frame and performs a CRC check to detect errors before forwarding the frame?',
   'store-and-forward switching');
add('What are the two main components of Cisco Express Forwarding (CEF)? (Choose two.)',
   'adjacency tables','forwarding information base (FIB)');
add('Which statement describes the sequence of processes executed by a router when it receives a packet from a host to be delivered to a host on another network?',
   'It de-encapsulates the packet, selects the appropriate path, and encapsulates the packet to forward it toward','the destination host.');
add('Which technology provides a solution to IPv4 address depletion by allowing multiple devices to share one public IP address?',
   'NAT');
add('Refer to the exhibit. Router R1 has two interfaces that were configured with correct IP addresses and subnet masks. Why does the show ip route command output not display any information about the directly connected networks??',
   'The no shutdown command was not issued on these interfaces.');
add('What happens when part of an Internet television transmission is not delivered to the destination?',
   'The transmission continues without the missing portion.');
add('Which three statements characterize the transport layer protocols? (Choose three.)',
   'TCP and UDP port numbers are used by application layer protocols.','TCP uses windowing and sequencing to provide reliable transfer of data.','TCP is a connection-oriented protocol. UDP is a connectionless protocol.');
add('A user opens three browsers on the same PC to access www.cisco.com to search for certification course information. The Cisco web server sends a datagram as a reply to the request from one of the web browsers. Which information is used by the TCP/IP protocol stack in the PC to identify the destination web browser?',
   'the destination port number');
add('Which statement is true regarding the UDP client process during a session with a server?',
   'Datagrams that arrive in a different order than that in which they were sent are not placed in order.');
add('Which two components are configured via software in order for a PC to participate in a network environment? (Choose two.)',
   'IP address','subnet mask');
add('What are three characteristics of multicast transmission? (Choose three.)',
   'A single packet can be sent to a group of hosts.','Multicast transmission can be used by routers to exchange routing information.','Routers will not forward multicast addresses in the range of 224.0.0.0 to 224.0.0.255.');
add('Which two reasons generally make DHCP the preferred method of assigning IP addresses to hosts on large networks? (Choose two.)',
   'It eliminates most address configuration errors.','It reduces the burden on network support staff.');
add('What is the subnet address for the address 2001:DB8:BC15:A:12AB::1/64?',
   '2001:DB8:BC15:A::0');
add('Which two tasks are functions of the presentation layer? (Choose two.)',
   'compression','encryption');
add('What is the purpose of the network security authentication function?',
   'to require users to prove who they are');
add('Which type of wireless security makes use of dynamic encryption keys each time a client associates with an AP?',
   'WPA');
add('Fill in the blank. During data communications, a host may need to send a single message to a specific group of destination hosts simultaneously. This message is in the form of a message.',
   'Multicast');
add('Open the PT activity. Perform the tasks in the activity instructions and then fill in the blank.The Server0 message is . ”     ”',
   'winner');
add('A PC is configured to obtain an IP address automatically from network 192.168.1.0/24. The network administrator issues the arp –a command and notices an entry of 192.168.1.255 ff-ff-ff-ff-ff-ff. Which statement describes this entry?',
   'This is a static map entry.');
add('Which field in an IPv4 packet header will typically stay the same during its transmission?',
   'Destination Address');
add('Open the PT Activity. Perform the tasks in the activity instructions and then answer the question.Which IPv6 address is assigned to the Serial0/0/0 interface on RT2?',
   '2001:db8:abc:5::1');

/*Updated DIC .2, 2015*/

add('Three bank employees are using the corporate network. The first employee uses a web browser to view a company web page in order to read some announcements. The second employee accesses the corporate database to perform some financial transactions. The third employee participates in an important live audio conference with other corporate managers in branch offices. If QoS is implemented on this network, what will be the priorities from highest to lowest of the different data types?',
   'audio conference, financial transactions, web page');
add('Refer to the exhibit. A network administrator is configuring access control to switch SW1. If the administrator has already logged into a Telnet session on the switch, which password is needed to access privileged EXEC mode?',
   'secretin');
add('What are the three primary functions provided by Layer 2 data encapsulation? (Choose three.)',
   'data link layer addressing','detection of errors through CRC calculations','delimiting groups of bits into frames');
add('What must be configured to enable Cisco Express Forwarding (CEF) on most Cisco devices that perform Layer 3 switching?',
   'CEF is enabled by default, so no configuration is necessary.');
add('What is the purpose of adjacency tables as used in Cisco Express Forwarding (CEF)?',
   'to maintain Layer 2 next-hop addresses');
add('Which statement describes a characteristic of the network layer in the OSI model?',
   'Its protocols specify the packet structure and processing used to carry the data from one host to another.');
add('A user gets an IP address of 192.168.0.1 from the company network administrator. A friend of the user at a different company gets the same IP address on another PC. How can two PCs use the same IP address and still reach the Internet, send and receive email, and search the web?',
   'ISPs use Network Address Translation to change a user IP address into an address that can be used on the Internet.');
add('At a minimum, which address is required on IPv6-enabled interfaces?',
   'link-local');
add('Why does HTTP use TCP as the transport layer protocol?',
   'because HTTP requires reliable delivery');
add('What is the binary representation of 0xCA?',
   '11001010');
add('What is the valid most compressed format possible of the IPv6 address 2001:0DB8:0000:AB00:0000:0000:0000:1234?',
   '2001:DB8:0:AB00::1234');
add('Refer to the exhibit. What is the maximum TTL value that is used to reach the destination www.cisco.com?​',
   '13');
add('What field content is used by ICMPv6 to determine that a packet has expired?',
   'Hop Limit field');
add('Which statement is true about variable-length subnet masking?',
   'The size of each subnet may be different, depending on requirements.');
add('Which firewall technique blocks incoming packets unless they are responses to internal requests?',
   'stateful packet inspection');
add('A network technician is investigating network connectivity from a PC to a remote host with the address 10.1.1.5. Which command issued on the PC will return to the technician the complete path to the remote host?',
   'tracert 10.1.1.5');
add('Fill in the blank. To prevent faulty network devices from carrying dangerous voltage levels, equipment must be correctly',
   'grounded');
add('A network engineer is measuring the transfer of bits across the company backbone for a mission critical database application. The engineer notices that the network throughput appears lower than the bandwidth expected. Which three factors could influence the differences in throughput? (Choose three.)',
   'the amount of traffic that is currently crossing the network','the type of traffic that is crossing the network','the latency that is created by the number of network devices that the data is crossing');
add('What is a possible hazard that can be caused by network cables in a fire?',
   'The cable insulation could be flammable.');
add('What device is commonly used to verify a UTP cable?',
   'a cable tester');
add('What needs to be checked when testing a UTP network cable?',
   'wire map');
add('Refer to the exhibit. A ping to PC2 is issued from PC0, PC1, and PC3 in this exact order. Which MAC addresses will be contained in the S1 MAC address table that is associated with the Fa0/1 port?',
   'just PC0 and PC1 MAC addresses');
add('Which function is provided by TCP?',
   'detection of missing packets');
add('What does a router use to determine where to send data it receives from the network?',
   'a routing table');
add('Which router interface should be used for direct remote access to the router via a modem?',
   'an AUX port');
add('A technician is configuring a router to allow for all forms of management access. As part of each different type of access, the technician is trying to type the command login. Which configuration mode should be entered to do this task?',
   'any line configuration mode');
add('Which three statements characterize the transport layer protocols? (Choose three.)',
   'TCP and UDP port numbers are used by application layer protocols.','TCP uses windowing and sequencing to provide reliable transfer of data.','TCP is a connection-oriented protocol. UDP is a connectionless protocol.');
add('Refer to the exhibit. A TCP segment from a server has been captured by Wireshark, which is running on a host. What acknowledgement number will the host return for the TCP segment that has been received?',
   '306');
add('Which statement is true about an interface that is configured with the IPv6 address command?',
   'A link-local IPv6 address is automatically configured on the interface.');
add('Refer to the exhibit. The network administrator for a small advertising company has chosen to use the 192.168.5.96/27 network for internal LAN addressing. As shown in the exhibit, a static IP address is assigned to the company web server. However, the web server cannot access the Internet. The administrator verifies that local workstations with IP addresses that are assigned by a DHCP server can access the Internet, and the web server is able to ping local workstations. Which component is incorrectly configured?',
   'default gateway address');
add('Refer to the exhibit. An administrator must send a message to everyone on the router A network. What is the broadcast address for network 172.16.16.0/22?',
   '172.16.19.255');
add('A network administrator is variably subnetting a given block of IPv4 addresses. Which combination of network addresses and prefix lengths will make the most efficient use of addresses when the need is for 2 subnets capable of supporting 10 hosts and 1 subnet that can support 6 hosts?',
   '10.1.1.128/28',' 10.1.1.144/28','10.1.1.160/29');
add('How many additional bits should be borrowed from a /26 subnet mask in order to create subnets for WAN links that need only 2 useable addresses?',
   '4');
add(' A  l    topology influences the type of network framing and media access control that will be used.',
   'logica');
add('Refer to the exhibit. The administrator configured the access to the console and the vty lines of a router. Which conclusion can be drawn from this configuration?​',
   'Because the IOS includes the login command on the vty lines by default, access to the device via Telnet will require authentication.');
add('An administrator issued the service password-encryption command to apply encryption to the passwords configured for enable password, vty, and console lines. What will be the consequences if the administrator later issues the no service password-encryption command?',
   'It will not reverse any encryption.');
add('After making configuration changes, a network administrator issues a copy running-config startup-config command in a Cisco switch. What is the result of issuing this command?',
   'The new configuration will be loaded if the switch is restarted.');
add('What are two features of ARP? (Choose two.)',
   'If a host is ready to send a packet to a local destination device and it has the IP address but not the MAC address of the destination, it generates an ARP broadcast.','If a device receiving an ARP request has the destination IPv4 address, it responds with an ARP reply.');
add('What are two examples of the cut-through switching method? (Choose two.)',
   'fast-forward switching','fragment-free switching');
add(' A network administrator is enabling services on a newly installed server. Which two statements describe how services are used on a server? (Choose two.)',
   'A port is considered to be open when it has an active server application that is assigned to it.','Server security can be improved by closing ports that are associated with unused services.');
add('Why does a Layer 3 device perform the ANDing process on a destination IP address and subnet mask?',
   'to identify the network address of the destination network');
add('Given the binary address of 11101100 00010001 00001100 00001010, which address does this represent in dotted decimal format?',
   '236.17.12.10');
add('A particular telnet site does not appear to be responding on a Windows 7 computer. What command could the technician use to show any cached DNS entries for this web page?',
   'ipconfig /displaydns');
add('Fill in the blank. Network devices come in two physical configurations. Devices that have expansion slots that provide the flexibility to add new modules have a configuration.',
   'Modular');
add('Refer to the exhibit. What is the maximum TIL value that is used to reach the destination www.cisco.com?',
   '13');
add('Which statement is true about DHCP operation?',
   'When a device that is configured to use DHCP boots, the client broadcasts a DHCPDISCOVER message to identify any available DHCP servers on the networK.');
add('Which type of wireless security is easily compromised?',
   'WEP');
add('A network administrator notices that the throughput on the network appears lower than expected when compared to the end-to-end network bandwidth. Which three factors can explain this difference? (Choose three.)',
   'the amount of traffic','the type of traffic','the number and type of network devices that the data is crossing');
add('A host PC is attempting to lease an address through DHCP. What message is sent by the server to the client know it is able to use the provided IP information?',
   'DHCPOFFER');
add('A network administrator is configuring access control to switch SW1. If the administrator uses console line to connect to the switch, which password is needed to access user EXEC mode?',
   'lineconin');
add('What is a characteristic of UTP cabling?',
   'cancellation');
add('How many bits would need to be borrowed if a network admin were given the IP addressing scheme of 172.16.0.0/16 and needed no more than 16 subnet with equal number of hosts?',
   '4');
add('It will give 4 options about ping, the correct one is:',
   'The PC2 will be able to ping 192.168.1.1');
add('Which statement best describes the operation of the File Transfer Protocol?',
   'An FTP server uses a source port number of 20 and a randomly generated destination port number during the establishment of control traffic with an FTP client.');
add('A client is establishing a TCP session with a server. How is the acknowledgment number in the response segment to the client determined?',
   'The acknowledgment number field is modified by adding 1 to the randomly chosen initial sequence number in response to the client.');
add('Why does layer 3 device perform the ANDing process on a destination IP and subnet Mask?',
   'to identify network address of destination host;');
add('There was also a question about if you activated service password encryption in the past and you prompt “no service password encryption” what password are modified ?',
   'no password at all;');
add('What type of communication rule would best describe CSMA/CD?',
   'access method');
add('What is the primary reason to subnet IPv6 prefixes?',
   'to create a hierarchical Layer 3 network design');
add('What type of IPv6 address is FE80::1?',
   'link-local');
add('Which statement describes data throughput?',
   'It is the measure of the bits transferred across the media over a given period of time.');
add('Fill in the blank. Use a number.IPv4 multicast addresses are directly mapped to IEEE 802 (Ethernet) MAC addresses using the last ______ of the 28 available bits in the IPv4 multicast group address.',
   '4');
add('How could a faulty network device create a source of hazard for a user? (Choose two.)',
   'It could stop functioning.','It could explode.');
add('What are three important considerations when planning the structure of an IP addressing scheme? (Choose three.)',
   'preventing duplication of addresses','providing and controlling access','conserving addresses');
add('What is the metric value that is used to reach the 10.1.1.0 network in the following routing table entry? D 10.1.1.0/24 [90/2170112] via 209.165.200.226, 00:00:05, Serial0/0/0',
   '2170112');
add('Which two services or protocols use the preferred UDP protocol for fast transmission and low overhead? (Choose two)',
   'VoIP','DNS');
add('What action does a DHCPv4 client take if it receives more than one DHCPOFFER from multiple DHCP servers?',
   'It sends a DHCPREQUEST that identifies which lease offer the client is accepting.');
add('To what legacy address class does the address 10.0.0.0 belong?',
   'Class A');
add('What type of communication medium is used with a wireless LAN connection?',
   'microwave');
add('Which method of IPv6 prefix assignment relies on the prefix contained in RA messages?',
   'SLAAC');
add('What is a characteristic of DNS?',
   'DNS servers can cache recent queries to reduce DNS query traffic.');
add('What is the prefix for the host address 2001:DB8:BC15:A:12AB::1/64?',
   '2001:DB8:BC15:A');
add('What are two services provided by the OSI network layer? (Choose two.)',
   'encapsulating PDUs from the transport layer','routing packets toward the destination');
add('What information is maintained in the CEF adjacency table?',
   'Layer 2 next hops NOT SURE NO ANSWER');
add('A network administrator is upgrading a small business network to give high priority to real-time applications traffic. What two types of network services is the network administrator trying to accommodate? (Choose two.)',
   'voice','video');

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
