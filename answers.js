/*Answers to multiple choice and fill-in-the-blank questions*/
var add = tests.add;

/*
 * template:
 * add(question, answer0 [, answer1, ...]);
 */

//TEST8
add('Which OSPF component is identical in all routers in an OSPF area after convergence?', 'link-state database');
add('Which three statements describe features of the OSPF topology table? (Choose three.)', 'When converged, all routers in an area have identical topology tables.', 'It is a link-state database that represents the network topology.', 'The table can be viewed via the show ip ospf database command.');
add('A router is participating in an OPSFv2 domain. What will always happen if the dead interval expires before the router receives a hello packet from an adjacent DROTHER OPSF router?', 'OSPF will remove that neighbor from the router link-state database.');
add('Which command will provide information specific to OSPFv3 routes in the routing table?', 'show ipv6 route ospf');
add('Which wildcard mask would be used to advertise the 192.168.5.96/27 network as part of an OSPF configuration?', '0.0.0.31');
add('A network administrator enters the command ipv6 router ospf 64 in global configuration mode. What is the result of this command?', 'The OSPFv3 process will be assigned an ID of 64.');
add('Fill in the blank. The election of a DR and a BDR takes place on " multiaccess " networks, such as Ethernet networks.', 'multiaccess');
add('Fill in the blank. OSPF uses ” cost ” as a metric.', 'cost');
add('Which command should be used to check the OSPF process ID, the router ID, networks the router is advertising, the neighbors the router is receiving updates from, and the default administrative distance?', 'show ip protocols');
add('Which OSPFv3 function works differently from OSPFv2?', 'authentication');
add('Launch PT Hide and Save PT Open the PT Activity. Perform the tasks in the activity instructions and then complete the task. What message is displayed on www.ciscoville.com?', 'Completion!');
add('Fill in the blank. Do not use abbreviations.\nTo quickly verify OSPFv3 configuration information including the OSPF process ID, the router ID, and the interfaces enabled for OSPFv3, you need to issue the command ” show ipv6 protocols ”', 'show ipv6 protocols');
add('Which three statements describe the similarities between OSPFv2 and OSPFv3? (Choose three.)', 'They both use the same DR/BDR election process.', 'They both share the concept of multiple areas.', 'They both are link-state protocols.');
add('What is a function of OSPF hello packets?', 'to discover neighbors and build adjacencies between them');
add('What are the two purposes of an OSPF router ID? (Choose two.)', 'to uniquely identify the router within the OSPF domain', 'to facilitate router participation in the election of the designated router');
add('Which command will verify that a router that is running OSPFv3 has formed an adjacency with other routers in its OSPF area?', 'show ipv6 ospf neighbor');
add('Single area OSPFv3 has been enabled on a router via the ipv6 router ospf 20 command. Which command will enable this OSPFv3 process on an interface of that router?', 'ipv6 ospf 20 area 0');
add('When a network engineer is configuring OSPFv3 on a router, which command would the engineer issue immediately before configuring the router ID?', 'ipv6 router ospf 10');
add('Which criterion is preferred by the router to choose a router ID?', 'the router-id rid command');
add('Which OPSF packet contains the different types of link-state advertisements?', 'LSU');
add('What does a Cisco router use automatically to create link-local addresses on serial interfaces when OSPFv3 is implemented?', 'an Ethernet interface MAC address available on the router, the FE80::/10 prefix, and the EUI-64 process');
add('A router is participating in an OSPFv2 domain. What will always happen if the dead interval expires before the router receives a hello packet from an adjacent DROTHER OSPF router?', 'OSPF will remove that neighbor from the router link-state database.');
add('What is the first criterion used by OSPF routers to elect a DR?', 'Highest priority');
add('Which OSPFv3 function works differently from OSPFv2?', 'authentication');
add('What is used to create the OSPF neighbor table?', 'adjacency database');
add('What are two reasons that will prevent routers from forming an OSPFv2 adjacency? (Choose two.)', 'mismatched subnet masks on the link interfaces', 'mismatched OSPF Hello or Dead timers');
add('What command would be issued to determine if a routing protocol-initiated relationship has been made with an adjacent router?', 'show ip ospf neighbor');
add('Which three addresses could be used as the destination address for OSPFv3 messages? (Choose three.)', 'FF02::5', 'FE80::1', 'FF02::6');
add('Refer to the exhibit. A network administrator issued the command show ip ospf interface on the router R2. What conclusion can be drawn?', 'R2 has not formed an adjacency with any other router');
add('What command would be used to determine if a routing protocol-initiated relationship had been made with an adjacent router?', 'show ip ospf neighbor');
add('What are two reasons that will prevent two routers from forming an OSPFv2 adjacency? (Choose two.)', 'mismatched OSPF Hello or Dead timers', 'mismatched subnet masks on the link interfaces');

