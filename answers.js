/*Answers to multiple choice and fill-in-the-blank questions*/
var add = tests.add;

/*
 * template:
 * add(question, answer0 [, answer1, ...]);
 */

// CCNA3 Scaling Networks v6.0 Chapter 6
add('When an EIGRP-enabled router uses a password to accept routes from other EIGRP-enabled routers, which mechanism is used?',
    'EIGRP authentication');
add('What is the purpose of using protocol-dependent modules in EIGRP?',
    'to accommodate routing of different network layer protocols');
add('If all router Ethernet interfaces in an EIGRP network are configured with the default EIGRP timers, how long will a router wait by default to receive an EIGRP packet from its neighbor before declaring the neighbor unreachable?',
    '15 seconds');
add('Which statement describes a characteristic of the delivery of EIGRP update packets?',
    'EIGRP uses a reliable delivery protocol to send all update packets.');
add('Which two EIGRP packet types are sent with unreliable delivery? (Choose two.)',
    'hello',
    'acknowledgment');
add('Which destination MAC address is used when a multicast EIGRP packet is encapsulated into an Ethernet frame?',
    '01-00-5E-00-00-0A');
add('What is identified within the opcode of an EIGRP packet header?',
    'the EIGRP message type that is being sent or received from a neighbor');
add('An administrator issues the router eigrp 100 command on a router. What is the number 100 used for?',
    'as the autonomous system number');
add('Why would a network administrator use a wildcard mask in the network command when configuring a router to use EIGRP?',
    'to exclude some interfaces from the EIGRP process');
add('What information does EIGRP maintain within the routing table?',
    'only successors');
add('Which table is used by EIGRP to store all routes that are learned from EIGRP neighbors?',
    'the topology table');
add('Which command or commands must be entered on a serial interface of a Cisco router to restore the bandwidth to the default value of that specific router interface?',
    'no bandwidth');
add('Which three metric weights are set to zero by default when costs in EIGRP are being calculated? (Choose three.)',
    'k2',
    'k4',
    'k5');
add('A new network administrator has been asked to verify the metrics that are used by EIGRP on a Cisco device. Which two EIGRP metrics are measured by using static values on a Cisco device? (Choose two.)',
    'bandwidth',
    'delay');
add('Which two networks contain feasible successors? (Choose two.)',
    '192.168.71.0',
    '10.44.100.252');
add('A network administrator wants to verify the default delay values for the interfaces on an EIGRP-enabled router. Which command will display these values?',
    'show interfaces');
add('R3 has two possible paths to the 172.16.99.0 network. What is the reported distance of the feasible successor route?',
    '2816');
add('R2 has two possible paths to the 192.168.10.4 network. What would make the alternate route meet the feasibility condition?',
    'a reported distance less than 3523840');
add('Which two factors does an EIGRP router use to determine that a route to a remote network meets the feasible condition and is therefore loop-free? (Choose two.)',
    'the reported distance on a neighbor router',
    'the feasible distance on the local router');
add('Which configuration is necessary to ensure successful operation of EIGRP for IPv6?',
    'The no shutdown command is required within the router configuration mode.');
add('EIGRP uses the protocol to deliver EIGRP packets to neighbors.',
    'RTP');
add('In an EIGRP topology table, a route that is in a/an state will cause the Diffusing Update Algorithm to send EIGRP queries that ask other routers for a path to this network.',
    'active');
add('Which code is displayed on the web server?',
    'Complete');

/*Prompts for matching questions and Packet Tracer Labs*/
add = prompts.add;

/*
 * template:
 * add('helper label');
 */

// CCNA3 Scaling Networks v6.0 Chapter 6
add('1 > eigrp, 2 > IPv4 on loopback, 3 > IPv4 on active');
add('IPv4 > routable, IPv6 > link-local, both > 32-bit');
