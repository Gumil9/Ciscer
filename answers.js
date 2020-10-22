/*Answers to multiple choice and fill-in-the-blank questions*/
var add = tests.add;

/*
 * template:
 * add(question, answer0 [, answer1, ...]);
 */

// CCNA4 v7.0 test modules 16-17
add('Which component is designed to protect against unauthorized communications to and from a computer?', 'firewall');
add('Which command will block login attempts on RouterA for a period of 30 seconds if there are 2 failed login attempts within 10 seconds?', 'RouterA(config)# login block-for 30 attempts 2 within 10');
add('What is the purpose of the network security accounting function?', 'to keep track of the actions of a user');
add('What type of attack may involve the use of tools such as nslookup and fping?', 'reconnaissance attack');
add('Which example of malicious code would be classified as a Trojan horse?', 'malware that was written to look like a video game');
add('What is the difference between a virus and a worm?', 'Worms self-replicate but viruses do not.');
add('Which attack involves a compromise of data that occurs between two end points?', 'man-in-the-middle attack');
add('Which type of attack involves an adversary attempting to gather information about a network to identify vulnerabilities?', 'reconnaissance');
add('What is the purpose of the network security authentication function?', 'to require users to prove who they are');
add('Which firewall feature is used to ensure that packets coming into a network are legitimate responses to requests initiated from internal hosts?', 'stateful packet inspection');
add('When applied to a router, which command would help mitigate brute-force password attacks against the router?', 'login block-for 60 attempts 5 within 60');
add('What feature of SSH makes it more secure than Telnet for a device management connection?', 'login information and data encryption');
add('What is the advantage of using SSH over Telnet?', 'SSH provides secure communications to access hosts.');
add(' What is the role of an IPS?', 'detecting and blocking of attacks in real time');
add('A user is redesigning a network for a small company and wants to ensure security at a reasonable price. The user deploys a new application-aware firewall with intrusion detection capabilities on the ISP connection. The user installs a second firewall to separate the company network from the public network. Additionally, the user installs an IPS on the internal network of the company. What approach is the user implementing?', 'layered');
add('What is an accurate description of redundancy?', 'designing a network to use multiple paths between switches to ensure there is no single point of failure');
add('A network administrator is upgrading a small business network to give high priority to real-time applications traffic. What two types of network services is the network administrator trying to accommodate? (Choose two.)', 'voice + video');
add(' What is the purpose of a small company using a protocol analyzer utility to capture network traffic on the network segments where the company is considering a network upgrade?', 'to document and analyze network traffic requirements on each network segment');
add('Refer to the exhibit. An administrator is testing connectivity to a remote device with the IP address 10.1.1.1. What does the output of this command indicate?', 'A router along the path did not have a route to the destination.');
add('Which method is used to send a ping message specifying the source address for the ping?', 'Issue the ping command without specifying a destination IP address.');
add('A network engineer is analyzing reports from a recently performed network baseline. Which situation would depict a possible latency issue?', 'an increase in host-to-host ping response times');
add(' Which statement is true about Cisco IOS ping indicators?​', '‘U’ may indicate that a router along the path did not contain a route to the destination address and that the ping was unsuccessful.');
add('A user reports a lack of network connectivity. The technician takes control of the user machine and attempts to ping other computers on the network and these pings fail. The technician pings the default gateway and that also fails. What can be determined for sure by the results of these tests?', 'Nothing can be determined for sure at this point.');
add('A network technician issues the C:\> tracert -6 www.cisco.com command on a Windows PC. What is the purpose of the -6 command option?', 'It forces the trace to use IPv6.');
add('Why would a network administrator use the tracert utility?', 'to identify where a packet was lost or delayed on a network');
add('A ping fails when performed from router R1 to directly connected router R2. The network administrator then proceeds to issue the show cdp neighbors command. Why would the network administrator issue this command if the ping failed between the two routers?', 'The network administrator wants to verify Layer 2 connectivity.');
add('A network engineer is troubleshooting connectivity issues among interconnected Cisco routers and switches. Which command should the engineer use to find the IP address information, host name, and IOS version of neighboring network devices?', 'show cdp neighbors detail');
add('What information about a Cisco router can be verified using the show version command?', 'the value of the configuration register');
add('Which command should be used on a Cisco router or switch to allow log messages to be displayed on remotely connected sessions using Telnet or SSH?', 'terminal monitor');
add('Which command can an administrator issue on a Cisco router to send debug messages to the vty lines?', 'terminal monitor');
add('By following a structured troubleshooting approach, a network administrator identified a network issue after a conversation with the user. What is the next step that the administrator should take?', 'Establish a theory of probable causes.');
add('Users are complaining that they are unable to browse certain websites on the Internet. An administrator can successfully ping a web server via its IP address, but cannot browse to the domain name of the website. Which troubleshooting tool would be most useful in determining where the problem is?', 'nslookup');
add('An employee complains that a Windows PC cannot connect to the Internet. A network technician issues the ipconfig command on the PC and is shown an IP address of 169.254.10.3. Which two conclusions can be drawn? (Choose two.)', 'The PC cannot contact a DHCP server.', 'The PC is configured to obtain an IP address automatically.');
add('Refer to the exhibit. Host H3 is having trouble communicating with host H1. The network administrator suspects a problem exists with the H3 workstation and wants to prove that there is no problem with the R2 configuration. What tool could the network administrator use on router R2 to prove that communication exists to host H1 from the interface on R2, which is the interface that H3 uses when communicating with remote networks?', 'traceroute; show cdp neighbors', 'an extended ping');
add('Refer to the exhibit. Baseline documentation for a small company had ping round trip time statistics of 36/97/132 between hosts H1 and H3. Today the network administrator checked connectivity by pinging between hosts H1 and H3 that resulted in a round trip time of 1458/2390/6066. What does this indicate to the network administrator?', 'Something is causing a time delay between the networks.');
add('Which network service automatically assigns IP addresses to devices on the network?', 'DHCP');
add('Which command can an administrator execute to determine what interface a router will use to reach remote networks?', 'show ip route');
add('On which two interfaces or ports can security be improved by configuring executive timeouts? (Choose two.)', 'console ports', 'vty ports');
add('When configuring SSH on a router to implement secure network management, a network engineer has issued the login local and transport input ssh line vty commands. What three additional configuration actions have to be performed to complete the SSH configuration? (Choose three.)', 'Generate the asymmetric RSA keys.', 'Configure the correct IP domain name.', 'Create a valid local username and password database.');
add('What is considered the most effective way to mitigate a worm attack?', 'Download security updates from the operating system vendor and patch all vulnerable systems.');
add('Which statement describes the ping and tracert commands?', 'Tracert shows each hop, while ping shows a destination reply only.');
add('A technician is to document the current configurations of all network devices in a college, including those in off-site buildings. Which protocol would be best to use to securely access the network devices?', 'SSH');
add('Open the PT Activity. Perform the tasks in the activity instructions and then answer the question.', 'transport input ssh');
add('An administrator decides to use “WhatAreyouwaiting4” as the password on a newly installed router. Which statement applies to the password choice?', 'It is strong because it uses a passphrase.');
add('An administrator decides to use “pR3s!d7n&0” as the password on a newly installed router. Which statement applies to the password choice?', 'It is strong because it uses a minimum of 10 numbers, letters and special characters.');
add('An administrator decides to use “5$7*4#033!” as the password on a newly installed router. Which statement applies to the password choice?', 'It is strong because it contains 10 numbers and special characters.');
add('An administrator decides to use “pR3s!d7n&0” as the password on a newly installed router. Which statement applies to the password choice?', 'It is strong because it uses a minimum of 10 numbers, letters and special characters.');
add('An administrator decides to use “12345678!” as the password on a newly installed router. Which statement applies to the password choice?', 'It is weak because it uses a series of numbers or letters.');
add('An administrator decides to use “admin” as the password on a newly installed router. Which statement applies to the password choice?', 'It is weak because it is often the default password on new devices.');
add('An administrator decides to use “Feb121978” as the password on a newly installed router. Which statement applies to the password choice?', 'It is weak because it uses easily found personal information.');
add('An administrator decides to use “password” as the password on a newly installed router. Which statement applies to the password choice?', 'It is weak because it is a commonly used password.');
add('An administrator decides to use “RobErT” as the password on a newly installed router. Which statement applies to the password choice?', 'It is weak since it uses easily found personal information.');
add('An administrator decides to use “Elizabeth” as the password on a newly installed router. Which statement applies to the password choice?', 'It is weak because it uses easily found personal information.');
add('A network technician is troubleshooting an issue and needs to verify the IP addresses of all interfaces on a router. What is the best command to use to accomplish the task?', 'show ip interface brief');
add('Students who are connected to the same switch are having slower than normal response times. The administrator suspects a duplex setting issue. What is the best command to use to accomplish the task?', 'show interfaces');
add('A user wants to know the IP address of the PC. What is the best command to use to accomplish the task?', 'ipconfig');
add('A student wants to save a router configuration to NVRAM. What is the best command to use to accomplish the task?', 'copy running-config startup-config');
add('A support technician needs to know the IP address of the wireless interface on a MAC. What is the best command to use to accomplish the task?', 'ipconfig getifaddr en0');
add('A network technician is troubleshooting an issue and needs to verify all of the IPv6 interface addresses on a router. What is the best command to use to accomplish the task?', 'show ipv6 interface');
add('A teacher is having difficulties connecting his PC to the classroom network. He needs to verify that a default gateway is configured correctly. What is the best command to use to accomplish the task?', 'ipconfig');
add('Only employees connected to IPv6 interfaces are having difficulty connecting to remote networks. The analyst wants to verify that IPv6 routing has been enabled. What is the best command to use to accomplish the task?', 'show running-config');
add('An administrator is troubleshooting connectivity issues and needs to determine the IP address of a website. What is the best command to use to accomplish the task?', 'nslookup');

/*Prompts for matching questions and Packet Tracer Labs*/
add = prompts.add;

/*
 * template:
 * add('helper label');
 */

add('technological - a network engineer; configuration - when implementing; security - network administrator');
add('information - obtaining; data - installing; identity - pretending; disruption - preventing	');
add('application - request; URL - keywords; skateful - hosts; packet - destination');
add('create->generate->login->configure->login local->password->transport');
