/*Answers to multiple choice and fill-in-the-blank questions*/
var add = tests.add;

/*
 * template:
 * add(question, answer0 [, answer1, ...]);
 */

// CCNA3 Scaling Networks v6.0 Final Exam Option A
add('What is the term that is used for the area of a network that is affected when a device or network service experiences problems?',
    'failure domain');
add('A network designer is considering whether to implement a switch block on the company network. What is the primary advantage of deploying a switch block?',
    'The failure of a switch block will not impact all end users.');
add('What is the function of STP in a scalable network?',
    'It disables redundant paths to eliminate Layer 2 loops.');
add('What term is used to express the thickness or height of a switch?',
    'rack unit');
add('What are two requirements when using out-of-band configuration of a Cisco IOS network device? (Choose two.)',
    'a terminal emulation client',
    'a direct connection to the console or AUX port');
add('Which configuration changes will increment the configuration revision number on the VTP server?',
    'configuring or deleting a VLAN or creating a VLAN name');
add('What are three characteristics of VTP? (Choose three.)',
    'In the default VTP mode, VLANs can be created and modified on a switch.',
    'Switches in VTP server mode store VLANs in the vlan.dat database.',
    'VTP updates are exchanged across trunk links only.');
add('A network administrator is planning to add a new switch to the network. What should the network administrator do to ensure the new switch exchanges VTP information with the other switches in the VTP domain?',
    'Configure the correct VTP domain name and password on the new switch.');
add('What is the purpose of the vlan.dat file on a switch?',
    'It holds the VLAN database.');
add('The configuration shows commands entered by a network administrator for inter-VLAN routing. However, host H1 cannot communicate with H2. Which part of the inter-VLAN configuration causes the problem?',
    'VLAN configuration');
add('The network administrator configures both switches as displayed. However, host C is unable to ping host D and host E is unable to ping host F. What action should the administrator take to enable this communication?',
    'Configure either trunk port in the dynamic desirable mode.');
add('Switch SW-A is to be used as a temporary replacement for another switch in the VTP Student domain. What two pieces of information are indicated from the exhibited output? (Choose two.)',
    'There is a risk that the switch may cause incorrect VLAN information to be sent through the domain.',
    'This switch will update its VLAN configuration when VLAN changes are made on a VTP server in the same domain.');
add('What eliminates switching loops?',
    'Spanning Tree Protocol');
add('A small company network has six interconnected Layer 2 switches. Currently all switches are using the default bridge priority value. Which value can be used to configure the bridge priority of one of the switches to ensure that it becomes the root bridge in this design?',
    '28672');
add('What is the value used to determine which port on a non-root bridge will become a root port in a STP network?',
    'the path cost');
add('Which switch will be elected the root bridge and which switch will place a port in blocking mode? (Choose two.)',
    'SW4 will get a port blocked.',
    'SW3 will become the root bridge.');
add('Which three STP states were replaced with the RSTP discarding state? (Choose three.)',
    'listening',
    'blocking',
    'disabled');
add('A network administrator enters the spanning-tree portfast bpduguard default command. What is the result of this command being issued on a Cisco switch?',
    'Any switch port that has been configured with PortFast will be error-disabled if it receives a BPDU.');
add('As the network administrator you have been asked to implement EtherChannel on the corporate network. What does this configuration consist of?',
    'grouping multiple physical ports to increase bandwidth between two switches');
add('Which command will start the process to bundle two physical interfaces to create an EtherChannel group via LACP?',
    'interface range GigabitEthernet 0/4 – 5');
add('A network administrator configured an EtherChannel link with three interfaces between two switches. What is the result if one of the three interfaces is down?',
    'The remaining two interfaces continue to load balance traffic.');
add('When EtherChannel is configured, which mode will force an interface into a port channel without exchanging aggregation protocol packets?',
    'on');
add('A network administrator is reviewing the configuration of switch S1. Which protocol has been implemented to group multiple physical ports into one logical link?',
    'PAgP');
add('A network administrator is analyzing the features that are supported by different first-hop router redundancy protocols. Which statement describes a feature that is associated with HSRP?',
    'HSRP uses active and standby routers.');
add('What is the term used to describe a network topology where the subnets from a major classful network address space are separated from each other by addresses from a different major classful network address?',
    'discontiguous network');
add('What type of packets are sent when there is a change in the EIGRP topology?',
    'triggered bounded update');
add('A network administrator has configured OFPF in the topology as shown. What is the preferred path to get from the LAN network that is connected to R1 to the LAN network that is connected to R7?',
    'R1-R3-R4-R5-R6-R7');
add('What does the SPF algorithm consider to be the best path to a network?',
    'The path that includes the fastest cumulative bandwidth links.');
add('Which three pieces of information does a link-state routing protocol use initially as link-state information for locally connected links? (Choose three.)',
    'the link router interface IP address and subnet mask',
    'the type of network link',
    'the cost of that link');
add('What indicates to a link-state router that a neighbor is unreachable?',
    'if the router no longer receives hello packets');
add('What are three features of EIGRP? (Choose three.)',
    'establishes neighbor adjacencies',
    'uses the Reliable Transport Protocol',
    'supports equal and unequal cost load balancing');