//TEST9
add('A network administrator needs to configure a standard ACL so that only the workstation of the administrator with the IP address 192.168.15.23 can access the virtual terminal of the main router. Which two configuration commands can achieve the task? (Choose two.)', 'Router1(config)# access-list 10 permit 192.168.15.23 0.0.0.0', 'Router1(config)# access-list 10 permit host 192.168.15.23');
add('Refer to the exhibit. A router has an existing ACL that permits all traffic from the 172.16.0.0 network. The administrator attempts to add a new ACE to the ACL that denies packets from host 172.16.0.1 and receives the error message that is shown in the exhibit. What action can the administrator take to block packets from host 172.16.0.1 while still permitting all other traffic from the 172.16.0.0 network?', 'Manually add the new deny ACE with a sequence number of 5.');
add('Launch PT Hide and Save PT Open the PT Activity. Perform the tasks in the activity instructions and then answer the question. Why is the ACL not working?', 'The ACL is applied to the wrong interface.');
add('Which statement describes a characteristic of standard IPv4 ACLs?', 'They filter traffic based on source IP addresses only.');
add('Refer to the exhibit. The network administrator that has the IP address of 10.0.70.23/25 needs to have access to the corporate FTP server (10.0.54.5/28). The FTP server is also a web server that is accessible to all internal employees on networks within the 10.x.x.x address. No other traffic should be allowed to this server. Which extended ACL would be used to filter this traffic, and how would this ACL be applied? (Choose two.)', 'R1(config)# interface gi0/0\nR1(config-if)# ip access-group 105 out', 'access-list 105 permit tcp host 10.0.70.23 host 10.0.54.5 eq 20\naccess-list 105 permit tcp host 10.0.70.23 host 10.0.54.5 eq 21\naccess-list 105 permit tcp 10.0.0.0 0.255.255.255 host 10.0.54.5 eq www\naccess-list 105 deny ip any host 10.0.54.5\naccess-list 105 permit ip any any');
add('What are two possible uses of access control lists in an enterprise network? (Choose two.)', 'limiting debug outputs', 'controlling virtual terminal access to routers');
add('An administrator has configured an access list on R1 to allow SSH administrative access from host 172.16.1.100. Which command correctly applies the ACL?', 'R1(config-line)# access-class 1 in');
add('Which three statements are generally considered to be best practices in the placement of ACLs? (Choose three.)', 'Place extended ACLs close to the source IP address of the traffic.', 'Place standard ACLs close to the destination IP address of the traffic.', 'Filter unwanted traffic before it travels onto a low-bandwidth link.');
add('Which three implicit access control entries are automatically added to the end of an IPv6 ACL? (Choose three.)', 'deny ipv6 any any', 'permit icmp any any nd-ns', 'permit icmp any any nd-na');
add('Which two characteristics are shared by both standard and extended ACLs? (Choose two.)', 'Both can be created by using either a descriptive name or number.', 'Both include an implicit deny as a final ACE.');
add('Consider the following access list that allows IP phone configuration file transfers from a particular host to a TFTP server: Which method would allow the network administrator to modify the ACL and include FTP transfers from any source IP address?', 'R1(config)# interface gi0/0\nR1(config-if)# no ip access-group 105 out\nR1(config)# no access-list 105\nR1(config)# access-list 105 permit udp host 10.0.70.23 host 10.0.54.5 range 1024 5000\nR1(config)# access-list 105 permit tcp any host 10.0.54.5 eq 20\nR1(config)# access-list 105 permit tcp any host 10.0.54.5 eq 21\nR1(config)# access-list 105 deny ip any any\nR1(config)# interface gi0/0\nR1(config-if)# ip access-group 105 out');
add('What two functions describe uses of an access control list? (Choose two.)', 'ACLs provide a basic level of security for network access.', 'ACLs can control which areas a host can access on a network.');
add('Which feature is unique to IPv6 ACLs when compared to those of IPv4 ACLs?', 'an implicit permit of neighbor discovery packets');
add('Which three statements describe ACL processing of packets? (Choose three.)', 'Each statement is checked only until a match is detected or until the end of the ACE list.', 'An implicit deny any rejects any packet that does not match any ACE.', 'A packet can either be rejected or forwarded as directed by the ACE that is matched.');
add('Which statement describes a difference between the operation of inbound and outbound ACLs?', 'Inbound ACLs are processed before the packets are routed while outbound ACLs are processed after the routing is completed.');
add('What is the only type of ACL available for IPv6?', 'named extended');
add('Which IPv6 ACL command entry will permit traffic from any host to an SMTP server on network 2001:DB8:10:10::/64?', 'permit tcp any host 2001:DB8:10:10::100 eq 25');
add('Refer to the exhibit. The IPv6 access list LIMITED_ACCESS is applied on the S0/0/0 interface of R1 in the inbound direction. Which IPv6 packets from the ISP will be dropped by the ACL on R1?', 'ICMPv6 packets that are destined to PC1');
add('If a router has two interfaces and is routing both IPv4 and IPv6 traffic, how many ACLs could be created and applied to it?', '8');
add('Which IPv4 address range covers all IP addresses that match the ACL filter specified by 172.16.2.0 with wildcard mask 0.0.1.255?', '172.16.2.0 to 172.16.3.255');
add('What packets would match the access control list statement that is shown below?\n+++++ access-list 110 permit tcp 172.16.0.0 0.0.0.255 any eq 22 +++++', 'SSH traffic from the 172.16.0.0 network to any destination network');
add('What single access list statement matches all of the following networks?\n192.168.16.0\n192.168.17.0\n192.168.18.0\n192.168.19.0', 'access-list 10 permit 192.168.16.0 0.0.3.255');
add('What is a limitation when utilizing both IPv4 and IPv6 ACLs on a router?', 'Both IPv4 and IPv6 ACLs can be configured on a single device, but cannot share the same name.');
add('In which configuration would an outbound ACL placement be preferred over an inbound ACL placement?', 'when the ACL is applied to an outbound interface to filter packets coming from multiple inbound interfaces before the packets exit the interface');
add('What method is used to apply an IPv6 ACL to a router interface?', 'the use of the ipv6 traffic-filter command');
add('Refer to the exhibit. What will happen to the access list 10 ACEs if the router is rebooted before any other commands are implemented?', 'The ACEs of access list 10 will be renumbered.');
add('Refer to the exhibit. What is the result of adding the established argument to the end of the ACE?', 'Any TCP traffic is allowed to reach the 192.168.254.0 255.255.254.0 network if it is in response to an originated request.');

