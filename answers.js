/*Answers to multiple choice and fill-in-the-blank questions*/
var add = tests.add;

/*
 * template:
 * add(question, answer0 [, answer1, ...]);
 */

// CCNA4 v7.0 test modules 1-4
d('Which tasks can be accomplished by using the command history feature? (Choose two.)', 'Set the command history buffer size.', 'Recall previously entered commands.');
add('What is the first action in the boot sequence when a switch is powered on?', 'load a power-on self-test program');
add('What must an administrator have in order to reset a lost password on a router?', 'physical access to the router');
add('When configuring a switch for SSH access, what other command that is associated with the login local command is required to be entered on the switch?', 'username username secret secret');
add('Which command displays information about the auto-MDIX setting for a specific interface?​', 'show controllers');
add('If one end of an Ethernet connection is configured for full duplex and the other end of the connection is configured for half duplex, where would late collisions be observed?', 'on the half-duplex end of the connection');
add('Which command is used to set the BOOT environment variable that defines where to find the IOS image file on a switch?', 'boot system');
add('What does a switch use to locate and load the IOS image?', 'BOOT environment variable');
add('Which protocol adds security to remote connections?', 'SSH');
add('What is a characteristic of an IPv4 loopback interface on a Cisco IOS router?​', 'It is a logical interface internal to the router.');
add('What is the minimum Ethernet frame size that will not be discarded by the receiver as a runt frame?', '64 bytes');

/*Prompts for matching questions and Packet Tracer Labs*/
add = prompts.add;

/*
 * template:
 * add('helper label');
 */


add('1: 1 - the switch adds the source MAC address...');
add('1: 2 - Because the destination is not known');
add('2: type - a value for the tag protocol ID value;');
add('2: VLAN ID - a VLAN number; user priority - a value that supports;');
add('2: canonical format identifier - an identifier that enables');
add('3: dynamic desirable- actively; trunk - permanent trunking');
add('3: dynamic auto - passively; nonegotiate - requires;');