add('What capability do protocol-dependent modules provide to the EIGRP routing protocol?',
    'route different Layer 3 protocols');
add('When are EIGRP update packets sent?',
    'only when necessary');
add('Which command should be used to configure EIGRP to only advertise the network that is attached to the gigabit Ethernet 0/1 interface?',
    'network 172.16.23.64 0.0.0.63');
add('Which statement describes the autonomous system number used in EIGRP configuration on a Cisco router?',
    'It functions as a process ID in the operation of the router.');
add('Which two parameters does EIGRP use by default to calculate the best path? (Choose two.)',
    'delay',
    'bandwidth');
add('An EIGRP router loses the route to a network. Its topology table contains two feasible successors to the same network. What action will the router take?',
    'The best alternative backup route is immediately inserted into the routing table.');
add('When will a router that is running EIGRP put a destination network in the active state?',
    'when the connection to the successor of the destination network fails and there is no feasible successor available');
add('Which address is used by an IPv6 EIGRP router as the source for hello messages?',
    'the interface IPv6 link-local address');
add('Which route or routes will be advertised to the router ISP if autosummarization is enabled?',
    '10.0.0.0/8');
add('Which command will configure an IPv6 default static route?',
    'router(config)# ipv6 route ::/0 s0/0/0');
add('Which statement describes the load balancing behavior of EIGRP?',
    'Both EIGRP for IPv4 and EIGRP for IPv6 support unequal cost load balancing.');
add('What routing protocol can be configured to load balance across paths with unequal metrics through the use of the variance command?',
    'EIGRP');
add('What are two features of a link-state routing protocol? (Choose two.)',
    'Routers send triggered updates in response to a change.',
    'Routers create a topology of the network by using information from other routers.');
add('A router is participating in an OSPFv2 domain. What will always happen if the dead interval expires before the router receives a hello packet from an adjacent DROTHER OSPF router?',
    'OSPF will remove that neighbor from the router link-state database.');
add('In an OSPFv2 configuration, what is the effect of entering the command network 192.168.1.1 0.0.0.0 area 0?',
    'It tells the router which interface to turn on for the OSPF routing process.');
add('What does the cost of an OSPF link indicate?',
    'A lower cost indicates a better path to the destination than a higher cost does.');
add('Which two addresses represent valid destination addresses for an OSPFv3 message? (Choose two.)',
    'FF02::5',
    'FE80::42');
add('R1 and R2 are OSPFv3 neighbors. Which address would R1 use as the next hop for packets that are destined for the Internet?',
    '2001:DB8:ACAD:1::2');
add('What information is contained in OSPF type 3 LSAs?',
    'networks reachable in other areas');
add('A company has migrated from single area OSPF to multiarea. However, none of the users from network 192.168.1.0/24 in the new area can be reached by anyone in the Branch1 office. From the output in the exhibit, what is the problem?',
    'There are no interarea routes in the routing table for network 192.168.1.0.');
add('For the given topology, what are three results of the OSPF DR and BDR elections ? (Choose three.)',
    'R3 is DR for segment A.',
    'R5 is BDR for segment B.',
    'R3 is DR for segment B.');
add('In this scenario, Area 40 cannot be connected directly to Area 0. Which OSPF network type must be configured in Area 1 to connect these areas?',
    'virtual link');
add('What method can be used to enable an OSPF router to advertise a default route to neighboring OSPF routers?',
    'Use the default-information originate command on R0-A.');
add('A network administrator has configured the OSPF timers to the values that are shown in the graphic. What is the result of having those manually configured timers?',
    'The R1 dead timer expires between hello packets from R2.');
add('A network administrator has configured OSPFv2 on the two Cisco routers as shown. The routers are unable to form a neighbor adjacency. What should be done to fix the problem?',
    'ne izvestno');

// CCNA3 Scaling Networks v6.0 Final Exam Option B
add('Which routing protocol is able to scale for large networks and utilizes non-backbone areas for expansion?',
    'OSPF');
add('In the Cisco hierarchical design model, which layer is more likely to have a fixed configuration switch than the other layers?',
    'access');
add('A network engineer is interested in obtaining specific information relevant to the operation of both distribution and access layer Cisco devices. Which command provides common information relevant to both types of devices?',
    'show cdp neighbors');
add('A switched network has converged completely. All switches currently have a VTP revision number of 5. A new switch that has been configured as a VTP server is added to the network. The new switch has a VTP revision number of 4. What will occur within the network?',
    'A switched network has converged completely. All switches currently have a VTP revision number of 5. A new switch that has been configured as a VTP server is added to the network. The new switch has a VTP revision number of 4. What will occur within the network?');
add('A network administrator is adding a new VLAN for testing. The company uses VTP and the VLAN is not directly attached to either of the switches configured as VTP servers. What is the best method to add this VLAN to the network?',
    'Manually add the VLAN to the VLAN database of the VTP servers.');
add('Which three pairs of trunking modes will establish a functional trunk link between two Cisco switches? (Choose three.)',
    'dynamic desirable – dynamic desirable',
    'dynamic desirable – dynamic auto',
    'dynamic desirable – trunk');
