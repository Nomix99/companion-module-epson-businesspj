module.exports = {
	initVariables: function () {
		let self = this;

		let variables = [];

		self.setVariableDefinitions(variables);
	},

	checkVariables: function () {
		let self = this;

		try {

		}
		catch(error) {
			self.log('error', 'Error setting variables: ' + error);
		}
	},

	GetVariableDefinitions: function () {
		return [
			
			{
				name: 'Power status',
				variableId: 'pwrStatus',
			},
			{
				name: 'Mute status',
				variableId: 'muteStatus',
			},
			{
				name: 'Freeze status',
				variableId: 'freezeStatus',
			},
			
		]
	}
}

