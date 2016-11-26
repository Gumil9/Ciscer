/*Answers to multiple choice and fill-in-the-blank questions*/
var add = tests.add;

/*
 * template:
 * add(question, answer0 [, answer1, ...]);
 */

// TEST 11
add('Which version of NAT allows many hosts inside a private network to simultaneously use a single inside global address for connecting to the Internet?', 'PAT');
add('What is the group of public IPv4 addresses used on a NAT-enabled router known as?', 'inside global addresses');
add('What problem is causing PC-A to be unable to communicate with the Internet?', 'The NAT interfaces are not correctly assigned.');
add('What is a disadvantage of NAT?', 'There is no end-to-end addressing.');
add('Which statement accurately describes dynamic NAT?', 'It provides an automated mapping of inside local to inside global IP addresses.');
add('When dynamic NAT without overloading is being used, what happens if seven users attempt to access a public server on the Internet when only six addresses are available in the NAT pool?', 'The request to the server for the seventh user fails.');
add('What is the purpose of port forwarding?', 'Port forwarding allows an external user to reach a service on a private IPv4 address that is located inside a LAN.');
add('Refer to the exhibit. What has to be done in order to complete the static NAT configuration on R1?', 'Interface S0/0/0 should be configured with the command ip nat outside.');
add('When NAT is employed in a small office, which address type is typically used for hosts on the local LAN?', 'private IP addresses');
add('Refer to the exhibit. What is the purpose of the command marked with an arrow shown in the partial configuration output of a Cisco broadband router?', 'defines which addresses can be translated');
add('A network administrator configures the border router with the command R1config# ip nat inside source list 4 pool corp. What is required to be configured in order for this particular command to be functional?', 'a NAT pool named corp that defines the starting and ending public IP addresses');
add('Refer to the exhibit. R1 is configured for NAT as displayed. What is wrong with the configuration?', 'NAT-POOL2 is not bound to ACL 1.');
add('A network engineer has configured a router with the command ip nat inside source list 4 pool corp overload. Why did the engineer use the overload option?', 'The company has more private IP addresses than available public IP addresses.');
add('Refer to the exhibit. What will be the effect of entering the command that is shown in the exhibit on R2 as part of the dynamic NAT configuration?', 'It will bind NAT-POOL1 with ACL 1.');
add('Which configuration would be appropriate for a small business that has the public IP address of 209.165.200.225/30 assigned to the external interface on the router that connects to the Internet?', 'access-list 1 permit 10.0.0.0 0.255.255.255', 'ip nat inside source list 1 interface serial 0/0/0 overload');
add('Which type of NAT maps a single inside local address to a single inside global address?', 'static');
add('Typically, which network device would be used to perform NAT for a corporate environment?', 'router');
add('Several key servers in an organization must be directly accessible from the Internet. What addressing policy should be implemented for these servers?', 'Assign static internal addresses and public external addresses to each of the servers.');
add('What is a characteristic of unique local addresses?', 'They allow sites to be combined without creating any address conflicts.');
add('Refer to the exhibit. Based on the output that is shown, what type of NAT has been implemented?', 'PAT using an external interface');
add('Based on the configuration and the output shown, what can be determined about the NAT status within the organization?', 'Not enough information is given to determine if both static and dynamic NAT are working.');
add('What are two required steps to configure PAT? Choose two.', 'Define a pool of global addresses to be used for overload translation.', 'Identify the inside interface.');
add('24. Using NAT terminology, what is the address of the source host on a private network as seen from inside the network?', 'inside local');
add('25. What is an advantage of deploying IPv4 NAT technology for internal hosts in an organization?', 'provides flexibility in designing the IPv4 addressing scheme');
add('26. A network administrator is configuring a static NAT on the border router for a web server located in the DMZ network. The web server is configured to listen on TCP port 8080. The web server is paired with the internal IP address of 192.168.5.25 and the external IP address of 209.165.200.230. For easy access by hosts on the internet, external users do not need to specify the port when visiting the web server. Which command will configure the static NAT?', 'R1config# ip nat inside source static tcp 192.168.5.25 8080 209.165.200.230 80');
add('28. What is the primary purpose of NAT?', 'conserve IPv4 addresses');
add('NAT overload is also know as', 'Port Address Translation');

