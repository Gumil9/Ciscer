/*Answers to multiple choice and fill-in-the-blank questions*/
var add = tests.add;

/*
 template:
 add(question, answer0 [, answer1, ...]);
 */
/*TEST 1*/

add('1 What is one advantage of using the cut-through switching method instead of the store-and-forward switching method?', 'has a lower latency appropriate for high-performance computing applications*');
add('2  A network designer must provide a rationale to a customer for a design which will move an enterprise from a flat network topology to a hierarchical network topology. Which two features of the hierarchical design make it the better choice? (Choose two.)', 'simpler deployment for additional switch equipment*', 'easier to provide redundant links to ensure higher availability*');
add('3  What are two advantages of modular switches over fixed-configuration switches? (Choose two.)', 'need for fewer power outlets*', 'increased scalability*');
add(' Refer to the exhibit. Consider that the main power has just been restored. PC1 asks the DHCP server for IPv4 addressing. The DHCP server sends it an IPv4 address. While PC2 is still booting up, PC3 issues a broadcast IPv4 DHCP request. To which port will SW1 forward this request?', 'to Fa0/1, Fa0/2, and Fa0/3 only*');
add('5  What is one function of a Layer 2 switch?', 'determines which interface is used to forward a frame based on the destination MAC address*');
add('7  What is a collapsed core in a network design?', 'a combination of the functionality of the distribution and core layers*');
add('a combination of the functionality of the access and distribution layers 8  What are two reasons a network administrator would segment a network with a Layer 2 switch? (Choose two.)', 'to enhance user bandwidth*', 'to isolate traffic between segments*');
add('How is a frame sent from PCA forwarded to PCC if the MAC address table on switch SW1 is empty?', 'SW1 floods the frame on all ports on SW1, excluding the port through which the frame entered the switch.*');
add('11  What is a basic function of the Cisco Borderless Architecture distribution layer?', 'aggregating Layer 3 routing boundaries*');
add('12  ABC, Inc. has about fifty hosts in one LAN. The administrator would like to increase the throughput of that LAN. Which device will increase the number of collision domains and thereby increase the throughput of the LAN?', 'switch*');
add('13  What does the term “port density” represent for an Ethernet switch?', 'the number of available ports*');
add('14  Which type of transmission does a switch use when the destination MAC address is not contained in the MAC address table?', 'broadcast*');
add('15  What is a basic function of the Cisco Borderless Architecture access layer?', 'provides access to the user*');
add('16  What information is added to the switch table from incoming frames?', 'source MAC address and incoming port number*');
add('18  An administrator purchases new Cisco switches that have a feature called StackPower. What is the purpose of this feature?', 'It enables the sharing of power among multiple stackable switches.*');
add('19  Which switch form factor should be used when large port density, fault tolerance, and low price are important factors?', 'stackable switch*');
add('21 What tool is important to consider for use when making hardware improvement decisions about switches?', 'switched virtual interfaces authentication servers multilayer switching traffic flow analysis*');
add('22 What is the maximum wire speed of a single port on a 48-port gigabit switch?', '1000 Mb/s* 48 Mb/s 48 Gb/s 100 Mb/s');
add('23 When the installation of a network infrastructure is being planned, which technology will allow power to be provided via Ethernet cabling to a downstream switch and its connected devices?', 'PoE pass-through* Gigabit Ethernet wireless APs and VoIP phones PoE');
add('25. A local law firm is redesigning the company network so that all 20 employees can be connected to a LAN and to the Internet. The law firm would prefer a low cost and easy solution for the project. What type of switch should be selected? StackWise StackPower modular configuration fixed configuration* stackable configuration');
add('26. What is a definition of a two-tier LAN network design?', 'access, distribution, and core layers collapsed into one tier, with a separate backbone layer distribution and core layers collapsed into one tier, and the access layer on a separate tier* access and distribution layers collapsed into one tier, and the core layer on a separate tier access and core layers collapsed into one tier, and the distribution layer on a separate tier');
add('27. What two criteria are used by a Cisco LAN switch to decide how to forward Ethernet frames? (Choose two.)', 'path cost destination MAC address* egress port ingress port* destination IP address');
add('28. Which statement describes the microsegmentation feature of a LAN switch?', 'The switch will not forward broadcast frames. All ports inside the switch form one collision domain. Frame collisions are forwarded. Each port forms a collision domain.*');
add('29. Which two previously independent technologies should a network administrator attempt to combine after choosing to upgrade to a converged network infrastructure? (Choose two.)', 'mobile cell phone traffic scanners and printers electrical system analog and VoIP phone traffic* user data traffic*');
add('30. What is the destination address in the header of a broadcast frame?', 'FF-FF-FF-FF-FF-FF* 0.0.0.0 11-11-11-11-11-11 255.255.255.255');
add('31.Which type of address does a switch use to build the MAC address table?', 'destination IP address source IP address destination MAC address source MAC address*');
add('32. Which two previously independent technologies should a network administrator attempt to combine after choosing to upgrade to a converged network infrastructure? (Choose two.)', 'mobile cell phone traffic scanners and printers electrical system analog and VoIP phone traffic* user data traffic*');
add('Refer to the exhibit. How many broadcast domains are displayed?', '4 16 8* 1 55');
add('Refer to the exhibit. Fill in the blank. How many collision domains are shown in the topology? __2__', 'Core layer [*] provides high-speed backbone connectivity [*] functions as an aggregator for all the campus blocks');
add('37.Which network device can be used to eliminate collisions on an Ethernet network?', 'switch*');
add('Refer to the exhibit. Consider that the main power has just been restored. PC3 issues a broadcast IPv4 DHCP request. To which port will SW1 forward this request?', 'to Fa0/1, Fa0/2, and Fa0/3 only*');
add('There are "12" collision domains in the topology.​', '12');

