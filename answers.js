/*Answers to multiple choice and fill-in-the-blank questions*/
var add = tests.add;

/*
 * template:
 * add(question, answer0 [, answer1, ...]);
 */



/*Prompts for matching questions and Packet Tracer Labs*/
add = prompts.add;

/*
 * template:
 * add('helper label');
 */

// CCNA3 v6.0 EIGRP Practice Skills Assessment
add('CCNA3 v6.0 EIGRP Practice Skills Assessment');

add('DataCenter/Ed_Dept Router = R1 = top-most');

add('Clinic_10/Primary-2 Router = R2-2 = low & left');
add('Hospital_1/Primary-1 Router = R2 = low & center');
add('Hospital_2 / High_School Router = R3 = low & right');

add('Net_1 / Dist-1 Switch = S1 = top-most in switch triangle to the right');
add('FL_1 Switch / Acc-1 Switch = S2 = left-most in switch triangle to the right');
add('Fl_2 Switch / Acc-2 Switch = S3 = right-most in switch triangle to the right');

add('PC-B = second from the left');

add('PC-A = first from the left');
add('PC-M = fourth from the left');

add('Lets start!');
add('DataCenter/Ed_Dept Router = R1 = top-most');
add('en | conf term | ip route 0.0.0.0 0.0.0.0 s0/1/0 | ipv6 unicast-routing | ipv6 route ::/0 s0/1/0');
add('router eigrp 99 | network 192.168.100.8 0.0.0.3 | network 192.168.100.20 0.0.0.3 | eigrp router-id 1.1.1.1 | exit');
add('ipv6 router eigrp 99 | eigrp router-id 1.1.1.1 | no shutdown | exit');
add('int s0/0/0 | ipv6 eigrp 99 | int s0/0/1 | ipv6 eigrp 99 | int s0/1/0 | ipv6 eigrp 99 | int s0/0/0 | bandwidth 2000 | int s0/0/1 | bandwidth 2000 | exit');
add('router eigrp 99 | redistribute static | exit | ipv6 router eigrp 99 | redistribute static | exit');

add('Clinic_10/Primary-2 Router = R2-2 = low & left');
add('en | conf t | ip route 0.0.0.0 0.0.0.0 s0/0/0 | int g0/0 | standby 1 ip 10.1.0.1 | standby version 2');

add('Hospital_1/Primary-1 Router = R2 = low & center');
add('en | conf t | router eigrp 99 | network 10.1.0.0 0.0.0.255 | network 192.168.100.8 0.0.0.3 | network 192.168.100.32 0.0.0.3 | eigrp router-id 2.2.2.2 | exit');
add('ipv6 unicast-routing | ipv6 router eigrp 99 | eigrp router-id 2.2.2.2 | no shutdown | exit');
add('int s0/0/1 | ipv6 eigrp 99 | int s0/0/0 | ipv6 eigrp 99 | int g0/0 | ipv6 eigrp 99 | exit');
add('int s0/0/0 | bandwidth 2000 | exit | router eigrp 99 | passive-interface g0/0 | exit');
add('int g0/0 | standby 1 ip 10.1.0.1 | standby 1 preempt | standby 1 priority 150 | standby version 2 | exit');

add('Hospital_2 / High_School Router = R3 = low & right');
add('en | conf t | router eigrp 99 | network 10.10.0.0 0.0.0.255 | network 10.15.0.0 0.0.0.255 | network 10.20.0.0 0.0.0.255');
add('network 192.168.100.20 0.0.0.3 | network 192.168.100.32 0.0.0.3 | eigrp router-id 3.3.3.3 | exit');
add('ipv6 unicast-routing | ipv6 router eigrp 99 | eigrp router-id 3.3.3.3 | no shutdown | exit');
add('int g0/0.10 | ipv6 eigrp 99 | int g0/0.15 | ipv6 eigrp 99 | int g0/0.20 | ipv6 eigrp 99 | exit');
add('int s0/0/0 | ipv6 eigrp 99 | int s0/0/1 | ipv6 eigrp 99 | int s0/1/0 | ipv6 eigrp 99 | int s0/0/1 | bandwidth 2000 | exit');
add('router eigrp 99 | passive-interface g0/0.10 | passive-interface g0/0.15 | passive-interface g0/0.20 | exit');
add('int g0/0 | no shutdown | exit');

