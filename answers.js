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

// CCNA2 Routing and Switching v6.0 Final Exam
add('Refer to the exhibit. Assuming that the routing tables are up to date and no ARP messages are needed, after a packet leaves H1, how many times is the L2 header rewritten in the path to H2?',
    '2');
add('Refer to the exhibit. Which highlighted value represents a specific destination network in the routing table?',
    '10.16.100.128');
add('Which type of static route is configured with a greater administrative distance to provide a backup route to a route learned from a dynamic routing protocol?',
    'floating static route');
add('Refer to the exhibit. Which route was configured as a static route to a specific network using the next-hop address?',
    'S 10.17.2.0/24 [1/0] via 10.16.2.2');
add('What network prefix and prefix-length combination is used to create a default static route that will match any IPv6 destination?',
    '::/0');
add('A router has used the OSPF protocol to learn a route to the 172.16.32.0/19 network. Which command will implement a backup floating static route to this network?',
    'ip route 172.16.32.0 255.255.224.0 S0/0/0 200');
add('Refer to the exhibit. Currently router R1 uses an EIGRP route learned from Branch2 to reach the 10.10.0.0/16 network. Which floating static route would create a backup route to the 10.10.0.0/16 network in the event that the link between R1 and Branch2 goes down?',
    'ip route 10.10.0.0 255.255.0.0 209.165.200.225 100');
add('Which statement describes a route that has been learned dynamically?',
    'It is automatically updated and maintained by routing protocols.');
add('Compared with dynamic routes, what are two advantages of using static routes on a router? (Choose two.)',
    'They Improve network security',
    'They use fewer router resources');
add('To enable RIP routing for a specific subnet, the configuration command network 172.16.64.32 was entered by the network administrator. What address, if any, appears in the running configuration file to identify this network?',
    '172.16.0.0');
add('A network administrator adds the default-information originate command to the configuration of a router that uses RIP as the routing protocol. What will result from adding this command?',
    'The router will propagate a static default route in its RIP updates, if one is present');
add('Refer to the exhibit. What is the administrative distance value that indicates the route for R2 to reach the 10.10.0.0/16 network?',
    '1');
add('Which route will a router use to forward an IPv4 packet after examining its routing table for the best match with the destination address?',
    'a level 1 ultimate route');
add('Refer to the exhibit. An administrator is attempting to install an IPv6 static route on router R1 to reach the network attached to router R2. After the static route command is entered, connectivity to the network is still failing. What error has been made in the static route configuration?',
    'The interface is incorrect');
add('A network administrator reviews the routing table on the router and sees a route to the destination network 172.16.64.0/18 with a next-hop IP address of 192.168.1.1. What are two descriptions of this route? (Choose two.)',
    'level 2 child route',
    'ultimate route');
add('Which two factors are important when deciding which interior gateway routing protocol to use? (Choose two.)',
    'scalability',
    'speed of convergence');
add('Employees of a company connect their wireless laptop computers to the enterprise LAN via wireless access points that are cabled to the Ethernet ports of switches. At which layer of the three-layer hierarchical network design model do these switches operate?',
    'access');
add('What is a basic function of the Cisco Borderless Architecture access layer?',
    'provides access to the user');
add('What is a characteristic of the distribution layer in the three layer hierarchical model?',
    'provides access to the rest of the network through switching, routing, and network access policies');
add('Which information does a switch use to populate the MAC address table?',
    'the source MAC address and the incoming port');
add('Which statement is correct about Ethernet switch frame forwarding decisions?',
    'Frame forwarding decisions are based on MAC address and port mappings in the CAM table');
add('What is the name of the layer in the Cisco borderless switched network design that would have more switches deployed than other layers in the network design of a large organization?',
    'access');
add('Which switching method drops frames that fail the FCS check?',
    'store-and-forward switching');
add('In what situation would a Layer 2 switch have an IP address configured?',
    'when the Layer 2 switch needs to be remotely managed');
add('A network administrator is configuring a new Cisco switch for remote management access. Which three items must be configured on the switch for the task? (Choose three.)',
    'vty lines',
    'default gateway',
    'IP address');
add('A network technician has been asked to secure all switches in the campus network. The security requirements are for each switch to automatically learn and add MAC addresses to both the address table and the running configuration. Which port security configuration will meet these requirements?',
    'sticky secure MAC addresses');
