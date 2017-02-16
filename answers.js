/*Answers to multiple choice and fill-in-the-blank questions*/
var add = tests.add;

/*
 * template:
 * add(question, answer0 [, answer1, ...]);
 */

//TEST2
add('1. What is the function of the kernel of an operating software?', 'The kernel provisions hardware resources to meet software requirements.', 'The kernel provisions hardware resources to meet software requirements.');
add('2. A network administrator needs to keep the user ID, password, and session contents private when establishing remote CLI connectivity with a switch to manage it. Which access method should be chosen?', 'SSH', 'SSH');
add('3. Which procedure is used to access a Cisco 2960 switch when performing an initial configuration in a secure environment?', 'Use the console port to locally access the switch from a serial or USB interface of the PC.', 'Use the console port to locally access the switch from a serial or USB interface of the PC.');
add('4. Which command or key combination allows a user to return to the previous level in the command hierarchy?', 'exit', 'exit');
add('5. A router has a valid operating system and a configuration file stored in NVRAM. The configuration file contains an enable secret password but no console password. When the router boots up, which mode will display?', 'user EXEC mode', 'user EXEC mode');
add('6. Which two functions are provided to users by the context-sensitive help feature of the Cisco IOS CLI? Choose two.', 'displaying a list of all available commands within the current mode', 'displaying a list of all available commands within the current mode', 'determining which option, keyword, or argument is available for the entered command', 'determining which option, keyword, or argument is available for the entered command');
add('7. Which information does the show startup-config command display?', 'the contents of the saved configuration file in the NVRAM', 'the contents of the saved configuration file in the NVRAM');
add('8. Why is it important to configure a hostname on a device?', 'to identify the device during remote access SSH or telnet', 'to identify the device during remote access SSH or telnet');
add('9. Which two host names follow the guidelines for naming conventions on Cisco IOS devices? Choose two.', 'RM-3-Switch-2A4', 'RM-3-Switch-2A4', 'SwBranch799', 'SwBranch799');
add('10. How does the service password-encryption command enhance password security on Cisco routers and switches?', 'It encrypts passwords that are stored in router or switch configuration files.', 'It encrypts passwords that are stored in router or switch configuration files.');
add('11. Refer to the exhibit. A network administrator is configuring the MOTD on switch SW1. What is the purpose of this command?', 'to display a message when a user accesses the switch', 'to display a message when a user accesses the switch');
add('12. While trying to solve a network issue, a technician made multiple changes to the current router configuration file. The changes did not solve the problem and were not saved. What action can the technician take to discard the changes and work with the file in NVRAM?', 'Issue the reload command without saving the running configuration.', 'Issue the reload command without saving the running configuration.');
add('13. Which statement is true about the running configuration file in a Cisco IOS device?', 'It affects the operation of the device immediately when modified.', 'It affects the operation of the device immediately when modified.');
add('14. What are two characteristics of RAM on a Cisco device? Choose two.', 'The configuration that is actively running on the device is stored in RAM.', 'The configuration that is actively running on the device is stored in RAM.', 'The contents of RAM are lost during a power cycle.', 'The contents of RAM are lost during a power cycle.');
add('15. Which interface allows remote management of a Layer 2 switch?', 'the switch virtual interface', 'the switch virtual interface');
add('16. Which interface is the default SVI on a Cisco switch?', 'VLAN 1', 'VLAN 1');
add('17. Why would a Layer 2 switch need an IP address?', 'to enable the switch to be managed remotely', 'to enable the switch to be managed remotely');
add('18. What command can be used on a Windows PC to see the IP configuration of that computer?', 'ipconfig', 'ipconfig');
add('19. A technician is adding a new PC to a LAN. After unpacking the components and making all the connections, the technician starts the PC. After the OS loads, the technician opens a browser, and verifies that the PC can reach the Internet. Why was the PC able to connect to the network with no additional configuration?', 'The PC was preconfigured to use DHCP.', 'The PC was preconfigured to use DHCP.');
add('20. What is a user trying to determine when issuing a ping 10.1.1.1 command on a PC?', 'if there is connectivity with the destination device', 'if there is connectivity with the destination device');
add('21. Refer to the exhibit. A network technician is testing connectivity in a new network. Based on the test results shown in the exhibit, which device does the technician have connectivity with and which device does the technician not have connectivity with? Choose two.', 'connectivity: switch 2', 'connectivity: switch 2', 'no connectivity: PC-C', 'no connectivity: PC-C');
add('22. Refer to the exhibit. What three facts can be determined from the viewable output of the show ip interface brief command? Choose three.', 'The switch can be remotely managed.', 'The switch can be remotely managed.', 'One device is attached to a physical interface.', 'One device is attached to a physical interface.', 'The default SVI has been configured.', 'The default SVI has been configured.');

