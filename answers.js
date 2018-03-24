/*Answers to multiple choice and fill-in-the-blank questions*/
var add = tests.add;

/*
 * template:
 * add(question, answer0 [, answer1, ...]);
 */

// CCNA4 v6.0 Chapter 5
add('What is the behavior of a switch as a result of a successful CAM table attack?',
    'The switch will forward all received frames to all other ports.');
add('What network attack seeks to create a DoS for clients by preventing them from being able to obtain a DHCP lease?',
    'DHCP starvation');
add('The exhibit shows a network consisting of a router, two switches, a DHCP client host, an attacker host, and a DHCP server. Switch S1 shows four interface connections: G0/1 to the DHCP client, G0/22 to switch S2, G0/24 to router R1, and G0/23 to the DHCP server. The attacker host is connected to switch S2.Refer to the exhibit. Which interface on switch S1 should be configured as a DHCP snooping trusted port to help mitigate DHCP spoofing attacks?',
    'G0/23');
add('When using 802.1X authentication, what device controls physical access to the network, based on the authentication status of the client?',
    'the switch that the client is connected to');
add('What device is considered a supplicant during the 802.1X authentication process?',
    'the client that is requesting authentication');
add('What is a drawback of the local database method of securing device access that can be solved by using AAA with centralized servers?',
    'User accounts must be configured locally on each device, which is an unscalable authentication solution.');
add('The exhibit shows a network topology. On the top, there are two routers, labeled R1 and R2. Under the two routers, there are two Layer 3 switches, labeled DS1 and DS2, . Under DS1 and DS2, there are three Layer 2 switches, labeled AS1, AS2, and AS3. Both R1 and R2 have two connections, one to DS1 and another to DS2. DS1 and DS2 each has three connections, one to AS1, one to AS2, and one to AS3. PC1 is connected on switch AS1 and PC2 is connected to switch AS2. There is a DHCP server connected on switch AS3.Refer to the exhibit. PC1 and PC2 should be able to obtain IP address assignments from the DHCP server. How many ports among switches should be assigned as trusted ports as part of the DHCP snooping configuration?',
    '7');
add('What protocol is used to encapsulate the EAP data between the authenticator and authentication server performing 802.1X authentication?',
    'RADIUS');
add('Which two protocols are used to provide server-based AAA authentication? (Choose two.)',
    'RADIUS',
    'TACACS+');
add('Which protocol defines port-based authentication to restrict unauthorized hosts from connecting to the LAN through publicly accessible switch ports?',
    '802.1x');
add('What are three techniques for mitigating VLAN attacks? (Choose three.)',
    'Enable trunking manually.',
    'Disable DTP.',
    'Set the native VLAN to an unused VLAN.');
add('Which statement describes SNMP operation?',
    'A set request is used by the NMS to change configuration variables in the agent device.');
add('A network administrator is analyzing the features supported by the multiple versions of SNMP. What are two features that are supported by SNMPv3 but not by SNMPv1 or SNMPv2c? (Choose two.)',
    'message encryption',
    'message source validation');
add('Which protocol or service can be configured to send unsolicited messages to alert the network administrator about a network event such as an extremely high CPU utilization on a router?',
    'SNMP');
add('What is the function of the MIB element as part of a network management system?',
    'to store data about a device');
add('Which SNMP version uses weak community string-based access control and supports bulk retrieval?',
    'SNMPv2c');
add('What are SNMP trap messages?',
    'unsolicited messages that are sent by the SNMP agent and alert the NMS to a condition on the network');
add('What can be concluded after the commands are entered?',
    'If an interface comes up, a trap is sent to the server.');
add('What can be concluded from the produced output?',
    'An ACL was configured to restrict SNMP access to an SNMP manager.');
add('A SNMP manager has IP address 172.16.1.120. The SNMP manager is unable to change configuration variables on the R1 SNMP agent. What could be the problem?',
    'The SNMP agent is not configured for write access.');