add('A network administrator is configuring port security on a Cisco switch. When a violation occurs, which violation mode that is configured on an interface will cause packets with an unknown source address to be dropped with no notification sent?',
    'protect');
add('Two employees in the Sales department work different shifts with their laptop computers and share the same Ethernet port in the office. Which set of commands would allow only these two laptops to use the Ethernet port and create violation log entry without shutting down the port if a violation occurs?',
    '1_ switchport mode access',
    '2_ switchport port-security',
    '3_ switchport port-security maximum 2',
    '4_ switchport port-security mac-address sticky',
    '5_ switchport port-security violation restrict');
add('Refer to the exhibit. What protocol should be configured on SW-A Port 0/1 if it is to send traffic from multiple VLANs to switch SW-B?',
    'IEEE 802.1Q');
add('A Cisco Catalyst switch has been added to support the use of multiple VLANs as part of an enterprise network. The network technician finds it necessary to clear all VLAN information from the switch in order to incorporate a new network design. What should the technician do to accomplish this task?',
    'Delete the startup configuration and the vlan.dat file in the flash memory of the switch and reboot the switch');
add('What will a Cisco LAN switch do if it receives an incoming frame and the destination MAC address is not listed in the MAC address table?',
    'Forward the frame out all ports except the port where the frame is received.');
add('What VLANs are allowed across a trunk when the range of allowed VLANs is set to the default value?',
    'All VLANs will be allowed across the trunk');
add('Refer to the exhibit. A network administrator is configuring inter-VLAN routing on a network. For now, only one VLAN is being used, but more will be added soon. What is the missing parameter that is shown as the highlighted question mark in the graphic?',
    'It identifies the VLAN number');
add('A network administrator is designing an ACL. The networks 192.168.1.0/25, 192.168.0.0/25, 192.168.0.128/25, 192.168.1.128/26, and 192.168.1.192/26 are affected by the ACL. Which wildcard mask, if any, is the most efficient to use when specifying all of these networks in a single ACL permit entry?',
    '0.0.1.255');
add('The computers used by the network administrators for a school are on the 10.7.0.0/27 network. Which two commands are needed at a minimum to apply an ACL that will ensure that only devices that are used by the network administrators will be allowed Telnet access to the routers? (Choose two.)',
    'access-class 5 in',
    'access-list 5 permit 10.7.0.0 0.0.0.31');
add('A network engineer has created a standard ACL to control SSH access to a router. Which command will apply the ACL to the VTY lines?',
    'access-class 11 in');
add('What is the reason why the DHCPREQUEST message is sent as a broadcast during the DHCPv4 process?',
    'to notify other DHCP servers on the subnet that the IP address was leased');
add('Which set of commands will configure a router as a DHCP server that will assign IPv4 addresses to the 192.168.100.0/23 LAN while reserving the first 10 and the last addresses for static assignment?',
    'ip dhcp excluded-address 192.168.100.1 192.168.100.10',
    'ip dhcp excluded-address 192.168.101.254',
    'ip dhcp pool LAN POOL-100',
    'network 192.168.100.0 255.255.254.0',
    'default-router 192.168.100.1');
add('Which command, when issued in the interface configuration mode of a router, enables the interface to acquire an IPv4 address automatically from an ISP, when that link to the ISP is enabled?',
    'ip address dhcp');
add('Refer to the exhibit. A network administrator is configuring a router as a DHCPv6 server. The administrator issues a show ipv6 dhcp pool command to verify the configuration. Which statement explains the reason that the number of active clients is 0?',
    'The state is not maintained by the DHCPv6 server under stateless DHCPv6 operation.');
add('Refer to the exhibit. R1 has been configured as shown. However, PC1 is not able to receive an IPv4 address. What is the problem?​',
    'The ip helper-address command was applied on the wrong interface.');
add('Refer to the exhibit. Which statement shown in the output allows router R1 to respond to stateless DHCPv6 requests?',
    'ipv6 nd other-config-flag');
add('What is used in the EUI-64 process to create an IPv6 interface ID on an IPv6 enabled interface?',
    'the MAC address of the IPv6 enabled interface');
add('Refer to the exhibit. NAT is configured on Remote and Main. The PC is sending a request to the web server. What IPv4 address is the source IP address in the packet between Main and the web server?',
    '203.0.113.5');
add('Which type of traffic would most likely have problems when passing through a NAT device?',
    'IPsec');
