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
add('The physical layer encodes the frames',
    'Step 1');
add('The physical layer creates the signals that represent the bits in each frame',
    'Step 2');
add('The signals are sent on the media one at a time.',
    'Step 3');
add('The physical layer retrieves the individual signals from the media',
    'Step 4');
add('The physical layer restores the individual signals to their bit representations',
    'Step 5');
add('The physical layer passes the packets up to the internet layer.',
    'Без соответствия');
/*TEST 5*/
add('cut-through',
    'has low latency',
    'may forward runt frames',
    'begins forwarding when the destination address is received');
add('store-and-forward',
    'always stores the entire frame' +
    '<br>checks the CRC before forwarding' +
    '<br>checks the frame length before forwarding');
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
add('Start Frame Delimiter',
    'Field 2');
add('Source MAC Address',
    'Field 4');
add('Encapsulated Data',
    'Field 6');
add('Flag',
    'Нет соответствия');
add('Preamble',
    'Beginning of frame - Field 1');
add('Destination MAC Address',
    'Field 3');
add('Length/Type',
    'Field 5');
add('Frame Check Sequence',
    'End of frame - Field 7');
add('Session ID',
    'Нет соответсвия');


/*Prompts for matching questions and Packet Tracer Labs*/
add = prompts.add;

/*
 template:
 add('helper label');
 */

add('step 5 => R1 replaces the address 192.168.10.10 with a translated inside global address.');
add('step 2 => R1 checks the NAT configuration to determine if this packet should be translated.');
add('step 4 => R1 selects an available global address from the dynamic address pool.');
add('step 1 => The cost sends packets that request a connection to the server at the address 209.165.200.254');
add('step 3 => If there is no translation entry for this IP address, R1 determines that the source address 192.168.10.10 must be translated.');

add('full operating system > flash');
add('limited operating system > ROM');
add('routing table > RAM');
add('startup configuration file > NVRAM');

add('Each router is responsible for “saying hello” to its neighbors on directly connected networks. > step 2');
add('Each router builds a Link-State Packet (LSP) containing the state of each directly connected link > step 3');
add('Each router learns about its own directly connected networks. > step 1');
add('Each router floods the LSP to all neighbors, who then store all LSPs received in a database > step 4');
add('Each router uses the database to construct a complete map of the topology and computes the best > step 5');

add('buffering > 1');
add('full-duplex > 2');
add('collision domain > 3');
add('MAC address table > 4');
