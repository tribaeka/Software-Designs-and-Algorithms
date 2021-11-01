const { src, dest } = require('gulp');
const path = require('path');
const del = require('del');

const DIST_FOLDER_PATH = path.resolve(__dirname, './dist');

function cleanDest() {
    return del([DIST_FOLDER_PATH], { force: true });
}
module.exports.cleanDest = cleanDest;

function copyViews() {
    return src(['views/**/*.hbs']).pipe(dest('dist/views'));
}
module.exports.copyViews = copyViews;
