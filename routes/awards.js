const express = require('express');
const router = express.Router();
const awardsDal = require('../services/awards.dal')

router.get('/', async (req, res) => {
    // const theAwards = [
    //     {award_id: 1, name: 'Acadamy Award - Best Actress'},
    //     {award_id: 2, name: 'Golden Globe - Best Film'},
    //     {award_id: 3, name: 'Acadamy Award - Best Actress'}
    // ];
    try {
        let theAwards = await awardsDal.getAwards(); // from postgresql
        res.render('awards', {theAwards});
    } catch {
        res.render('503');
    }
});

module.exports = router