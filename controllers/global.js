import mongoose from 'mongoose';
import { mongooseModels } from '../models';
let globalModel = mongooseModels.globalModel;

export const globalGET = (req, res) => {
    globalModel.find({})
        .then(
            responseData =>
            res.status(200)
            .send(responseData)
        )
        .catch(
            errResponse =>
            res.status(400)
            .send(errResponse)
        )
}

export const globalPOST = (req, res) => {
    globalModel.create(req.body)
        .then(
            responseData =>
            res.status(200)
            .send(responseData)
        )
        .catch(
            errResponse =>
            res.status(400)
            .send(errResponse)
        )
}

export const globalDELETEBYID = (req, res) => {
    globalModel.findByIdAndRemove(req.params.id)
        .then(
            responseData =>
            res.status(200)
            .send(responseData)
        )
        .catch(
            errResponse =>
            res.status(400)
            .send(errResponse)
        )
}

export const globalUPDATEBYID = (req, res) => {
    globalModel.findByIdAndUpdate(req.params.id, req.body)
        .then(
            responseData =>
            res.status(200)
            .send(responseData)
        )
        .catch(
            errResponse =>
            res.status(400)
            .send(errResponse)
        )
}