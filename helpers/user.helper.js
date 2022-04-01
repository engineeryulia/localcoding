import supertest from "supertest"
import "dotenv/config"
class UserHelper {
  constructor() {
    this.response = null
  }

  async register(firstName, lastName, countryName, phone, email, password) {
    await supertest(process.env.BASE_URL)
      .post("user")
      .send({ firstName, lastName, countryName, phone, email, password, agreement: true, hostId: null })
      .then((res) => {
        this.response = res
      })
  }
  async login(email, password) {
    await supertest(process.env.BASE_URL)
      .post("user/login")
      .send({ email, password })
      .then((res) => {
        this.response = res
      })
  }
  async getUserProfileById(USERID) {
    await supertest(process.env.BASE_URL)
      .post(`user/${USERID}`)
      .set("Authorization", process.env.TOKEN)
      .then((res) => {
        this.response = res
      })
  }
}

//Export the Class
export default UserHelper
