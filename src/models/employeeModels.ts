// import { Document } from 'mongoose';
// import { IEmployeeInterface } from '../interfaces/employeeInterface';

// export interface IEmployeeModel extends IEmployeeInterface, Document {}


// new implementation

import { Schema, model } from 'mongoose';
import { cwarn } from 'simple-color-print';

const employeeSchema: Schema = new Schema({
    created_at: { type: Date},
    email: { type: String},
    emp_name: { type: String},
    emp_designation: { type: String},
});

const employeeModel = model('employee', employeeSchema);

export default employeeModel;



