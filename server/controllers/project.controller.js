import Project from '../models/project.model.js';
import { createCrudController } from './crud.factory.js';

export default createCrudController(Project, 'project');
