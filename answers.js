/*Answers to multiple choice and fill-in-the-blank questions*/
var add = tests.add;

/*
 * template:
 * add(question, answer0 [, answer1, ...]);
 */
//Essentials final exam
add('Match the order in which the link-state routing process occurs on a router. (Not all options are used.)', 'Step 1- Each router learns about its own directly connected networks.', 'Step 2- Each router is responsible for “saying hello” to its neighbors on directly connected networks.', 'Step 3- Each router builds a Link-State Packet (LSP) containing the state of each directly connected link', 'Step 4- Each router floods the LSP to all neighbors, who then store all LSPs received in a database', 'Step 5- Each router uses the database to construct a complete map of the topology and computes the best');
add('What are two features of a link-state routing protocol? (Choose two.)', 'Routers send triggered updates in response to a change.', 'Routers create a topology of the network by using information from other routers.');
add('Fill in the blank. In IPv6, all routes are level   ” 1 ”  ultimate routes.', '1');
add('Which switching method drops frames that fail the FCS check?', 'store-and-forward switching');
add('Which summary IPv6 static route statement can be configured to summarize only the routes to networks 2001:db8:cafe::/58 through 2001:db8:cafe:c0::/58?', 'ipv6 route 2001:db8:cafe::/56 S0/0/0');
add('Refer to the exhibit. If RIPng is enabled, how many hops away does R1 consider the 2001:0DB8:ACAD:1::/64 network to be?', '3');
add('When a Cisco switch receives untagged frames on a 802.1Q trunk port, which VLAN ID is the traffic switched to by default?', 'native VLAN ID');
add('A college marketing department has a networked storage device that uses the IP address 10.18.7.5, TCP port 443 for encryption, and UDP port 4365 for video streaming. The college already uses PAT on the router that connects to the Internet. The router interface has the public IP address of 209.165.200.225/30. The IP NAT pool currently uses the IP addresses ranging from 209.165.200.228-236. Which configuration would the network administrator add to allow this device to be accessed by the marketing personnel from home?', 'ip nat inside source static tcp 10.18.7.5 443 209.165.200.225 443', 'ip nat inside source static udp 10.18.7.5 4365 209.165.200.225 4365');
add('Which statement describes a route that has been learned dynamically?', 'It is automatically updated and maintained by routing protocols.');
add('A network administrator is explaining to a junior colleague the use of the lt and gt keywords when filtering packets using an extended ACL. Where would the lt or gt keywords be used?', 'in an IPv4 extended ACL that allows packets from a range of TCP ports destined for a specific network device');
add('Refer to the exhibit. How did the router obtain the last route that is shown?', 'Another router in the same organization provided the default route by using a dynamic routing protocol.');
add('Refer to the exhibit. A Layer 3 switch routes for three VLANs and connects to a router for Internet connectivity. Which two configurations would be applied to the switch? (Choose two.)', '(config)# interface gigabitethernet 1/1', '(config-if)# no switchport', ' ', '(config)# ip routing');
add('A network contains multiple VLANs spanning multiple switches. What happens when a device in VLAN 20 sends a broadcast Ethernet frame?', 'Only devices in VLAN 20 see the frame.');
add('Which two packet filters could a network administrator use on an IPv4 extended ACL? (Choose two.)', 'ICMP message type', 'destination UDP port number');
add('Refer to the exhibit. R1 was configured with the static route command ip route 209.165.200.224 255.255.255.224 S0/0/0 and consequently users on network 172.16.0.0/16 are unable to reach resources on the Internet. How should this static route be changed to allow user traffic from the LAN to reach the Internet?', 'Change the destination network and mask to 0.0.0.0 0.0.0.0');
add('How is the router ID for an OSPFv3 router determined?', 'the highest IPv4 address on an active interface');
add('Two employees in the Sales department work different shifts with their laptop computers and share the same Ethernet port in the office. Which set of commands would allow only these two laptops to use the Ethernet port and create violation log entry without shutting down the port if a violation occurs?', 'switchport mode access', 'switchport port-security', 'switchport port-security maximum 2', 'switchport port-security mac-address sticky', 'switchport port-security violation restrict');
add('Which two factors are important when deciding which interior gateway routing protocol to use? (Choose two.)', 'speed of convergence', 'scalability');
add('Refer to the exhibit. Which type of route is 172.16.0.0/16', 'level 1 parent route');
add('What caused the following error message to appear? 01:11:12: %PM-4-ERR_DISABLE: psecure-violation error detected on Fa0/8, putting Fa0/8 in err-disable state 01:11:12: %PORT_SECURITY-2-PSECURE_VIOLATION: Security violation occurred, caused by MAC address 0011.a0d4.12a0 on port FastEthernet0/8. 01:11:13: %LINEPROTO-5-UPDOWN: Line protocol on Interface FastEthernet0/8, changed state to down 01:11:14: %LINK-3-UPDOWN: Interface FastEthernet0/8, changed state to down', 'Port security was enabled on the switch port, and an unauthorized connection was made on switch port Fa0/8.');
add('Which two statements are characteristics of routed ports on a multilayer switch? (Choose two.)', 'In a switched network, they are mostly configured between switches at the core and distribution layers.', 'They are not associated with a particular VLAN.');
add('A network administrator is adding ACLs to a new IPv6 multirouter environment. Which IPv6 ACE is automatically added implicitly at the end of an ACL so that two adjacent routers can discover each other?', 'permit icmp any any nd-na');
add('What does the cost of an OSPF link indicate?', 'A lower cost indicates a better path to the destination than a higher cost does.');
add('Refer to the exhibit. The Gigabit interfaces on both routers have been configured with subinterface numbers that match the VLAN numbers connected to them. PCs on VLAN 10 should be able to print to the P1 printer on VLAN 12. PCs on VLAN 20 should print to the printers on VLAN 22. What interface and in what direction should you place a standard ACL that allows printing to P1 from data VLAN 10, but stops the PCs on VLAN 20 from using the P1 printer? (Choose two.)', 'outbound', 'R1 Gi0/1.12');
add('On a switch that is configured with multiple VLANs, which command will remove only VLAN 100 from the switch?', 'Switch(config)# no vlan 100');
add('A router needs to be configured to route within OSPF area 0. Which two commands are required to accomplish this? (Choose two.)', 'RouterA(config)# router ospf 1', 'RouterA(config-router)# network 192.168.2.0 0.0.0.255 area 0');
add('What is a function of the distribution layer?', 'interconnection of large-scale networks in wiring closets');
add('A small-sized company has 20 workstations and 2 servers. The company has been assigned a group of IPv4 addresses 209.165.200.224/29 from its ISP. What technology should the company implement in order to allow the workstations to access the services over the Internet?', 'dynamic NAT');
add('Which three requirements are necessary for two OSPFv2 routers to form an adjacency? (Choose three.)', 'The link interface subnet masks must match.', 'The two routers must include the inter-router link network in an OSPFv2 network command',  'The OSPF hello or dead timers on each router must match.');
add('Which three pieces of information does a link-state routing protocol use initially as link-state information for locally connected links? (Choose three.)', 'the cost of that link', 'the type of network link', 'the link router interface IP address and subnet mask');
add('What is a disadvantage of NAT?', 'There is no end-to-end addressing.');
add('Refer to the exhibit. The partial configuration that is shown was used to configure router on a stick for VLANS 10, 30, and 50. However, testing shows that there are some connectivity problems between the VLANs. Which configuration error is causing this problem?', 'The wrong VLAN has been configured on subinterface Fa0/0.50.');
add('Refer to the exhibit. R1 has been configured as shown. However, PC1 is not able to receive an IPv4 address. What is the problem?', 'The ip helper-address command was applied on the wrong interface.');
add('What best describes the operation of distance vector routing protocols?', 'They send their routing tables to directly connected neighbors.');
add('A network administrator is using the router-on-a-stick method to configure inter-VLAN routing. Switch port Gi1/1 is used to connect to the router. Which command should be entered to prepare this port for the task?', 'Switch(config)# interface gigabitethernet 1/1', 'Switch(config-if)# switchport mode trunk');
add('Which three advantages are provided by static routing? (Choose three.)', 'The path a static route uses to send data is known.', 'Static routing does not advertise over the network, thus providing better security.', 'Static routing typically uses less network bandwidth and fewer CPU operations than dynamic routing does.');
add('When configuring a switch to use SSH for virtual terminal connections, what is the purpose of the crypto key generate rsa command?', 'create a public and private key pair');
add('Which information does a switch use to populate the MAC address table?', 'the source MAC address and the incoming port');
add('Refer to the exhibit. A network administrator is configuring a router as a DHCPv6 server. The administrator issues a show ipv6 dhcp pool command to verify the configuration. Which statement explains the reason that the number of active clients is 0?', 'The state is not maintained by the DHCPv6 server under stateless DHCPv6 operation.');
add('Open the PT Activity. Perform the tasks in the activity instructions and then answer the question. What is the problem preventing PC0 and PC1 from communicating with PC2 and PC3?', 'The serial interfaces of the routers are in different subnets.');
add('Which command will create a static route on R2 in order to reach PC B?', 'R1(config)# ip route 172.16.2.0 255.255.255.0 172.16.3.1');
add('Which problem is evident if the show ip interface command shows that the interface is down and the line protocol is down?', 'A cable has not been attached to the port.');
add('Which three values or sets of values are included when creating an extended access control list entry? (Choose three.)', 'access list number between 100 and 199', 'source address and wildcard mask', 'destination address and wildcard mask');
add('A network administrator is designing an ACL. The networks 192.168.1.0/25, 192.168.0.0/25, 192.168.0.128/25, 192.168.1.128/26, and 192.168.1.192/26 are affected by the ACL. Which wildcard mask, if any, is the most efficient to use when specifying all of these networks in a single ACL permit entry?', '0.0.1.255');
add('Which kind of message is sent by a DHCP client when its IP address lease has expired?', 'a DHCPREQUEST unicast message');
add('What happens immediately after two OSPF routers have exchanged hello packets and have formed a neighbor adjacency?', 'They exchange abbreviated lists of their LSDBs');
add('What benefit does NAT64 provide?', 'It allows sites to connect IPv6 hosts to an IPv4 network by translating the IPv6 addresses to IPv4 addresses.');
add('What is the purpose of setting the native VLAN separate from data VLANs?', 'A separate VLAN should be used to carry uncommon untagged frames to avoid bandwidth contention on data VLANs');
add('Which command, when issued in the interface configuration mode of a router, enables the interface to acquire an IPv4 address automatically from an ISP, when that link to the ISP is enabled?', 'ip address dhcp');
add('Which statement is correct about IPv6 routing?', 'IPv6 uses the link-local address of neighbors as the next-hop address for dynamic routes.');
add('A router has used the OSPF protocol to learn a route to the 172.16.32.0/19 network. Which command will implement a backup floating static route to this network?', 'ip route 172.16.32.0 255.255.224.0 S0/0/0 200');
add('Refer to the exhibit. How many broadcast and collision domains exist in the topology?', '5 broadcast domains and 10 collision domains');
add('Which two commands can be used to verify the content and placement of access control lists? (Choose two.)', 'show access-lists', 'show running-config');
add('Which type of traffic would most likely have problems when passing through a NAT device?', 'IPsec');
add('Open the PT Activity. Perform the tasks in the activity instructions and then answer the question. Which keyword is displayed on the web browser?', 'Welldone!');
add('Refer to the exhibit. What summary static address would be configured on R1 to advertise to R3?', '192.168.0.0/22');
add('Fill in the blank. Static routes are configured by the use of the ” ip route” global configuration command.', 'ip route');
add('A network technician has been asked to secure all switches in the campus network. The security requirements are for each switch to automatically learn and add MAC addresses to both the address table and the running configuration. Which port security configuration will meet these requirements?', 'sticky secure MAC addresses');
add('Which three pairs of trunking modes will establish a functional trunk link between two Cisco switches? (Choose three.)', 'dynamic desirable – dynamic auto', 'dynamic desirable – dynamic desirable', 'dynamic desirable – trunk');
add('Fill in the blank. The OSPF Type 1 packet is the __hello___ packet.', 'hello');
add('Which value represents the “trustworthiness” of a route and is used to determine which route to install into the routing table when there are multiple routes toward the same destination?', 'administrative distance');
add('Which type of router memory temporarily stores the running configuration file and ARP table?', 'RAM');
add('Fill in the blank. The default administrative distance for a static route is ', '1');
add('Fill in the blank. Static routes are configured by the use of the global configuration command.', 'ip route');
add('Refer to the exhibit. If the switch reboots and all routers have to re-establish OSPF adjacencies, which routers will become the new DR and BDR?', 'Router R4 will become the DR and router R3 will become the BDR.');
add('What is the purpose of an access list that is created as part of configuring IP address translation?', 'The access list defines the private IP addresses that are to be translated.');
add('The computers used by the network administrators for a school are on the 10.7.0.0/27 network. Which two commands are needed at a minimum to apply an ACL that will ensure that only devices that are used by the network administrators will be allowed Telnet access to the routers? (Choose two.)', 'access-list 5 permit 10.7.0.0 0.0.0.31', 'access-class 5 in');
add('While analyzing log files, a network administrator notices reoccurring native VLAN mismatches. What is the effect of these reoccurring errors?', 'The control and management traffic on the error-occurring trunk port is being misdirected or dropped.');
add('Which two characteristics describe the native VLAN? (Choose two.)', 'The native VLAN provides a common identifier to both ends of a trunk.', 'The native VLAN traffic will be untagged across the trunk link.');
add('Refer to the exhibit. The Branch Router has an OSPF neighbor relationship with the HQ router over the 198.51.0.4/30 network. The 198.51.0.8/30 network link should serve as a backup when the OSPF link goes down. The floating static route command ip route 0.0.0.0 0.0.0.0 S0/1/1 100 was issued on Branch and now traffic is using the backup link even when the OSPF link is up and functioning. Which change should be made to the static route command so that traffic will only use the OSPF link when it is up?', 'Change the administrative distance to 120.');
add('Refer to the exhibit. An attacker on PC X sends a frame with two 802.1Q tags on it, one for VLAN 40 and another for VLAN 12. What will happen to this frame?', 'SW-A will remove both tags and forward the rest of the frame across the trunk link, where SW-B will forward the frame to hosts on VLAN 40.');
add('Which statement is true about the difference between OSPFv2 and OSPFv3?', 'OSPFv3 routers do not need to have matching subnets to form neighbor adjacencies.');
add('What are two ways of turning off DTP on a trunk link between switches? (Choose two.)', 'Configure attached switch ports with the nonegotiate command option.', 'Place the two attached switch ports in access mode.');
add('Why would an administrator use a network security auditing tool to flood the switch MAC address table with fictitious MAC addresses?', 'to determine which ports are not correctly configured to prevent MAC address flooding');
add(' A new network policy requires an ACL to deny HTTP access from all guests to a web server at the main office. All guests use addressing from the IPv6 subnet 2001:DB8:19:C::/64. The web server is configured with the address 2001:DB8:19:A::105/64. Implementing the NoWeb ACL on the interface for the guest LAN requires which three commands? (Choose three.)', 'deny tcp any host 2001:DB8:19:A::105 eq 80', 'permit ipv6 any any', '?');
add('An OSPF router has three directly connected networks; 172.16.0.0/16, 172.16.1.0/16, and 172.16.2.0/16. Which OSPF network command would advertise only the 172.16.1.0 network to neighbors?', 'router(config-router)# network 172.16.1.0 0.0.255.255 area 0');
add('Refer to the exhibit. Which type of route is 172.16.0.0/16?', 'level 1 parent route');
add('Refer to the exhibit. Which type of IPv6 static route is configured in the exhibit?', 'recursive static route');
add('Which subnet mask would be used as the classful mask for the IP address 192.135.250.27?', '255.255.255.0');
add('Which subnet mask would be used as the classful mask for the IP address 128.107.52.27?', '255.255.0.0');
add('Refer to the exhibit. A small business uses VLANs 8, 20, 25, and 30 on two switches that have a trunk link between them. What native VLAN should be used on the trunk if Cisco best practices are being implemented?', '5');
add('The buffers for packet processing and the running configuration file are temporarily stored in which type of router memory?', 'RAM');
add('A network technician is configuring port security on switches. The interfaces on the switches are configured in such a way that when a violation occurs, packets with unknown source address are dropped and no notification is sent. Which violation mode is configured on the interfaces?', 'protect');
add('A standard ACL has been configured on a router to allow only clients from the 10.11.110.0/24 network to telnet or to ssh to the VTY lines of the router. Which command will correctly apply this ACL?', 'access-group 11 in');
add('Refer to the exhibit. What address will summarize the LANs attached to routers 2-A and 3-A and can be configured in a summary static route to advertise them to an upstream neighbor?', '10.0.0.0/21');
add('A security specialist designs an ACL to deny access to a web server from all sales staff. The sales staff are assigned addressing from the IPv6 subnet 2001:db8:48:2c::/64. The web server is assigned the address 2001:db8:48:1c::50/64. Configuring the WebFilter ACL on the LAN interface for the sales staff will require which three commands? (Choose three.)', 'deny tcp host 2001:db8:48:1c::50 any eq 80', 'deny tcp any host 2001:db8:48:1c::50 eq 80', 'deny ipv6 any any');
add('To enable RIP routing for a specific subnet, the configuration command network 192.168.5.64 was entered by the network administrator. What address, if any, appears in the running configuration file to identify this network?', '192.168.5.0');
add('Refer to the exhibit. An ACL preventing FTP and HTTP access to the interval web server from all teaching assistants has been implemented in the Board Office. The address of the web server is 172.20.1.100 and all teaching assistants are assigned addresses in the 172.21.1.0/24 network. After implement the ACL, access to all servers is denied. What is the problem?', 'named ACLs requite the use of port numbers');
add('Refer to the exhibit. Assuming that the routing tables are up to date and no ARP messages are needed, after a packet leaves H1, how many times is the L2 header rewritten in the path to H2?', '2');
add('A router learns of multiple toward the same destination. Which value in a routing table represents the trustworthiness of learned routes and is used by the router to determine which route to install into the routing table for specific situation?', 'Metric');
add('What is the minimum configuration for a router interface that is participating in IPv6 routing', 'To have only a link-local IPv6 address');
add('Which two statements are true about half-duplex and full-duplex communications? (Choose two.)', 'Full duplex offers 100 percent potential use of the bandwidth.', 'Full duplex allows both ends to transmit and receive simultaneously.');
add(' Fill in the blank. The acronym describes the type of traffic that has strict QoS requirements and utilizes a one-way overall delay less than 150 ms across the network. __VoIP__', 'VoIP');
add('Which two commands should be implemented to return a Cisco 3560 trunk port to its default configuration? (Choose two.)', 'S1(config-if)# no switchport trunk allowed vlan', 'S1(config-if)# no switchport trunk native vlan');
add('Which command will enable auto-MDIX on a device?', 'S1(config-if)# mdix auto');
add('What is the effect of issuing the passive-interface default command on a router that is configured for OSPF?', 'It prevents OSPF messages from being sent out any OSPF-enabled interface.');
add('A network administrator is implementing a distance vector routing protocol between neighbors on the network. In the context of distance vector protocols, what is a neighbor?', 'routers that share a link and use the same routing protocol');
add('Refer to the exhibit. A network administrator has just configured address translation and is verifying the configuration. What three things can the administrator verify? (Choose three.', 'Address translation is working.', 'A standard access list numbered 1 was used as part of the configuration process.', 'Two types of NAT are enabled.');
add('Match the router memory type that provides the primary storage for the router feature. (Not all options are used.)', 'full operating system > flash', 'limited operating system > ROM', 'routing table > RAM', 'startup configuration file > NVRAM');
add('Which two methods can be used to provide secure management access to a Cisco switch? (Choose two.)', 'Configure specific ports for management traffic on a specific VLAN', 'Configure SSH for remote management.');
add('Refer to the exhibit. Which highlighted value represents a specific destination network in the routing table?', '10.16.100.128');
add('Refer to the exhibit. If RIPng is enabled, how many hops away does R1 consider the 2001:0DB8:ACAD:1::/64 network to be?', '3');
add('Refer to the exhibit. Host A has sent a packet to host B. What will be the source MAC and IP addresses on the packet when it arrives at host B?', 'Source MAC: 00E0.FE91.7799', 'Source IP: 10.1.1.10');
add('Which network design may be recommended for a small campus site that consists of a single building with a few users?', 'a collapsed core network design');
add('Refer to the exhibit. A small business uses VLANs 2, 3, 4, and 5 between two switches that have a trunk link between them. What native VLAN should be used on the trunk if Cisco best practices are being implemented?', '5');
add('A router learns of multiple routes toward the same destination. Which value in a routing table represents the trustworthiness of learned routes and is used by the router to determine which route to install into the routing table for this specific situation?', 'administrative distance');
add('Which value in a routing table represents trustworthiness and is used by the router to determine which route to install into the routing table when there are multiple routes toward the same destination?', 'administrative distance');
add('The network address 172.18.9.128 with netmask 255.255.255.128 is matched by which wildcard mask?', '0.0.0.127');
add('Which three addresses could be used as the destination address for OSPFv3 messages? (Choose three.)', 'FF02::5', 'FF02::6', 'FE80::1');
add('Refer to the exhibit. What is the OSPF cost to reach the West LAN 172.16.2.0/24 from East?', '65');
//add('Refer to the exhibit. What is the OSPF cost to reach the R2 LAN 172.16.2.0/24 from R1?', '?');
//add('A network administrator is configuring port security on a Cisco switch. The company security policy specifies that when a violation occurs, packets with unknown source addresses should be dropped and no notification should be sent. Which violation mode should be configured on the interfaces?', '?');
add('A network administrator is configuring an ACL with the command access-list 10 permit 172.16.32.0 0.0.15.255. Which IPv4 address matches the ACE?', '172.16.47.254');
//add('What are two reasons that will prevent two routers from forming an OSPFv2 adjacency? (Choose two.)', '?');
//add('Refer to the exhibit. The network administrator needs as many switch ports as possible for end devices and the business is using the most common type of inter-VLAN method. What type of inter-VLAN interconnectivity is best to use between the switch and the router if R1 routes for all VLANs?', '?');
//add('A part of the new security policy, all switches on the network are configured to automatically learn MAC addresses for each port. All running configurations are saved at the start and close of every business day. A severe thunderstorm causes an extended power outage several hours after the close of business. When the switches are brought back online, the dynamically learned MAC addresses are retained. Which port security configuration enabled this?', '?');
//add('Refer to the exhibit. An ACL preventing FTP and HTTP access to the internal web server from all teaching assistants has been implemented in the Board office. The address of the web server is 172.20.1.100 and all teaching assistants are assigned addresses in the 172.21.1.0/24 network. After implementing the ACL, access to all servers is denied. What is the problem?', '?');
add('Refer to the exhibit. A new network policy requires an ACL denying FTP and Telnet access to a Corp file server from all interns. The address of the file server is 172.16.1.15 and all interns are assigned addresses in the 172.18.200.0/24 network. After implementing the ACL, no one in the Corp network can access any of the servers. What is the problem?', 'Inbound ACLs must be routed before they are processed.', 'The ACL is implicitly denying access to all the servers.');
//add('A company security policy requires that all MAC addressing be dynamically learned and added to both the MAC address table and the running configuration on each switch. Which port security configuration will accomplish this?', '?');
add('Router R1 routes traffic to the 10.10.0.0/16 network using an EIGRP learned route from Branch2. The administrator would like to install a floating static route to create a backup route to the 10.10.0.0/16 network in the event that the link between R1 and Branch2 goes down. Which static route meets this goal?', 'ip route 10.10.0.0 255.255.0.0 209.165.200.225 100');
add('Which highlighted value represents a specific destination network in the routing table?', '172.16.100.64');
//add('which type of traffic is designed for a native VLAN?', '?');
add('Which two statements are correct if a configured NTP master on a network cannot reach any clock with a lower stratum number?', 'The NTP master will claim to be synchronized at the configured stratum number.', 'Other systems will be willing to synchronize to that master using NTP.');
add('A network engineer has created a standard ACL to control SSH access to a router. Which command will apply the ACL to the VTY lines?', 'access-class 11 in');
add('A network administrator is configuring a new Cisco switch for remote management access. Which three items must be configured on the switch for the task? (Choose three.)', 'loopback address', 'default VLAN', 'IP address');
add('A network administrator configures a router to provide stateful DHCPv6 operation. However, users report that workstations do not receive IPv6 addresses within the scope. Which configuration command should be checked to ensure that statefull DHCPv6 is implemented?', 'The dns-server line is included in the ipv6 dhcp pool section.');
//add('Which characteristic describes cut-through switching?', '?');
//112
add('Refer to the exhibit. A company has an internal network of 172.16.25.0/24 for their employee workstations and a DMZ network of 172.16.12.0/24 to host servers. The company uses NAT when inside hosts connect to outside network. A network administrator issues the show ip nat translations command to check the NAT configurations. Which one of source IPv4 addresses is translated by R1 with PAT?', '172.16.25.35');

