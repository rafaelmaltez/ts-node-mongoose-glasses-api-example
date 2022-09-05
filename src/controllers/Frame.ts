import { Request, Response } from "express";
import IService from "../interfaces/IService";
import IFrame from "../interfaces/Frame";
import { throws } from "assert";

class FrameController {
  private _service: IService<IFrame>

  constructor(service: IService<IFrame>) {
    this._service = service
  }

  public async create(
    req: Request & { body: IFrame},
    res: Response<IFrame>
  ) {
    const { material, color } = req.body;
    const frame = { material, color };
    const result = await this._service.create(frame)
    return res.status(201).json(result)
  }

  public async readOne(
    req: Request,
    res: Response<IFrame>
  ) {
    const result = await this._service.readOne(req.params.id)
    return res.status(200).json(result!)
  }
}

export default FrameController;
