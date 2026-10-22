import Contact from '../models/contact.model.js';
import { createCrudController } from './crud.factory.js';

export default createCrudController(Contact, 'contact');
