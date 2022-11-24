var router = require('express').Router();
const awardsDal = require('../../services/awards.dal')

// api/awards
router.get('/', async (req, res) => {
    if(DEBUG) console.log('ROUTE: /api/awards/ GET ' + req.url);
    try {
        let theAwards = await awardsDal.getAwards(); // from postgresql
        res.statusCode = 200;
        res.json(theAwards);
    } catch {
        // log this error to an error log file.
        res.statusCode = 503;
        res.json({message: "Service Unavailable", status: 503});
    }
});

module.exports = router;