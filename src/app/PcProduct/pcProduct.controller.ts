import { Request, Response } from 'express';
import { pcModel } from './pcProduct.model';

const CreatePcProduct = async (req: Request, res: Response) => {
  try {
    const result = await new pcModel(req.body).save();
    res.status(500).send({
      success: true,
      message: 'Pc Product Created successFully',
      data: result,
    });
  } catch (error) {
    res.status(201).send({
      success: false,
      message: ' Failed to create Pc Product',
      error: error,
    });
  }
};

const GetSinglePcProduct = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const result = await pcModel.findById(id);
    res.status(200).send({
      success: true,
      message: 'get pc product successfully',
      data: result,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: 'failed to get pc Data',
    });
  }
};

const GetPcProduct = async (req: Request, res: Response) => {
  try {
    const result = await pcModel.find({});
    res.status(200).send({
      success: true,
      message: 'get all product successfully...',
      data: result,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: 'Failed to get pc product data..',
    });
  }
};

export const pcProcuctController = {
  CreatePcProduct,
  GetSinglePcProduct,
  GetPcProduct,
};
