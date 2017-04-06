/*Answers to multiple choice and fill-in-the-blank questions*/
var add = tests.add;

/*
 * template:
 * add(question, answer0 [, answer1, ...]);
 */

//TEST3
add('A network administrator is determining the best placement of VLAN trunk links. Which two types of point-to-point connections utilize VLAN trunking?​ (Choose two.)', 'between a switch and a server that has an 802.1Q NIC', 'between two switches that utilize multiple VLANs');
add('What happens to a port that is associated with VLAN 10 when the administrator deletes VLAN 10 from the switch?', 'The port becomes inactive.');
add('Refer to the exhibit. Interface Fa0/1 is connected to a PC. Fa0/2 is a trunk link to another switch. All other ports are unused. Which security best practice did the administrator forget to configure?', 'All user ports are associated with VLANs distinct from VLAN 1 and distinct from the ‘black-hole’ VLAN.');
add('Which command is used to remove only VLAN 20 from a switch?','no vlan 20');
add('A Cisco Catalyst switch has been added to support the use of multiple VLANs as part of an enterprise network. The network technician finds it necessary to clear all VLAN information from the switch in order to incorporate a new network design. What should the technician do to accomplish this task?', 'Delete the startup configuration and the vlan.dat file in the flash memory of the switch and reboot the switch.');
add('What is the effect of issuing a switchport access vlan 20 command on the Fa0/18 port of a switch that does not have this VLAN in the VLAN database?', 'VLAN 20 will be created automatically.');
add('Which command displays the encapsulation type, the voice VLAN ID, and the access mode VLAN for the Fa0/1 interface?', 'show interfaces Fa0/1 switchport*');
add('Port Fa0/11 on a switch is assigned to VLAN 30. If the command no switchport access vlan 30 is entered on the Fa0/11 interface, what will happen?', 'Port Fa0/11 will be returned to VLAN 1.');
add('What must the network administrator do to remove Fast Ethernet port fa0/1 from VLAN 2 and assign it to VLAN 3?', 'Enter the switchport access vlan 3 command in interface configuration mode.');
add('Which two Layer 2 security best practices would help prevent VLAN hopping attacks? (Choose two.)', 'Disable DTP autonegotiation on end-user ports.', 'Change the native VLAN number to one that is distinct from all user VLANs and is not VLAN 1.');
add('In a basic VLAN hopping attack, which switch feature do attackers take advantage of?', 'the default automatic trunking configuration');
add('A Cisco switch currently allows traffic tagged with VLANs 10 and 20 across trunk port Fa0/5. What is the effect of issuing a switchport trunk allowed vlan 30 command on Fa0/5?', 'It allows only VLAN 30 on Fa0/5.');
add('Refer to the exhibit. A frame is traveling between PC-A and PC-B through the switch. Which statement is true concerning VLAN tagging of the frame?', 'No VLAN tag is added to the frame.');
add('Refer to the exhibit. PC-A and PC-B are both in VLAN 60. PC-A is unable to communicate with PC-B. What is the problem?', 'The VLAN that is used by PC-A is not in the list of allowed VLANs on the trunk.');
add('What VLANs are allowed across a trunk when the range of allowed VLANs is set to the default value?', 'All VLANs will be allowed across the trunk.');
add('Under which two occasions should an administrator disable DTP while managing a local area network? (Choose two.)', 'when connecting a Cisco switch to a non-Cisco switch', 'on links that should not be trunking');
add('Open the PT Activity. Perform the tasks in the activity instructions and then answer the question. Which PCs will receive the broadcast sent by PC-C?', 'PC-D, PC-E');
add('Which two statements are true about VLAN implementation? (Choose two.)', 'Devices in one VLAN do not hear the broadcasts from devices in another VLAN.', 'VLANs logically group hosts, regardless of physical location.');
add('Refer to the exhibit. DLS1 is connected to another switch, DLS2, via a trunk link. A host that is connected to DLS1 is not able to communicate to a host that is connected to DLS2, even though they are both in VLAN 99. Which command should be added to Fa0/1 on DLS1 to correct the problem?', 'switchport trunk native vlan 66');
add('Which switch feature ensures that no unicast, multicast, or broadcast traffic is passed between ports that are configured with this feature?', 'PVLAN protected port');
add('Fill in the blank. Use the full command syntax.', ' show vlan brief');
add('Which three statements accurately describe VLAN types? (Choose three).', 'An 802.1Q trunk port, with a native VLAN assigned, supports both tagged and untagged traffic.', 'A management VLAN is any VLAN that is configured to access management features of the switch.', 'After the initial boot of an unconfigured switch, all ports are members of the default VLAN.');
add('Which command should the network administrator implement to prevent the transfer of DTP frames between a Cisco switch and a non-Cisco switch?', 'S1(config-if)# switchport nonegotiate');
add('Which combination of DTP modes set on adjacent Cisco switches will cause the link to become an access link instead of a trunk link?', 'dynamic auto – dynamic auto');
add('An administrator has determined that the traffic from a switch that corresponds to a VLAN is not being received on another switch over a trunk link. What could be the problem?', 'allowed VLANS on trunks');
add('What is the default DTP mode on Cisco 2960 and 3560 switches?', 'dynamic auto');
add('What can be determined from the output that is shown?', 'Interface FastEthernet 0/1 is configured with the switchport protected command.');
add('Which two characteristics match extended range VLANs?', 'They are saved in the running-config file by default.', 'VLAN IDs exist between 1006 to 4094.');
add('Match the IEEE 802.1Q standard VLAN tag field in the description. Place the options', 'User Priority – value that supports', 'Type – value for the tag', 'Canonical – identifier that', 'VLAN ID – VLAN number');
add('Match the DTP mode with its function. options in', 'permanent nontrunking -', 'passively - dynamic auto', 'requiers - nonegotiate', 'actively - dynamic desirable', 'permanent trunking - trunk');
add('Which type of VLAN is used to designate which traffic is untagged when crossing a trunk port', 'native', 'What are three primary benefits of using VLANs?', 'security', 'improved IT staff efficiency', 'cost reduction');
add('What happens to switch ports after the VLAN to which they are assigned is deleted', 'The ports stop communicating with the attached devices.');
add('Which two modes does Cisco recommend when configuring a particular switch port?', 'trunk', 'access');

/*Prompts for matching questions and Packet Tracer Labs*/
add = prompts.add;

/*
 * template:
 * add('helper label');
 */