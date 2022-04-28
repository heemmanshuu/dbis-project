const Pool = require('pg').Pool
var url = require('url');
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'railways',
    password: 'postgres',
    port: 5432,
})

const postTrain = (id) => {
    return new Promise(function(resolve, reject) {
        q = "insert into train values("+String(id[0])
        pool.query("INSERT into train values($1, $2, $3, $4, $5)", [id[0], id[1], id[2], id[3], id[4]], (error, results) => {
            if(error) {
                reject(error)
            }
            console.log(results);
            resolve(results.rows);
        })
    })
}
const delTrain = (id) => {
    return new Promise(function(resolve, reject) {
        pool.query("delete from train where tr_no = $1", [id[0]], (error, results) => {
            if(error) {
                reject(error)
            }
            // console.log(results);
            resolve(results.rows);
        })
    })
}

const updateTrain = (id) => {
    return new Promise(function(resolve, reject) {
        pool.query("update train set tr_name = $2, start = $3, dest = $4, tr_type = $5 where tr_no = $1", [id[0], id[1], id[2], id[3], id[4]], (error, results) => {
            if(error) {
                reject(error)
            }
            console.log(results);
            resolve(results.rows);
        })
    })
}

module.exports = {
    postTrain,
    delTrain,
    updateTrain
}

/*
const getMatches = (body) => {
    return new Promise(function(resolve, reject) {
        const { toss_name, win_type } = body
        pool.query("SELECT * FROM match where toss_name = $1 and win_type = $2", [toss_name, win_type], (error, results) => {
            if (error) {
                reject(error)
            }
            resolve("This was supposed to createMerchant")
        })
    })
}

*/

// module.exports = {
//     getMatches,
//     getBatsmanById,
//     getRunsById,
//     getBowlerById,
//     getPlayingXIById,
//     getUmpiresById,
//     getThirdUmpireById,
//     getMatchInfoById,
//     getScoreComparisionByMatch,
//     getSeasonYearById,
//     getTopBattersById,
//     getTopBowlersById,
//     getPlayerById,
//     getPlayerBattingStatsById,
//     getPlayerBattingGraphById,
//     getPlayerBowlingStatsById,
//     getPlayerBowlingGraphById,
//     getSeasonPointsTable,
//     getVenues,
//     getVenueById,
//     getVenuePieChart,
//     getWinner,
//     getSummaryPieChart,
//     getSeasons,
//     getVenueGraph,
//     postVenue
//     //getOwner,
// }


// this pool object will allow me to query into
// my database

// now put your queries inside functions to use
// in your index.js file (integrate_ex.js here)


// const getWinner = (match_id) => {
//     return new Promise(function(resolve, reject) {
//         //var q = url.parse(hi, true).query;
//         //console.log(q);
//         pool.query("select team_name, win_type, win_margin from match join team on match_winner = team_id and match_id = $1", [match_id], (error, results) => {
//             if (error) {
//                 reject(error)
//             }
//             resolve(results.rows);
//             //console.log(results);
//         })
//     })
// }

// const getSeasons = () => {
//     return new Promise(function(resolve, reject) {
//         //var q = url.parse(hi, true).query;
//         //console.log(q);
//         pool.query("select distinct season_year from match order by season_year asc", (error, results) => {
//             if (error) {
//                 reject(error)
//             }
//             resolve(results.rows);
//             //console.log(results);
//         })
//     })
// }





// // PART B
// // 1.
// const getMatches = (skip) => {
//     return new Promise(function(resolve, reject) {
//         //var q = url.parse(hi, true).query;
//         //console.log(q);
//         pool.query("select match_id, t1.team_name as team1, t2.team_name as team2, t3.team_name as winner, win_type, win_margin, venue_name, city_name  from match join team as t1 on t1.team_id = match.team1 join team as t2 on t2.team_id = match.team2 join venue on match.venue_id = venue.venue_id join team as t3 on t3.team_id = match.match_winner order by season_year desc, match_id desc offset $1 limit 10", [skip], (error, results) => {
//             if (error) {
//                 reject(error)
//             }
//             resolve(results.rows);
//             //console.log(results);
//         })
//     })
// }


