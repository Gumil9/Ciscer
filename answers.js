/*Answers to multiple choice and fill-in-the-blank questions*/
var add = tests.add;

/*
 * template:
 * add(question, answer0 [, answer1, ...]);
 */



/*Prompts for matching questions and Packet Tracer Labs*/
add = prompts.add;

/*
 * template:
 * add('helper label');
 */

// CCNA4 v6.0 Chapter 5: PT Skills Assessment - SIC: Access Control List and SNMP Configuration
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
