/*Answers to multiple choice and fill-in-the-blank questions*/
var add = tests.add;

/*
 template:
 add(question, answer0 [, answer1, ...]);
 */
/*TEST 6*/
add('What are two advantages of static routing over dynamic routing? Choose two.', 'Static routing is more secure because it does not advertise over the network.', 'Static routing uses fewer router resources than dynamic routing.');
add('Refer to the exhibit. Which is the best way for PC A and PC B to successfully communicate with sites on the Internet?', 'Configure a default route from R1 to ISP and a static route from ISP to R1.');
add('Refer to the exhibit. The small company shown uses static routing. Users on the R2 LAN have reported a problem with connectivity. What is the issue?', 'R1 needs a static route to the R2 LAN.');
add('Refer to the exhibit. The network engineer for the company that is shown wants to use the primary ISP connection for all external connectivity. The backup ISP connection is used only if the primary ISP connection fails. Which set of commands would accomplish this goal?', 'ip route 0.0.0.0 0.0.0.0 s0/1/0 10 ');
add('What type of route allows a router to forward packets even though its routing table contains no specific route to the destination network?', 'default route');
add('Refer to the graphic. Which command would be used on router A to configure a static route to direct traffic from LAN A that is destined for LAN C?', 'Aconfig# ip route 192.168.4.0 255.255.255.0 192.168.3.2');
add('The network administrator configures the router with the ip route 172.16.1.0 255.255.255.0 172.16.2.2 command. How will this route appear in the routing table?', 'S 172.16.1.0 [1/0] via 172.16.2.2');
add('Refer to the exhibit. The network administrator needs to configure a default route on the Border router. Which command would the administrator use to configure a default route that will require the least amount of router processing when forwarding packets?', 'Borderconfig# ip route 0.0.0.0 0.0.0.0 s0/0/1');
add('Why would a floating static route be configured with an administrative distance that is higher than the administrative distance of a dynamic routing protocol that is running on the same router?', 'to be used as a backup route');
add('Refer to the exhibit. What command would be used to configure a static route on R1 so that traffic from both LANs can reach the 2001:db8:1:4::/64 remote network?', 'ipv6 route 2001:db8:1:4::/64 2001:db8:1:3::2');
add('Refer to the exhibit. Which default static route command would allow R1 to potentially reach all unknown networks on the Internet?', 'R1config# ipv6 route ::/0 G0/1 fe80::2');
add('Which two statements describe classful IP addresses? Choose two.', 'All subnets in a network are the same size.', 'The number of bits used to identify the hosts is fixed by the class of the network.');
add('Which block of addresses would be the minimum to accommodate all of these devices if each type of device was on its own network?', '172.16.0.0/24');
add('What does VLSM allow a network administrator to do?', 'utilize multiple different subnet masks in the same IP address space');
add('What would be the best summary route for the following networks?', '10.50.168.0/21');
add('What is a valid summary route for IPv6 networks 2001:0DB8:ACAD:4::/64, 2001:0DB8:ACAD:5::/64, 2001:0DB8:ACAD:6::/64, and 2001:0DB8:ACAD:7::/64?', '2001:0DB8:ACAD:0004::/62');
add('Which type of static route that is configured on a router uses only the exit interface?', 'directly connected static route');
add('Which three IOS troubleshooting commands can help to isolate problems with a static route? Choose three.', 'show ip route', 'show ip interface brief', 'ping');
add('Refer to the exhibit. What two commands will change the next-hop address for the 10.0.0.0/8 network from 172.16.40.2 to 192.168.1.2? Choose two.', 'Aconfig# ip route 10.0.0.0 255.0.0.0 192.168.1.2', 'Aconfig# no ip route 10.0.0.0 255.0.0.0 172.16.40.2');
add('What happens to a static route entry in a routing table when the outgoing interface is not available?', 'The route is removed from the table.');
add('Open the PT activity. Perform the tasks in the activity instructions and then answer the question. What is the name of the web server that is displayed in the webpage?', 'Webserver10');
add('What IPv6 static route can be configured on router R1 to make a fully converged network?', 'ipv6 route 2001:db8:10:12::/64 S0/0/1');
add('How would an administrator test this configuration?', 'Manually shut down the router interface used as a primary route.');
add('What would be the first step in calculating a summarized route for 5 networks?', 'Write all network numbers in binary.');
add('25.What two pieces of information are needed in a fully specified static route to eliminate recursive lookups? Choose two.', 'the interface ID exit interface', 'the IP address of the next-hop neighbor');
add('26.Refer to the exhibit. What routing solution will allow both PC A and PC B to access the Internet with the minimum amount of router CPU and network bandwidth utilization?', 'Configure a static default route from R1 to Edge, a default route from Edge to the Internet, and a static route from Edge to R1.');
add('27.What is the correct syntax of a floating static route?', 'ip route 209.165.200.228 255.255.255.248 10.0.0.1 120');
add('28. What happens to a static route entry in a routing table when the outgoing interface associated with that route goes into the down state?', 'The static route is removed from the routing table.');
add('R1 receives a packet destined for the IP address 192.168.2.10. Out which interface will R1 forward the packet?', 'Serial0/0/1');

