/* ===========================================================================
    Convert the V3 classes to the Cacao V6 format
=========================================================================== */

import chalk from 'chalk';
import fancyLog from 'fancy-log';
import fs from 'fs-extra';
import logSymbols from 'log-symbols';
import { basename } from 'path';
import recursiveReadDir from 'recursive-readdir';

/**
 * Update the file with the new classes
 *
 * @param {string} file The path to the file to update
 */
const updateFile = (file) => {
    // Read the file
    let fileContents = fs.readFileSync(file, 'utf8');
    const originalContents = fileContents;

    // Breakpoints to convert
    const classes = {
        'u-cf': 'clearfix',
        'u-cleanContent': 'last-child-sb-0',
        'u-block': 'block',
        'u-flexInline': 'inline-flex',
        'u-flexRowReverse': 'flex-reverse',
        'u-flexCol': 'flex-col',
        'u-flexColReverse': 'flex-col-reverse',
        'u-flexJustifyStart': 'justify-start',
        'u-flexJustifyEnd': 'justify-end',
        'u-flexJustifyCenter': 'justify-center',
        'u-flexJustifyBetween': 'justify-between',
        'u-flexJustifyAround': 'justify-around',
        'u-flexAlignItemsStart': 'align-start',
        'u-flexAlignItemsEnd': 'align-end',
        'u-flexAlignItemsCenter': 'align-center',
        'u-flex': 'flex',
        'u-heightFull': 'h-1-1',
        'u-hiddenVisually': 'visually-hidden',
        'u-hidden': 'hidden',
        'u-inline': 'inline',
        'u-linkSubtle': 'link-subtle',
        'u-posAbsolute': 'absolute',
        'u-posRelative': 'relative',
        'u-posStatic': 'static',
        'u-printHide': 'print-hide',
        'u-printShow': 'print-show',
        'u-sizeFull': 'w-1-1',
        'u-styleEm': 'style-italic',
        'u-textBreak': 'break-word',
        'u-textBreakAll': 'break-all',
        'u-textLeft': 'text-start',
        'u-textLower': 'text-lower',
        'u-textNoWrap': 'no-wrap',
        'u-textUpper': 'text-upper',
        'u-textCenter': 'text-center',
        'u-textRight': 'text-end',
        'u-weightNormal': 'weight-normal',
        'u-weightBold': 'weight-bold',
        'u-widthFull': 'w-1-1',
        'Grid--alignBottom': 'align-end',
        'Grid--alignMiddle': 'align-center',
        'Grid--alignCenter': 'justify-center',
        'Grid--alignRight': 'justify-end',
        'Grid--withGutterSm': 'g-1',
        'Grid--withGutterLg': 'g-4',
        'Grid--withGutterXlg': 'g-6',
        'Grid--withGutterXxlg': 'g-8',
        'Grid--withGutter': 'g-2',
        'FlexEmbed-ratio--': 'aspect-',
        'FlexEmbed-ratio': '',
        'FlexEmbed-content': '',
        FlexEmbed: 'embed',
        'Grid-cell': '',
        'Image Image--left': 'image-left',
        'Image--left': 'image-left',
        'Image Image--right': 'image-right',
        'Image--right': 'image-right',

    };

    // Replace the classes
    Object.keys(classes).forEach((key) => {
        fileContents = fileContents.replaceAll(key, classes[key]);
    });

    fileContents = fileContents.replace(/u-gutters(\d+)/g, 'px-$1');
    fileContents = fileContents.replace(/u-guttersMarg(\d+)/g, 'mx-$1');
    fileContents = fileContents.replace(/u-margTop(\d+)/g, 'mt-$1');
    fileContents = fileContents.replace(/u-margRight(\d+)/g, 'me-$1');
    fileContents = fileContents.replace(/u-margBottom(\d+)/g, 'mb-$1');
    fileContents = fileContents.replace(/u-margLeft(\d+)/g, 'ms-$1');
    fileContents = fileContents.replace(/u-padTop(\d+)/g, 'pt-$1');
    fileContents = fileContents.replace(/u-padRight(\d+)/g, 'pe-$1');
    fileContents = fileContents.replace(/u-padBottom(\d+)/g, 'pb-$1');
    fileContents = fileContents.replace(/u-padLeft(\d+)/g, 'ps-$1');
    fileContents = fileContents.replace(/u-rowGap(\d+)/g, 'gy-$1');
    fileContents = fileContents.replace(/u-spaced(\d+)/g, 'py-$1');
    fileContents = fileContents.replace(/"Grid"/g, '"grid"');
    fileContents = fileContents.replace(/"Grid(\s+)/g, '"grid$1');

    // Replace any empty spaces in class attributes
    fileContents = fileContents.replace(/class="\s+/g, 'class="');

    if (fileContents !== originalContents) {
        // Write the new file
        fs.writeFileSync(file, fileContents);
        fancyLog(logSymbols.success, chalk.green('Updated', chalk.cyan(file)));
    } else {
        fancyLog(logSymbols.info, chalk.blue('Skipped', chalk.cyan(file)));
    }
};

/**
 * Convert the class names in the CSS files to the Cacao V6 format
 *
 * @param {object} args The command line arguments. "dir" is the directory to convert.
 */
const convertClasses = (args) => {
    fancyLog(chalk.magenta('Converting classes', chalk.cyan(args.dir)));

    // Recursively read the directory and then update the files
    recursiveReadDir(args.dir).then((files) => {
        files.sort();
        files.forEach((file) => {
            if (basename(file) !== '.DS_Store') {
                updateFile(file);
            }
        });
        fancyLog(logSymbols.success, chalk.green('Finished converting classes'));
    });
};

export default convertClasses;
