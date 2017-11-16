/*Answers to multiple choice and fill-in-the-blank questions*/
var add = tests.add;

/*
 * template:
 * add(question, answer0 [, answer1, ...]);
 */

// CCNA3 Scaling Networks v6.0 Chapter 8
add('What is used to create the OSPF neighbor table?',
    'adjacency database');
add('Which OSPF component is identical in all routers in an OSPF area after convergence?',
    'link-state database');
add('Which OPSF packet contains the different types of link-state advertisements?',
    'LSU');
add('What happens immediately after two OSPF routers have exchanged hello packets and have formed a neighbor adjacency?',
    'They exchange abbreviated lists of their LSDBs.');
add('What will an OSPF router prefer to use first as a router ID?',
    'any IP address that is configured using the router-id command');
add('What are the two purposes of an OSPF router ID? (Choose two.)',
    'to uniquely identify the router within the OSPF domain',
    'to facilitate router participation in the election of the designated router');
add('By default, what is the OSPF cost for any link with a bandwidth of 100 Mb/s or greater?',
    '1');
add('Which command should be used to check the OSPF process ID, the router ID, networks the router is advertising, the neighbors the router is receiving updates from, and the default administrative distance?',
    'show ip protocols');
add('What are two reasons that will prevent two routers from forming an OSPFv2 adjacency? (Choose two.)',
    'mismatched OSPF Hello or Dead timers',
    'mismatched subnet masks on the link interfaces');
add('Which three addresses could be used as the destination address for OSPFv3 messages? (Choose three.)',
    'FE80::1',
    'FF02::5',
    'FF02::6');
add('A network administrator enters the command ipv6 router ospf 64 in global configuration mode. What is the result of this command?',
    'The OSPFv3 process will be assigned an ID of 64.');
add('When a network engineer is configuring OSPFv3 on a router, which command would the engineer issue immediately before configuring the router ID?',
    'ipv6 router ospf 10');
add('Single area OSPFv3 has been enabled on a router via the ipv6 router ospf 20 command. Which command will enable this OSPFv3 process on an interface of that router?',
    'ipv6 ospf 20 area 0');
add('What does a Cisco router use automatically to create link-local addresses on serial interfaces when OSPFv3 is implemented?',
    'an Ethernet interface MAC address available on the router, the FE80::/10 prefix, and the EUI-64 process');
add('Which command will verify that a router that is running OSPFv3 has formed an adjacency with other routers in its OSPF area?',
    'show ipv6 ospf neighbor');
add('Which command will provide information specific to OSPFv3 routes in the routing table?',
    'show ipv6 route ospf');
add('OSPF uses as a metric.',
    'cost');
add('The election of a DR and a BDR takes place on networks, such as Ethernet networks.',
    'multiaccess');
add('What message is displayed on http://www.ciscoville.com?',
    'Completion!');


// CCNA2 Routing and Switching v6.0 Chapter 7
add('In which configuration would an outbound ACL placement be preferred over an inbound ACL placement?',
    'when the ACL is applied to an outbound interface to filter packets coming from multiple inbound interfaces before the packets exit the interface');
add('Which address is required in the command syntax of a standard ACL?',
    'source IP address');
add('Which statement describes a difference between the operation of inbound and outbound ACLs?',
    'Inbound ACLs are processed before the packets are routed while outbound ACLs are processed after the routing is completed.');
add('Which three statements describe ACL processing of packets? (Choose three.)',
    'An implicit deny any rejects any packet that does not match any ACE.',
    'A packet can either be rejected or forwarded as directed by the ACE that is matched.',
    'Each statement is checked only until a match is detected or until the end of the ACE list.');
add('What single access list statement matches all of the following networks? 192.168.16.0 192.168.17.0 192.168.18.0 192.168.19.0',
    'access-list 10 permit 192.168.16.0 0.0.3.255');
add('A network administrator needs to configure a standard ACL so that only the workstation of the administrator with the IP address 192.168.15.23 can access the virtual terminal of the main router. Which two configuration commands can achieve the task? (Choose two.)',
    'Router1(config)# access-list 10 permit host 192.168.15.23',
    'Router1(config)# access-list 10 permit 192.168.15.23 0.0.0.0');
add('If a router has two interfaces and is routing both IPv4 and IPv6 traffic, how many ACLs could be created and applied to it?',
    '8');
