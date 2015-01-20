define([], function(){
	function SalaryCalculator(){
		var data = {
			basic : 0,
			hra : 0,
			da : 0,
			tax : 0,
			salary : 0
		};
		this.get = function(attrName){
			return data[attrName];
		}
		this.set = function(attrName, value){
			data[attrName] = value;
			triggerChange(attrName);
			triggerChange('all');
			//trigger change notifications
		};
		this.toJSON = function(){
			return JSON.parse(JSON.stringify(data));
		}

		var subscribers = {};
		this.addSubscriber = function(attrName, subscriptionFn){
			subscribers[attrName] = subscribers[attrName] || [];
			subscribers[attrName].push(subscriptionFn);
		};

		this.removeSubscriber = function(attrName, subscritionFn){
			//implemented later
		}

		function triggerChange(attrName){
			var subscriptionFns = subscribers[attrName] || [];
			subscriptionFns.forEach(function(fn){
				console.log(arguments);
				fn();
			});
		}
		
	}
	SalaryCalculator.prototype.calculate = function(){
		var gross = this.get('basic') + this.get('hra') + this.get('da');
		var net = gross * ((100-this.get('tax'))/100);
		this.set('salary', net);
	}
	return SalaryCalculator;
});

