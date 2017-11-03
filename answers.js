/*Answers to multiple choice and fill-in-the-blank questions*/
var add = tests.add;

/*
 * template:
 * add(question, answer0 [, answer1, ...]);
 */

// CCNA3 Scaling Networks v6.0 Chapter 7
add('Router R3 is receiving multiple routes through the EIGRP routing protocol. Which statement is true about the implementation of summarization in this network?',
    'Automatic summarization is disabled on R3.');
add('Which two routes will be advertised to the router ISP if autosummarization is disabled? (Choose two.)',
    '10.1.2.0/24',
    '10.1.4.0/30');
add('What is the purpose of a Null0 route in the routing table?',
    'to prevent routing loops');
add('All networks are active in the same EIGRP routing domain. When the auto-summary command is issued on R3, which two summary networks will be calculated on R3? (Choose two.)',
    '192.168.10.0/24',
    '172.16.0.0/16');
add('Which three statements are advantages of using automatic summarization? (Choose three.)',
    'It reduces the frequency of routing updates.',
    'It ensures that traffic for multiple subnets uses one path through the internetwork.',
    'It decreases the number of entries in the routing table.');
add('Assuming that EIGRP is enabled on both routers and automatic summarization is enabled, what must be configured to ensure that R1 will be able to reach the 2.2.2.0/24 network?',
    'Use the command no auto-summary to disable automatic summarization.');
add('Which statement is supported by the output?',
    'A default route is being learned through an external process.');
add('Which two steps must be taken in order to send a default route to other EIGRP routers? (Choose two.)',
    'Configure a default route.',
    'Redistribute the default route.');
add('What is the administrative distance of externally learned EIGRP routes?',
    '170');
add('Two routers, R1 and R2, share a 64 kb/s link. An administrator wants to limit the bandwidth used by EIGRP between these two routers to 48 kb/s. Which command is used on both routers to configure the new bandwidth setting?',
    'ip bandwidth-percent eigrp 100 75');
add('Which two conclusions can be drawn from the exhibited configuration? (Choose two.)',
    'The configuration supports unequal-cost load balancing.',
    'Any EIGRP-learned route with a metric less than 3 times the successor metric will be installed in the local routing table.');
add('Which routing protocol supports unequal-cost load balancing on Cisco routers?',
    'EIGRP');
add('By default, how many equal-cost routes to the same destination network will EIGRP install in the routing table?',
    '4');
add('What is the default maximum amount of bandwidth that can be used for exchanging EIGRP messages on an EIGRP-configured interface?',
    '50%');
add('An administrator wants EIGRP on Router1 to load balance traffic to network 2001:db8:11:10::/64 across two interfaces. Currently traffic is using only interface GigabitEthernet0/1. A second route, not in the routing table, is available with a metric of 264000. What value is needed in the variance command to make EIGRP put the second route into the routing table?',
    '11');
add('When a Cisco router is configured with fast-switching, how are packets distributed over equal-cost paths?',
    'on a per-destination basis');
add('Which command can be issued on a router to verify that automatic summarization is enabled?',
    'show ip protocols');
add('After the configuration shown is applied on router R1, the exhibited status message is displayed. Router R1 is unable to form a neighbor relationship with R2 on the serial 0/1/0 interface. What is the most likely cause of this problem?',
    'The IPv4 address configured on the neighbor that is connected to R1 serial 0/1/0 is incorrect.');
add('Routers R1 and R2 are directly connected via their serial interfaces and are both running the EIGRP routing protocol. R1 and R2 can ping the directly connected serial interface of their neighbor, but they cannot form an EIGRP neighbor adjacency.',
    'Configure both routers with the same EIGRP autonomous system number.');
add('Considering that R2, R3, and R4 are correctly configured, why did R1 not establish an adjacency with R2, R3, and R4?',
    'because the Fa0/0 interface of R1 is declared as passive for EIGRP');
add('In which scenario will the use of EIGRP automatic summarization cause inconsistent routing in a network?',
    'when the routers in an IPv4 network are connected to discontiguous networks with automatic summarization enabled');
add('Remote users are experiencing connectivity problems when attempting to reach hosts in the 172.21.100.0 /24 network. Using the output in the exhibit, what is the most likely cause of the connectivity problem?',
    'The GigabitEthernet 0/1 interface is not participating in the EIGRP process.');
add('command causes an EIGRP router to stop sending hello packets through an interface.',
    'passive-interface');
