import { expect } from "chai"
import supertest from "supertest"
import UserHelper from "../../helpers/user.helper"

const userHelper = new UserHelper()

describe("Succesfully login", () => {
  before(async () => {
    await userHelper.login(`${process.env.EMAIL}`, `${process.env.PASSWORD}`)
    process.env.TOKEN = userHelper.response.body.payload.token
    console.log(userHelper.response.body)
    process.env.USERID = userHelper.response.body.payload.user._id
  })
  it("Checking that response status code is 200", () => {
    expect(userHelper.response.statusCode).to.eq(200)
  })
  it("Checking that response includes message", () => {
    expect(userHelper.response.body.message).to.eq("Auth success")
  })
  it("Checking that response includes TOKEN", () => {
    expect(userHelper.response.body.payload.token).to.be.an("string")
  })
  it("Checking that response includes USERID", () => {
    expect(userHelper.response.body.payload.user._id).to.be.an("string")
  })
})
