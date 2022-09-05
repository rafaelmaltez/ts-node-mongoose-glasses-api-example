import { Router } from 'express';
import FrameController from '../controllers/Frame';
import FrameModel from '../models/Frame';
import FrameService from '../services/Frame';

const router = Router()

const frameModel = new FrameModel()
const frameService = new FrameService(frameModel)
const frameController = new FrameController(frameService)

router.post('/frame', (req, res) => frameController.create(req, res))
router.get('/frame/:id', (req, res) => frameController.readOne(req, res))

export default router;
