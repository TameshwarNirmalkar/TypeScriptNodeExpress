import { Schema } from 'mongoose';
import { cwarn } from 'simple-color-print';

const employeeSchema: Schema = new Schema({
    created_at: { type: Date},
    email: { type: String},
    emp_name: { type: String},
    emp_designation: { type: String},
});
employeeSchema.pre('save', (next) => {
    cwarn(employeeSchema);
    next();
});

export default employeeSchema;