//TEST 7

add('What is the purpose of the passive-interface command?', 'allows a router to receive routing updates on an interface but not send updates via that interface');
add('What two tasks do dynamic routing protocols perform? Choose two.', 'network discovery', 'update and maintain routing tables');
add('Refer to the exhibit. OSPF is used in the network. Which path will be chosen by OSPF to send data packets from Net A to Net B?', 'R1, R3, R5, R7');
add('Which two statements are true regarding classless routing protocols? Choose two.', 'allows for use of both 192.168.1.0/30 and 192.168.1.16/28 subnets in the same topology', 'sends subnet mask information in routing updates');
add('What two actions result from entering the network 192.168.1.0 command in RIP configuration mode on a router? Choose two.', 'Routing updates are sent through all the interfaces belonging to 192.168.1.0.', 'The network address 192.168.1.0 is advertised to the neighbor routers.');
add('Refer to the exhibit. Based on the partial output from the show ip route command, what two facts can be determined about the RIP routing protocol? Choose two.', 'The command no auto-summary has been used on the RIP neighbor router.', 'RIP version 2 is running on this router and its RIP neighbor.');
add('In the context of routing protocols, what is a definition for time to convergence?', 'the amount of time for the routing tables to achieve a consistent state after a topology change');
add('A destination route in the routing table is indicated with a code D. Which kind of route entry is this?', 'a route dynamically learned through the EIGRP routing protocol');
add('Refer to the exhibit. Which interface will be the exit interface to forward a data packet with the destination IP address 172.16.0.66?', 'Serial0/0/1');
add('Which route is the best match for a packet entering a router with a destination address of 10.16.0.2?', 'S 10.16.0.0/24 [1/0] via 192.168.0.9');
add('Which two requirements are necessary before a router configured with a link-state routing protocol can build and send its link-state packets? Choose two.', 'The router has determined the costs associated with its active links.', 'The router has established its adjacencies.');
add('Which two requirements are used to determine if a route can be considered as an ultimate route in a router’s routing table? Choose two.', 'contain a next-hop IP address', 'contain an exit interface');
add('What is different between IPv6 routing table entries compared to IPv4 routing table entries?', 'By design IPv6 is classless so all routes are effectively level 1 ultimate routes.');
add('Which dynamic routing protocol was developed as an exterior gateway protocol to interconnect different Internet providers?', 'BGP');
add('Which route will a router use to forward an IPv4 packet after examining its routing table for the best match with the destination address?', 'a level 1 ultimate route');
add('Which two statements describe the OSPF routing protocol? Choose two.', 'calculates its metric using bandwidth', 'uses Dijkstra’s algorithm to build the SPF tree');
add('Which two events will trigger the sending of a link-state packet by a link-state routing protocol? Choose two.', 'a change in the topology', 'the initial startup of the routing protocol process');
add('Refer to the exhibit. A network administrator has issued the exhibited commands in an attempt to activate RIPng on interface gig0/0. What is causing the console message that is shown after RIP is enabled?', 'IPv6 unicast routing has not been enabled on this router.');
add('24. Which type of route will require a router to perform a recursive lookup?', 'an ultimate route that is using a next hop IP address on a router that is not using CEF');
add('25. After a network topology change occurs, which distance vector routing protocol can send an update message directly to a single neighboring router without unnecessarily notifying other routers?', 'EIGRP');
add('26.An OSPF enabled router is processing learned routes to select best paths to reach a destination network. What is the OSPF algorithm evaluating as the metric?', 'The cumulative bandwidth that is used along the routing path.');
add('27. What is a disadvantage of using dynamic routing protocols?', 'They send messages about network status insecurely across networks by default.');
add('28. While configuring RIPv2 on an enterprise network, an engineer enters the command network 192.168.10.0 into router configuration mode.What is the result of entering this command?', 'The interface of the 192.168.10.0 network is sending only version 2 updates.');
add('29.Which routing protocol uses link-state information to build a map of the topology for computing the best path to each destination network?', 'OSPF');
add('30. A router is configured to participate in multiple routing protocol: RIP, EIGRP, and OSPF. The router must send a packet to network 192.168.14.0. Which route will be used to forward the traffic?', 'a 192.168.14.0 /26 route that is learned via RIP');
add('31. When does a link-state router send LSPs to its neighbors?', 'immediately after receiving an LSP from neighbors with updates');
add('The command version 2 is used in RIP router configuration mode to enable the sending of subnet masks with the routing updates.', 'version 2');