add('Refer to the exhibit. What is the OSPF cost to reach the R2 LAN 172.16.2.0/24 from R1?', '65');
//113
add('A network administrator is configuring port security on a Cisco switch. The company security policy specifies that when a violation occurs, packets with unknown source addresses should be dropped and no notification should be sent. Which violation mode should be configured on the interfaces?', 'restrict');
//115
add('What are two reasons that will prevent two routers from forming an OSPFv2 adjacency? (Choose two.)', 'mismatched OSPF Hello or Dead timers', 'mismatched subnet masks on the link interfaces');
//116
add('Refer to the exhibit. The network administrator needs as many switch ports as possible for end devices and the business is using the most common type of inter-VLAN method. What type of inter-VLAN interconnectivity is best to use between the switch and the router if R1 routes for all VLANs?', 'one link between the switch and the router with the one switch port being configured in access mode');
//117
add('A part of the new security policy, all switches on the network are configured to automatically learn MAC addresses for each port. All running configurations are saved at the start and close of every business day. A severe thunderstorm causes an extended power outage several hours after the close of business. When the switches are brought back online, the dynamically learned MAC addresses are retained. Which port security configuration enabled this?', 'sticky secure MAC addresses');
//118
add('Refer to the exhibit. An ACL preventing FTP and HTTP access to the internal web server from all teaching assistants has been implemented in the Board office. The address of the web server is 172.20.1.100 and all teaching assistants are assigned addresses in the 172.21.1.0/24 network. After implementing the ACL, access to all servers is denied. What is the problem?', 'named ACLs requite the use of port numbers');
//120
add('A company security policy requires that all MAC addressing be dynamically learned and added to both the MAC address table and the running configuration on each switch. Which port security configuration will accomplish this?', 'sticky secure MAC addresses');
//123
add('which type of traffic is designed for a native VLAN?', 'untagged');
//128
add('Which characteristic describes cut-through switching?', 'Error-free fragments are forwarded, so switching accurs with lower latency.');

