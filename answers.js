/*Answers to multiple choice and fill-in-the-blank questions*/
var add = tests.add;

/*
 * template:
 * add(question, answer0 [, answer1, ...]);
 */

// CCNA3 Scaling Networks v6.0 Chapter 2
add('What is a characteristic of VTP?',
    'Switches in VTP transparent mode forward VTP advertisements.');
add('Which two VTP parameters must be identical on all switches in the network in order to participate in the same VTP domain? (Choose two.)',
    'VTP domain name',
    'VTP domain password');
add('Which two events will cause the VTP revision number on a VTP server to change? (Choose two.)',
    'adding VLANs',
    'changing the VTP domain name');
add('Given the following configuration, which two statements are true? (Choose two.)',
    'This switch can create, modify, and delete all VLANs within the Cisco domain.',
    'This switch can send and receive advertisements from only the Cisco domain.');
add('Where is the vlan.dat file stored on a switch?',
    'in flash memory');
add('A switch is participating in a VTP domain and configured as a VTP server. The switch needs to propagate VLAN 10 (used by the Manufacturing department) throughout the VTP domain, but does not have any directly connected hosts using that particular VLAN. Which configuration would satisfy this requirement?',
    'vlan 10\nname Manufacturing\nexit');
add('Which command should the network administrator implement to prevent the transfer of DTP frames between a Cisco switch and a non-Cisco switch?',
    'S1(config-if)# switchport nonegotiate');
add('Under which two occasions should an administrator disable DTP while managing a local area network? (Choose two.)',
    'when connecting a Cisco switch to a non-Cisco switch',
    'on links that should not be trunking');
add('Which command displays the encapsulation type, the voice VLAN ID, and the access mode VLAN for the Fa0/1 interface?',
    'show interfaces Fa0/1 switchport');
add('Communication between the VLANs is not occurring. What could be the issue?',
    'The Gi1/1 switch port is not in trunking mode.');
add('A network administrator is configuring inter-VLAN routing. However, the communication between VLAN 10 and VLAN 20 fails. Based on the output of the show vlan command, what is the cause of the problem?',
    'Gi1/1 and Gi1/2 are not assigned to their respective VLANs.');
add('A network administrator is verifying the configuration of inter-VLAN routing. Users complain that PC2 cannot communicate with PC1. Based on the output, what is the possible cause of the problem?',
    'The encapsulation dot1Q 5 command contains the wrong VLAN.');
add('What happens to switch ports after the VLAN to which they are assigned is deleted?',
    'The ports stop communicating with the attached devices.');
add('After attempting to enter the configuration that is shown in router RTA, an administrator receives an error and users on VLAN 20 report that they are unable to reach users on VLAN 30. What is causing the problem?',
    'RTA is using the same subnet for VLAN 20 and VLAN 30.');
add('A router-on-a-stick configuration was implemented for VLANs 15, 30, and 45, according to the show running-config command output. PCs on VLAN 45 that are using the 172.16.45.0 /24 network are having trouble connecting to PCs on VLAN 30 in the 172.16.30.0 /24 network. Which error is most likely causing this problem?',
    'There is an incorrect IP address configured on GigabitEthernet 0/0.30.');
add('How are IP addressing designs affected by VLAN implementations?',
    'Each VLAN must have a different network number.');
add('Which three actions can cause problems with a VTP implementation? (Choose three.)',
    'using a non-trunk link to connect switches',
    'using non-Cisco switches',
    'using lowercase on one switch and uppercase on another switch for domain names');
add('The switch does the routing for the hosts that connect to VLAN 5. If the PC accesses a web server from the Internet, at what point will a VLAN number be added to the frame?',
    'No VLAN number is added to the frame in this design.');
add('How is traffic routed between multiple VLANs on a multilayer switch?',
    'Traffic is routed via internal VLAN interfaces.');
add('While configuring inter-VLAN routing on a multilayer switch, a network administrator issues the no switchport command on an interface that is connected to another switch. What is the purpose of this command?',
    'to create a routed port for a single network');
add('What is a disadvantage of using multilayer switches for inter-VLAN routing?',
    'Multilayer switches are more expensive than router-on-a-stick implementations.');
add('What is a characteristic of a routed port on a Layer 3 switch?',
    'It is not assigned to a VLAN.');
add('Fill in the blank.',
    'running configuration');
add('Which command is missing on the Layer 3 switch to restore the full connectivity between PC1 and the web server?',
    'ip address 192.168.20.1 255.255.255.0');
add('Match the DTP mode with its function. (Not all options are used.)',
    'des > actively, auto > passively, noneg > requires, trunk > perm trunking');



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

add('des > actively');
add('auto > passively');
add('noneg > requires');
add('trunk > perm trunking');