/* TEST 2 */

add('1  Which type of cable does a network administrator need to connect a PC to a switch to recover it after the Cisco IOS software fails to load?', 'a console cable*');
add('2  Which two basic functions are performed by network security tools? (Choose two.)', 'revealing the type of information an attacker is able to gather from monitoring network traffic*', 'simulating attacks against the production network to determine any existing vulnerabilities*');
add('3  While troubleshooting a connectivity problem, a network administrator notices that a switch port status LED is alternating between green and amber. What could this LED indicate?', 'The port is experiencing errors.*');
add(' Refer to the exhibit. The network administrator wants to configure Switch1 to allow SSH connections and prohibit Telnet connections. How should the network administrator change the displayed configuration to satisfy the requirement?', 'Modify the transport input command.*');
add(' Open the PT Activity. Perform the tasks in the activity instructions and then answer the question. Fill in the blank. Do not use abbreviations.What is the missing command on S1? “ ip address 192.168.99.2 255.255.255.0 ”');
add('6  Which three statements are true about using full-duplex Fast Ethernet? (Choose three.)', 'Performance is improved with bidirectional data flow.*', 'Full-duplex Fast Ethernet offers 100 percent efficiency in both directions.*');
add('Performance is improved because the collision detect function is disabled on the device.* 7  In which type of attack does a malicious node request all available IP addresses in the address pool of a DHCP server in order to prevent legitimate hosts from obtaining network access?', 'DHCP starvation*');
add('8  Which protocol or service sends broadcasts containing the Cisco IOS software version of the sending device, and the packets of which can be captured by malicious hosts on the network?', 'CDP*');
add('9  Which two statements are true regarding switch port security? (Choose two.)', 'Dynamically learned secure MAC addresses are lost when the switch reboots.*', 'If fewer than the maximum number of MAC addresses for a port are configured statically, dynamically learned addresses are added to CAM until the maximum number is reached.* 10  The network administrator enters the following commands on a Cisco switch:');
add('What is the effect of entering these commands?', 'Users on the 192.168.1.0/24 subnet are able to ping the switch at IP address 192.168.1.2.*');
add(' Refer to the exhibit. Port Fa0/2 has already been configured appropriately. The IP phone and PC work properly. Which switch configuration would be most appropriate for port Fa0/2 if the network administrator has the following goals? No one is allowed to disconnect the IP phone or the PC and connect some other wired device. If a different device is connected, port Fa0/2 is shut down. The switch should automatically detect the MAC address of the IP phone and the PC and add those addresses to the running configuration.', 'SWA(config-if)# switchport port-security SWA(config-if)# switchport port-security maximum 2 SWA(config-if)# switchport port-security mac-address sticky********');
add(' Refer to the exhibit. Which event will take place if there is a port security violation on switch S1 interface Fa0/1?', 'Packets with unknown source addresses will be dropped.*');
add('13  Which method would mitigate a MAC address flooding attack?', 'configuring port security*');
add(' Refer to the exhibit. What media issue might exist on the link connected to Fa0/1 based on the show interface command?', 'There could be too much electrical interference and noise on the link.*');
add('16  Which interface is the default location that would contain the IP address used to manage a 24-port Ethernet switch?', 'VLAN 1*');
add('17  Which action will bring an error-disabled switch port back to an operational state?', 'Issue the shutdown and then no shutdown interface commands.* 18');
add(' Refer to the exhibit. What can be determined about port security from the information that is shown?', 'The port violation mode is the default for any port that has port security enabled.*');
add(' Refer to the exhibit. Which S1 switch port interface or interfaces should be configured with the ip dhcp snooping trust command if best practices are implemented?', 'only the G0/1 and G0/24 ports*');
add('only the G0/1, G0/2, G0/3, and G0/4 ports 22  What impact does the use of the mdix auto configuration command have on an Ethernet interface on a switch?', 'automatically detects copper cable type*');
add('automatically detects interface speed 23  Which command displays information about the auto-MDIX setting for a specific interface?');
add('show controllers* 24  A production switch is reloaded and finishes with a Switch> prompt. What two facts can be determined? (Choose two.)', 'A full version of the Cisco IOS was located and loaded.*', 'POST occurred normally.*');
add('25. Which two statements are true about using full-duplex Fast Ethernet?', 'Performance is improved with bidirectional data flow.*Latency is reduced because the NIC processes frames faster.Nodes operate in full-duplex with unidirectional data flow.Performance is improved because the NIC is able to detect collisions.Full-duplex Fast Ethernet offers 100 percent efficiency in both directions.*');
add('26. A network administrator configures the port security feature on a switch. The security policy specifies that each access port should allow up to two MAC addresses. When the maximum number of MAC addresses is reached, a frame with the unknown source MAC address is dropped and a notification is sent to the syslog server. Which security violation mode should be configured for each access port?', 'warning protect shutdown restrict*');
add('28.An administrator wants to use a network security auditing tool on a switch to verify which ports are not protected against a MAC flooding attack. For the audit to be successful, what important factor must the administrator consider?', 'if the number of valid MAC addresses and spoofed MAC addresses is the same if the CAM table is empty before the audit is started if all the switch ports are operational at the same speed the aging-out period of the MAC address table*');
add('29. Which two features on a Cisco Catalyst switch can be used to mitigate DHCP starvation and DHCP spoofing attacks? (Choose two.)', 'port security* DHCP snooping* extended ACL strong password on DHCP servers DHCP server failover');
add('30. What is one difference between using Telnet or SSH to connect to a network device for management purposes?', 'Telnet uses UDP as the transport protocol whereas SSH uses TCP. Telnet supports a host GUI whereas SSH only supports a host CLI. Telnet does not provide authentication whereas SSH provides authentication. Telnet sends a username and password in plain text, whereas SSH encrypts the username and password.*');
add('Refer to the exhibit. A network technician is troubleshooting connectivity issues in an Ethernet network with the command show interfaces fastEthernet 0/0. What conclusion can be drawn based on the partial output in the exhibit?', 'All hosts on this network communicate in full-duplex mode. There are collisions in the network that cause frames to occur that are less than 64 bytes in length. A malfunctioning NIC can cause frames to be transmitted that are longer than the allowed maximum length. * Some workstations might use an incorrect cabling type to connect to the network.');
add('32.In which situation would a technician use the show interfaces switch command?', 'when packets are being dropped from a particular directly attached host* when an end device can reach local devices, but not remote devices to determine the MAC address of a directly attached network device on a particular interface to determine if remote access is enabled');
add('33. Which statement describes the port speed LED on the Cisco Catalyst 2960 switch? If the LED is off, the port is not operating. If the LED is blinking green, the port is operating at 10 Mb/s. If the LED is green, the port is operating at 100 Mb/s.* If the LED is amber, the port is operating at 1000 Mb/s.');
add('35.What is a function of the switch boot loader?', 'to provide security for the vulnerable state when the switch is booting to control how much RAM is available to the switch during the boot process to speed up the boot process to provide an environment to operate in when the switch operating system cannot be found*');
add('Full-duplex communication allows both ends of a connection to transmit and receive data simultaneously', 'Full-duplex');

