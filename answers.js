/*Answers to multiple choice and fill-in-the-blank questions*/
var add = tests.add;

/*
 * template:
 * add(question, answer0 [, answer1, ...]);
 */

//TEST8
add('1. What is a result of connecting two or more switches together?', 'The size of the broadcast domain is increased.');
add('2. Refer to the exhibit. How many broadcast domains are there?', '4');
add('3. What are two reasons a network administrator might want to create subnets? Choose two.', 'improves network performance', 'easier to implement security policies');
add('4. Refer to the exhibit. A company uses the address block of 128.107.0.0/16 for its network. What subnet mask would provide the maximum number of equal size subnets while providing enough host addresses for each subnet in the exhibit?', '255.255.255.128');
add('5. Refer to the exhibit. The network administrator has assigned the LAN of LBMISS an address range of 192.168.10.0. This address range has been subnetted using a /29 prefix. In order to accommodate a new building, the technician has decided to use the fifth subnet for configuring the new network (subnet zero is the first subnet). By company policies, the router interface is always assigned the first usable host address and the workgroup server is given the last usable host address. Which configuration should be entered into the properties of the workgroup server to allow connectivity to the Internet?', 'IP address: 192.168.10.38 subnet mask: 255.255.255.248, default gateway: 192.168.10.33');
add('6. If a network device has a mask of /28, how many IP addresses are available for hosts on this network?', '14');
add('7. Which subnet mask would be used if 5 host bits are available?', '255.255.255.224');
add('8. How many host addresses are available on the network 172.16.128.0 with a subnet mask of 255.255.252.0?', '1022');
add('9. How many bits must be borrowed from the host portion of an address to accommodate a router with five connected networks?', 'three');
add('10. A network administrator wants to have the same network mask for all networks at a particular small site. The site has the following networks and number of devices: IP phones – 22 addresses PCs – 20 addresses needed Printers – 2 addresses needed Scanners – 2 addresses needed The network administrator has deemed that 192.168.10.0/24 is to be the network used at this site. Which single subnet mask would make the most efficient use of the available addresses to use for the four subnetworks?', '255.255.255.224');
add('11. A company has a network address of 192.168.1.64 with a subnet mask of 255.255.255.192. The company wants to create two subnetworks that would contain 10 hosts and 18 hosts respectively. Which two networks would achieve that? Choose two.', '192.168.1.64/27', '192.168.1.96/28');
add('12. A network administrator is variably subnetting a network. The smallest subnet has a mask of 255.255.255.248. How many usable host addresses will this subnet provide?', '6');
add('13. Refer to the exhibit. Given the network address of 192.168.5.0 and a subnet mask of 255.255.255.224, how many total host addresses are unused in the assigned subnets?', '72');
add('14. Refer to the exhibit. Considering the addresses already used and having to remain within the 10.16.10.0/24 network range, which subnet address could be assigned to the network containing 25 hosts?', '10.16.10.64/27');
add('15. A network administrator needs to monitor network traffic to and from servers in a data center. Which features of an IP addressing scheme should be applied to these devices?', 'predictable static IP addresses for easier identification');
add('16. Which two reasons generally make DHCP the preferred method of assigning IP addresses to hosts on large networks? Choose two.', 'It eliminates most address configuration errors.', 'It reduces the burden on network support staff.');
add('17. A DHCP server is used to assign IP addresses dynamically to the hosts on a network. The address pool is configured with 192.168.10.0/24. There are 3 printers on this network that need to use reserved static IP addresses from the pool. How many IP addresses in the pool are left to be assigned to other hosts?', '251');
add('18. Refer to the exhibit. A company is deploying an IPv6 addressing scheme for its network. The company design document indicates that the subnet portion of the IPv6 addresses is used for the new hierarchical network design, with the site subsection to represent multiple geographical sites of the company, the sub-site section to represent multiple campuses at each site, and the subnet section to indicate each network segment separated by routers. With such a scheme, what is the maximum number of subnets achieved per sub-site?', '16');
add('19. What is the prefix for the host address 2001:DB8:BC15:A:12AB::1/64?', '2001:DB8:BC15:A');
add('20. Consider the following range of addresses: 2001:0DB8:BC15:00A0:0000:: 2001:0DB8:BC15:00A1:0000:: 2001:0DB8:BC15:00A2:0000:: … 2001:0DB8:BC15:00AF:0000:: The prefix-length for the range of addresses is /60', '/60');

