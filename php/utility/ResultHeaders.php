<?php
declare(strict_types=1);

// Vercel SDK utility: result_headers

class VercelResultHeaders
{
    public static function call(VercelContext $ctx): ?VercelResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