//TEST 3

add('1. What method can be used by two computers to ensure that packets are not dropped because too much data is being sent too quickly?', 'flow control');
add('2. What type of communication will send a message to all devices on a local area network?', 'broadcast');
add('3. What process is used to place one message inside another message for transfer from the source to the destination?', 'encapsulation');
add('4. A web client is sending a request for a webpage to a web server. From the perspective of the client, what is the correct order of the protocol stack that is used to prepare the request for transmission?', 'HTTP, TCP, IP, Ethernet');
add('5. Which statement is correct about network protocols?', 'They define how messages are exchanged between the source and the destination.');
add('6. Which statement is true about the TCP/IP and OSI models?', 'The TCP/IP transport layer and OSI Layer 4 provide similar services and functions.');
add('7. What is an advantage of using standards to develop and implement protocols?', 'Products from different manufacturers can interoperate successfully.');
add('8. What three application layer protocols are part of the TCP/IP protocol suite? Choose three.', 'DHCP', 'DNS', 'FTP');
add('9. What are proprietary protocols?', 'protocols developed by organizations who have control over their definition and operation');
add('10. What is an advantage of network devices using open standard protocols?', 'A client host and a server running different operating systems can successfully exchange data.');
add('11. Refer to the exhibit. If Host1 were to transfer a file to the server, what layers of the TCP/IP model would be used?', 'application, transport, Internet, and network access layers');
add('12. Which three layers of the OSI model are comparable in function to the application layer of the TCP/IP model? Choose three.', 'application', 'presentation', 'session');
add('13. At which layer of the OSI model would a logical address be encapsulated?', 'network layer');
add('14. Which PDU format is used when bits are received from the network medium by the NIC of a host?', 'frame');
add('15. Which PDU is processed when a host computer is de-encapsulating a message at the transport layer of the TCP/IP model?', 'segment');
add('16. Refer to the exhibit. HostA is attempting to contact ServerB. Which two statements correctly describe the addressing that HostA will generate in the process? Choose two.', 'A frame with the destination MAC address of RouterA.', 'A packet with the destination IP address of ServerB.');
add('17. Which address does a NIC use when deciding whether to accept a frame?', 'destination MAC address');
add('18. What will happen if the default gateway address is incorrectly configured on a host?', 'The host cannot communicate with hosts in other networks.');
add('19. Which characteristic describes the default gateway of a host computer?', 'the logical address of the router interface on the same network as the host computer');

//TEST 3

