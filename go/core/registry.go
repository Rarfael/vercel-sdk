package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewProjectEntityFunc func(client *VercelSDK, entopts map[string]any) VercelEntity

