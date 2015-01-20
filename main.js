require(['SalaryCalculator', 'SalaryCalculatorView', 'jquery'], function(SalaryCalculator, SalaryCalculatorView, $){
	var calculator = new SalaryCalculator();
	var view = new SalaryCalculatorView(calculator);
	view.init();
	$(function(){
		view.render().$root.appendTo(document.body);
	});
});
