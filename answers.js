/*Answers to multiple choice and fill-in-the-blank questions*/
var add = tests.add;

/*
 * template:
 * add(question, answer0 [, answer1, ...]);
 */

//TEST6
add('What are two advantages of static routing over dynamic routing? (Choose two.)', 'Static routing is more secure because it does not advertise over the network.', ' Static routing uses fewer router resources than dynamic routing.');
add('Refer to the exhibit. Which is the best way for PC A and PC B to successfully communicate with sites on the Internet?', 'Configure a default route from R1 to ISP and a static route from ISP to R1.');
add('Refer to the exhibit. The small company shown uses static routing. Users on the R2 LAN have reported a problem with connectivity. What is the issue?', ' R1 needs a static route to the R2 LAN.');
add('Refer to the exhibit. The network engineer for the company that is shown wants to use the primary ISP connection for all external connectivity. The backup ISP connection is used only if the primary ISP connection fails. Which set of commands would accomplish this goal?', 'ip route 0.0.0.0 0.0.0.0 s0/0/0\n ip route 0.0.0.0 0.0.0.0 s0/1/0 10');
add('What type of route allows a router to forward packets even though its routing table contains no specific route to the destination network?', ' default route');
add('Refer to the graphic. Which command would be used on router A to configure a static route to direct traffic from LAN A that is destined for LAN C?', ' A(config)# ip route 192.168.4.0 255.255.255.0 192.168.3.2');
add('The network administrator configures the router with the ip route 172.16.1.0 255.255.255.0 172.16.2.2 command. How will this route appear in the routing table?', ' S 172.16.1.0 [1/0] via 172.16.2.2');
add('Refer to the exhibit. The network administrator needs to configure a default route on the Border router. Which command would the administrator use to configure a default route that will require the least amount of router processing when forwarding packets?', 'Border(config)# ip route 0.0.0.0 0.0.0.0 s0/0/1');
add(' Why would a floating static route be configured with an administrative distance that is higher than the administrative distance of a dynamic routing protocol that is running on the same router?', ' to be used as a backup route');
add(' Refer to the exhibit. What command would be used to configure a static route on R1 so that traffic from both LANs can reach the 2001:db8:1:4::/64 remote network?', ' ipv6 route 2001:db8:1:4::/64 2001:db8:1:3::2');
add(' Refer to the exhibit. Which default static route command would allow R1 to potentially reach all unknown networks on the Internet?', ' R1(config)# ipv6 route ::/0 G0/1 fe80::2');
add(' Which two statements describe classful IP addresses? (Choose two.)', 'All subnets in a network are the same size.', ' The number of bits used to identify the hosts is fixed by the class of the network.');
add(' A company has several networks with the following IP address requirements:  IP phones – 50  PCs – 70 IP cameras – 10  wireless access points – 10   network printers – 10   network scanners – 2 Which block of addresses would be the minimum to accommodate all of these devices if each type of device was on its own network?', ' 172.16.0.0/24');
add(' What does VLSM allow a network administrator to do?', ' utilize multiple different subnet masks in the same IP address space');
add(' What would be the best summary route for the following networks?  10.50.168.0/23  10.50.170.0/23  10.50.172.0/23  10.50.174.0/24', '10.50.168.0/21');
add(' What is a valid summary route for IPv6 networks 2001:0DB8:ACAD:4::/64, 2001:0DB8:ACAD:5::/64, 2001:0DB8:ACAD:6::/64, and 2001:0DB8:ACAD:7::/64?', ' 2001:0DB8:ACAD:0004::/62');
add(' Which type of static route that is configured on a router uses only the exit interface?', 'directly connected static route');
add(' Which three IOS troubleshooting commands can help to isolate problems with a static route? (Choose three.)', 'show ip route', ' show ip interface brief', ' ping');
add(' Refer to the exhibit. What two commands will change the next-hop address for the 10.0.0.0/8 network from 172.16.40.2 to 192.168.1.2? (Choose two.)', 'A(config)# ip route 10.0.0.0 255.0.0.0 192.168.1.2', ' A(config)# no ip route 10.0.0.0 255.0.0.0 172.16.40.2');
add('  What happens to a static route entry in a routing table when the outgoing interface is not available?', ' The route is removed from the table.');
add('Launch PT  Hide and Save PT  Open the PT activity. Perform the tasks in the activity instructions and then answer the question. What is the name of the web server that is displayed in the webpage?', 'Webserver10');
add('Launch PT Hide and Save PT  Open the PT Activity. Perform the tasks in the activity instructions and then answer the question. What IPv6 static route can be configured on router R1 to make a fully converged network?', 'ipv6 route 2001:db8:10:12::/64 S0/0/1');
add('23. Consider the following command: ip route 192.168.10.0 255.255.255.0 10.10.10.2 5 How would an administrator test this configuration?', 'Manually shut down the router interface used as a primary route.');
add('24. What would be the first step in calculating a summarized route for 5 networks?', 'Write all network numbers in binary.');
add('25. What two pieces of information are needed in a fully specified static route to eliminate recursive lookups? (Choose two.)', 'the interface ID exit interface', 'the IP address of the next-hop neighbor');
add('26. Refer to the exhibit. What routing solution will allow both PC A and PC B to access the Internet with the minimum amount of router CPU and network bandwidth utilization?', 'Configure a static default route from R1 to Edge, a default route from Edge to the Internet, and a static route from Edge to R1.');
add('27. What is the correct syntax of a floating static route?', 'ip route 209.165.200.228 255.255.255.248 10.0.0.1 120');
add('28. What happens to a static route entry in a routing table when the outgoing interface associated with that route goes into the down state?', 'The static route is removed from the routing table.');
add('R1 receives a packet destined for the IP address 192.168.2.10. Out which interface will R1 forward the packet?', ' Serial0/0/0');