//TEST 8

add('Which OSPF component is identical in all routers in an OSPF area after convergence?', 'link-state database');
add('Which three statements describe features of the OSPF topology table? Choose three.', 'When converged, all routers in an area have identical topology tables.', 'It is a link-state database that represents the network topology.', 'The table can be viewed via the show ip ospf database command.');
add('A router is participating in an OPSFv2 domain. What will always happen if the dead interval expires before the router receives a hello packet from an adjacent DROTHER OPSF router?', 'OSPF will remove that neighbor from the router link-state database.');
add('Which command will provide information specific to OSPFv3 routes in the routing table?', 'show ipv6 route ospf');
add('Which wildcard mask would be used to advertise the 192.168.5.96/27 network as part of an OSPF configuration?', '0.0.0.31');
add('A network administrator enters the command ipv6 router ospf 64 in global configuration mode. What is the result of this command?', 'The OSPFv3 process will be assigned an ID of 64.');
add('The election of a DR and a BDR takes place on multiaccess networks, such as Ethernet networks.', 'multiaccess');
add('OSPF uses cost as a metric', 'cost');
add('Which command should be used to check the OSPF process ID, the router ID, networks the router is advertising, the neighbors the router is receiving updates from, and the default administrative distance?', 'show ip protocols');
add('Which OSPFv3 function works differently from OSPFv2?', 'authentication');
add('What message is displayed on www.ciscoville.com?', 'Completion!');
add('To quickly verify OSPFv3 configuration information including the OSPF process ID, the router ID, and the interfaces enabled for OSPFv3, you need to issue the command', 'show ipv6 protocols');
add('Which three statements describe the similarities between OSPFv2 and OSPFv3? Choose three.', 'They both use the same DR/BDR election process.', 'They both share the concept of multiple areas.', 'They both are link-state protocols.');
add('What is a function of OSPF hello packets?', 'to discover neighbors and build adjacencies between them');
add('What are the two purposes of an OSPF router ID? Choose two.', 'to uniquely identify the router within the OSPF domain', 'to facilitate router participation in the election of the designated router');
add('Which command will verify that a router that is running OSPFv3 has formed an adjacency with other routers in its OSPF area?', 'show ipv6 ospf neighbor');
add('Single area OSPFv3 has been enabled on a router via the ipv6 router ospf 20 command. Which command will enable this OSPFv3 process on an interface of that router?', 'ipv6 ospf 20 area 0');
add('When a network engineer is configuring OSPFv3 on a router, which command would the engineer issue immediately before configuring the router ID?', 'ipv6 router ospf 10');
add('Which criterion is preferred by the router to choose a router ID?', 'the router-id rid command');
add('Which OPSF packet contains the different types of link-state advertisements?', 'LSU');
add('What does a Cisco router use automatically to create link-local addresses on serial interfaces when OSPFv3 is implemented?', 'an Ethernet interface MAC address available on the router, the FE80::/10 prefix, and the EUI-64 process');
add('25.A router is participating in an OSPFv2 domain. What will always happen if the dead interval expires before the router receives a hello packet from an adjacent DROTHER OSPF router?', 'OSPF will remove that neighbor from the router link-state database.');
add('26.What is the first criterion used by OSPF routers to elect a DR?', 'Highest priority');
add('27.Which OSPFv3 function works differently from OSPFv2?', 'authentication');
add('What is used to create the OSPF neighbor table?', 'adjacency database ');
add('What are two reasons that will prevent routers from forming an OSPFv2 adjacency? Choose two.', 'mismatched subnet masks on the link interfaces ', 'mismatched OSPF Hello or Dead timers ');
add('What command would be issued to determine if a routing protocol-initiated relationship has been made with an adjacent router?', 'show ip ospf neighbor ');
add('Which three addresses could be used as the destination address for OSPFv3 messages? Choose three.', 'FF02::5 ', 'FE80::1 ', 'FF02::6 ');
add('Refer to the exhibit. A network administrator issued the command show ip ospf interface on the router R2. What conclusion can be drawn?', 'R2 has not formed an adjacency with any other router ');
add('33.What command would be used to determine if a routing protocol-initiated relationship had been made with an adjacent router?', 'show ip ospf neighbor');
add('What are two reasons that will prevent two routers from forming an OSPFv2 adjacency?', 'mismatched OSPF Hello or Dead timers', 'mismatched subnet masks on the link interfaces');