//TEST10
add('Refer to the exhibit. What should be done to allow PC-A to receive an IPv6 address from the DHCPv6 server?', 'Add the ipv6 dhcp relay command to interface Fa0/0.');
add('What is the reason why the DHCPREQUEST message is sent as a broadcast during the DHCPv4 process?', 'to notify other DHCP servers on the subnet that the IP address was leased');
add('A company uses DHCP servers to dynamically assign IPv4 addresses to employee workstations. The address lease duration is set as 5 days. An employee returns to the office after an absence of one week. When the employee boots the workstation, it sends a message to obtain an IP address. Which Layer 2 and Layer 3 destination addresses will the message contain?', 'FF-FF-FF-FF-FF-FF and 255.255.255.255');
add('Fill in the blank. Do not abbreviate.\nType a command to exclude the first fifteen useable IP addresses from a DHCPv4 address pool of the network 10.0.15.0/24.\nRouter(config)# ip dhcp', 'excluded-address 10.0.15.1 10.0.15.15');
add('Refer to the exhibit. A network administrator is implementing stateful DHCPv6 operation for the company. However, the clients are not using the prefix and prefix-length information that is configured in the DHCP pool. The administrator issues a show ipv6 interface command. What could be the cause of the problem?', 'The router is configured for stateless DHCPv6 operation.');
add('A network engineer is troubleshooting hosts on a LAN that are not being assigned an IPv4 address from a DHCP server after a new Ethernet switch has been installed on the LAN. The configuration of the DHCP server has been confirmed as correct and the clients have network connectivity to other networks if a static IP address is configured on each one. What step should the engineer take next to solve the issue?', 'Confirm that ports on the Layer 2 LAN switch are configured as edge ports.');
add('A network administrator configures a router to send RA messages with M flag as 0 and O flag as 1. Which statement describes the effect of this configuration when a PC tries to configure its IPv6 address?', 'It should use the information that is contained in the RA message and contact a DHCPv6 server for additional information.');
add('Which protocol supports Stateless Address Autoconfiguration (SLAAC) for dynamic assignment of IPv6 addresses to a host?', 'ICMPv6');
add('A network administrator is implementing DHCPv6 for the company. The administrator configures a router to send RA messages with M flag as 1 by using the interface command ipv6 nd managed-config-flag. What effect will this configuration have on the operation of the clients?', 'Clients must use all configuration information that is provided by a DHCPv6 server.');
add('Under which two circumstances would a router usually be configured as a DHCPv4 client? (Choose two.)', 'The router is intended to be used as a SOHO gateway.', 'This is an ISP requirement.');
add('A company uses the SLAAC method to configure IPv6 addresses for the employee workstations. Which address will a client use as its default gateway?​', 'the link-local address of the router interface that is attached to the network');
add('Refer to the exhibit. Based on the output that is shown, what kind of IPv6 addressing is being configured?', 'stateless DHCPv6');
add('A company implements the stateless DHCPv6 method for configuring IPv6 addresses on employee workstations. After a workstation receives messages from multiple DHCPv6 servers to indicate their availability for DHCPv6 service, which message does it send to a server for configuration information?', 'DHCPv6 INFORMATION-REQUEST');
add('An administrator issues the commands:\nRouter(config)# interface g0/1\nRouter(config-if)# ip address dhcp\nWhat is the administrator trying to achieve?', 'configuring the router to obtain IP parameters from a DHCPv4 server');
add('Which set of commands will configure a router as a DHCP server that will assign IPv4 addresses to the 192.168.100.0/23 LAN while reserving the first 10 and the last addresses for static assignment?', 'ip dhcp excluded-address 192.168.100.1 192.168.100.10\nip dhcp excluded-address 192.168.101.254\nip dhcp pool LAN-POOL-100\nnetwork 192.168.100.0 255.255.254.0\ndefault-router 192.168.100.1');
add('Which DHCPv4 message will a client send to accept an IPv4 address that is offered by a DHCP server?', 'broadcast DHCPREQUEST');
add('Launch PT Hide and Save PT Open the PT Activity. Perform the tasks in the activity instructions and then answer the question. How many IP addresses has the DHCP server leased and what is the number of DHCP pools configured? (Choose two.)', 'one pool', 'three leases');
add('Refer to the exhibit. A network administrator is implementing the stateless DHCPv6 operation for the company. Clients are configuring IPv6 addresses as expected. However, the clients are not getting the DNS server address and the domain name information configured in the DHCP pool. What could be the cause of the problem?', 'The router is configured for SLAAC DHCPv6 operation.');
add('A host on the 10.10.100.0/24 LAN is not being assigned an IPv4 address by an enterprise DHCP server with the address 10.10.200.10/24. What is the best way for the network engineer to resolve this problem?', 'Issue the command ip helper-address 10.10.200.10 on the router interface that is the 10.10.100.0/24 gateway.');
add('Which is a DHCPv4 address allocation method that assigns IPv4 addresses for a limited lease period?', 'dynamic allocation');
add('An administrator wants to configure hosts to automatically assign IPv6 addresses to themselves by the use of Router Advertisement messages, but also to obtain the DNS server address from a DHCPv6 server. Which address assignment method should be configured?', 'stateless DHCPv6');
add('A company uses the method SLAAC to configure IPv6 addresses for the workstations of the employees. A network administrator configured the IPv6 address on the LAN interface of the router. The interface status is UP. However, the workstations on the LAN segment did not obtain the correct prefix and prefix length. What else should be configured on the router that is attached to the LAN segment for the workstations to obtain the information?​', 'R1(config)# ipv6 unicast-routing');
add('Which address does a DHCPv4 server target when sending a DHCPOFFER message to a client that makes an address request?');
add('What is an advantage of configuring a Cisco router as a relay agent?', 'It can provide relay services for multiple UDP services.');
add('How does an IPv6 client ensure that it has a unique address after it configures its IPv6 address using the SLAAC allocation method?', 'It sends an ICMPv6 Neighbor Solicitation message with the IPv6 address as the target IPv6 address.');
add('What is used in the EUI-64 process to create an IPv6 interface ID on an IPv6 enabled interface?', 'the MAC address of the IPv6 enabled interface');
add('As a DHCPv4 client lease is about to expire, what is the message that the client sends the DHCP server?', 'DHCPREQUEST');

/*Prompts for matching questions and Packet Tracer Labs*/
add = prompts.add;

/*
 * template:
 * add('helper label');
 */