add('The configuration shows the commands entered by a network administrator for inter-VLAN routing. However, host PCA cannot communicate with PCB. Which part of the inter-VLAN configuration causes the problem?',
    'VLAN configuration');
add('What are two drawbacks to turning spanning tree off and having multiple paths through the Layer 2 switch network? (Choose two.)',
    'The MAC address table becomes unstable.',
    'Broadcast frames are transmitted indefinitely.');
add('Which port role is assigned to the switch port that has the lowest cost to reach the root bridge?',
    'root port');
add('What is the role of the SW3 switch?',
    'root bridge');
add('Which spanning tree standard was developed by Cisco to provide separate instances of 802.1w per VLAN?',
    'Rapid PVST+');
add('Which industry-wide specification was developed to decrease the time that is needed to move to the forwarding state by switch ports that are operating in a redundantly switched topology?',
    'RSTP');
add('A network administrator is verifying the bridge ID and the status of this switch in the STP election. Which statement is correct based on the command output?',
    'The bridge priority of Switch_2 has been lowered to a predefined value to become the root bridge.');
add('An STP instance has failed and frames are flooding the network. What action should be taken by the network administrator?',
    'Redundant links should be physically removed until the STP instance is repaired.');
add('Which switching technology would allow data to be transmitted over each access layer switch link and prevent the port from being blocked by spanning tree due to the redundant link?',
    'EtherChannel');
add('What are two advantages of EtherChannel? (Choose two.)',
    'Configuring the EtherChannel interface provides consistency in the configuration of the physical links.',
    'Spanning Tree Protocol views the physical links in an EtherChannel as one logical connection.');
add('When EtherChannel is implemented, multiple physical interfaces are bundled into which type of logical connection?',
    'port channel');
add('When a range of ports is being configured for EtherChannel, which mode will configure LACP on a port only if the port receives LACP packets from another device?',
    'passive');
add('Which two channel group modes would place an interface in a negotiating state using PAgP? (Choose two.)',
    'desirable',
    'auto');
add('A network administrator is analyzing the features that are supported by different first-hop router redundancy protocols. Which statement is a feature that is associated with GLBP?',
    'GLBP allows load balancing between routers.');
add('A new chief information officer (CIO) has requested implementation of a link-state dynamic routing protocol. Which two routing protocols fulfill this requirement? (Choose two.)',
    'OSPF',
    'IS-IS');
add('A network administrator is utilizing RIPv1 in the exhibited network topology. What would the router R2 do with a packet that is originating from the 192.168.4.0/24 network and destined for network 172.16.1.0/24?',
    'The router will load balance and forward packets to both R1 and R3.');
add('What best describes the operation of distance vector routing protocols?',
    'They send their routing tables to directly connected neighbors.');
add('Which statement defines the speed of convergence of routing protocols?',
    'The time it takes a router within a network to forward routing information.');
add('What is associated with link-state routing protocols?',
    'Shortest Path First calculations');
add('Which two pieces of information are contained within a link-state packet (LSP)? (Choose two.)',
    'bandwidth',
    'link type');
add('What is a difference between the routing protocols EIGRP and OSPF?',
    'EIGRP supports routing different network layer protocols whereas OSPF supports routing only IP-based protocols.');
add('What protocol is used by EIGRP for the delivery and receipt of EIGRP packets?',
    'RTP');
add('How is bandwidth to a destination network calculated by EIGRP?',
    'the lowest configured bandwidth of any interface along the route');
add('An EIGRP router loses the route to a network. Its topology table contains two feasible successors to the same network. What action will the router take?',
    'The best alternative backup route is immediately inserted into the routing table.');
add('A network administrator issues the show ipv6 eigrp neighbors command. Which conclusion can be drawn based on the output?',
    'The link-local addresses of neighbor routers interfaces are configured manually.');
add('A network administrator has attempted to implement a default route from R1 to the ISP and propagate the default route to EIGRP neighbors. Remote connectivity from the EIGRP neighbor routers to the ISP connected to R1 is failing. Based on the output from the exhibit, what is the most likely cause of the problem?',
    'The command redistribute static has not been issued on R1.');
add('Which statement accurately reflects the configuration of routing on the HQ router?',
    'A static default route was configured on this router.');
add('Which command would limit the amount of bandwidth that is used by EIGRP for protocol control traffic to approximately 128 Kb/s on a 1.544 Mb/s link?',
    'ip bandwidth-percent eigrp 100 8');
add('Which criterion is preferred by the router to choose a router ID?',
    'the router-id rid command');
add('What is the effect of entering the network 192.168.10.1 0.0.0.0 area 0 command in router configuration mode?',
    'OSPF advertisements will include the network on the interface with the IPv4 address 192.168.10.1.');
add('Which three requirements are necessary for two OSPFv2 routers to form an adjacency? (Choose three.)',
    'The two routers must include the inter-router link network in an OSPFv2 network command.',
    'The OSPF hello or dead timers on each router must match.',
    'The link interface subnet masks must match.');