add('1. What are two reasons for physical layer protocols to use frame encoding techniques? Choose two.', 'to distinguish data bits from control bits', 'to identify where the frame starts and ends');
add('2. What is indicated by the term throughput?', 'the measure of the bits transferred across the media over a given period of time');
add('3. A network administrator notices that some newly installed Ethernet cabling is carrying corrupt and distorted data signals. The new cabling was installed in the ceiling close to fluorescent lights and electrical equipment. Which two factors may interfere with the copper cabling and result in signal distortion and data corruption? Choose two.', 'EMI', 'RFI');
add('4. Which characteristic describes crosstalk?', 'the distortion of the transmitted messages from signals carried in adjacent wires');
add('5. What technique is used with UTP cable to help protect against signal interference from crosstalk?', 'twisting the wires together into pairs');
add('6. Refer to the exhibit. The PC is connected to the console port of the switch. All the other connections are made through FastEthernet links. Which types of UTP cables can be used to connect the devices?', '1 – rollover, 2 – straight-through, 3 – crossover');
add('7. Refer to the exhibit. What is wrong with the displayed termination?', 'The untwisted length of each wire is too long.');
add('8. Which type of connector does a network interface card use?', 'RJ-45');
add('9. What is one advantage of using fiber optic cabling rather than copper cabling?', 'It is able to carry signals much farther than copper cabling.');
add('10. Why are two strands of fiber used for a single fiber optic connection?', 'They allow for full-duplex connectivity.');
add('11. A network administrator is designing the layout of a new wireless network. Which three areas of concern should be accounted for when building a wireless network? Choose three.', 'security', 'interference', 'coverage area');
add('12. Which layer of the OSI model is responsible for specifying the encapsulation method used for specific types of media?', 'data link');
add('13. What are two services performed by the data link layer of the OSI model? Choose two.', 'It accepts Layer 3 packets and encapsulates them into frames.', 'It provides media access control and performs error detection.');
add('14. What is true concerning physical and logical topologies?', 'Logical topologies refer to how a network transfers data between devices.');
add('15. Which method of data transfer allows information to be sent and received at the same time?', 'full duplex');
add('16. Which statement describes an extended star topology?', 'End devices connect to a central intermediate device, which in turn connects to other central intermediate devices.');
add('17. Refer to the exhibit. Which statement describes the media access control methods that are used by the networks in the exhibit?', 'Network 1 uses CSMA/CD and Network 3 uses CSMA/CA.');
add('18. What is contained in the trailer of a data-link frame?', 'error detection');
add('19. As data travels on the media in a stream of 1s and 0s how does a receiving node identify the beginning and end of a frame?', 'The transmitting node inserts start and stop bits into the frame.');
add('20. What is the function of the CRC value that is found in the FCS field of a frame?', 'to verify the integrity of the received frame');
add('The term bandwidth indicates the capacity of a medium to carry data and it is typically measured in kilobits per second (kb/s) or megabits per second (Mb/s).', 'bandwidth');
add('What acronym is used to reference the data link sublayer that identifies the network layer protocol encapsulated in the frame? LLC', 'LLC');
add('A physical topology that is a variation or combination of a point-to-point, hub and spoke, or mesh topology is commonly known as a hybrid topology.', 'hybrid');

/*Prompts for matching questions and Packet Tracer Labs*/
add = prompts.add;

/*
 * template:
 * add('helper label');
 */

add('Надеюсь, что делал это не просто так. И хоть кто-нибудь проставит мне хотя бы шоколадку');

add('first > user EXEC mode');
add('second > privileged EXEC mode');
add('third > global configuration');
add('final > line configuration');

add('сompletes > Tab');
add('displays the next screen > space bar');
add('scrolls backwards > Up Arrow');
add('provides help > ?');
add('aborts commends > Ctrl-Shift-6');

add('message encoding  ->  the process of converting information from one format into another acceptable for transmission');
add('message encapsulation  -> the process of placing one message format inside another message format');
add('message sizing  ->  the process of breaking up a long message into individual pieces before being sent over the network');

add('governing the way a web server and a web client interact -> application protocol');
add('talking the segments from the transport protocol, encapsulating them into packets, and assigning them with appropriate addresses -> internet protocol');
add('preparing packets to be transmitted over the network media -> network access protocol');
add('managing the individual conversation between web servers and web clients -> transport protocol');

add('ISOC -> The organization promotes the open development, evolution, and use of the internet throughout the world');
add('ISO -> This organization is the largest developer of international standars in the world for a wide variety of products and services. It is know for its Open System Interconection (OSI) reference model.');
add('IANA -> This organization is responsible for overseeing and managing IP address allocation, domain name management, and protocol identifiers');

add('Multimode Fiber');
add('LED as light source');
add('several paths of light into the fiber');
add('generally used with LANs');
add('Single-mode Fiber');
add('only one ray of light into the fiber');
add('generally used for campus backbone');
add('laser as light source');