add('Which three statements are generally considered to be best practices in the placement of ACLs? (Choose three.)',
    'Filter unwanted traffic before it travels onto a low-bandwidth link.',
    'Place extended ACLs close to the source IP address of the traffic.',
    'Place standard ACLs close to the destination IP address of the traffic.');
add('Refer to the exhibit. Which command would be used in a standard ACL to allow only devices on the network attached to R2 G0/0 interface to access the networks attached to R1?',
    'access-list 1 permit 192.168.10.96 0.0.0.31');
add('Refer to the exhibit. If the network administrator created a standard ACL that allows only devices that connect to the R2 G0/0 network access to the devices on the R1 G0/1 interface, how should the ACL be applied?',
    'outbound on the R1 G0/1 interface');
add('Refer to the following output. What is the significance of the 4 match(es) statement? R1# <output omitted> 10 permit 192.168.1.56 0.0.0.7 20 permit 192.168.1.64 0.0.0.63 (4 match(es)) 30 deny any (8 match(es))',
    'Four packets have been allowed through the router from PCs in the network of 192.168.1.64.');
add('On which router should the show access-lists command be executed?',
    'on the router that has the ACL configured');
add('What is the quickest way to remove a single ACE from a named ACL?',
    'Use the no keyword and the sequence number of the ACE to be removed.');
add('Which feature will require the use of a named standard ACL rather than a numbered standard ACL?',
    'the ability to add additional ACEs in the middle of the ACL without deleting and re-creating the list');
add('An administrator has configured an access list on R1 to allow SSH administrative access from host 172.16.1.100. Which command correctly applies the ACL?',
    'R1(config-line)# access-class 1 in');
add('Which type of router connection can be secured by the access-class command?',
    'vty');
add('Consider the following output for an ACL that has been applied to a router via the access-class in command. What can a network administrator determine from the output that is shown? R1# <output omitted> Standard IP access list 2 10 permit 192.168.10.0, wildcard bits 0.0.0.255 (2 matches) 20 deny any (1 match)',
    'Two devices were able to use SSH or Telnet to gain access to the router.');
add('Refer to the exhibit. A router has an existing ACL that permits all traffic from the 172.16.0.0 network. The administrator attempts to add a new ACE to the ACL that denies packets from host 172.16.0.1 and receives the error message that is shown in the exhibit. What action can the administrator take to block packets from host 172.16.0.1 while still permitting all other traffic from the 172.16.0.0 network?',
    'Manually add the new deny ACE with a sequence number of 5.');
add('Refer to the exhibit. An ACL was configured on R1 with the intention of denying traffic from subnet 172.16.4.0/24 into subnet 172.16.3.0/24. All other traffic into subnet 172.16.3.0/24 should be permitted. This standard ACL was then applied outbound on interface Fa0/0. Which conclusion can be drawn from this configuration?​',
    'All traffic will be blocked, not just traffic from the 172.16.4.0/24 subnet.');
add('Refer to the exhibit. What will happen to the access list 10 ACEs if the router is rebooted before any other commands are implemented?',
    'The ACEs of access list 10 will be renumbered.');
add('What is the effect of configuring an ACL with only ACEs that deny traffic?',
    'The ACL will block all traffic.');
add('Which type of ACL statements are commonly reordered by the Cisco IOS as the first ACEs?',
    'host');
add('A network administrator is configuring an ACL to restrict access to certain servers in the data center. The intent is to apply the ACL to the interface connected to the data center LAN. What happens if the ACL is incorrectly applied to an interface in the inbound direction instead of the outbound direction?',
    'The ACL does not perform as designed.');
add('When would a network administrator use the clear access-list counters command?',
    'when troubleshooting an ACL and needing to know how many packets matched');

// CCNA2 Routing and Switching v6.0 Chapter 8
add('Which DHCPv4 message will a client send to accept an IPv4 address that is offered by a DHCP server?',
    'broadcast DHCPREQUEST');
add('A company uses DHCP servers to dynamically assign IPv4 addresses to employee workstations. The address lease duration is set as 5 days. An employee returns to the office after an absence of one week. When the employee boots the workstation, it sends a message to obtain an IP address. Which Layer 2 and Layer 3 destination addresses will the message contain?',
    'FF-FF-FF-FF-FF-FF and 255.255.255.255');
