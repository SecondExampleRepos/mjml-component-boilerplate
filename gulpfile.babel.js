import gulp from 'gulp'
import babel from 'gulp-babel'
import watch from 'gulp-watch'
import log from 'fancy-log'
import fs from 'fs'
import path from 'path'
import mjml2html from 'mjml'
import { registerComponent } from 'mjml-core'

const walkSync = (dir, filelist = []) => {
  fs.readdirSync(dir).forEach(file => {
    filelist = fs.statSync(path.join(dir, file)).isDirectory()
      ? walkSync(path.join(dir, file), filelist)
      : filelist.concat(path.join(dir, file))
  })
  return filelist
}

const watchedComponents = walkSync('./components')

const compile = () => {
  return gulp
    .src(path.normalize('components/**/*.js'))
    .pipe(babel({
      presets: ['@babel/preset-env'],
    }))
    .on('error', log)
    .pipe(gulp.dest('lib'))
    .on('end', () => {
      watchedComponents.forEach(compPath => {
        const fullPath = path.join(process.cwd(), compPath.replace(/^components/, 'lib'))
        delete require.cache[fullPath]
        registerComponent(require(fullPath).default)
      })

      const distDir = './dist';
      if (!fs.existsSync(distDir)){
        fs.mkdirSync(distDir);
      }

      const templatesDir = './templates';
      const templates = fs.readdirSync('./templates');

      // Filter the list to include only files with a .mjml extension
      const mjmlFiles = templates.filter((file) => path.extname(file) === '.mjml');

      mjmlFiles.forEach((mjmlFile) => {
        const filePath = path.join(templatesDir, mjmlFile);
        const newFilePath = path.join('./dist', (mjmlFile.replace('.mjml', '.html')));

        const data = fs.readFileSync(filePath, 'utf8');
        const result = mjml2html(data)
        fs.writeFileSync(path.normalize(newFilePath), result.html)
  
        // You can perform actions on each MJML file here
        console.log(`Processing ${mjmlFile}:`);
      });
    })
}

gulp.task('build', compile)

gulp.task('watch', () => {
  compile()
  return watch([path.normalize('components/**/*.js'), path.normalize('templates/**/*.mjml')], compile)
})
