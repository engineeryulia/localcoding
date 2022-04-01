import { expect } from "chai"
import supertest from "supertest"
import UserHelper from "../../helpers/user.helper"

const userHelper = new UserHelper()

describe("Succesfully get user profile by id", () => {
  before(async () => {
    await userHelper.login(`${process.env.EMAIL}`, `${process.env.PASSWORD}`)
    process.env.USERID = userHelper.response.body.payload.user._id

    await userHelper.getUserProfileById(`${process.env.USERID}`)
    console.log(userHelper.response.body)
  })
  it("Checking that response status code is 200", () => {
    expect(userHelper.response.statusCode).to.eq(200)
  })
  it("Checking that response includes USERID", () => {
    expect(userHelper.response.body._id).to.eq.a("string")
  })
  it("Checking that roles is a string", () => {
    expect(userHelper.response.body.roles).to.eq.a("string")
  })
})