add('Refer to the exhibit. Which two statements are correct based on the output as shown in the exhibit? (Choose two.)',
    'The output is the result of the show ip nat translations command',
    'The host with the address 209.165.200.235 will respond to requests by using a source address of 192.168.10.10.');
add('Refer to the exhibit. A network administrator has configured R2 for PAT. Why is the configuration incorrect?',
    'NAT-POOL2 is bound to the wrong ACL');
add('A small company has a web server in the office that is accessible from the Internet. The IP address 192.168.10.15 is assigned to the web server. The network administrator is configuring the router so that external clients can access the web server over the Internet. Which item is required in the NAT configuration?',
    'the ip nat inside source command to link the inside local and inside global addresses');
add('A college marketing department has a networked storage device that uses the IP address 10.18.7.5, TCP port 443 for encryption, and UDP port 4365 for video streaming. The college already uses PAT on the router that connects to the Internet. The router interface has the public IP address of 209.165.200.225/30. The IP NAT pool currently uses the IP addresses ranging from 209.165.200.228.236. Which configuration would the network administrator add to allow this device to be accessed by the marketing personnel from home?',
    'ip nat inside source static tcp 10.18.7.5 443 209.165.200.225 443',
    'ip nat inside source static udp 10.18.7.5 4365 209.165.200.225 4365');
add('Refer to the exhibit. Based on the output that is shown, what type of NAT has been implemented?',
    'PAT using an external interface');
add('Refer to the exhibit. An administrator is trying to configure PAT on R1, but PC-A is unable to access the Internet. The administrator tries to ping a server on the Internet from PC-A and collects the debugs that are shown in the exhibit. Based on this output, what is most likely the cause of the problem?',
    'The inside global address is not on the same subnet as the ISP');
add('A network engineer is interested in obtaining specific information relevant to the operation of both distribution and access layer Cisco devices. Which command provides common information relevant to both types of devices?',
    'show cdp neighbors');
add('Which two statements are correct if a configured NTP master on a network cannot reach any clock with a lower stratum number? (Choose two.)',
    'The NTP master will claim to be synchronized at the configured stratum number.',
    'Other systems will be willing to synchronize to that master using NTP.');
add('What are three functions provided by the syslog service? (Choose three.)',
    'to specify the destinations of captured messages',
    'to select the type of logging information that is captured',
    'to gather logging information for monitoring and troubleshooting');
add('Refer to the exhibit. Which three hosts will receive ARP requests from host A, assuming that port Fa0/4 on both switches is configured to carry traffic for multiple VLANs?',
    'host C',
    'host D',
    'host F');
add('Refer to the exhibit. An administrator is examining the message in a syslog server. What can be determined from the message?',
    'This is a notification message for a normal but significant condition');
add('When a customer purchases a Cisco IOS 15.0 software package, what serves as the receipt for that customer and is used to obtain the license as well?',
    'Product Activation Key');
add('Refer to the exhibit. The network administrator enters these commands into the R1 router:\nR1# copy running-config tftp\nAddress or name of remote host [ ]?\n\nWhen the router prompts for an address or remote host name, what IP address should the administrator enter at the prompt?',
    '192.168.11.252');
add('Which configuration would be appropriate for a small business that has the public IP address of 209.165.200.225/30 assigned to the external interface on the router that connects to the Internet?',
    'access-list 1 permit 10.0.0.0 0.255.255.255',
    'ip nat inside source list 1 interface serial 0/0/0 overload');
add('Refer to the exhibit. Host A has sent a packet to host B. What will be the source MAC and IP addresses on the packet when it arrives at host B?',
    'Source MAC: 00E0.FE91.7799',
    'Source IP: 10.1.1.10');
add('What benefit does NAT64 provide?',
    'It allows sites to connect IPv6 hosts to an IPv4 network by translating the IPv6 addresses to IPv4 addresses.');
add('What is the effect of configuring the ipv6 unicast-routing command on a router?',
    'to enable the router as an IPv6 router');
add('What is a characteristic of a static route that creates a gateway of last resort?',
    'It identifies the gateway IP address to which the router sends all IP packets for which it does not have a learned or static route');
add('Refer to the exhibit. Which route was configured as a static route to a specific network using the next-hop address?',
    'S 192.168.2.0/24 [1/0] via 172.16.2.2');
add('Refer to the exhibit. Which command will properly configure an IPv6 static route on R2 that will allow traffic from PC2 to reach PC1 without any recursive lookups by router R2?',
    'R2(config)# ipv6 route 2001:db8:10:12::/64 S0/0/0');
