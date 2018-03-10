/*Answers to multiple choice and fill-in-the-blank questions*/
var add = tests.add;

/*
 * template:
 * add(question, answer0 [, answer1, ...]);
 */

// CCNA4 v6.0 Chapter 3
add('Which broadband wireless technology is based on the 802.11 standard?',
    'municipal Wi-Fi');
add('What is the approximate distance limitation for providing a satisfactory ADSL service from the central office to a customer?',
    '3.39 miles or 5.46 kilometers');
add('What is a component of an ADSL connection that is located at the customer site?',
    'CPE');
add('What is the function of the DSLAM in a broadband DSL network?',
    'multiplexes individual customer DSL connections into a single upstream link');
add('Which broadband technology would be best for a small office that requires fast upstream connections?',
    'fiber-to-the-home');
add('What are two WAN connection enhancements that are achieved by implementing PPPoE? (Choose two.)',
    'CHAP enables customer authentication and accounting.',
    'PPP enables the ISP to assign an IP address to the customer WAN interface.');
add('When PPPoE is configured on a customer router, which two commands must have the same value for the configuration to work? (Choose two.)',
    'dialer pool 2',
    'pppoe-client dial-pool-number 2');
add('Why is the MTU for a PPPoE DSL configuration reduced from 1500 bytes to 1492?',
    'to accommodate the PPPoE headers');
add('What are two characteristics of a PPPoE configuration on a Cisco customer router? (Choose two.)',
    'The Ethernet interface does not have an IP address.',
    'The PPP configuration is on the dialer interface.');
add('Where is PPPoE configured on a Cisco router?',
    'on the dialer interface');
add('How can the use of VPNs in the workplace contribute to lower operating costs?',
    'VPNs can be used across broadband connections rather than dedicated WAN links.');
add('How is “tunneling” accomplished in a VPN?',
    'New headers from one or more VPN protocols encapsulate the original packets.');
add('Which two statements describe a remote access VPN? (Choose two.)',
    'It may require VPN client software on hosts.',
    'It is used to connect individual hosts securely to a company network over the Internet.');
add('Which is a requirement of a site-to-site VPN?',
    'It requires a VPN gateway at each end of the tunnel to encrypt and decrypt traffic.');
add('What functionality does mGRE provide to the DMVPN technology?',
    'It allows the creation of dynamically allocated tunnels through a permanent tunnel source at the hub and dynamically allocated tunnel destinations at the spokes.');
add('Which two scenarios are examples of remote access VPNs? (Choose two.)',
    'An employee who is working from home uses VPN client software on a laptop in order to connect to the company network.',
    'A mobile sales agent is connecting to the company network via the Internet connection at a hotel.');
add('What solution can provide a VPN between site A and site B to support encapsulation of any Layer 3 protocol between the internal networks at each site?',
    'a GRE tunnel');
add('Which three statements are characteristics of generic routing encapsulation (GRE)? (Choose three.)',
    'GRE does not have strong security mechanisms.',
    'GRE is stateless.',
    'GRE encapsulation supports any OSI Layer 3 protocol.');
add('Which IP address is configured on the physical interface of the CORP router?',
    '209.165.202.133');
add('Which IP address would be configured on the tunnel interface of the destination router?',
    '172.16.1.2');
add('A tunnel was implemented between routers R1 and R2. Which two conclusions can be drawn from the R1 command output? (Choose two.)',
    'The data that is sent across this tunnel is not secure.',
    'A GRE tunnel is being used.');
add('What is used by BGP to determine the best path to a destination?',
    'attributes');
add('What command specifies a BGP neighbor that has an IP address of 5.5.5.5/24 and that is in AS 500?',
    '(config-router)# neighbor 5.5.5.5 remote-as 500');
add('Multiple BGP processes can run on a router.',
    'false');
add('Which two configurations will allow router R1 to establish a neighbor relationship with router R2? (Choose two.)',
    'R2(config)# router bgp 65002, R2(config-router)# network 192.168.20.0, R2(config-router)# neighbor 209.165.200.225 remote-as 65001',
    'R1(config)# router bgp 65001, R1(config-router)# network 192.168.10.0, R1(config-router)# neighbor 209.165.200.226 remote-as 65002');
add('What is the code displayed on the web page?',
    'BGP is running!');


/*Prompts for matching questions and Packet Tracer Labs*/
add = prompts.add;

/*
 * template:
 * add('helper label');
 */

// CCNA4 v6.0 Chapter 3: PT Skills Assessment - SIC PPP, Routing, and Remote Access VPN
