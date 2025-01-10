import { htmlTemplate } from './templates/htmlTemplate';
import { cssVariables } from './styles/variables';
import { baseStyles } from './styles/base';
import { headerStyles } from './styles/header';
import { contentStyles } from './styles/content';
import { socialStyles } from './styles/social';
import { buttonStyles } from './styles/buttons';
import { responsiveStyles } from './styles/responsive';

export const htmlCode = htmlTemplate;

export const cssCode = `
${cssVariables}
${baseStyles}
${headerStyles}
${contentStyles}
${socialStyles}
${buttonStyles}
${responsiveStyles}
`;