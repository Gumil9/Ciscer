/*Answers to multiple choice and fill-in-the-blank questions*/
var add = tests.add;

/*
 * template:
 * add(question, answer0 [, answer1, ...]);
 */

add('A switch is participating in a VTP domain and configured as','vlan 10 name Manufacturing exit');
add('Which command should the network administrator implement','S1(config-if)# switchport nonegotiate');
add('While configuring inter-VLAN routing on a multilayer switch,','to create a routed port for a single network');
add('What happens to switch ports after the VLAN to which','The ports stop communicating with the attached devices.');
add('Given the following configuration, which two ','This switch can send and receive advertisements from only the Cisco domain.','This switch can create, modify, and delete all VLANs within the Cisco domain.');
add('What is a characteristic of a routed port on a Layer 3 switch','It is not assigned to a VLAN');
add('Where is the vlan.dat file stored on a switch?','in flash memory');
add('How are IP addressing designs affected by VLAN implementations?','Each VLAN must have a different network number.');
add('What is a disadvantage of using multilayer switches for ','Multilayer switches are more expensive than router-on-a-stick implementations.');
add('Refer to the exhibit. The switch does the routing for the hosts ','No VLAN number is added to the frame in this design.');
add('In a Cisco switch, the extended range VLAN information ','running configuration');
add('Which three actions can cause problems with a VTP implementation?','using a non-trunk link to connect switches','using lowercase on one switch and uppercase on another switch for domain names','using non-Cisco switches');
add('Which two events will cause the VTP revision number on ','adding VLANs','changing the VTP domain name');
add('On a Cisco switch, where is extended range VLAN information','running configuration file');
add('Refer to the exhibit. A network administrator is configuring inter-VLAN','Gi1/1 and Gi1/2 are not assigned to their respective VLANs.');
add('Refer to the exhibit. PC1 is unable to communicate with server 1.','Interface G0/2 is not configured as a trunk.');
add('Refer to the exhibit. Communication between the VLANs is not occurring. ','The Gi1/1 switch port is not in trunking mode.');
add('Which two VTP parameters must be identical on all switches ','VTP domain password','VTP domain name');
add('What is a characteristic of VTP?','Switches in VTP transparent mode forward VTP advertisements.');
add('Under which two occasions should an administrator disable DTP','when connecting a Cisco switch to a non-Cisco switch','on links that should not be trunking');
add('Refer to the exhibit. A network administrator is configuring inter-VLAN routing.','Gi1/1 and Gi1/2 are not assigned to their respective VLANs.');
add('Open the PT Activity. Perform the tasks in the activity instructions','ip address 192.168.20.1 255.255.255.0');
add('How is traffic routed between multiple VLANs on a multilayer switch?','Traffic is routed via internal VLAN interfaces.');
add('Refer to the exhibit. A network administrator is verifying the configuration of inter-VLAN routing.','The encapsulation dot1Q 5 command contains the wrong VLAN.');
add('Refer to the exhibit. A router-on-a-stick configuration was implemented','There is an incorrect IP address configured on GigabitEthernet 0/0.30.');
add('Refer to the exhibit. After attempting to enter the configuration that is shown','RTA is using the same subnet for VLAN 20 and VLAN 30.');
add('Which command displays the encapsulation type, the voice VLAN ID','show interfaces Fa0/1 switchport');
add('Which two network design features require Spanning Tree Protocol (STP)','redundant links between Layer 2 switches','removing single points of failure with multiple Layer 2 switches');
add('What is a characteristic of a Layer 2 loop?','Broadcast frames are forwarded back to the sending switch.');
add('What is the outcome of a Layer 2 broadcast storm?','New traffic is discarded by the switch because it is unable to be processed.');
add('What additional information is contained in the 12-bit extended system ID of a BPDU?','VLAN ID');
add('Which three components are combined to form a bridge ID?','extended system ID','MAC address','bridge priority');
add('Which STP priority configuration would ensure that a switch would','spanning-tree vlan 10 priority 0');
add('Which protocol provides up to 16 instances of RSTP, combines many','MST');
add('Which two types of spanning tree protocols can cause suboptimal ','STP','RSTP');
add('What is an advantage of PVST+?','PVST+ optimizes performance on the network through load sharing.');
add('In which two port states does a switch learn MAC addresses and','forwarding','learning');
add('If no bridge priority is configured in PVST, which criteria is ','lowest MAC address');
add('Which RSTP ports are connected to end devices?','edge ports');
add('A network administrator is preparing the implementation of Rapid','Link types are determined automatically.');
add('Which port state will switch ports immediately transition to when','forwarding');
add('To obtain an overview of the spanning tree status of a switched','The root bridge BID.','The role of the ports in all VLANs.');
add('What is the purpose of HSRP?','It provides a continuous network connection when a router fails.');
add('Which nonproprietary protocol provides router redundancy for ','VRRPv2');
add('Refer to the exhibit. Which protocol information is being displayed in the output?','GLBP');
add('Refer to the exhibit. A network engineer is troubleshooting host ','192.168.2.100');
add('Fill in the blank. Do not use abbreviations. The spanning-tree','mode rapid-pvst');
add('Fill in the blank. In FHRP operation, two or more routers are represented as a single','virtual');
add('What could be the effect of duplicate unicast frames arriving at','Application protocols malfunction.');
add('Refer to the exhibit. Which trunk link will not forward any traffic','Trunk2');
add('Which STP port role is adopted by a switch port if there is no','root port');
add('Which is the default STP operation mode on Cisco Catalyst switches?','PVST+');
add('What value determines the root bridge when all switches connected','MAC address');
add('Which two concepts relate to a switch port that is intended to have','edge port','PortFast');
add('Which Cisco switch feature ensures that configured switch edge','BPDU guard');
add('Refer to the exhibit. A network administrator configured routers R1 and R2','the virtual IP address and the virtual MAC address for the HSRP group 1');
add('To enable Rapid PVST+ on a Cisco switch, the spanning-tree mode','rapid-pvst');
add('The default hello timer value for STP BPDU frames is','2');
add('Launch PT. Hide and Save PT Open the PT Activity. Perform the tasks in the activity instructions and then answer the question.','Switch_4');

