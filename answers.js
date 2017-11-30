/*Answers to multiple choice and fill-in-the-blank questions*/
var add = tests.add;

/*
 * template:
 * add(question, answer0 [, answer1, ...]);
 */

// CCNA3 Scaling Networks v6.0 Chapter 10
add('A network administrator has just changed the router ID on a router that is working in an OSPFv2 environment. What should the administrator do to reset the adjacencies and use the new router ID?',
    'Issue the clear ip ospf process privileged mode command.');
add('What three conclusions can be drawn from the displayed output? (Choose three.)',
    'The DR can be reached through the GigabitEthernet 0/0 interface.',
    'The router ID values were not the criteria used to select the DR and the BDR.',
    'There have been 9 seconds since the last hello packet sent.');
add('Which conclusion can be drawn from this OSPF multiaccess network?',
    'With an election of the DR, the number of adjacencies is reduced from 6 to 3.');
add('Which OSPF feature allows a remote OSPF area to participate in OSPF routing when it cannot connect directly to OSPF Area 0?',
    'virtual link');
add('What are three resulting DR and BDR elections for the given topology? (Choose three.)',
    'R1 is DR for segment A.',
    'R2 is BDR for segment A.',
    'R5 is BDR for segment B.');
add('When checking a routing table, a network technician notices the following entry:',
    'This route is a propagated default route.');
add('What two conclusions can be drawn based on the output of the show ipv6 route command? (Choose two.)',
    'R2 receives default route information from another router.',
    'Route 2001:DB8:CAFE:B001::/64 is a route advertised by an ABR.');
add('Which command will a network engineer issue to verify the configured hello and dead timer intervals on a point-to-point WAN link between two routers that are running OSPFv2?',
    'show ip ospf interface serial 0/0/0');
add('A network engineer suspects that OSPFv3 routers are not forming neighbor adjacencies because there are interface timer mismatches. Which two commands can be issued on the interface of each OSFPv3 router to resolve all timer mismatches? (Choose two.)',
    'no ipv6 ospf hello-interval',
    'no ipv6 ospf dead-interval');
add('A network engineer has manually configured the hello interval to 15 seconds on an interface of a router that is running OSPFv2. By default, how will the dead interval on the interface be affected?',
    'The dead interval will now be 60 seconds.');
add('Which command can be used to view the OSPF hello and dead time intervals?',
    'show ip ospf interface');
add('A network administrator is configuring OSPF for R1 and R2, but the adjacency cannot be established. What is the cause of the issue?',
    'The area ID is misconfigured.');
add('What the amount of time that has elapsed since the router received a hello packet?',
    '4 seconds');
add('Which two parameters must match between neighboring OSPF routers in order to form an adjacency? (Choose two.)',
    'hello / dead timers',
    'network types');
add('A network administrator has configured OSPFv2 on the two Cisco routers but PC1 is unable to connect to PC2. What is the most likely problem?',
    'Interface Fa0/0 has not been activated for OSPFv2 on router R2.');
add('R1 and R2 are connected to the same LAN segment and are configured to run OSPFv3. They are not forming a neighbor adjacency. What is the cause of the problem?',
    'The timer intervals of R1 and R2 do not match.');
add('A network administrator is troubleshooting an OSPFv3 configuration on an IPv6 network. The administrator issues the show ipv6 protocols command. What is the purpose for this command?',
    'to verify OSPFv3 configuration information');
add('Directly connected networks configured on router R1 are not being shared with neighboring routers through OSPFv3. What is the cause of the issue?',
    'There is a mismatch of OSPF process ID in commands.');
add('An administrator is troubleshooting OSPFv3 adjacency issues. Which command would the administrator use to confirm that OSPFv3 hello and dead intervals are matching between routers?',
    'show ipv6 ospf interface');
add('What three states are transient OPSF neighbor states that indicate a stable adjacency is not yet formed between two routers? (Choose three.)',
    'exstart',
    'exchange',
    'loading');
add('Which routers are the DR and BDR in this topology?',
    'DR:R3 BDR:R5');
add('A network administrator is configuring multiarea OSPFv3 on the routers. The routing design requires that the router RT1 is a DROTHER for the network in Area 0 and the DR for the network in Area 1. Check the settings and status of the routers. What can the administrator do to ensure that RT1 will meet the design requirement after all routers restart?',
    'Use the ipv6 ospf priority 10 command on the interface g0/2 of RT1.');


/*Prompts for matching questions and Packet Tracer Labs*/
add = prompts.add;

/*
 * template:
 * add('helper label');
 */

// CCNA3 Scaling Networks v6.0 Chapter 10
add('1 > interface, 2 > manually, 3 > loopback, 4 > physical');

