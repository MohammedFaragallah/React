const passport = require('passport');
const camp = require('../models/camp');
const comment = require('../models/comment');
const user = require('../models/User');

module.exports = app => {
  app.get('/camp/', (req, res) => {
    res.render('home.ejs');
  });

  app.post('/camp/', (req, res) => {
    res.send('post to root');
  });

  app.get('/camp/camps', (req, res) => {
    camp.find({}, (err, camp) => {
      if (err) {
        console.log(err);
      } else {
        res.render('camp.ejs', { camp: camp });
      }
    });
  });

  app.post('/camp/camps', (req, res) => {
    camp.create(
      {
        name: req.body.name,
        image: req.body.image,
        description: req.body.description,
      },
      (err, camp) => {
        if (err) {
          console.log(err);
        } else {
          res.redirect('/camp/camps/' + camp._id);
        }
      }
    );
  });

  app.get('/camp/camps/new', (req, res) => {
    res.render('new.ejs');
  });

  app.get('/camp/camps/:id', (req, res) => {
    camp
      .findById(req.params.id)
      .populate('comments')
      .exec((err, camp) => {
        if (err) {
          console.log(err);
        } else {
          res.render('show.ejs', { camp: camp });
        }
      });
  });

  app.post('/camp/camps/:id', (req, res) => {
    camp
      .findById(req.params.id)
      .populate('comments')
      .exec((err, camp) => {
        if (err) {
          console.log(err);
        } else {
          comment.create(
            {
              text: req.body.comment,
              author: camp.name,
            },
            (err, comment) => {
              if (err) {
                console.log(err);
              } else {
                camp.comments.push(comment);
                camp.save();
                res.render('show.ejs', { camp: camp });
              }
            }
          );
        }
      });
  });

  app.get('/camp/signin', (req, res) => {
    res.render('signin.ejs');
  });

  app.get('/camp/signup', (req, res) => {
    res.render('signup.ejs');
  });
  app.post('/camp/signup', (req, res) => {
    let newUser = new user({ username: req.body.username });
    user.register(newUser, req.body.passport, (err, user) => {
      if (err) {
        console.log(err);
        return res.render('signup.ejs');
      }
      passport.authenticate('local')(req, res, () => {
        res.redirect('camp/camps');
      });
    });
  });
};
