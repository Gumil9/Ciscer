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
add('When a Cisco router is configured with a fast-switching, how are packets distributed over equal-cost paths?',
    'on a per-destination basis');
add('Which verification command would identify the specific interfaces on a router that were configured with the passive-interface command?',
    'show ip protocols');
add('What is the administrative distance of a static route that has been redistributed into EIGRP?',
    '170');


/*Prompts for matching questions and Packet Tracer Labs*/
add = prompts.add;

/*
 * template:
 * add('helper label');
 */