add('R1 and R2 are OSPFv3 neighbors. Which address would R1 use as the next hop for packets that are destined for the Internet?',
    'FE80::21E:BEFF:FEF4:5538');
add('When does an OSPF router become an ABR?',
    'when the router has interfaces in different areas');
add('Which type of OSPF router connects an OSPF area to non-OSPF routing domains?',
    'ASBR');
add('Which function is performed by an OSPF ABR?',
    'injecting type 3 LSAs into an area');
add('What type of OSPF IPv4 route is indicated by a route table entry descriptor of O E1?',
    'an external route that is advertised by an ASBR');
add('In which mode is the area area-id range address mask command issued when multiarea OSPF summarization is being configured?',
    'router configuration mode');
add('What are three resulting DR and DBR elections for the given topology? (Choose three.)',
    'R3 is DR for segment A.');
add('After implementing an IPv6 network, the administrator notices that the OSPFv3 process is not starting on the routers. What could be the problem?',
    'No router IDs are configured on the routers.');
add('How did this router learn of the highlighted route in the routing table?',
    'by receiving an update from another OSPF router that has the default-information originate command configured');
add('Which command can be used to view OSPF adjacencies with neighboring routers along with the transition state?',
    'show ip ospf neighbor');

// CCNA3 Scaling Networks v6.0 Final Exam Option C
add('Which technological factor determines the impact of a failure domain?',
    'the role of the malfunctioning device');
add('What is the function of STP in a scalable network?',
    'It disables redundant paths to eliminate Layer 2 loops.');
add('Which characteristic would most influence a network design engineer to select a multilayer switch over a Layer 2 switch?',
    'ability to build a routing table');
add('What are two reasons to install a single 48-port fixed configuration switch, rather than two 24-port fixed configuration switches, in a wiring closet that supports two classrooms? (Choose two.)',
    'more ports available for end devices',
    'reduced power and space requirements');
add('What are two requirements when using out-of-band configuration of a Cisco IOS network device? (Choose two.)',
    'a terminal emulation client',
    'a direct connection to the console or AUX port');
add('Which step can be taken to ensure that a switch added to the network does not overwrite the VLAN databases on existing switches in the same VTP domain?',
    'Reset the switch VTP revision number to 0.');
add('A network administrator is planning to add a new switch to the network. What should the network administrator do to ensure the new switch exchanges VTP information with the other switches in the VTP domain?',
    'Configure the correct VTP domain name and password on the new switch.');
add('An administrator was troubleshooting a router-on-a-stick topology and concluded that the problem was related to the configuration of VLANs on the router subinterfaces. Which two commands can the administrator use in the router to identify the problem? (Choose two.)',
    'show ip interface',
    'show running-config');
add('The configuration shows commands entered by a network administrator for inter-VLAN routing. However, host PCA cannot communicate with PCB. Which part of the inter-VLAN configuration causes the problem?',
    'VLAN configuration');
add('Refer to the exhibit. Switch SW-A is to be used as a temporary replacement for another switch in the VTP Student domain. What two pieces of information are indicated from the exhibited output? (Choose two.)',
    'There is a risk that the switch may cause incorrect VLAN information to be sent through the domain.',
    'This switch will update its VLAN configuration when VLAN changes are made on a VTP server in the same domain.');
add('The network administrator configures both switches as displayed. However, host C is unable to ping host D and host E is unable to ping host F. What action should the administrator take to enable this communication?',
    'Configure either trunk port in the dynamic desirable mode.');
add('What is a characteristic of spanning tree?',
    'It is enabled by default on Cisco switches.');
add('All the displayed switches are Cisco 2960 switches with the same default priority and operating at the same bandwidth. Which three ports will be STP designated ports? (Choose three.)',
    'fa0/10',
    'fa0/13',
    'fa0/21');
add('A set of switches is being connected in a LAN topology. Which STP bridge priority value will make it least likely for the switch to be selected as the root?',
    '61440');
add('Which switch will be elected the root bridge and which switch will place a port in blocking mode? (Choose two.)',
    'SW4 will get a port blocked.',
    'SW3 will become the root bridge.');
add('Which statement is true about the states of the IEEE 802.1D Spanning Tree Protocol?',
    'Ports listen and learn before going into the forwarding state.');
add('What are the possible port roles for ports A, B, C, and D in this RSTP-enabled network?',
    'alternate, designated, root, root');
add('What are two results of issuing the displayed commands on S1, S2, and S3? (Choose two.)',
    'S1 will automatically adjust the priority to be the lowest.',
    'S2 can become root bridge if S1 fails.');
add('When the show spanning-tree vlan 33 command is issued on a switch, three ports are shown in the forwarding state. In which two port roles could these interfaces function while in the forwarding state? (Choose two.)',
    'designated',
    'root');
add('Which is a characteristic of EtherChannel?',
    'STP treats all interfaces in a bundle as a single logical link.');
add('A network administrator has configured an EtherChannel between two switches that are connected via four trunk links. If the physical interface for one of the trunk links changes to a down state, what happens to the EtherChannel?',
    'The EtherChannel will remain functional.');
