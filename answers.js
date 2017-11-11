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


// CCNA2 Routing and Switching v6.0 Chapter 5
add('Which statement describes the port speed LED on the Cisco Catalyst 2960 switch?',
    'If the LED is green, the port is operating at 100 Mb/s.');
add('Which command is used to set the BOOT environment variable that defines where to find the IOS image file on a switch?',
    'boot system');
add('What is a function of the switch boot loader?',
    'to provide an environment to operate in when the switch operating system cannot be found');
add('Which interface is the default location that would contain the IP address used to manage a 24-port Ethernet switch?',
    'VLAN 1');
add('A production switch is reloaded and finishes with a Switch> prompt. What two facts can be determined? (Choose two.)',
    'POST occurred normally.',
    'A full version of the Cisco IOS was located and loaded.');
add('Which two statements are true about using full-duplex Fast Ethernet? (Choose two.)',
    'Performance is improved with bidirectional data flow.',
    'Full-duplex Fast Ethernet offers 100 percent efficiency in both directions.');
add('In which situation would a technician use the show interfaces switch command?',
    'when packets are being dropped from a particular directly attached host');
add('Refer to the exhibit. A network technician is troubleshooting connectivity issues in an Ethernet network with the command show interfaces fastEthernet 0/0. What conclusion can be drawn based on the partial output in the exhibit?',
    'A malfunctioning NIC can cause frames to be transmitted that are longer than the allowed maximum length.');
add('Refer to the exhibit. What media issue might exist on the link connected to Fa0/1 based on the show interface command?',
    'There could be too much electrical interference and noise on the link.');
add('If one end of an Ethernet connection is configured for full duplex and the other end of the connection is configured for half duplex, where would late collisions be observed?',
    'on the half-duplex end of the connection');
add('What is one difference between using Telnet or SSH to connect to a network device for management purposes?',
    'Telnet sends a username and password in plain text, whereas SSH encrypts the username and password.');
add('Refer to the exhibit. The network administrator wants to configure Switch1 to allow SSH connections and prohibit Telnet connections. How should the network administrator change the displayed configuration to satisfy the requirement?',
    'Modify the transport input command.');
add('What is the effect of using the switchport port-security command?',
    'enables port security on an interface');
add('Where are dynamically learned MAC addresses stored when sticky learning is enabled with the switchport port-security mac-address sticky command?',
    'RAM');
add('A network administrator configures the port security feature on a switch. The security policy specifies that each access port should allow up to two MAC addresses. When the maximum number of MAC addresses is reached, a frame with the unknown source MAC address is dropped and a notification is sent to the syslog server. Which security violation mode should be configured for each access port?',
    'restrict');
add('Which two statements are true regarding switch port security? (Choose two.)',
    'Dynamically learned secure MAC addresses are lost when the switch reboots.',
    'If fewer than the maximum number of MAC addresses for a port are configured statically, dynamically learned addresses are added to CAM until the maximum number is reached.');
add('Which action will bring an error-disabled switch port back to an operational state?',
    'Issue the shutdown and then no shutdown interface commands.');
add('Refer to the exhibit. Port Fa0/2 has already been configured appropriately. The IP phone and PC work properly. Which switch configuration would be most appropriate for port Fa0/2 if the network administrator has the following goals?',
    'SWA(config-if)# switchport port-security\
    SWA(config-if)# switchport port-security maximum 2\
    SWA(config-if)# switchport port-security mac-address sticky');
add('Refer to the exhibit. What can be determined about port security from the information that is shown?',
    'The port violation mode is the default for any port that has port security enabled.');
add('Refer to the exhibit. Which event will take place if there is a port security violation on switch S1 interface Fa0/1?',
    'Packets with unknown source addresses will be dropped.');
add('Open the PT Activity. Perform the tasks in the activity instructions and then answer the question.',
    'Do not use abbreviations.What is the missing command on S1? “ ip address 192.168.99.2 255.255.255.0 ”');

// CCNA2 Routing and Switching v6.0 Chapter 6
add('What are three primary benefits of using VLANs? (Choose three.)',
    'security',
    'cost reduction',
    'improved IT staff efficiency');
add('Which type of VLAN is used to designate which traffic is untagged when crossing a trunk port?',
    'native');
add('A network administrator is determining the best placement of VLAN trunk links. Which two types of point-to-point connections utilize VLAN trunking?​ (Choose two.)',
    'between two switches that utilize multiple VLANs',
    'between a switch and a server that has an 802.1Q NIC');
add('What must the network administrator do to remove Fast Ethernet port fa0/1 from VLAN 2 and assign it to VLAN 3?',
    'Enter the switchport access vlan 3 command in interface configuration mode.');
add('When a Cisco switch receives untagged frames on a 802.1Q trunk port, which VLAN ID is the traffic switched to by default?',
    'native VLAN ID');