add('Router R1 was configured by a network administrator to use SNMP version 2. The following commands were issued: Why is the administrator not able to get any information from R1?',
    'There is a problem with the ACL configuration.');
add('A network administrator has issued the snmp-server user admin1 admin v3 encrypted auth md5 abc789 priv des 256 key99 command. What are two features of this command? (Choose two.)',
    'It uses the MD5 authentication of the SNMP messages.',
    'It adds a new user to the SNMP group.');
add('Which statement describes the RSPAN VLAN?',
    'The RSPAN VLAN must be the same on both the source and destination switch.');
add('Which statement describes the function of the SPAN tool used in a Cisco switch?',
    'It copies the traffic from one switch port and sends it to another switch port that is connected to a monitoring device.');
add('Based on the output generated by the show monitor session 1 command, how will SPAN operate on the switch?',
    'All traffic received on VLAN 10 or transmitted from VLAN 20 is forwarded to FastEthernet 0/1.');
add('Which command or set of commands will configure SW_A to copy all traffic for the server to the packet analyzer?',
    'Sw_A(config)# monitor session 5 source interface gi0/1, Sw_A(config)# monitor session 5 destination interface fa0/7');

/*Prompts for matching questions and Packet Tracer Labs*/
add = prompts.add;

/*
 * template:
 * add('helper label');
 */

// Added CCNA4 v6.0 Chapter 5: PT Skills Assessment - SIC: Access Control List and SNMP Configuration
add('1. HQ / Central (?) / Main (?) Router');
add('2. en');
add('3. conf t');
add('4. snmp-server community hq-monitor ro');
add('5. snmp-server community hq-inside rw');

add('6. access-list 1 permit 192.168.10.0 0.0.0.255');
add('7. access-list 12 permit host 192.168.10.5');
add('8. line vty 0 1');
add('9. access-class 12 in');
add('10. exit');

add('11. ip access-list extended SNMPACCESS');
add('12. Permit udp host 192.168.10.5 host 192.168.10.1 eq 161');
add('13. deny udp any host 192.168.10.1 eq 161');
add('14. permit ip any any');
add('15. interface g0/0');
add('16. ip access-group SNMPACCESS in');
add('17. exit');

add('18. ip access-list extended SNMPDENY');
add('19. deny udp any host 172.16.10.1 eq 161');
add('20. permit ip any any');
add('21. interface g0/1');
add('22. ip access-group SNMPDENY IN');
add('23. exit');

add('24. ip access-list extended INTOHQ');
add('25. permit tcp any host 172.16.10.5 eq 53');
add('26. permit udp any host 172.16.10.5 eq 53');
add('27. permit tcp any host 172.16.10.10 eq 80');
add('28. permit tcp any any established');
add('29. interface s0/0/0');
add('30. ip access-group INTOHQ IN');
add('31. exit');

add('32. ip access-list extended IN-DMZ');
add('33. permit udp any host 172.16.10.5 eq 53');
add('34. permit tcp any host 172.16.10.5 eq 53');
add('35. permit tcp any host 172.16.10.10 eq 80');
add('36. permit tcp host 192.168.10.5 host 172.16.10.10 eq 20');
add('37. permit tcp host 192.168.10.5 host 172.16.10.10 eq 21');
add('38. interface g0/1');
add('39. ip access-group IN-DMZ out');
add('40. exit');

add('41. ipv6 access-list DMZFTP');
add('42. deny udp any host 2001:DB8:ABCD:E::1 eq 161');
add('43. permit tcp host 2001:DB8:ABCD:B::5 host 2001:DB8:ABCD:A::10 eq 20');
add('44. permit tcp host 2001:DB8:ABCD:B::5 host 2001:DB8:ABCD:A::10 eq 21');
add('45. permit tcp 2001:DB8:ABCD:B::/64 host 2001:DB8:ABCD:A::10 eq 80');
add('46. int s0/0/1');
add('47. ipv6 traffic-filter DMZFTP IN');
