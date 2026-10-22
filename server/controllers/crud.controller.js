import extend from 'lodash/extend.js';
import errorController from './error.controller.js';

const { getErrorMessage } = errorController;

function sendError(res, error, statusCode = 500) {
  return res.status(statusCode).json({ error: getErrorMessage(error) });
}

export function createCrudController(Model, paramName) {
  const create = async (req, res) => {
    try {
      const item = await new Model(req.body).save();
      return res.status(201).json(item);
    } catch (error) {
      return sendError(res, error, 400);
    }
  };

  const list = async (req, res) => {
    try {
      const items = await Model.find().select('-hashed_password -salt');
      return res.json(items);
    } catch (error) {
      return sendError(res, error);
    }
  };

  const byID = async (req, res, next, id) => {
    try {
      const item = await Model.findById(id).select('-hashed_password -salt');
      if (!item) {
        return res.status(404).json({ error: 'Item not found.' });
      }

      req[paramName] = item;
      return next();
    } catch (error) {
      return sendError(res, error, 400);
    }
  };

  const read = (req, res) => {
    const item = req[paramName].toObject
      ? req[paramName].toObject()
      : { ...req[paramName] };
    delete item.hashed_password;
    delete item.salt;
    return res.json(item);
  };

  const update = async (req, res) => {
    try {
      const item = extend(req[paramName], req.body);
      if (Model.modelName === 'User') {
        item.updated = new Date();
      }

      await item.save();
      return res.json(item);
    } catch (error) {
      return sendError(res, error, 400);
    }
  };

  const remove = async (req, res) => {
    try {
      await req[paramName].deleteOne();
      return res.json({ message: 'Successfully deleted.' });
    } catch (error) {
      return sendError(res, error);
    }
  };

  const removeAll = async (req, res) => {
    try {
      const result = await Model.deleteMany({});
      return res.json(result);
    } catch (error) {
      return sendError(res, error);
    }
  };

  return { create, list, byID, read, update, remove, removeAll };
}

export default { createCrudController };
