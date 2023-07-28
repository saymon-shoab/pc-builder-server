import express from 'express';
import { pcProcuctController } from './pcProduct.controller';
const router = express.Router();

router.post('/createPc', pcProcuctController.CreatePcProduct);

router.get('/:id', pcProcuctController.GetSinglePcProduct);
router.get('/', pcProcuctController.GetPcProduct);

export const pcRoutes = router;