// // 2.
// const getBatsmanById = (id, innings_no) => {
//     return new Promise(function(resolve, reject) {
//         pool.query("select team.team_name, player.player_id, player.player_name, runs, fours, sixes, balls from (select sum(runs_scored) as runs, count(case when runs_scored = 4 then 1 end) as fours, count(case when runs_scored = 6 then 1 end) as sixes, count(*) as balls, striker, MIN(over_id) as min_over from ball_by_ball where match_id = $1 and innings_no = $2 group by striker ) as t1 join player on striker = player.player_id join player_match on player_match.player_id = player.player_id and player_match.match_id = $1 join team on player_match.team_id = team.team_id order by min_over;", [id, innings_no], (error, results) => {
//             if(error) {
//                 reject(error)
//             }
//             resolve(results.rows);
//         })
//     })
// }

// const getRunsById = (id, innings_no) => {
//     return new Promise(function(resolve, reject) {
//         pool.query("select sum(extra_runs) as extras, sum(extra_runs+runs_scored) as total, count(case when ball_by_ball.out_type != \'NULL\' then 1 end) as wickets from ball_by_ball where match_id = $1 and innings_no = $2 group by match_id, innings_no", [id, innings_no], (error, results) => {
//             if(error) {
//                 reject(error)
//             }
//             resolve(results.rows);
//         })
//     })
// }

// const getBowlerById = (id,innings_no) => {
//     return new Promise(function(resolve, reject) {
//         pool.query("select player_id, player_name, runs, balls, wickets from (select sum(runs_scored) as runs, count(*) as balls, count(case when ball_by_ball.out_type != \'NULL\' and ball_by_ball.out_type != \'run out\' and ball_by_ball.out_type != \'retired hurt\' then 1 end) as wickets, bowler, MIN(over_id) as min_over from ball_by_ball where match_id = $1 and innings_no = $2 group by bowler) as t1 join player on bowler = player_id order by min_over", [id, innings_no], (error, results) => {
//             if(error) {
//                 reject(error)
//             }
//             resolve(results.rows);
//         })
//     })
// }

// const getPlayingXIById = (id) => {
//     return new Promise(function(resolve, reject) {
//         pool.query("select team.team_id, player_name from player_match join player on player_match.player_id = player.player_id join team on team.team_id = player_match.team_id where match_id=$1", [id], (error, results) => {
//             if(error) {
//                 reject(error)
//             }
//             resolve(results.rows);
//         })
//     })
// }

// const getUmpiresById = (id) => {
//     return new Promise(function(resolve, reject) {
//         pool.query("select umpire_name from umpire_match join umpire on umpire_match.umpire_id = umpire.umpire_id where role_desc = \'Field\' and match_id=$1", [id], (error, results) => {
//             if(error) {
//                 reject(error)
//             }
//             resolve(results.rows);
//         })
//     })
// }

// const getThirdUmpireById = (id) => {
//     return new Promise(function(resolve, reject) {
//         pool.query("select umpire_name from umpire_match join umpire on umpire_match.umpire_id = umpire.umpire_id where role_desc != \'Field\' and match_id=$1", [id], (error, results) => {
//             if(error) {
//                 reject(error)
//             }
//             resolve(results.rows);
//         })
//     })
// }

// const getMatchInfoById = (id) => {
//     return new Promise(function(resolve, reject) {
//         pool.query("select match_id, t1.team_name as team1, t2.team_name as team2, t1.team_id as team1_id, t2.team_id as team2_id, season_year, t3.team_name as tosswinner, toss_name, venue_name  from match join team as t1 on t1.team_id = match.team1 join team as t2 on t2.team_id = match.team2 join venue on match.venue_id = venue.venue_id join team as t3  on t3.team_id = toss_winner where match_id=$1", [id], (error, results) => {
//             if(error) {
//                 reject(error)
//             }
//             resolve(results.rows);
//         })
//     })
// }