//FINAL
add('1. Refer to the exhibit. A network administrator is configuring a router as a DHCPv6 server. The administrator issues a show ipv6 dhcp pool command to verify the configuration. Which statement explains the reason that the number of active clients is 0?', 'The state is not maintained by the DHCPv6 server under stateless DHCPv6 operation.');
add('2. Which command, when issued in the interface configuration mode of a router, enables the interface to acquire an IPv4 address automatically from an ISP, when that link to the ISP is enabled?', 'ip address dhcp');
add('3. Which kind of message is sent by a DHCP client when its IP address lease has expired?', 'a DHCPREQUEST unicast message');
add('4. Refer to the exhibit. R1 has been configured as shown. However, PC1 is not able to receive an IPv4 address. What is the problem?', 'The ip helper-address command was applied on the wrong interface.');
add('5. A college marketing department has a networked storage device that uses the IP address 10.18.7.5, TCP port 443 for encryption, and UDP port 4365 for video streaming. The college already uses PAT on the router that connects to the Internet. The router interface has the public IP address of 209.165.200.225/30. The IP NAT pool currently uses the IP addresses ranging from 209.165.200.228-236. Which configuration would the network administrator add to allow this device to be accessed by the marketing personnel from home?', 'ip nat inside source static udp 10.18.7.5 4365 209.165.200.225 4365');
add('6. What is a disadvantage of NAT?', 'There is no end-to-end addressing.');
add('7. Which type of traffic would most likely have problems when passing through a NAT device?', 'IPsec');
add('8. What benefit does NAT64 provide?', 'It allows sites to connect IPv6 hosts to an IPv4 network by translating the IPv6 addresses to IPv4 addresses.');
add('9. Refer to the exhibit. The Gigabit interfaces on both routers have been configured with subinterface numbers that match the VLAN numbers connected to them. PCs on VLAN 10 should be able to print to the P1 printer on VLAN 12. PCs on VLAN 20 should print to the printers on VLAN 22. What interface and in what direction should you place a standard ACL that allows printing to P1 from data VLAN 10, but stops the PCs on VLAN 20 from using the P1 printer? Choose two.', 'R1 Gi0/1.12', 'outbound');
add('10. Which two packet filters could a network administrator use on an IPv4 extended ACL? Choose two.', 'ICMP message type', 'destination UDP port number');
add('11. A network administrator is explaining to a junior colleague the use of the lt and gt keywords when filtering packets using an extended ACL. Where would the lt or gt keywords be used?', 'in an IPv4 extended ACL that allows packets from a range of TCP ports destined for a specific network device');
add('12. Which three values or sets of values are included when creating an extended access control list entry? Choose three.', 'access list number between 100 and 199', 'destination address and wildcard mask', 'source address and wildcard mask');
add('13. A network administrator is designing an ACL. The networks 192.168.1.0/25, 192.168.0.0/25, 192.168.0.128/25, 192.168.1.128/26, and 192.168.1.192/26 are affected by the ACL. Which wildcard mask, if any, is the most efficient to use when specifying all of these networks in a single ACL permit entry?', '0.0.1.255');
add('14. The computers used by the network administrators for a school are on the 10.7.0.0/27 network. Which two commands are needed at a minimum to apply an ACL that will ensure that only devices that are used by the network administrators will be allowed Telnet access to the routers? Choose two.', 'access-class 5 in', 'access-list 5 permit 10.7.0.0 0.0.0.31');
add('15. A network administrator is adding ACLs to a new IPv6 multirouter environment. Which IPv6 ACE is automatically added implicitly at the end of an ACL so that two adjacent routers can discover each other?', 'permit icmp any any nd-na');
add('16. Which statement describes a route that has been learned dynamically?', 'It is automatically updated and maintained by routing protocols.');
add('17. Refer to the exhibit. How did the router obtain the last route that is shown?', 'Another router in the same organization provided the default route by using a dynamic routing protocol.');
add('18. Which statement is correct about IPv6 routing?', 'IPv6 uses the link-local address of neighbors as the next-hop address for dynamic routes.');
add('19. Refer to the exhibit. Which type of route is 172.16.0.0/16?', 'level 1 parent route');
add('20. Which two factors are important when deciding which interior gateway routing protocol to use? Choose two.', 'scalability', 'speed of convergence');
add('21. Refer to the exhibit. Which type of IPv6 static route is configured in the exhibit?', 'recursive static route');
add('22. A router has used the OSPF protocol to learn a route to the 172.16.32.0/19 network. Which command will implement a backup floating static route to this network?', 'ip route 172.16.32.0 255.255.224.0 S0/0/0 200');
add('23. Which summary IPv6 static route statement can be configured to summarize only the routes to networks 2001:db8:cafe::/58 through 2001:db8:cafe:c0::/58?', 'ipv6 route 2001:db8:cafe::/56 S0/0/0');
add('24. Refer to the exhibit. If RIPng is enabled, how many hops away does R1 consider the 2001:0DB8:ACAD:1::/64 network to be?', '3');
add('25. Which statement is true about the difference between OSPFv2 and OSPFv3?', 'OSPFv3 routers do not need to have matching subnets to form neighbor adjacencies.');
add('26. What happens immediately after two OSPF routers have exchanged hello packets and have formed a neighbor adjacency?', 'They exchange abbreviated lists of their LSDBs.');
add('27. What does the cost of an OSPF link indicate?', 'A lower cost indicates a better path to the destination than a higher cost does.');
add('28. Which three pieces of information does a link-state routing protocol use initially as link-state information for locally connected links? Choose three.', 'the link router interface IP address and subnet mask', 'the type of network link', 'the cost of that link');
add('29. Which three requirements are necessary for two OSPFv2 routers to form an adjacency? Choose three.', 'The two routers must include the inter-router link network in an OSPFv2 network command.', 'The OSPF hello or dead timers on each router must match.', 'The link interface subnet masks must match.');
add('30. A router needs to be configured to route within OSPF area 0. Which two commands are required to accomplish this? Choose two.', 'RouterAconfig# router ospf 1', 'RouterAconfig-router# network 192.168.2.0 0.0.0.255 area 0');
add('31. What are two features of a link-state routing protocol? Choose two.', 'Routers send triggered updates in response to a change.', 'Routers create a topology of the network by using information from other routers.');
add('32. Why would an administrator use a network security auditing tool to flood the switch MAC address table with fictitious MAC addresses?', 'to determine which ports are not correctly configured to prevent MAC address flooding');
add('33. Two employees in the Sales department work different shifts with their laptop computers and share the same Ethernet port in the office. Which set of commands would allow only these two laptops to use the Ethernet port and create violation log entry without shutting down the port if a violation occurs?', 'switchport port-security violation restrict');
add('34. Which problem is evident if the show ip interface command shows that the interface is down and the line protocol is down?', 'A cable has not been attached to the port.');
add('35. What caused the following error message to appear?', 'Port security was enabled on the switch port, and an unauthorized connection was made on switch port Fa0/8.');
add('36. While analyzing log files, a network administrator notices reoccurring native VLAN mismatches. What is the effect of these reoccurring errors?', 'The control and management traffic on the error-occurring trunk port is being misdirected or dropped.');
add('37. Which three pairs of trunking modes will establish a functional trunk link between two Cisco switches? Choose three.', 'dynamic desirable – dynamic desirable', 'dynamic desirable – dynamic auto', 'dynamic desirable – trunk');
add('38. What are two ways of turning off DTP on a trunk link between switches? Choose two.', 'Configure attached switch ports with the nonegotiate command option.', 'Place the two attached switch ports in access mode.');
add('39. A network administrator is using the router-on-a-stick method to configure inter-VLAN routing. Switch port Gi1/1 is used to connect to the router. Which command should be entered to prepare this port for the task?', 'Switch(config)# interface gigabitethernet 1/1 ', ' Switch(config-if)# switchport mode trunk');
add('40. Which two characteristics describe the native VLAN? Choose two.', 'The native VLAN traffic will be untagged across the trunk link.', 'The native VLAN provides a common identifier to both ends of a trunk.');
add('41. On a switch that is configured with multiple VLANs, which command will remove only VLAN 100 from the switch?', 'Switchconfig# no vlan 100');
add('42. What is the purpose of setting the native VLAN separate from data VLANs?', 'A separate VLAN should be used to carry uncommon untagged frames to avoid bandwidth contention on data VLANs.');
add('43. A network contains multiple VLANs spanning multiple switches. What happens when a device in VLAN 20 sends a broadcast Ethernet frame?', 'Only devices in VLAN 20 see the frame.');
add('44. Refer to the exhibit. The partial configuration that is shown was used to configure router on a stick for VLANS 10, 30, and 50. However, testing shows that there are some connectivity problems between the VLANs. Which configuration error is causing this problem?', 'The wrong VLAN has been configured on subinterface Fa0/0.50.');
add('45. What is the purpose of an access list that is created as part of configuring IP address translation?', 'The access list defines the private IP addresses that are to be translated.');
add('46. Which command will create a static route on R2 in order to reach PC B?', 'R2config# ip route 172.16.2.0 255.255.255.0 172.16.3.1');
add('52. Which information does a switch use to populate the MAC address table?', 'the source MAC address and the incoming port');
add('53. Refer to the exhibit. How many broadcast and collision domains exist in the topology?', '5 broadcast domains and 10 collision domains');
add('54. What is a function of the distribution layer?', 'interconnection of large-scale networks in wiring closets');
add('55. Which switching method drops frames that fail the FCS check?', 'store-and-forward switching');