add('What are two load-balancing methods in the EtherChannel technology? (Choose two.)',
    'source IP to destination IP',
    'source MAC to destination MAC');
add('Which mode configuration setting would allow formation of an EtherChannel link between switches SW1 and SW2 without sending negotiation traffic?',
    'SW1: on, SW2: on');
add('Which two parameters must match on the ports of two switches to create a PAgP EtherChannel between the switches? (Choose two.)',
    'speed',
    'VLAN information');
add('A network administrator is analyzing first-hop router redundancy protocols. What is a characteristic of VRRPv3?',
    'It supports IPv6 and IPv4 addressing.');
add('A network administrator would like to implement dynamic routing within a small network environment as shown in the exhibit. Which routing protocol would be a viable solution?',
    'EIGRP');
add('What is a key distinction between classful and classless routing protocols?',
    'Classful routing protocols do not send subnet mask information in their routing updates.');
add('What does the SPF algorithm consider to be the best path to a network?',
    'The path that includes the fastest cumulative bandwidth links.');
add('A network administrator has configured OFPF in the topology as shown. What is the preferred path to get from the LAN network that is connected to R1 to the LAN network that is connected to R7?',
    'R1-R3-R4-R5-R6-R7');
add('Which protocol does EIGRP use for the transportation of EIGRP packets?',
    'Reliable Transport Protocol');
add('Which two statements are correct about EIGRP acknowledgment packets? (Choose two.)',
    'The packets are sent as unicast.',
    'The packets are unreliable.');
add('What EIGRP packet type is used by EIGRP routers to discover neighbors on directly connected links?',
    'hello');
add('Which statement describes the autonomous system number used in EIGRP configuration on a Cisco router?',
    'It functions as a process ID in the operation of the router.');
add('What two values must match between two EIGRP directly connected neighbors to establish and maintain an adjacency? (Choose two.)',
    'metric parameters',
    'autonomous system number');
add('Which two conclusions can be derived from the output? (Choose two.)',
    'There is one feasible successor to network 192.168.1.8/30.',
    'The neighbor 172.16.6.1 meets the feasibility condition to reach the 192.168.1.0/24 network.');
add('Which command is used to display the bandwidth of an interface on an EIGRP-enabled router?',
    'show interfaces');
add('An EIGRP router loses the route to a network. Its topology table contains two feasible successors to the same network. What action will the router take?',
    'The best alternative backup route is immediately inserted into the routing table.');
add('A network engineer examining the operation of EIGRP on a router notices that one particular route is in an active state. What can the engineer determine about this route?',
    'EIGRP query messages are being sent to other routers requesting paths to this network.');
add('What will Router1 do if it receives packets that are destined to network 2001:db8:11:100::/64?',
    'drop the packets');
add('How are externally learned EIGRP routes identified in the routing table?',
    'EX');
add('A network administrator is configuring EIGRP load balancing with the commands, What is a direct result of entering these commands?',
    'Any feasible successor routes to the same destination network with a metric, equal to or less than 3 times that of the successor, will be installed in the routing table.');
add('By default, how many equal cost routes to the same destination can be installed in the routing table of a Cisco router?',
    '4');
add('When should EIGRP automatic summarization be turned off?',
    'when a network contains discontiguous network addresses');
add('What is a function of OSPF hello packets?',
    'to discover neighbors and build adjacencies between them');
add('What is the final operational state that will form between an OSPF DR and a DROTHER once the routers reach convergence?',
    'full');
add('A router needs to be configured to route within OSPF Area 0. Which two commands are required to accomplish this? (Choose two.)',
    'RouterA(config)# router ospf 1',
    'RouterA(config-router)# network 192.168.2.0 0.0.0.255 area 0');
add('How is the router ID for an OSPFv3 router determined?',
    'the highest IPv4 address on an active interface');
add('R1 and R2 are OSPFv3 neighbors. Which address would R1 use as the next hop for packets that are destined for the Internet?',
    'FE80::21E:BEFF:FEF4:5538');
add('What does an OSPF area contain?',
    'routers that have the same link-state information in their LSDBs');
add('What are the only two roles that permit an OSPF router to be configured for summarization? (Choose two.)',
    'area border router',
    'autonomous system boundary router');
add('Which routing table descriptor is used to identify the OSPF networks advertised by type 1 LSAs?',
    'O');
add('What are two features of OSPF interarea route summarization? (Choose two.)',
    'Routes within an area are summarized by the ABR.',
    'ABRs advertise the summarized routes into the backbone.');
add('What are three resulting DR and BDR elections for the given topology? (Choose three.)',
    'R2 is BDR for segment A.',
    'R4 is BDR for segment B.',
    'R5 is DR for segment B.');
add('What is one reason to use the ip ospf priority command when the OSPF routing protocol is in use?',
    'to influence the DR/BDR election process');
add('Which statement describes a characteristic of OSPF external routes?',
    'The difference between type 1 and type 2 is in the way the cost of the route is being calculated.');
add('A network administrator has configured OSPFv2 on the two Cisco routers as shown. PC1 is unable to communicate with PC2. What should be done to fix the problem?',
    'Add the network 192.168.255.0 0.0.0.3 area 0 command to router R1 and remove the network 192.168.255.1 0.0.0.0 area 0 command.');