//TEST7
add(' What is the purpose of the passive-interface command?', ' allows a router to receive routing updates on an interface but not send updates via that interface');
add(' What two tasks do dynamic routing protocols perform? (Choose two.)', ' network discovery', ' update and maintain routing tables');
add(' Fill in the blank. Do not abbreviate the answer.  The command   “version 2”   is used in RIP router configuration mode to enable the sending of subnet masks with the routing updates.', 'version 2');
add(' Refer to the exhibit. OSPF is used in the network. Which path will be chosen by OSPF to send data packets from Net A to Net B?', 'R1, R3, R5, R7');
add(' Which two statements are true regarding classless routing protocols? (Choose two.)', ' allows for use of both 192.168.1.0/30 and 192.168.1.16/28 subnets in the same topology', ' sends subnet mask information in routing updates');
add(' What two actions result from entering the network 192.168.1.0 command in RIP configuration mode on a router? (Choose two.)', ' Routing updates are sent through all the interfaces belonging to 192.168.1.0.', ' The network address 192.168.1.0 is advertised to the neighbor routers.');
add(' Refer to the exhibit. Based on the partial output from the show ip route command, what two facts can be determined about the RIP routing protocol? (Choose two.)', 'The command no auto-summary has been used on the RIP neighbor router.');
add(' In the context of routing protocols, what is a definition for time to convergence?', ' the amount of time for the routing tables to achieve a consistent state after a topology change');
add(' Fill in the blank. Do not abbreviate.  When configuring RIPng, the ” default-information originate ” command instructs the router to propagate a static default route.​', 'default-information originate');
add(' A destination route in the routing table is indicated with a code D. Which kind of route entry is this?', 'a route dynamically learned through the EIGRP routing protocol');
add(' Refer to the exhibit. Which interface will be the exit interface to forward a data packet with the destination IP address 172.16.0.66?', ' Serial0/0/1');
add(' Which route is the best match for a packet entering a router with a destination address of 10.16.0.2?', ' S 10.16.0.0/24 [1/0] via 192.168.0.9');
add(' Which two requirements are necessary before a router configured with a link-state routing protocol can build and send its link-state packets? (Choose two.)', 'The router has determined the costs associated with its active links.', ' The router has established its adjacencies.');
add(' Which two requirements are used to determine if a route can be considered as an ultimate route in a router’s routing table? (Choose two.)', 'contain a next-hop IP address', ' contain an exit interface');
add(' What is different between IPv6 routing table entries compared to IPv4 routing table entries?', 'By design IPv6 is classless so all routes are effectively level 1 ultimate routes.');
add(' Which dynamic routing protocol was developed as an exterior gateway protocol to interconnect different Internet providers?', 'BGP');
add(' Which route will a router use to forward an IPv4 packet after examining its routing table for the best match with the destination address?', ' a level 1 ultimate route');
add(' Which two statements describe the OSPF routing protocol? (Choose two.)', ' calculates its metric using bandwidth', ' uses Dijkstra’s algorithm to build the SPF tree');
add(' Which two events will trigger the sending of a link-state packet by a link-state routing protocol? (Choose two.)', ' a change in the topology', ' the initial startup of the routing protocol process');
add('Refer to the exhibit. A network administrator has issued the exhibited commands in an attempt to activate RIPng on interface gig0/0. What is causing the console message that is shown after RIP is enabled?', 'IPv6 unicast routing has not been enabled on this router.');
add('24. Which type of route will require a router to perform a recursive lookup?', ' an ultimate route that is using a next hop IP address on a router that is not using CEF');
add('25. After a network topology change occurs, which distance vector routing protocol can send an update message directly to a single neighboring router without unnecessarily notifying other routers?', 'EIGRP');
add('26. An OSPF enabled router is processing learned routes to select best paths to reach a destination network. What is the OSPF algorithm evaluating as the metric?', ' The cumulative bandwidth that is used along the routing path.');
add('27. What is a disadvantage of using dynamic routing protocols?', ' They send messages about network status insecurely across networks by default.');
add('28. While configuring RIPv2 on an enterprise network, an engineer enters the command network 192.168.10.0 into router configuration mode. What is the result of entering this command?', ' The interface of the 192.168.10.0 network is sending only version 2 updates.');
add('29. Which routing protocol uses link-state information to build a map of the topology for computing the best path to each destination network?', 'OSPF');
add('30. A router is configured to participate in multiple routing protocol: RIP, EIGRP, and OSPF. The router must send a packet to network 192.168.14.0. Which route will be used to forward the traffic?', 'a 192.168.14.0 /26 route that is learned via RIP');
add('31. When does a link-state router send LSPs to its neighbors?', ' immediately after receiving an LSP from neighbors with updates');

/*Prompts for matching questions and Packet Tracer Labs*/
add = prompts.add;

/*
 * template:
 * add('helper label');
 */
