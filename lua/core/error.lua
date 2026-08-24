-- Vercel SDK error

local VercelError = {}
VercelError.__index = VercelError


function VercelError.new(code, msg, ctx)
  local self = setmetatable({}, VercelError)
  self.is_sdk_error = true
  self.sdk = "Vercel"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function VercelError:error()
  return self.msg
end


function VercelError:__tostring()
  return self.msg
end


return VercelError
