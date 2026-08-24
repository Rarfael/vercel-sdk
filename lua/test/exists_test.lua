-- Vercel SDK exists test

local sdk = require("vercel_sdk")

describe("VercelSDK", function()
  it("should create test SDK", function()
    local testsdk = sdk.test(nil, nil)
    assert.is_not_nil(testsdk)
  end)
end)
