const gulp = require('gulp');
const fs = require('fs');

// Função para copiar arquivos que não são .ts
function copyFiles() {
  return gulp.src(['src/**/*', '!src/**/*.ts'])
    .pipe(gulp.dest('dist/'));
}

// Função para criar um link simbólico (ou copiar como fallback)
function link() {
	const distPath = 'dist/';
	if (!fs.existsSync(distPath)) {
		fs.mkdirSync(distPath);
	}
	const destination = '../../../../.n8n/custom/n8n-nodes-random';
	if (fs.existsSync(destination)) {
		fs.rmdirSync(destination, { recursive: true });
	}
	try {
		fs.symlinkSync('.', destination, 'dir');
	} catch (error) {
		console.error("Falha ao criar link simbólico, tentando copiar...", error);
		gulp.src(['**/*', '!node_modules', '!node_modules/**']).pipe(gulp.dest(destination));
	}
	return Promise.resolve();
}

const build = gulp.series(copyFiles);

exports.build = build;
exports.default = build;
exports.link = link;
