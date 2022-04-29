const { response } = require('express')
const express = require('express')
const app = express()
const port = 3001

const queries = require('./queries')

app.use(express.json())
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
    next();
})

// 7-13 so that Express can accept incoming requests
// with JSON payloads. To allow requests to this app 
// from React, other 3 headers were added


app.get('/', (req, res) => {
    res.status(200).send('Hello World!');
})

app.post('/addtrain', (req, res) => {

    console.log(req.body)
    queries.postTrain(req.body)
    .then(response => {
        res.status(200).send(response);
    })
    .catch(error => {
        res.status(500).send(error);
    })
})

app.post('/deltrain', (req, res) => {

    console.log(req.body)
    queries.delTrain(req.body)
    .then(response => {
        res.status(200).send(response);
    })
    .catch(error => {
        res.status(500).send(error);
    })
})

app.post('/updatetrain', (req, res) => {

    console.log(req.body)
    queries.updateTrain(req.body)
    .then(response => {
        res.status(200).send(response);
    })
    .catch(error => {
        res.status(500).send(error);
    })
})

app.post('/addstation', (req, res) => {

    console.log(req.body)
    queries.addStation(req.body)
    .then(response => {
        res.status(200).send(response);
    })
    .catch(error => {
        res.status(500).send(error);
    })
})

app.post('/delstation', (req, res) => {

    console.log(req.body)
    queries.delStation(req.body)
    .then(response => {
        res.status(200).send(response);
    })
    .catch(error => {
        res.status(500).send(error);
    })
})

app.post('/updatestation', (req, res) => {

    console.log(req.body)
    queries.updateStation(req.body)
    .then(response => {
        res.status(200).send(response);
    })
    .catch(error => {
        res.status(500).send(error);
    })
})

app.post('/addcoach', (req, res) => {

    console.log(req.body)
    queries.addCoach(req.body)
    .then(response => {
        res.status(200).send(response);
    })
    .catch(error => {
        res.status(500).send(error);
    })
})

app.post('/delcoach', (req, res) => {

    console.log(req.body)
    queries.delCoach(req.body)
    .then(response => {
        res.status(200).send(response);
    })
    .catch(error => {
        res.status(500).send(error);
    })
})

app.post('/updatecoach', (req, res) => {

    console.log(req.body)
    queries.updateCoach(req.body)
    .then(response => {
        res.status(200).send(response);
    })
    .catch(error => {
        res.status(500).send(error);
    })
})

app.post('/addengine', (req, res) => {

    console.log(req.body)
    queries.addEngine(req.body)
    .then(response => {
        res.status(200).send(response);
    })
    .catch(error => {
        res.status(500).send(error);
    })
})

app.post('/delengine', (req, res) => {

    console.log(req.body)
    queries.delEngine(req.body)
    .then(response => {
        res.status(200).send(response);
    })
    .catch(error => {
        res.status(500).send(error);
    })
})

///////////////////////////////////////////////////////////



// ------------------

app.listen(port, () => {
    console.log('App (integrated example) running on port ${port}.', port)
})

// API is ready to TAKE REQUESTS
// create React app to SEND REQUESTS next


// app.get('/api/seasons', (req, res) => {  // /\?skip=[0-9]+&limit=[0-9]+/
//     //console.log(req.url);
//     //[q.skip, q.limit],
//     merchant_model.getSeasons()
//     .then(response => {
//         res.status(200).send(response);
//     })
//     .catch(error => {
//         res.status(500).send(error);
//     })
// })
// // PART B

// // 1.
// app.get('/api/matches/:match_id/winner', (req, res) => {  // /\?skip=[0-9]+&limit=[0-9]+/
//     //console.log(req.url);
//     //[q.skip, q.limit],
//     merchant_model.getWinner(req.params.match_id)
//     .then(response => {
//         res.status(200).send(response);
//     })
//     .catch(error => {
//         res.status(500).send(error);
//     })
// })
// app.get('/api/matches/:skip/display', (req, res) => {  // /\?skip=[0-9]+&limit=[0-9]+/
//     //console.log(req.url);
//     //[q.skip, q.limit],
//     merchant_model.getMatches(req.params.skip)
//     .then(response => {
//         res.status(200).send(response);
//     })
//     .catch(error => {
//         res.status(500).send(error);
//     })
// })

