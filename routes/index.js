import Router from 'express';
export const globalRoutes = Router();

import { endpoints } from "../constants/endpoints";

if (endpoints && Array.isArray(endpoints) && endpoints.length)
    endpoints.forEach(
        eachEndpoint => {
            const { endpoint, method, response } = eachEndpoint;
            globalRoutes.route(endpoint)[method.toLowerCase()]((req, res) => res.send(response))
        }
    )