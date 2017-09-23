/*Answers to multiple choice and fill-in-the-blank questions*/
var add = tests.add;

/*
 * template:
 * add(question, answer0 [, answer1, ...]);
 */

// CCNA3 Scaling Networks v6.0 Chapter 2
add('What is a characteristic of VTP?',
    'Switches in VTP transparent mode forward VTP advertisements.');
add('Which two VTP parameters must be identical on all switches in the network in order to participate in the same VTP domain? (Choose two.)',
    'VTP domain name',
    'VTP domain password');
add('Which two events will cause the VTP revision number on a VTP server to change? (Choose two.)',
    'adding VLANs',
    'changing the VTP domain name');
add('Given the following configuration, which two statements are true? (Choose two.)',
    'This switch can create, modify, and delete all VLANs within the Cisco domain.',
    'This switch can send and receive advertisements from only the Cisco domain.');
add('Where is the vlan.dat file stored on a switch?',
    'in flash memory');
add('A switch is participating in a VTP domain and configured as a VTP server. The switch needs to propagate VLAN 10 (used by the Manufacturing department) throughout the VTP domain, but does not have any directly connected hosts using that particular VLAN. Which configuration would satisfy this requirement?',
    'vlan 10\nname Manufacturing\nexit');
add('Which command should the network administrator implement to prevent the transfer of DTP frames between a Cisco switch and a non-Cisco switch?',
    'S1(config-if)# switchport nonegotiate');
add('Under which two occasions should an administrator disable DTP while managing a local area network? (Choose two.)',
    'when connecting a Cisco switch to a non-Cisco switch',
    'on links that should not be trunking');
add('Which command displays the encapsulation type, the voice VLAN ID, and the access mode VLAN for the Fa0/1 interface?',
    'show interfaces Fa0/1 switchport');
add('Communication between the VLANs is not occurring. What could be the issue?',
    'The Gi1/1 switch port is not in trunking mode.');
add('A network administrator is configuring inter-VLAN routing. However, the communication between VLAN 10 and VLAN 20 fails. Based on the output of the show vlan command, what is the cause of the problem?',
    'Gi1/1 and Gi1/2 are not assigned to their respective VLANs.');
add('A network administrator is verifying the configuration of inter-VLAN routing. Users complain that PC2 cannot communicate with PC1. Based on the output, what is the possible cause of the problem?',
    'The encapsulation dot1Q 5 command contains the wrong VLAN.');
add('What happens to switch ports after the VLAN to which they are assigned is deleted?',
    'The ports stop communicating with the attached devices.');
add('After attempting to enter the configuration that is shown in router RTA, an administrator receives an error and users on VLAN 20 report that they are unable to reach users on VLAN 30. What is causing the problem?',
    'RTA is using the same subnet for VLAN 20 and VLAN 30.');
add('A router-on-a-stick configuration was implemented for VLANs 15, 30, and 45, according to the show running-config command output. PCs on VLAN 45 that are using the 172.16.45.0 /24 network are having trouble connecting to PCs on VLAN 30 in the 172.16.30.0 /24 network. Which error is most likely causing this problem?',
    'There is an incorrect IP address configured on GigabitEthernet 0/0.30.');
add('How are IP addressing designs affected by VLAN implementations?',
    'Each VLAN must have a different network number.');
add('Which three actions can cause problems with a VTP implementation? (Choose three.)',
    'using a non-trunk link to connect switches',
    'using non-Cisco switches',
    'using lowercase on one switch and uppercase on another switch for domain names');
add('The switch does the routing for the hosts that connect to VLAN 5. If the PC accesses a web server from the Internet, at what point will a VLAN number be added to the frame?',
    'No VLAN number is added to the frame in this design.');
add('How is traffic routed between multiple VLANs on a multilayer switch?',
    'Traffic is routed via internal VLAN interfaces.');
add('While configuring inter-VLAN routing on a multilayer switch, a network administrator issues the no switchport command on an interface that is connected to another switch. What is the purpose of this command?',
    'to create a routed port for a single network');
add('What is a disadvantage of using multilayer switches for inter-VLAN routing?',
    'Multilayer switches are more expensive than router-on-a-stick implementations.');
add('What is a characteristic of a routed port on a Layer 3 switch?',
    'It is not assigned to a VLAN.');
add('Fill in the blank.',
    'running configuration');
add('Which command is missing on the Layer 3 switch to restore the full connectivity between PC1 and the web server?',
    'ip address 192.168.20.1 255.255.255.0');
add('Match the DTP mode with its function. (Not all options are used.)',
    'des > actively, auto > passively, noneg > requires, trunk > perm trunking');



/*Prompts for matching questions and Packet Tracer Labs*/
add = prompts.add;

/*
 * template:
 * add('helper label');
 */

add('des > actively');
add('auto > passively');
add('noneg > requires');
add('trunk > perm trunking');
