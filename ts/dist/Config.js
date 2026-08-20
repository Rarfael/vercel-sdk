"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const TestFeature_1 = require("./feature/test/TestFeature");
const FEATURE_CLASS = {
    test: TestFeature_1.TestFeature,
};
class Config {
    makeFeature(fn) {
        const fc = FEATURE_CLASS[fn];
        const fi = new fc();
        // TODO: errors etc
        return fi;
    }
    main = {
        name: 'Vercel',
    };
    feature = {
        test: {
            "options": {
                "active": false
            }
        },
    };
    options = {
        base: "https://api.vercel.com",
        auth: {
            prefix: 'Bearer',
        },
        headers: {
            "content-type": "application/json"
        },
        entity: {
            project: {},
        }
    };
    entity = {
        "project": {
            "fields": [
                {
                    "name": "abuse",
                    "req": true,
                    "type": "`$OBJECT`",
                    "union": {
                        "branches": 4,
                        "count": 5,
                        "depth": 12
                    }
                },
                {
                    "name": "accountId",
                    "req": true,
                    "type": "`$STRING`"
                },
                {
                    "name": "alias",
                    "req": true,
                    "type": "`$ARRAY`",
                    "union": {
                        "branches": 2,
                        "count": 1,
                        "depth": 5
                    }
                },
                {
                    "name": "analytics",
                    "req": true,
                    "type": "`$OBJECT`"
                },
                {
                    "name": "appliedCve55182Migration",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "autoAssignCustomDomains",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "autoAssignCustomDomainsUpdatedBy",
                    "type": "`$STRING`"
                },
                {
                    "name": "autoExposeSystemEnvs",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "avatar",
                    "type": "`$STRING`"
                },
                {
                    "name": "blobs",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "buildCommand",
                    "type": "`$STRING`"
                },
                {
                    "name": "commandForIgnoringBuildStep",
                    "type": "`$STRING`"
                },
                {
                    "name": "concurrencyBucketName",
                    "type": "`$STRING`"
                },
                {
                    "name": "connectBuildsEnabled",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "connectConfigurationId",
                    "type": "`$STRING`"
                },
                {
                    "name": "connectConfigurations",
                    "type": "`$ARRAY`",
                    "union": {
                        "branches": 2,
                        "count": 1,
                        "depth": 3
                    }
                },
                {
                    "name": "createdAt",
                    "type": "`$NUMBER`"
                },
                {
                    "name": "creator",
                    "type": "`$ANY`",
                    "union": {
                        "branches": 4,
                        "count": 2,
                        "depth": 4
                    }
                },
                {
                    "name": "crons",
                    "req": true,
                    "type": "`$OBJECT`"
                },
                {
                    "name": "customEnvironments",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "customerSupportCodeVisibility",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "dataCache",
                    "req": true,
                    "type": "`$OBJECT`"
                },
                {
                    "name": "defaultResourceConfig",
                    "req": true,
                    "type": "`$OBJECT`"
                },
                {
                    "name": "deploymentExpiration",
                    "req": true,
                    "type": "`$OBJECT`"
                },
                {
                    "name": "deploymentPolicy",
                    "type": "`$OBJECT`",
                    "union": {
                        "branches": 2,
                        "count": 3,
                        "depth": 6
                    }
                },
                {
                    "name": "devCommand",
                    "type": "`$STRING`"
                },
                {
                    "name": "directoryListing",
                    "op": {
                        "update": {
                            "type": "`$BOOLEAN`"
                        }
                    },
                    "req": true,
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "dismissedToasts",
                    "type": "`$ARRAY`",
                    "union": {
                        "branches": 4,
                        "count": 3,
                        "depth": 7
                    }
                },
                {
                    "name": "enableAffectedProjectsDeployments",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "enableExternalRewriteCaching",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "enablePreviewFeedback",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "enableProductionFeedback",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "env",
                    "type": "`$ARRAY`",
                    "union": {
                        "branches": 17,
                        "count": 2,
                        "depth": 3
                    }
                },
                {
                    "name": "environmentVariables",
                    "type": "`$ARRAY`",
                    "union": {
                        "branches": 2,
                        "count": 1,
                        "depth": 3
                    }
                },
                {
                    "name": "expiration",
                    "type": "`$ANY`",
                    "union": {
                        "branches": 2,
                        "count": 1,
                        "depth": 0
                    }
                },
                {
                    "name": "features",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "framework",
                    "type": "`$STRING`"
                },
                {
                    "name": "gitComments",
                    "req": true,
                    "type": "`$OBJECT`"
                },
                {
                    "name": "gitForkProtection",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "gitLFS",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "gitProviderOptions",
                    "req": true,
                    "type": "`$OBJECT`"
                },
                {
                    "name": "gitRepository",
                    "req": true,
                    "type": "`$OBJECT`"
                },
                {
                    "name": "hasActiveBranches",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "hasDeployments",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "id",
                    "req": true,
                    "type": "`$STRING`"
                },
                {
                    "name": "installCommand",
                    "type": "`$STRING`"
                },
                {
                    "name": "integrations",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "internalRoutes",
                    "type": "`$ARRAY`",
                    "union": {
                        "branches": 2,
                        "count": 2,
                        "depth": 6
                    }
                },
                {
                    "name": "ipBuckets",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "jobs",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "lastAliasRequest",
                    "req": true,
                    "type": "`$OBJECT`"
                },
                {
                    "name": "lastRollbackTarget",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "latestDeployments",
                    "type": "`$ARRAY`",
                    "union": {
                        "branches": 2,
                        "count": 1,
                        "depth": 3
                    }
                },
                {
                    "name": "link",
                    "type": "`$STRING`",
                    "union": {
                        "branches": 7,
                        "count": 1,
                        "depth": 0
                    }
                },
                {
                    "name": "live",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "microfrontends",
                    "type": "`$ANY`",
                    "union": {
                        "branches": 3,
                        "count": 1,
                        "depth": 0
                    }
                },
                {
                    "name": "name",
                    "op": {
                        "update": {
                            "type": "`$STRING`"
                        }
                    },
                    "req": true,
                    "type": "`$STRING`"
                },
                {
                    "name": "nodeVersion",
                    "op": {
                        "update": {
                            "type": "`$STRING`"
                        }
                    },
                    "req": true,
                    "type": "`$STRING`"
                },
                {
                    "name": "oidcTokenConfig",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "optionsAllowlist",
                    "req": true,
                    "type": "`$OBJECT`"
                },
                {
                    "name": "outputDirectory",
                    "type": "`$STRING`"
                },
                {
                    "name": "passiveConnectConfigurationId",
                    "type": "`$STRING`"
                },
                {
                    "name": "passport",
                    "req": true,
                    "type": "`$OBJECT`"
                },
                {
                    "name": "passwordProtection",
                    "op": {
                        "update": {
                            "req": true,
                            "type": "`$OBJECT`"
                        }
                    },
                    "type": "`$OBJECT`"
                },
                {
                    "name": "paused",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "permissions",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "previewDeploymentSuffix",
                    "type": "`$STRING`"
                },
                {
                    "name": "previewDeploymentsDisabled",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "productionDeploymentsFastLane",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "protectedSourcemaps",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "protectionBypass",
                    "type": "`$OBJECT`",
                    "union": {
                        "branches": 2,
                        "count": 1,
                        "depth": 1
                    }
                },
                {
                    "name": "protectionConfig",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "publicSource",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "resourceConfig",
                    "op": {
                        "create": {
                            "type": "`$OBJECT`"
                        },
                        "update": {
                            "type": "`$OBJECT`"
                        }
                    },
                    "req": true,
                    "type": "`$OBJECT`"
                },
                {
                    "name": "rollbackDescription",
                    "req": true,
                    "type": "`$OBJECT`"
                },
                {
                    "name": "rollingRelease",
                    "req": true,
                    "type": "`$OBJECT`"
                },
                {
                    "name": "rootDirectory",
                    "type": "`$STRING`"
                },
                {
                    "name": "sandbox",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "security",
                    "type": "`$OBJECT`",
                    "union": {
                        "branches": 2,
                        "count": 2,
                        "depth": 5
                    }
                },
                {
                    "name": "serverlessFunctionRegion",
                    "type": "`$STRING`"
                },
                {
                    "name": "serverlessFunctionZeroConfigFailover",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "services",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "skewProtectionAllowedDomains",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "skewProtectionBoundaryAt",
                    "type": "`$NUMBER`"
                },
                {
                    "name": "skewProtectionMaxAge",
                    "type": "`$NUMBER`"
                },
                {
                    "name": "skipGitConnectDuringLink",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "sourceFilesOutsideRootDirectory",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "speedInsights",
                    "req": true,
                    "type": "`$OBJECT`"
                },
                {
                    "name": "ssoProtection",
                    "req": true,
                    "type": "`$OBJECT`"
                },
                {
                    "name": "staticIps",
                    "req": true,
                    "type": "`$OBJECT`"
                },
                {
                    "name": "targets",
                    "type": "`$OBJECT`",
                    "union": {
                        "branches": 2,
                        "count": 1,
                        "depth": 3
                    }
                },
                {
                    "name": "tier",
                    "type": "`$STRING`"
                },
                {
                    "name": "tracing",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "transferCompletedAt",
                    "type": "`$NUMBER`"
                },
                {
                    "name": "transferStartedAt",
                    "type": "`$NUMBER`"
                },
                {
                    "name": "transferToAccountId",
                    "type": "`$STRING`"
                },
                {
                    "name": "transferredFromAccountId",
                    "type": "`$STRING`"
                },
                {
                    "name": "trustedIps",
                    "op": {
                        "update": {
                            "req": true,
                            "type": "`$OBJECT`"
                        }
                    },
                    "type": "`$ANY`",
                    "union": {
                        "branches": 2,
                        "count": 1,
                        "depth": 0
                    }
                },
                {
                    "name": "trustedSources",
                    "type": "`$OBJECT`",
                    "union": {
                        "branches": 2,
                        "count": 3,
                        "depth": 8
                    }
                },
                {
                    "name": "updatedAt",
                    "type": "`$NUMBER`"
                },
                {
                    "name": "usageStatus",
                    "req": true,
                    "type": "`$OBJECT`"
                },
                {
                    "name": "v0",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "v0Created",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "webAnalytics",
                    "req": true,
                    "type": "`$OBJECT`"
                }
            ],
            "name": "project",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "args": {
                                "query": [
                                    {
                                        "example": "my-team-url-slug",
                                        "kind": "query",
                                        "name": "slug",
                                        "orig": "slug",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "team_1a2b3c4d5e6f7g8h9i0j1k2l",
                                        "kind": "query",
                                        "name": "team_id",
                                        "orig": "team_id",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "POST",
                            "orig": "/v11/projects",
                            "parts": [
                                "v11",
                                "projects"
                            ],
                            "select": {
                                "exist": [
                                    "slug",
                                    "team_id"
                                ]
                            },
                            "transform": {
                                "req": {
                                    "buildCommand": "`reqdata.build_command`",
                                    "commandForIgnoringBuildStep": "`reqdata.command_for_ignoring_build_step`",
                                    "devCommand": "`reqdata.dev_command`",
                                    "enableAffectedProjectsDeployments": "`reqdata.enable_affected_projects_deployment`",
                                    "enablePreviewFeedback": "`reqdata.enable_preview_feedback`",
                                    "enableProductionFeedback": "`reqdata.enable_production_feedback`",
                                    "environmentVariables": "`reqdata.environment_variable`",
                                    "framework": "`reqdata.framework`",
                                    "gitRepository": "`reqdata.git_repository`",
                                    "installCommand": "`reqdata.install_command`",
                                    "name": "`reqdata.name`",
                                    "oidcTokenConfig": "`reqdata.oidc_token_config`",
                                    "outputDirectory": "`reqdata.output_directory`",
                                    "previewDeploymentSuffix": "`reqdata.preview_deployment_suffix`",
                                    "previewDeploymentsDisabled": "`reqdata.preview_deployments_disabled`",
                                    "publicSource": "`reqdata.public_source`",
                                    "resourceConfig": "`reqdata.resource_config`",
                                    "rootDirectory": "`reqdata.root_directory`",
                                    "serverlessFunctionRegion": "`reqdata.serverless_function_region`",
                                    "serverlessFunctionZeroConfigFailover": "`reqdata.serverless_function_zero_config_failover`",
                                    "skipGitConnectDuringLink": "`reqdata.skip_git_connect_during_link`",
                                    "ssoProtection": "`reqdata.sso_protection`"
                                },
                                "res": "`body`"
                            }
                        }
                    ]
                },
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "args": {
                                "query": [
                                    {
                                        "example": "default,enhanced",
                                        "kind": "query",
                                        "name": "build_machine_type",
                                        "orig": "build_machine_type",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "SKIP_NAMESPACE_QUEUE",
                                        "kind": "query",
                                        "name": "build_queue_configuration",
                                        "orig": "build_queue_configuration",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "deprecated",
                                        "orig": "deprecated",
                                        "type": "`$BOOLEAN`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "edge_config_id",
                                        "orig": "edge_config_id",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "edge_config_token_id",
                                        "orig": "edge_config_token_id",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "1",
                                        "kind": "query",
                                        "name": "elastic_concurrency_enabled",
                                        "orig": "elastic_concurrency_enabled",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "exclude_repo",
                                        "orig": "exclude_repo",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "from",
                                        "orig": "from",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "1",
                                        "kind": "query",
                                        "name": "git_fork_protection",
                                        "orig": "git_fork_protection",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "limit",
                                        "orig": "limit",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "repo",
                                        "orig": "repo",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "repo_id",
                                        "orig": "repo_id",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "https://github.com/vercel/next.js",
                                        "kind": "query",
                                        "name": "repo_url",
                                        "orig": "repo_url",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "search",
                                        "orig": "search",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "my-team-url-slug",
                                        "kind": "query",
                                        "name": "slug",
                                        "orig": "slug",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "1",
                                        "kind": "query",
                                        "name": "static_ips_enabled",
                                        "orig": "static_ips_enabled",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "team_1a2b3c4d5e6f7g8h9i0j1k2l",
                                        "kind": "query",
                                        "name": "team_id",
                                        "orig": "team_id",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/v10/projects",
                            "parts": [
                                "v10",
                                "projects"
                            ],
                            "select": {
                                "exist": [
                                    "build_machine_type",
                                    "build_queue_configuration",
                                    "deprecated",
                                    "edge_config_id",
                                    "edge_config_token_id",
                                    "elastic_concurrency_enabled",
                                    "exclude_repo",
                                    "from",
                                    "git_fork_protection",
                                    "limit",
                                    "repo",
                                    "repo_id",
                                    "repo_url",
                                    "search",
                                    "slug",
                                    "static_ips_enabled",
                                    "team_id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        },
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "prj_12HKQaOmR5t5Uy6vdcQsNIiZgHGB",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id_or_name",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "example": "my-team-url-slug",
                                        "kind": "query",
                                        "name": "slug",
                                        "orig": "slug",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "team_1a2b3c4d5e6f7g8h9i0j1k2l",
                                        "kind": "query",
                                        "name": "team_id",
                                        "orig": "team_id",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/v9/projects/{idOrName}",
                            "parts": [
                                "v9",
                                "projects",
                                "{id}"
                            ],
                            "rename": {
                                "param": {
                                    "idOrName": "id"
                                }
                            },
                            "select": {
                                "exist": [
                                    "id",
                                    "slug",
                                    "team_id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        }
                    ]
                },
                "remove": {
                    "input": "data",
                    "name": "remove",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "prj_12HKQaOmR5t5Uy6vdcQsNIiZgHGB",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id_or_name",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "example": "my-team-url-slug",
                                        "kind": "query",
                                        "name": "slug",
                                        "orig": "slug",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "team_1a2b3c4d5e6f7g8h9i0j1k2l",
                                        "kind": "query",
                                        "name": "team_id",
                                        "orig": "team_id",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "DELETE",
                            "orig": "/v9/projects/{idOrName}",
                            "parts": [
                                "v9",
                                "projects",
                                "{id}"
                            ],
                            "rename": {
                                "param": {
                                    "idOrName": "id"
                                }
                            },
                            "select": {
                                "exist": [
                                    "id",
                                    "slug",
                                    "team_id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        }
                    ]
                },
                "update": {
                    "input": "data",
                    "name": "update",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "prj_12HKQaOmR5t5Uy6vdcQsNIiZgHGB",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id_or_name",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "example": "my-team-url-slug",
                                        "kind": "query",
                                        "name": "slug",
                                        "orig": "slug",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "team_1a2b3c4d5e6f7g8h9i0j1k2l",
                                        "kind": "query",
                                        "name": "team_id",
                                        "orig": "team_id",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "PATCH",
                            "orig": "/v9/projects/{idOrName}",
                            "parts": [
                                "v9",
                                "projects",
                                "{id}"
                            ],
                            "rename": {
                                "param": {
                                    "idOrName": "id"
                                }
                            },
                            "select": {
                                "exist": [
                                    "id",
                                    "slug",
                                    "team_id"
                                ]
                            },
                            "transform": {
                                "req": {
                                    "autoAssignCustomDomains": "`reqdata.auto_assign_custom_domain`",
                                    "autoAssignCustomDomainsUpdatedBy": "`reqdata.auto_assign_custom_domains_updated_by`",
                                    "autoExposeSystemEnvs": "`reqdata.auto_expose_system_env`",
                                    "buildCommand": "`reqdata.build_command`",
                                    "commandForIgnoringBuildStep": "`reqdata.command_for_ignoring_build_step`",
                                    "connectConfigurations": "`reqdata.connect_configuration`",
                                    "customerSupportCodeVisibility": "`reqdata.customer_support_code_visibility`",
                                    "deploymentPolicy": "`reqdata.deployment_policy`",
                                    "devCommand": "`reqdata.dev_command`",
                                    "directoryListing": "`reqdata.directory_listing`",
                                    "dismissedToasts": "`reqdata.dismissed_toast`",
                                    "enableAffectedProjectsDeployments": "`reqdata.enable_affected_projects_deployment`",
                                    "enableExternalRewriteCaching": "`reqdata.enable_external_rewrite_caching`",
                                    "enablePreviewFeedback": "`reqdata.enable_preview_feedback`",
                                    "enableProductionFeedback": "`reqdata.enable_production_feedback`",
                                    "framework": "`reqdata.framework`",
                                    "gitForkProtection": "`reqdata.git_fork_protection`",
                                    "gitLFS": "`reqdata.git_lf`",
                                    "installCommand": "`reqdata.install_command`",
                                    "name": "`reqdata.name`",
                                    "nodeVersion": "`reqdata.node_version`",
                                    "oidcTokenConfig": "`reqdata.oidc_token_config`",
                                    "optionsAllowlist": "`reqdata.options_allowlist`",
                                    "outputDirectory": "`reqdata.output_directory`",
                                    "passport": "`reqdata.passport`",
                                    "passwordProtection": "`reqdata.password_protection`",
                                    "previewDeploymentSuffix": "`reqdata.preview_deployment_suffix`",
                                    "previewDeploymentsDisabled": "`reqdata.preview_deployments_disabled`",
                                    "protectedSourcemaps": "`reqdata.protected_sourcemap`",
                                    "publicSource": "`reqdata.public_source`",
                                    "resourceConfig": "`reqdata.resource_config`",
                                    "rootDirectory": "`reqdata.root_directory`",
                                    "serverlessFunctionRegion": "`reqdata.serverless_function_region`",
                                    "serverlessFunctionZeroConfigFailover": "`reqdata.serverless_function_zero_config_failover`",
                                    "skewProtectionAllowedDomains": "`reqdata.skew_protection_allowed_domain`",
                                    "skewProtectionBoundaryAt": "`reqdata.skew_protection_boundary_at`",
                                    "skewProtectionMaxAge": "`reqdata.skew_protection_max_age`",
                                    "skipGitConnectDuringLink": "`reqdata.skip_git_connect_during_link`",
                                    "sourceFilesOutsideRootDirectory": "`reqdata.source_files_outside_root_directory`",
                                    "ssoProtection": "`reqdata.sso_protection`",
                                    "staticIps": "`reqdata.static_ip`",
                                    "tracing": "`reqdata.tracing`",
                                    "trustedIps": "`reqdata.trusted_ip`",
                                    "trustedSources": "`reqdata.trusted_source`"
                                },
                                "res": "`body`"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        }
    };
}
const config = new Config();
exports.config = config;
//# sourceMappingURL=Config.js.map