add('Port Fa0/11 on a switch is assigned to VLAN 30. If the command no switchport access vlan 30 is entered on the Fa0/11 interface, what will happen?',
    'Port Fa0/11 will be returned to VLAN 1.');
add('Which command is used to remove only VLAN 20 from a switch?',
    'no vlan 20');
add('What happens to a port that is associated with VLAN 10 when the administrator deletes VLAN 10 from the switch?',
    'The port becomes inactive.');
add('Which two characteristics match extended range VLANs? (Choose two.)',
    'They are saved in the running-config file by default.',
    'VLAN IDs exist between 1006 to 4094.');
add('A Cisco switch currently allows traffic tagged with VLANs 10 and 20 across trunk port Fa0/5. What is the effect of issuing a switchport trunk allowed vlan 30 command on Fa0/5?',
    'It allows only VLAN 30 on Fa0/5.');
add('Refer to the exhibit. PC-A and PC-B are both in VLAN 60. PC-A is unable to communicate with PC-B. What is the problem?',
    'The VLAN that is used by PC-A is not in the list of allowed VLANs on the trunk.');
add('Refer to the exhibit. DLS1 is connected to another switch, DLS2, via a trunk link. A host that is connected to DLS1 is not able to communicate to a host that is connected to DLS2, even though they are both in VLAN 99. Which command should be added to Fa0/1 on DLS1 to correct the problem?',
    'switchport trunk native vlan 66');
add('What is a characteristic of legacy inter-VLAN routing?',
    'The router requires one Ethernet link for each VLAN.');
add('What is a disadvantage of using router-on-a-stick inter-VLAN routing?',
    'does not scale well beyond 50 VLANs');
add('Refer to the exhibit. Router RA receives a packet with a source address of 192.168.1.35 and a destination address of 192.168.1.85. What will the router do with this packet?',
    'The router will forward the packet out interface FastEthernet 0/1.2.');
add('Refer to the exhibit. In what switch mode should port G0/1 be assigned if Cisco best practices are being used?',
    'trunk');
add('A small college uses VLAN 10 for the classroom network and VLAN 20 for the office network. What is needed to enable communication between these two VLANs while using legacy inter-VLAN routing?',
    'A router with at least two LAN interfaces should be used.');
add('Refer to the exhibit. A network administrator needs to configure router-on-a-stick for the networks that are shown. How many subinterfaces will have to be created on the router if each VLAN that is shown is to be routed and each VLAN has its own subinterface?',
    '4');
add('When configuring a router as part of a router-on-a-stick inter-VLAN routing topology, where should the IP address be assigned?',
    'to the subinterface');
add('A high school uses VLAN15 for the laboratory network and VLAN30 for the faculty network. What is required to enable communication between these two VLANs while using the router-on-a-stick approach?',
    'A switch with a port that is configured as a trunk is needed when connecting to the router.');
add('Refer to the exhibit. A router-on-a-stick configuration was implemented for VLANs 15, 30, and 45, according to the show running-config command output. PCs on VLAN 45 that are using the 172.16.45.0 /24 network are having trouble connecting to PCs on VLAN 30 in the 172.16.30.0 /24 network. Which error is most likely causing this problem?​',
    'There is an incorrect IP address configured on GigabitEthernet 0/0.30.');
add('Fill in the blank. Use the full command syntax.\
    The show vlan command displays the VLAN assignment for all ports as well as the existing VLANs on the switch.',
    'show vlan');
add('Open the PT Activity. Perform the tasks in the activity instructions and then answer the question.',
    'PC-D, PC-E');

/*Prompts for matching questions and Packet Tracer Labs*/
add = prompts.add;

/*
 * template:
 * add('helper label');
 */

// CCNA3 Scaling Networks v6.0 Chapter 8
add('1 > down, 2 > init, 3 > two-way, 4 > exstart, 5 > exchange, 6 > loading, 7 > full');
add('update > advertise, database > compare, hello > establish, request > query');
add('1 > configured, 2 > 172.16.1.1, 3 > 10.1.1.1, 4 > serial');
add('BW > interface, Protocol > protocols, Neighbor > neighbor, Process > ospf');


 // CCNA2 Routing and Switching v6.0 Chapter 5
 add('CPU regi. init -> st. 3');
 add('execute POST -> st. 1');
 add('flash file system.. -> st. 4');
 add('load the boot..-> st. 2');
 add('load the iOS-> st. 5');
 add('transfer switch... -> st. 6');
 add('Create a loc. user, Generate RSA.., Config a domain name..');
 add('Use the login.., Use the transp.., Order does not..');
 add('disable -> admin. down');
 add('Layer 1 prob -> down/down');
 add('Layer 2 prob. - up/down');
 add('operaional -> up/up');

 // CCNA2 Routing and Switching v6.0 Chapter 6
 add('User Priority -> value that supports..');
 add('Type -> value for the tag');
 add('Canonical Format.. -> identifer that enables..');
 add('VLAN ID -> VLAN number');