/* TEST 5 */
add('A network engineer is troubleshooting the configuration of new VLANs on a network. ​Which command is used to display the list of VLANs that exists on the switch? show vlan',
    'show vlan');
add('What is a disadvantage of using multilayer switches for inter-VLAN routing?',
    'Multilayer switches are more expensive than router-on-a-stick implementations.');
add('Refer to the exhibit. A router-on-a-stick configuration was implemented for VLANs 15, 30, and 45, according to the show running-config command output. PCs on VLAN 45 that are using the 172.16.45.0 /24 network are having trouble connecting to PCs on VLAN 30 in the 172.16.30.0 /24 network. Which error is most likely causing this problem?​',
    'There is an incorrect IP address configured on GigabitEthernet 0/0.30.');
add('Refer to the exhibit. A network administrator has configured router CiscoVille with the above commands to provide inter-VLAN routing. What command will be required on a switch that is connected to the Gi0/0 interface on router CiscoVille to allow inter-VLAN routing?​',
    'switchport mode trunk');
add('Refer to the exhibit. The switch does the routing for the hosts that connect to VLAN 5. If the PC accesses a web server from the Internet, at what point will a VLAN number be added to the frame?',
    'No VLAN number is added to the frame in this design.');
add('Inter-VLAN communication is not occurring in a particular building of a school. Which two commands could the network administrator use to verify that inter-VLAN communication was working properly between a router and a Layer 2 switch when the router-on-a-stick design method is implemented? (Choose two.)',
    'From the switch, issue the show interface trunk command.','From the router, issue the show ip route command.');
add('Refer to the exhibit. Router RA receives a packet with a source address of 192.168.1.35 and a destination address of 192.168.1.85. What will the router do with this packet?',
    'The router will forward the packet out interface FastEthernet 0/1.2.');
add('What condition is required to enable Layer 3 switching?',
    'The Layer 3 switch must have IP routing enabled.');
add('Which type of inter-VLAN communication design requires the configuration of multiple subinterfaces?',
    'router on a stick');
add('Refer to the exhibit. A network administrator is configuring RT1 for inter-VLAN routing. The switch is configured correctly and is functional. Host1, Host2, and Host3 cannot communicate with each other. Based on the router configuration, what is causing the problem?',
    'IP addresses on the subinterfaces are incorrectly matched to the VLANs.');
add('How is traffic routed between multiple VLANs on a multilayer switch?',
    'Traffic is routed via internal VLAN interfaces.');
add('Refer to the exhibit. Communication between the VLANs is not occurring. What could be the issue?',
    'The Gi1/1 switch port is not in trunking mode.');
add('What is a disadvantage of using router-on-a-stick inter-VLAN routing?',
    'does not scale well beyond 50 VLANs');
add('Which statement describes a disadvantage of using router subinterfaces for inter-VLAN routing?',
    'Routed traffic must contend for bandwidth on a single router interface.');
add('While configuring inter-VLAN routing on a multilayer switch, a/an is used as a virtual-routed VLAN interface.',
    'SVI');
add('Refer to the exhibit. A network administrator is verifying the configuration of inter-VLAN routing. Users complain that PC2 cannot communicate with PC1. Based on the output, what is the possible cause of the problem?',
    'The encapsulation dot1Q 5 command contains the wrong VLAN.');
add('Refer to the exhibit. A network administrator is verifying the configuration of inter-VLAN routing. Users complain that PCs on different VLANs cannot communicate. Based on the output, what are two configuration errors on switch interface Gi1/1? (Choose two.)',
    'Gi1/1 is configured as trunk mode.','Gi1/1 is in the default VLAN.');