/*Prompts for matching questions and Packet Tracer Labs*/
add = prompts.add;

/*
 * template:
 * add('helper label');
 */

add('dynamic desirable > actively attempts');
add('dynamic auto > passively waits');
add('nonegotiate > requires manual');
add('trunk > permanent trunking');
add('The new forwarding router assumes both the IP and MAC address of the virtual router. -> Step 4');
add('The standby router assumes the role of the forwarding router. -> Step 3 ');
add('The forwarding router fails. -> Step 1');
add('The standby router stops seeing hello messages from the forwarding router. -> Step 2');
add('Cisco implementation of IEEE 802.1D ==> PVST+');
add('Fast converging enhancement of IEEE 802.1D ==> RSTP');
add('IEEE standard that reduces the number of STP instances ==+> MSTP');
add('Proprietary per VLAN implementation of IEEE 802.1w ==> Rapid PVST+');

// CCNA4 v6.0 CN Practice Skills Assessment – PT
add('1. On Router: HQ – Main – Corp');
add('2. en');
add('3. conf ter');
add('4. username ISP1 password cisco123 (or Cisco or cisco321)');
add('5. int s0/0/0');
add('6. encapsulation ppp');
add('7. ppp authentication chap');
add('8. exit');

add('9. interface tunnel 0');
add('10. ip address 172.16.1.1 255.255.255.252');
add('11. tunnel source s0/0/0');
add('12. tunnel destination 209.165.200.225');
add('13. exit');

add('14. router ospf 1');
add('15. network 192.168.2.0 0.0.0.255 area 0');
add('16. network 172.16.1.0 0.0.0.3 area 0');
add('17. exit');

add('18. router bgp 65020');
add('19. network 209.165.202.128 mask 255.255.255.224');
add('20. neighbor 209.165.200.230 remote-as 65001');
add('21. exit');

add('22. Access-list 1 permit 192.168.2.0 0.0.0.255');

add('23. ip access-list extended HTTP_ACCESS');
add('24. permit tcp 209.165.200.224 0.0.0.3 host 209.165.202.158 eq 80');
add('25. permit tcp 209.165.200.236 0.0.0.3 host 209.165.202.158 eq 80');
add('26. permit ip 192.168.2.0 0.0.0.255 any');
add('27. permit icmp any any echo-reply');
add('28. deny ip any any');

add('29. int g0/1');
add('30. ip access-group HTTP_ACCESS out');
add('31. exit');

add('32. ipv6 access-list HTTP6_ACCESS');
add('33. permit tcp 2001:DB8:ACAD::/63 host 2001:DB8:ACAD:B::158 eq 80');
add('34. permit tcp 2001:DB8:ACAD:3::/64 host 2001:DB8:ACAD:B::158 eq 80');
add('35. permit ipv6 2001:DB8:ACAD:2::/64 any');
add('36. permit icmp any any echo-reply');
add('37. deny ipv6 any any');

add('38. interface g0/1');
add('39. ipv6 traffic-filter HTTP6_ACCESS out');

add('40. On Router: Branch – Remote – Branch1');
add('41. en');
add('42. conf ter');
add('43. username ISP1 password cisco123 (or Cisco or cisco321)');
add('44. int s0/0/0');
add('45. encapsulation ppp');
add('46. ppp authentication chap');
add('47. exit');

add('48. interface tunnel 0');
add('49. ip address 172.16.1.2 255.255.255.252');
add('50. tunnel source s0/0/0');
add('51. tunnel destination 209.165.200.229');
add('52. exit');

add('53. router ospf 1');
add('54. network 192.168.0.0 0.0.1.255 area 0');
add('55. network 172.16.1.0 0.0.0.3 area 0');
add('56. exit');

add('57. Access-list 1 permit 192.168.0.0 0.0.1.255');

add('58. On Router: Customer – Other – Branch2');
add('59. en');
add('60. conf ter');
add('61. Access-list 1 permit 192.168.3.0 0.0.0.255');

add('62. ip access-list standard VTY_ADMIN');
add('63. permit 192.168.3.0 0.0.0.255');
add('64. permit 209.165.200.225 0.0.0.3');
add('65. deny any');
add('66. Line vty 0 4');
add('67. Access-class VTY_ADMIN in');
add('68. PROFIT');