//TEST9
add('1. Which two characteristics are associated with UDP sessions? Choose two.', 'Destination devices receive traffic with minimal delay.', 'Received data is unacknowledged.');
add('2. What happens if part of an FTP message is not delivered to the destination?', 'The part of the FTP message that was lost is re-sent.');
add('3. A host device needs to send a large video file across the network while providing data communication to other users. Which feature will allow different communication streams to occur at the same time, without having a single data stream using all available bandwidth?', 'multiplexing');
add('4. What kind of port must be requested from IANA in order to be used with a specific application?', 'registered port');
add('5. What type of information is included in the transport header?', 'destination and source port numbers');
add('6. What is a socket?', 'the combination of a source IP address and port number or a destination IP address and port number');
add('7. What is the complete range of TCP and UDP well-known ports?', '0 to 1023');
add('8. Which flag in the TCP header is used in response to a received FIN in order to terminate connectivity between two network devices?', 'ACK');
add('9. What is a characteristic of a TCP server process?', 'There can be many ports open simultaneously on a server, one for each active server application.');
add('10. Which two flags in the TCP header are used in a TCP three-way handshake to establish connectivity between two network devices? Choose two.', 'ACK', 'SYN');
add('11. A PC is downloading a large file from a server. The TCP window is 1000 bytes. The server is sending the file using 100-byte segments. How many segments will the server send before it requires an acknowledgment from the PC?', '10 segments');
add('12. Which factor determines TCP window size?', 'the amount of data the destination can process at one time');
add('13. During a TCP session, a destination device sends an acknowledgment number to the source device. What does the acknowledgment number represent?', 'the next byte that the destination expects to receive');
add('14. What information is used by TCP to reassemble and reorder received segments?', 'sequence numbers');
add('15. What does TCP do if the sending source detects network congestion on the path to the destination?', 'The source will decrease the amount of data that it sends before it must receive acknowledgements from the destination.');
add('16. What is a characteristic of UDP?', 'UDP reassembles the received datagrams in the order they were received.');
add('17. What does a client do when it has UDP datagrams to send?', 'It just sends the datagrams.');
add('18. What happens if the first packet of a TFTP transfer is lost?', 'The TFTP application will retry the request if a reply is not received.');
add('19. A host device is receiving live streaming video. How does the device account for video data that is lost during transmission?', 'The device will continue receiving the streaming video, but there may be a momentary disruption');
add('20. Why does HTTP use TCP as the transport layer protocol?', 'because HTTP requires reliable delivery');
add('21. When is UDP preferred to TCP?', 'when an application can tolerate some loss of data during transmission');
add('22. Which three application layer protocols use TCP? Choose three.', 'SMTP', 'FTP', 'HTTP');


/*Prompts for matching questions and Packet Tracer Labs*/
add = prompts.add;

/*
 * template:
 * add('helper label');
 */

add('Надеюсь, что делал это не просто так. И хоть кто-нибудь проставит мне хотя бы шоколадку');
add('Прости, Олег, но, похоже, нет...');

add('192.168.1.68 > 192.168.1.64/27');
add('192.168.1.48 > 192.168.1.32/27');
add('192.168.1.121 > 192.168.1.96/27');

add('192.168.0.192/27   > Network C');
add('192.168.0.0/25     > Network A');
add('192.168.0.224/30   > Network D');
add('192.168.0.128/26   > Network B');

add('destination IP address > 192.168.2.2');
add('destinatiop port number > 80');
add('source IP address > 192.168.1.2');
add('source port number > 2578');
