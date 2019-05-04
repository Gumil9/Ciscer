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
