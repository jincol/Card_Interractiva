const {src,dest,watch,parallel} = require("gulp")


//css
const sass = require("gulp-sass")(require("sass"));
const plumber = require("gulp-plumber");

// //imagenes
const webp = require("gulp-webp");
const avif = require("gulp-avif");
const imagemin = require("gulp-imagemin");

//funcion css
function css (done){
    src("src/scss/**/*.scss")
        .pipe(plumber())
        .pipe(sass())
        .pipe(dest("build/css"))
    done();
}

// FUNCIONES DE IMAGENES
function versionWebp (done){
    const opciones = {quality : 50};
    
    src("src/img/**/*.{jpg,png}")
        .pipe(webp(opciones))
        .pipe(dest("build/img"))
      done();
}

function versionAvif (done){
    const opciones = {quality : 50};
    
    src("src/img/**/*.{jpg,png}")
        .pipe(avif(opciones))
        .pipe(dest("build/img"))
      done();
}

function imagenes (done){
    const opciones = { optimizationLevel: 3 };

    src("src/img/**/*.{png,jpg}")
        .pipe(imagemin(opciones))
        .pipe(dest("build/img"))    
    done();
}

//Funcion de JavaScript
function JavaScript(done){
    src("src/js/**/*.js")
    .pipe(dest("build/js"));  
    done();
}

function dev(done){
    watch("src/scss/**/*.scss",css)
    watch("src/js/**/*.js",JavaScript)
    done();
}

exports.css=css;
exports.versionWebp=versionWebp;
exports.versionAvif=versionAvif;
exports.imagenes=imagenes;
exports.JavaScript=JavaScript;
exports.dev=parallel(imagenes,versionWebp,versionAvif,JavaScript,dev);