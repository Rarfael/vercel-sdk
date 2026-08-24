package core

type VercelError struct {
	IsVercelError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewVercelError(code string, msg string, ctx *Context) *VercelError {
	return &VercelError{
		IsVercelError: true,
		Sdk:              "Vercel",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *VercelError) Error() string {
	return e.Msg
}
