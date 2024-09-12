# HackUCF

Hello, this is my remake of HackUCF's site that was hosted on squarespace because it was slow and bad.
This is, not slow and bad it is lighting fast and soon using the instructions below will be hosted on aws using S3 and lambda functions through serverless.
Please let me know if the instructions below would not work.

# How to host on AWS

Install serverless and bun

```bash
curl -fsSL https://bun.sh/install | bash
bun add -g serverless
```

Update next.config.js:

```javascript
module.exports = {
  output: 'standalone',
};
```

Deploy:


```bash
serverless
```

This approach offers several benefits:

- It automatically handles the compilation and deployment of your Next.js app to AWS Lambda and S3.
- It sets up CloudFront for content delivery.
- It supports all Next.js features, including API routes and server-side rendering.
- It's cost-effective, as you only pay for the resources you use.


