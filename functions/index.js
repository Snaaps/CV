const functions = require("firebase-functions");
const admin = require("firebase-admin");
const cors = require("cors")({origin: true});
admin.initializeApp();

const db = admin.database();

exports.submitReview = functions.https.onRequest((req, res) => {
  cors(req, res, async () => {
    const {id, name, surname, rating, comment} = req.body;
    try {
      await db.ref(`reviews/${id}`).set({
        name,
        surname,
        rating,
        comment,
        timestamp: admin.database.ServerValue.TIMESTAMP,
      });
      res.status(200).send({message: "Review submitted successfully"});
    } catch (error) {
      res.status(500).send({error: error.message});
    }
  });
});

exports.getReviews = functions.https.onRequest((req, res) => {
  cors(req, res, async () => {
    try {
      const snapshot = await db.ref("reviews").once("value");
      const reviews = [];
      snapshot.forEach((childSnapshot) => {
        reviews.push({id: childSnapshot.key, ...childSnapshot.val()});
      });
      res.status(200).send({reviews});
    } catch (error) {
      res.status(500).send({error: error.message});
    }
  });
});

exports.getGlobalRating = functions.https.onRequest((req, res) => {
  cors(req, res, async () => {
    try {
      const snapshot = await db.ref("reviews").once("value");
      let totalRating = 0;
      let reviewCount = 0;
      snapshot.forEach((childSnapshot) => {
        totalRating += childSnapshot.val().rating;
        reviewCount++;
      });
      const globalRating = totalRating / reviewCount;
      res.status(200).send({globalRating, reviewCount});
    } catch (error) {
      res.status(500).send({error: error.message});
    }
  });
});
