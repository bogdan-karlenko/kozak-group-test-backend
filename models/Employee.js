const mongoose = require('mongoose');

let EmployeeSchema = new mongoose.Schema({
    name: { type: String, required: [true, "can't be blank"], index: true },
    birthDate: String,
    occupation: String,
    salary: Number,
    createdAt: Date,
    updatedAt: Date,
}, { timestamps: true, collection: 'Employee' });

EmployeeSchema.methods.toJSON = function () {
    return {
        id: this._id,
        name:this.name,
        birthDate:this.birthDate,
        occupation: this.occupation,
        salary: this.salary
    };
};

mongoose.model('Employee', EmployeeSchema);
