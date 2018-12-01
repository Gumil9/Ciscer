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

// CCNA3 v6.0 OSPF Practice Skills Assessment
add('CCNA3 v6.0 OSPF Practice Skills Assessment');

add('Administration = R0 = top & center');

add('Science = R010 = middle & left');
add('Technology = R020 = middle & right');

add('Bio = R101 = low & left-most');
add('Physics = R102 = low & left-center');
add('CompSci = R201 = low & right-center');
add('Electronics = R202 = low & right-most');

add('Administration = R0 = top & center');
add('en | conf term | ip route 0.0.0.0 0.0.0.0 s0/1/0 | ipv6 unicast-routing | ipv6 route ::/0 s0/1/0');
add('router ospf 10 | network 10.10.10.0 0.0.0.3 area 0 | network 10.10.20.0 0.0.0.3 area 0');
add('router-id 10.20.0.0 | do clear ip ospf process | yes | exit');
add('int s0/0/0 | bandwidth 128 | int s0/0/1 | bandwidth 128 | exit');
add('int s0/0/0 | ipv6 ospf 10 area 0 | int s0/0/1 | ipv6 ospf 10 area 0 | exit');
add('Ipv6 router ospf 10 | router-id 10.20.0.0 | do clear ipv6 ospf process | yes | exit');
add('router ospf 10 | auto-cost reference-bandwidth 1000 | exit');
add('router ospf 10 | default-information originate | exit | ipv6 router ospf 10 | default-information originate | exit');
add('ipv6 router ospf 10 | auto-cost reference-bandwidth 1000');

add('Science = R010 = middle & left');
add('en | conf term | router ospf 10 | network 10.10.10.0 0.0.0.3 area 0 | network 172.16.10.0 0.0.0.3 area 10');
add('network 172.16.10.4 0.0.0.3  area 10 | router-id 10.0.0.0 | do clear ip ospf process | yes | exit | ipv6 unicast-routing');
add('Int s0/0/0 | Ipv6 ospf 10 area 0 | exit | Int s0/0/1 | Ipv6 ospf 10 area 10 | exit'); 
add('Int s0/1/0 | Ipv6 ospf 10 area 10 | exit | int s0/0/0 | bandwidth 128 | exit');
add('ipv6 router ospf 10 | router-id 10.0.0.0 | do clear ipv6 ospf process | yes | exit');
add('ipv6 router ospf 10 | auto-cost reference-bandwidth 1000 | exit');
add('router ospf 10 | auto-cost reference-bandwidth 1000');

add('Technology = R020 = middle & right');
add('en | conf term | Router ospf 10 | network 10.10.20.0 0.0.0.3 area 0 | network 172.16.20.0 0.0.0.3 area 20 | network 172.16.20.4 0.0.0.3  area 20');
add('router-id 20.0.0.0 | do clear ip ospf process | yes | exit | ipv6 unicast-routing');
add('Int s0/0/0 | Ipv6 ospf 10 area 0 | exit | Int s0/0/1 | Ipv6 ospf 10 area 20 | exit'); 
add('Int s0/1/0 | Ipv6 ospf 10 area 20 | exit | int s0/0/0 | bandwidth 128 | exit');
add('Ipv6 router ospf 10 | router-id 20.0.0.0 | do clear ipv6 ospf process | yes | exit');
add('router ospf 10 | auto-cost reference-bandwidth 1000 | exit | ipv6 router ospf 10 | auto-cost reference-bandwidth 1000');

