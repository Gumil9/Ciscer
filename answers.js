/*Answers to multiple choice and fill-in-the-blank questions*/
var add = tests.add;

/*
 template:
 add(question, answer0 [, answer1, ...]);
 */

/*TEST 8*/
add('The decimal equivalent of the binary number 10010101 is',
    '149');
add('What is indicated by a successful ping to the ::1 IPv6 address?',
    'IP is properly installed on the host.');
add('Which message is displayed on the web server?',
    'Correct configuration!');
add('Which two ICMP messages are used by both IPv4 and IPv6 protocols? (Choose two.)​',
    'protocol unreachable', 'route redirection');
add('A message is sent to all hosts on a remote network. Which type of message is it?',
    'directed broadcast');
add('Which two things can be determined by using the ping command? (Choose two.)',
    'the average time it takes a packet to reach the destination and for the response to return to the source',
    'whether or not the destination device is reachable through the network');
add('A DHCP server is used to assign IP addresses dynamically to the hosts on a network. The address pool is configured with 192.168.10.0/24. There are 3 printers on this network that need to use reserved static IP addresses from the pool. How many IP addresses in the pool are left to be assigned to other hosts?',
    '251');
add('Which two parts are components of an IPv4 address? (Choose two.)',
    'network portion', 'host portion');
add('Which IPv6 address is most compressed for the full FE80:0:0:0:2AA:FF:FE9A:4CA3 address?​',
    'FE80::2AA:FF:FE9A:4CA3');
add('What are three parts of an IPv6 global unicast address? (Choose three.)',
    'an interface ID that is used to identify the local host on the network', 'a subnet ID that is used to identify networks inside of the local enterprise site', 'a global routing prefix that is used to identify the network portion of the address that has been provided by an ISP');
add('Which network migration technique encapsulates IPv6 packets inside IPv4 packets to carry them over IPv4 network infrastructures?',
    'tunneling');
add('When an IPv6 enabled host needs to discover the MAC address of an intended IPv6 destination, which destination address is used by the source host in the NS message?',
    'solicited-node multicast address');
add('When a Cisco router is being moved from an IPv4 network to a complete IPv6 environment, which series of commands would correctly enable IPv6 forwarding and interface addressing?',
    'Router# configure terminal', 'Router(config)# interface fastethernet 0/0', 'Router(config-if)# ipv6 address 2001:db8:bced:1::9/64', 'Router(config-if)# no shutdown', 'Router(config-if)# exit', 'Router(config)# ipv6 unicast-routing **');
add('What two statements describe characteristics of Layer 3 broadcasts? (Choose two.)',
    'Routers create broadcast domains.', 'A limited broadcast packet has a destination IP address of 255.255.255.255.');
add('Which two statements are correct about IPv4 and IPv6 addresses? (Choose two.)',
    'IPv6 addresses are represented by hexadecimal numbers.', 'IPv4 addresses are 32 bits in length.');
add('What is the prefix length notation for the subnet mask 255.255.255.224?',
    '/27');
add('What is the decimal equivalent of the hex number 0x3F?',
    '63');
add('What are two types of IPv6 unicast addresses? (Choose two.)',
    'link-local', 'loopback');
add('When will a router drop a traceroute packet?',
    'when the value in the TTL field reaches zero');
add('An IPv6 enabled device sends a data packet with the destination address of FF02::1. What is the target of this packet?',
    'all IPv6 enabled nodes on the local link');
add('How many bits are in an IPv4 address?',
    '32');
add('What is a result of connecting two or more switches together?',
    'The size of the broadcast domain is increased.');
add('How many broadcast domains are there?',
    '4');
add('What are two reasons a network administrator might want to create subnets? (Choose two.)',
    'improves network performance', 'easier to implement security policies');
add('A company uses the address block of 128.107.0.0/16 for its network. What subnet mask would provide the maximum number of equal size subnets while providing enough host addresses for each subnet in the exhibit?',
    '255.255.255.128');
add('The network administrator has assigned the LAN of LBMISS an address range of 192.168.10.0. This address range has been subnetted using a /29 prefix. In order to accommodate a new building, the technician has decided to use the fifth subnet for configuring the new network (subnet zero is the first subnet). By company policies, the router interface is always assigned the first usable host address and the workgroup server is given the last usable host address. Which configuration should be entered into the properties of the workgroup server to allow connectivity to the Internet?',
    'IP address: 192.168.10.38 subnet mask: 255.255.255.248, default gateway: 192.168.10.33');
