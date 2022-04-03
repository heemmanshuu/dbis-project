DROP TABLE IF EXISTS train;
DROP TABLE IF EXISTS station;
DROP TABLE IF EXISTS coach;
DROP TABLE IF EXISTS engine;
DROP TABLE IF EXISTS date;
DROP TABLE IF EXISTS employee;
DROP TABLE IF EXISTS berth;
-- DROP TABLE IF EXISTS platform;
DROP TABLE IF EXISTS tr_comp;
DROP TABLE IF EXISTS tr_route;
DROP TABLE IF EXISTS booking;
DROP TABLE IF EXISTS tr_emp;
DROP TABLE IF EXISTS st_emp;
DROP TABLE IF EXISTS pf_avbl;
DROP TABLE IF EXISTS tr_coach;
DROP TABLE IF EXISTS route_stations;

CREATE TABLE station (
    st_code TEXT check (st_code = upper(st_code)),
    st_name VARCHAR,
    city text not null,
    platforms int not null,

    Primary key(st_code)
);

create table train (
    tr_no int,
    tr_name VARCHAR,
    start text,
    dest text,
    start_time timestamp not null,
    dest_time timestamp not null,
    tr_type VARCHAR check(tr_type = 'weekly' or tr_type = 'daily' or tr_type = 'special' or tr_type = null),

    Primary key (tr_no),
    check(start <> dest),
    check(start_time < dest_time),
    Foreign key(start) references station on DELETE cascade,
    Foreign key(dest) references station on delete cascade

);

create table coach (
    coach_id int,
    total_seats int not null,
    coach_model text,
    coach_type text,

    Primary key (coach_id)
);

create table engine (
    engine_id int,
    engine_type text not null,

    Primary key(engine_id)
);

create table date (
    date date,
    day text not null,

    Primary key(date)
);

create table employee (
    emp_id int,
    emp_name text not null,
    age int not null,
    profession text not null,
    salary int not null,

    primary key(emp_id)
);

create table berth (
    berth_no int,
    berth_type text not null,

    primary key (berth_no)
);

create table pf_avbl(
    st_code int,
    pf_no int,
    pf_status int check (pf_status = 0 or pf_status = 1 or pf_status = null),

    primary key(st_code, pf_no),
    Foreign key (st_code) references station on delete cascade
);

create table tr_comp (
    trcomp_id int,
    tr_no int,
    date date,
    total_coaches int not null,
    engine_id int,
    primary key(trcomp_id),

    Foreign key(tr_no) references train on delete cascade,
    Foreign key(date) references date on delete cascade,
    Foreign key(engine_id) references engine on delete cascade
);

create table tr_coach (
    trcomp_id int,
    coach_id int,

    primary key(trcomp_id, coach_id),
    Foreign key(trcomp_id) references tr_comp on delete cascade,
    Foreign key(coach_id) references coach on delete cascade
);

create table tr_route (
    trroute_id int,
    train_id int,
    date date,
    total_stations int not null,

    primary key(trroute_id),
    Foreign key(date) references date on delete cascade,
    Foreign key(train_id) references train on delete cascade
);

create table route_stations (
    trroute_id int,
    st_code int,
    time timestamp not null,

    primary key(trroute_id, st_code),
    Foreign key(trroute_id) references tr_route on delete cascade,
    Foreign key(st_code) references station on delete cascade
);

create table booking (
    pnr_no int,
    train_id int,
    date date,
    coach_id int,
    berth_no int,
    price int not null,
    ticket_category text not null,

    Foreign key(train_id) references train on delete cascade
    Foreign key(coach_id) references coach on delete cascade
    Foreign key(berth_no) references berth on delete cascade
    Foreign key(date) references date on delete cascade,


)