add('Which command can be used by an administrator to display a list of interfaces that are enabled for OSPFv3?',
    'show ipv6 protocols');


// CCNA2 Routing and Switching v6.0 Chapter 9
add('What is the primary purpose of NAT?',
    'conserve IPv4 addresses');
add('Which method is used by a PAT-enabled router to send incoming packets to the correct inside hosts?​',
    'It uses the destination TCP or UDP port number on the incoming packet.');
add('What are two benefits of NAT? (Choose two.)',
    'It saves public IP addresses.',
    'It adds a degree of privacy and security to a network.');
add('What is a disadvantage of NAT?',
    'There is no end-to-end addressing.');
add('What is an advantage of deploying IPv4 NAT technology for internal hosts in an organization?',
    'provides flexibility in designing the IPv4 addressing scheme');
add('Refer to the exhibit. Which address or addresses represent the inside global address?',
    '209.165.20.25');
add('Refer to the exhibit. A technician is configuring R2 for static NAT to allow the client to access the web server. What is a possible reason that the client PC cannot access the web server?',
    'Interface S0/0/0 should be identified as the outside NAT interface.');
add('A network administrator configures the border router with the command R1(config)# ip nat inside source list 4 pool corp. What is required to be configured in order for this particular command to be functional?',
    'a NAT pool named corp that defines the starting and ending public IP addresses');
add('When dynamic NAT without overloading is being used, what happens if seven users attempt to access a public server on the Internet when only six addresses are available in the NAT pool?',
    'The request to the server for the seventh user fails.');
add('What is defined by the ip nat pool command when configuring dynamic NAT?',
    'the pool of global address');
add('Refer to the exhibit. What is the purpose of the command marked with an arrow shown in the partial configuration output of a Cisco broadband router?',
    'defines which addresses can be translated');
add('A network engineer has configured a router with the command ip nat inside source list 4 pool corp overload. Why did the engineer use the overload option?',
    'The company has more private IP addresses than available public IP addresses.');
add('What are two of the required steps to configure PAT? (Choose two.)',
    'Define a pool of global addresses to be used for overload translation.',
    'Identify the inside interface.');
add('What is the major benefit of using NAT with Port Address Translation?',
    'It allows many internal hosts to share the same public IPv4 address.');
add('What is the purpose of port forwarding?',
    'Port forwarding allows an external user to reach a service on a private IPv4 address that is located inside a LAN.');
add('A network administrator is configuring a static NAT on the border router for a web server located in the DMZ network. The web server is configured to listen on TCP port 8080. The web server is paired with the internal IP address of 192.168.5.25 and the external IP address of 209.165.200.230. For easy access by hosts on the Internet, external users do not need to specify the port when visiting the web server. Which command will configure the static NAT?',
    'R1(config)# ip nat inside source static tcp 192.168.5.25 8080 209.165.200.230 80');
add('What is a characteristic of unique local addresses?',
    'They allow sites to be combined without creating any address conflicts.');
add('Which statement describes IPv6 ULAs?',
    'They are not routable across the Internet.');
add('Refer to the exhibit. Based on the output that is shown, what type of NAT has been implemented?',
    'PAT using an external interface');
add('Fill in the blank. Do not use abbreviations.\
    NAT overload is also known as',
    'Port Address Translation');

// CCNA2 Routing and Switching v6.0 Chapter 10
add('Beginning with the Cisco IOS Software Release 15.0, which license is a prerequisite for installing additional technology pack licenses?',
    'IPBase');
add('What is the major release number in the IOS image name c1900-universalk9-mz.SPA.152-3.T.bin?',
    '15');
add('Refer to the exhibit. What does the number 17:46:26.143 represent?',
    'the time when the syslog message was issued');
add('What statement describes a Cisco IOS image with the “universalk9_npe” designation for Cisco ISR G2 routers?',
    'It is an IOS version that, at the request of some countries removes any strong cryptographic functionality');
add('Refer to the exhibit. Routers R1 and R2 are connected via a serial link. One router is configured as the NTP master, and the other is an NTP client. Which two pieces of information can be obtained from the partial output of the show ntp associations detail command on R2? (Choose two.)',
    'Router R1 is the master, and R2 is the client',
    'The IP address of R1 is 192.168.1.2');
add('A network administrator configures a router with the command sequence:R1(config)# boot system tftp://c1900-universalk9-mz.SPA.152-4.M3.bin R1(config)# boot system rom What is the effect of the command sequence?',
    'The router will load IOS from the TFTP server. If the image fails to load. It will load the IOS image from ROM.');
add('What is used as the default event logging destination for Cisco routers and switches?',
    'console line');
add('When a customer purchases a Cisco IOS 15.0 software package, what serves as the receipt for that customer and is used to obtain the license as well?',
    'Product Activation Key');
add('Refer to the exhibit. Which two conclusions can be drawn from the syslog message that was generated by the router? (Choose two.)',
    'This message indicates that service timestamps have been configured',
    'This message is a level 5 notification message');
