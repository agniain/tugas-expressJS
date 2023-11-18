const router = require('express').Router();

router.get('/', (req, res) => {
    res.json({
        status: 'Successfully',
        message: 'Hello!, this is my first project'
    });
});

router.get('/date/', (req, res) =>{
    const now = new Date();
    const jakartaTime = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Jakarta'}));

    res.json({
        date: now.toDateString(),
        time: jakartaTime.toLocaleTimeString()
    });
});

router.get('/data/', (req, res) => {
    const {name, age} = req.query;
    res.send({
        name,
        age
    });
});

router.get('/diet/', (req, res) => {
    res.json({
        category: 'food',
        type: 'noodle',
        price: 25000
    });
});

module.exports = router;