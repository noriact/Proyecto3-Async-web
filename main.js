import { printHeaderTemplate } from './header';
import { printFooterTemplate } from './footer';
import { injectGallery } from './gallery';
import { exampleResponse } from './exampleResponse';
import './style.css';

const SCALING_FACTOR = 18;

printHeaderTemplate();
printFooterTemplate();
injectGallery(exampleResponse);
