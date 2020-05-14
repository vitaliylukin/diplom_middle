'use strict';

import "@babel/polyfill";
import 'nodelist-foreach-polyfill';
import 'formdata-polyfill';
import 'es6-promise';
import 'fetch-polyfill';
/*import elementClosest from 'element-closest';
elementClosest(window);*/

import dropDownMenu from "./modules/dropDownMenu";
import freeVisitForm from "./modules/freeVisitForm";
import callbackForm from "./modules/callbackForm";

//Drop-down Menu
dropDownMenu();
//Free Visit Form
freeVisitForm();
//Callback Form
callbackForm();


