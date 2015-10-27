import gulp from 'gulp';
import browserSync from 'browser-sync';
import {Namer} from './gulp/myClass';


var reload = browserSync.reload;


gulp.task('default', [
    'sayName',
    'serve'
]);


gulp.task('sayName', () => {
    var name = new Namer('chris');
    name.sayName();
});


gulp.task('serve', () => {

    browserSync({
        notify: false,
        port: 3000,
        server: {
            baseDir: ['app'],
            routes: {
                '/': ''
            }
        }
    });

    gulp.watch([
        'app/*.html',
        'app/scripts/**/*.js',
        'app/images/**/*',
        'app/polymerComponents/**/*.html',
        '.tmp/fonts/**/*'
    ]).on('change', reload);

    console.log('BrowserSync server started successfully...');
});