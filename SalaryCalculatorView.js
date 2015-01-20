define(['jquery', 'handlebars', 'text!calculatorTemplate.html'], function($, Handlebars, templateHTML){
	function SalaryCalculatorView(calculator){

		var $root = this.$root = $("<div></div>");
		this.template = null;

		var self = this;

		this.init = function(){
			
			calculator.addSubscriber('all', function(){
				self.render();
			});

			//React to UI changes
			$root.on('change', "#txtBasic", function(){
				calculator.set('basic', parseInt(this.value,10));
			});

			$root.on('change', "#txtHra", function(){
				calculator.set('hra', parseInt(this.value,10));
			});
			$root.on('change', "#txtDa", function(){
				calculator.set('da', parseInt(this.value,10));
			});

			$root.on('change', "#rangeTax", function(){
				calculator.set('tax', parseInt(this.value,10));
			});

			$root.on('click', "#btnCalculate", function(){
				calculator.calculate();
			});
			
		};

		this.render = function(){
			if (!this.template){
				this.template = Handlebars.compile(templateHTML);
			}
			$root.html(this.template(calculator.toJSON()));
			return this;
		}

	}
	return SalaryCalculatorView;
});