add('Bio = R101 = low & left-most');
add('en | conf term | router ospf 10 | network 172.16.10.0 0.0.0.3 area 10 | network 192.168.11.0 0.0.0.255 area 10 | network 172.16.10.8 0.0.0.3  area 10');
add('router-id 10.1.1.1 | do clear ip ospf process | yes | exit | ipv6 unicast-routing');
add('int s0/0/0 | ipv6 ospf 10 area 10 | exit | int g0/0 | ipv6 ospf 10 area 10 | exit | int g0/1 | ipv6 ospf 10 area 10 | exit');
add('ipv6 router ospf 10 | router-id 10.1.1.1 | do clear ipv6 ospf process | yes | exit | int g0/1 | ip ospf priority 255 | exit');
add('router ospf 10 | passive-interface g0/0 | exit | router ospf 10 | auto-cost reference-bandwidth 1000 | exit');
add('int g0/1 | ip ospf hello-interval 5 | ip ospf dead-interval 20 | exit | int g0/1 | ipv6 ospf priority 255 | exit');
add('ipv6 router ospf 10 | passive-interface g0/0 | exit | int g0/1 | ipv6 ospf hello-interval 5 | ipv6 ospf dead-interval 20 | exit');
add('ipv6 router ospf 10 | auto-cost reference-bandwidth 1000');

add('Physics = R102 = low & left-center');
add('en | conf term | Router ospf 10 | network 172.16.10.4 0.0.0.3 area 10 | network 172.16.10.8 0.0.0.3 area 10 | network 192.168.12.0 0.0.0.255 area 10');
add('router-id 10.2.2.2 | do clear ip ospf process | yes | exit | ipv6 unicast-routing');
add('int s0/0/0 | ipv6 ospf 10 area 10 | exit | int g0/0 | ipv6 ospf 10 area 10 | exit | int g0/1 | ipv6 ospf 10 area 10 | exit ');
add('ipv6 router ospf 10 | router-id 10.2.2.2 | do clear ip ospf process | yes | exit');
add('int g0/1 | ip ospf priority 200 | exit | router ospf 10 | passive-interface g0/0 | exit | router ospf 10 | auto-cost reference-bandwidth 1000 | exit');
add('int g0/1 | ip ospf hello-interval 5 | ip ospf dead-interval 20 | exit | int g0/1 | ipv6 ospf priority 200 | exit');
add('ipv6 router ospf 10 | passive-interface g0/0 | exit | int g0/1 | ipv6 ospf hello-interval 5 | ipv6 ospf dead-interval 20 | exit');
add('ipv6 router ospf 10 | auto-cost reference-bandwidth 1000');

add('CompSci = R201 = low & right-center');
add('en | conf term | Router ospf 10 | network 172.16.20.0 0.0.0.3 area 20 | network 192.168.21.0 0.0.0.255 area 20');
add('router-id 20.1.1.1 | do clear ip ospf process | yes | exit | ipv6 unicast-routing');
add('int s0/0/0 | ipv6 ospf 10 area 20 | exit | int g0/0 | ipv6 ospf 10 area 20 | exit');
add('ipv6 router ospf 10 | router-id 20.1.1.1 | do clear ipv6 ospf process | yes | exit | router ospf 10 | passive-interface g0/0 | exit');
add('ipv6 router ospf 10 | passive-interface g0/0 | exit | router ospf 10 | auto-cost reference-bandwidth 1000 | exit');
add('ipv6 router ospf 10 | auto-cost reference-bandwidth 1000');

add('Electronics = R202 = low & right-most');
add('en | conf term | Router ospf 10 | network 172.16.20.4 0.0.0.3 area 20 | network 192.168.22.0 0.0.0.255 area 20');
add('router-id 20.2.2.2 | do clear ip ospf process | yes | exit | ipv6 unicast-routing');
add('int s0/0/0 | ipv6 ospf 10 area 20 | exit | int g0/0 | ipv6 ospf 10 area 20 | exit');
add('ipv6 router ospf 10 | router-id 20.2.2.2 | do clear ipv6 ospf process | yes | exit');
add('router ospf 10 | passive-interface g0/0 | exit | ipv6 router ospf 10 | passive-interface g0/0 | exit');
add('router ospf 10 | auto-cost reference-bandwidth 1000 | exit | ipv6 router ospf 10 | auto-cost reference-bandwidth 1000');

add('That is all!');
