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



// CCNA1 Introduction to Networks v6.0 Chapter 7
add('How many bits are in an IPv4 address?',
    '32');
add('Which two parts are components of an IPv4 address? (Choose two.)',
    'network portion',
    'host portion');
add('What does the IP address 172.17.4.250/24 represent?',
    'host address');
add('What is the purpose of the subnet mask in conjunction with an IP address?',
    'to determine the subnet to which the host belongs');
add('What subnet mask is represented by the slash notation /20?',
    '255.255.240.0');
add('A message is sent to all hosts on a remote network. Which type of message is it?',
    'directed broadcast');
add('What are three characteristics of multicast transmission? (Choose three.)',
    'A single packet can be sent to a group of hosts.',
    'Multicast transmission can be used by routers to exchange routing information.',
    'The range of 224.0.0.0 to 224.0.0.255 is reserved to reach multicast groups on a local network.');
add('Which three IP addresses are private ? (Choose three.)',
    '10.1.1.1',
    '172.16.4.4',
    '192.168.5.5');
add('Which two IPv4 to IPv6 transition techniques manage the interconnection of IPv6 domains? (Choose two.)',
    'dual stack',
    'tunneling');
add('Which of these addresses is the shortest abbreviation for the IP address: 3FFE:1044:0000:0000:00AB:0000:0000:0057?',
    '3FFE:1044:0:0:AB::57');
add('What type of address is automatically assigned to an interface when IPv6 is enabled on that interface?',
    'link-local');
add('What are two types of IPv6 unicast addresses? (Choose two.)',
    'loopback',
    'link-local');
add('What are three parts of an IPv6 global unicast address? (Choose three.)',
    'a global routing prefix that is used to identify the network portion of the address that has been provided by an ISP',
    'a subnet ID that is used to identify networks inside of the local enterprise site',
    'an interface ID that is used to identify the local host on the network');
add('An administrator wants to configure hosts to automatically assign IPv6 addresses to themselves by the use of Router Advertisement messages, but also to obtain the DNS server address from a DHCPv6 server. Which address assignment method should be configured?',
    'stateless DHCPv6');
add('Which protocol supports Stateless Address Autoconfiguration (SLAAC) for dynamic assignment of IPv6 addresses to a host?',
    'ICMPv6');
add('Which two things can be determined by using the ping command? (Choose two.)',
    'the average time it takes a packet to reach the destination and for the response to return to the source',
    'the destination device is reachable through the network');
add('What is the purpose of ICMP messages?',
    'to provide feedback of IP packet transmissions');
add('What is indicated by a successful ping to the ::1 IPv6 address?',
    'IP is properly installed on the host.');
add('A user is executing a tracert to a remote device. At what point would a router, which is in the path to the destination device, stop forwarding the packet?',
    'when the value in the TTL field reaches zero');
add('What field content is used by ICMPv6 to determine that a packet has expired?',
    'Hop Limit field');
add('The decimal equivalent of the binary number 10010101 is',
    '149');
add('The binary equivalent of the decimal number 232 is',
    '11101000');
add('What is the decimal equivalent of the hex number 0x3F?',
    '63');
add('How many bits are in an IPv4 address?',
    '169.254.1.5 -> a link-local address',
    '192.0.2.123 -> a TEST-NET address',
    '240.2.6.255 -> an experimental address',
    '172.19.20.5 -> a private address',
    '127.0.0.1 -> a loopback address');


// CCNA1 Introduction to Networks v6.0 Chapter 8
add('What is a result of connecting two or more switches together?',
    'The size of the broadcast domain is increased.');
add('Refer to the exhibit. How many broadcast domains are there?',
    '4');
add('What are two reasons a network administrator might want to create subnets? (Choose two.)',
    'improves network performance',
    'easier to implement security policies');
add('Refer to the exhibit. A company uses the address block of 128.107.0.0/16 for its network. What subnet mask would provide the maximum number of equal size subnets while providing enough host addresses for each subnet in the exhibit?',
    '255.255.255.128');
