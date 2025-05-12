# Log In With Microsoft

![License](https://img.shields.io/badge/license-MIT-blue.svg) [![Latest Stable Version](https://img.shields.io/packagist/v/piwind/oauth-microsoft.svg)](https://packagist.org/packages/piwind/oauth-microsoft) [![Total Downloads](https://img.shields.io/packagist/dt/piwind/oauth-microsoft.svg)](https://packagist.org/packages/piwind/oauth-microsoft)

![](https://extiverse.com/extension/piwind/oauth-microsoft/open-graph-image)

Log in to your Flarum forum with Microsoft. An addon for [FoF OAuth](https://github.com/friendsofflarum/oauth)

## About This Fork

This repository is a fork of [xrh0905/flarum-ext-oauth-microsoft](https://github.com/xrh0905/flarum-ext-oauth-microsoft), with **only visual adjustments** to align with Microsoft’s current color scheme. No functional changes were made.

## Installation & Updating

Install with composer:

```sh
composer require piwind/oauth-microsoft
```

Updating:

```sh
composer update piwind/oauth-microsoft
```

## Setup
1) Register your site with [Microsoft](https://learn.microsoft.com/azure/active-directory/develop/v2-oauth2-auth-code-flow) and obtain your unique `client_id` and `client_secret`
2) Once you have created your security profile for your forum, go to `Web Settings` and enter the redirect URL as provided in this extension's settings page.
3) Log in with Microsoft!

## Links

- [Packagist](https://packagist.org/packages/piwind/oauth-microsoft)
- [GitHub](https://github.com/piwind/flarum-ext-oauth-microsoft)

