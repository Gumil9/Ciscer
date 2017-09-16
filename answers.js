/*Answers to multiple choice and fill-in-the-blank questions*/
var add = tests.add;

/*
 * template:
 * add(question, answer0 [, answer1, ...]);
 */

// CCNA3 Scaling Networks v6.0 Chapter 1
add('What are two expected features of modern enterprise networks? (Choose two.)',
    'support for critical applications',
    'support for converged network traffic');
add('What network design would contain the scope of disruptions on a network should a failure occur?',
    'the deployment of distribution layer switches in pairs and the division of access layer switch connections between them');
add('Which action should be taken when planning for redundancy on a hierarchical network design?',
    'add alternate physical paths for data to traverse the network');
add('Which devices exist in the failure domain when switch S3 loses power?',
    'PC_3 and AP_2');
add('Which design feature will limit the size of a failure domain in an enterprise network?',
    'the use of the building switch block approach');
add('A network administrator is planning redundant devices and cabling in a switched network to support high availability. Which benefit will implementing the Spanning Tree Protocol provide to this design?',
    'Redundant paths can be available without causing logical Layer 2 loops.');
add('What are two benefits of extending access layer connectivity to users through a wireless medium? (Choose two.)',
    'increased flexibility',
    'reduced costs');
add('Which two features of enterprise class equipment assists an enterprise network in maintaining 99.999 percent up-time? (Choose two.)',
    'failover capabilities',
    'redundant power supplies');
add('What capability is provided by the use of application-specific integrated circuits in Cisco multilayer switches?',
    'forwarding of IP packets independent of the CPU');
add('Which statement describes a characteristic of Cisco Meraki switches?',
    'They are cloud-managed access switches that enable virtual stacking of switches.');
add('In which situation would a network administrator install a Cisco Nexus Series or Cisco Catalyst 6500 Series switch to promote infrastructure scalability?',
    'on a data center network to provide expansion and transport flexibility');
add('Which statement describes a characteristic of Cisco Catalyst 2960 switches?',
    'New Cisco Catalyst 2960-C switches support PoE pass-through.');
add('What are three access layer switch features that are considered when designing a network? (Choose three.)',
    'forwarding rate',
    'port density',
    'Power over Ethernet');
add('What are two functions of a router? (Choose two.)',
    'It connects multiple IP networks.',
    'It determines the best path to send packets.');
add('A network engineer is reviewing a network design that uses a fixed configuration enterprise router that supports both LAN and WAN connections. However, the engineer realizes that the router does not have enough interfaces to support growth and network expansion. Which type of device should be used as a replacement?',
    'a modular router');
add('When a Cisco IOS device is being selected or upgraded, which option indicates the capabilities of the Cisco IOS device?',
    'feature set');
add('Immediately after a router completes its boot sequence, the network administrator wants to check the routers configuration. From privileged EXEC mode, which of the following commands can the administrator use for this purpose? (Choose two.)',
    'show startup-config',
    'show running-config');
add('Which command was issued on a Cisco switch that resulted in the exhibited output?',
    'show port-security address');
add('What is a characteristic of in-band device management?',
    'It is used to monitor and make configuration changes to a network device over a network connection.');
add('Which two requirements must always be met to use in-band management to configure a network device? (Choose two.)',
    'at least one network interface that is connected and operational',
    'Telnet, SSH, or HTTP access to the device');
add('Which type of information is displayed by the show ip protocols command that is issued from a router command prompt?',
    'the configured routing protocols and the networks that the router is advertising');
add('A network technician needs to connect a PC to a Cisco network device for initial configuration. What is required to perform this device configuration?',
    'Telnet access');
add('Match the purpose to the related configuration item. (Not all options are used.)',
    'id > host, sec > pass, con > ass, acc > rout');



/*Prompts for matching questions and Packet Tracer Labs*/
add = prompts.add;

/*
 * template:
 * add('helper label');
 */
add('id > host');
add('sec > pass');
add('con > ass');
add('acc > rout');