add('Refer to the exhibit. The network administrator has assigned the LAN of LBMISS an address range of 192.168.10.0. This address range has been subnetted using a /29 prefix. In order to accommodate a new building, the technician has decided to use the fifth subnet for configuring the new network (subnet zero is the first subnet). By company policies, the router interface is always assigned the first usable host address and the workgroup server is given the last usable host address. Which configuration should be entered into the properties of the workgroup server to allow connectivity to the Internet?',
    'IP address: 192.168.10.38 subnet mask: 255.255.255.248, default gateway: 192.168.10.33');
add('If a network device has a mask of /28, how many IP addresses are available for hosts on this network?',
    '14');
add('Which subnet mask would be used if 5 host bits are available?',
    '255.255.255.224');
add('How many host addresses are available on the network 172.16.128.0 with a subnet mask of 255.255.252.0?',
    '1022');
add('How many bits must be borrowed from the host portion of an address to accommodate a router with five connected networks?',
    'three');
add('A network administrator wants to have the same network mask for all networks at a particular small site. The site has the following networks and number of devices: IP phones – 22 addresses PCs – 20 addresses needed Printers – 2 addresses needed Scanners – 2 addresses needed The network administrator has deemed that 192.168.10.0/24 is to be the network used at this site. Which single subnet mask would make the most efficient use of the available addresses to use for the four subnetworks?',
    '255.255.255.224');
add('A company has a network address of 192.168.1.64 with a subnet mask of 255.255.255.192. The company wants to create two subnetworks that would contain 10 hosts and 18 hosts respectively. Which two networks would achieve that? (Choose two.)',
    '192.168.1.64/27',
    '192.168.1.96/28');
add('A network administrator is variably subnetting a network. The smallest subnet has a mask of 255.255.255.248. How many usable host addresses will this subnet provide?',
    '6');
add('Refer to the exhibit. Given the network address of 192.168.5.0 and a subnet mask of 255.255.255.224, how many total host addresses are unused in the assigned subnets?',
    '72');
add('Refer to the exhibit. Considering the addresses already used and having to remain within the 10.16.10.0/24 network range, which subnet address could be assigned to the network containing 25 hosts?',
    '10.16.10.64/27');
add('A network administrator needs to monitor network traffic to and from servers in a data center. Which features of an IP addressing scheme should be applied to these devices?',
    'predictable static IP addresses for easier identification');
add('Which two reasons generally make DHCP the preferred method of assigning IP addresses to hosts on large networks? (Choose two.)',
    'It eliminates most address configuration errors.',
    'It reduces the burden on network support staff.');
add('A DHCP server is used to assign IP addresses dynamically to the hosts on a network. The address pool is configured with 192.168.10.0/24. There are 3 printers on this network that need to use reserved static IP addresses from the pool. How many IP addresses in the pool are left to be assigned to other hosts?',
    '251');
add('Refer to the exhibit. A company is deploying an IPv6 addressing scheme for its network. The company design document indicates that the subnet portion of the IPv6 addresses is used for the new hierarchical network design, with the site subsection to represent multiple geographical sites of the company, the sub-site section to represent multiple campuses at each site, and the subnet section to indicate each network segment separated by routers. With such a scheme, what is the maximum number of subnets achieved per sub-site?',
    '16');
add('What is the prefix for the host address 2001:DB8:BC15:A:12AB::1/64?',
    '2001:DB8:BC15:A');
add('Consider the following range of addresses: 2001:0DB8:BC15:00A0:0000:: 2001:0DB8:BC15:00A1:0000:: 2001:0DB8:BC15:00A2:0000:: … 2001:0DB8:BC15:00AF:0000:: The prefix-length for the range of addresses is',
    '/60');
add('Match the subnetwork to a host address that would be included within the subnetwork. (Not all options are used.)',
    '192.168.1.68 -> 192.168.1.64/27',
    '192.168.1.48 -> 192.168.1.32/27',
    '192.168.1.121 -> 192.168.1.96/27');
add('Refer to the exhibit. Match the network with the correct IP address and prefix that will satisfy the usable host addressing requirements for each network. (Not all options are used.)',
    '192.168.0.192 /27 -> Network C',
    '192.168.0.0 /25   -> Network A',
    '192.168.0.224 /30 -> Network D',
    '192.168.0.128 /26 -> Network B');


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
