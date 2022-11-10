const { login } = require("./login.controller");
const User = require("../models/user.model");

describe("Login Controller", () => {
  describe("login", () => {
    let req;
    let res;

    beforeEach(() => {
      req = {
        body: {
          email: "",
          password: "",
        },
      };

      res = {
        status: jest.fn().mockReturnThis(),
        send: () => {},
        json: () => {},
      };
    });

    afterEach(() => {
      jest.restoreAllMocks();
    });

    it("should return status 400 when password is wrong", async () => {
      // Setup
      req.body.password = "1234";
      jest.spyOn(User, "findOne").mockResolvedValue(null);
      // Run
      await login(req, res);
      // Assertion
      expect(res.status).toHaveBeenCalledWith(400);
    });
  });

  describe("register", () => {});
});
