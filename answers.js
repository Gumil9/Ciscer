/*Answers to multiple choice and fill-in-the-blank questions*/
var add = tests.add;

/*
 template:
 add(question, answer0 [, answer1, ...]);
 */

/*TEST 4*/
add('What are two reasons for physical layer protocols to use frame encoding techniques? (Choose two.)',
    'to identify where the frame starts and ends<br>to distinguish data bits from control bits');
add('Which statement is correct about multimode fiber?',
    'SC-SC patch cords are used with multimode fiber cables.');
add('Which layer of the OSI model is responsible for specifying the encapsulation method used for specific types of media?',
    'data link');
add('The throughput of a FastEthernet network is 80 Mb/s. The traffic overhead for establishing sessions, acknowledgments, and encapsulation is 15 Mb/s for the same time period. What is the goodput for this network?',
    '65 Mb/s');
add('A network administrator notices that some newly installed Ethernet cabling is carrying corrupt and distorted data signals. The new cabling was installed in the ceiling close to fluorescent lights and electrical equipment. Which two factors may interfere with the copper cabling and result in signal distortion and data corruption? (Choose two.)',
    'RFI​, EMI');
add('What is the purpose of the FCS field in a frame?',
    'to determine if errors occurred in the transmission and reception');
add('As data travels on the media in a stream of 1s and 0s how does a receiving node identify the beginning and end of a frame?​',
    'The transmitting node inserts start and stop bits into the frame.');
add('Which statement describes signaling at the physical layer?',
    'Sending the signals asynchronously means that they are transmitted without a clock signal.');
add('A network administrator is designing the layout of a new wireless network. Which three areas of concern should be accounted for when building a wireless network? (Choose three.)',
    'coverage area<br>interference<br>security');
add('What is one main characteristic of the data link layer?',
    'It shields the upper layer protocol from being aware of the physical medium to be used in the communication.');
add('What is one advantage of using fiber optic cabling rather than copper cabling?',
    'It is able to carry signals much farther than copper cabling.');
add('What acronym is used to reference the data link sublayer that identifies the network layer protocol encapsulated in the frame?',
    'LLC');
add('Why are two strands of fiber used for a single fiber optic connection?',
    'They allow for full-duplex connectivity.');
add('Refer to the exhibit. The PC is connected to the console port of the switch. All the other connections are made through FastEthernet links. Which types of UTP cables can be used to connect the devices?​',
    '1 – rollover, 2 – straight-through, 3 – crossover');
add('What is true concerning physical and logical topologies?',
    'Logical topologies determine the media access control method used.');
add('The term “Bandwidth” indicates the capacity of a medium to carry data and it is typically measured in kilobits per second (kb/s) or megabits per second (Mb/s).',
    'Bandwidth');
add('Refer to the exhibit. What is wrong with the displayed termination?',
    'The untwisted length of each wire is too long.');
add('10,000,000,000 b/s can also be written as “10” Gb/s.',
    '10');
add('What are two characteristics of 802.11 wireless networks? (Choose two.)',
    'Collisions can exist in the networks.<br>They use CSMA/CA technology.');
add('A network administrator is required to upgrade wireless access to end users in a building. To provide data rates up to 1.3 Gb/s and still be backward compatible with older devices, which wireless standard should be implemented?',
    '802.11ac');
add('How is the magnetic field cancellation effect enhanced in UTP cables?',
    'by increasing and varying the number of twists in each wire pair');
add('What is true concerning physical and logical topologies?',
    'Logical topologies refer to how a network transfers data between devices.');
add('What is indicated by the term throughput?',
    'the measure of the bits transferred across the media over a given period of time');
add('Which characteristic describes crosstalk?',
    'the distortion of the transmitted messages from signals carried in adjacent wires');
add('What technique is used with UTP cable to help protect against signal interference from crosstalk?',
    'twisting the wires together into pairs');
add('Which type of connector does a network interface card use?',
    'RJ-45');
add('What are two services performed by the data link layer of the OSI model? (Choose two.)',
	'It accepts Layer 3 packets and encapsulates them into frames.<br>It provides media access control and performs error detection.',);
