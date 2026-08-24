<?php
declare(strict_types=1);

// Vercel SDK utility: prepare_body

class VercelPrepareBody
{
    public static function call(VercelContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
