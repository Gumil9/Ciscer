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


// CCNA2 Routing and Switching v6.0 Chapter 9
add('What is the primary purpose of NAT?',
    'conserve IPv4 addresses');
add('Which method is used by a PAT-enabled router to send incoming packets to the correct inside hosts?​',
    'It uses the destination TCP or UDP port number on the incoming packet.');
add('What are two benefits of NAT? (Choose two.)',
    'It saves public IP addresses.',
    'It adds a degree of privacy and security to a network.');
add('What is a disadvantage of NAT?',
    'There is no end-to-end addressing.');
add('What is an advantage of deploying IPv4 NAT technology for internal hosts in an organization?',
    'provides flexibility in designing the IPv4 addressing scheme');
add('Refer to the exhibit. Which address or addresses represent the inside global address?',
    '209.165.20.25');
add('Refer to the exhibit. A technician is configuring R2 for static NAT to allow the client to access the web server. What is a possible reason that the client PC cannot access the web server?',
    'Interface S0/0/0 should be identified as the outside NAT interface.');
add('A network administrator configures the border router with the command R1(config)# ip nat inside source list 4 pool corp. What is required to be configured in order for this particular command to be functional?',
    'a NAT pool named corp that defines the starting and ending public IP addresses');
add('When dynamic NAT without overloading is being used, what happens if seven users attempt to access a public server on the Internet when only six addresses are available in the NAT pool?',
    'The request to the server for the seventh user fails.');
add('What is defined by the ip nat pool command when configuring dynamic NAT?',
    'the pool of global address');
add('Refer to the exhibit. What is the purpose of the command marked with an arrow shown in the partial configuration output of a Cisco broadband router?',
    'defines which addresses can be translated');
add('A network engineer has configured a router with the command ip nat inside source list 4 pool corp overload. Why did the engineer use the overload option?',
    'The company has more private IP addresses than available public IP addresses.');
add('What are two of the required steps to configure PAT? (Choose two.)',
    'Define a pool of global addresses to be used for overload translation.',
    'Identify the inside interface.');
add('What is the major benefit of using NAT with Port Address Translation?',
    'It allows many internal hosts to share the same public IPv4 address.');
add('What is the purpose of port forwarding?',
    'Port forwarding allows an external user to reach a service on a private IPv4 address that is located inside a LAN.');
add('A network administrator is configuring a static NAT on the border router for a web server located in the DMZ network. The web server is configured to listen on TCP port 8080. The web server is paired with the internal IP address of 192.168.5.25 and the external IP address of 209.165.200.230. For easy access by hosts on the Internet, external users do not need to specify the port when visiting the web server. Which command will configure the static NAT?',
    'R1(config)# ip nat inside source static tcp 192.168.5.25 8080 209.165.200.230 80');
add('What is a characteristic of unique local addresses?',
    'They allow sites to be combined without creating any address conflicts.');
add('Which statement describes IPv6 ULAs?',
    'They are not routable across the Internet.');
add('Refer to the exhibit. Based on the output that is shown, what type of NAT has been implemented?',
    'PAT using an external interface');
add('Fill in the blank. Do not use abbreviations.\
    NAT overload is also known as',
    'Port Address Translation');

// CCNA2 Routing and Switching v6.0 Chapter 10
add('Beginning with the Cisco IOS Software Release 15.0, which license is a prerequisite for installing additional technology pack licenses?',
    'IPBase');
add('What is the major release number in the IOS image name c1900-universalk9-mz.SPA.152-3.T.bin?',
    '15');
add('Refer to the exhibit. What does the number 17:46:26.143 represent?',
    'the time when the syslog message was issued');
add('What statement describes a Cisco IOS image with the “universalk9_npe” designation for Cisco ISR G2 routers?',
    'It is an IOS version that, at the request of some countries removes any strong cryptographic functionality');
add('Refer to the exhibit. Routers R1 and R2 are connected via a serial link. One router is configured as the NTP master, and the other is an NTP client. Which two pieces of information can be obtained from the partial output of the show ntp associations detail command on R2? (Choose two.)',
    'Router R1 is the master, and R2 is the client',
    'The IP address of R1 is 192.168.1.2');
