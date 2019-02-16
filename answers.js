/*Answers to multiple choice and fill-in-the-blank questions*/
var add = tests.add;

/*
 * template:
 * add(question, answer0 [, answer1, ...]);
 */

// CCNA4 v6.0 Chapter 1
add('A small company with 10 employees uses a single LAN to share information between computers. Which type of connection to the Internet would be appropriate for this company?',
    'a broadband service, such as DSL, through their local service provider');
add('Which network scenario will require the use of a WAN?',
    'Employees need to connect to the corporate email server through a VPN while traveling.');
add('Which statement describes a characteristic of a WAN?',
    'WAN networks are owned by service providers.');
add('What are two common types of circuit-switched WAN technologies? (Choose two.)',
    'ISDN',
    'PSTN');
add('Which two devices are needed when a digital leased line is used to provide a connection between the customer and the service provider? (Choose two.)',
    'DSU',
    'CSU');
add('What is a requirement of a connectionless packet-switched network?',
    'Full addressing information must be carried in each data packet.');
add('What is an advantage of packet-switched technology over circuit-switched technology?',
    'Packet-switched networks can efficiently use multiple routes inside a service provider network.');
add('A new corporation needs a data network that must meet certain requirements. The network must provide a low cost connection to sales people dispersed over a large geographical area. Which two types of WAN infrastructure would meet the requirements? (Choose two.)',
    'public infrastructure',
    'Internet');
add('What is a long distance fiber-optic media technology that supports both SONET and SDH, and assigns incoming optical signals to specific wavelengths of light?',
    'DWDM');
add('What are two common high-bandwidth fiber-optic media standards? (Choose two.)',
    'SONET',
    'SDH');
add('Which WAN technology is cell-based and well suited to carry voice and video traffic?',
    'ATM');
add('Which two technologies use the PSTN network to provide an Internet connection? (Choose two.)',
    'dialup',
    'ISDN');
add('A company needs to interconnect several branch offices across a metropolitan area. The network engineer is seeking a solution that provides high-speed converged traffic, including voice, video, and data on the same network infrastructure. The company also wants easy integration to their existing LAN infrastructure in their office locations. Which technology should be recommended?',
    'Ethernet WAN');
add('Which solution can provide Internet access to remote locations where no regular WAN services are available?',
    'VSAT');
add('Which WAN technology establishes a dedicated constant point-to-point connection between two sites?',
    'leased lines');
add('A customer needs a metropolitan area WAN connection that provides high-speed, dedicated bandwidth between two sites. Which type of WAN connection would best fulfill this need?',
    'Ethernet WAN');
add('Which feature is used when connecting to the Internet using DSL?',
    'DSLAM');
add('Which connectivity method would be best for a corporate employee who works from home two days a week, but needs secure access to internal corporate databases?',
    'VPN');
add('Which wireless technology provides Internet access through cellular networks?',
    'LTE');
add('A home user lives within 10 miles (16 kilometers) of the Internet provider network. Which type of technology provides high-speed broadband service with wireless access for this home user?',
    'WiMAX');
add('What is the recommended technology to use over a public WAN infrastructure when a branch office is connected to the corporate site?',
    'VPN');
add('What can cause a reduction in available bandwidth on a cable broadband connection?',
    'number of subscribers');
add('Which equipment is needed for an ISP to provide Internet connections through cable service?',
    'CMTS');
add('Which geographic scope requirement would be considered a distributed WAN scope?',
    'many-to-many');
add('A corporation is looking for a solution to connect multiple, newly established remote branch offices. Which consideration is important when selecting a private WAN connection rather than a public WAN connection?',
    'data security and confidentiality during transmission');

/*Prompts for matching questions and Packet Tracer Labs*/
add = prompts.add;

/*
 * template:
 * add('helper label');
 */

// CCNA4 v6.0 Chapter 1
add('CPE > devices and inside, DCE > devices that provide, DTE > customer, local loop > a physical');
add('set up > municipal, slow > satellite, phone > DSL, video > cable');