/*Prompts for matching questions and Packet Tracer Labs*/
add = prompts.add;

/*
 template:
 add('helper label');
 */

/*Final exam*/

add('link-local -> FE80:0:56BA:FFEE:A0B4:47FF:FE36:532B');
add('link-local -> FE80::1');
add('Multicast -> FF02::2');
add('Multicast -> FF02::1:FF3A:25C9');
add('global unicast -> 2001:DB8:10::12');
add('global unicast -> 2001:DB8:A1:0B:C78::1');

add('Stage 1 – perform the post');
add('Stage 2 – load the bootstrap program');
add('Stage 3 – Locate and load the Cisco IOS');
add('Stage 4 – locate and load the configuration file');

add('PDU encapsulation -> frame header');

add('POP -> does not require a centralized backup solution');
add('pop -> mail is deleted as it is downloaded');
add('pop -> desirable for an ISP or large business');
add('imap -> downloads copies of email messages to the client');
add('imap -> original messages must be manually deleted');
add('imap -> require a larger amount of disk space');

add('user EXEC mode -> limited number os basic monitoring commands');
add('user EXEC mode -> the first entrance into the CLI of an IOS device');
add('privileged EXEC mode -> accessed by entering the enable command');
add('privileged EXEC mode -> identified by a prompt ending with the # character');
add('global configuration mode -> changes made affect the operation of the device as a whole');
add('global configuration mode -> accessed by entering the congigure terminal command');

