export const config = {
  aws: {
    accessKeyId: process.env.AWS_ACCESS_KEY,
    cloudfrontHost: process.env.AWS_CLOUDFRONT_HOST || '/assets/',
    s3Bucket: process.env.S3_BUCKET,
    secretAccessKeyId: process.env.AWS_SECRET_ACCESS_KEY,
  },
  development: process.env.NODE_ENV === 'development',
  port: process.env.PORT,
  production: process.env.NODE_ENV === 'production',
};