add('Which method of data transfer allows information to be sent and received at the same time?',
	'full duplex');
add('Which statement describes an extended star topology?',
	'End devices connect to a central intermediate device, which in turn connects to other central intermediate devices.');
add('Which statement describes the media access control methods that are used by the networks in the exhibit?',
	'Network 1 uses CSMA/CD and Network 3 uses CSMA/CA.');
add('What is contained in the trailer of a data-link frame?',
	'error detection');
add('What is the function of the CRC value that is found in the FCS field of a frame?',
	'to verify the integrity of the received frame');

/*TEST 5*/
add('A host is trying to send a packet to a device on a remote LAN segment, but there are currently no mappings in its ARP cache. How will the device obtain a destination MAC address?',
    'It will send an ARP request for the MAC address of the default gateway.');
add('Which address or combination of addresses does a Layer 3 switch use to make forwarding decisions?',
    'MAC and IP addresses');
add('What are two potential network problems that can result from ARP operation? (Choose two.)',
    'On large networks with low bandwidth, multiple ARP broadcasts could cause data communication delays.',
    'Network attackers could manipulate MAC address and IP address mappings in ARP messages with the intent of intercepting network traffic.');
add('Launch PT Hide and Save PT' +
    'Open the PT Activity. Perform the tasks in the activity instruction and then answer the question.' +
    'What destination address will PC1 include in the destination address field of the Ethernet frame that it sends to PC2?',
    '0030.a3e5.0401');
add('How does adding an Ethernet line card affect the form factor of a switch?',
    'by expanding the port density');
add('Which two statements are correct about MAC and IP addresses during data transmission if NAT is not involved? (Choose two.)',
    'Destination and source MAC addresses have local significance and change every time a frame goes from one LAN to another',
    'Destination IP addresses in a packet header remain constant along the entire path to a target host');
add('What is the Layer 2 multicast MAC address that corresponds to the Layer 3 IPv4 multicast address 224.139.34.56?',
    '01-00-5E-0B-22-38');
add('What is the purpose of the preamble in an Ethernet frame?',
    'is used for timing synchronization');
add('A Layer 2 switch is used to switch incoming frames from a 1000BASE-T port to a port connected to a 100Base-T network. Which method of memory buffering would work best for this task?',
    'shared memory buffering');
add('A network administrator is connecting two modern switches using a straight-through cable. The switches are new and have never been configured. Which three statements are correct about the final result of the connection? (Choose three.)',
    'The auto-MDIX feature will configure the interfaces eliminating the need for a crossover cable',
    'The link between switches will work as full-duplex',
    'The link between the switches will work at the fastest speed that is supported by both switches');
add('Refer to the exhibit. PC1 issues an ARP request because it needs to send a packet to PC2. In this scenario, what will happen next?​',
    'PC2 will send an ARP reply with its MAC address.');
add('What is a characteristic of a contention-based access method?',
    'It is a nondeterministic method.');
add('What statement illustrates a drawback of the CSMA/CD access method?',
    'Collisions can decrease network performance.');
add('When would a switch record multiple entries for a single switch port in its MAC address table?',
    'when another switch is connected to the switch port');
add('Which two statements describe a fixed configuration Ethernet switch? (Choose two.)',
    'A fixed configuration switch may be stackable.',
    'The number of ports on the switch cannot be increased.');
add('Which two statements describe features or functions of the logical link control sublayer in Ethernet standards? (Choose two.)',
    'Logical link control is implemented in software.',
    'The data link layer uses LLC to communicate with the upper layers of the protocol suite.');
add('A network administrator issues the following commands on a Layer 3 switch:' +
    '<br>DLS1(config)# interface f0/3' +
    '<br>DLS1(config-if)# no switchport' +
    '<br>DLS1(config-if)# ip address 172.16.0.1 255.255.255.0' +
    '<br>DLS1(config-if)# no shutdown' +
    '<br>DLS1(config-if)# end' +
    '<br>What is the administrator configuring?',
    'a routed port');
add('Which statement is true about MAC addresses?',
    'The first three bytes are used by the vendor assigned OUI');
