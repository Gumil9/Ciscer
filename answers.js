/*Answers to multiple choice and fill-in-the-blank questions*/
var add = tests.add;

/*
 * template:
 * add(question, answer0 [, answer1, ...]);
 */

// CCNA4 v6.0 Chapter 6
add('When QoS is implemented in a converged network, which two factors can be controlled to improve network performance for real-time traffic? (Choose two.)',
    'delay',
    'jitter');
add('A network engineer performs a ping test and receives a value that shows the time it takes for a packet to travel from a source to a destination device and return. Which term describes the value?',
    'latency');
add('What are two characteristics of voice traffic? (Choose two.)',
    'Dropped voice packets are not retransmitted.',
    'Voice traffic latency should not exceed 150 ms.');
add('How does a Cisco router using tail drop handle congestion when a traffic queue becomes full?',
    'The router will drop any packet that arrives at the end of the queue.');
add('For classifying packets into classes with CBWFQ, what is the purpose of configuring a maximum packet limit for a class?',
    'to control the maximum number of packets allowed in a single queue');
add('A network engineer is selecting a QoS method to control congestion on a VPN tunnel link between the headquarters site and a branch office. Which queuing method cannot be used to classify and control VPN traffic?',
    'WFQ');
add('An administrator has mastered the use of access control lists (ACLs) and wants to deploy QoS by defining different traffic classes through the use of ACLs. Which queuing method provides this functionality?',
    'CBWFQ');
add('Which queuing algorithm has only a single queue and treats all packets equally?',
    'FIFO');
add('A network administrator is deploying QoS with the ability to provide a special queue for voice traffic so that voice traffic is forwarded before network traffic in other queues. Which queuing method would be the best choice?',
    'LLQ');
add('What are two characteristics of DiffServ QoS model? (Choose two.)',
    'can divide network traffic into classes based on business requirements',
    'groups all TCP flows into a single class');
add('What are two characteristics of the best-effort QoS model? (Choose two.)',
    'It treats all network packets in the same way.',
    'It does not provide a delivery guarantee for packets.');
add('What role do network devices play in the IntServ QoS model?',
    'Network devices ensure that resources are available before traffic is allowed to be sent by a host through the network.');
add('Which QoS model is very resource intensive and provides the highest guarantee of QoS?',
    'IntServ');
add('In QoS models, which type of traffic is commonly provided the most preferential treatment over all other application traffic?',
    'voice traffic');
add('What are two approaches to prevent packet loss due to congestion on an interface? (Choose two.)',
    'Increase link capacity.',
    'Drop lower-priority packets.');
add('What two fields are available in IPv4 and IPv6 headers to mark packets for QoS? (Choose two.)',
    'Type of Service',
    'Traffic Class');
add('What is the benefit of deploying Layer 3 QoS marking across an enterprise network?',
    'Layer 3 marking can carry the QoS information end-to-end.');
add('Which QoS technology provides congestion avoidance by allowing TCP traffic to be throttled before buffers become full and tail drops occur?',
    'weighted random early detection');
add('As traffic is forwarded out an egress interface with QoS treatment, which congestion avoidance technique is used?',
    'traffic policing');
add('Which QoS model uses the DSCP bits to mark packets and provides 64 possible classes of service?',
    'DiffServ');
add('Which QoS technique retains excess packets in a separate queue for later transmission?',
    'shaping');

/*Prompts for matching questions and Packet Tracer Labs*/
add = prompts.add;

/*
 * template:
 * add('helper label');
 */

// CCNA4 v6.0 Chapter 6