add('Which is a DHCPv4 address allocation method that assigns IPv4 addresses for a limited lease period?',
    'dynamic allocation');
add('Which address does a DHCPv4 server target when sending a DHCPOFFER message to a client that makes an address request?',
    'client hardware address');
add('As a DHCPv4 client lease is about to expire, what is the message that the client sends the DHCP server?',
    'DHCPREQUEST');
add('What is an advantage of configuring a Cisco router as a relay agent?',
    'It can provide relay services for multiple UDP services.');
add('An administrator issues the commands: Router(config)# interface g0/1 Router(config-if)# ip address dhcp What is the administrator trying to achieve?',
    'configuring the router to obtain IP parameters from a DHCPv4 server');
add('Under which two circumstances would a router usually be configured as a DHCPv4 client? (Choose two.)',
    'The router is intended to be used as a SOHO gateway.',
    'This is an ISP requirement.');
add('A company uses the SLAAC method to configure IPv6 addresses for the employee workstations. Which address will a client use as its default gateway?​',
    'the link-local address of the router interface that is attached to the network');
add('A network administrator configures a router to send RA messages with M flag as 0 and O flag as 1. Which statement describes the effect of this configuration when a PC tries to configure its IPv6 address?',
    'It should use the information that is contained in the RA message and contact a DHCPv6 server for additional information');
add('A company implements the stateless DHCPv6 method for configuring IPv6 addresses on employee workstations. After a workstation receives messages from multiple DHCPv6 servers to indicate their availability for DHCPv6 service, which message does it send to a server for configuration information?',
    'DHCPv6 INFORMATION-REQUEST');
add('An administrator wants to configure hosts to automatically assign IPv6 addresses to themselves by the use of Router Advertisement messages, but also to obtain the DNS server address from a DHCPv6 server. Which address assignment method should be configured?',
    'stateless DHCPv6');
add('How does an IPv6 client ensure that it has a unique address after it configures its IPv6 address using the SLAAC allocation method?',
    'It sends an ICMPv6 Neighbor Solicitation message with the IPv6 address as the target IPv6 address.');
add('What is used in the EUI-64 process to create an IPv6 interface ID on an IPv6 enabled interface?',
    'the MAC address of the IPv6 enabled interface');
add('What two methods can be used to generate an interface ID by an IPv6 host that is using SLAAC? (Choose two.)',
    'EUI-64',
    'random generation');
add('Refer to the exhibit. Based on the output that is shown, what kind of IPv6 addressing is being configured?',
    'stateless DHCPv6');
add('Refer to the exhibit. What should be done to allow PC-A to receive an IPv6 address from the DHCPv6 server?',
    'Add the ipv6 dhcp relay command to interface Fa0/0.');
add('Refer to the exhibit. A network administrator is implementing stateful DHCPv6 operation for the company. However, the clients are not using the prefix and prefix-length information that is configured in the DHCP pool. The administrator issues a show ipv6 interface command. What could be the cause of the problem?',
    'The router is configured for stateless DHCPv6 operation');
add('Refer to the exhibit. A network administrator is implementing the stateless DHCPv6 operation for the company. Clients are configuring IPv6 addresses as expected. However, the clients are not getting the DNS server address and the domain name information configured in the DHCP pool. What could be the cause of the problem?',
    'The router is configured for SLAAC operation');
add('Fill in the blank. Do not abbreviate Type a command to exclude the first fifteen useable IP addresses from a DHCPv4 address pool of the network 10.0.15.0/24. Router(config)# ip dhcp',
    'excluded-address 10.0.15.1 10.0.15.15');

/*Prompts for matching questions and Packet Tracer Labs*/
add = prompts.add;

/*
 * template:
 * add('helper label');
 */

// CCNA3 Scaling Networks v6.0 Chapter 8
add('1 > down, 2 > init, 3 > two-way, 4 > exstart, 5 > exchange, 6 > loading, 7 > full');
add('update > advertise, database > compare, hello > establish, request > query');
add('1 > configured, 2 > 172.16.1.1, 3 > 10.1.1.1, 4 > serial');
add('BW > interface, Protocol > protocols, Neighbor > neighbor, Process > ospf');

// CCNA2 Routing and Switching v6.0 Chapter 7
add('192.168.15.65 255.255.255.240 ==> the first valid...');
add('192.168.15.144 0.0.0.15 ==> subnetwork address...');
add('host 192.168.15.2 ==> all IP address...');
add('192.168.5.0 0.0.3.255 ==> hosts in a subnet..');
add('192.168.3.64 0.0.0.7 ==> address with...');

