# Bearer WebHook Tester

The Bearer WebHook Tester allows to quickly test a WebHook sent by Bearer.
It's written in JS and uses the `@bearer/express` package.

## Getting Started

Setup your `ENV` variables:

```shell
$ cp .envrc{.example,}
```

Install the dependencies:

```shell
yarn
```

Launch the server:

```shell
yarn start
```

The Server is up and running on the `3000` port with a `/bearer/webhooks` path.

## Using Ngrok

Install Ngrok:

```shell
brew cask install ngrok
```

Expose the `3000` port:

```shell
ngrok http 3000
```

This will give you a Ngrok url like:

```
http://2487303f.ngrok.io
```

Append the `/bearer/webhooks` to it and post it to the integration you want to test.