// // 3.
// const getScoreComparisionByMatch = (id, innings_no) => {
//     return new Promise(function(resolve, reject) {
//         pool.query("select over_id, sum(runs_over) over (order by over_id) as score, wickets from(select over_id, count(case when out_type!='NULL' and out_type!='retired hurt' then 1 end) as wickets, sum(runs_scored+extra_runs) as runs_over from ball_by_ball where match_id=$1 and innings_no = $2 group by (over_id)) as t1;", [id, innings_no], (error, results) => {
//             if(error) {
//                 reject(error)
//             }
//             resolve(results.rows);
//         })
//     })
// }


// // 4.

// const getSeasonYearById = (id) => {
//     return new Promise(function(resolve, reject) {
//         pool.query("select distinct match_id, season_year from match where match_id=$1", [id], (error, results) => {
//             if(error) {
//                 reject(error)
//             }
//             resolve(results.rows);
//         })
//     })
// }

// const getTopBattersById = (id, innings_no) => {
//     return new Promise(function(resolve, reject) {
//         pool.query("select team.team_name, player.player_id, player_name, runs, 0 as fours, 0 as sixes, balls from (select striker, sum(runs_scored) as runs, count(*) as balls from ball_by_ball where match_id = $1 and innings_no = $2 group by  striker) as t1 join player on t1.striker = player.player_id join player_match on player_match.player_id = player.player_id and player_match.match_id = $1 join team on player_match.team_id = team.team_id and balls>=0 order by runs desc, balls, player_name limit 3", [id, innings_no], (error, results) => {
//             if(error) {
//                 reject(error)
//             }
//             resolve(results.rows);
//         })
//     })
// }

// const getTopBowlersById = (id, innings_no) => {
//     return new Promise(function(resolve, reject) {
//         pool.query("select player_id, player_name, runs, balls, wickets from (select sum(runs_scored) as runs, count(*) as balls, count(case when ball_by_ball.out_type != \'NULL\' and ball_by_ball.out_type != \'run out\' and ball_by_ball.out_type != \'retired hurt\' then 1 end) as wickets, bowler from ball_by_ball where match_id = $1 and innings_no = $2 group by bowler) as t1 join player on bowler = player_id order by wickets desc, runs, player_name limit 3", [id, innings_no], (error, results) => {
//             if(error) {
//                 reject(error)
//             }
//             resolve(results.rows);
//         })
//     })
// }

// // pie chart



// // PART C
// // a.

// const getSummaryPieChart = (id, innings_no) => {
//     return new Promise(function(resolve, reject) {
//         pool.query("(select run_type, runs_scored from (select runs_scored as run_type, sum(runs_scored) as runs_scored from ball_by_ball where match_id=$1 and innings_no = $2 group by (run_type)) as t1 where run_type>0) union (select 0 as run_type, sum(extra_runs) as runs_scored from ball_by_ball where match_id=$1 and innings_no = $2)", [id, innings_no], (error, results) => {
//             if(error) {
//                 reject(error)
//             }
//             resolve(results.rows);
//         })
//     })
// }


// const getPlayerById = (id) => {
//     return new Promise(function(resolve, reject) {
//         pool.query("select player_name, country_name, batting_hand, bowling_skill from player where player_id=$1", [id], (error, results) => {
//             if(error) {
//                 reject(error)
//             }
//             resolve(results.rows);
//         })
//     })
// }

