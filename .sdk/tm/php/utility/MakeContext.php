<?php
declare(strict_types=1);

// Vercel SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class VercelMakeContext
{
    public static function call(array $ctxmap, ?VercelContext $basectx): VercelContext
    {
        return new VercelContext($ctxmap, $basectx);
    }
}