add('Net_1 / Dist-1 Switch = S1 = top-most in switch triangle to the right');
add('WARN: Change VTP domain and VTP Password to match your exam!');
add('en | conf t | int range f0/3-4 | channel-group 1 mode active | int range f0/5-6 | channel-group 2 mode active | exit');
add('int g0/1 | no shutdown | int g0/1 | switchport mode trunk | switchport trunk native vlan 99 | int g0/1 | switchport nonegotiate');
add('int range f0/3-4 | switchport mode trunk | switchport trunk native vlan 99');
add('int port-channel 1 | switchport mode trunk | switchport trunk native vlan 99 | switchport nonegotiate');
add('int range f0/5-6 | switchport mode trunk | switchport trunk native vlan 99');
add('int port-channel 2 | switchport mode trunk | switchport trunk native vlan 99 | switchport nonegotiate | exit');
add('vtp mode server | WARN: change domain & password | vtp domain TownEd | vtp password TWE_123! | vtp version 2');
add('spanning-tree mode rapid-pvst | spanning-tree vlan 10,15,20 priority 24576');

add('FL_1 Switch / Acc-1 Switch = S2 = left-most in switch triangle to the right');
add('WARN: Change VTP domain and VTP Password to match your exam!');
add('en | conf t | int range f0/3-4 | channel-group 1 mode active | int range f0/1-2 | channel-group 3 mode active | exit');
add('int range f0/3-4 | switchport mode trunk | switchport trunk native vlan 99');
add('int port-channel 1 | switchport mode trunk | switchport trunk native vlan 99 | switchport nonegotiate');
add('int range f0/1-2 | switchport mode trunk | switchport trunk native vlan 99');
add('int port-channel 3 | switchport mode trunk | switchport trunk native vlan 99 | switchport nonegotiate | exit');
add('vtp mode client | WARN: change domain & password | vtp domain TownEd | vtp password TWE_123! | vtp version 2');
add('spanning-tree mode rapid-pvst | int range f0/10-24 | spanning-tree bpduguard enable | spanning-tree portfast');

add('Fl_2 Switch / Acc-2 Switch = S3 = right-most in switch triangle to the right');
add('WARN: Change VTP domain and VTP Password to match your exam!');
add('en | conf t | int range f0/5-6 | channel-group 2 mode active | int range f0/1-2 | channel-group 3 mode active | exit');
add('int range f0/5-6 | switchport mode trunk | switchport trunk native vlan 99');
add('int port-channel 2 | switchport mode trunk | switchport trunk native vlan 99 | switchport nonegotiate');
add('int range f0/1-2 | switchport mode trunk | switchport trunk native vlan 99');
add('int port-channel 3 | switchport mode trunk | switchport trunk native vlan 99 | switchport nonegotiate | exit');
add('vtp mode client | WARN: change domain & password | vtp domain TownEd | vtp password TWE_123!');
add('spanning-tree mode rapid-pvst | spanning-tree vlan 10,15,20 priority 28672');

add('NOTE: you may need to add & delete a vlan on "Net_1 / Dist-1 Switch = S1 = top-most in switch triangle to the right" in order to update config');
add('vlan 666 | no vlan 666');

add('PC-B = second from the left');
add('Desktop tab -> Command Prompt');
add('Enter telnet 2001:DB8:E::1 | Authenticate your Telnet session with the password cisco | Move to privileged EXEC mode using the password admin');
add('en | conf t | int g0/0 | no sh');

add('PC-A = first from the left');
add('Desktop tab -> IP configuration');
add('Default Gateway 10.1.0.1');

add('PC-M = fourth from the left');
add('Desktop tab -> IP configuration');
add('Default Gateway 10.1.0.1');

add('That is all!');
