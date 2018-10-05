/*Answers to multiple choice and fill-in-the-blank questions*/
var add = tests.add;

/*
 * template:
 * add(question, answer0 [, answer1, ...]);
 */

// CCNA3 Scaling Networks v6.0 Chapter 4
add('Which switching technology would allow each access layer switch link to be aggregated to provide more bandwidth between each Layer 2 switch and the Layer 3 switch?',
    'EtherChannel');
add('Which statement is true regarding the use of PAgP to create EtherChannels?',
    'It is Cisco proprietary.');
add('Which two protocols are used to implement EtherChannel? (Choose two.)',
    'Port Aggregation Protocol',
    'Link Aggregation Control Protocol');
add('Which statement describes a characteristic of EtherChannel?',
    'It is made by combining multiple physical links that are seen as one link between two switches.');
add('Which statement describes an EtherChannel implementation?',
    'A trunked port can be part of an EtherChannel bundle.');
add('An EtherChannel link using LACP was formed between two switches, S1 and S2. While verifying the configuration, which mode combination could be utilized on both switches?',
    'S1-passive and S2-active');
add('What is an advantage of using LACP?',
    'allows automatic formation of EtherChannel links');
add('What is a best practice to use before beginning an EtherChannel implementation?',
    'Shut down each of the affected interfaces.');
add('Which PAgP mode combination will establish an EtherChannel?',
    'switch 1 set to desirable; switch 2 set to desirable.');
add('Which three options must match in order to establish an EtherChannel between two directly connected switches? (Choose three.)',
    'VLAN memberships of the interfaces that are used for EtherChannel',
   'speed of the interfaces that are used for EtherChannel',
    'duplex settings of the interfaces that are used for EtherChannel');
add('A network administrator is configuring an EtherChannel link between switches SW1 and SW2 by using the command SW1(config-if-range)# channel-group 1 mode passive. Which command must be used on SW2 to enable this EtherChannel?',
    'SW2(config-if-range)# channel-group 1 mode active');
add('An EtherChannel was configured between switches S1 and S2, but the interfaces do not form an EtherChannel. What is the problem?',
    'The EtherChannel was not configured with the same allowed range of VLANs on each interface.');
add('A network administrator has decided that an EtherChannel between ports 0/1 and 0/2 on switches S1 and S2 would help performance. After making the configuration, the administrator notices no performance gain. Based on the output that is shown, what two possible assumptions could a network administrator make? (Choose two.)',
    'The EtherChannel bundle is not working.',
    'One of the ports on S2 was not configured correctly.');
add('A network administrator issued the show etherchannel summary command on the switch S1. What conclusion can be drawn?',
    'The EtherChannel is not functional.');
add('Based on the command output shown, what is the status of the EtherChannel?',
    'The EtherChannel is in use and functional as indicated by the SU and P flags in the command output.');
add('What is a requirement to configure a trunking EtherChannel between two switches?',
    'The allowed range of VLANs must be the same on both switches.');
add('What is the purpose of HSRP?',
    'It provides a continuous network connection when a router fails.');
add('Which nonproprietary protocol provides router redundancy for a group of routers which support IPv4 LANs?',
    'VRRPv2');
add('A network administrator configured routers R1 and R2 as part of HSRP group 1. After the routers have been reloaded, a user on Host1 complained of lack of connectivity to the Internet The network administrator issued the show standby brief command on both routers to verify the HSRP operations. In addition, the administrator observed the ARP table on Host1. Which entry should be seen in the ARP table on Host1 in order to gain connectivity to the Internet?',
    'the virtual IP address and the virtual MAC address for the HSRP group 1');
add('What statement is true about the output of the show standby command?',
    'The router is currently forwarding packets.');
add('A network engineer is troubleshooting host connectivity on a LAN that uses a first hop redundancy protocol. Which IPv4 gateway address should be configured on the host?',
    '192.168.2.100');
add('A network administrator would like to ensure that router R1 is always elected the active router for an HSRP group. Which set of commands would ensure the required results?',
    'R1(config-if)# ip address 192.168.1.100 255.255.255.0\nR1(config-if)# standby 1 ip 192.168.1.1\nR1(config-if)# standby 1 priority 255\nR1(config-if)# standby 1 preempt\nR1(config-if)# no shutdown');
add('Fill in the blank.',
    'virtual');
add('Open the PT Activity. Perform the tasks in the activity instructions and then answer the question. What are two reasons why the ping messages that are issued from Laptop0 towards Laptop1 are failing? (Choose two.)',
    'The channel group should be configured as a trunk on each switch.',
    'The two interfaces on each of the switches belong to different VLANs.');
add('In FHRP terminology, what represents a set of routers that present the illusion of a single router to hosts?',
    'virtual router');
add('Which command must be used on SW2 to enable this EtherChannel?',
    'SW2(config-if-range)# channel-group 1 mode desirable');

/*Prompts for matching questions and Packet Tracer Labs*/
add = prompts.add;

/*
 * template:
 * add('helper label');
 */

add('the list of ports > etherchannel port-channel');
add('information about the status > interfaces fa0/2');
add('information about the reliability > interfaces port-channel1');
add('is used to check > etherchannel summary');