add('If a network device has a mask of /28, how many IP addresses are available for hosts on this network?',
    '14');
add('Which subnet mask would be used if 5 host bits are available?',
    '255.255.255.224');
add('How many host addresses are available on the network 172.16.128.0 with a subnet mask of 255.255.252.0?',
    '1022');
add('How many bits must be borrowed from the host portion of an address to accommodate a router with five connected networks?',
    'three');
add('The network administrator has deemed that 192.168.10.0/24 is to be the network used at this site. Which single subnet mask would make the most efficient use of the available addresses to use for the four subnetworks?',
    '255.255.255.224');
add('A company has a network address of 192.168.1.64 with a subnet mask of 255.255.255.192. The company wants to create two subnetworks that would contain 10 hosts and 18 hosts respectively. Which two networks would achieve that? (Choose two.)',
    '192.168.1.64/27', '192.168.1.96/28');
add('A network administrator is variably subnetting a network. The smallest subnet has a mask of 255.255.255.248. How many usable host addresses will this subnet provide?​',
    '6');
add('Given the network address of 192.168.5.0 and a subnet mask of 255.255.255.224, how many total host addresses are unused in the assigned subnets?',
    '72');
add('Considering the addresses already used and having to remain within the 10.16.10.0/24 network range, which subnet address could be assigned to the network containing 25 hosts?',
    '10.16.10.64/27');
add('A network administrator needs to monitor network traffic to and from servers in a data center. Which features of an IP addressing scheme should be applied to these devices?',
    'predictable static IP addresses for easier identification');
add('Which two reasons generally make DHCP the preferred method of assigning IP addresses to hosts on large networks? (Choose two.)',
    'It eliminates most address configuration errors.', 'It reduces the burden on network support staff.');
add('A company is deploying an IPv6 addressing scheme for its network. The company design document indicates that the subnet portion of the IPv6 addresses is used for the new hierarchical network design, with the site subsection to represent multiple geographical sites of the company, the sub-site section to represent multiple campuses at each site, and the subnet section to indicate each network segment separated by routers. With such a scheme, what is the maximum number of subnets achieved per sub-site?',
    '16');
add('What is the prefix for the host address 2001:DB8:BC15:A:12AB::1/64?',
    '2001:DB8:BC15:A');
add('The prefix-length for the range of addresses is',
    '/60');

/*TEST 9*/
add('How many usable host addresses are there in the subnet 192.168.1.32/27?',
    '30');
add('How many host addresses are available on the network 172.16.128.0 with a subnet mask of 255.255.252.0?',
    '1022');
add('A network administrator is variably subnetting a network. The smallest subnet has a mask of 255.255.255.248. How many host addresses will this subnet provide?',
    '6');
add('A company uses the address block of 128.107.0.0/16 for its network. What subnet mask would provide the maximum number of equal size subnets while providing enough host addresses for each subnet in the exhibit?',
    '255.255.255.128');
add('The network administrator has assigned the LAN of LBMISS an address range of 192.168.10.0. This address range has been subnetted using a /29 prefix. In order to accommodate a new building, the technician has decided to use the fifth subnet for configuring the new network (subnet zero is the first subnet). By company policies, the router interface is always assigned the first usable host address and the workgroup server is given the last usable host address. Which configuration should be entered into the properties of the workgroup server to allow connectivity to the Internet?',
    'IP address: 192.168.10.38 subnet mask: 255.255.255.248, default gateway: 192.168.10.33');
add('How many bits must be borrowed from the host portion of an address to accommodate a router with five connected networks?',
    'three');
add('A company has a network address of 192.168.1.64 with a subnet mask of 255.255.255.192. The company wants to create two subnetworks that would contain 10 hosts and 18 hosts respectively. Which two networks would achieve that? (Choose two.)',
    '192.168.1.64/27', '192.168.1.96/28');
add('In a network that uses IPv4, what prefix would best fit a subnet containing 100 hosts?',
    '/25');
add('Given the network address of 192.168.5.0 and a subnet mask of 255.255.255.224, how many addresses are wasted in total by subnetting each network with a subnet mask of 255.255.255.224?',
    '72');
