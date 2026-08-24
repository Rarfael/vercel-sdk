# Vercel SDK exists test

import pytest
from vercel_sdk import VercelSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = VercelSDK.test(None, None)
        assert testsdk is not None
