const AWS = require('aws-sdk');
const s3 = new AWS.S3({
    accessKeyId: "ENTER YOUR accessKeyId",
    secretAccessKey: "ENTER YOUR secretAccessKey",
});
const paramsProfessors = {
    Bucket: 'INSERT NAME',
    Key: 'INSERT CSV FILE NAME'
}
const paramsStudents = {
    Bucket: 'INSERT NAME',
    Key: 'INSERT CSV FILE NAME'
}
const professorData = s3.getObject(paramsProfessors);
const studentData = s3.getObject(paramsStudents);
