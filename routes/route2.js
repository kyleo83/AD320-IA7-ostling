var createError = require('http-errors');
var express = require('express');
var router = express.Router();
var allColors = require('../colors.json');

function getColorByName(colorName){
  for(var i = 0; i < allColors.colors.length; i++){
    if(allColors.colors[i].color == colorName.toLowerCase()) {
      return allColors.colors[i];
    }
  }
}
/* GET Color Properties */
router.get('/all', function(req, res, next) {
  res.send(allColors);
});

router.get('/:oneColor', function(req, res, next) {
  var colorProps = getColorByName(req.params.oneColor);
  if (!colorProps){
    var err = new createError.NotFound();
    return next(err);
  }
  else {
    res.send(colorProps);
  }
});

module.exports = router;