add('When developing an IP addressing scheme for an enterprise network, which devices are recommended to be grouped into their own subnet or logical addressing group?',
    'hosts accessible from the Internet');
add('A network administrator needs to monitor network traffic to and from servers in a data center. Which features of an IP addressing scheme should be applied to these devices?',
    'predictable static IP addresses for easier identification');
add('Which two reasons generally make DHCP the preferred method of assigning IP addresses to hosts on large networks? (Choose two.)',
    'It eliminates most address configuration errors.', 'It reduces the burden on network support staff.');
add('A computer that is configured with the IPv6 address as shown in the exhibit is unable to access the internet. What is the problem?',
    'The gateway address is in the wrong subnet.');
add('When subnetting a /64 IPv6 network prefix, which is the preferred new prefix?',
    '/72');
add('What is the subnet address for the address 2001:DB8:BC15:A:12AB::1/64?',
    '2001:DB8:BC15:A::0');
add('Which two notations are useable nibble boundaries when subnetting in IPv6? (Choose two.)',
    '/64', '/68');
add('In dotted decimal notation, the IP address      “172.25.0.126”     is the last host address for the network 172.25.0.64/26.',
    '172.25.0.126');
add('In dotted decimal notation, the subnet mask      “255.255.254.0”     will accommodate 500 hosts per subnet.',
    '255.255.254.0');
add('The prefix for the range of addresses is “60” . All the addresses have the part 2001:0DB8:BC15:00A in common. Each number or letter in the address represents 4 bits, so the prefix is /60.',
    '60');
add('A nibble consists of    “4”    bits. A nibble is half of a byte or 4 bits. This is significant because subnetting in IPv6 is usually done on a nibble boundary.',
    '4');
add('What issue is causing Host A to be unable to communicate with Host B?',
    'Host A and host B are on overlapping subnets.');
add('Given the network address of 192.168.5.0 and a subnet mask of 255.255.255.224, how many total host addresses are unused in the assigned subnets?',
    '72');
add('Which two characteristics are associated with UDP sessions? (Choose two.)',
    'Destination devices receive traffic with minimal delay.', 'Received data is unacknowledged.');
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
    'ACK', 'SYN');
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
    'SMTP', 'FTP', 'HTTP');


/*Prompts for matching questions and Packet Tracer Labs*/
add = prompts.add;

/*
 template:
 add('helper label');
 */

/*TEST 8*/
add('Host address [A] 192.168.100.161/25 [A]');
add('Host address [B] 203.0.113.100/24 [B]');
add('Host address [C] 10.0.50.10/30 [C]');
add('Network address [D] 192.168.1.80/29 [D]');
add('Network address [E] 172.110.12.64/28 [E]');
add('Network address [F] 10.10.10.128/25 [F]');
add('Broadcast address [G] 10.0.0.159/27 [G]');
add('Broadcast address [H] 192.168.1.191/26 [H]');

add('169.254.1.5 -> a link-local address');
add('192.0.2.153 -> a TEST-NET address');
add('240.2.6.255 -> an experimental address');
add('172.19.20.5 -> a private address');
add('127.0.0.1 -> a loopback address');

add('192.31.18.123 -> a legacy class C address');
add('198.256.2.6 -> an invalid IPv4 address');
add('64.100.3.5 -> a legacy class A address');
add('224.2.6.255 -> a legacy class D address');
add('128.107.5.1 -> a legacy class B address');

add('192.168.1.68 -> 192.168.1.64/27');
add('192.168.1.48 -> 192.168.1.32/27');
add('192.168.1.121 -> 192.168.1.96/27');

add('192.168.0.192 /27   -> Network C');
add('192.168.0.0 /25       -> Network A');
add('192.168.0.224 /30  -> Network D');
add('192.168.0.128 /26   -> Network B');

/*TEST 9*/
add('{no picture9}');
add('– not scored –');
add('192.168.1.64/27');
add('– not scored –');
add('192.168.1.32/27');
add('192.168.1.96/27');

add('{with picture9}');
add('– not scored –');
add('Network C');
add('– not scored –');
add('Network A');
add('Network D');
add('Network B');

add('destination IP address -> 192.168.2.2');
add('destination port number -> 80');
add('source IP address -> 192.168.1.2 ');
add('source port number -> 2578');





