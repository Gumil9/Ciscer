/*Answers to multiple choice and fill-in-the-blank questions*/
var add = tests.add;

/*
 * template:
 * add(question, answer0 [, answer1, ...]);
 */

// CCNA3 Scaling Networks v6.0 Chapter 5
add('Which dynamic routing protocol was developed as an exterior gateway protocol to interconnect different Internet providers?',
    'BGP');
add('In the context of routing protocols, what is a definition for time to convergence?',
    'the capability to transport data, video, and voice over the same media');
add('An OSPF enabled router is processing learned routes to select best paths to reach a destination network. What is the OSPF algorithm evaluating as the metric?',
    'The cumulative bandwidth that is used along the routing path.');
add('What is the difference between interior and exterior routing protocols?',
    'Interior routing protocols are used to communicate within a single autonomous system. Exterior routing protocols are used to communicate between multiple autonomous systems.');
add('What are two purposes of dynamic routing protocols? (Choose two.)',
    'discover remote networks',
    'select best path to destination networks');
add('Which routing protocol is designed to use areas to scale large hierarchical networks?',
    'OSPF');
add('Which two routing protocols are classified as distance vector routing protocols? (Choose two.)',
    'EIGRP',
    'RIP');
add('A network administrator has configured RIPv2 in the given topology. Which path would a packet take to get from the LAN that is connected to R1 to the LAN that is connected to R7?',
    'R1–R2–R6–R7');
add('Which routing protocol sends a routing update to neighboring routers every 30 seconds?',
    'RIP');
add('After a network topology change occurs, which distance vector routing protocol can send an update message directly to a single neighboring router without unnecessarily notifying other routers?',
    'EIGRP');
add('Which feature provides secure routing updates between RIPv2 neighbors?',
    'routing protocol authentication');
add('What is maintained within an EIGRP topology table?',
    'all routes received from neighbors');
add('A network administrator is researching routing protocols for implementation in a critical network infrastructure. Which protocol uses the DUAL algorithm to provide almost instantaneous convergence during a route failover?',
    'EIGRP');
add('OSPF is used in the network. Which path will be chosen by OSPF to send data packets from Net A to Net B?',
    'R1, R3, R5, R7');
add('What are two features of the OSPF routing protocol? (Choose two.)',
    'calculates its metric using bandwidth',
    'uses Dijkstra’s algorithm to build the SPF tree');
add('Which two protocols are link-state routing protocols? (Choose two.)',
    'OSPF',
    'IS-IS');
add('Which routing protocol uses link-state information to build a map of the topology for computing the best path to each destination network?',
    'OSPF');
add('Which two requirements are necessary before a router configured with a link-state routing protocol can build and send its link-state packets? (Choose two.)',
    'The router has determined the costs associated with its active links.',
    'The router has established its adjacencies.');
add('What happens when two link-state routers stop receiving hello packets from neighbors?',
    'They consider the neighbor to be unreachable and the adjacency is broken.');
add('Which two events will trigger the sending of a link-state packet by a link-state routing protocol? (Choose two.)',
    'a change in the topology',
    'the initial startup of the routing protocol process');
add('What is the first step taken by a newly configured OSPF router in the process of reaching a state of convergence?',
    'It learns about directly connected links in an active state.');
add('Which two components of an LSP enable an OSPF router to determine if the LSP that is received contains newer information than what is in the current OSPF router link-state database? (Choose two.)',
    'sequence numbers',
    'aging informatio');
add('Which statement is an incorrect description of the OSPF protocol?',
    'When compared with distance vector routing protocols, OSPF utilizes less memory and less CPU processing power.');
add('What is a disadvantage of deploying OSPF in a large single area routing environment?',
    'OSPF uses excessive LSP flooding.');

/*Prompts for matching questions and Packet Tracer Labs*/
add = prompts.add;

/*
 * template:
 * add('helper label');
 */

// CCNA3 Scaling Networks v6.0 Chapter 5
add('adv: event, building, fast');
add('disadv: bandwidth, memory, CPU');
