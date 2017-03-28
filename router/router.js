module.exports = function(express){
  const router = express.Router();
  router.route('/').get(function(req,res){
      res.render('main')
  });

  return router;
};