add('While configuring inter-VLAN routing on a multilayer switch, a network administrator issues the no switchport command on an interface that is connected to another switch. What is the purpose of this command?',
    'to create a routed port for a single network');
add('Which command is missing on the Layer 3 switch to restore the full connectivity between PC1 and the web server?',
    'ip address 192.168.20.1 255.255.255.0 ');
add('A small college uses VLAN 10 for the classroom network and VLAN 20 for the office network. What is needed to enable communication between these two VLANs while using legacy inter-VLAN routing?',
    'A router with at least two LAN interfaces should be used.');
add('Refer to the exhibit. After attempting to enter the configuration that is shown in router RTA, an administrator receives an error and users on VLAN 20 report that they are unable to reach users on VLAN 30. What is causing the problem?',
    'RTA is using the same subnet for VLAN 20 and VLAN 30.');
add('Refer to the exhibit. A network administrator needs to configure router-on-a-stick for the networks that are shown. How many subinterfaces will have to be created on the router if each VLAN that is shown is to be routed and each VLAN has its own subinterface?',
    '4');
add('Refer to the exhibit. Which command can the administrator issue to change the VLAN10 status to up?​',
    'Switch1(config)# vlan 10');
add('How are IP addressing designs affected by VLAN implementations?',
    'Each VLAN must have a different network number.');
add('What is a characteristic of a routed port on a Layer 3 switch?',
    'It is not assigned to a VLAN.');
add('An administrator is attempting to configure a static route on a Cisco 2960 series switch. After the administrator types the command ip route 0.0.0.0 0.0.0.0 10.1.1.1, an error message appears stating that the command is not recognized. What must the administrator do so that this command is accepted?',
    'Enter the command sdm prefer lanbase-routing and reload.');
add('Refer to the exhibit. In this network design, which connection or connections if any, add the VLAN ID number if host H1 sends information to host H2?',
    'no link');
add('What is a characteristic of legacy inter-VLAN routing?',
    'The router requires one Ethernet link for each VLAN.');
add('In what switch mode should port G0/1 be assigned if Cisco best practices are being used?',
    'trunk');
add('What is the problem with this configuration, based on the output of the router?',
    'The encapsulation has not been configured on the subinterface.');
add('A network administrator is verifying the configuration of inter-VLAN routing. Based on the partial output that is displayed by the use of the show vlan command, which conclusion can be drawn for the Gi1/1 interface?',
    'It is configured as trunk mode.');

/*Prompts for matching questions and Packet Tracer Labs*/
add = prompts.add;

/*
 template:
 add('helper label');
 */

add('Distance vector');
add('RIOv2 EIGRP');
add('Link state');
add('OSPF IS-IS');

add('static routing');
add('[+] typically used on stub networks');
add('[+] less routing overhead');

add('dynamic routing');
add('[#] new networks are added automatically to the routing table');
add('[#] best choice for large networks');

add('Advantage');
add('[+] event-driven updates ');
add('[+] building a topological map ');
add('[+] fast convergence');
add('Disadvantage');
add('[#] bandwidth consumption');
add('[#] memory usage ');
add('[#] CPU processing time');

add('Third precedence -> Loopback interface address 10.1.1.1');
add('Fourth precedence -> Serial interface address 192.168.10.1');
add('First precedence -> Configured router ID 1.1.1.1');
add('Second precedence -> loopback interface IP address 172.16.1.1');

add('This is where the details of the neighboring routers can be found. -> adjacency database');
add('This is the algorithm used by OSPF.  -> Shortest Path First');
add('All the routers are in the backbone area.  -> Single-area OSPF');
add('This is where you can find the topology table.  -> link-state database');

add('Neighbor ID of 3.3.3.3 -> show ip ospf neighbor');
add('Routing Process “ospf 10” with ID 1.1.1.1 -> show ip ospf');
add('Routing Protocol is “ospf 10”  -> show ip protocols');
add('BW 1544 Kbit/sec -> show interface serial 0/0/0');

add('second state  -> Init state');
add('seventh state  -> Full state');
add('fifth state  ->  Exchange state');
add('first state  ->  Down state');
add('fourth state  ->  Exstart state');
add('third state  ->  Two-way state');
add('sixth state  ->  Loading state');

//Test 5

add('router-on-a-stick -> creation of subinterfaces');
add('Layer 3 with SVIs -> routing at wire speeds');
add('cut-throught:');
add('+appropriate for high perfomance computing applications');
add('+forwarding process can be begin after receiving the destination address');
add('+may forward invalid frames');
