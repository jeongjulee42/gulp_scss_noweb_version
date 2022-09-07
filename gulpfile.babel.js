import gulp from "gulp";
import autoprefixer from "gulp-autoprefixer";
import minify from "gulp-csso";
import del from "del";

const sass = require("gulp-sass")(require("sass"));

const clean = () => del(["build/"]);

const routes = {
  scss: {
    watch: "src/scss/*",
    src: "src/scss/styles.scss",
    dest: "build/css",
  },
};

const styles = () =>
  gulp
    .src(routes.scss.src)
    .pipe(sass().on("error", sass.logError))
    .pipe(
      autoprefixer({
        flexbox: true,
        grid: "autoplace",
      })
    )
    .pipe(minify())
    .pipe(gulp.dest(routes.scss.dest));

export const dev = gulp.series([clean, styles]);
