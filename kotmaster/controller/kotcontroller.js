const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const db = require('../db/kot');
var cors = require('cors');
const webpush = require('web-push');
const helmet = require('helmet');
const expectCt = require('expect-ct');
var jwt = require('jsonwebtoken');
var config = require('../../config');
var bcrypt = require('bcryptjs');


router.use(bodyParser.urlencoded({extended : false}));
router.use(bodyParser.json());
router.use(cors());



router.use(helmet());
router.use(helmet.frameguard());
router.use(helmet.contentSecurityPolicy({
    directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'", "'unsafe-inline'"],
        sandbox: ['allow-forms', 'allow-scripts'],
        reportUri: '/kotViolationReport',
        objectSrc: ["'none'"],
        upgradeInsecureRequests: true,
        workerSrc: false
    }
  }))

 router.use(helmet.permittedCrossDomainPolicies({ permittedPolicies: 'master-only' }));
 router.use(expectCt({
    enforce: true,
    maxAge: 123
  }));
 router.use(helmet.featurePolicy({
    features: {
      fullscreen: ["'self'"],
      vibrate: ["'none'"],
      syncXhr: ["'none'"]
    }
  }));
 router.use(helmet.frameguard({ action: 'sameorigin' }));
 router.use(helmet.hidePoweredBy());

 const sixtyDaysInSeconds = 5184000
        router.use(helmet.hsts({
        maxAge: sixtyDaysInSeconds,
        includeSubDomains: false
}));
router.use(helmet.ieNoOpen());
router.use(helmet.noSniff());
router.use(helmet.referrerPolicy({ policy: 'same-origin' }));
router.use(helmet.xssFilter());


/************************Get Request*********** */
router.post('/printOrder', async (req,res)=>
 {
    try
    {
        let data=await db.printOrder();
        return res.status(200).send(data);
    }
    catch(error)
    {
        return res.status(400).send("Server Error");
    }
})


module.exports = router;
