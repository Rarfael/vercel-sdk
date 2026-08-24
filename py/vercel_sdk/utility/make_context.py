# Vercel SDK utility: make_context

from vercel_sdk.core.context import VercelContext


def make_context_util(ctxmap, basectx):
    return VercelContext(ctxmap, basectx)