// // before
// //app.get('/matches/:id', (req, res) => {
// //    merchant_model.getMatchById(req.params.id)
// //    .then(response => {
// //        res.status(200).send(response);
// //    })
// //    .catch(error => {
// //        res.status(500).send(error);
// //    })
// //})

// // after

// // 2.
// app.get('/api/matches/:id/batsman1', (req, res) => {
//     merchant_model.getBatsmanById(req.params.id, 1)
//     .then(response => {
//         res.status(200).send(response);
//     })
//     .catch(error => {
//         res.status(500).send(error);
//     })
// })
// app.get('/api/matches/:id/batsman2', (req, res) => {
//     merchant_model.getBatsmanById(req.params.id, 2)
//     .then(response => {
//         res.status(200).send(response);
//     })
//     .catch(error => {
//         res.status(500).send(error);
//     })
// })



// app.get('/api/matches/:id/runs1', (req, res) => {
//     merchant_model.getRunsById(req.params.id, 1)
//     .then(response => {
//         res.status(200).send(response);
//     })
//     .catch(error => {
//         res.status(500).send(error);
//     })
// })

// app.get('/api/matches/:id/runs2', (req, res) => {
//     merchant_model.getRunsById(req.params.id, 2)
//     .then(response => {
//         res.status(200).send(response);
//     })
//     .catch(error => {
//         res.status(500).send(error);
//     })
// })

// app.get('/api/matches/:id/bowl1', (req, res) => {
//     merchant_model.getBowlerById(req.params.id, 1)
//     .then(response => {
//         res.status(200).send(response);
//     })
//     .catch(error => {
//         res.status(500).send(error);
//     })
// })

// app.get('/api/matches/:id/bowl2', (req, res) => {
//     merchant_model.getBowlerById(req.params.id, 2)
//     .then(response => {
//         res.status(200).send(response);
//     })
//     .catch(error => {
//         res.status(500).send(error);
//     })
// })

// app.get('/api/matches/:id/playingXI', (req, res) => {
//     merchant_model.getPlayingXIById(req.params.id)
//     .then(response => {
//         res.status(200).send(response);
//     })
//     .catch(error => {
//         res.status(500).send(error);
//     })
// })

// app.get('/api/matches/:id/umpires', (req, res) => {
//     merchant_model.getUmpiresById(req.params.id)
//     .then(response => {
//         res.status(200).send(response);
//     })
//     .catch(error => {
//         res.status(500).send(error);
//     })
// })

// app.get('/api/matches/:id/thirdumpire', (req, res) => {
//     merchant_model.getThirdUmpireById(req.params.id)
//     .then(response => {
//         res.status(200).send(response);
//     })
//     .catch(error => {
//         res.status(500).send(error);
//     })
// })


// app.get('/api/matches/:id/matchinfo', (req, res) => {
//     merchant_model.getMatchInfoById(req.params.id)
//     .then(response => {
//         res.status(200).send(response);
//     })
//     .catch(error => {
//         res.status(500).send(error);
//     })
// })


// app.get('/api/matches/:id/summarypie1', (req, res) => {
//     merchant_model.getSummaryPieChart(req.params.id, 1)
//     .then(response => {
//         res.status(200).send(response);
//     })
//     .catch(error => {
//         res.status(500).send(error);
//     })
// })
// app.get('/api/matches/:id/summarypie2', (req, res) => {
//     merchant_model.getSummaryPieChart(req.params.id, 2)
//     .then(response => {
//         res.status(200).send(response);
//     })
//     .catch(error => {
//         res.status(500).send(error);
//     })
// })




// // 3.
// app.get('/api/matches/:id/comp1', (req, res) => {
//     merchant_model.getScoreComparisionByMatch(req.params.id, 1)
//     .then(response => {
//         res.status(200).send(response);
//     })
//     .catch(error => {
//         res.status(500).send(error);
//     })
// })
// app.get('/api/matches/:id/comp2', (req, res) => {
//     merchant_model.getScoreComparisionByMatch(req.params.id, 2)
//     .then(response => {
//         res.status(200).send(response);
//     })
//     .catch(error => {
//         res.status(500).send(error);
//     })
// })

// // 4.

// app.get('/api/matches/:id/seasonyear', (req, res) => {
//     merchant_model.getSeasonYearById(req.params.id)
//     .then(response => {
//         res.status(200).send(response);
//     })
//     .catch(error => {
//         res.status(500).send(error);
//     })
// })