add('A network administrator configures a router with the command sequence:R1(config)# boot system tftp://c1900-universalk9-mz.SPA.152-4.M3.bin R1(config)# boot system rom What is the effect of the command sequence?',
    'The router will load IOS from the TFTP server. If the image fails to load. It will load the IOS image from ROM.');
add('What is used as the default event logging destination for Cisco routers and switches?',
    'console line');
add('When a customer purchases a Cisco IOS 15.0 software package, what serves as the receipt for that customer and is used to obtain the license as well?',
    'Product Activation Key');
add('Refer to the exhibit. Which two conclusions can be drawn from the syslog message that was generated by the router? (Choose two.)',
    'This message indicates that service timestamps have been configured',
    'This message is a level 5 notification message');
add('What code in the Cisco IOS 15 image filename c1900-universalk9-mz.SPA.153-3.M.bin indicates that the file is digitally signed by Cisco?',
    'SPA');
add('In addition to IPBase, what are the three technology packs that are shipped within the universal Cisco IOS Software Release 15 image? (Choose three.)',
    'Security',
    'DATA',
    'Unified Communications');
add('Which three software packages are available for Cisco IOS Release 15.0?',
    'Unified Communications',
    'DATA',
    'Security');
add('A network engineer is upgrading the Cisco IOS image on a 2900 series ISR. What command could the engineer use to verify the total amount of flash memory as well as how much flash memory is currently available?',
    'show flashO:');
add('A ping fails when performed from router R1 to directly connected router R2. The network administrator then proceeds to issue the show cdp neighbors command. Why would the network administrator issue this command if the ping failed between the two routers?',
    'The network administrator wants to verify Layer 2 connectivity.');
add('Refer to the exhibit. From what location have the syslog messages been retrieved?',
    'router RAM');
add('Which command is used to configure a one-time acceptance of the EULA for all Cisco IOS software packages and features?',
    'license accept end user agreement');
add('Which command would a network engineer use to find the unique device identifier of a Cisco router?',
    'show license udi');
add('Which syslog message type is accessible only to an administrator and only via the Cisco CLI?',
    'debugging');
add('The command ntp server 10.1.1.1 is issued on a router. What impact does this command have?',
    'synchronizes the system clock with the time source with IP address 10.1 1 1');
add('Which two statements are true about NTP servers in an enterprise network? (Choose two.)',
    'NTP servers ensure an accurate time stamp on logging and debugging information',
    'NTP servers at stratum 1 are directly connected to an authoritative time source');
add('A network administrator has issued the logging trap 4 global configuration mode command. What is the result of this command?',
    'The syslog client will send to the syslog server any event message that has a seventy level of 4 and lower');
add('Which statement is true about CDP on a Cisco device?',
    'CDP can be disabled globally or on a specific interface');
add('Why would a network administrator issue the show cdp neigbors command on a router?',
    'to display device ID and other information about directly connected Cisco devices.');
add('Which protocol or service allows network administrators to receive system messages that are provided by network devices?',
    'syslog');
add('Which two conditions should the network administrator verify before attempting to upgrade a Cisco IOS image using a TFTP server? (Choose two.)',
    'Verify that there is enough flash memory for the new Cisco IOS image using the show flash command',
    'Verify connectivity between the router and TFTP server using the ping command');

/*Prompts for matching questions and Packet Tracer Labs*/
add = prompts.add;

/*
 * template:
 * add('helper label');
 */

// CCNA3 Scaling Networks v6.0 Chapter 10
add('1 > interface, 2 > manually, 3 > loopback, 4 > physical');

// CCNA2 Routing and Switching v6.0 Chapter 9
add('step5 -> R1 replaces...');
add('step2 -> R1 checks...');
add('step 4 -> R1 selects...');
add('step 1 -> The host sends...');
add('step3 -> If there is no...');

// CCNA2 Routing and Switching v6.0 Chapter 10
add('universalk9 -> specifying...');
add('1 -> minor release...');
add('mz -> where the image...');
add('c1900 -> platform on which..');
add('m4 -> maintanece release');
add('4 -> new feature release');
add('bin -> file extension');
add('15 ->  major release number');

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