/*Final exam*/
add('Which communication tool allows real-time collaboration?',
    'instant messaging');
add('A host is accessing a Web server on a remote network. Which three functions are performed by intermediary network devices during this conversation? (Choose three.)',
    'regenerating data signals','applying security settings to control the flow of data','notifying other devices when errors occur');
add('A home user is looking for an ISP connection that provides high speed digital transmission over regular phone lines. What ISP connection type should be used?',
    'DSL');
add('A company is expanding its business to other countries. All branch offices must remain connected to corporate headquarters at all times. Which network technology is required to support this requirement?',
    'WAN');
add('Refer to the exhibit. From which location did this router load the IOS?',
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
add('What is the auto-MDIX feature on a switch',
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
add('A host PC has just booted and is attempting to lease an address through DHCP. Which two messages will the client typically broadcast on the network? (Choose two.)',
    'DHCPDISCOVER','DHCPREQUEST');
add('What is the purpose of the network security accounting function?',
    'to keep track of the actions of a user');
add('When applied to a router, which command would help mitigate brute-force password attacks against the router?',
    'login block-for 60 attempts 5 within 60');
add('A particular website does not appear to be responding on a Windows 7 computer. What command could the technician use to show any cached DNS entries for this web page?',
    'ipconfig /displaydns');
add('When the router prompts for an address or remote host name, what IP address should the administrator enter at the prompt?',
    '192.168.11.252');
add('What two preconfigured settings that affect security are found on most new wireless routers? (Choose two.)',
    'broadcast SSID','default administrator password');
add('Which type of wireless security generates dynamic encryption keys each time a client associates with an AP?',
    'WPA');
add('is a best-effort, connectionless application layer protocol that is used to transfer files.',
    'TFTP');
add('Which two components are necessary for a wireless client to be installed on a WLAN? (Choose two.)',
    'wireless NIC','wireless client software');
add('The prefix-length for the range of addresses is',
    '/60 ');
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
add('Refer to the exhibit. An administrator wants to change the name of a brand new switch, using the hostname command as shown. What prompt will display after the command is issued?',
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
add('Which three IP addresses are private ? (Choose three.)',
    '10.20.30.1','172.30.5.3','192.168.5.5');
add('What types of addresses make up the majority of addresses within the /8 block IPv4 bit space?',
    'public addresses');
add('Refer to the exhibit. What is the maximum TTL value that is used to reach the destination www.cisco.com?',
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
add('Point-to-point communications where both devices can transmit and receive on the medium at the same time are known as',
    'full-duplex');
add('A host is accessing a Telnet server on a remote network. Which three functions are performed by intermediary network devices during this conversation? (Choose three.)',
    'regenerating data signals','applying security settings to control the flow of data','notifying other devices when errors occur');
add('Refer to the exhibit. Which area would most likely be an extranet for the company network that is shown?',
    'area C');
add('What is the purpose of having a converged network?',
    'to reduce the cost of deploying and maintaining the communication infrastructure');
add('Three office workers are using the corporate network. The first employee uses a web browser to view a company web page in order to read some announcements. The second employee accesses the corporate database to perform some financial transactions. The third employee participates in an important live audio conference with other office workers in branch offices. If QoS is implemented on this network, what will be the priorities from highest to lowest of the different data types?',
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
add('Refer to the exhibit. Router R1 has two interfaces that were configured with correct IP addresses and subnet masks. Why does the show ip route command output not display any information about the directly connected networks?',
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
add('During data communications, a host may need to send a single message to a specific group of destination hosts simultaneously. This message is in the form of a message.',
    'Multicast');
add('Open the PT activity. Perform the tasks in the activity instructions and then fill in the blank. The Server0 message is',
    'winner');
add('A PC is configured to obtain an IP address automatically from network 192.168.1.0/24. The network administrator issues the arp –a command and notices an entry of 192.168.1.255 ff-ff-ff-ff-ff-ff. Which statement describes this entry?',
    'This is a static map entry.');
add('Which field in an IPv4 packet header will typically stay the same during its transmission?',
    'Destination Address');
add('Open the PT Activity. Perform the tasks in the activity instructions and then answer the question. Which IPv6 address is assigned to the Serial0/0/0 interface on RT2?',
    '2001:db8:abc:5::1');
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
add('Refer to the exhibit. What is the maximum TTL value that is used to reach the destination www.cisco.com?',
    '13');
add('What field content is used by ICMPv6 to determine that a packet has expired?',
    'Hop Limit field');
add('Which statement is true about variable-length subnet masking?',
    'The size of each subnet may be different, depending on requirements.');
add('Which firewall technique blocks incoming packets unless they are responses to internal requests?',
    'stateful packet inspection');
add('A network technician is investigating network connectivity from a PC to a remote host with the address 10.1.1.5. Which command issued on the PC will return to the technician the complete path to the remote host?',
    'tracert 10.1.1.5');
add('To prevent faulty network devices from carrying dangerous voltage levels, equipment must be correctly',
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
    '10.1.1.128/28','10.1.1.144/28','10.1.1.160/29');
add('How many additional bits should be borrowed from a /26 subnet mask in order to create subnets for WAN links that need only 2 useable addresses?',
    '4');
add('A topology influences the type of network framing and media access control that will be used.',
    'logical');
add('Refer to the exhibit. The administrator configured the access to the console and the vty lines of a router. Which conclusion can be drawn from this configuration??',
    'Because the IOS includes the login command on the vty lines by default, access to the device via Telnet will require authentication.');
add('An administrator issued the service password-encryption command to apply encryption to the passwords configured for enable password, vty, and console lines. What will be the consequences if the administrator later issues the no service password-encryption command?',
    'It will not reverse any encryption.');
add('After making configuration changes, a network administrator issues a copy running-config startup-config command in a Cisco switch. What is the result of issuing this command?',
    'The new configuration will be loaded if the switch is restarted.');
add('What are two features of ARP? (Choose two.',
    'If a host is ready to send a packet to a local destination device and it has the IP address but not the MAC address of the destination, it generates an ARP broadcast.','If a device receiving an ARP request has the destination IPv4 address, it responds with an ARP reply.');
add('What are two examples of the cut-through switching method? (Choose two.)',
    'fast-forward switching','fragment-free switching');
add('A network administrator is enabling services on a newly installed server. Which two statements describe how services are used on a server? (Choose two.)',
    'A port is considered to be open when it has an active server application that is assigned to it.','Server security can be improved by closing ports that are associated with unused services.');
add('Why does a Layer 3 device perform the ANDing process on a destination IP address and subnet mask?',
    'to identify the network address of the destination network');
add('Given the binary address of 11101100 00010001 00001100 00001010, which address does this represent in dotted decimal format?',
    '236.17.12.10');
add('A particular telnet site does not appear to be responding on a Windows 7 computer. What command could the technician use to show any cached DNS entries for this web page?',
    'ipconfig /displaydns');
add('Network devices come in two physical configurations. Devices that have expansion slots that provide the flexibility to add new modules have a configuration.',
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
add('IPv4 multicast addresses are directly mapped to IEEE 802 (Ethernet) MAC addresses using the last of the 28 available bits in the IPv4 multicast group address.',
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
add('A network administrator is upgrading a small business network to give high priority to real-time applications traffic. What two types of network services is the network administrator trying to accommodate? (Choose two.)',
    'voice','video');



/*Prompts for matching questions and Packet Tracer Labs*/
add = prompts.add;

/*
 * template:
 * add('helper label');
 */
