import Router from 'express';
import * as globalControllers from '../controllers/global';
export const globalRoutes = Router();

import { endpoints } from "../constants/urls"

if (endpoints && Array.isArray(endpoints) && endpoints.length)
    endpoints.forEach(
        eachUrl => {
            const { endpoint, method, response } = eachUrl;
            globalRoutes.route(endpoint)[method.toLowerCase()]((req, res) => res.send(response))
        }
    )

globalRoutes.route('/global')
    .get(globalControllers.globalGET)
    .post(globalControllers.globalPOST);

globalRoutes.route('/global/:id')
    .delete(globalControllers.globalDELETEBYID)
    .put(globalControllers.globalUPDATEBYID);