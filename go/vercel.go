package voxgigvercelsdk

import (
	"github.com/voxgig-sdk/vercel-sdk/go/core"
	"github.com/voxgig-sdk/vercel-sdk/go/entity"
	"github.com/voxgig-sdk/vercel-sdk/go/feature"
	_ "github.com/voxgig-sdk/vercel-sdk/go/utility"
)

// Type aliases preserve external API.
type VercelSDK = core.VercelSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type VercelEntity = core.VercelEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type VercelError = core.VercelError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewProjectEntityFunc = func(client *core.VercelSDK, entopts map[string]any) core.VercelEntity {
		return entity.NewProjectEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewVercelSDK = core.NewVercelSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig
var SharedConfig = core.SharedConfig

// No-arg convenience constructors. Go has no default-argument syntax,
// so these aliases let callers write `sdk.New()` / `sdk.Test()`
// instead of `sdk.NewVercelSDK(nil)` / `sdk.TestSDK(nil, nil)`
// for the common no-options case.
func New() *VercelSDK  { return NewVercelSDK(nil) }
func Test() *VercelSDK { return TestSDK(nil, nil) }
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
