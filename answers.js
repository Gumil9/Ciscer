/*Answers to multiple choice and fill-in-the-blank questions*/
var add = tests.add;

/*
 * template:
 * add(question, answer0 [, answer1, ...]);
 */

// CCNA3 Scaling Networks v6.0 Chapter 3
add('Which two network design features require Spanning Tree Protocol (STP) to ensure correct network operation? (Choose two.)',
    'redundant links between Layer 2 switches',
    'removing single points of failure with multiple Layer 2 switches');
add('What is the outcome of a Layer 2 broadcast storm?',
    'New traffic is discarded by the switch because it is unable to be processed.');
add('What is the purpose of the Spanning Tree Protocol (STP)?',
    'prevents Layer 2 loops');
add('What is a characteristic of a Layer 2 loop?',
    'Broadcast frames are forwarded back to the sending switch.');
add('What additional information is contained in the 12-bit extended system ID of a BPDU?',
    'VLAN ID');
add('Which three components are combined to form a bridge ID?',
    'extended system ID',
    'MAC address',
    'bridge priority');
add('Which switch will be elected the root bridge and which switch will place a port in blocking mode? (Choose two.)',
    'SW4 will get a port blocked.',
    'SW3 will become the root bridge.');
add('Which trunk link will not forward any traffic after the root bridge election process is complete?',
    'Trunk2');
add('Which protocol provides up to 16 instances of RSTP, combines many VLANs with the same physical and logical topology into a common RSTP instance, and provides support for PortFast, BPDU guard, BPDU filter, root guard, and loop guard?',
    'MST');
add('Which Cisco switch feature ensures that configured switch edge ports do not cause Layer 2 loops if a port is mistakenly connected to another switch?',
    'BPDU guard');
add('Which two types of spanning tree protocols can cause suboptimal traffic flows because they assume only one spanning-tree instance for the entire bridged network? (Choose two.)',
    'STP',
    'RSTP');
add('Which spanning tree standard supports only one root bridge so that traffic from all VLANs flows over the same path?',
    '802.1D');
add('What is an advantage of PVST+?',
    'PVST+ optimizes performance on the network through load sharing.');
add('In which two port states does a switch learn MAC addresses and process BPDUs in a PVST network? (Choose two.)',
    'forwarding',
    'learning');
add('If no bridge priority is configured in PVST, which criteria is considered when electing the root bridge?',
    'lowest MAC address');
add('Which RSTP ports are connected to end devices?',
    'edge ports');
add('A network administrator is preparing the implementation of Rapid PVST+ on a production network. How are the Rapid PVST+ link types determined on the switch interfaces?',
    'Link types are determined automatically.');
add('Which port state will switch ports immediately transition to when configured for PortFast?',
    'forwarding');
add('Which STP priority configuration would ensure that a switch would always be the root switch?',
    'spanning-tree vlan 10 priority 0');
add('What is the role of the SW3 switch?',
    'root bridge');
add('To obtain an overview of the spanning tree status of a switched network, a network engineer issues the show spanning-tree command on a switch. Which two items of information will this command display? (Choose two.)',
    'The root bridge BID.',
    'The role of the ports in all VLANs.');
add('What port type is used to interconnect switches in a switch stack?',
    'StackWise');
add('Fill in the blank. Do not use abbreviations.',
    'mode rapid-pvst');
add('Which switch is the root bridge?',
    'Switch_4');


/*Prompts for matching questions and Packet Tracer Labs*/
add = prompts.add;

/*
 * template:
 * add('helper label');
 */

add('Prop > Rapid');
add('Cisco > PVST');
add('Fast > RSTP');
add('IEEE > MSTP');
