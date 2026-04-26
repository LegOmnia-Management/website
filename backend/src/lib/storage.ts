import AWS from 'aws-sdk';

const s3 = new AWS.S3({
  endpoint: process.env.SCALEWAY_ENDPOINT,
  accessKeyId: process.env.SCALEWAY_ACCESS_KEY,
  secretAccessKey: process.env.SCALEWAY_SECRET_KEY,
  region: process.env.SCALEWAY_REGION || 'fr-par',
});

export async function uploadFile(
  key: string,
  body: Buffer | string,
  contentType: string = 'application/octet-stream'
): Promise<string> {
  const params = {
    Bucket: process.env.SCALEWAY_BUCKET || 'legomnia-media',
    Key: key,
    Body: body,
    ContentType: contentType,
    ACL: 'public-read',
  };

  try {
    await s3.putObject(params).promise();
    return `${process.env.SCALEWAY_ENDPOINT}/${process.env.SCALEWAY_BUCKET}/${key}`;
  } catch (error) {
    console.error('Upload error:', error);
    throw error;
  }
}

export async function deleteFile(key: string): Promise<void> {
  const params = {
    Bucket: process.env.SCALEWAY_BUCKET || 'legomnia-media',
    Key: key,
  };

  try {
    await s3.deleteObject(params).promise();
  } catch (error) {
    console.error('Delete error:', error);
    throw error;
  }
}

export function getFileUrl(key: string): string {
  return `${process.env.SCALEWAY_ENDPOINT}/${process.env.SCALEWAY_BUCKET}/${key}`;
}
