/*Answers to multiple choice and fill-in-the-blank questions*/
var add = tests.add;

/*
 * template:
 * add(question, answer0 [, answer1, ...]);
 */

// CCNA4 v6.0 Chapter 8
add('When should a network performance baseline be measured?',
    'during normal work hours of an organization');
add('What is a purpose of establishing a network baseline?',
    'It creates a point of reference for future network evaluations.');
add('Which three pieces of information are typically recorded in a logical topology diagram? (Choose three.)',
    'static routes',
    'routing protocols',
    'IP address and prefix lengths');
add('In which step of gathering symptoms does the network engineer determine if the problem is at the core, distribution, or access layer of the network?',
    'Narrow the scope.');
add('A team of engineers has identified a solution to a significant network problem. The proposed solution is likely to affect critical network infrastructure components. What should the team follow while implementing the solution to avoid interfering with other processes and infrastructure?',
    'change-control procedures');
add('What action occurs at stage 3 of the general troubleshooting process?',
    'Correct the problem.');
add('After which step in the network troubleshooting process would one of the layered troubleshooting methods be used?',
    'gathering symptoms from suspect devices');
add('A network technician is troubleshooting an email connection problem. Which question to the end-user will provide clear information to better define the problem?',
    'When did you first notice your email problem?');
add('A network engineer is troubleshooting a network problem and can successfully ping between two devices. However, Telnet between the same two devices does not work. Which OSI layers should the administrator investigate next?',
    'from the network layer to the application layer');
add('A network administrator is having issues with a newly installed network not appearing in other routers. At which layer of the OSI model is the network administrator going to start the troubleshooting process when using a top-down approach?',
    'network');
add('Which troubleshooting method begins by examining cable connections and wiring issues?',
    'bottom-up');
add('On the basis of the information presented, which two IP SLA related statements are true? (Choose two.)',
    'IP SLA 99 will run forever unless explicitly disabled.',
    'IP SLA 99 is sending echo requests every 10 seconds.');
add('A company is setting up a web site with SSL technology to protect the authentication credentials required to access the web site. A network engineer needs to verify that the setup is correct and that the authentication is indeed encrypted. Which tool should be used?',
    'protocol analyzer');
add('Which category of software troubleshooting tools provides device-level monitoring, configuration, and fault-management?',
    'network management system tools');
add('Which two specialized troubleshooting tools can monitor the amount of traffic that passes through a switch? (Choose two.)',
    'portable network analyzer',
    'NAM');
add('Which number represents the most severe level of syslog logging?',
    '0');
add('A user in a large office calls technical support to complain that a PC has suddenly lost connectivity to the network. The technician asks the caller to talk to nearby users to see if other machines are affected. The caller reports that several immediate neighbors in the same department have a similar problem and that they cannot ping each other. Those who are seated in other departments have connectivity. What should the technician check as the first step in troubleshooting the issue?',
    'the status of the departmental workgroup switch in the wiring closet');
add('A user reports that after an OS patch of the networking subsystem has been applied to a workstation, it performs very slowly when connecting to network resources. A network technician tests the link with a cable analyzer and notices that the workstation sends an excessive number of frames smaller than 64 bytes and also other meaningless frames. What is the possible cause of the problem?',
    'corrupted NIC driver');
add('An administrator is troubleshooting an Internet connectivity problem on a router. The output of the show interfaces gigabitethernet 0/0 command reveals higher than normal framing errors on the interface that connects to the Internet. At what layer of the OSI model is the problem likely occurring?',
    'Layer 2');
add('A group of Windows PCs in a new subnet has been added to an Ethernet network. When testing the connectivity, a technician finds that these PCs can access local network resources but not the Internet resources. To troubleshoot the problem, the technician wants to initially confirm the IP address and DNS configurations on the PCs, and also verify connectivity to the local router. Which three Windows CLI commands and utilities will provide the necessary information?',
    'ping',
    'nslookup',
    'ipconfig');
add('Users report that the new web site http://www.company1.biz cannot be accessed. The helpdesk technician checks and verifies that the web site can be accessed with http://www.company1.biz:90. Which layer in the TCP/IP model is involved in troubleshooting this issue?',
    'transport');
add('A networked PC is having trouble accessing the Internet, but can print to a local printer and ping other computers in the area. Other computers on the same network are not having any issues. What is the problem?',
    'The PC has a missing or incorrect default gateway.');
add('The newly configured ASBR that connects a company to the Internet has a default route configured and has the default-information originate command entered. Devices connected through this router can access the Internet. The problem is that no other OSPF routers have a default route in the routing table and no other users throughout the organization can access the Internet. What could be the problem?',
    'The ASBR does not have an OSPF neighbor.');
add('An internal corporate server can be accessed by internal PCs, but not by external Internet users that should have access. What could be the issue?',
    'Static NAT has not been configured properly or at all.');
add('Use the cache to verify IPv4 address to Layer 2 Ethernet address mappings on a host computer.',
    'ARP');
add('A user reports that PC0 cannot visit the web server www.server.com. Troubleshoot the network configuration to identify the problem. What is the cause of the problem?',
    'A serial interface encapsulation is configured incorrectly.');

/*Prompts for matching questions and Packet Tracer Labs*/
add = prompts.add;

/*
 * template:
 * add('helper label');
 */


