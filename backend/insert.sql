DELETE FROM train;
DELETE FROM station;
DELETE FROM coach;
DELETE FROM engine;
DELETE FROM date;
DELETE FROM employee;
-- DELETE FROM berth;
-- DELETE FROM platform;
DELETE FROM tr_comp;
-- DELETE FROM tr_route;
DELETE FROM booking;
DELETE FROM tr_emp;
DELETE FROM st_emp;
DELETE FROM pf_avbl;

INSERT into station values('VSKP', null, 'Visakhapatnam', 8);
INSERT into station values('PAP', null, 'Pithapuram', 2);
INSERT into station values('SLO', null, 'Samalkot', 4);
INSERT into station values('RJY', null, 'Rajamundry', 6);
INSERT into station values('TNKU', null, 'Tanuku', 2);
INSERT into station values('BVRT', null, 'Bhimavaram Town', 4);
INSERT into station values('AKVD', null, 'Akividu', 3);
INSERT into station values('KKLR', null, 'Kaikolur',2 );
INSERT into station values('GDV', null, 'Gudivada', 3);
INSERT into station values('BZA', null, 'Vijayawada', 7);
INSERT into station values('KZJ', null, 'Kazipet', 2);
INSERT into station values('MLY', null, 'Maula Ali', 2);
INSERT into station values('SC', null, 'Secunderabad', 10);
INSERT into station values('LPI', null, 'Lingampally', 5);
INSERT into station values('VKB', null, 'Vikarabad', 2);
INSERT into station values('TDU', null, 'Tandur', 2);
INSERT into station values('WADI', null, 'Wadi', 3);
INSERT into station values('KLBG', null, 'Kalaburagi', 2);
INSERT into station values('SUR', null, 'Solapur', 4);
INSERT into station values('PUNE', null, 'Pune', 6);
INSERT into station values('LTT', 'Lokamanya Tilak Terminus', 'Mumbai', 10);

INSERT into train values(18519, ' LTT SPL', 'VSKP', 'LTT', 'special');
INSERT into train values(11020, ' LTT S F', 'VSKP', 'LTT', 'weekly');

INSERT into coach values(588, 72, 'f1', '2S');
INSERT into coach values(589, 72, 'f1', '2S');
INSERT into coach values(590, 68, 'f1', 'SL');
INSERT into coach values(591, 52, 'f1', '3A');
INSERT into coach values(592, 40, 'f1', '2A');
INSERT into coach values(593, 20, 'f1', '1A');
INSERT into coach values(594, 72, 'f1', '2S');
INSERT into coach values(595, 72, 'f1', '2S');
INSERT into coach values(596, 72, 'f1', '2S');
INSERT into coach values(597, 72, 'f1', 'SL');
INSERT into coach values(598, 72, 'f1', 'SL');
INSERT into coach values(600, 56, 'f1', '2A');
INSERT into coach values(620, 54, 'f1', '2A');
INSERT into coach values(630, 48, 'f1', '3A');

INSERT into engine values(16789, 'electric');
INSERT into engine values(58843, 'diesel');

-- INSERT into date values(date '2022-04-03', 'Sun');
-- INSERT into date values(date '2022-04-04', 'Mon');
-- INSERT into date values(date '2022-04-05', 'Tue');
-- INSERT into date values();

INSERT into employee values(1, 'subba rao', 38, 'pilot', 40000);
INSERT into employee values(2, 'venkat rao', 39, 'pilot', 45000);
INSERT into employee values(3, 'apparao', 40, 'TC', 38000);
INSERT into employee values(4, 'manoj', 20, 'TC', 25000);
INSERT into employee values(5, 'bharat', 20, 'Station Master', 30000);
INSERT into employee values(6, 'chandu', 19, 'Station Master', 30000);
INSERT into employee values(7, 'kumar', 25, 'Station Master', 30000);
INSERT into employee values(8, 'rebel', 29, 'Station Master', 30000);
INSERT into employee values(9, 'spidermon', 50, 'Station Master', 30000);
INSERT into employee values(10, 'mastan bhai', 55, 'Station Master', 30000);
INSERT into employee values(11, 'kale khan', 43, 'Station Master', 30000);
INSERT into employee values(12, 'sharuk khan', 49, 'Station Master', 30000);
INSERT into employee values(13, 'jaques', 36, 'Station Master', 30000);
INSERT into employee values(14, 'sherlington', 28, 'Station Master', 30000);
INSERT into employee values(15, 'kajal', 35, 'Station Master', 30000);
INSERT into employee values(16, 'gokle', 22, 'Station Master', 30000);
INSERT into employee values(17, 'gundu boss', 21, 'Station Master', 30000);
INSERT into employee values(18, 'shivaju', 36, 'Station Master', 30000);
INSERT into employee values(19, 'ram', 33, 'Station Master', 30000);
INSERT into employee values(20, 'bheem', 32, 'Station Master', 30000);
INSERT into employee values(21, 'jenny', 28, 'Station Master', 30000);
INSERT into employee values(22, 'varma', 20, 'Station Master', 30000);
INSERT into employee values(23, 'heeman', 23, 'Station Master', 30000);
INSERT into employee values(24, 'dasari', 45, 'Station Master', 30000);
INSERT into employee values(25, 'malli', 30, 'Station Master', 30000);
-- INSERT into employee values();
-- INSERT into employee values();
-- INSERT into employee values();
-- INSERT into employee values();
-- INSERT into employee values();

