<?php
declare(strict_types=1);

// Vercel SDK utility: result_body

class VercelResultBody
{
    public static function call(VercelContext $ctx): ?VercelResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
