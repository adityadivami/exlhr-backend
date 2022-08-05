import Router from 'express';
import * as globalControllers from '../controllers/global';
export const globalRoutes = Router();

globalRoutes.route('/global')
    .get(globalControllers.globalGET)
    .post(globalControllers.globalPOST);

globalRoutes.route('/global/:id')
    .delete(globalControllers.globalDELETEBYID)
    .put(globalControllers.globalUPDATEBYID);