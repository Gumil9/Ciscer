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
add('What is the metric that is used by OSPF?',
    'cost');
add('What function is performed by the OSPF designated router?',
    'dissemination of LSAs');


/*Prompts for matching questions and Packet Tracer Labs*/
add = prompts.add;

/*
 * template:
 * add('helper label');
 */

add('1 > down, 2 > init, 3 > two-way, 4 > exstart, 5 > exchange, 6 > loading, 7 > full');
add('update > advertise, database > compare, hello > establish, request > query');
add('1 > configured, 2 > 172.16.1.1, 3 > 10.1.1.1, 4 > serial');
add('BW > interface, Protocol > protocols, Neighbor > neighbor, Process > ospf');