// // b.
// const getPlayerBattingStatsById = (id) => {
//     return new Promise(function(resolve, reject) {
//         pool.query("select matches, runs, fours, sixes, fiftys, hs, round(runs*100.0/balls, 2) as strike_rate, round(runs/wickets, 2) as average_runs from (select count(match_id) as matches, sum(runs_match) as runs, sum(fours_match) as fours, sum(sixes_match) as sixes, count(case when runs_match >= 50 and runs_match<100 then 1 end) as fiftys, max(runs_match) as HS, sum(balls_match) as balls, sum(wickets_match) as wickets from (select sum(runs_scored) as runs_match, count(case when runs_scored = 4 then 1 end) as fours_match, count(case when out_type != \'NULL\' then 1 end) as wickets_match, count(case when runs_scored = 6 then 1 end) as sixes_match, count(*) as balls_match, match_id, striker from ball_by_ball group by match_id, striker having striker=$1) as t1) as t2", [id], (error, results) => {
//             if(error) {
//                 reject(error)
//             }
//             resolve(results.rows);
//         })
//     })
// }

// const getPlayerBattingGraphById = (id) => {
//     return new Promise(function(resolve, reject) {
//         pool.query("select match_id, sum(runs_scored) as runs from ball_by_ball where striker = $1 group by match_id order by match_id", [id], (error, results) => {
//             if(error) {
//                 reject(error)
//             }
//             resolve(results.rows);
//         })
//     })
// }

// // c.
// const getPlayerBowlingStatsById = (id) => {
//     return new Promise(function(resolve, reject) {
//         pool.query("select matches, runs, wickets, overs, balls, round(runs/overs, 2) as economy, five_wickets from (select count(match_id) as matches, sum(runs_match) as runs, sum(wickets_match) as wickets, sum(overs_match) as overs, sum(balls_match) as balls, count(case when wickets_match >=5 then 1 end) as five_wickets from (select match_id, sum(runs_over) as runs_match, sum(wickets_over) as wickets_match, count(over_id) as overs_match, sum(balls_over) as balls_match from (select sum(runs_scored+extra_runs) as runs_over, count(*) as balls_over, count(case when ball_by_ball.out_type != \'NULL\' and ball_by_ball.out_type != 'run out' and ball_by_ball.out_type != 'retired hurt' then 1 end) as wickets_over, match_id, bowler, over_id from ball_by_ball group by match_id, bowler, over_id having bowler=$1) as t1 group by (match_id)) as t2) as t3", [id], (error, results) => {
//             if(error) {
//                 reject(error)
//             }
//             resolve(results.rows);
//         })
//     })
// }



// const getPlayerBowlingGraphById = (id) => {
//     return new Promise(function(resolve, reject) {
//         pool.query("select match_id, sum(runs_scored+extra_runs) as runs, count(case when ball_by_ball.out_type != 'NULL' and ball_by_ball.out_type != 'run out' and ball_by_ball.out_type != 'retired hurt' then 1 end) as wickets from ball_by_ball  where bowler = $1 group by match_id order by match_id;", [id], (error, results) => {
//             if(error) {
//                 reject(error)
//             }
//             resolve(results.rows);
//         })
//     })
// }




// // PART D
// const getSeasonPointsTable = (year) => {
//     return new Promise(function(resolve, reject) {
//         pool.query("select season_year, team_name, matches, wins, losses, round(runs_scored/overs_faced-runs_conceded/overs_bowled, 2) as nrr, 2*wins as pts from (select season_year, team_id, count(t2.match_id) as matches, sum(runs_scored) as runs_scored, sum(overs_faced) as overs_faced, sum(runs_conceded) as runs_conceded, sum(overs_bowled) as overs_bowled, count(case when team_id=match_winner then 1 end) as wins, count(case when team_id != match_winner then 1 end) as losses from (select t1.match_id, t1.team_id, runs_scored, overs_faced, runs_conceded, overs_bowled from (select ball_by_ball.match_id, team_id, sum(runs_scored+extra_runs) as runs_scored, count(distinct over_id) as overs_faced from ball_by_ball join player_match on ball_by_ball.match_id=player_match.match_id and ball_by_ball.striker=player_match.player_id group by (ball_by_ball.match_id, team_id)) as t1 join (select ball_by_ball.match_id, team_id, sum(runs_scored+extra_runs) as runs_conceded, count(distinct over_id) as overs_bowled from ball_by_ball join player_match on ball_by_ball.match_id=player_match.match_id and ball_by_ball.bowler=player_match.player_id group by (ball_by_ball.match_id, team_id)) as t2 on t1.match_id=t2.match_id and t1.team_id=t2.team_id) as t2 join match on t2.match_id=match.match_id where season_year=$1 group by (team_id, season_year)) as t3 join team on t3.team_id=team.team_id order by pts desc, nrr desc;", [year], (error, results) => {
//             if(error) {
//                 reject(error)
//             }
//             resolve(results.rows);
//         })
//     })
// }



