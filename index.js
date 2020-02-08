/**
 * Handles version control of database structures. 
 * All configuration done through ./config.json - it's pretty self explanatory in there
 * 
 * Example run:
 * node ./index.js [DEVELOPMENT | TEST | PRODUCTION] [VERSION]
 * 
 * Note that VERSION must be a number >= 0 OR can be left off.
 * 
 * The application will:
 * 
 * 1. Check to see that a database exists and create it if it doesn't. Note that the create will include a versions table
 * 2. Return the current status of the version table - ie, indicate what version it is up to
 * 3. Check the highest number available in ./database_scripts.
 * 
 * If the VERSION parameter is not present, run the DDL in the UP file for all files GREATER than the current version.
 * If the VERSION parameter is present, run the DDL either UP or DOWN for all files until the current version is matched
 */

// requires
const _ = require('lodash');
utilities = require('./utilities/utilities.js')

// pull in the appropriate bits from the command line
const ENVIRONMENT = process.argv[2]
if (ENVIRONMENT != 'DEVELOPMENT' && ENVIRONMENT != 'TEST' && ENVIRONMENT != 'PRODUCTION') {
   utilities.throwError(`
    Correct usage: node ./index.js DEVELOPMENT 4
    Please specify the environment - either DEVELOPMENT TEST or PRODUCTION
    `)
}

let VERSION = process.argv[3] || 999999999;
if (isNaN(VERSION) || VERSION < 1) {
   utilities.throwError(`
    Correct usage: node ./index.js DEVELOPMENT 4
    If version is specified, it must be a number greater than 0
    `)
}




console.log('and here ', VERSION)