DELETE FROM train;
DELETE FROM station;
DELETE FROM coach;
DELETE FROM engine;
DELETE FROM date;
DELETE FROM employee;
DELETE FROM berth;
-- DELETE FROM platform;
DELETE FROM tr_comp;
DELETE FROM tr_route;
DELETE FROM booking;
DELETE FROM tr_emp;
DELETE FROM st_emp;
DELETE FROM pf_avbl;

INSERT into station values('LTT', 'Lokamanya Tilak Terminus', 'Mumbai', 10);
INSERT into station values('VSKP', null, 'Vizag', 8);
INSERT into train values(12345, 'Vizag express', 'VSKP', 'LTT', timestamp '2022-03-09 11:00:00', timestamp '2022-03-10 11:00:00', 'daily');
DELETE from station where st_code = 'VSKP';