add('1 -> remote access method that uses encryption');
add('2 -> preferred out-of-band access method');
add('4 -> remote access via a dialup connection');
add('5 -> unsecure remote access');

add('Protect the network from unauthorized access. -> security');
add('Provide redundant links and devices. -> fault tolerance');
add('Expand the network without degrading the service for existing users. -> scalability');

add('CLI -> users interact with the operating system by typing commands');
add('GUI -> enables the user to interact with the operating system by pointing and clicking');
add('kernel -> the part of the OS that interacts directly with the device hardware');
add('shell -> the part of the operating system that interfaces with applications and the user');

add('Application layer -> HTTP and FTP');
add('Application layer -> end user program functionality');
add('Presentation layer -> compression');
add('Presentation layer -> common format');
add('Session layer -> dialog maintenance');

add('locale and load the Cisco IOS software -> phase 2');
add('locate and load the startup configuration file -> phase 3');
add('perform the POST and load the bootstrap program -> phase 1');

/*final test ccna7*/

add('packets with destination of 172.17.6.15 -> 1');
add('packets with destination of 172.17.14.8 -> 2');
add('packets with destination of 172.17.12.10 -> 3');
add('packets with destination of 172.17.10.5 -> 4');
add('packets with destination of 172.17.8.20 -> 5');
add('nothing -> 6');

add('physical topology diagram -> location of a desktop PC in a classroom');
add('physical topology diagram -> path of cables that connect rooms to wiring closets');
add('logical topology diagram -> IP address of a server');

add('Copper cables -> horizontal cabling structure');
add('Copper cables -> desktop PCs in an enterpise office');
add('Fiber Optic -> backbone cabling in an enterprise');
add('Fiber Optic -> long-haul networks');
add('wireless -> guest access in a coffee shop');
add('wireless -> waiting rooms in a hospital');

