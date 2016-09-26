var buildDest = 'dist';
var siteRoot = '';
var srcDir = 'src';
var destDir = buildDest + siteRoot;

module.exports = {

  root: {
    dest: buildDest,
    src: srcDir,
    server: siteRoot
  },

  copy: [
    {
      dest: destDir + '/layout/magnific',
      src: ['node_modules/magnific-popup/dist/**/*']
    },
    {
      dest: destDir + '/layout/slick',
      src: ['node_modules/slick-carousel/slick/**/*']
    }
  ],

  images: {
    dest: destDir + '/layout/images',
    src: srcDir + '/images/**/*.{png,jpg,gif}'
  },

  nunjucks: {
    dest: destDir,
    src: [srcDir + '/site'],
    pages: [srcDir + '/site/pages/**/*.html'],
    data: [srcDir + '/site/data/**/*.json'],
    watch: [srcDir + '/site/**/*.{html,json}']
  },

  scripts: [
    {
      name: 'index.js',
      src: [
        srcDir + '/scripts/modernizr-flexbox-detection.js',
        'node_modules/jquery/dist/jquery.js',
        'node_modules/ap_drilldown_plugin/ap-drilldown-menu.min.js',
        srcDir + '/scripts/index.js'
      ],
      dest: destDir + '/layout/js'
    },
    {
      name: 'forms.js',
      src: 'node_modules/jquery-validation/dist/jquery.validate.js',
      dest: destDir + '/layout/js'
    }
  ],

  styles: {
    dest: destDir + '/layout/css',
    src: [srcDir + '/styles/index.css'],
    watch: [srcDir + '/styles/**/*.css']
  },

  stylelint: {
    src: [srcDir + '/styles/**/*.css']
  }

};

