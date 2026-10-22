import Education from '../models/education.model.js';
import { createCrudController } from './crud.factory.js';

export default createCrudController(Education, 'qualification');