add('_________________________________________________');
add('conf CS Department Router');
add('_________________________________________________');
add('enable');
add('configure terminal');
add('interface g0/0');
add('ip address 192.168.1.126 255.255.255.224');
add('description Lab 124 LAN');
add('no shutdown');
add('exit');

add('interface g0/1');
add('ip address 192.168.1.158 255.255.255.240');
add('description Lab 214 LAN');
add('no shutdown');
add('exit');

add('ipv6 unicast-routing');
add('interface g0/0');
add('ipv6 address 2001:db8:acad:A::1/64');
add('ipv6 address FE80::1 link-local');
add('no shutdown');
add('exit');

add('interface g0/1');
add('ipv6 address 2001:db8:acad:B::1/64');
add('ipv6 address FE80::1 link-local');
add('no shutdown');
add('exit');

add('conf terminal');
add('hostname Middle');
add('Enable secret class12345');
add('line console 0');
add('password ccnanetacad2016');
add('login');
add('exit');

add('line vty 0 15');
add('password ccnanetacad2016');
add('login');
add('exit');
add('line aux 0');
add('password ccnanetacad2016');
add('login');
add('exit');

add('Banner motd # Sorry! Authorized Access Only” #');
add('security password min-length 10');
add('service password-encryption');
add('ip domain-name ccnanetacad2016.net');
add('username netadmin privilege 15 secret Cisco_CCNA5');
add('crypto key generate rsa');
add('1024');

add('line vty 0 15');
add('login local');
add('transport input ssh');
add('end');

add('copy running-config startup-config');

add('_________________________________________________');
add('++++++++++++++++++++++++++++++++++++++++++++++++');
add('Conf lab 214 switchv');
add('_________________________________________________');
add('conf t');
add('ip default-gateway 192.168.1.158');
add('int vlan 1');
add('ip address 192.168.1.157 255.255.255.240');
add('no shutdown');
add('line vty 0 4');
add('password class');
add('login');

add('end');
add('copy running-config startup-config');

add('++++++++++++++++++++++++++++++++++++++++++++++++');
add('-=================================================');
add('_________________________________________________');
add('124-1');
add('++++++++++++++++++++++++++++++++++++++++++++++++');

add('IPv4');

add('IP address: 192.168.1.97');

add('Mask: 255.255.255.224');

add('default gateway: 192.168.1.126');

add('IPv6');

add('IPv6 address: 2001:DB8:ACAD:A::FF/64');

add('default gateway: FE80::1');

add('—————————————–');

add('124-5');
add('+++++++++++++++++++++++++++++++++');
add('IPv4');

add('IP address: 192.168.1.98');

add('Mask: 255.255.255.224');

add('default gateway: 192.168.1.126');

add('IPv6');

add('IPv6 address: 2001:DB8:ACAD:A::15/64');

add('default gateway: FE80::1');

add('—————————————–');
add('214-1');
add('+++++++++++++++++++++++++++++++++++++++');
add('IPv4');

add('IP address: 192.168.1.145');

add('Mask: 255.255.255.240');

add('default gateway: 192.168.1.158');

add('IPv6');

add('IPv6 address: 2001:DB8:ACAD:B::FF/64');

add('default gateway: FE80::1');

add('—————————————–');
add('SERVER TFTP');
add('+++++++++++++++++++++++++++++++++++++++++++++');
add('IPv4');

add('IP address: 192.168.1.146');

add('Mask: 255.255.255.240');

add('default gateway: 192.168.1.158');

add('IPv6');

add('Pv6 address: 2001:DB8:ACAD:B::15/64');

add('default gateway: FE80::1');

add('++++++++++++++++++++++++++++++++++++++++++++++++++');
add('Backup the Configuration of the Router to TFTP.');
add('++++++++++++++++++++++++++++++++++++++++++++++++++');

add('copy running-config tftp');

add('192.168.1.146');

add('end');
add('_________________________________________________');

