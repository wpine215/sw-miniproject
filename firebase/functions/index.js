const functions = require('firebase-functions');
const admin = require('firebase-admin');
var serviceAccount = require("./permissions.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://covid-miniproject-22326.firebaseio.com"
});

const express = require('express');
const app = express();
const db = admin.firestore();

const cors = require('cors');
app.use(cors({origin:true}));

// https://indepth.dev/building-an-api-with-firebase/

///////////////////////////////////////////////////////////////////////////////
///////////////////////////// NON-API ROUTES //////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

app.get('/hello-world', (req, res) => {
    return res.status(200).send('Hello world');
})


///////////////////////////////////////////////////////////////////////////////
///////////////////////////// POST METHODS ////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

// Create survey submission (POST)
app.post('/api/survey/create', (req, res) => {
    (async () => {
        try {
            await db.collection('surveys').doc('/' + req.body.id + '/')
            .create({
                user_id: req.body.user_id,
                timestamp: req.body.timestamp,
                has_fever: req.body.has_fever,
                has_cough: req.body.has_cough,
                has_diff_b: req.body.has_diff_b,
                has_fatigue: req.body.has_fatigue,
                has_s_loss: req.body.has_s_loss,
                has_positive_contact: req.body.has_positive_contact
            })

            return res.status(200).send();
        } catch (error) {
            console.log(error);
            return res.status(500).send(error);
        }
    })();
})

// Create test result submission (POST)
app.post('/api/test/create', (req, res) => {
    (async () => {
        try {
            await db.collection('tests').doc('/' + req.body.id + '/')
            .create({
                user_id: req.body.user_id,
                timestamp: req.body.timestamp,
                test_timestamp: req.body.test_timestamp,
                test_positive: req.body.test_positive
            })

            return res.status(200).send();
        } catch (error) {
            console.log(error);
            return res.status(500).send(error);
        }
    })();
})

///////////////////////////////////////////////////////////////////////////////
///////////////////////////// GET METHODS /////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

// Read all survey submissions (GET)
app.get('/api/surveys', (req, res) => {
    (async () => {
        try {
            let query = db.collection('surveys');
            let response = [];
            await query.get().then(querySnapshot => {
                let docs = querySnapshot.docs;
                for (let doc of docs) {
                    const selectedSurvey = {
                        id: doc.id,
                        user_id: doc.data().user_id,
                        timestamp: doc.data().timestamp
                    };
                    response.push(selectedSurvey);
                }
                return response;
            });

            return res.status(200).send(response);
        } catch (error) {
            console.log(error);
            return res.status(500).send(error);
        }
    })();
})

// Read specific survey submission (GET)
app.get('/api/survey/:id', (req, res) => {
    (async () => {
        try {
            const document = db.collection('surveys').doc(req.params.id);
            let item = await document.get();
            let response = item.data();
            return res.status(200).send(response);
        } catch (error) {
            console.log(error);
            return res.status(500).send(error);
        }
    })();
})

// Read all test results (GET)
app.get('/api/tests', (req, res) => {
    (async () => {
        try {
            let query = db.collection('tests');
            let response = [];
            await query.get().then(querySnapshot => {
                let docs = querySnapshot.docs;
                for (let doc of docs) {
                    const selectedTest = {
                        id: doc.id,
                        user_id: doc.data().user_id,
                        timestamp: doc.data().timestamp,
                        test_timestamp: doc.data().test_timestamp,
                        test_positive: doc.data().test_positive
                    };
                    response.push(selectedTest);
                }
                return response;
            });

            return res.status(200).send(response);
        } catch (error) {
            console.log(error);
            return res.status(500).send(error);
        }
    })();
})

// Read specific test result (GET)
app.get('/api/test/:id', (req, res) => {
    (async () => {
        try {
            const document = db.collection('tests').doc(req.params.id);
            let item = await document.get();
            let response = item.data();
            return res.status(200).send(response);
        } catch (error) {
            console.log(error);
            return res.status(500).send(error);
        }
    })();
})

///////////////////////////////////////////////////////////////////////////////
///////////////////////////// PUT METHODS /////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

// Update (PUT) - NOT NECESSARY FOR MVP

///////////////////////////////////////////////////////////////////////////////
///////////////////////////// DELETE METHODS //////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

// Delete (DELETE) - NOT NECESSARY FOR MVP

// Export API to Firebase Cloud Functions
exports.app = functions.https.onRequest(app);