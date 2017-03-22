/*Answers to multiple choice and fill-in-the-blank questions*/
var add = tests.add;

/*
 * template:
 * add(question, answer0 [, answer1, ...]);
 */

//FINAL TEST
add('1. Which term refers to a network that provides secure access to the corporate offices by suppliers, customers and collaborators?', 'extranet');
add('2. A small business user is looking for an ISP connection that provides high speed digital transmission over regular phone lines. What ISP connection type should be used?', 'DSL');
add('3. Refer to the exhibit. An administrator is trying to configure the switch but receives the error message that is displayed in the exhibit. What is the problem?', 'The administrator must first enter privileged EXEC mode before issuing the command.');
add('4. Which keys act as a hot key combination that is used to interrupt an IOS process?', 'Ctrl-Shift-6');
add('5. Refer to the exhibit. A network administrator is configuring access control to switch SW1. If the administrator uses Telnet to connect to the switch, which password is needed to access user EXEC mode?', 'linevtyin');
add('6. A network administrator enters the service password-encryption command into the configuration mode of a router. What does this command accomplish?', 'This command prevents someone from viewing the running configuration passwords.');
add('7. What is the purpose of the SVI on a Cisco switch?', 'The SVI provides a virtual interface for remote access to the switch.');
add('8. Which message delivery option is used when all devices need to receive the same message simultaneously?', 'broadcast');
add('9. Which two protocols function at the internet layer? Choose two.', 'ICMP', 'IP');
add('10. What PDU is associated with the transport layer?', 'segment');
add('11. What is done to an IP packet before it is transmitted over the physical medium?', 'It is encapsulated in a Layer 2 frame.');
add('12. What type of communication medium is used with a wireless LAN connection?', 'radio waves');
add('13. In addition to the cable length, what two factors could interfere with the communication carried over UTP cables? Choose two.', 'crosstalk', 'electromagnetic interference');
add('14. What are the two sublayers of the OSI model data link layer? Choose two.', 'LLC', 'MAC');
add('15. A technician has been asked to develop a physical topology for a network that provides a high level of redundancy. Which physical topology requires that every node is attached to every other node on the network?', 'mesh');
add('16. What type of communication rule would best describe CSMA/CD?', 'access method');
add('17. If data is being sent over a wireless network, then connects to an Ethernet network, and eventually connects to a DSL connection, which header will be replaced each time the data travels through a network infrastructure device?', 'data link');
add('18. What best describes the destination IPv4 address that is used by multicasting?', 'a single IP multicast address that is used by all destinations in a group');
add('19. In an Ethernet network, when a device receives a frame of 1200 bytes, what will it do?', 'process the frame as it is');
add('20. What important information is examined in the Ethernet frame header by a Layer 2 device in order to forward the data onward?', 'destination MAC address');
add('21. What will a Layer 2 switch do when the destination MAC address of a received frame is not in the MAC table?', 'It forwards the frame out of all ports except for the port at which the frame was received.');
add('22. What are two features of ARP? Choose two.', 'If a host is ready to send a packet to a local destination device and it has the IP address but not the MAC address of the destination, it generates an ARP broadcast.', 'If a device receiving an ARP request has the destination IPv4 address, it responds with an ARP reply.');
add('23. Which two services are required to enable a computer to receive dynamic IP addresses and access the Internet using domain names? Choose two.', 'DNS', 'DHCP');
add('24. What is a basic characteristic of the IP protocol?', 'connectionless');
add('25. Refer to the exhibit. A user issues the command netstat –r on a workstation. Which IPv6 address is one of the link-local addresses of the workstation?', 'fe80::30d0:115:3f57:fe4c/128');
add('26. Which two statements correctly describe a router memory type and its contents? Choose two.', 'RAM is volatile and stores the IP routing table.', 'ROM is nonvolatile and contains basic diagnostic software.');
add('27. What three blocks of addresses are defined by RFC 1918 for private network use? Choose three.', '10.0.0.0/8', '172.16.0.0/12', '192.168.0.0/16');
add('28. What is the valid most compressed format possible of the IPv6 address 2001:0DB8:0000:AB00:0000:0000:0000:1234?', '2001:DB8:0:AB00::1234');
add('29. At a minimum, which address is required on IPv6-enabled interfaces?', 'link-local');
add('30. An IPv6 enabled device sends a data packet with the destination address of FF02::2. What is the target of this packet?', 'all IPv6 configured routers on the local link');
add('31. What is the purpose of ICMP messages?', 'to provide feedback of IP packet transmissions');
add('32. Which statement describes a characteristic of the traceroute utility?', 'It identifies the routers in the path from a source host to a destination host.');
add('33. What is the usable number of host IP addresses on a network that has a /26 mask?', '62');
add('34. Refer to the exhibit. An administrator must send a message to everyone on the router A network. What is the broadcast address for network 172.16.16.0/22?', '172.16.19.255');
add('35. A network administrator is variably subnetting a given block of IPv4 addresses. Which combination of network addresses and prefix lengths will make the most efficient use of addresses when the need is for 2 subnets capable of supporting 10 hosts and 1 subnet that can support 6 hosts?', '10.1.1.128/28, 10.1.1.144/28, 10.1.1.160/29');
add('36. Given IPv6 address prefix 2001:db8::/48, what will be the last subnet that is created if the subnet prefix is changed to /52?', '2001:db8:0:f000::/52');
add('37. A technician with a PC is using multiple applications while connected to the Internet. How is the PC able to keep track of the data flow between multiple application sessions and have each application receive the correct packet flows?', 'The data flow is being tracked based on the source port number utilized by each application.');
add('38. What three services are provided by the transport layer? Choose three.', 'flow control', 'connection establishment', 'error recovery');
add('39. An Internet television transmission is using UDP. What happens when part of the transmission is not delivered to the destination?', 'The transmission continues without the missing portion.');
add('40. Which two OSI model layers are considered to be included in the top layer of the TCP/IP protocol stack? Choose two.', 'presentation', 'session');
add('41. An author is uploading one chapter document from a personal computer to a file server of a book publisher. What role is the personal computer assuming in this network model?', 'client');
add('42. Which two automatic addressing assignments are supported by DHCP? Choose two.', 'subnet mask', 'default gateway address');
add('43. When a network administrator is trying to manage network traffic on a growing network, when should traffic flow patterns be analyzed?', 'during times of peak utilization');
add('44. What is the objective of a network reconnaissance attack?', 'discovery and mapping of systems');
add('45. What will be the result of failed login attempts if the following command is entered into a router? login block-for 150 attempts 4 within 90', 'All login attempts will be blocked for 150 seconds if there are 4 failed attempts within 90 seconds.');
add('46. A user reports a lack of network connectivity. The technician takes control of the user machine and attempts to ping other computers on the network and these pings fail. The technician pings the default gateway and that also fails. What can be determined for sure by the results of these tests?', 'Nothing can be determined for sure at this point.');
add('47. For Cisco IOS, which escape sequence allows terminating a traceroute operation?', 'Ctrl+Shift+6');
add('48. What is an advantage of storing configuration files to a USB flash drive instead of to a TFTP server?', 'The transfer of the files does not rely on network connectivity.');

/*Prompts for matching questions and Packet Tracer Labs*/
add = prompts.add;

/*
 * template:
 * add('helper label');
 */

add('Надеюсь, что делал это не просто так. И хоть кто-нибудь проставит мне хотя бы шоколадку');
add('Прости, Олег, но, похоже, нет...');

add('Protect the network from unauthorized access. -> security');
add('Provide redundant links and devices. -> fault tolerance');
add('Expand the network without degrading the service for existing users. -> scalability');

add('CLI -> users interact with the operating system by typing commands');
add('GUI -> enables the user to interact with the operating system by pointing and clicking');
add('kernel -> the part of the OS that interacts directly with the device hardware');
add('shell -> the part of the operating system that interfaces with applications and the user');

add('Application layer -> HTTP and FTP, end user program functionality');
add('Presentation layer -> compression, common format');
add('Session layer -> dialog maintenance');

add('locale and load the Cisco IOS software -> phase 2');
add('locate and load the startup configuration file -> phase 3');
add('perform the POST and load the bootstrap program -> phase 1');