add('The command to propagate the default route from the router Border to the rest of the EIGRP domain is ',
    'redistribute static');
add('R1 and R2 could not establish an EIGRP adjacency. What is the problem?',
    'EIGRP is down on R1.');


// CCNA2 Routing and Switching v6.0 Chapter 3
add('Which dynamic routing protocol was developed to interconnect different Internet service providers?',
    'BGP');
add('Which routing protocol is limited to smaller network implementations because it does not accommodate growth for larger networks?',
    'RIP');
add('What two tasks do dynamic routing protocols perform? (Choose two.)',
    'update and maintain routing tables',
    'network discovery');
add('When would it be more beneficial to use a dynamic routing protocol instead of static routing?',
    'on a network where there is a lot of topology changes');
add('When would it be more beneficial to use static routing instead of dynamic routing protocols?',
    'on a network where dynamic updates would pose a security risk');
add('What is a purpose of the network command when configuring RIPv2 as the routing protocol?',
    'It identifies the interfaces that belong to a specified network.');
add('A network administrator configures a static route on the edge router of a network to assign a gateway of last resort. How would a network administrator configure the edge router to automatically share this route within RIP?',
    'Use the default-information originate command.');
add('What is the purpose of the passive-interface command?',
    'allows a router to receive routing updates on an interface but not send updates via that interface');
add('Which route would be automatically created when a router interface is activated and configured with an IP address?',
    'C 192.168.0.0/24 is directly connected, FastEthernet 0/0');
add('Refer to the exhibit. Which two types of routes could be used to describe the 192.168.200.0/30 route? (Choose two.)',
    'ultimate route',
    'level 2 child route');
add('What occurs next in the router lookup process after a router identifies a destination IP address and locates a matching level 1 parent route?',
    'The level 2 child routes are examined.');
add('Which route would be used to forward a packet with a source IP address of 192.168.10.1 and a destination IP address of 10.1.1.1?',
    'O 10.1.1.0/24 [110/65] via 192.168.200.2, 00:01:20, Serial0/1/0');
add('Which two requirements are used to determine if a route can be considered as an ultimate route in a router’s routing table? (Choose two.)',
    'contain an exit interface',
    'contain a next-hop IP address');
add('What is a disadvantage of using dynamic routing protocols?',
    'They send messages about network status insecurely across networks by default.');
add('Which two statements are true regarding classless routing protocols? (Choose two.)',
    'sends subnet mask information in routing updates',
    'allows for use of both 192.168.1.0/30 and 192.168.1.16/28 subnets in the same topology');
add('Refer to the exhibit. Based on the partial output from the show ip route command, what two facts can be determined about the RIP routing protocol? (Choose two.)',
    'RIP version 2 is running on this router and its RIP neighbor.',
    'The command no auto-summary has been used on the RIP neighbor router.');
add('While configuring RIPv2 on an enterprise network, an engineer enters the command network 192.168.10.0 into router configuration mode. What is the result of entering this command?',
    'The interface of the 192.168.10.0 network is sending only version 2 updates.');
add('A destination route in the routing table is indicated with a code D. Which kind of route entry is this?',
    'a route dynamically learned through the EIGRP routing protocol');
add('Refer to the exhibit. Which interface will be the exit interface to forward a data packet with the destination IP address 172.16.0.66?',
    'Serial0/0/1');
add('Which type of route will require a router to perform a recursive lookup?',
    'an ultimate route that is using a next hop IP address on a router that is not using CEF');
add('Which route is the best match for a packet entering a router with a destination address of 10.16.0.2?',
    'S 10.16.0.0/24 [1/0] via 192.168.0.9');
add('A router is configured to participate in multiple routing protocol: RIP, EIGRP, and OSPF. The router must send a packet to network 192.168.14.0. Which route will be used to forward the traffic?',
    'a 192.168.14.0/26 route that is learned via RIP');
add('What is different between IPv6 routing table entries compared to IPv4 routing table entries?',
    'By design IPv6 is classless so all routes are effectively level 1 ultimate routes.');


// CCNA2 Routing and Switching v6.0 Chapter 4
add('A network designer must provide a rationale to a customer for a design which will move an enterprise from a flat network topology to a hierarchical network topology. Which two features of the hierarchical design make it the better choice? (Choose two.)',
    'easier to provide redundant links to ensure higher availability',
    'simpler deployment for additional switch equipment');