add('In IPv6, all routes are level​​ 1 ultimate routes', '1');
add('Static routes are configured by the use of the ip route global configuration command.', 'ip route');
add('The OSPF Type 1 packet is the ​Hello packet.', 'Hello');
add('The default administrative distance for a static route is ', '1');

/*Prompts for matching questions and Packet Tracer Labs*/
add = prompts.add;

/*
 * template:
 * add('helper label');
 */

add('step 5 => R1 replaces the address 192.168.10.10 with a translated inside global address.');
add('step 2 => R1 checks the NAT configuration to determine if this packet should be translated.');
add('step 4 => R1 selects an available global address from the dynamic address pool.');
add('step 1 => The cost sends packets that request a connection to the server at the address 209.165.200.254');
add('step 3 => If there is no translation entry for this IP address, R1 determines that the source address 192.168.10.10 must be translated.');

add('Each router is responsible for “saying hello” to its neighbors on directly connected networks. > step 2');
add('Each router builds a Link-State Packet (LSP) containing the state of each directly connected link > step 3');
add('Each router learns about its own directly connected networks. > step 1');
add('Each router floods the LSP to all neighbors, who then store all LSPs received in a database > step 4');
add('Each router uses the database to construct a complete map of the topology and computes the best > step 5');

add('PT');
add('------------------------SITE1----------------------------');
add('enable');
add('configure terminal');
add('hostname SITE1');
add('no ip domain-lookup');
add('enable secret class');
add('line console 0');
add('password cisco');
add('login');
add('logging synchronous');
add('exit');
add('line vty 0 15');
add('password cisco');
add('login');
add('logging synchronous');
add('exit');
add('service password-encryption');
add('banner motd %Precaucion%');