add('Which network design may be recommended for a small campus site that consists of a single building with a few users?',
    'a collapsed core network design');
add('Which information does a switch use to keep the MAC address table information current?',
    'the source MAC address and the incoming port');
add('Which advantage does the store-and-forward switching method have compared with the cut-through switching method?',
    'frame error checking');
add('Which characteristic describes cut-through switching?',
    'Frames are forwarded without any error checking.');
add('What is a result of connecting two or more switches together?',
    'The size of the broadcast domain is increased.');
add('A part of the new security policy, all switches on the network are configured to automatically learn MAC addresses for each port. All running configurations are saved at the start and close of every business day. A severe thunderstorm causes an extended power outage several hours after the close of business. When the switches are brought back online, the dynamically learned MAC addresses are retained. Which port security configuration enabled this?',
    'sticky secure MAC addresses');
add('Which commands are used to re-enable a port that has been disabled as a result of a port security violation?',
    '1_ shutdown',
    '2_ no shutdown');
add('Which two characteristics describe the native VLAN? (Choose two.)',
    'The native VLAN traffic will be untagged across the trunk link.',
    'The native VLAN provides a common identifier to both ends of a trunk.');
add('Which type of traffic is designed for a native VLAN?',
    'untagged');
add('An administrator is trying to remove configurations from a switch. After using the command erase startup-config and reloading the switch, the administrator finds that VLANs 10 and 100 still exist on the switch. Why were these VLANs not removed?',
    'Because these VLANs are stored in a file that is called vlan.dat that is located in flash memory, this file must be manually deleted.');
add('Refer to the exhibit. Inter-VLAN communication between VLAN 10, VLAN 20, and VLAN 30 is not successful. What is the problem?',
    'The switch interface FastEthernet0/1 is configured as an access interface and should be configured as a trunk interface.');
add('A network administrator is configuring an ACL with the command access-list 10 permit 172.16.32.0 0.0.15.255. Which IPv4 address matches the ACE?',
    '172.16.47.254');
add('Refer to the exhibit. A PC at address 10.1.1.45 is unable to access the Internet. What is the most likely cause of the problem?',
    'The NAT pool has been exhausted.');
add('A network administrator is verifying a configuration that involves network monitoring. What is the purpose of the global configuration command logging trap 4?',
    'System messages that match logging levels 0-4 will be forwarded to a specified logging device.');
add('What is indicated by the M in the Cisco IOS image name c1900-universalk9-mz.SPA.153-3.M.bin?',
    'an extended maintenance release');
add('Refer to the exhibit. A network engineer is preparing to upgrade the IOS system image on a Cisco 2901 router. Based on the output shown, how much space is available for the new image?',
    '221896413 bytes');
add('Refer to the exhibit. Based on the exhibited configuration and output, why is VLAN 99 missing?',
    'because the VLAN 99 has not been manually entered into the VLAN database with the vlan 99 command');
add('Refer to the exhibit. Assuming that the routing tables are up to date and no ARP messages are needed, after a packet leaves H1, how many times is the L2 header rewritten in the path to H3?',
    '2');
add('Refer to the exhibit. Which highlighted value represents a specific destination network in the routing table?',
    '172.16.100.64');
add('On which two routers would a default static route be configured?',
    'stub router connection to the rest of the corporate or campus network',
    'edge router connection to the ISP');
add('The exhibit shows two PCs called PC A and PC B, two routes called R1 and R2, and two switches. PC A has the address 172.16.1.1/24 and is connected to a switch and into an interface on R1 that has the IP address 172.16.1.254. PC B has the address 172.16.2.1/24 and is connected to a switch that is connected to another interface on R1 with the IP address 172.16.2.254. The serial interface on R1 has the address 172.16.3.1 and is connected to the serial interface on R2 that has the address 172.16.3.2/24. R2 is connected to the internet cloud. Which command will create a static route on R2 in order to reach PC B? ',
    'R2(config)# ip route 172.16.2.0 255.255.255.0 172.16.3.1');
add('Refer to the exhibit. R1 was configured with the static route command ip route 209.165.200.224 255.255.255.224 S0/0/0 and consequently users on network 172.16.0.0/16 are unable to reach resources on the Internet. How should this static route be changed to allow user traffic from the LAN to reach the Internet?',
    'Change the destination network and mask to 0.0.0.0 0.0.0.0');
