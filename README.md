# Node.js Express.js - sendFile() Error

This repository demonstrates a common error in Node.js Express.js applications when using `res.sendFile()` to serve static files.  The error occurs when the specified file does not exist.

## The Problem

The `res.sendFile()` method in Express.js throws an error if the file path provided doesn't resolve to an actual file on the server's filesystem. The error message might not always be clear about the root cause, making it difficult to debug.

## Solution

The solution involves adding error handling to gracefully manage cases where the file doesn't exist. This can involve sending a 404 response or using a fallback mechanism.