-- INSERT into berth values();
-- INSERT into berth values();
-- INSERT into berth values();
-- INSERT into berth values();
-- INSERT into berth values();
-- INSERT into berth values();
-- INSERT into berth values();
-- INSERT into berth values();
-- INSERT into berth values();
-- INSERT into berth values();
-- INSERT into berth values();
-- INSERT into berth values();

INSERT into pf_avbl values('VSKP', 1, 1);
INSERT into pf_avbl values('VSKP', 2, 0);
INSERT into pf_avbl values('VSKP', 3, 0);
INSERT into pf_avbl values('BZA', 1, 0);
INSERT into pf_avbl values('BZA', 2, 1);
INSERT into pf_avbl values('WADI', 1, 1);
INSERT into pf_avbl values('WADI', 2, 0);
INSERT into pf_avbl values('PUNE', 1, 0);
INSERT into pf_avbl values('PUNE', 2, 1);
INSERT into pf_avbl values('LTT', 1, 1);
INSERT into pf_avbl values('LTT', 2, 0);
INSERT into pf_avbl values('LTT', 3, 1);
INSERT into pf_avbl values('LTT', 4, 1);

INSERT into tr_comp (tr_no, date, total_coaches, engine_id, total_stations) values(18519, date '2022-04-04', 5, 16789, 12);
INSERT into tr_comp (tr_no, date, total_coaches, engine_id, total_stations) values(11020, date '2022-04-03', 5, 58843, 11);
-- INSERT into tr_comp values();

insert into tr_coach values( getId(18519, '2022-04-04'), 588, 1);
INSERT into tr_coach values( getId(18519, '2022-04-04'), 590, 2);
INSERT into tr_coach values( getId(18519, '2022-04-04'), 591, 3);
INSERT into tr_coach values( getId(18519, '2022-04-04'), 592, 4);
INSERT into tr_coach values( getId(18519, '2022-04-04'), 593, 5);
INSERT into tr_coach values( getId(18519, '2022-04-04'), 594, 6);
INSERT into tr_coach values( getId(11020, '2022-04-03'), 588, 7);
INSERT into tr_coach values( getId(11020, '2022-04-03'), 597, 8);
INSERT into tr_coach values( getId(11020, '2022-04-03'), 598, 9);
INSERT into tr_coach values( getId(11020, '2022-04-03'), 620, 10);
INSERT into tr_coach values( getId(11020, '2022-04-03'), 630, 11);

-- INSERT into tr_route values(1);
-- INSERT into tr_route values(2);
-- INSERT into tr_route values();
-- INSERT into tr_route values();

INSERT into route_stations values(getId(18519, '2022-04-04'), 'VSKP', '2022-04-04 06:55:55');
INSERT into route_stations values(getId(18519, '2022-04-04'), 'PAP', '2022-04-04 07:55:55');
INSERT into route_stations values(getId(18519, '2022-04-04'), 'SLO', '2022-04-04 10:55:55');
INSERT into route_stations values(getId(18519, '2022-04-04'), 'RJY', '2022-04-04 13:55:55');
INSERT into route_stations values(getId(18519, '2022-04-04'), 'TNKU', '2022-04-04 18:55:55');
INSERT into route_stations values(getId(18519, '2022-04-04'), 'BVRT', '2022-04-04 19:55:55');
INSERT into route_stations values(getId(18519, '2022-04-04'), 'GDV', '2022-04-04 20:55:55');
INSERT into route_stations values(getId(18519, '2022-04-04'), 'MLY', '2022-04-04 22:55:55' );
INSERT into route_stations values(getId(18519, '2022-04-04'), 'VKB', '2022-04-04 23:55:55');
INSERT into route_stations values(getId(18519, '2022-04-04'), 'KLBG', '2022-04-05 00:55:55');
INSERT into route_stations values(getId(18519, '2022-04-04'), 'PUNE', '2022-04-05 04:55:55');
INSERT into route_stations values(getId(18519, '2022-04-04'), 'LTT', '2022-04-05 08:55:55');


INSERT into booking values(1, 18519, date '2022-04-04', 590, 34, 'seater', 50, 'general');
INSERT into booking values(2, 18519, date '2022-04-04', 590, 35, 'seater', 50, 'general');
INSERT into booking values(3, 18519, date '2022-04-04', 590, 36, 'seater', 50, 'general');
INSERT into booking values(4, 18519, date '2022-04-05', 590, 37, 'seater', 50, 'general');
INSERT into booking values(5, 18519, date '2022-04-05', 590, 38, 'seater', 50, 'general');
INSERT into booking values(6, 11020, date '2022-04-03', 588, 34, 'seater', 50, 'general');
INSERT into booking values(7, 11020, date '2022-04-03', 588, 35, 'seater', 50, 'general');
INSERT into booking values(8, 11020, date '2022-04-03', 588, 36, 'seater', 50, 'general');
INSERT into booking values(9, 11020, date '2022-04-04', 588, 37, 'seater', 50, 'general');
INSERT into booking values(10, 11020, date '2022-04-04', 588, 38, 'seater', 50, 'general');


INSERT into tr_emp values(1, 1);
INSERT into tr_emp values(1, 3);
INSERT into tr_emp values(2, 2);
INSERT into tr_emp values(2, 4);

-- INSERT into st_emp values();
-- INSERT into st_emp values();
-- INSERT into st_emp values();
-- INSERT into st_emp values();
-- INSERT into st_emp values();

