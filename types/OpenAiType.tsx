export interface ResponseType {
    "data": {
        "id": string,
        "object": string,
        "created": Number,
        "model": string,
        "choices": [
            {
                "text": string,
                "index": Number,
                "logprobs": string,
                "finish_reason": string
            }
        ]
    },
    "status": number,
    "statusText": string,
    "headers": {
        "cache-control": string,
        "content-length": string,
        "content-type": string
    },
    "config": {
        "transitional": {
            "silentJSONParsing": boolean,
            "forcedJSONParsing": boolean,
            "clarifyTimeoutError": boolean
        },
        "transformRequest": [
            null
        ],
        "transformResponse": [
            null
        ],
        "timeout": Number,
        "xsrfCookieName": string,
        "xsrfHeaderName": string,
        "maxContentLength": number,
        "maxBodyLength": number,
        "env": {
            "FormData": null
        },
        "headers": {
            "Accept": String,
            "Content-Type": string,
            "User-Agent": string,
            "Authorization": string,
        },
        "method": string,
        "data": string,
        "url": string,
    }
}