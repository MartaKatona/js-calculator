/**
 * Declare a function named `calculatorModule`
 * this function will have two private variables declared inside of it.
 * @variable PRIVATE { Number } `memory`
 * @variable PRIVATE { Number } `total`
 * @return {object} `calculator` object that can be used
 */

var calculatorModule = (function() {
  var module = {};

  var _total = 0;
  var _memory = 0;


  /**
   * sets the `total` to the number passed in
   * @param  { Number } x
   * @return { Number }    current total
   */
  function validation (x){
    if (typeof(x) !== 'number') {
      throw new Error('Wrong data type you dummy');
    }
  }

  module.load = function(x){
    validation(x);
    _total = x;
    return _total;
  };

  /**
   * Return the value of `total`
   * @return { Number }
   */

  module.getTotal = function(){
    return _total;
  };


  /**
   * Sums the value passed in with `total`
   * @param { Number } x
   */
  module.add = function(x){
    validation(x);
    _total = _total + x;
    return _total;
  };

  /**
   * Subtracts the value passed in from `total`
   * @param  { Number } x
   */
  module.subtract = function(x){
    validation(x);
    _total = _total - x;
    return _total;
  };

  /**
   * Multiplies the value by `total`
   * @param  { Number } x
   */
  module.multiply = function(x){
    validation(x);
    _total = _total * x;
    return _total;
  };

  /**
   * Divides the value passing in by `total`
   * @param  { Number } x
   */
  module.divide = function(x){
    validation(x);
    _total = _total / x;
    return _total;
  };

  /**
   * Return the value stored at `memory`
   * @return { Number }
   */
  module.recallMemory = function(){
    return _memory;
  };

  /**
   * Stores the value of `total` to `memory`
   */
  module.saveMemory = function() {
    _memory = _total;
    return _memory;
  };

  /**
   * Clear the value stored at `memory`
   */
  module.clearMemory = function() {
    _memory = 0;
    return _memory;
  };


  /**
   * Validation
   */



  return module;
});

