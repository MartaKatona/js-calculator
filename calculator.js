/**
 * Declare a function named `calculatorModule`
 * this function will have two private variables declared inside of it.
 * @variable PRIVATE { Number } `memory`
 * @variable PRIVATE { Number } `total`
 * @return {object} `calculator` object that can be used
 */

var calculatorModule = (function() {
  var module = {};

  //Private
  //??values
  var _total = 0;
  var _memory = 0;


  /**
   * sets the `total` to the number passed in
   * @param  { Number } x
   * @return { Number }    current total
   */
  module.load = function(x){
    _total = x;
    return _total;
  };

  /**
   * Return the value of `total`
   * @return { Number }
   */ //get

  module.getTotal = function(){
    return _total;
  };


  /**
   * Sums the value passed in with `total`
   * @param { Number } x
   */
  module.add = function(x){
    _total = _total + x;
    return _total;
  };

  /**
   * Subtracts the value passed in from `total`
   * @param  { Number } x
   */
  module.subtract = function(x){
    _total = _total - x;
    return _total;
  };

  /**
   * Multiplies the value by `total`
   * @param  { Number } x
   */
  module.multiply = function(x){
    _total = _total * x;
    return _total;
  };

  /**
   * Divides the value passing in by `total`
   * @param  { Number } x
   */
  module.divide = function(x){
    _total = _total / x;
    return _total;
  };

  /**
   * Return the value stored at `memory`
   * @return { Number }
   */ //get
  module.recallMemory = function(){
    return _memory;
  };

  /**
   * Stores the value of `total` to `memory`
   */ //set
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

