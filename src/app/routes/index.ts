import express from 'express';
import { pcRoutes } from '../PcProduct/pcProduct.route';
const router = express.Router();

const moduleRoutes = [
  {
    path: '/pc',
    route: pcRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
