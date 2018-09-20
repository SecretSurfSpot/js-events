(function(exports){
  function CalculatorController(){
    this._calculatorModel = new CalculatorModel();
    this._calculatorView = new CalculatorView();
  }

// Event Listening function
  CalculatorController.prototype.setEventListeners = function(){
    document.getElementById('square-button')
      .addEventListener('click', this.squareNumber.bind(this));
    document.getElementById('half-button')
      .addEventListener('click', this.numberDividedByTwo.bind(this));
    document.getElementById('percent-button')
      .addEventListener('click', this.percentageOfNumber.bind(this));
  }

// function for calculating square number
  CalculatorController.prototype.squareNumber = function(){
    let value = document.getElementById('square-input').value;
    let result = this._calculatorModel.square(value);
    this.displayResult(result);
  }

// function for calculating number divided by two
  CalculatorController.prototype.numberDividedByTwo = function(){
    let value = document.getElementById('half-input').value;
    let result = this._calculatorModel.half(value);
    this.displayResult(result);
  }

// functions for Listening for and calculating percentage of number
    CalculatorController.prototype.percentageOfNumber = function(){
      let fraction = document.getElementById('percent1-input').value;
      let whole = document.getElementById('percent2-input').value;
      let result = this._calculatorModel.calculatePercentage(fraction, whole);
      this.displayResult(result);
    }

// function for printing buiding output
  CalculatorController.prototype.displayResult = function(result) {
    document.getElementById('output')
      .innerHTML = this._calculatorView.buildOutput(result);
  }

  exports.CalculatorController = CalculatorController
})(this);
