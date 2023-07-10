import { burgersService } from "../services/BurgerService.js";
import BaseController from "../utils/BaseController.js";

export class BurgerController extends BaseController {
  constructor() {
    super('api/burgers')
    this.router
      .get('', this.getBurgers)
      .post('', this.createBurger)
      .delete('/:burgerId', this.removeBurger)
  }

  async getBurgers(req, res, next) {
    try {
      // res.send({ message: 'You made a request' })
      const burgers = await burgersService.getBurgers()
      res.send(burgers)
    } catch (error) {
      next(error)
    }
  }
  async createBurger(req, res, next) {
    try {
      const burgerData = req.body
      const burger = await burgersService.createBurger(burgerData)
      res.send(burger)

    } catch (error) {
      next(error)
    }
  }
  async removeBurger(req, res, next) {
    try {
      const burgerId = req.params.burgerId
      await burgersService.removeBurger(burgerId)
      res.send('burger removed')
    } catch (error) {
      next(error)
    }
  }
}