add('interface s0/0/0');
add('ip addres 192.168.10.105 255.255.255.252');
add('clock rate 128000');
add('bandwidth 128');
add('ip ospf cost 7500');
add('no shutdown');
add('exit');
add('interface g0/0');
add('no shutdown');
add('exit');
add('interface g0/0.45');
add('encapsulation dot1Q 45');
add('ip address 192.168.45.1 255.255.255.0');
add('no shutdown');
add('exit');
add('interface g0/0.47');
add('encapsulation dot1Q 47');
add('ip address 192.168.47.1 255.255.255.0');
add('no shutdown');
add('exit');
add('interface g0/0.101');
add('encapsulation dot1Q 101');
add('ip address 192.168.101.1 255.255.255.0');
add('interface g0/0');
add('no shutdown');
add('exit');

add('ip route 0.0.0.0 0.0.0.0 s0/0/0');
add('router ospf 10');
add('router-id 1.1.1.1');
add('network 192.168.10.104 0.0.0.3 area 0');
add('network 192.168.45.0 0.0.0.255 area 0');
add('network 192.168.47.0 0.0.0.255 area 0');
add('network 192.168.101.0 0.0.0.255 area 0');
add('passive-interface g0/0.45');
add('passive-interface g0/0.47');
add('passive-interface g0/0.101');

add('ip dhcp excluded-address 192.168.45.1 192.168.45.20');
add('ip dhcp excluded-address 192.168.47.1 192.168.47.20');
add('ip dhcp pool vlan45');
add('default-router 192.168.45.1');
add('dns-server 192.168.18.100');
add('network 192.168.45.0 255.255.255.0');
add('ip dhcp pool vlan47');
add('default-router 192.168.47.1');
add('dns-server 192.168.18.100');
add('network 192.168.47.0 255.255.255.0');
add('end');

add('-------------------------HQ------------------------------');
add('enable');
add('configure terminal');

add('line vty 0 15');
add('access-class MANAGE in');
add('password cisco');
add('login');
add('logging synchronous');
add('exit');

