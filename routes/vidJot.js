const mongoose = require('mongoose'),
  Idea = mongoose.model('idea');

module.exports = app => {
  // Index Route
  app.get('/', (req, res) => {
    const title = 'Welcome';
    res.render('index', {
      title: title,
    });
  });

  // About Route
  app.get('/about', (req, res) => {
    res.render('about');
  });

  // Idea Index Page
  app.get('/ideas', (req, res) => {
    Idea.find({})
      .sort({ date: 'desc' })
      .then(ideas => {
        res.render('ideas/index', {
          ideas: ideas,
        });
      });
  });

  // Add Idea Form
  app.get('/ideas/add', (req, res) => {
    res.render('ideas/add');
  });

  // Edit Idea Form
  app.get('/ideas/edit/:id', (req, res) => {
    Idea.findOne({
      _id: req.params.id,
    }).then(idea => {
      res.render('ideas/edit', {
        idea: idea,
      });
    });
  });

  // Process Form
  app.post('/ideas', (req, res) => {
    let errors = [];

    if (!req.body.title) {
      errors.push({ text: 'Please add a title' });
    }
    if (!req.body.details) {
      errors.push({ text: 'Please add some details' });
    }

    if (errors.length > 0) {
      res.render('ideas/add', {
        errors: errors,
        title: req.body.title,
        details: req.body.details,
      });
    } else {
      const newUser = {
        title: req.body.title,
        details: req.body.details,
      };
      new Idea(newUser).save().then(idea => {
        req.flash('success_msg', 'Video idea added');
        res.redirect('/ideas');
      });
    }
  });

  // Edit Form process
  app.put('/ideas/:id', (req, res) => {
    Idea.findOne({
      _id: req.params.id,
    }).then(idea => {
      // new values
      idea.title = req.body.title;
      idea.details = req.body.details;

      idea.save().then(idea => {
        req.flash('success_msg', 'Video idea updated');
        res.redirect('/ideas');
      });
    });
  });

  // Delete Idea
  app.delete('/ideas/:id', (req, res) => {
    Idea.deleteOne({ _id: req.params.id }).then(() => {
      req.flash('success_msg', 'Video idea removed');
      res.redirect('/ideas');
    });
  });
};