// CCNA2 Routing and Switching v6.0 Chapter 8
add('Step 1->Exe IP addreses');
add('Step 2->Config a DHCP');
add('Step 3->Define ... router');
add('Stateless -> "enabled in RA", "clients send..","ipv6 address autoconfig"');
add('Stateful -> "the M..", "uses the address..", "ipv6 address dhcp"');

// CCNA2 Routing and Switching v6.0 Chapter 7 PT Lab
add('1:HQ/ATOM:en|conf t|hostname HQ/Atom|no ip domain-lookup|enable secret cisco');
add('2:HQ:line con 0|pass cisco|login|line vty 0 15|pass cisco|login|exit');
add('3:HQ:int g0/0.20|encapsulation dot1Q 20|ip add 172.16.20.254 255.255.255.0');
add('4:HQ:int g0/0.40|encapsulation dot1Q 40|ip add 172.16.40.254 255.255.255.0');
add('5:HQ:int g0/0.60|encapsulation dot1Q 60|ip add 172.16.60.254 255.255.255.0');
add('6:HQ:int g0/0.80|encapsulation dot1Q 88|ip add 172.16.88.254 255.255.255.0');
add('7:HQ:int g0/0|no sh');
add('8:HQ:int g0/1.250|encapsulation dot1Q 250|ip add 172.16.250.254 255.255.255.0');
add('9:HQ:int g0/1.254|encapsulation dot1Q 254|ip add 172.16.254.254 255.255.255.0');
add('10:HQ:int g0/1|no shut|exit|access-list 10 permit 172.16.60.0 0.0.0.255');
add('11:HQ:access-list 10 deny any|ip access-list standard INT-WEB');
add('12:HQ:permit 172.16.40.0 0.0.0.255|permit 172.16.60.0 0.0.0.255');
add('13:HQ:exit|line vty 0 15|access-class 10 in|exit');
add('14:HQ:int g0/1.250|ip addr access-group INT-WEB out');
add('15:MGMT/Neutron:en|conf t|hostname Mgmt/Neutron|no ip domain-lookup');
add('16:MGMT:enable secret cisco|line con 0|pass cisco|login|line vty 0 15');
add('17:MGMT:pass cisco|login|exit|serv pass|vlan 20|name Clerical|vlan40|name Acct');
add('18:MGMT:vlan 60|name HR|vlan 88|name NetAdmin|exit|vlan 88|');
add('19:MGMT:ip add 172.16.88.253 255.255.255.0|no shut|exit');
add('20:MGMT:ip default-gateway 172.16.88.254|vtp domain School');
add('21:MGMT:int g0/1|switchport mode trunk|int range f0/23-24|switchport mode trunk');
add('22:ACCT/Proton:en|conf t|hostname Acct/Proton|vlan 20|name Clerical|vlan 40|name Acct');
add('23:ACCT:vlan 60|name HR|vlan 88|vlan NetAdmin|exit');
add('24:ACCT:int range fa0/1-5|switchport mode access|switchport access vlan 20');
add('25:ACCT:int range fa0/6-10|switchport mode accesss|switchport access vlan 40');
add('26:ACCT:int range fa0/11-15|switchport mode accesss|switchport access vlan 60');
add('27:ACCT:exit|int vlan 88|ip add 172.16.88.252 255.255.255.0|no sh|no shut|exit');
add('28:ACCT:ip default-gateway 172.16.88.254|vtp domain School|int f0/23|switchport mode trunk');
add('29:HR/Electron:en|conf t|hostname HR/Electron|vlan 20|name Clerical|vlan 40|name Acct');
add('30:HR:vlan 60|name HR|vlan 88|name NetAdmin|exit');
add('31:HR:int range fa0/1-5|switchport mode access|switchport access vlan 20');
add('32:HR:int range fa0/6-10|switchport mode access|switchport access vlan 40');
add('33:HR:int range fa0/11-15|switchport mode access|switchport access vlan 60');
add('34:HR:exit|int vlan 88|ip add 172.16.88.251 255.255.255.0|no shut|exit');
add('35:HR:ip default-gateway 172.16.88.254|vtp domain School|int f0/24|switchport mode trunk');