add('interface s0/0/0');
add('ip addres 192.168.10.106 255.255.255.252');
add('bandwidth 128');
add('ip ospf cost 7500');
add('no shutdown');
add('exit');
add('interface s0/0/1');
add('ip addres 192.168.10.113 255.255.255.252');
add('bandwidth 128');
add('clock rate 128000');
add('no shutdown');
add('exit');
add('interface s0/1/0');
add('ip addres 198.51.100.1 255.255.255.240');
add('bandwidth 128');
add('no shutdown');
add('exit');
add('interface g0/0');
add('ip addres 192.168.18.41 255.255.255.248');
add('bandwidth 128');
add('no shutdown');
add('exit');

add('ip route 0.0.0.0 0.0.0.0 s0/1/0');
add('ip route 192.168.200.0 255.255.252.0 s0/0/1');

add('router ospf 10');
add('router-id 2.2.2.2');
add('network 192.168.10.104 0.0.0.3 area 0');
add('network 192.168.10.112 0.0.0.3 area 0');
add('network 192.168.18.40 0.0.0.7 area 0');
add('passive-interface g0/0');
add('exit');

add('ip nat inside source static 192.168.18.46 198.51.100.14');
add('int s0/1/0');
add('ip nat outside');
add('exit');
add('int g0/0');
add('ip nat inside');
add('exit');

add('ip nat pool INTERNET 198.51.100.3 198.51.100.13 netmask 255.255.255.240');
add('ip nat inside source list 1 pool INTERNET');
add('access-list 1 permit 192.168.45.0 0.0.0.255');
add('access-list 1 permit 192.168.47.0 0.0.0.255');
add('access-list 1 permit 192.168.200.0 0.0.3.255');

add('ip access-list standard MANAGE');
add('permit host 203.0.113.18');
add('access-list 101 permit ip host 203.0.113.18 any');
add('access-list 101 permit tcp any host 198.51.100.14 eq www');
add('access-list 101 permit tcp any any established ');
add('access-list 101 deny ip any any ');
add('int s0/1/0');
add('ip access-group 101 in');
add('end');

add('------------------------SITE2----------------------------');
add('enable');
add('configure terminal');

add('interface s0/0/0');
add('ip addres 192.168.10.126 255.255.255.252');
add('bandwidth 128');
add('clock rate 128000');
add('no shutdown');
add('exit');
add('interface s0/0/1');
add('ip addres 192.168.10.114 255.255.255.252');
add('bandwidth 128');
add('clock rate 128000');
add('no shutdown');
add('exit');

add('ip route 0.0.0.0 0.0.0.0 s0/0/1');
add('ip route 192.168.200.0 255.255.252.0 s0/0/0');

add('router ospf 10');
add('router-id 3.3.3.3');
add('network 192.168.10.112 0.0.0.3 area 0');
add('exit');


add('----------------------SITE1-SW1--------------------------');
add('enable');
add('configure terminal');


add('interface vlan 101');
add('ip addres 192.168.101.11 255.255.255.0');
add('no shutdown');
add('exit');

add('vlan 45');
add('name finance');
add('vlan 47');
add('name sales');
add('vlan 101');
add('name netadmin');
add('exit');
add('interface range g0/1-2');
add('switchport mode trunk');
add('no shutdown');
add('exit');
add('interface f0/10');
add('switchport mode access');
add('switchport access vlan 45');
add('no shutdown');
add('exit');
add('interface f0/15');
add('switchport mode access');
add('switchport access vlan 47');
add('no shutdown');
add('exit');
add('ip default-gateway 192.168.101.1');
add('interface range f0/1-9,f0/11-14, f0/16-24');
add('switchport mode access');
add('shutdown');
add('end');

add('----------------------SITE1-SW2--------------------------');
add('enable');
add('configure terminal ');

add('interface vlan 101');
add('ip addres 192.168.101.22 255.255.255.0');
add('no shutdown');
add('exit');

add('vlan 45');
add('name finance');
add('vlan 47');
add('name sales');
add('vlan 101');
add('name netadmin');
add('exit');
add('interface g0/1');
add('switchport mode trunk');
add('no shutdown');
add('exit');
add('interface f0/3');
add('switchport mode access');
add('switchport access vlan 45');
add('no shutdown');
add('exit');
add('interface f0/21');
add('switchport mode access');
add('switchport access vlan 47');
add('no shutdown');
add('exit');
add('ip default-gateway 192.168.101.1');
add('interface range f0/1-2, f0/4-20, f0/22-24');
add('switchport mode access');
add('shutdown');
add('end');
