import { burgers } from "../db/FakeDB.js"
import { BadRequest } from "../utils/Errors.js"

class BurgersService {

  getBurgers() {
    return burgers
  }
  createBurger(burgerData) {
    burgerData.id = burgers.length + 1

    burgers.push(burgerData)

    return burgerData
  }
  removeBurger(burgerId) {
    const foundIndex = burgers.findIndex(burger => burger.id == burgerId)
    if (foundIndex == -1) {
      throw new BadRequest(`${burgerId} was not a valid Id`)
    }
    burgers.splice(foundIndex, 1)
  }
}
export const burgersService = new BurgersService()