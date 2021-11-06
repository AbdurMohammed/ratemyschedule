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

const getProfMapFromCSV = (data) => {
    const rows = data.split("\n");
    // 1st row is column header
    const columnHeaders = rows[0].split(",");
    const deptIndex = columnHeaders.findIndex(col => col === "tDept");
    const sidIndex = columnHeaders.findIndex(col => col === "tSid");
    const instNameIndex = columnHeaders.findIndex(col => col === "institution_name");
    const fnameIndex = columnHeaders.findIndex(col => col === "tFname");
    const mnameIndex = columnHeaders.findIndex(col => col === "tMiddleName");
    const lnameIndex = columnHeaders.findIndex(col => col === "tLname");
    const tidIndex = columnHeaders.findIndex(col => col === `"tid"`);
    const numratingsIndex = columnHeaders.findIndex(col => col === `"tNumRatings"`);
    const ratingclassIndex = columnHeaders.findIndex(col => col === `"rating_class"`);
    const contentIndex = columnHeaders.findIndex(col => col === `"contentType"`);
    const categoryIndex = columnHeaders.findIndex(col => col === `"categoryType"`);
    const overallratingIndex = columnHeaders.findIndex(col => col === `"overall_rating"`);

    const ratingsMap = new Map();
    for(let index = 1; index < rows.length; index++) {
        // skip the 1st row
        let row = rows[index]
        row = row.trim();
        if ( row === '') {
            // end of the data
            return ratingsMap;
        }
        const cells = row.split(",");
        let dept = cells[deptIndex];
        let fName = cells[fnameIndex];
        let lName = cells[lnameIndex];
        let tID = cells[tidIndex];
        let numRatings = cells[numratingsIndex];
        let ratingClass = cells[ratingclassIndex];
        let overallRating = cells[overallratingIndex];
        numRatings = Number(numRatings);
        ratingsMap.set(ticker, { dept, fName, lName, tID, numRatings, ratingClass, overallRating } );
    };
    return ratingsMap;
}