// CCNA2 Routing and Switching v6.0 RSE PT Assessment Part 1
add('1:Main/HQ - the main router with many child switches.');
add('2:M:en|conf t|no ip domain-lookup|host Main/HQ|serv pass|en secret class');
add('3:M:banner motd $users that unauthorized access is prohibited$');
add('4:M:line con 0|logging sync|pass cisco|login|exit');
add('5:M:ip domain-name cisco.com|username admin pass class|crypto key gen rsa|yes|1024');
add('6:M:ip ssh version 2|line vty 0 15|transport input ssh|login local|exit');
add('7:M:int g0/1|ip add 192.168.2.1 255.255.255.0|no shut|desc Local-1/Branch-1');
add('8:M:int s0/0/0|ip add 10.1.1.1 255.255.255.252|no shut|desc Connection-to-Branch|exit');
add('9:M:int g0/0.5|encaps dot1Q 5|ip add 192.168.1.1 255.255.255.240');
add('10:M:int g0/0.10|encaps dot1Q 10|ip add 192.168.1.17 255.255.255.240');
add('11:M:int g0/0.15|encaps dot1Q 15|ip add 192.168.1.33 255.255.255.240');
add('12:M:int g0/0.50|encaps dot1Q 50|ip add 192.168.1.49 255.255.255.240|exit');
add('13:M:int g0/0|no shut|exit|ip access-list standart block15|deny 192.168.1.32 0.0.0.15');
add('14:M:permit any|ip access-list snatdart ACL|line vty 0|access-class ACL in');
add('15:M:int g0/0.10|ip access-group block15 out|exit|Router rip|version 2');
add('16:M:netw 10.1.1.0|netw 192.168.1.0|netw 192.168.1.16|netw 192.168.1.32');
add('17:M:netw 192.168.1.48|netw 192.168.2.0|no auto-summary|passive-interface g0/0.5');
add('18:M:passive-interface g0/0.10|passive-interface g0/0.15|passive-interface g0/0.50');
add('19:M:passive-interface g0/0|passive-interface g0/1|exit');
add('20:M:serv timestamps log datetime msec|service timestamps debug datetime msec');
add('21:M:ntp server 192.168.2.10|logg 192.168.2.10|logg trap debugging|ntp update-calendar');
add('22: (R)emote/Branch - The lonely one-childish router on the right');
add('23:R:en|conf t|router rip|version 2|netw 10.1.1.0|netw 192.168.3.0|no auto-summary');
add('24:R:default-information originate|passive-interface s0/0/1|passive-interface g0/0');
add('25: Main-1-SW/5W-Bldg-A - top parent switch (ST)');
add('26:ST:en|conf t|vlan 5|name ACAD/OFFICE|vlan 10|name TEACH/ACCT|vlan 15|name STUDENT/PROD');
add('27:ST:vlan 50|name NETADMIN/ADMIN|exit|int range f0/23, f0/24, g0/1|switchport mode trunk');
add('28:ST:exit|int vlan 50|ip add 192.168.1.50 255.255.255.240|no shut|exit');
add('29:ST:ip default-gateway 192.168.1.49');
add('30:Main-2-SW/SW-Bldg-A-1 - the left-down switch (SL)');
add('31:SL:en|conf t|vlan 5|name ACAD/OFFICE|vlan 10|name TEACH/ACCT|vlan 15|name STUDENT/PROD');
add('32:SL:vlan 50|name NETADMIN/ADMIN|exit|int f0/23|switchport mode trunk');
add('33:SL:int f0/5|switchport mode access|switchport access vlan 5');
add('34:SL:int f0/10|switchport mode access|switchport access vlan 10');
add('35:SL:int f0/15|switchport mode access|switchport access vlan 15');
add('36:SL:int f0/20|switchport mode access|switchport access vlan 50|exit');
add('37:SL:int vlan 50|ip add 192.168.1.51 255.255.255.240|no shut|exit');
add('38:SL:ip default-gateway 192.168.1.49');
add('39:SL:int range f0/1-4, f0/6-9, f0/11-14, f0/16-19, f0/21-22, f0/24, g0/1-2|shutdown');
add('40:SL:int range f0/5, f0/10, f0/15, f0/20|switchport mode access');
add('41:SL:switchport port-security|switchport port-security maximum 2');
add('42:SL:switchport port-security mac-add sticky|switchport port-security violation protect');
add('43: Main-3-SW/SW-Bldg-A-2 - the middle-down switch (SM)');
add('44:SM:en|conf t|vlan 5|name ACAD/OFFICE|vlan 10|name TEACH/ACCT|vlan 15|name STUDENT/PROD');
add('45:SM:vlan 50|name NETADMIN/ADMIN|exit|int f0/24|switchport mode trunk|exit');
add('46:SM:int f0/5|switchport mode access|switchport mode access vlan 5');
add('47:SM:int f0/10|switchport mode access|switchport mode access vlan 10');
add('48:SM:int f0/15|switchport mode access|switchport mode access vlan 15');
add('49:SM:int f0/20|switchport mode access|switchport mode access vlan 50');
add('50:SM:int vlan 50|ip add 192.168.1.52 255.255.255.240|no shut|exit');
add('51:SM:ip default-gateway 192.168.1.49');
add('52: HOSTS settings for both VARIANTS');
add('53:H:ACAD/OFFICE-1:IP 192.168.1.10 | MASK 255.255.255.240 | GW 192.168.1.1');
add('53:H:TEACH/PROD-1:IP 192.168.1.26 | MASK 255.255.255.240 | GW 192.168.1.17');
add('53:H:STUDENT/ACCT-1:IP 192.168.1.42 | MASK 255.255.255.240 | GW 192.168.1.33');
add('53:H:ADMIN-1:IP 192.168.1.58 | MASK 255.255.255.240 | GW 192.168.1.49');
