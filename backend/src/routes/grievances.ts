import { Router } from 'express';
import { createGrievance, getGrievances, getGrievanceById, updateGrievance, deleteGrievance } from '../controllers/grievancesController';

const router = Router();

router.post('/', createGrievance);
router.get('/', getGrievances);
router.get('/:id', getGrievanceById);
router.put('/:id', updateGrievance);
router.delete('/:id', deleteGrievance);

export default router;