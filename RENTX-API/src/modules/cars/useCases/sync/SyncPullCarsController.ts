import { Request, Response } from "express";
import { container } from "tsyringe";
import { SyncPullCarsCase } from "./SyncPullCarsCase";

class SyncPullCarsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { lastPulledVersion } = request.query;

    console.log(lastPulledVersion);

    const syncPullCarsCase = container.resolve(SyncPullCarsCase);
    const cars = await syncPullCarsCase.execute(Number(lastPulledVersion));

    //console.log(cars);

    return response.status(200).json({
      latestVersion: new Date().getTime(),
      changes: {
        cars,
      },
    });
  }
}

export { SyncPullCarsController };
