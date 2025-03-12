# MySigMail

> **Warning**: Project is no longer maintained, and may have bugs and security issues. Feel free to fork but no pull request or security alert will be answered.

![MySigMail Logo](./logo.png)
![Screenshot](./screenshot.png)

**Website**: [https://mysigmail.com](https://mysigmail.com) | **Twitter**: [@mysigmail](https://twitter.com/mysigmail)

[![Product Hunt](https://api.producthunt.com/widgets/embed-image/v1/top-post-badge.svg?post_id=142330&theme=dark&period=daily)](https://www.producthunt.com/posts/mysigmail-2)

## Purpose

Creating an email signature is not a trivial task, even for people who have knowledge of HTML and CSS. And what about ordinary users?

There are many solutions on the Internet, and most of them are paid. There are free options, but all of them are closed source. I wanted to make a free application with a user-friendly interface and open source code.

So let's make creating email signatures easier!

## Features

- **Upload image**: Upload to AWS S3 or set public link
- **Custom fields**: Add unlimited number of custom fields with different types such as text, link, email
- **Social icons**: Add social media links to your signature
- **Options**: Customize your signature as you like, change color, avatar shape, font and more
- **Addons**: Additional options such as disclaimer, mobile application badges
- **Templates**: Templates for signature (so far, only one template)
- **Projects**: Ability to save, download or import a previously created signature. No need to create an account, everything is already available in the browser
- **Signature preview**: Hot reloading preview

## Roadmap

- Create more templates
- Create more addons

## Development

### Environment Setup

Create a `.env` file with the following variables:

```bash
VUE_APP_AWS_S3_URL=
VUE_APP_AWS_S3_BASKET=
VUE_APP_AWS_S3_ID=
VUE_APP_AWS_S3_KEY=
VUE_APP_AWS_S3_REGION=
```

### Running the Project

```bash
npm i
npm run serve
```

## Support Project

If you liked the project, we appreciate your support:

- Bitcoin: `1di5dpLQpcryUke4e5eq1NJv4if9faLhJ`
- [PayPal](https://www.paypal.me/antonreshetov)
- [Become a backer on Patreon](https://www.patreon.com/antonreshetov)
- [Become a backer on Open Collective](https://opencollective.com/mysigmail)
- [Become a backer on Ko-fi](https://ko-fi.com/antonreshetov)

## Commercialization

If you would like to commercialize MySigMail, please contact: reshetov.art@gmail.com 