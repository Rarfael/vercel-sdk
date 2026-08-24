
const { test, describe } = require('node:test')
const { equal } = require('node:assert')


const { VercelSDK } = require('..')


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await VercelSDK.test()
    equal(null !== testsdk, true)
  })

})