add('What code in the Cisco IOS 15 image filename c1900-universalk9-mz.SPA.153-3.M.bin indicates that the file is digitally signed by Cisco?',
    'SPA');
add('In addition to IPBase, what are the three technology packs that are shipped within the universal Cisco IOS Software Release 15 image? (Choose three.)',
    'Security',
    'DATA',
    'Unified Communications');
add('Which three software packages are available for Cisco IOS Release 15.0?',
    'Unified Communications',
    'DATA',
    'Security');
add('A network engineer is upgrading the Cisco IOS image on a 2900 series ISR. What command could the engineer use to verify the total amount of flash memory as well as how much flash memory is currently available?',
    'show flashO:');
add('A ping fails when performed from router R1 to directly connected router R2. The network administrator then proceeds to issue the show cdp neighbors command. Why would the network administrator issue this command if the ping failed between the two routers?',
    'The network administrator wants to verify Layer 2 connectivity.');
add('Refer to the exhibit. From what location have the syslog messages been retrieved?',
    'router RAM');
add('Which command is used to configure a one-time acceptance of the EULA for all Cisco IOS software packages and features?',
    'license accept end user agreement');
add('Which command would a network engineer use to find the unique device identifier of a Cisco router?',
    'show license udi');
add('Which syslog message type is accessible only to an administrator and only via the Cisco CLI?',
    'debugging');
add('The command ntp server 10.1.1.1 is issued on a router. What impact does this command have?',
    'synchronizes the system clock with the time source with IP address 10.1 1 1');
add('Which two statements are true about NTP servers in an enterprise network? (Choose two.)',
    'NTP servers ensure an accurate time stamp on logging and debugging information',
    'NTP servers at stratum 1 are directly connected to an authoritative time source');
add('A network administrator has issued the logging trap 4 global configuration mode command. What is the result of this command?',
    'The syslog client will send to the syslog server any event message that has a seventy level of 4 and lower');
add('Which statement is true about CDP on a Cisco device?',
    'CDP can be disabled globally or on a specific interface');
add('Why would a network administrator issue the show cdp neigbors command on a router?',
    'to display device ID and other information about directly connected Cisco devices.');
add('Which protocol or service allows network administrators to receive system messages that are provided by network devices?',
    'syslog');
add('Which two conditions should the network administrator verify before attempting to upgrade a Cisco IOS image using a TFTP server? (Choose two.)',
    'Verify that there is enough flash memory for the new Cisco IOS image using the show flash command',
    'Verify connectivity between the router and TFTP server using the ping command');

/*Prompts for matching questions and Packet Tracer Labs*/
add = prompts.add;

/*
 * template:
 * add('helper label');
 */

// CCNA3 Scaling Networks v6.0 Final Exam Option A
add('used by OSPF > Shortest Path First, can be found > adjacency database, the topology table > link-state database, the backbone area > Single-area OSPF');
add('identical LSDBs > Internal routers, which they connect > Area border routers, a non-OSPF network > Autonomous System Boundary Routers');
add('by the DR > 2, by ABRs > 3, by ABRs to advertise > 4, by all routers > 1');
add('1 > explicitly configured, 2 > of a loopback interface, 3 > an active interface, 4 > router ID manually');

// CCNA3 Scaling Networks v6.0 Final Exam Option B
add('propagate > update, acknowledge > acknowledgment, discovery > hello, response > reply, query > query');
add('feasible > 660110, new > 192.168.3.1, destination > 192.168.11.64');
add('by OSPF > Shortest Path First, can be found > adjacency database, topology table > link-state database, backbone area > Single-area OSPF');
add('1 > ID if any, 2 > loopback, 3 > active, 4 > manually');

// CCNA3 Scaling Networks v6.0 Final Exam Option C
add('1 > learns, 2 > responsible, 3 > builds, 4 > floods, 5 > uses');


// CCNA2 Routing and Switching v6.0 Chapter 9
add('step5 -> R1 replaces...');
add('step2 -> R1 checks...');
add('step 4 -> R1 selects...');
add('step 1 -> The host sends...');
add('step3 -> If there is no...');

// CCNA2 Routing and Switching v6.0 Chapter 10
add('universalk9 -> specifying...');
add('1 -> minor release...');
add('mz -> where the image...');
add('c1900 -> platform on which..');
add('m4 -> maintanece release');
add('4 -> new feature release');
add('bin -> file extension');
add('15 ->  major release number');