// app.get('/api/matches/:id/top3batters1', (req, res) => {
//     merchant_model.getTopBattersById(req.params.id, 1)
//     .then(response => {
//         res.status(200).send(response);
//     })
//     .catch(error => {
//         res.status(500).send(error);
//     })
// })

// app.get('/api/matches/:id/top3batters2', (req, res) => {
//     merchant_model.getTopBattersById(req.params.id, 2)
//     .then(response => {
//         res.status(200).send(response);
//     })
//     .catch(error => {
//         res.status(500).send(error);
//     })
// })

// app.get('/api/matches/:id/top3bowlers1', (req, res) => {
//     merchant_model.getTopBowlersById(req.params.id, 1)
//     .then(response => {
//         res.status(200).send(response);
//     })
//     .catch(error => {
//         res.status(500).send(error);
//     })
// })


// app.get('/api/matches/:id/top3bowlers2', (req, res) => {
//     merchant_model.getTopBowlersById(req.params.id, 2)
//     .then(response => {
//         res.status(200).send(response);
//     })
//     .catch(error => {
//         res.status(500).send(error);
//     })
// })

// // pie chart 4b

// // not done yet

// // PART C

// // a.
// app.get('/api/players/:id/basic', (req, res) => {
//     merchant_model.getPlayerById(req.params.id)
//     .then(response => {
//         res.status(200).send(response);
//     })
//     .catch(error => {
//         res.status(500).send(error);
//     })
// })

// // b.
// app.get('/api/players/:id/battingstats', (req, res) => {
//     merchant_model.getPlayerBattingStatsById(req.params.id)
//     .then(response => {
//         res.status(200).send(response);
//     })
//     .catch(error => {
//         res.status(500).send(error);
//     })
// })

// app.get('/api/players/:id/battinggraph', (req, res) => {
//     merchant_model.getPlayerBattingGraphById(req.params.id)
//     .then(response => {
//         res.status(200).send(response);
//     })
//     .catch(error => {
//         res.status(500).send(error);
//     })
// })

// // c.

// app.get('/api/players/:id/bowlingstats', (req, res) => {
//     merchant_model.getPlayerBowlingStatsById(req.params.id)
//     .then(response => {
//         res.status(200).send(response);
//     })
//     .catch(error => {
//         res.status(500).send(error);
//     })
// })

// app.get('/api/players/:id/bowlinggraph', (req, res) => {
//     merchant_model.getPlayerBowlingGraphById(req.params.id)
//     .then(response => {
//         res.status(200).send(response);
//     })
//     .catch(error => {
//         res.status(500).send(error);
//     })
// })


// // PART D

// app.get('/api/pointstable/:year', (req, res) => {
//     merchant_model.getSeasonPointsTable(req.params.year)
//     .then(response => {
//         res.status(200).send(response);
//     })
//     .catch(error => {
//         res.status(500).send(error);
//     })
// })





// // PART E

// // 1.
// app.get('/api/venues', (req, res) => {
//     //console.log(req.url);
//     merchant_model.getVenues(req.url)
//     .then(response => {
//         res.status(200).send(response);
//     })
//     .catch(error => {
//         res.status(500).send(error);
//     })
// })

// // 2.
// // a.
// app.get('/api/venues/:id/basic', (req, res) => {
//     merchant_model.getVenueById(req.params.id)
//     .then(response => {
//         res.status(200).send(response);
//     })
//     .catch(error => {
//         res.status(500).send(error);
//     })
// })

// // b.

// app.get('/api/venues/:id/venuepiechart', (req, res) => {
//     merchant_model.getVenuePieChart(req.params.id)
//     .then(response => {
//         res.status(200).send(response);
//     })
//     .catch(error => {
//         res.status(500).send(error);
//     })
// })

// app.get('/api/venues/:id/venuegraph', (req, res) => {
//     merchant_model.getVenueGraph(req.params.id)
//     .then(response => {
//         res.status(200).send(response);
//     })
//     .catch(error => {
//         res.status(500).send(error);
//     })
// })

// app.post('/api/addvenue', (req, res) => {
//     //console.log(req);
//     //console.log(req.body);
//     merchant_model.postVenue(req.body)
//     .then(response => {
//         res.status(200).send(response);
//     })
//     .catch(error => {
//         res.status(500).send(error);
//     })
// })

// c.

///////////////////////////////////////////////////////////