// // PART E
// // 1.
// const getVenues = () => {
//     return new Promise(function(resolve, reject) {
//         pool.query("SELECT venue_id, venue_name FROM venue", (error, results) => {
//             if (error) {
//                 reject(error)
//             }
//             resolve(results.rows);
//             //console.log(results);
//         })
//     })
// }

// // 2.
// // a.
// const getVenueById = (id) => {
//     return new Promise(function(resolve, reject) {
//         pool.query("select venue_name, address, capacity, matches_played, highest, lowest, highest_chased from (select venue_name, t1.venue_id, concat(city_name, ', ', country_name) as address, capacity, matches_played from (select venue_id, count(*) as matches_played from match group by (venue_id)) as t1, venue where t1.venue_id=venue.venue_id) as t4 join (select max(score) as highest, min(score) as lowest, venue.venue_id from (select match_id, innings_no, sum(runs_scored+extra_runs) as score from ball_by_ball group by (match_id, innings_no)) as t2 join match on t2.match_id=match.match_id join venue on match.venue_id=venue.venue_id group by (venue.venue_id)) as t5 on t4.venue_id=t5.venue_id join (select max(score)+1 as highest_chased, venue.venue_id from (select match_id, sum(runs_scored+extra_runs) as score from ball_by_ball group by (match_id, innings_no)) as t3 join match on t3.match_id=match.match_id join venue on match.venue_id=venue.venue_id group by (venue.venue_id)) as t6 on t5.venue_id=t6.venue_id where t6.venue_id=$1", [id], (error, results) => {
//             if(error) {
//                 reject(error)
//             }
//             resolve(results.rows);
//         })
//     })
// }


// // b.
// const getVenuePieChart = (id) => {
//     return new Promise(function(resolve, reject) {
//         pool.query("select count(case when (toss_winner=match_winner and toss_name='bat') or (toss_winner!=match_winner and toss_name='field') then 1 end) as batting_first, count(case when (toss_winner=match_winner and toss_name='field') or (toss_winner!=match_winner and toss_name='bat') then 1 end) as batting_second from match join venue on match.venue_id=venue.venue_id where venue.venue_id=$1", [id], (error, results) => {
//             if(error) {
//                 reject(error)
//             }
//             resolve(results.rows);
//         })
//     })
// }


// const getVenueGraph = (id) => {
//     return new Promise(function(resolve, reject) {
//         pool.query("select round(avg(runs_match),2) as runs, season_year from(select sum(runs_scored+extra_runs) as runs_match, match_id from ball_by_ball where innings_no=1 group by (match_id, innings_no)) as t1 join match on t1.match_id=match.match_id join venue on match.venue_id=venue.venue_id where venue.venue_id=$1 group by season_year having season_year=2011 or season_year=2013 or season_year=2015 or season_year=2017;", [id], (error, results) => {
//             if(error) {
//                 reject(error)
//             }
//             resolve(results.rows);
//         })
//     })
// }


// const postVenue = (id) => {
//     return new Promise(function(resolve, reject) {
//         pool.query("insert into venue( venue_name, city_name, country_name, capacity ) values ($1, $2, $3, $4)", [id[0], id[1], id[2], id[3]], (error, results) => {
//             if(error) {
//                 reject(error)
//             }
//             resolve(results.rows);
//         })
//     })
// }
