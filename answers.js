/*Answers to multiple choice and fill-in-the-blank questions*/
var add = tests.add;

/*
 * template:
 * add(question, answer0 [, answer1, ...]);
 */

// CCNA4 v6.0 Chapter 2
add('Which three are types of LCP frames used with PPP? (Choose three.)',
    'link-establishment frames',
    'link-termination frames',
    'link-maintenance frames');
add('Which command can be used to view the cable type that is attached to a serial interface?',
    'Router(config)# show controllers');
add('How does PPP interface with different network layer protocols?',
    'by using separate NCPs');
add('Which address is used in the Address field of a PPP frame?',
    'a single byte of binary 11111111');
add('Which field marks the beginning and end of an HDLC frame?',
    'Flag');
add('In which situation would the use of PAP be preferable to the use of CHAP?',
    'when plain text passwords are needed to simulate login at the remote host');
add('When configuring Multilink PPP, where is the IP address for the multilink bundle configured?',
    'on a multilink interface');
add('Based on the debug command output that is shown, which statement is true of the operation of PPP.',
    'A PPP session was successfully established.');
add('A network administrator is configuring the PPP link between the two routers. However, the PPP link cannot be established. Based on the partial output of the show running-config command, what is the cause of the problem?',
    'The passwords do not match.');
add('Which protocol will terminate the PPP link after the exchange of data is complete?',
    'LCP');
add('Which serial 0/0/0 interface state will be shown if no serial cable is attached to the router, but everything else has been correctly configured and turned on?',
    'Serial 0/0/0 is down, line protocol is down');
add('How much total bandwidth is provided by a T1 line?',
    '1.544 Mb/s');
add('A network engineer is monitoring an essential, but poor quality, PPP WAN link that periodically shuts down. An examination of the interface configurations shows that the ppp quality 90 command has been issued. What action could the engineer take to reduce the frequency with which the link shuts down?',
    'Issue the command ppp quality 70.');
add('A network engineer is troubleshooting the loss of MPEG video viewing quality as MPEG video files cross a PPP WAN link. What could be causing this loss of quality?',
    'The compress command was used when PPP was configured on the interfaces.');
add('Which PPP option can detect links that are in a looped-back condition?',
    'Magic Number');
add('A network engineer has issued the show interfaces serial 0/0/0 command on a router to examine the open NCPs on a PPP link to another router. The command output displays that the encapsulation is PPP and that the LCP is open. However, the IPV6CP NCP is not shown as open. What does the engineer need to configure to open the IPV6CP NCP on the link?',
    'Configure an IPv6 address on each interface on the link.');
add('Which three physical layer interfaces support PPP? (Choose three.)',
    'synchronous serial',
    'asynchronous serial',
    'HSSI');
add('What are three components of PPP? (Choose three.)',
    'NCP',
    'HDLC-like framing',
    'LCP');
add('A laptop is connected to an AP and is associated with the connection that is labeled A. The AP is connected to a switch and is associated with the connection that is labeled B. A PC is attached to the switch. The switch is connected to router RTA. The connection of the PC, through the switch, to RTA is associated with the connection that is labeled C. RTA is connected via a serial connection to the ISP and is associated with the connection labeled D.Refer to the exhibit. What type of Layer 2 encapsulation will be used for connection D on the basis of this configuration on a newly installed router:',
    'HDLC');
add('Which two statements describe a PPP connection between two Cisco routers? (Choose two.)',
    'LCP tests the quality of the link.',
    'LCP manages compression on the link.');
add('Why is the serial link between router R1 and router R2 not operational?',
    'In each case the expected username is not the same as the remote router hostname.');
add('Which is an advantage of using PPP on a serial link instead of HDLC?',
    'option for authentication');


/*Prompts for matching questions and Packet Tracer Labs*/
add = prompts.add;

/*
 * template:
 * add('helper label');
 */

// CCNA4 v6.0 Chapter 2
add('max > max, auth > PAP, multi > load, comp > increase');
add('1 > establish, 2 > determine, 3 > negotiate');
add('1 > use LCP, 2 > calculate ID, 3 > calculate MD5, 4 > send ID, 5 > calculate hash, 6 > compare hash');
