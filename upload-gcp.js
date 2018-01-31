const Storage = require("@google-cloud/storage");
const projectId = "event-3800106";

const storage = new Storage({
  projectId: projectId
});

const bucketName = "ehanlin-event-test";

storage
  .createBucket(bucketName)
  .upload(filename)
  .then(() => {
    console.log(`Bucket ${bucketName} created.`);
  })
  .catch(err => {
    console.error("ERROR:", err);
  });
