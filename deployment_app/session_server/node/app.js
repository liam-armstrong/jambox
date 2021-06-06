#!/usr/bin/env node

const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
  ctx.body = 'Hello World';
});

const port = process.env.PORT || 3000;

app.listen(port);