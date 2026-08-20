
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { VercelSDK } from '..'


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await VercelSDK.test()
    equal(null !== testsdk, true)
  })

})