// CCNA2 Routing and Switching v6.0 RSE PT Assessment Part 1
add('1:Main/HQ - the main router with many child switches.');
add('2:M:en|conf t|no ip domain-lookup|host Main/HQ|serv pass|en secret class');
add('3:M:banner motd $users that unauthorized access is prohibited$');
add('4:M:line con 0|logging sync|pass cisco|login|exit');
add('5:M:ip domain-name cisco.com|username admin pass class|crypto key gen rsa|yes|1024');
add('6:M:ip ssh version 2|line vty 0 15|transport input ssh|login local|exit');
add('7:M:int g0/1|ip add 192.168.2.1 255.255.255.0|no shut|desc Local-1/Branch-1');
add('8:M:int s0/0/0|ip add 10.1.1.1 255.255.255.252|no shut|desc Connection-to-Branch|exit');
add('9:M:int g0/0.5|encaps dot1Q 5|ip add 192.168.1.1 255.255.255.240');
add('10:M:int g0/0.10|encaps dot1Q 10|ip add 192.168.1.17 255.255.255.240');
add('11:M:int g0/0.15|encaps dot1Q 15|ip add 192.168.1.33 255.255.255.240');
add('12:M:int g0/0.50|encaps dot1Q 50|ip add 192.168.1.49 255.255.255.240|exit');
add('13:M:int g0/0|no shut|exit|ip access-list standart block15|deny 192.168.1.32 0.0.0.15');
add('14:M:permit any|ip access-list snatdart ACL|line vty 0|access-class ACL in');
add('15:M:int g0/0.10|ip access-group block15 out|exit|Router rip|version 2');
add('16:M:netw 10.1.1.0|netw 192.168.1.0|netw 192.168.1.16|netw 192.168.1.32');
add('17:M:netw 192.168.1.48|netw 192.168.2.0|no auto-summary|passive-interface g0/0.5');
add('18:M:passive-interface g0/0.10|passive-interface g0/0.15|passive-interface g0/0.50');
add('19:M:passive-interface g0/0|passive-interface g0/1|exit');
add('20:M:serv timestamps log datetime msec|service timestamps debug datetime msec');
add('21:M:ntp server 192.168.2.10|logg 192.168.2.10|logg trap debugging|ntp update-calendar');
add('22: (R)emote/Branch - The lonely one-childish router on the right');
add('23:R:en|conf t|router rip|version 2|netw 10.1.1.0|netw 192.168.3.0|no auto-summary');
add('24:R:default-information originate|passive-interface s0/0/1|passive-interface g0/0');
add('25: Main-1-SW/5W-Bldg-A - top parent switch (ST)');
add('26:ST:en|conf t|vlan 5|name ACAD/OFFICE|vlan 10|name TEACH/ACCT|vlan 15|name STUDENT/PROD');
add('27:ST:vlan 50|name NETADMIN/ADMIN|exit|int range f0/23, f0/24, g0/1|switchport mode trunk');
add('28:ST:exit|int vlan 50|ip add 192.168.1.50 255.255.255.240|no shut|exit');
add('29:ST:ip default-gateway 192.168.1.49');
add('30:Main-2-SW/SW-Bldg-A-1 - the left-down switch (SL)');
add('31:SL:en|conf t|vlan 5|name ACAD/OFFICE|vlan 10|name TEACH/ACCT|vlan 15|name STUDENT/PROD');
add('32:SL:vlan 50|name NETADMIN/ADMIN|exit|int f0/23|switchport mode trunk');
add('33:SL:int f0/5|switchport mode access|switchport access vlan 5');
add('34:SL:int f0/10|switchport mode access|switchport access vlan 10');
add('35:SL:int f0/15|switchport mode access|switchport access vlan 15');
add('36:SL:int f0/20|switchport mode access|switchport access vlan 50|exit');
add('37:SL:int vlan 50|ip add 192.168.1.51 255.255.255.240|no shut|exit');
add('38:SL:ip default-gateway 192.168.1.49');
add('39:SL:int range f0/1-4, f0/6-9, f0/11-14, f0/16-19, f0/21-22, f0/24, g0/1-2|shutdown');
add('40:SL:int range f0/5, f0/10, f0/15, f0/20|switchport mode access');
add('41:SL:switchport port-security|switchport port-security maximum 2');
add('42:SL:switchport port-security mac-add sticky|switchport port-security violation protect');
add('43: Main-3-SW/SW-Bldg-A-2 - the middle-down switch (SM)');
add('44:SM:en|conf t|vlan 5|name ACAD/OFFICE|vlan 10|name TEACH/ACCT|vlan 15|name STUDENT/PROD');
add('45:SM:vlan 50|name NETADMIN/ADMIN|exit|int f0/24|switchport mode trunk|exit');
add('46:SM:int f0/5|switchport mode access|switchport mode access vlan 5');
add('47:SM:int f0/10|switchport mode access|switchport mode access vlan 10');
add('48:SM:int f0/15|switchport mode access|switchport mode access vlan 15');
add('49:SM:int f0/20|switchport mode access|switchport mode access vlan 50');
add('50:SM:int vlan 50|ip add 192.168.1.52 255.255.255.240|no shut|exit');
add('51:SM:ip default-gateway 192.168.1.49');
add('52: HOSTS settings for both VARIANTS');
add('53:H:ACAD/OFFICE-1:IP 192.168.1.10 | MASK 255.255.255.240 | GW 192.168.1.1');
add('53:H:TEACH/PROD-1:IP 192.168.1.26 | MASK 255.255.255.240 | GW 192.168.1.17');
add('53:H:STUDENT/ACCT-1:IP 192.168.1.42 | MASK 255.255.255.240 | GW 192.168.1.33');
add('53:H:ADMIN-1:IP 192.168.1.58 | MASK 255.255.255.240 | GW 192.168.1.49');
