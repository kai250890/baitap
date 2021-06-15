import React from "react";

export default function (url: string, method: string, data: object) {
    let response: any;
    return fetch(url, {
        method: method,
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    })
}