add('What is a collapsed core in a network design?',
    'a combination of the functionality of the distribution and core layers');
add('What is a definition of a two-tier LAN network design?',
    'distribution and core layers collapsed into one tier, and the access layer on a separate tier');
add('What is a basic function of the Cisco Borderless Architecture distribution layer?',
    'aggregating Layer 3 routing boundaries');
add('Which two previously independent technologies should a network administrator attempt to combine after choosing to upgrade to a converged network infrastructure? (Choose two.)',
    'user data traffic',
    'VoIP phone traffic');
add('A local law firm is redesigning the company network so that all 20 employees can be connected to a LAN and to the Internet. The law firm would prefer a low cost and easy solution for the project. What type of switch should be selected?',
    'fixed configuration');
add('What are two advantages of modular switches over fixed-configuration switches? (Choose two.)',
    'increased scalability',
    'need for fewer power outlets');
add('Which type of address does a switch use to build the MAC address table?',
    'source MAC address');
add('Which network device can be used to eliminate collisions on an Ethernet network?',
    'switch');
add('What two criteria are used by a Cisco LAN switch to decide how to forward Ethernet frames? (Choose two.)',
    'ingress port',
    'destination MAC address');
add('Refer to the exhibit. Consider that the main power has just been restored. PC3 issues a broadcast IPv4 DHCP request. To which port will SW1 forward this request?​',
    'to Fa0/1, Fa0/2, and Fa0/3 only');
add('What is one function of a Layer 2 switch?',
    'determines which interface is used to forward a frame based on the destination MAC address');
add('Refer to the exhibit. How is a frame sent from PCA forwarded to PCC if the MAC address table on switch SW1 is empty?',
    'SW1 floods the frame on all ports on SW1, excluding the port through which the frame entered the switch.');
add('A small publishing company has a network design such that when a broadcast is sent on the LAN, 200 devices receive the transmitted broadcast. How can the network administrator reduce the number of devices that receive broadcast traffic?',
    'Segment the LAN into smaller LANs and route between them.');
add('Refer to the exhibit. How many broadcast domains are displayed?',
    '8');
add('Which solution would help a college alleviate network congestion due to collisions?',
    'a high port density switch');
add('Which network device can serve as a boundary to divide a Layer 2 broadcast domain?',
    'router');
add('What is the destination address in the header of a broadcast frame?',
    'FF-FF-FF-FF-FF-FF');
add('Which statement describes a result after multiple Cisco LAN switches are interconnected?',
    'The broadcast domain expands to all switches.');
add('What does the term “port density” represent for an Ethernet switch?',
    'the number of available ports');
add('What are two reasons a network administrator would segment a network with a Layer 2 switch? (Choose two.)',
    'to enhance user bandwidth',
    'to isolate traffic between segments');
add('A converged network is one that uses the same infrastructure to carry voice, data, and video signals.',
    'converged');


/*Prompts for matching questions and Packet Tracer Labs*/
add = prompts.add;

/*
 * template:
 * add('helper label');
 */

 // CCNA2 Routing and Switching v6.0 Chapter 3
 add('data structures > tables or databases that are stored in RAM');
 add('routing protocol messages > exchanges routing information and maintains accurate information about networks');
 add('algorithm > a finite list of steps used to determine the best path');
 add('static routing > "typically used on stub networks" and "less routing overhead"');
 add('dynamic routing > "new networkd are added automatically to the routing table" and "best choice for large networks"');

 // CCNA2 Routing and Switching v6.0 Chapter 4
 add('fkexibility < allows intelligent traffic load sharing by using all network resources');
 add('hierarchical < facilitates understanding the role of each device at every tier, simplifies deployment, operation, management, and reduces fault domains at every tier ');
 add('modularity < allows seamless network expansion and integrated service enablement on an on-demand basis');
 add('resiliency < satisfies user expectations for keeping the network always on');

 add('Access layer > "represents the network edge" and "provides network access to the user"');
 add('Distribution layer > "implements network access policy" and "establishes Layer 3 routing boundaries"');
 add('Core layer > "provides high-speed backbone connectivity" and "functions as an aggregator for all the campus blocks"');
 add('cut-throught > "appropriate for high perfomance..." and "forwarding process can..." and "may forward invalid frames"');
 add('store-and-forward > "error checking..." and "forwarding process only..." and "only forwards valid frames"');
