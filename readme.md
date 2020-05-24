## Format react routes containing parameters. Can be used with react itself, Gatsby, Nextjs

## How to Install

    npm i format-react-route

## Usage

    const { formatRoute } = require("format-react-route");

    or

    import { formatRoute } from "format-react-route";

    const url = "index/:id/:key/:word";
    const opt = { id: 45, key: "200k", word: "kofi" };

    <Link to={formatRoute(url, opt)} />