add('Refer to the exhibit. The exhibit shows a small switched network and the contents of the MAC address table of the switch. PC1 has sent a frame addressed to PC3. What will the switch do with the frame?',
    'The switch will forward the frame to all ports except port 4.');
add('The binary number 0000 1010 can be expressed as “A” in hexadecimal.',
    'A');
add('What are two features of ARP? (Choose two.)',
    'If a host is ready to send a packet to a local destination device and it has the IP address but not the MAC address of the destination, it generates an ARP broadcast.',
    'If a device receiving an ARP request has the destination IPv4 address, it responds with an ARP reply.');
add('What happens to runt frames received by a Cisco Ethernet switch?',
	'The frame is dropped.');
add('What are the two sizes (minimum and maximum) of an Ethernet frame? (Choose two.)',
	'64 bytes<br>1518 bytes');
add('What statement describes Ethernet?',
	'It defines the most common LAN type in the world.');
add('What statement describes a characteristic of MAC addresses?',
	'They must be globally unique.');
add('Which destination address is used in an ARP request frame?',
	'FFFF.FFFF.FFFF');
add('What addressing information is recorded by a switch to build its MAC address table?',
	'the source Layer 2 address of incoming frames');
add('Which switching method uses the CRC value in a frame?',
	'store-and-forward');
add('What is auto-MDIX?',
	'a feature that detects Ethernet cable typ​e');
add('When a device is sending data to another device on a remote network, the Ethernet frame is sent to the MAC address of the default gateway.',
	'true');
add('The ARP table in a switch maps which two types of address together?',
	'Layer 3 address to a Layer 2 address');
add('A switch with a default configuration connects four hosts. The ARP table for host A is shown. What happens when host A wants to send an IP packet to host D?',
	'Host A sends out a broadcast of FF:FF:FF:FF:FF:FF. Every other host connected to the switch receives the broadcast and host D responds with its MAC address.');
add('The switches are in their default configuration. Host A needs to communicate with host D, but host A does not have the MAC address for its default gateway. Which network hosts will receive the ARP request sent by host A?',
	'only hosts B, C, and router R1');
add('Which statement describes the treatment of ARP requests on the local link?',
	'They are received and processed by every device on the local network.');
add('A collision fragment, also known as a __RUNT__ frame, is a frame of fewer than 64 bytes in length.​',
	'RUNT');
add('On a Cisco switch, __port-based__ memory buffering is used to buffer frames in queues linked to specific incoming and outgoing ports.',
	'port-based');
add('ARP __spoofing__ is a technique that is used to send fake ARP messages to other hosts in the LAN. The aim is to associate IP addresses to the wrong MAC addresses.',
	'spoofing');



/*Prompts for matching questions and Packet Tracer Labs*/
add = prompts.add;

/*
 template:
 add('helper label');
 */

 /*TEST 4*/
add('Step 1 => The physical layer encodes the frames');
add('Step 2 => The physical layer creates the signals that represent the bits in each frame');
add('Step 3 => The signals are sent on the media one at a time.');
add('Step 4 => The physical layer retrieves the individual signals from the media');
add('Step 5 => The physical layer restores the individual signals to their bit representations');

add('Multimode Fiber => LED as light source');
add('Multimode Fiber => several paths of light into the fiber');
add('Multimode Fiber => generally used with LANs');
add('Single-mode Fiber => only one ray of light into the fiber');
add('Single-mode Fiber => generally used for campus backbone');
add('Single-mode Fiber => laser as light source');

/*TEST 5*/
add('cut-through => has low latency');
add('cut-through => may forward runt frames');
add('cut-through => begins forwarding when the destination address is received');
add('store-and-forward => always stores the entire frame');
add('store-and-forward => checks the CRC before forwarding');
add('store-and-forward => checks the frame length before forwarding');

add('Beginning of frame - Field 1 => Preamble');
add('Field 2 => Start Frame Delimiter');
add('Field 3 => Destination MAC Address');
add('Field 4 => Source MAC Address');
add('Field 5 => Length/Type');
add('Field 6 => Encapsulated Data');
add('End of frame - Field 7 => Frame Check Sequence');


