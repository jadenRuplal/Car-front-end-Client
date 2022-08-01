const mongoose = require('mongoose')

const carSchema = new mongoose.Schema(
	{
		make: {
			type: String,
			required: true,
		},
		color: {
			type: String,
			required: true,
		},
		owner: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User',
			required: true,
		},
	},
	{
		timestamps: true,
	}
)

module.exports = mongoose.model('Car', carSchema)
