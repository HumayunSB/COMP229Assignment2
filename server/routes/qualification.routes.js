import { Router } from 'express';
import qualCtrl from '../controllers/qualification.controller.js';

const router = Router();

router
  .route('/api/qualifications')
  .get(qualCtrl.list)
  .post(qualCtrl.create)
  .delete(qualCtrl.removeAll);

router.param('id', qualCtrl.byID);

router
  .route('/api/qualifications/:id')
  .get(qualCtrl.read)
  .put(qualCtrl.update)
  .delete(qualCtrl.remove);

export default router;
