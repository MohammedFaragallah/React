module.exports = app => {
  //handle all non handeled get requests
  app.get('/*', (req, res) => {
    res.render('404');
  });

  //handle all non handeled post requests
  app.post('/*', (req, res) => {
    res.render('404');
  });
};
