/*Answers to multiple choice and fill-in-the-blank questions*/
var add = tests.add;

/*
 * template:
 * add(question, answer0 [, answer1, ...]);
 */

// CCNA4 v6.0 Chapter 4
add('Which range represents all the IP addresses that are affected when network 10.120.160.0 with a wildcard mask of 0.0.7.255 is used in an ACE?',
    '10.120.160.0 to 10.120.167.255');
add('What two functions describe uses of an access control list? (Choose two.)',
    'ACLs provide a basic level of security for network access.',
    'ACLs can control which areas a host can access on a network.');
add('Which two statements describe the effect of the access control list wildcard mask 0.0.0.15? (Choose two.)',
    'The first 28 bits of a supplied IP address will be matched.',
    'The last four bits of a supplied IP address will be ignored.');
add('A network administrator is configuring an ACL to limit the connection to R1 vty lines to only the IT group workstations in the network 192.168.22.0/28. The administrator verifies the successful Telnet connections from a workstation with IP 192.168.22.5 to R1 before the ACL is applied. However, after the ACL is applied to the interface Fa0/0, Telnet connections are denied. What is the cause of the connection failure?',
    'The IT group network is included in the deny statement.');
add('Two routers, R1 and R2, connect via a serial link. Both the R1 and R2 interfaces that connect to this network are labeled S0/0/0. Above the serial link are the words 10.0.56.252/30. R1 has two more connections: Gi0/0 and Gi0/1. The Gi0/0/ R1 interface connects to a switch. That switch connects to a server labeled FTP and web server 10.0.54.5/28. The R1 Gi0/1 interface connects to a switch. That switch connects to a host. Under the host are the words 10.0.55.23/24. The R2 router has another interface labeled Gi0/0. This interface connects to a switch. That switch connects to a host. Under the host are the words 10.0.70.23/25.Refer to the exhibit. The network administrator that has the IP address of 10.0.70.23/25 needs to have access to the corporate FTP server (10.0.54.5/28). The FTP server is also a web server that is accessible to all internal employees on networks within the 10.x.x.x address. No other traffic should be allowed to this server. Which extended ACL would be used to filter this traffic, and how would this ACL be applied? (Choose two.)',
    'access-list 105 permit tcp host 10.0.70.23 host 10.0.54.5 eq 20, access-list 105 permit tcp host 10.0.70.23 host 10.0.54.5 eq 21, access-list 105 permit tcp 10.0.0.0 0.255.255.255 host 10.0.54.5 eq www, access-list 105 deny ip any host 10.0.54.5, access-list 105 permit ip any any',
    'R1(config)# interface gi0/0, R1(config-if)# ip access-group 105 out');
add('A network administrator is designing an ACL. The networks 192.168.1.0/25, 192.168.0.0/25, 192.168.0.128/25, 192.168.1.128/26, and 192.168.1.192/26 are affected by the ACL. Which wildcard mask, if any, is the most efficient to use when specifying all of these networks in a single ACL permit entry?',
    '0.0.1.255');
add('The exhibit shows router R2 connected through int fa0/0 to a switch which in turn is connected to host with an IP address 192.168.1.1 /24. R2 is connected to another switch through interface fa0/1 and the switch is connected to a server with the IP address 192.168.2.1 /24.Refer to the exhibit. A network administrator wants to permit only host 192.168.1.1 /24 to be able to access the server 192.168.2.1 /24. Which three commands will achieve this using best ACL placement practices? (Choose three.)',
    'R2(config)# interface fastethernet 0/0',
    'R2(config)# access-list 101 permit ip host 192.168.1.1 host 192.168.2.1',
    'R2(config-if)# ip access-group 101 in');
add('Which two statements are correct about extended ACLs? (Choose two)',
    'Extended ACLs evaluate the source and destination addresses.',
    'Port numbers can be used to add greater definition to an ACL.');
add('Which three values or sets of values are included when creating an extended access control list entry? (Choose three.)',
    'source address and wildcard mask',
    'access list number between 100 and 199',
    'destination address and wildcard mask');
add('This ACL is applied on traffic outbound from the router on the interface that directly connects to the 10.0.70.5 server. A request for information from a secure web page is sent from host 10.0.55.23 and is destined for the 10.0.70.5 server. Which line of the access list will cause the router to take action (forward the packet onward or drop the packet)?',
    '3');
add('Which set of access control entries would allow all users on the 192.168.10.0/24 network to access a web server that is located at 172.17.80.1, but would not allow them to use Telnet?',
    'access-list 103 permit tcp 192.168.10.0 0.0.0.255 host 172.17.80.1 eq 80, access-list 103 deny tcp 192.168.10.0 0.0.0.255 any eq 23');
add('Which two packet filters could a network administrator use on an IPv4 extended ACL? (Choose two.)',
    'destination UDP port number',
    'ICMP message type');
add('Which two ACE commands will block traffic that is destined for a web server which is listening to default ports? (Choose two.)',
    'access-list 110 deny tcp any any eq https',
    'access-list 110 deny tcp any any gt 75');
add('Which feature is unique to IPv6 ACLs when compared to those of IPv4 ACLs?',
    'an implicit permit of neighbor discovery packets');
add('What two ACEs could be used to deny IP traffic from a single source host 10.1.1.1 to the 192.168.0.0/16 network? (Choose two.)',
    'access-list 100 deny ip 10.1.1.1 0.0.0.0 192.168.0.0 0.0.255.255',
    'access-list 100 deny ip host 10.1.1.1 192.168.0.0 0.0.255.255');
add('The IPv6 access list LIMITED_ACCESS is applied on the S0/0/0 interface of R1 in the inbound direction. Which IPv6 packets from the ISP will be dropped by the ACL on R1?',
    'ICMPv6 packets that are destined to PC1');
add('Which command is used to activate an IPv6 ACL named ENG_ACL on an interface so that the router filters traffic prior to accessing the routing table?',
    'ipv6 traffic-filter ENG_ACL in');
add('Which IPv6 ACL command entry will permit traffic from any host to an SMTP server on network 2001:DB8:10:10::/64?',
    'permit tcp any host 2001:DB8:10:10::100 eq 25');
add('In applying an ACL to a router interface, which traffic is designated as outbound?',
    'traffic that is leaving the router and going toward the destination host');
add('Fill in the blanks. Use dotted decimal format.',
    '0.0.0.255');

/*Prompts for matching questions and Packet Tracer Labs*/
add = prompts.add;

/*
 * template:
 * add('helper label');
 */

// CCNA4 v6.0 Chapter 4
add('drop > HTTP, Telnet; forward > FTP');
add('in a sybnet > 192.168.5.0 0.0.3.255, all IP > host, first valid > 192.168.15.65 255.255.255.240, subnetwork > 192.168.15.144 0.0.0.15, addresses > 192.168.3.64 0.0.0.7');