add('Refer to the exhibit. Router R1 has an OSPF neighbor relationship with the ISP router over the 192.168.0.32 network. The 192.168.0.36 network link should serve as a backup when the OSPF link goes down. The floating static route command ip route 0.0.0.0 0.0.0.0 S0/0/1 100 was issued on R1 and now traffic is using the backup link even when the OSPF link is up and functioning. Which change should be made to the static route command so that traffic will only use the OSPF link when it is up?​',
    'Change the administrative distance to 120.');
add('Refer to the exhibit. All hosts and router interfaces are configured correctly. Pings to the server from both H1 and H2 and pings between H1 and H2 are not successful. What is causing this problem?',
    'RIPv2 is misconfigured on router R2.');
add('What caused the following error message to appear?01:11:12: %PM-4-ERR_DISABLE: psecure-violation error detected on Fa0/8, putting Fa0/8 in err-disable state01:11:12: %PORT_SECURITY-2-PSECURE_VIOLATION: Security violation occurred, caused by MAC address 0011.a0d4.12a0 on port FastEthernet0/8.\n\n01:11:13: %LINEPROTO-5-UPDOWN: Line protocol on Interface FastEthernet0/8, changed state to down\n\n01:11:14: %LINK-3-UPDOWN: Interface FastEthernet0/8, changed state to down',
    'Port security was enabled on the switch port, and an unauthorized connection was made on switch port Fa0/8.');
add('Refer to the exhibit. A small business uses VLANs 2, 3, 4, and 5 between two switches that have a trunk link between them. What native VLAN should be used on the trunk if Cisco best practices are being implemented?',
    '5');
add('Which statement describes a characteristic of the extended range VLANs that are created on a Cisco 2960 switch?',
    'They are not stored in the vlan.dat file.');
add('A network administrator is using the router-on-a-stick method to configure inter-VLAN routing. Switch port Gi1/1 is used to connect to the router. Which command should be entered to prepare this port for the task?',
    '1_ Switch(config)# interface gigabitethernet 1/1',
    '2_ Switch(config-if)# switchport mode trunk');
add('What will be the result of adding the command ip dhcp excluded-address 172.16.4.1 172.16.4.5 to the configuration of a local router that has been configured as a DHCP server?',
    'The DHCP server function of the router will not issue the addresses from 172.16.4.1 through 172.16.4.5 inclusive.');
add('A host on the 10.10.100.0/24 LAN is not being assigned an IPv4 address by an enterprise DHCP server with the address 10.10.200.10/24. What is the best way for the network engineer to resolve this problem?',
    'Issue the command ip helper-address 10.10.200.10 on the router interface that is the 10.10.100.0/24 gateway.');
add('What is used in the EUI-64 process to create an IPv6 interface ID on an IPv6 enabled interface?',
    'the MAC address of the IPv6 enabled interface');
add('Refer to the exhibit. NAT is configured on RT1 and RT2. The PC is sending a request to the web server. What IPv4 address is the source IP address in the packet between RT2 and the web server?',
    '209.165.200.245');
add('Refer to the exhibit.\n\nA company has an internal network of 172.16.25.0/24 for their employee workstations and a DMZ network of 172.16.12.0/24 to host servers. The company uses NAT when inside hosts connect to outside network. A network administrator issues the show ip nat translations command to check the NAT configurations. Which one of source IPv4 addresses is translated by R1 with PAT?',
    '172.16.25.35');
add('What is the purpose of the Cisco PAK?',
    'It is a key for enabling an IOS feature set.');

/*Prompts for matching questions and Packet Tracer Labs*/
add = prompts.add;

/*
 * template:
 * add('helper label');
 */

// CCNA3 Scaling Networks v6.0 Chapter 10
add('1 > interface, 2 > manually, 3 > loopback, 4 > physical');

// CCNA2 Routing and Switching v6.0 Final Exam
add('flash->full oper; ROM->limited oper..; RAM->rout. tab..;NVRAM->startup..');
add('resiliency->This provedis always-on..');
add('hierarchical->Layers minim...');
add('modularity->Each layer has...');
add('flexibility->This shares the net...');
add('data VLANs->configured to carry..');
add('management VLAN->an IP address and...');
add('default VLAN->all switch ports...');
add('native VLAN->carries untagged....');
add('Step3-none-st4-st2-st1');

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
