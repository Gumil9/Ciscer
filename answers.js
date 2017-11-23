/*Answers to multiple choice and fill-in-the-blank questions*/
var add = tests.add;

/*
 * template:
 * add(question, answer0 [, answer1, ...]);
 */

// CCNA3 Scaling Networks v6.0 Chapter 9
add('What are two reasons for creating an OSPF network with multiple areas? (Choose two.)',
    'to reduce SPF calculations',
    'to reduce use of memory and processor resources');
add('What is used to facilitate hierarchical routing in OSPF?',
    'the use of multiple areas');
add('Which two statements correctly describe OSPF type 3 LSAs? (Choose two.)',
    'Type 3 LSAs are generated without requiring a full SPF calculation.',
    'Type 3 LSAs are used to update routes between OSPF areas.');
add('Which characteristic describes both ABRs and ASBRs that are implemented in a multiarea OSPF network?',
    'They are required to perform any summarization or redistribution tasks.');
add('What type of OSPF LSA is originated by ASBR routers to advertise external routes?',
    'type 5');
add('What OSPF LSA type is used to inform routers of the router ID of the DR in each multiaccess network in an OSPF area?',
    'type 2');
add('Which two statements are correct? (Choose two.)',
    'The routing table contains routes from multiple areas.',
    'To reach network 192.168.1.0, traffic will exit via the Serial0/0/0 interface.');
add('What routing table descriptor is used to identify OSPF summary networks that originate from an ABR?',
    'IA');
add('A network administrator is verifying a multi-area OSPF configuration by checking the routing table on a router in area 1. The administrator notices a route to a network that is connected to a router in area 2. Which code appears in front of this route in the routing table within area 1?',
    'IA');
add('What can be concluded about network 192.168.4.0 in the R2 routing table?',
    'The network was learned from a router within the same area as R2.');
add('Which three steps in the design and implementation of a multiarea OSPF network are considered planning steps? (Choose three.)',
    'Define the OSPF parameters.',
    'Gather the required parameters.',
    'Define the network requirements.');
add('Which two networks are part of the summary route 192.168.32.0/22? (Choose two.)',
    '192.168.33.0/24',
    '192.168.35.0/24');
add('What is indicated by the O IA in the router output?',
    'The route was learned from another area.');
add('A network administrator has been asked to summarize the networks shown in the exhibit as part of a multiarea OSPF implementation. All addresses are using a subnet mask of 255.255.255.0. What is the correct summarization for these eight networks?',
    '10.0.0.0 255.255.240.0');
add('The network administrator has been asked to summarize the routes for a new OSPF area. The networks to be summarized are 172.16.8.0, 172.16.10.0, and 172.16.12.0 with subnet masks of 255.255.255.0 for each network. Which command should the administrator use to forward the summary route for area 15 into area 0?',
    'area 15 range 172.16.8.0 255.255.248.0');
add('OSPF type 2 LSA messages are only generated by the router to advertise routes in multiaccess networks.',
    'designated');
add('An ASBR generates type LSAs for each of its external routes and floods them into the area that it is connected to.',
    '5');
add('A type LSA identifies the ASBR and provides a route to it.',
    '4');
add('The command must be issued to configure R1 for multiarea OSPF.',
    'network 192.168.10.128 0.0.0.127 area 1');
add('Why are users in the OSPF network not able to access the Internet?',
    'The network statement is misconfigured on router R1.');
add('What is the missing command on router R2 to establish an adjacency between routers R1 and R3?',
    'network 172.16.10.0 0.0.0.255 area 0');


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

// CCNA3 Scaling Networks v6.0 Chapter 9
add('internal > same, Area > multiple, backbone > backbone, Autonomous > non-OSPF');


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
add('18:MGMT:vlan 60|name HR|vlan 88|name NetAdmin|exit|int vlan 88|');
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
