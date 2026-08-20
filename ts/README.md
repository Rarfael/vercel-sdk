# Vercel TypeScript SDK



The TypeScript SDK for the Vercel API — a type-safe, entity-oriented client with full async/await support.

The API is exposed as capitalised, semantic **Entities** — e.g.
`client.Project()` — each with a small set of operations (`load`, `create`, `update`, `remove`)
instead of raw URL paths and query parameters. This keeps the surface
predictable and low-friction for both humans and AI agents.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to npm. Install it from the GitHub
release tag (`ts/vX.Y.Z`):

- Releases: [https://github.com/voxgig-sdk/vercel-sdk/releases](https://github.com/voxgig-sdk/vercel-sdk/releases)


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```ts
import { VercelSDK } from '@voxgig-sdk/vercel'

const client = new VercelSDK({
  apikey: process.env.VERCEL_APIKEY,
})
```

### 3. Load a project

`load()` returns the entity directly and throws on failure:

```ts
try {
  const project = await client.Project().load({ id: 'example_id' })
  console.log(project)
} catch (err) {
  console.error('load failed:', err)
}
```

### 4. Create, update, and remove

```ts
// Create — returns the created Project ENTITY (.data() for the record)
const created = await client.Project().create({
  abuse: {},
  accountId: 'example_accountId',
  alias: [],
  analytics: {},
  crons: {},
  dataCache: {},
  defaultResourceConfig: {},
  deploymentExpiration: {},
  directoryListing: true,
  gitComments: {},
  gitProviderOptions: {},
  gitRepository: {},
  id: 'example_id',
  lastAliasRequest: {},
  name: 'example_name',
  nodeVersion: 'example_nodeVersion',
  optionsAllowlist: {},
  passport: {},
  resourceConfig: {},
  rollbackDescription: {},
  rollingRelease: {},
  speedInsights: {},
  ssoProtection: {},
  staticIps: {},
  usageStatus: {},
  webAnalytics: {},
})

// Update — the id comes off the returned entity's data()
const updated = await client.Project().update({
  id: created.data().id!,
  abuse: {},
  accountId: 'example_accountId',
})

// Remove
await client.Project().remove({
  id: created.data().id!,
})
```


## Error handling

Entity operations reject on failure, so wrap them in `try` / `catch`:

```ts
try {
  const project = await client.Project().load({ id: "example_id" })
  console.log(project)
} catch (err) {
  console.error('load failed:', err)
}
```

The low-level `direct()` method does **not** throw — it returns the
value or an `Error`, so check the result before using it:

```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example_id' },
})

if (result instanceof Error) {
  throw result
}
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})

if (result instanceof Error) {
  throw result
}
if (result.ok) {
  console.log(result.status)  // 200
  console.log(result.data)    // response body
}
```

### Prepare a request without sending it

```ts
const fetchdef = await client.prepare({
  path: '/api/resource/{id}',
  method: 'DELETE',
  params: { id: 'example' },
})

// Inspect before sending
console.log(fetchdef.url)
console.log(fetchdef.method)
console.log(fetchdef.headers)
```

### Use test mode

Create a mock client for unit testing — no server required:

```ts
const client = VercelSDK.test()

const project = await client.Project().load({ id: 'test01' })
// project is the entity, populated with mock response data
// — call project.data() for the record itself
console.log(project)
```

You can also use the instance method:

```ts
const client = new VercelSDK({ apikey: '...' })
const testClient = client.tester()
```

### Retain entity state across calls

Entity instances remember their last match and data:

```ts
const entity = client.Project()

// First call runs the operation and stores its result
await entity.load({ id: 'example' })

// Subsequent calls reuse the stored state
const data = entity.data()
console.log(data.id)
```

### Add custom middleware

Pass features via the `extend` option:

```ts
const logger = {
  hooks: {
    PreRequest: (ctx: any) => {
      console.log('Requesting:', ctx.spec.method, ctx.spec.path)
    },
    PreResponse: (ctx: any) => {
      console.log('Status:', ctx.out.request?.status)
    },
  },
}

const client = new VercelSDK({
  apikey: '...',
  extend: [logger],
})
```

### Run live tests

Create a `.env.local` file at the project root:

```
VERCEL_TEST_LIVE=TRUE
VERCEL_APIKEY=<your-key>
```

Then run:

```bash
cd ts && npm test
```


## Reference

### VercelSDK

#### Constructor

```ts
new VercelSDK(options?: {
  apikey?: string
  base?: string
  prefix?: string
  suffix?: string
  feature?: Record<string, { active: boolean }>
  extend?: Feature[]
})
```

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `string` | API key for authentication. |
| `base` | `string` | Base URL of the API server. |
| `prefix` | `string` | URL path prefix prepended to all requests. |
| `suffix` | `string` | URL path suffix appended to all requests. |
| `feature` | `object` | Feature activation flags (e.g. `{ test: { active: true } }`). |
| `extend` | `Feature[]` | Additional feature instances to load. |

#### Methods

| Method | Returns | Description |
| --- | --- | --- |
| `options()` | `object` | Deep copy of current SDK options. |
| `utility()` | `Utility` | Deep copy of the SDK utility object. |
| `prepare(fetchargs?)` | `Promise<FetchDef>` | Build an HTTP request definition without sending it. |
| `direct(fetchargs?)` | `Promise<DirectResult>` | Build and send an HTTP request. |
| `Project(data?)` | `ProjectEntity` | Create a Project entity instance. |
| `tester(testopts?, sdkopts?)` | `VercelSDK` | Create a test-mode client instance. |

#### Static methods

| Method | Returns | Description |
| --- | --- | --- |
| `VercelSDK.test(testopts?, sdkopts?)` | `VercelSDK` | Create a test-mode client. |

### Entity interface

All entities share the same interface.

#### Methods

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `load(reqmatch?, ctrl?): Promise<Entity>` | Load a single entity by match criteria. |
| `create` | `create(reqdata?, ctrl?): Promise<Entity>` | Create a new entity. |
| `update` | `update(reqdata?, ctrl?): Promise<Entity>` | Update an existing entity. |
| `remove` | `remove(reqmatch?, ctrl?): Promise<void>` | Remove an entity. |
| `data` | `data(data?: Partial<Entity>): Entity` | Get or set entity data. |
| `match` | `match(match?: Partial<Entity>): Partial<Entity>` | Get or set entity match criteria. |
| `make` | `make(): Entity` | Create a new instance with the same options. |
| `client` | `client(): VercelSDK` | Return the parent SDK client. |
| `entopts` | `entopts(): object` | Return a copy of the entity options. |

#### Return values

Entity operations resolve to the entity data directly — there is no
result envelope:

- `load`, `create` and `update` resolve to a single entity object.
- `remove` resolves to `void`.

On a failed request these methods **throw**, so wrap calls in
`try`/`catch` to handle errors. Only `direct()` returns the result
envelope described below.

### DirectResult shape

The `direct()` method returns:

```ts
{
  ok: boolean
  status: number
  headers: object
  data: any
}
```

On error, `ok` is `false` and an `err` property contains the error.

### FetchDef shape

The `prepare()` method returns:

```ts
{
  url: string
  method: string
  headers: Record<string, string>
  body?: any
}
```

### Entities

#### Project

| Field | Description |
| --- | --- |
| `abuse` |  |
| `accountId` |  |
| `alias` |  |
| `analytics` |  |
| `appliedCve55182Migration` |  |
| `autoAssignCustomDomains` |  |
| `autoAssignCustomDomainsUpdatedBy` |  |
| `autoExposeSystemEnvs` |  |
| `avatar` |  |
| `blobs` |  |
| `buildCommand` |  |
| `commandForIgnoringBuildStep` |  |
| `concurrencyBucketName` |  |
| `connectBuildsEnabled` |  |
| `connectConfigurationId` |  |
| `connectConfigurations` |  |
| `createdAt` |  |
| `creator` |  |
| `crons` |  |
| `customEnvironments` |  |
| `customerSupportCodeVisibility` |  |
| `dataCache` |  |
| `defaultResourceConfig` |  |
| `deploymentExpiration` |  |
| `deploymentPolicy` |  |
| `devCommand` |  |
| `directoryListing` |  |
| `dismissedToasts` |  |
| `enableAffectedProjectsDeployments` |  |
| `enableExternalRewriteCaching` |  |
| `enablePreviewFeedback` |  |
| `enableProductionFeedback` |  |
| `env` |  |
| `environmentVariables` |  |
| `expiration` |  |
| `features` |  |
| `framework` |  |
| `gitComments` |  |
| `gitForkProtection` |  |
| `gitLFS` |  |
| `gitProviderOptions` |  |
| `gitRepository` |  |
| `hasActiveBranches` |  |
| `hasDeployments` |  |
| `id` |  |
| `installCommand` |  |
| `integrations` |  |
| `internalRoutes` |  |
| `ipBuckets` |  |
| `jobs` |  |
| `lastAliasRequest` |  |
| `lastRollbackTarget` |  |
| `latestDeployments` |  |
| `link` |  |
| `live` |  |
| `microfrontends` |  |
| `name` |  |
| `nodeVersion` |  |
| `oidcTokenConfig` |  |
| `optionsAllowlist` |  |
| `outputDirectory` |  |
| `passiveConnectConfigurationId` |  |
| `passport` |  |
| `passwordProtection` |  |
| `paused` |  |
| `permissions` |  |
| `previewDeploymentSuffix` |  |
| `previewDeploymentsDisabled` |  |
| `productionDeploymentsFastLane` |  |
| `protectedSourcemaps` |  |
| `protectionBypass` |  |
| `protectionConfig` |  |
| `publicSource` |  |
| `resourceConfig` |  |
| `rollbackDescription` |  |
| `rollingRelease` |  |
| `rootDirectory` |  |
| `sandbox` |  |
| `security` |  |
| `serverlessFunctionRegion` |  |
| `serverlessFunctionZeroConfigFailover` |  |
| `services` |  |
| `skewProtectionAllowedDomains` |  |
| `skewProtectionBoundaryAt` |  |
| `skewProtectionMaxAge` |  |
| `skipGitConnectDuringLink` |  |
| `sourceFilesOutsideRootDirectory` |  |
| `speedInsights` |  |
| `ssoProtection` |  |
| `staticIps` |  |
| `targets` |  |
| `tier` |  |
| `tracing` |  |
| `transferCompletedAt` |  |
| `transferStartedAt` |  |
| `transferToAccountId` |  |
| `transferredFromAccountId` |  |
| `trustedIps` |  |
| `trustedSources` |  |
| `updatedAt` |  |
| `usageStatus` |  |
| `v0` |  |
| `v0Created` |  |
| `webAnalytics` |  |

Operations: create, load, remove, update.

API path: `/v11/projects`



## Entities


### Project

Create an instance: `const project = client.Project()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `abuse` | `Record<string, any>` |  |
| `accountId` | `string` |  |
| `alias` | `any[]` |  |
| `analytics` | `Record<string, any>` |  |
| `appliedCve55182Migration` | `boolean` |  |
| `autoAssignCustomDomains` | `boolean` |  |
| `autoAssignCustomDomainsUpdatedBy` | `string` |  |
| `autoExposeSystemEnvs` | `boolean` |  |
| `avatar` | `string` |  |
| `blobs` | `Record<string, any>` |  |
| `buildCommand` | `string` |  |
| `commandForIgnoringBuildStep` | `string` |  |
| `concurrencyBucketName` | `string` |  |
| `connectBuildsEnabled` | `boolean` |  |
| `connectConfigurationId` | `string` |  |
| `connectConfigurations` | `any[]` |  |
| `createdAt` | `number` |  |
| `creator` | `any` |  |
| `crons` | `Record<string, any>` |  |
| `customEnvironments` | `any[]` |  |
| `customerSupportCodeVisibility` | `boolean` |  |
| `dataCache` | `Record<string, any>` |  |
| `defaultResourceConfig` | `Record<string, any>` |  |
| `deploymentExpiration` | `Record<string, any>` |  |
| `deploymentPolicy` | `Record<string, any>` |  |
| `devCommand` | `string` |  |
| `directoryListing` | `boolean` |  |
| `dismissedToasts` | `any[]` |  |
| `enableAffectedProjectsDeployments` | `boolean` |  |
| `enableExternalRewriteCaching` | `boolean` |  |
| `enablePreviewFeedback` | `boolean` |  |
| `enableProductionFeedback` | `boolean` |  |
| `env` | `any[]` |  |
| `environmentVariables` | `any[]` |  |
| `expiration` | `any` |  |
| `features` | `Record<string, any>` |  |
| `framework` | `string` |  |
| `gitComments` | `Record<string, any>` |  |
| `gitForkProtection` | `boolean` |  |
| `gitLFS` | `boolean` |  |
| `gitProviderOptions` | `Record<string, any>` |  |
| `gitRepository` | `Record<string, any>` |  |
| `hasActiveBranches` | `boolean` |  |
| `hasDeployments` | `boolean` |  |
| `id` | `string` |  |
| `installCommand` | `string` |  |
| `integrations` | `any[]` |  |
| `internalRoutes` | `any[]` |  |
| `ipBuckets` | `any[]` |  |
| `jobs` | `Record<string, any>` |  |
| `lastAliasRequest` | `Record<string, any>` |  |
| `lastRollbackTarget` | `Record<string, any>` |  |
| `latestDeployments` | `any[]` |  |
| `link` | `string` |  |
| `live` | `boolean` |  |
| `microfrontends` | `any` |  |
| `name` | `string` |  |
| `nodeVersion` | `string` |  |
| `oidcTokenConfig` | `Record<string, any>` |  |
| `optionsAllowlist` | `Record<string, any>` |  |
| `outputDirectory` | `string` |  |
| `passiveConnectConfigurationId` | `string` |  |
| `passport` | `Record<string, any>` |  |
| `passwordProtection` | `Record<string, any>` |  |
| `paused` | `boolean` |  |
| `permissions` | `Record<string, any>` |  |
| `previewDeploymentSuffix` | `string` |  |
| `previewDeploymentsDisabled` | `boolean` |  |
| `productionDeploymentsFastLane` | `boolean` |  |
| `protectedSourcemaps` | `boolean` |  |
| `protectionBypass` | `Record<string, any>` |  |
| `protectionConfig` | `Record<string, any>` |  |
| `publicSource` | `boolean` |  |
| `resourceConfig` | `Record<string, any>` |  |
| `rollbackDescription` | `Record<string, any>` |  |
| `rollingRelease` | `Record<string, any>` |  |
| `rootDirectory` | `string` |  |
| `sandbox` | `Record<string, any>` |  |
| `security` | `Record<string, any>` |  |
| `serverlessFunctionRegion` | `string` |  |
| `serverlessFunctionZeroConfigFailover` | `boolean` |  |
| `services` | `any[]` |  |
| `skewProtectionAllowedDomains` | `any[]` |  |
| `skewProtectionBoundaryAt` | `number` |  |
| `skewProtectionMaxAge` | `number` |  |
| `skipGitConnectDuringLink` | `boolean` |  |
| `sourceFilesOutsideRootDirectory` | `boolean` |  |
| `speedInsights` | `Record<string, any>` |  |
| `ssoProtection` | `Record<string, any>` |  |
| `staticIps` | `Record<string, any>` |  |
| `targets` | `Record<string, any>` |  |
| `tier` | `string` |  |
| `tracing` | `Record<string, any>` |  |
| `transferCompletedAt` | `number` |  |
| `transferStartedAt` | `number` |  |
| `transferToAccountId` | `string` |  |
| `transferredFromAccountId` | `string` |  |
| `trustedIps` | `any` |  |
| `trustedSources` | `Record<string, any>` |  |
| `updatedAt` | `number` |  |
| `usageStatus` | `Record<string, any>` |  |
| `v0` | `boolean` |  |
| `v0Created` | `boolean` |  |
| `webAnalytics` | `Record<string, any>` |  |

#### Example: Load

```ts
const project = await client.Project().load({ id: 'project_id' })
```

#### Example: Create

```ts
const project = await client.Project().create({
  abuse: {},
  accountId: 'example_accountId',
  alias: [],
  analytics: {},
  crons: {},
  dataCache: {},
  defaultResourceConfig: {},
  deploymentExpiration: {},
  directoryListing: true,
  gitComments: {},
  gitProviderOptions: {},
  gitRepository: {},
  id: 'example_id',
  lastAliasRequest: {},
  name: 'example_name',
  nodeVersion: 'example_nodeVersion',
  optionsAllowlist: {},
  passport: {},
  resourceConfig: {},
  rollbackDescription: {},
  rollingRelease: {},
  speedInsights: {},
  ssoProtection: {},
  staticIps: {},
  usageStatus: {},
  webAnalytics: {},
})
```


## Open types

6 fields are carried as open values rather than typed structures.
This follows from the API definition, not from a gap in this SDK: the
definition describes them with untagged unions —
`oneOf`/`anyOf` branches with no `discriminator` — so it never states which
variant a given value is. Nothing can select a branch reliably, so the SDK
passes the value through unchanged rather than assert a shape the API does not
guarantee.

| Entity | Field | Variants | Nesting |
| --- | --- | --- | --- |
| `project` | `env` | 17 | 3 levels |
| `project` | `link` | 7 | 0 levels |
| `project` | `abuse` | 4 | 12 levels |
| `project` | `creator` | 4 | 4 levels |
| `project` | `dismissedToasts` | 4 | 7 levels |
| `project` | `microfrontends` | 3 | 0 levels |

These values round-trip unchanged — read them, modify them, send them back. If
the API adds a `discriminator` to the definition, regenerating will type them.
Every other field is typed normally.

## Advanced

> The sections above cover everyday use. The material below explains the
> SDK's internals — useful when extending it with custom features, but not
> needed for normal use.

### The operation pipeline

Every entity operation follows a six-stage pipeline. Each stage fires a
feature hook before executing:

```
PrePoint → PreSpec → PreRequest → PreResponse → PreResult → PreDone
```

- **PrePoint**: Resolves which API endpoint to call based on the
  operation name and entity configuration.
- **PreSpec**: Builds the HTTP spec — URL, method, headers, body —
  from the resolved point and the caller's parameters.
- **PreRequest**: Sends the HTTP request. Features can intercept here
  to replace the transport (as TestFeature does with mocks).
- **PreResponse**: Parses the raw HTTP response.
- **PreResult**: Extracts the business data from the parsed response.
- **PreDone**: Final stage before returning to the caller. Entity
  state (match, data) is updated here.

If any stage errors, the pipeline short-circuits and the error surfaces
to the caller — see [Error handling](#error-handling) for how that looks
in this language.

### Features and hooks

Features are the extension mechanism. A feature is an object with a
`hooks` map. Each hook key is a pipeline stage name, and the value is
a function that receives the context.

The SDK ships with built-in features:

- **TestFeature**: In-memory mock transport for testing without a live server

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Module structure

```
vercel/
├── src/
│   ├── VercelSDK.ts        # Main SDK class
│   ├── entity/             # Entity implementations
│   ├── feature/            # Built-in features (Base, Test, Log)
│   └── utility/            # Utility functions
├── test/                   # Test suites
└── dist/                   # Compiled output
```

Import the SDK from the package root:

```ts
import { VercelSDK } from '@voxgig-sdk/vercel'
```

### Entity state

Entity instances are stateful. After a successful `load`, the entity
stores the returned data and match criteria internally. Subsequent
calls on the same instance can rely on this state.

```ts
const project = client.Project()
await project.load({ id: "example_id" })

// project.data() now returns the project data from the last `load`
// project.match() returns { id: "example_id" }
```

Call `make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

The `direct` method gives full control over the HTTP request. Use it
for non-standard endpoints, bulk operations, or any path not modelled
as an entity. The `prepare` method is useful for debugging — it
shows exactly what `direct` would send.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
