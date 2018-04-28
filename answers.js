/*Answers to multiple choice and fill-in-the-blank questions*/
var add = tests.add;

/*
 * template:
 * add(question, answer0 [, answer1, ...]);
 */

// CCNA4 v6.0 Final exam
add('Which statement best describes a WAN?', 'A WAN interconnects LANs over long distances.');
add('Connecting offices at different locations using the Internet can be economical for a business. What are two important business policy issues that should be addressed when using the Internet for this purpose? (Choose two.)', 'privacy', 'security');
add('What is a disadvafntage of a packet-switched network compared to a circuit-switched network?', 'higher latency');
add('A company is considering updating the campus WAN connection. Which two WAN options are examples of the private WAN architecture? (Choose two.)', 'leased line', 'Ethernet WAN');
add('Which statement describes a characteristic of dense wavelength division multiplexing (DWDM)?', 'It can be used in long-range communications, like connections between ISPs.');
add('Which WAN technology can serve as the underlying network to carry multiple types of network traffic such as IP, ATM, Ethernet, and DSL?', 'MPLS');
add('Which two WAN technologies are more likely to be used by a business than by teleworkers or home users? (Choose two.)', 'Frame Relay', 'MetroE');
add('The security policy in a company specifies that the staff in the sales department must use a VPN to connect to the corporate network to access the sales data when they travel to meet customers. What component is needed by the sales staff to establish a remote VPN connection?', 'VPN client software');
add('How many DS0 channels are bundled to produce a 1.544 Mbps T1 line?', '24');
add('What function is provided by Multilink PPP?', 'spreading traffic across multiple physical WAN links');
add('Refer to the exhibit. A network administrator is configuring the PPP link between the routers R1 and R2. However, the link cannot be established. Based on the partial output of the show running-config command, what is the cause of the problem?', 'The usernames do not match the host names.');
add('Refer to the exhibit. A network administrator has configured routers RTA and RTB, but cannot ping from serial interface to serial interface. Which layer of the OSI model is the most likely cause of the problem?', 'data link');
add('What advantage does DSL have compared to cable technology?', 'DSL is not a shared medium.');
add('Which broadband technology would be best for a user that needs remote access when traveling in mountains and at sea?', 'satellite');
add('Which technology requires the use of PPPoE to provide PPP connections to customers?', 'DSL');
add('Refer to the exhibit. What is the network administrator verifying when issuing the show ip interface brief command on R1 in respect to the PPPoE connection to R2?', 'that the Dialer1 interface has been assigned an IP address by the ISP router');
add('Which technology creates a mapping of public IP addresses for remote tunnel spokes in a DMVPN configuration?', 'NHRP');
add('What is the purpose of the generic routing encapsulation tunneling protocol?', 'to manage the transportation of IP multicast and multiprotocol traffic between remote sites');
add('Refer to the exhibit. What is used to exchange routing information between routers within each AS?', 'IGP routing protocols');
add('Which IPv4 address range covers all IP addresses that match the ACL filter specified by 172.16.2.0 with wildcard mask 0.0.1.255?', '172.16.2.0 to 172.16.3.255');
add('Refer to the exhibit. A named access list called chemistry_block has been written to prevent users on the Chemistry Network and public Internet from access to Records Server. All other users within the school should have access to this server. The list contains the following statements:deny 172.16.102.0 0.0.0.255 172.16.104.252 0.0.0.0 permit 172.16.0.0 0.0.255.255 172.16.104.252 0.0.0.0 Which command sequence will place this list to meet these requirements?', 'Athena(config)# interface fa0/0 Athena(config-if)# ip access-group chemistry_block out');
add('What guideline is generally followed about the placement of extended access control lists?', 'They should be placed as close as possible to the source of the traffic to be denied.');
add('In the creation of an IPv6 ACL, what is the purpose of the implicit final command entries, permit icmp any any nd-na and permit icmp any any nd-ns?', 'to allow IPv6 to MAC address resolution');
add('A network administrator is testing IPv6 connectivity to a web server. The network administrator does not want any other host to connect to the web server except for the one test computer. Which type of IPv6 ACL could be used for this situation?', 'only a named ACL');
add('Refer to the exhibit. The IPv6 access list LIMITED_ACCESS is applied on the S0/0/0 interface of R1 in the inbound direction. Which IPv6 packets from the ISP will be dropped by the ACL on R1?', 'ICMPv6 packets that are destined to PC1');
add('What is a secure configuration option for remote access to a network device?', 'Configure SSH.');
add('What protocol should be disabled to help mitigate VLAN attacks?', 'DTP');
add('Which term describes the role of a Cisco switch in the 802.1X port-based access control?', 'authenticator');
add('What two protocols are supported on Cisco devices for AAA communications? (Choose two.)', 'RADIUS', 'TACACS+');
add('In configuring SNMPv3, what is the purpose of creating an ACL?', 'to specify the source addresses allowed to access the SNMP agent');
add('Refer to the exhibit. What feature does an SNMP manager need in order to be able to set a parameter on switch ACSw1?', 'a manager who is using host 192.168.0.5');
add('Which Cisco feature sends copies of frames entering one port to a different port on the same switch in order to perform traffic analysis?', 'SPAN');
add('What are two characteristics of video traffic? (Choose two.)', 'Video traffic is unpredictable and inconsistent.', 'Video traffic latency should not exceed 400 ms.');
add('Which QoS mechanism allows delay-sensitive data, such as voice, to be sent first before packets in other queues are sent?', 'LLQ');
add('Refer to the exhibit. As traffic is forwarded out an egress interface with QoS treatment, which congestion avoidance technique is used?', 'traffic shaping');
add('Which type of QoS marking is applied to Ethernet frames?', 'CoS');
add('What is the function of a QoS trust boundary?', 'A trust boundary identifies which devices trust the marking on packets that enter a network.');
add('A vibration sensor on an automated production line detects an unusual condition. The sensor communicates with a controller that automatically shuts down the line and activates an alarm. What type of communication does this scenario represent?', 'machine-to-machine');
add('Which pillar of the Cisco IoT System allows data to be analyzed and managed at the location where it is generated?', 'fog computing');
add('Which Cloud computing service would be best for a new organization that cannot afford physical servers and networking equipment and must purchase network services on-demand?', 'IaaS');
add('A data center has recently updated a physical server to host multiple operating systems on a single CPU. The data center can now provide each customer with a separate web server without having to allocate an actual discrete server for each customer. What is the networking trend that is being implemented by the data center in this situation?', 'virtualization');
add('What is used to pre-populate the adjacency table on Cisco devices that use CEF to process packets?', 'the ARP table');
add('Which component of the ACI architecture translates application policies into network programming?', 'The Application Policy Infrastructure Controller');
add('Which two pieces of information should be included in a logical topology diagram of a network? (Choose two.)', 'connection type', 'interface identifier');
add('Which network performance statistics should be measured in order to verify SLA compliance?', 'latency, jitter, and packet loss');
add('Which feature sends simulated data across the network and measures performance between multiple network locations?', 'IP SLA');
add('Which troubleshooting tool would a network administrator use to check the Layer 2 header of frames that are leaving a particular host?', 'protocol analyzer');
add('Refer to the exhibit. A network administrator is troubleshooting the OSPF network. The 10.10.0.0/16 network is not showing up in the routing table of Router1. What is the probable cause of this problem?', 'There is an incorrect wildcard mask statement for network 10.10.0.0/16 on Router2.');
add('Refer to the exhibit. A user turns on a PC after it is serviced and calls the help desk to report that the PC seems unable to reach the Internet. The technician asks the user to issue the arp –a and ipconfig commands. Based on the output, what are two possible causes of the problem? (Choose two.)', 'The IP configuration is incorrect.', 'The default gateway device cannot be contacted.');
add('Match OoS techniques with the description. (Not all options are used.) Which circumstance would result in an enterprise deciding to implement a corporate WAN?', 'when its employees become distributed across many branch locations');
add('What are two types of WAN providers? (Choose two.)', 'satellite service', 'telephone company');
add('Which two types of devices are specific to WAN environments and are not found on a LAN? (Choose two.)', 'broadband modem', 'CSU/DSU');
add('What is a feature of dense wavelength-division multiplexing (DWDM) technology?', 'It enables bidirectional communications over one strand of fiber.');
add('What is a disadvantage of ATM compared to Frame Relay?', 'less efficient');
add('Which WAN solution uses labels to identify the path in sending packets through a provider network?', 'MPLS');
add('An intercity bus company wants to offer constant Internet connectivity to the users traveling on the buses. Which two types of WAN infrastructure would meet the requirements? (Choose two.)', 'public infrastructure', 'cellular');
add('What device is needed at a central office to aggregate many digital subscriber lines from customers?', 'DSLAM');
add('A corporation is searching for an easy and low cost solution to provide teleworkers with a secure connection to headquarters. Which solution should be selected?', 'remote access VPN over the Internet');
add('What is the maximum number of DS0 channels in a 1.544 Mbps T1 line?', '24');
add('Refer to the exhibit. What type of Layer 2 encapsulation will be used for RtrA connection D if it is left to the default and the router is a Cisco router?', 'HDLC');
add('Which two functions are provided by the NCP during a PPP connection? (Choose two.)', 'bringing the network layer protocol or protocols up and down', 'negotiating options for the IP protocol');
add('What PPP information will be displayed if a network engineer issues the show ppp multilink command on Cisco router?', 'the serial interfaces participating in the multilink');
add('Refer to the exhibit. Which statement describes the status of the PPP connection?', 'Both the link-establishment and network-layer phase completed successfully.');
add('A network administrator is configuring a PPP link with the commands: R1(config-if)# encapsulation ppp R1(config-if)# ppp quality 70 What is the effect of these commands?', 'The PPP link will be closed down if the link quality drops below 70 percent.');
add('How does virtualization help with disaster recovery within a data center?', 'Hardware does not have to be identical.');
add('Which broadband solution is appropriate for a home user who needs a wired connection not limited by distance?', 'cable');
add('What is the protocol that provides ISPs the ability to send PPP frames over DSL networks?', 'PPPoE');
add('In software defined network architecture, what function is removed from network devices and performed by an SDN controller?', 'control plane');
add('What would a network administrator expect the routing table of stub router R1 to look like if connectivity to the ISP was established via a PPPoE configuration?', 'S 0.0.0.0/0 is directly connected, Dialer1; 192.168.1.0/32 is subnetted, 2 subnetted; C 192.168.1.1 is directly connected, Dialer1; C 192.168.1.2 is directly connected, Dialer1');
add('What is a benefit of implementing a Dynamic Multipoint VPN network design?', 'A DMVPN will support remote peers by providing a mapping database of public IP addresses to each one.');
add('Which remote access implementation scenario will support the use of generic routing encapsulation tunneling?', 'a central site that connects to a SOHO site without encryption');
add('Refer to the exhibit. All routers are successfully running the BGP routing protocol. How many routers must use EBGP in order to share routing information across the autonomous systems?', '4');
add('Which statement describes a characteristic of standard IPv4 ACLs?', 'They filter traffic based on source IP addresses only.');
add('Which three values or sets of values are included when creating an extended access control list entry? (Choose three.)', 'access list number between 100 and 199', 'destination address and wildcard mask', 'source address and wildcard mask');
add('Refer to the exhibit. A router has an existing ACL that permits all traffic from the 172.16.0.0 network. The administrator attempts to add a new ACE to the ACL that denies packets from host 172.16.0.1 and receives the error message that is shown in the exhibit. What action can the administrator take to block packets from host 172.16.0.1 while still permitting all other traffic from the 172.16.0.0 network?', 'Manually add the new deny ACE with a sequence number of 5.');
add('Which three implicit access control entries are automatically added to the end of an IPv6 ACL? (Choose three.)', 'deny ipv6 any any', 'permit icmp any any nd-ns', 'permit icmp any any nd-na');
add('The computers used by the network administrators for a school are on the 10.7.0.0/27 network. Which two commands are needed at a minimum to apply an ACL that will ensure that only devices that are used by the network administrators will be allowed Telnet access to the routers? (Choose two.)', 'access-class 5 in', 'access-list 5 permit 10.7.0.0 0.0.0.31');
add('A network administrator is adding ACLs to a new IPv6 multirouter environment. Which IPv6 ACE is automatically added implicitly at the end of an ACL so that two adjacent routers can discover each other?', 'permit icmp any any nd-na');
add('What would be the primary reason an attacker would launch a MAC address overflow attack?', 'so that the attacker can see frames that are destined for other hosts');
add('What are three of the six core components in the Cisco IoT system? (Choose three.)', 'fog computing', 'data analytics', 'cyber and physical security');
add('What security countermeasure is effective for preventing CAM table overflow attacks?', 'port security');
add('Which SNMP feature provides a solution to the main disadvantage of SNMP polling?', 'SNMP trap messages');
add('When SNMPv1 or SNMPv2 is being used, which feature provides secure access to MIB objects?', 'community strings');
add('What two are added in SNMPv3 to address the weaknesses of previous versions of SNMP? (Choose two.)', 'encryption', 'authentication');
add('Which queuing mechanism supports user-defined traffic classes?', 'CBWFQ');
add('Which field is used to mark Layer 2 Ethernet frames for QoS treatment?', 'Priority field');
add('What is an example of cloud computing?', 'a service that offers on-demand access to shared resources');
add('Which type of resources are required for a Type 1 hypervisor?', 'a management console');
add('A network technician made a configuration change on the core router in order to solve a problem. However, the problem is not solved. Which step should the technician take next?', 'Restore the previous configuration.');
add('A user reports that when the corporate web page URL is entered on a web browser, an error message indicates that the page cannot be displayed. The help-desk technician asks the user to enter the IP address of the web server to see if the page can be displayed. Which troubleshooting method is being used by the technician?', 'divide-and-conquer');
add('What is a primary function of the Cisco IOS IP Service Level Agreements feature?', 'to measure network performance and discover a network failure as early as possible');
add('Which IOS log message level indicates the highest severity level?', 'level 0');
add('Which symptom is an example of network issues at the network layer?', 'Neighbor adjacency is formed with some routers, but not all routers.');
add('Refer to the exhibit. H1 can only ping H2, H3, and the Fa0/0 interface of router R1. H2 and H3 can ping H4 and H5. Why might H1 not be able to successfully ping H4 and H5?', 'Host H1 does not have a default gateway configured.');
add('Refer to the exhibit. On the basis of the output, which two statements about network connectivity are correct? (Choose two.)', 'There is connectivity between this device and the device at 192.168.100.1.', 'There are 4 hops between this device and the device at 192.168.100.1.');
add('Fill in the blanks. Use dotted decimal format.', 'The wildcard mask that is associated with 128.165.216.0/23 is 0.0.1.255');
add('What is a primary difference between a company LAN and the WAN services that it uses?', 'The company must subscribe to an external WAN service provider.');
add('To which two layers of the OSI model do WAN technologies provide services? (Choose two.)', 'physical layer', 'data link layer');
add('Which two technologies are private WAN technologies? (Choose two.)', 'Frame Relay', 'ATM');
add('Which WAN technology can switch any type of payload based on labels?', 'MPLS');
add('What technology can be used to create a private WAN via satellite communications?', 'VSAT');
add('Which public WAN access technology utilizes copper telephone lines to provide access to subscribers that are multiplexed into a single T3 link connection?', 'DSL');
add('How many DS0 channels are bounded to produce a 1.544 Mb/s DS1 line?', '24');
add('Refer to the exhibit. Communication between two peers has failed. Based on the output that is shown, what is the most likely cause?', 'PPP issue');
add('Refer to the exhibit. Which type of Layer 2 encapsulation used for connection D requires Cisco routers?', 'HDLC');
add('Which three statements are true about PPP? (Choose three.)', 'PPP can use synchronous and asynchronous circuits.', 'PPP uses LCPs to establish, configure, and test the data-link connection.', 'PPP uses LCPs to agree on format options such as authentication, compression, and error detection.');
add('A network administrator is evaluating authentication protocols for a PPP link. Which three factors might lead to the selection of CHAP over PAP as the authentication protocol? (Choose three.)', 'uses a three-way authentication periodically during the session to reconfirm identities', 'transmits login information in encrypted format', 'uses an unpredictable variable challenge value to prevent playback attacks');
add('Which cellular or mobile wireless standard is considered a fourth generation technology?', 'LTE');
add('A company is looking for the least expensive broadband solution that provides at least 10 Mb/s download speed. The company is located 5 miles from the nearest provider. Which broadband solution would be appropriate?', 'cable');
add('Which technology can ISPs use to periodically challenge broadband customers over DSL networks with PPPoE?', 'CHAP');
add('What are the three core components of the Cisco ACI architecture? (Choose three.)', 'Application Network Profile', 'Application Policy Infrastructure Controller', 'Cisco Nexus Switches');
add('Which statement describes a feature of site-to-site VPNs?', 'Internal hosts send normal, unencapsulated packets.');
add('What are three features of a GRE tunnel? (Choose three.)', 'creates nonsecure tunnels between remote sites', 'transports multiple Layer 3 protocols', 'creates additional packet overhead');
add('Refer to the exhibit. What two commands are needed to complete the GRE tunnel configuration on router R1? (Choose two.)', 'R1(config-if)# tunnel source 209.165.202.129', 'R1(config-if)# tunnel destination 206.165.202.130');
add('What does BGP use to exchange routing updates with neighbors?', 'TCP connections');
add('Refer to the exhibit. The network administrator that has the IP address of 10.0.70.23/25 needs to have access to the corporate FTP server (10.0.54.5/28). The FTP server is also a web server that is accessible to all internal employees on networks within the 10.x.x.x address. No other traffic should be allowed to this server. Which extended ACL would be used to filter this traffic, and how would this ACL be applied? (Choose two.)', 'access-list 105 permit tcp host 10.0.70.23 host 10.0.54.5 eq 20; access-list 105 permit tcp host 10.0.70.23 host 10.0.54.5 eq 21; access-list 105 permit tcp 10.0.0.0 0.255.255.255 host 10.0.54.5 eq www; access-list 105 deny ip any host 10.0.54.5; access-list 105 permit ip any any', 'R1(config)# interface gi0/0; R1(config-if)# ip access-group 105 out');
add('Refer to the exhibit. A router has an existing ACL that permits all traffic from the 172.16.0.0 network. The administrator attempts to add a new statement to the ACL that denies packets from host 172.16.0.1 and receives the error message that is shown in the exhibit. What action can the administrator take to block packets from host 172.16.0.1 while still permitting all other traffic from the 172.16.0.0 network?', 'Manually add the new deny statement with a sequence number of 5.');
add('Refer to the exhibit. What can be determined from this output?', 'The router has not had any Telnet packets from 10.35.80.22 that are destined for 10.23.77.101.');
add('What is the only type of ACL available for IPv6?', 'named extended');
add('Which IPv6 ACL command entry will permit traffic from any host to an SMTP server on network 2001:DB8:10:10::/64?', 'permit tcp any host 2001:DB8:10:10::100 eq 25');
add('Refer to the exhibit. Considering how packets are processed on a router that is configured with ACLs, what is the correct order of the statements?', 'C-B-D-A');
add('Which two hypervisors are suitable to support virtual machines in a data center? (Choose two.)', 'VMware ESX/ESXi');
add('How can DHCP spoofing attacks be mitigated?', 'by implementing DHCP snooping on trusted ports');
add('What action can a network administrator take to help mitigate the threat of VLAN attacks?', 'Disable automatic trunking negotiation.');
add('Which SNMP message type informs the network management system (NMS) immediately of certain specified events?', 'Trap');
add('Refer to the exhibit. A SNMP manager is using the community string of snmpenable and is configured with the IP address 172.16.10.1. The SNMP manager is unable to read configuration variables on the R1 SNMP agent. What could be the problem?', 'The ACL is not permitting access by the SNMP manager.');
add('Refer to the exhibit. Which SNMP authentication password must be used by the member of the ADMIN group that is configured on router R1?', 'cisco123456');
add('A network administrator has noticed an unusual amount of traffic being received on a switch port that is connected to a college classroom computer. Which tool would the administrator use to make the suspicious traffic available for analysis at the college data center?', 'RSPAN');
add('What network monitoring tool copies traffic moving through one switch port, and sends the copied traffic to another switch port for analysis?', 'SPAN');
add('Voice packets are being received in a continuous stream by an IP phone, but because of network congestion the delay between each packet varies and is causing broken conversations. What term describes the cause of this condition?', 'jitter');
add('What mechanism compensates for jitter in an audio stream by buffering packets and then replaying them outbound in a steady stream?', 'playout delay buffer');
add('Which type of network traffic cannot be managed using congestion avoidance tools?', 'UDP');
add('A network administrator has moved the company intranet web server from a switch port to a dedicated router interface. How can the administrator determine how this change has affected performance and availability on the company intranet?', 'Conduct a performance test and compare with the baseline that was established previously.');
add('In which stage of the troubleshooting process would ownership be researched and documented?', 'Gather symptoms.');
add('Which troubleshooting approach is more appropriate for a seasoned network administrator rather than a less-experienced network administrator?', 'a less-structured approach based on an educated guess');
add('A router has been configured to use simulated network traffic in order to monitor the network performance between the router and a distant network device. Which command would display the results of this analysis?', 'show ip sla statistics');
add('Which type of tool would an administrator use to capture packets that are going to and from a particular device?', 'protocol analyzer');
add('Refer to the exhibit. Which two statements describe the results of entering these commands? (Choose two.)', 'R1 will send system messages of levels 0 (emergencies) to level 4 (warnings) to a server.', 'The syslog server has the IPv4 address 192.168.10.10.');
add('Refer to the exhibit. A network administrator discovers that host A is having trouble with Internet connectivity, but the server farm has full connectivity. In addition, host A has full connectivity to the server farm. What is a possible cause of this problem?', 'NAT is required for the host A network.');


/*Prompts for matching questions and Packet Tracer Labs*/
add = prompts.add;

/*
 * template:
 * add('helper label');
 */

// CCNA4 v6.0 Final exam
add('PAP: two-way, single challenge, weak auth, clear text; CHAP: three-way, repeated challenge, strong, encrypted');
add('bandwidth -> measured in the number; delay -> the time it takes; congestion -> an interface that; jitter -> the variation');
add('Best effort: the model, no packets; intServ: end-to-end, network resources; diffServ: network device, traffic');
add('public -> uses; community -> customized; hybrid -> consists; private -> available');
add('traffic policing -> excess traffic is dropped; marking -> a value; traffic shaping -> excess traffic is retained; classification -> this determines');
