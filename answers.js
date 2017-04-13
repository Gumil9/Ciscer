/*Answers to multiple choice and fill-in-the-blank questions*/
var add = tests.add;

/*
 * template:
 * add(question, answer0 [, answer1, ...]);
 */

//TEST6
add('1. What are three primary benefits of using VLANs? Choose three.', 'security', 'cost reduction', 'improved IT staff efficiency');
add('2. Which type of VLAN is used to designate which traffic is untagged when crossing a trunk port?', 'native');
add('3. A network administrator is determining the best placement of VLAN trunk links. Which two types of point-to-point connections utilize VLAN trunking? Choose two.', 'between two switches that utilize multiple VLANs', 'between a switch and a server that has an 802.1Q NIC');
add('4. What must the network administrator do to remove Fast Ethernet port fa0/1 from VLAN 2 and assign it to VLAN 3?', 'Enter the switchport access vlan 3 command in interface configuration mode.');
add('5. When a Cisco switch receives untagged frames on a 802.1Q trunk port, which VLAN ID is the traffic switched to by default?', 'native VLAN ID');
add('6. Port Fa0/11 on a switch is assigned to VLAN 30. If the command no switchport access vlan 30 is entered on the Fa0/11 interface, what will happen?', 'Port Fa0/11 will be returned to VLAN 1.');
add('7. Which command is used to remove only VLAN 20 from a switch?', 'no vlan 20');
add('8. What happens to a port that is associated with VLAN 10 when the administrator deletes VLAN 10 from the switch?', 'The port becomes inactive.');
add('9. Which two characteristics match extended range VLANs? Choose two.', 'They are saved in the running-config file by default.');
add('10. A Cisco switch currently allows traffic tagged with VLANs 10 and 20 across trunk port Fa0/5. What is the effect of issuing a switchport trunk allowed vlan 30 command on Fa0/5?', 'It allows only VLAN 30 on Fa0/5.');
add('11. Refer to the exhibit. PC-A and PC-B are both in VLAN 60. PC-A is unable to communicate with PC-B. What is the problem?', 'The VLAN that is used by PC-A is not in the list of allowed VLANs on the trunk.');
add('12. Refer to the exhibit. DLS1 is connected to another switch, DLS2, via a trunk link. A host that is connected to DLS1 is not able to communicate to a host that is connected to DLS2, even though they are both in VLAN 99. Which command should be added to Fa0/1 on DLS1 to correct the problem?', 'switchport trunk native vlan 66');
add('13. What is a characteristic of legacy inter-VLAN routing?', 'The router requires one Ethernet link for each VLAN.');
add('14. What is a disadvantage of using router-on-a-stick inter-VLAN routing?', 'does not scale well beyond 50 VLANs');
add('15. Refer to the exhibit. Router RA receives a packet with a source address of 192.168.1.35 and a destination address of 192.168.1.85. What will the router do with this packet?', 'The router will forward the packet out interface FastEthernet 0/1.2.');
add('16. Refer to the exhibit. In what switch mode should port G0/1 be assigned if Cisco best practices are being used?', 'trunk');
add('17. A small college uses VLAN 10 for the classroom network and VLAN 20 for the office network. What is needed to enable communication between these two VLANs while using legacy inter-VLAN routing?', 'A router with at least two LAN interfaces should be used.');
add('18. Refer to the exhibit. A network administrator needs to configure router-on-a-stick for the networks that are shown. How many subinterfaces will have to be created on the router if each VLAN that is shown is to be routed and each VLAN has its own subinterface?', '4');
add('19. When configuring a router as part of a router-on-a-stick inter-VLAN routing topology, where should the IP address be assigned?', 'to the subinterface');
add('20. A high school uses VLAN15 for the laboratory network and VLAN30 for the faculty network. What is required to enable communication between these two VLANs while using the router-on-a-stick approach?', 'A switch with a port that is configured as a trunk is needed when connecting to the router.');
add('21. Refer to the exhibit. A router-on-a-stick configuration was implemented for VLANs 15, 30, and 45, according to the show running-config command output. PCs on VLAN 45 that are using the 172.16.45.0 /24 network are having trouble connecting to PCs on VLAN 30 in the 172.16.30.0 /24 network. Which error is most likely causing this problem?', 'There is an incorrect IP address configured on GigabitEthernet 0/0.30.');
add('Which PCs will receive the broadcast sent by PC-C?', 'PC-D, PC-E');
add('The show vlan command displays the VLAN assignment for all ports as well as the existing VLANs on the switch', 'show vlan');
//TEST7
add('1. In which configuration would an outbound ACL placement be preferred over an inbound ACL placement?', 'when the ACL is applied to an outbound interface to filter packets coming from multiple inbound interfaces before the packets exit the interface');
add('2. Which address is required in the command syntax of a standard ACL?', 'source IP address');
add('3. Which statement describes a difference between the operation of inbound and outbound ACLs?', 'Inbound ACLs are processed before the packets are routed while outbound ACLs are processed after the routing is completed.');
add('4. Which three statements describe ACL processing of packets? Choose three.', 'An implicit deny any rejects any packet that does not match any ACE.', 'A packet can either be rejected or forwarded as directed by the ACE that is matched.', 'Each statement is checked only until a match is detected or until the end of the ACE list.');
add('5. What single access list statement matches all of the following networks?', 'access-list 10 permit 192.168.16.0 0.0.3.255');
add('6. A network administrator needs to configure a standard ACL so that only the workstation of the administrator with the IP address 192.168.15.23 can access the virtual terminal of the main router. Which two configuration commands can achieve the task? Choose two.', 'Router1config# access-list 10 permit host 192.168.15.23', 'Router1config# access-list 10 permit 192.168.15.23 0.0.0.0');
add('7. If a router has two interfaces and is routing both IPv4 and IPv6 traffic, how many ACLs could be created and applied to it?', '8');
add('8. Which three statements are generally considered to be best practices in the placement of ACLs? Choose three.', 'Filter unwanted traffic before it travels onto a low-bandwidth link.', 'Place extended ACLs close to the source IP address of the traffic.', 'Place standard ACLs close to the destination IP address of the traffic.');
add('9. Refer to the exhibit. Which command would be used in a standard ACL to allow only devices on the network attached to R2 G0/0 interface to access the networks attached to R1?', 'access-list 1 permit 192.168.10.96 0.0.0.31');
add('10. Refer to the exhibit. If the network administrator created a standard ACL that allows only devices that connect to the R2 G0/0 network access to the devices on the R1 G0/1 interface, how should the ACL be applied?', 'outbound on the R1 G0/1 interface');
add('11. Refer to the following output. What is the significance of the 4 matches statement?', 'Four packets have been allowed through the router from PCs in the network of 192.168.1.64.');
add('12. On which router should the show access-lists command be executed?', 'on the router that has the ACL configured');
add('13. What is the quickest way to remove a single ACE from a named ACL?', 'Use the no keyword and the sequence number of the ACE to be removed.');
add('14. Which feature will require the use of a named standard ACL rather than a numbered standard ACL?', 'the ability to add additional ACEs in the middle of the ACL without deleting and re-creating the list');
add('15. An administrator has configured an access list on R1 to allow SSH administrative access from host 172.16.1.100. Which command correctly applies the ACL?', 'R1config-line# access-class 1 in');
add('16. Which type of router connection can be secured by the access-class command?', 'vty');
add('17. Consider the following output for an ACL that has been applied to a router via the access-class in command. What can a network administrator determine from the output that is shown?', 'Two devices were able to use SSH or Telnet to gain access to the router.');
add('18. Refer to the exhibit. A router has an existing ACL that permits all traffic from the 172.16.0.0 network. The administrator attempts to add a new ACE to the ACL that denies packets from host 172.16.0.1 and receives the error message that is shown in the exhibit. What action can the administrator take to block packets from host 172.16.0.1 while still permitting all other traffic from the 172.16.0.0 network?', 'Manually add the new deny ACE with a sequence number of 5.');
add('19. Refer to the exhibit. An ACL was configured on R1 with the intention of denying traffic from subnet 172.16.4.0/24 into subnet 172.16.3.0/24. All other traffic into subnet 172.16.3.0/24 should be permitted. This standard ACL was then applied outbound on interface Fa0/0. Which conclusion can be drawn from this configuration?', 'All traffic will be blocked, not just traffic from the 172.16.4.0/24 subnet.');
add('20. Refer to the exhibit. What will happen to the access list 10 ACEs if the router is rebooted before any other commands are implemented?', 'The ACEs of access list 10 will be renumbered.');
add('21. What is the effect of configuring an ACL with only ACEs that deny traffic?', 'The ACL will block all traffic.');
add('22. Which type of ACL statements are commonly reordered by the Cisco IOS as the first ACEs?', 'host');
add('23. A network administrator is configuring an ACL to restrict access to certain servers in the data center. The intent is to apply the ACL to the interface connected to the data center LAN. What happens if the ACL is incorrectly applied to an interface in the inbound direction instead of the outbound direction?', 'The ACL does not perform as designed.');
add('24. When would a network administrator use the clear access-list counters command?', 'when troubleshooting an ACL and needing to know how many packets matched');
/*Prompts for matching questions and Packet Tracer Labs*/
add = prompts.add;

/*
 * template:
 * add('helper label');
 */

add('User Priority –> value that supports level or service implementation');
add('Type –> value for the tag protocol ID value');
add('Canonical Format Identifier –> identifier that enables Token Ring frames to be carried across Ethernet');
add('VLAN ID –> VLAN number');

add('192.168.15.65 255.255.255.240 ==> the first valid host address in a subnet');
add('192.168.15.144 0.0.0.15 ==> subnetwork address of a subnet with 14 valid host addreses');
add('host 192.168.15.2 ==> all IP address bits must match exactly');
add('192.168.5.0 0.0.3.255 ==> hosts in a subnet with SM 255.255.252.0');
add('192.168.3.64 0.0.0.7 ==> address with a subnet 255.255.255.248');