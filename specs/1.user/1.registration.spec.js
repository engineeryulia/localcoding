// import { expect } from "chai"
// import supertest from "supertest"
// import UserHelper from "../../helpers/user.helper"

// const userHelper = new UserHelper()
// let firstName = "Lora"
// let lastName = "Lord"
// let countryName = "United States"
// let phone = "12345678901"
// let agreement = true
// let hostId = null

// describe("Registration a new user", () => {
//   before(async () => {
//     await userHelper.register(firstName, lastName, countryName, phone, `${process.env.EMAIL}`, `${process.env.PASSWORD}`, agreement, hostId)
//     console.log(userHelper.response.body)
//   })

//   it("Checking that response status code is 409", () => {
//     expect(userHelper.response.statusCode).to.eq(409)
//   })
//   it("Checking that response include message", () => {
//     expect(userHelper.response.body.message).not.to.be.undefined
//   })
// })
