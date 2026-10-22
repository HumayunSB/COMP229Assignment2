import User from '../models/user.model.js';
import { createCrudController } from './crud.factory.js';

export default createCrudController(User, 'profile');
