var gulp = require("gulp");
var TemplateLintConfig = require('aurelia-template-lint').Config;
var templateLinter = require('gulp-aurelia-template-lint');

gulp.task('default', () => {
    var config = new TemplateLintConfig();
    config.useRuleAureliaBindingAccess = true;
    config.reflectionOpts.sourceFileGlob = 'src/**/*.ts';
    return gulp.src('src/**/*.html')
        .pipe(templateLinter(config));
});
