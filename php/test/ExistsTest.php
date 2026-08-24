<?php
declare(strict_types=1);

// Vercel SDK exists test

require_once __DIR__ . '/../vercel_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = VercelSDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}
