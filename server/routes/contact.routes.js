import { Router } from 'express';
import contactCtrl from '../controllers/contact.controller.js';

const router = Router();

router
  .route('/api/contacts')
  .get(contactCtrl.list)
  .post(contactCtrl.create)
  .delete(contactCtrl.removeAll);

router.param('id', contactCtrl.byID);

router
  .route('/api/contacts/:id')
  .get(contactCtrl.read)
  .put(contactCtrl.update)
  .delete(contactCtrl.remove);

export default router;
