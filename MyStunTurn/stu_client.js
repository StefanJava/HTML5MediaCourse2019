const stun = require('stun');

stun.request('stun1.l.google.com', (err, res) => {
    if (err) {
        console.error(err);
    } else {
        console.log(res);
    }
});