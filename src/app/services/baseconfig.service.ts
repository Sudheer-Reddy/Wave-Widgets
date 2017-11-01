import { Injectable } from "@angular/core";

@Injectable()
export class BaseConfig {

    private readonly widgetEventOptions = [];
    private readonly showInDeviceOptions = [{
        'name': 'All',
        'value': 'all'
    }, {
        'name': 'Mobile',
        'value': 'xs'
    }, {
        'name': 'Tablet Portrait',
        'value': 'sm'
    }, {
        'name': 'Laptop\\Tablet Landscape',
        'value': 'md'
    }, {
        'name': 'Large Screen',
        'value': 'lg'
    }];

    private readonly columnWidths = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
    private readonly daysOptions = [];
    private readonly nameRegex = '^[a-zA-Z_][A-Za-z0-9_]+$';
    private readonly numberRegex = '(^$|[0-9]+$)';
    private readonly classRegex = '(^$|^-?[_a-zA-Z ]+[_a-zA-Z0-9- ]*)$';
    private readonly dimensionRegex = '(^$|^(auto|0)$|^[+-]?[0-9]+.?([0-9]+)?(em|ex|%|px|cm|mm|in|pt|pc|ch|rem|vh|vw|vmin|vmax)?$)';
    private readonly zindexRegex = '(^$|auto|initial|inherit|^[0-9]+$)';
    private readonly maxRatingRegex = '^(?:10|[1-9])$|^bind.*$';
    private readonly roles = [];
    private readonly numberFormatOptions = [
        {
            "name" : "Decimal Digits",
            "groupOptions" : {
                ".0f" :  "9",
                ".1f" : "9.9",
                ".2f" : "9.99",
                ".3f" : "9.999"
            }
        },
        {
            "name" : "Precision",
            "groupOptions" : {
                ".1g" : "9e+7",
                ".2g" : "9.9e+7",
                ".3g" : "9.99e+7"
            }
        },
        {
            "name" : "Percentage",
            "groupOptions" : {
                "%" : "99%"
            }
        },
        {
            "name" : "Round Options",
            "groupOptions" : {
                ",r"    : "99,999,999",
                "Thousand" : "Thousand (Eg: 9K)",
                "Million"  : "Million (Eg: 9M)",
                "Billion"  : "Billion (Eg: 9B)"
            }
        }
    ];
    private readonly dateOptions = [
        {
            "name" : "Date",
            "groupOptions" : {
                "%x" : "mm/dd/yyyy",
                "%c" : "Date and Time"
            }
        },
        {
            "name" : "Time",
            "groupOptions" : {
                "%X" : "Time(%H:%M:%S)",
                "%H" : "In 24 hours [00-23]",
                "%I" : "In 12 hours [01-12]",
                "%M" : "Mintues [00-59]",
                "%S" : "Seconds [00-59]",
                "%L" : "MilliSeconds [000, 999]",
                "%p" : "either AM or PM",
                "%Z" : "Time zone offset"
            }
        },
        {
            "name" : "Day",
            "groupOptions" : {
                "%d" : "Zero padded day of month (Eg: 01)",
                "%e" : "Space padded day of month (Eg:  1)",
                "%j" : "Day of the year (Eg: 01-31-2016 returns 031)"
            }
        },
        {
            "name" : "Week",
            "groupOptions" : {
                "%a" : "Abbreviated weekday name (Eg: Wed)",
                "%A" : "Full weekday name (Eg: Wednesday)",
                "%U" : "Week number of the year(Sunday first day) (Eg: 01-31-2016 returns 05)",
                "%W" : "Week number of the year(Monday first day) (Eg: 01-31-2016 returns 04)",
                "%w" : "Week day[0(Sunday),6]  (Eg: 01-30-2016 returns 6)"
            }
        },
        {
            "name" : "Month",
            "groupOptions" : {
                "%b" : "Abbreviated month name (Eg: Mar)",
                "%B" : "Full month name  (Eg: March)",
                "%m" : "Month number  (Eg: 02) [01-12]"
            }
        },
        {
            "name" : "Year",
            "groupOptions" : {
                "%y" : "yy (Eg: 16)",
                "%Y" : "yyyy (Eg: 2016)"
            }
        }
    ];
    private readonly PLATFORM_TYPE = {
        WEB      :   'WEB',
        MOBILE   :   'MOBILE',
        DEFAULT  :   'DEFAULT'
    };
    private readonly dateTimeTypes = "timestamp, date, time, datetime, string, number";
    private readonly animationOptions = [" ", "bounce", "bounceIn", "bounceInDown", "bounceInLeft", "bounceInRight", "bounceInUp", "bounceOut", "bounceOutDown", "bounceOutLeft", "bounceOutRight", "bounceOutUp", "fadeIn", "fadeInDown", "fadeInDownBig", "fadeInLeft", "fadeInLeftBig", "fadeInRight", "fadeInRightBig", "fadeInUp", "fadeInUpBig", "fadeOut", "fadeOutDown", "fadeOutDownBig", "fadeOutLeft", "fadeOutLeftBig", "fadeOutRight", "fadeOutRightBig", "fadeOutUp", "fadeOutUpBig", "flash", "flipInX", "flipInY", "flipOutX", "flipOutY", "hinge", "lightSpeedIn", "lightSpeedOut", "pulse", "rollIn", "rollOut", "rotateIn", "rotateInDownLeft", "rotateInDownRight", "rotateInUpLeft", "rotateInUpRight", "rotateOut", "rotateOutDownLeft", "rotateOutDownRight", "rotateOutUpLeft", "rotateOutUpRight", "rubberBand", "shake", "slideInDown", "slideInLeft", "slideInRight", "slideInUp", "slideOutDown", "slideOutLeft", "slideOutRight", "slideOutUp", "swing", "tada", "wobble", "zoomIn", "zoomInDown", "zoomInLeft", "zoomInRight", "zoomInUp", "zoomOut", "zoomOutDown", "zoomOutLeft", "zoomOutRight", "zoomOutUp"];
    private readonly spinnerAnimationOptions = [" ", "bounce", "fadeIn", "fadeOut", "flash", "flipInX", "flipInY", "pulse", "shake", "spin", "swing", "tada", "wobble", "zoomIn", "zoomOut"];
    private readonly visibilityOptions = ["collapse", "hidden", "initial", "inherit", "visible"];
    private readonly displayOptions = ["block", "flex", "inherit", "initial", "inline", "inline-block", "inline-flex", "inline-table", "list-item", "run-in", "table", "table-caption", "table-cell", "table-column", "table-column-group", "table-header-group", "table-footer-group", "table-row", "table-row-group", "none"];
    private readonly popoverOptions = [
        {
            'value': 'top',
            'label': 'Top'
        },
        {
            'value': 'bottom',
            'label': 'Bottom'
        },
        {
            'value': 'left',
            'label': 'Left'
        },
        {
            'value': 'right',
            'label': 'Right'
        }
    ];
    private readonly EVERYONE = "Everyone";
    private readonly results = {
        "properties": {
            "wm.base": {
                "name": {"type": "string", "pattern": this.nameRegex, "maxlength": 32},
                "show": {"type": "boolean", "value": true, "bindable": "in-bound"},
                "deferload": {"type": "boolean", "value": false, "show": false},
                "class": {"type": "string", "pattern": this.classRegex},
                "accessroles": {"type": "access-roles-select", "options": this.roles, "value": this.EVERYONE},
                "showindevice": {"type": "select-all", "options": this.showInDeviceOptions, "value": "all", "displaytype": 'block'}
            },

            "wm.base.editors": {
                "width": {"type": "string", "pattern": this.dimensionRegex},
                "hint": {"type": "string", "bindable": "in-bound"},
                "height": {"type": "string", "pattern": this.dimensionRegex},
                "margin": {"type": "string", "widget": "box-model"},
                "fontweight": {"type": "string", "options": ["bold"], "hidelabel": true, "widget": "toggle-checkbox"},
                "fontsize": {"type": "number", "hint": "Font size", "pattern": this.numberRegex},
                "fontunit": {"type": "string", "options": ["em", "px", "pt"], "value": "px", "hidelabel": true, "widget": "icons-radio"},
                "textalign": {"type": "string", "options": ["left", "center", "right"], "widget": "icons-align"},
                "fontstyle": {"type": "string", "options": ["italic"], "widget": "toggle-checkbox"},
                "textdecoration": {"type": "string", "options": ["underline"], "hidelabel": true, "widget": "toggle-checkbox"},
                "fontfamily": {"type": "string", "hint": "Arial, Geneva"},
                "color": {"type": "string", "widget": "color"}
            },
            "wm.base.advancedformwidgets": {
                "hint": {"type": "string", "bindable": "in-bound"},
                "width": {"type": "string", "pattern": this.dimensionRegex},
                "height": {"type": "string", "pattern": this.dimensionRegex},
                "horizontalalign": {"type": "string", "options": ["left", "center", "right"], "widget": "icons-align"},
                "margin": {"type": "string", "widget": "box-model"},
                "fontweight": {"type": "string", "options": ["bold"], "hidelabel": true, "widget": "toggle-checkbox"},
                "fontsize": {"type": "number", "hint": "Font size", "pattern": this.numberRegex},
                "fontunit": {"type": "string", "options": ["em", "px", "pt"], "value": "px", "hidelabel": true, "widget": "icons-radio"},
                "textalign": {"type": "string", "options": ["left", "center", "right"], "widget": "icons-align"},
                "textdecoration": {"type": "string", "options": ["underline"], "hidelabel": true, "widget": "toggle-checkbox"},
                "fontstyle": {"type": "string", "options": ["italic"], "widget": "toggle-checkbox"},
                "fontfamily": {"type": "string", "hint": "Arial, Geneva"},
                "color": {"type": "string", "widget": "color"},
                "borderwidth": {"type": "string", "widget": "box-model"},
                "borderstyle": {"type": "string", "options": ["dashed", "dotted", "none", "solid"], "widget": "border-style"},
                "bordercolor": {"type": "string", "widget": "color"},
                "padding": {"type": "string", "widget": "box-model"},
                "backgroundcolor": {"type": "string", "widget": "color"},
                "backgroundgradient": {"type": "string"},
                "backgroundimage": {"type": "string", "bindable": "in-bound"},
                "backgroundrepeat": {"type": "list", "options": ["no-repeat", "repeat", "repeat-x", "repeat-y"]},
                "backgroundsize": {"type": "string", "hint": "width, height"},
                "backgroundposition": {"type": "string", "hint": "top, left"},
                "backgroundattachment": {"type": "list", "options": ["fixed", "local", "scroll"]},
                "display": {"type": "list", "options": this.displayOptions, "show": false}
            },
            "wm.base.editors.abstracteditors": {
                "hint": {"type": "string", "bindable": "in-bound"},
                "disabled": {"type": "boolean", "bindable": "in-bound"},
                "required": {"type": "boolean", "bindable": "in-bound"},
                "tabindex": {"type": "number", "value": "0"},
                "onClick": {"type": "event", "options": this.widgetEventOptions, "widget": "eventlist"},
                "onTap": {"type": "event", "options": this.widgetEventOptions, "widget": "eventlist"},
                "onMouseenter": {"type": "event", "options": this.widgetEventOptions, "widget": "eventlist"},
                "onMouseleave": {"type": "event", "options": this.widgetEventOptions, "widget": "eventlist"},
                "onFocus": {"type": "event", "options": this.widgetEventOptions, "widget": "eventlist"},
                "onBlur": {"type": "event", "options": this.widgetEventOptions, "widget": "eventlist"},
                "onChange": {"type": "event", "options": this.widgetEventOptions, "widget": "eventlist"}
            },

            "wm.base.editors.dataseteditors": {
                "startupdate": {"type": "boolean"},
                "scopedataset": {"type": "string"},
                "datafield": {"type": "list", "options": ["All Fields"], "datasetfilter" : "terminals", "allfields" : true},
                "displayfield": {"type": "list", "options": [""], "datasetfilter" : "terminals"},
                "displayexpression": {"type": "string", "bindable": "in-bound", "bindonly": "expression"},
                "displaytype": {"type": "list", "options": ["Currency", "Date", "Number", "Text", "Time"]},
                "orderby": {"type": "list", "widget": "order-by", "datasetfilter": "terminals"}
            },
            "wm.base.navigation": {
                "navigation": {"type": "list", "options": ["Basic", "Pager", "Classic"], "value": "Basic"},
                "showrecordcount": {"type": "boolean"},
                "maxsize": {"type": "number", "value": 3, "show": false},
                "boundarylinks": {"type": "boolean", "value": false, "show": false},
                "forceellipses": {"type": "boolean", "value": true, "show": false},
                "directionlinks": {"type": "boolean", "value": true, "show": false},
                "navigationalign": {"type": "string", "options": ["left", "center", "right"], "widget": "icons-align", "value": "left"}
            },
            "wm.base.events": {
                "onTap": {"type": "event", "options": this.widgetEventOptions, "widget": "eventlist"},
                "onDoubletap": {"type": "event", "options": this.widgetEventOptions, "widget": "eventlist"},
                "onClick": {"type": "event", "options": this.widgetEventOptions, "widget": "eventlist"},
                "onDblclick": {"type": "event", "options": this.widgetEventOptions, "widget": "eventlist"},
                "onMouseenter": {"type": "event", "options": this.widgetEventOptions, "widget": "eventlist"},
                "onMouseleave": {"type": "event", "options": this.widgetEventOptions, "widget": "eventlist"}
            },

            "wm.base.events.touch": {
                "onSwipeup": {"type": "event", "options": this.widgetEventOptions, "widget": "eventlist"},
                "onSwipedown": {"type": "event", "options": this.widgetEventOptions, "widget": "eventlist"},
                "onSwipeleft": {"type": "event", "options": this.widgetEventOptions, "widget": "eventlist"},
                "onSwiperight": {"type": "event", "options": this.widgetEventOptions, "widget": "eventlist"},
                "onPinchin": {"type": "event", "options": this.widgetEventOptions, "widget": "eventlist"},
                "onPinchout": {"type": "event", "options": this.widgetEventOptions, "widget": "eventlist"}
            },

            "wm.base.events.keyboard": {
                "onKeypress": {"type": "event", "options": this.widgetEventOptions, "widget": "eventlist"},
                "onKeydown": {"type": "event", "options": this.widgetEventOptions, "widget": "eventlist"},
                "onKeyup": {"type": "event", "options": this.widgetEventOptions, "widget": "eventlist"}
            },
            "wm.base.events.focus": {
                "onFocus": {"type": "event", "options": this.widgetEventOptions, "widget": "eventlist"},
                "onBlur": {"type": "event", "options": this.widgetEventOptions, "widget": "eventlist"}
            },

            "wm.base.events.change": {
                "onChange": {"type": "event", "options": this.widgetEventOptions, "widget": "eventlist"}
            },

            "wm.base.events.successerror": {
                "onSuccess": {"type": "event", "options": this.widgetEventOptions, "widget": "eventlist"},
                "onError": {"type": "event", "options": this.widgetEventOptions, "widget": "eventlist"}
            },

            "wm.abstractinput": {
                "type": {"type": "string", "value": "text"}
            },

            "wm.html": {
                "content": {"type": "string", "bindable": "in-out-bound", "widget": "textarea"},
                "textalign": {"type": "string", "options": ["left", "center", "right"], "widget": "icons-align", "show": false}
            },
            "wm.icon": {
                "hint": {"type": "string", "bindable": "in-bound"},
                "caption": {"type": "string", "bindable": "in-out-bound", "maxlength": 256, "showPrettyExprInDesigner": true},
                "iconposition": {"type": "list", "options": ["left", "right"], "value": "left"},
                "iconclass": {"type": "string", "value": "wi wi-star-border", "widget": "select-icon", "bindable": "in-out-bound", "pattern": this.classRegex},
                "iconsize": {"type": "string", "pattern": this.dimensionRegex},
                "animation": {"type": "list", "options": this.animationOptions},
                "color": {"type": "string", "widget": "color"},
                "opacity": {"type": "string", "widget": "slider"}
            },
            "wm.iframe": {
                "iframesrc": {"type": "string", "bindable": "in-bound", "widget": "string"},
                "encodeurl": {"type": "boolean", "value": false},
                "width": {"type": "string", "value": '300px', "pattern": this.dimensionRegex},
                "height": {"type": "string", "value": '150px', "pattern": this.dimensionRegex},
                "showindevice": {"type": "select-all", "options": this.showInDeviceOptions, "value": "all"}
            },
            "wm.button": {
                "iconclass": {"type": "string", "widget": "select-icon", "bindable": "in-out-bound", "pattern": this.classRegex},
                "conditionalclass": {"bindable": "in-bound"},
                "badgevalue": {"type": "string", "bindable": "in-out-bound", "showPrettyExprInDesigner": true},
                "caption": {"type": "string", "bindable": "in-out-bound", "maxlength": 256, "showPrettyExprInDesigner": true},
                "iconurl": {"type": "string", "bindable": "in-bound", "showPrettyExprInDesigner": true},
                "iconwidth": {"type": "string", "pattern": this.dimensionRegex},
                "iconheight": {"type": "string", "pattern": this.dimensionRegex},
                "iconmargin": {"type": "string", "pattern": this.dimensionRegex},
                "iconposition": {"type": "list", "options": ["left", "top", "right"]},
                "disabled": {"type": "boolean", "bindable": "in-bound"},
                "type": {"type": "list", "options": ["button", "reset", "submit"], "value" : "button"},
                "tabindex": {"type": "number", "value": "0"},
                "showindevice": {"type": "select-all", "options": this.showInDeviceOptions, "value": "all", "displaytype": 'inline-block'},
                "animation": {"type": "list", "options": this.animationOptions},
                "shortcutkey": {"type": "string"},
                "class": {"type": "string", "pattern": this.classRegex, "widget": "list-picker", "value": "btn-default", "options": ["btn-default", "btn-primary", "btn-info", "btn-warning", "btn-success", "btn-danger", "btn-inverse", "btn-lg", "btn-sm", "btn-xs", "btn-raised", "btn-fab", "btn-link", "btn-transparent", "no-border", "jumbotron", "app-header-action"]},
                "margin": {"type": "string", "widget": "box-model"},
                "horizontalalign": {"type": "string", "options": ["left", "center", "right"], "widget": "icons-align", "show": false}
            },
            "wm.rating": {
                "hint":  {"show": false},
                "maxvalue": {"type": "number", "value": 5, "pattern": this.maxRatingRegex, "bindable": "in-bound"},
                "readonly": {"type": "boolean", "value": false, "bindable": "in-bound"},
                "scopedatavalue": {"type": "string"},
                "datavalue": {"type": "number", "value": "", "bindable": "in-out-bound"},
                "caption": {"type": "string", "bindable": "in-out-bound", "maxlength": 256, "show": false},
                "iconsize": {"type": "string", "pattern": this.dimensionRegex},
                "onChange": {"type": "event", "options": this.widgetEventOptions, "widget": "eventlist"},
                "width": {"type": "string", "pattern": this.dimensionRegex, "show": false},
                "height": {"type": "string", "pattern": this.dimensionRegex, "show": false},
                "tabindex": {"type": "number", "value": "0"},
                "iconcolor": {"type": "string", "widget": "color"},
                "scopedataset": {"type": "string"},
                "dataset": {"type": "array, object", "bindable": "in-bound", "widget": "string"},
                "datafield": {"type": "list", "options": [""], "value": "", "datasetfilter" : "terminals"},
                "displayfield": {"type": "list", "options": [""], "datasetfilter" : "terminals"},
                "displayexpression": {"type": "string", "bindable": "in-bound", "bindonly": "expression"},
                "showcaptions": {"type": "boolean", "value": true}
            },
            "wm.camera": {
                "capturetype": {"type": "list", "options": ["IMAGE", "VIDEO"], "value" : "IMAGE"},
                "datavalue": {"type": "string", "value": "", "bindable": "in-bound"},
                "localFilePath": {"type": "string", "value": "", "bindable": "out-bound"},
                "localFile": {"type": "string", "value": "", "bindable": "out-bound"},
                "iconclass": {"type": "string", "value": "wi wi-photo-camera", "widget": "select-icon", "bindable": "in-bound", "pattern": this.classRegex},
                "iconsize": {"type": "string", "pattern": this.dimensionRegex, "value" : "2em"},
                /* capture picture options*/
                "imagequality": {"type": "number", "value": 80},
                "imageencodingtype": {"type": "list", "options": [ "JPEG", "PNG"], "value" : "JPEG"},
                "savetogallery": {"type": "boolean", "value" : false},
                "allowedit": {"type": "boolean", "value" : false},
                "correctorientation": {"type": "boolean", "value" : false},
                "imagetargetwidth": {"type": "number"},
                "imagetargetheight": {"type": "number"},
                /* Events */
                "onSuccess": {"type": "event", "options": this.widgetEventOptions, "widget": "eventlist"},
                "width": {"type": "string", "pattern": this.dimensionRegex, "show": false},
                "height": {"type": "string", "pattern": this.dimensionRegex, "show": false}
            },
            "wm.barcodescanner": {
                "datavalue": {"type": "string", "bindable": "in-out-bound"},
                "barcodeformat": {"type": "list", "options" : ["ALL", "QR_CODE", "DATA_MATRIX", "UPC_E", "UPC_A", "EAN_8", "EAN_13", "CODE_128", "CODE_39", "ITF"], "value" : "ALL"},
                "caption": {"type": "string", "value": "", "bindable": "in-bound", "maxlength": 256, "showPrettyExprInDesigner": true },
                "iconclass": {"type": "string", "value": "glyphicon glyphicon-barcode", "widget": "select-icon", "bindable": "in-out-bound", "pattern": this.classRegex},
                "iconsize": {"type": "string", "pattern": this.dimensionRegex, "value" : "2em"},
                /* Events */
                "onSuccess": {"type": "event", "options": this.widgetEventOptions, "widget": "eventlist"},
                "width": {"type": "string", "pattern": this.dimensionRegex, "show": false},
                "height": {"type": "string", "pattern": this.dimensionRegex, "show": false}
            },
            "wm.buttongroup": {
                "width": {"type": "string", "pattern": this.dimensionRegex},
                "vertical": {"type": "boolean"},
                "horizontalalign": {"type": "string", "options": ["left", "center", "right"], "widget": "icons-align"},
                "padding": {"type": "string", "widget": "box-model"},
                "class": {"type": "string", "pattern": this.classRegex, "widget": "list-picker", "options": ["btn-group-lg", "btn-group-sm", "btn-group-xs", "btn-group-raised", "btn-toolbar", "btn-group-vertical"]},
                "addchild": {"hidelabel": true, "options": [{"label": "Add Button", "widgettype": "wm-button", "defaults": {"margin": ""}}], "widget": "add-widget"}
            },
            "wm.switch": {
                "width": {"type": "string", "pattern": this.dimensionRegex},
                "height": {"type": "string", "pattern": this.dimensionRegex},
                "datavalue": {"type": "string, object", "bindable": "in-out-bound", "widget": "string", "getTypeFrom": "dataset"},
                "scopedatavalue": {"type": "string"},
                "dataset": {"type": "array, string", "bindable": "in-bound", "widget": "string", "value": "yes, no, maybe", "showPrettyExprInDesigner": true, "defaultvalue": "yes, no, maybe"},
                "scopedataset": {"type": "string"},
                "datafield": {"type": "list", "options": ["All Fields"], "value": "All Fields", "datasetfilter" : "terminals", "allfields" : true},
                "displayfield": {"type": "list", "options": [""], "value": "", "datasetfilter": "terminals"},
                "iconclass": {"type": "list", "options": [""], "value": "", "datasetfilter": "terminals"},
                "tabindex": {"type": "number", "value": "0"},
                "orderby": {"type": "list", "widget": "order-by", "datasetfilter": "terminals"},
                "margin": {"type": "string", "widget": "box-model"},
                "onFocus": {"show": false},
                "onBlur": {"show": false}
            },
            "wm.menu": {
                "name": {"type": "string", "pattern": this.nameRegex, "maxlength": 32},
                "show": {"type": "boolean", "value": true, "bindable": "in-bound"},
                "accessroles": {"type": "access-roles-select", "options": this.roles, "value": this.EVERYONE},
                "scopedataset": {"type": "string"},
                "dataset": {"type": "array, object", "bindable": "in-bound", "widget": "string", "value": "Menu Item 1, Menu Item 2, Menu Item 3"},
                "caption": {"type": "string", "bindable": "in-out-bound", "maxlength": 256, "showPrettyExprInDesigner": true},
                "menulayout": {"type": "list", "options": ["vertical", "horizontal"]},
                "menuclass": {"type": "string", "pattern": this.classRegex, "widget": "list-picker", "options": ["btn-default", "btn-primary", "btn-info", "btn-danger", "btn-warning", "btn-success", "btn-lg", "btn-sm", "btn-xs", "btn-link", "btn-transparent", "jumbotron", "app-header-action"]},
                "iconclass": {"type": "string", "widget": "select-icon", "bindable": "in-out-bound", "pattern": this.classRegex},
                "menuposition": {"type": "list", "options": ["", "down,right", "down,left", "up,right", "up,left", "inline"], "value": ""},
                "onSelect": {"type": "event", "options": this.widgetEventOptions, "widget": "eventlist"},
                "linktarget": {"type": "list", "options": ["_blank", "_parent", "_self", "_top"], "widget": "data-list"},
                "tabindex": {"type": "number", "value": "0"},
                "animateitems": {"type": "list", "options": ['', 'slide', 'fade', 'scale']},
                "shortcutkey": {"type": "string"},
                "orderby": {"type": "list", "widget": "order-by", "datasetfilter": "terminals"},
                "class": {"type": "string", "pattern": this.classRegex, "show": false},
                "autoclose": {"type": "list", "options": ["outsideClick", "always", "disabled"], "value": "always"}
            },

            "wm.menu.dataProps": {
                "itemlabel": {"type": "string", "widget": "list", "options": [""], "bindable": "in-bound", "bindonly": "expression", "datasetfilter" : "terminals"},
                "itemlink": {"type": "string", "widget": "list", "options": [""], "bindable": "in-bound", "bindonly": "expression", "datasetfilter" : "terminals"},
                "itemicon": {"type": "string", "widget": "list", "options": [""], "bindable": "in-bound", "bindonly": "expression", "datasetfilter" : "terminals"},
                "itemchildren": {"type": "string", "widget": "list", "options": [""], "bindable": "in-bound", "bindonly": "expression", "datasetfilter" : "objects"},
                "itemaction": {"type": "string", "widget": "list", "options": [""], "bindable": "in-bound", "bindonly": "expression", "datasetfilter" : "terminals"},
                "userrole": {"type": "string", "widget": "list", "options": [""], "bindable": "in-bound", "bindonly": "expression", "datasetfilter" : "terminals"}
            },

            "wm.tree": {
                "scopedataset": {"type": "string"},
                "dataset": {"type": "array, object", "bindable": "in-bound", "widget": "string", "value": "node1, node2, node3"},
                "onSelect": {"type": "event", "options": this.widgetEventOptions, "widget": "eventlist"},
                "onExpand": {"type": "event", "options": this.widgetEventOptions, "widget": "eventlist"},
                "onCollapse": {"type": "event", "options": this.widgetEventOptions, "widget": "eventlist"},
                "selecteditem": {"type": "object", "bindable": "in-out-bound", "show": false, "widget": "string", "getTypeFrom": "dataset"},
                "treeicons": {"type": "list", "widget": "list", "options": ["folder", "plus-minus", "circle-plus-minus", "chevron", "menu", "triangle", "expand-collapse"]},
                "nodelabel": {"type": "string", "widget": "list", "datasetfilter" : "terminals", "bindable": "in-bound", "bindonly": "expression"},
                "nodeicon": {"type": "string", "widget": "list", "datasetfilter" : "terminals", "bindable": "in-bound", "bindonly": "expression"},
                "nodechildren": {"type": "string", "widget": "list", "datasetfilter" : "objects", "bindable": "in-bound", "bindonly": "expression"},
                "nodeid": {"type": "string", "widget": "list", "datasetfilter" : "terminals", "bindable": "in-bound", "bindonly": "expression"},
                "nodeaction": {"type": "string", "widget": "list", "datasetfilter" : "terminals", "bindable": "in-bound", "bindonly": "expression"},
                "nodeclick": {"type": "select-by-object", "value": "none", "options" : [{"label": "Expand Node", "value": "expand"}, {"label": "Do Nothing", "value": "none"}]},
                "tabindex": {"type": "number", "value": "0"},
                "levels": {"type": "number", "value": 0, "min": "0", "max": "10", "step": "1"},
                "datavalue": {"type": "string, number, boolean, date, time, object", "bindable": "in-out-bound", "widget": "tree-datavalue", "getTypeFrom": "expr:getDataValueType()"},
                "orderby": {"type": "list", "widget": "order-by", "datasetfilter": "terminals"}
            },

            "wm.text": {
                "autofocus": {"type": "boolean"},
                "autocomplete": {"type": "boolean", "value": true},
                "readonly": {"type": "boolean", "bindable": "in-bound"},
                "updateon": {"type": "list", "value": "blur", "widget": "update-on"},
                "updatedelay": {"type": "number", "value": 0},
                "type": {"type": "list", "options": ["color", "date", "datetime-local", "email", "month", "number", "password", "search", "tel", "text", "time", "url", "week"], "value": "text"},
                "accept": {"type": "data-list", "options": ["image/*", "audio/*", "video/*"], "show": false},
                "datavalue": {"type": "string", value: "", "bindable": "in-out-bound", "getTypeFrom": "expr:getPropertyType('datavalue')"},
                "scopedatavalue": {"type": "string"},
                "class": {"type": "string", "pattern": this.classRegex, "widget": "list-picker", "options": ["input-lg", "input-sm"]},
                "backgroundcolor": {"type": "string", "widget": "color"},

                /* Properties: Validation */
                "regexp": {"type": "string", "value": ".*"},

                /* Properties: help */
                "placeholder": {"type": "string", "value": "Enter text", "bindable": "in-bound"},

                /* Properties: Behavior */
                "maxchars": {"type": "number", "bindable": "in-bound"},

                /*  ---Events---  */
                "changeOnkey": {"type": "boolean"},

                /* Number properties */
                "minvalue": {"type": "string", "bindable": "in-bound"},
                "maxvalue": {"type": "string", "bindable": "in-bound"},
                "step": {"type": "number"},
                "shortcutkey": {"type": "string"},
                "displayformat": {"type": "string", "options": ["999-99-9999", "(999) 999-9999", "(999) 999-9999 ext. 999", "(999) 999-9999 ext. ?9?9?9", "(?9?9?9) ?9?9?9-?9?9?9?9", "(999) 999-9999 ext. 999", "(**: AAA-999)", "9999 9999 9999 9999", "AA-9999"], "widget": "data-list", "bindable": "in-bound", "show": false}
            },

            "wm.currency": {
                "datavalue": {"type": "number", "bindable": "in-out-bound"},
                "scopedatavalue": {"type": "string"},
                "minvalue": {"type": "number", "bindable": "in-bound"},
                "maxvalue": {"type": "number", "bindable": "in-bound"},
                "readonly": {"type": "boolean", "bindable": "in-bound"},
                "step": {"type": "number"},
                "currency": {"type": "list", "value": "USD", "options": ["AED", "AFN", "ALL", "AMD", "ARS", "AUD", "AZN", "BAM", "BDT", "BGN", "BHD", "BIF", "BND", "BOB", "BRL", "BWP", "BYR", "BZD", "CAD", "CDF", "CHF", "CLP", "CNY", "COP", "CRC", "CVE", "CZK", "DJF", "DKK", "DOP", "DZD", "EEK", "EGP", "ERN", "ETB", "EUR", "GBP", "GEL", "GHS", "GNF", "GTQ", "HKD", "HNL", "HRK", "HUF", "IDR", "ILS", "INR", "IQD", "IRR", "ISK", "JMD", "JOD", "JPY", "KES", "KHR", "KMF", "KRW", "KWD", "KZT", "LBP", "LKR", "LTL", "LVL", "LYD", "MAD", "MDL", "MGA", "MKD", "MMK", "MOP", "MUR", "MXN", "MYR", "MZN", "NAD", "NGN", "NIO", "NOK", "NPR", "NZD", "OMR", "PAB", "PEN", "PHP", "PKR", "PLN", "PYG", "QAR", "RON", "RSD", "RUB", "RWF", "SAR", "SDG", "SEK", "SGD", "SOS", "SYP", "THB", "TND", "TOP", "TRY", "TTD", "TWD", "TZS", "UAH", "UGX", "USD", "UYU", "UZS", "VEF", "VND", "XAF", "XOF", "YER", "ZAR", "ZMK"]},
                /* Properties: help */
                "placeholder": {"type": "string", "value": "Enter value", "bindable": "in-bound"},
                /* Style: Basic */

                "backgroundcolor": {"type": "string", "widget": "color"},
                "shortcutkey": {"type": "string"},
                "class": {"type": "string", "pattern": this.classRegex, "widget": "list-picker", "options": ["input-group-sm", "input-group-lg"]}
            },
            "wm.base.datetime": {
                "datavalue": {"type": "string", "bindable": "in-out-bound"},
                "scopedatavalue": {"type": "string"},
                "tabindex": {"type": "number", "value": "0"},
                /* ---- styles ----*/

                "margin": {"type": "string", "widget": "box-model"},
                "color": {"type": "string", "widget": "color"}
            },
            "wm.date": {
                "placeholder": {"type": "string", "value": "Select date", "bindable": "in-bound"},
                "width": {"type": "string", "pattern": this.dimensionRegex},
                "autofocus": {"type": "boolean"},
                "showweeks": {"type": "boolean", "value": false, "bindable": "in-bound"},
                "readonly": {"type": "boolean", "bindable": "in-bound"},
                "disabled": {"type": "boolean", "bindable": "in-bound"},
                "mindate": {"type": this.dateTimeTypes, "widget": "data-list", "options": ["CURRENT_DATE"], "bindable": "in-bound", "hint": "yyyy-MM-dd"},
                "maxdate": {"type": this.dateTimeTypes, "widget": "data-list", "options": ["CURRENT_DATE"], "bindable": "in-bound", "hint": "yyyy-MM-dd"},
                "datepattern": {"value": "yyyy-MM-dd", "type": "list", "options": [], "widget": "date-patterns"},
                "outputformat": {"value": "yyyy-MM-dd", "type": "list", "options": [], "widget": "date-patterns"},
                "datavalue": {"type": this.dateTimeTypes, "widget": "data-list", "options": ["CURRENT_DATE"], "bindable": "in-out-bound", "hint": "yyyy-MM-dd"},
                "timestamp": {"type": this.dateTimeTypes, "widget": "string", "show": "false", "bindable": "out-bound"},
                "excludedays": {"type": "select-all", "options": this.daysOptions, "displaytype": "block", "value": " "},
                "excludedates": {"type": "datetime, timestamp, date, array, string", "bindable": "in-bound", "widget": "string", "hint": "yyyy-MM-dd"},
                "tabindex": {"type": "number", "value": "0"},
                "shortcutkey": {"type": "string"},
                "class": {"type": "string", "pattern": this.classRegex, "widget": "list-picker", "options": ["input-group-sm", "input-group-lg"]},
                "showbuttonbar": {"type": "boolean", "value": true}
            },
            "wm.date.mobile": {
                "datepattern": {"show": false},
                "excludedays": {"show": false},
                "excludedates": {"show": false},
                "showweeks": {"show": false}
            },
            "wm.calendar": {
                "backgroundcolor": {"type": "string", "widget": "color"},
                "width": {"type": "string", "value": "100%", "pattern": this.dimensionRegex},
                "height": {"type": "string", "pattern": this.dimensionRegex},
                "dataset": {"type": "array, object", "bindable": "in-bound", "widget": "string"},
                "scopedataset": {"type": "string"},
                "selectionmode": {"type": "list", "widget": "select-by-object", "value": "none", "options": [{"label": "None", "value": "none"}, {"label": "Single", "value": "single"}, {"label": "Multiple", "value": "multiple"}]},
                "selecteddates": {"type": "object", "widget": "string", "bindable": "in-out-bound", "getTypeFrom": "expr:getPropertyType('selecteddates')"},
                "currentview": {"type": "object", "widget": "string", "bindable": "in-out-bound", "getTypeFrom": "expr:getPropertyType('currentview')"},
                "selecteddata": {"type": "array, object", "isList": true, "show": false, "bindable": "out-bound", "getTypeFrom": "dataset" },
                "calendartype": {"type": "list", "options": ["basic", "agenda", "list"], "value": "basic"},
                "eventstart": {"type": "list", "value": "start", "options": [""], "datasetfilter" : "terminals"},
                "eventend": {"type": "list", "value": "end", "options": [""], "datasetfilter" : "terminals"},
                "eventallday": {"type": "list", "value": "allday", "options": [""], "datasetfilter" : "terminals"},
                "eventtitle": {"type": "string", "widget": "list", "options": [""], "bindable": "in-bound", "bindonly": "expression", "datasetfilter" : "terminals"},
                "eventclass": {"type": "list", "value": "class", "options": [""], "datasetfilter" : "terminals"},
                "view": {"type": "list", "options": ["month", "week", "day"], "value": "month"},
                "controls": {"type": "list", "options": "navigation, today, month, week, day", "value": "navigation, today, month, week, day", "widget": "select-all"},
                "onViewrender": {"type": "event", "options": this.widgetEventOptions, "widget": "eventlist"},
                "onSelect": {"type": "event", "options": this.widgetEventOptions, "widget": "eventlist"},
                "onEventdrop": {"type": "event", "options": this.widgetEventOptions, "widget": "eventlist"},
                "onEventresize": {"type": "event", "options": this.widgetEventOptions, "widget": "eventlist"},
                "onEventclick": {"type": "event", "options": this.widgetEventOptions, "widget": "eventlist"},
                "onEventrender": {"type": "event", "options": this.widgetEventOptions, "widget": "eventlist"},
                "tabindex": {"type": "number", "value": "0"}
            },
            "wm.calendar.mobile": {
                "view": {"type": "list", "options": ["day", "month", "year"], "value": "day"},
                "controls": {"show": false},
                "multiselect": {"show": false},
                "calendartype": {"show": false},
                "selectionmode": {"show": false},
                "onEventdrop": {"show": false},
                "onEventresize": {"show": false},
                "eventstart": {"type": "list", "value": "start", "options": [""], "datasetfilter" : "terminals"},
                "eventend": {"type": "list", "value": "end", "options": [""], "datasetfilter" : "terminals", "show": false },
                "eventallday": {"type": "list", "value": "allday", "options": [""], "datasetfilter" : "terminals", "show": false},
                "eventtitle": {"type": "list", "value": "title", "options": [""], "datasetfilter" : "terminals", "show": false},
                "eventclass": {"type": "list", "value": "class", "options": [""], "datasetfilter" : "terminals", "show": false}
            },
            "wm.time": {
                "placeholder": {"type": "string", "value": "Select time", "bindable": "in-bound"},
                "autofocus": {"type": "boolean"},
                "readonly": {"type": "boolean", "bindable": "in-bound"},
                "disabled": {"type": "boolean", "bindable": "in-bound"},
                "hourstep": {"type": "number", "value": 1},
                "timepattern": {"value": "hh:mm a", "type": "list", "options": [], "widget": "time-patterns"},
                "minutestep": {"type": "number", "value": 15},
                "outputformat": {"value": "HH:mm:ss", "type": "list", "options": [], "widget": "time-patterns"},
                "required": {"type": "boolean"},
                "datavalue": {"type": "time, date, string, number", "widget": "data-list", "options": ["CURRENT_TIME"], "bindable": "in-out-bound", hint: "HH:mm"},
                "timestamp": {"type": "time, date, string, number", "widget": "string", "show": "false", "bindable": "out-bound"},
                "tabindex": {"type": "number", "value": "0"},
                "shortcutkey": {"type": "string"},
                "class": {"type": "string", "pattern": this.classRegex, "widget": "list-picker", "options": ["input-group-sm", "input-group-lg"]}
            },
            "wm.time.mobile": {
                "hourstep": {"type": "number", "value": 1, "show": false},
                "minutestep": {"type": "number", "value": 15, "show": false},
                "timepattern": {"show": false}
            },
            "wm.datetime": {
                "placeholder": {"type": "string", "value": "Select date time", "bindable": "in-bound"},
                "width": {"type": "string", "pattern": this.dimensionRegex},
                "autofocus": {"type": "boolean"},
                "showweeks": {"type": "boolean", "value": false},
                "readonly": {"type": "boolean", "bindable": "in-bound"},
                "disabled": {"type": "boolean", "bindable": "in-bound"},
                "hourstep": {"type": "number", "value": 1},
                "minutestep": {"type": "number", "value": 15},
                "mindate": {"type": this.dateTimeTypes,  "widget": "data-list", "options": ["CURRENT_DATE"], "bindable": "in-bound", "hint": "yyyy-MM-dd"},
                "maxdate": {"type": this.dateTimeTypes,  "widget": "data-list", "options": ["CURRENT_DATE"], "bindable": "in-bound", "hint": "yyyy-MM-dd"},
                "datepattern": {"value": "yyyy-MM-dd hh:mm:ss a", "type": "list", "options": [], "widget": "date-time-patterns"},
                "outputformat": {"value": "timestamp", "type": "list", "options": [], "widget": "date-time-patterns"},
                "datavalue": {"type": this.dateTimeTypes, "widget": "data-list", "options": ["CURRENT_DATE"], "bindable": "in-out-bound", "hint": "yyyy-MM-dd HH:mm:ss"},
                "timestamp": {"type": this.dateTimeTypes, "widget": "string", "show": "false", "bindable": "out-bound"},
                "excludedays": {"type": "select-all", "options": this.daysOptions, "displaytype": "block", "value": " "},
                "excludedates": {"type": "datetime, timestamp, date, array, string", "bindable": "in-bound", "widget": "string", "hint": "yyyy-MM-dd"},
                "tabindex": {"type": "number", "value": "0"},
                "shortcutkey": {"type": "string"},
                "class": {"type": "string", "pattern": this.classRegex, "widget": "list-picker", "options": ["input-group-sm", "input-group-lg"]},
                "showbuttonbar": {"type": "boolean", "value": true}
            },
            "wm.datetime.mobile": {
                "datepattern": {"value": "yyyy-MM-dd hh:mm:ss a", "type": "list", "show": false},
                "hourstep": {"type": "number", "value": 1, "show": false},
                "minutestep": {"type": "number", "value": 15, "show": false},
                "showweeks": {"show": false},
                "excludedays": {"show": false},
                "excludedates": {"show": false}
            },
            "wm.message": {
                "type": {"type": "string", "options": ["error", "info", "loading", "success", "warning"], "value": "success", "bindable": "in-out-bound", "widget": "list"},
                "caption": {"type": "string", "value": "Message", "bindable": "in-out-bound", "maxlength": 256, "showPrettyExprInDesigner": true},
                "onClose": {"type": "event", "options": this.widgetEventOptions, "widget": "eventlist"},
                "animation": {"type": "list", "options": this.animationOptions},
                "width": {"type": "string", "pattern": this.dimensionRegex},
                "height": {"type": "string", "pattern": this.dimensionRegex},
                "hideclose": {"type": "boolean", "value": false}
            },

            "wm.composite": {
                "captionposition": {"type": "list", "options": ["left", "right", "top"]},
                "required": {"type": "boolean"},
                "margin": {"type": "string", "widget": "box-model"}
            },

            "wm.radio": {
                //"readonly": {"type": "boolean", "value": false}, //commenting this property temporarily as it is not working
                "autofocus": {"type": "boolean"},
                "disabled": {"value": false, "bindable": "in-bound"},
                "scopedatavalue": {"type": "string"},
                "datavalue": {"type": "string", "bindable": "in-out-bound"},
                "checkedvalue": {"type": "string"},
                "radiogroup": {"type": "string"},
                "caption": {"type": "string", "bindable": "in-out-bound", "maxlength": 256},
                "shortcutkey": {"type": "string"},
                "width": {"type": "string", "pattern": this.dimensionRegex},
                "height": {"type": "string", "pattern": this.dimensionRegex},
                "margin": {"type": "string", "widget": "box-model"}
            },
            "wm.radioset": {
                "width": {"type": "string", "pattern": this.dimensionRegex},
                "height": {"type": "string", "pattern": this.dimensionRegex},
                "margin": {"type": "string", "widget": "box-model"},
                "tabindex": {"type": "number", "value": "0"},
                "disabled": {"type": "boolean", "value": false, "bindable": "in-bound"},
                "readonly": {"type": "boolean", "value": false, "bindable": "in-bound"},
                "layout":  {"type": "list", "options": ["", "inline", "stacked"]},
                "itemclass": {"type": "string", "pattern": this.classRegex, "widget": "list-picker", "options": ["list-group", "media-list"]},
                "listclass": {"type": "string", "pattern": this.classRegex, "widget": "list-picker", "options": ["list-group-item", "media"]},
                /* ---- events ---- */

                "onClick": {"type": "event", "options": this.widgetEventOptions, "widget": "eventlist"},
                "onTap": {"type": "event", "options": this.widgetEventOptions, "widget": "eventlist"},
                "onMouseenter": {"type": "event", "options": this.widgetEventOptions, "widget": "eventlist"},
                "onMouseleave": {"type": "event", "options": this.widgetEventOptions, "widget": "eventlist"},
                "onFocus": {"type": "event", "options": this.widgetEventOptions, "widget": "eventlist", "show": false},
                "onBlur": {"type": "event", "options": this.widgetEventOptions, "widget": "eventlist", "show": false},
                "onChange": {"type": "event", "options": this.widgetEventOptions, "widget": "eventlist"},

                "datavalue": {"type": "string", "bindable": "in-out-bound", "show": false, "getTypeFrom": "dataset"},
                "scopedatavalue": {"type": "string"},
                "dataset": {"type": "array, object", "bindable": "in-bound", "widget": "string", "value": "Option 1, Option 2, Option 3", "showPrettyExprInDesigner": true, "defaultvalue": "Option 1, Option 2, Option 3"},
                "usekeys": {"type": "boolean"},
                "required": {"type": "boolean", "bindable": "in-bound", "value": false},
                "selectedvalue": {"type": "string, number, boolean, date, time, object", "widget": "string", "bindable": "in-bound", "getTypeFrom": "dataset"},
                "displayValue": {"type": "string", "show": false, "bindable": "out-bound"}
            },
            "wm.colorpicker": {
                "readonly": {"type": "boolean", "value": false, "bindable": "in-bound"},
                "disabled": {"type": "boolean", "value": false, "bindable": "in-bound"},
                "required": {"type": "boolean", "value": false, "bindable": "in-bound"},
                "datavalue": {"type": "string", "bindable": "in-out-bound"},
                "scopedatavalue": {"type": "string"},
                "placeholder": {"type": "string", "value": "Select Color", "bindable": "in-bound"},
                "tabindex": {"type": "number", "value": "0"},
                "shortcutkey": {"type": "string"},
                "class": {"type": "string", "pattern": this.classRegex, "widget": "list-picker", "options": ["input-group-sm", "input-group-lg"]},
                "onDblclick": {"show": false},
                "onDoubletap": {"show": false}
            },

            "wm.inputcolorpicker": {
                "defaultcolor": {"value": "#fff"}
            },

            "wm.inputslider": {
                "caption": {"value": "slider", "maxlength": 256}
            },

            "wm.slider": {
                "hint": {"type": "string"},
                "readonly": {"type": "boolean", "value": false, "bindable": "in-bound"},
                "disabled": {"type": "boolean", "value": false, "bindable": "in-bound"},
                "minvalue": {"type": "number", "bindable": "in-out-bound"},
                "maxvalue": {"type": "number", "bindable": "in-out-bound"},
                "step": {"type": "number"},
                "datavalue": {"type": "string, number", "widget": "string", "bindable": "in-out-bound"},
                "scopedatavalue": {"type": "string"},
                "tabindex": {"type": "number", "value": "0"},
                "shortcutkey": {"type": "string"},
                "width": {"type": "string", "pattern": this.dimensionRegex},
                "height": {"type": "string", "pattern": this.dimensionRegex},
                "margin": {"type": "string", "widget": "box-model"}
            },

            "wm.checkbox": {
                "width": {"type": "string", "pattern": this.dimensionRegex},
                "height": {"type": "string", "pattern": this.dimensionRegex},
                "backgroundcolor": {"type": "string", "widget": "color"},
                "margin": {"type": "string", "widget": "box-model"},
                "datavalue": {"type": "boolean, string", "bindable": "in-out-bound", "widget": "string"},
                "checkedvalue": {"type": "string"},
                "uncheckedvalue": {"type": "string"},
                "scopedatavalue": {"type": "string"},
                "caption": {"type": "string", "bindable": "in-out-bound", "maxlength": 256, "showPrettyExprInDesigner": true},
                "shortcutkey": {"type": "string"},
                "readonly": {"type": "boolean", "value": false, "bindable": "in-bound"}
            },
            "wm.checkboxset": {
                "width": {"type": "string", "pattern": this.dimensionRegex},
                "height": {"type": "string", "pattern": this.dimensionRegex},
                "margin": {"type": "string", "widget": "box-model"},
                "tabindex": {"type": "number", "value": "0"},
                "disabled": {"type": "boolean", "value": false, "bindable": "in-bound"},
                "readonly": {"type": "boolean", "value": false, "bindable": "in-bound"},
                "layout":  {"type": "list", "options": ["", "inline", "stacked"]},
                "itemclass": {"type": "string", "pattern": this.classRegex, "widget": "list-picker", "options": ["list-group", "media-list"]},
                "listclass": {"type": "string", "pattern": this.classRegex, "widget": "list-picker", "options": ["list-group-item", "media"]},

                /* ---- events ---- */

                "onClick": {"type": "event", "options": this.widgetEventOptions, "widget": "eventlist"},
                "onTap": {"type": "event", "options": this.widgetEventOptions, "widget": "eventlist"},
                "onMouseenter": {"type": "event", "options": this.widgetEventOptions, "widget": "eventlist"},
                "onMouseleave": {"type": "event", "options": this.widgetEventOptions, "widget": "eventlist"},
                "onFocus": {"type": "event", "options": this.widgetEventOptions, "widget": "eventlist", "show": false},
                "onBlur": {"type": "event", "options": this.widgetEventOptions, "widget": "eventlist", "show": false},
                "onChange": {"type": "event", "options": this.widgetEventOptions, "widget": "eventlist"},

                "datavalue": {"type": "string, array", "bindable": "in-out-bound", "show": false, "widget": "string", "getTypeFrom": "dataset"},
                "scopedatavalue": {"type": "string"},
                "dataset": {"type": "array, object", "bindable": "in-bound", "widget": "string", "value": "Option 1, Option 2, Option 3", "showPrettyExprInDesigner": true, "defaultvalue": "Option 1, Option 2, Option 3"},
                "usekeys": {"type": "boolean"},
                "selectedvalues": {"type": "string, object", "isList": true, "bindable": "in-bound", "widget": "string", "getTypeFrom": "dataset"},
                "onReady": {"type": "event", "options": this.widgetEventOptions, "widget": "eventlist"},
                "displayValue": {"type": "string, array", "isList": true, "show": false, "bindable": "out-bound"}
            },

            "wm.chips": {
                "readonly": {"type": "boolean", "value": false, "bindable": "in-bound"},
                "scopedatavalue": {"type": "string"},
                "datavalue": {"type": "string", "bindable": "in-out-bound", "widget": "string", "getTypeFrom": "dataset"},
                "scopedataset": {"type": "string"},
                "dataset": {"type": "array, object", "bindable": "in-bound", "widget": "string", "value": "Option 1, Option 2, Option 3"},
                "displayimagesrc": {"type": "string", "widget": "list", "options": [""], "bindable": "in-bound", "bindonly": "expression", "datasetfilter" : "terminals"},
                "disabled": {"type": "boolean", "bindable": "in-bound"},
                "placeholder": {"type": "string", "value": "Type here...", "bindable": "in-bound"},
                "maxsize": {"type": "number"},
                "allowonlyselect": {"type": "boolean", "value": false},
                "class": {"type": "string", "pattern": this.classRegex},
                "backgroundcolor": {"type": "string", "widget": "color"},
                "onBeforeadd": {"type": "event", "options": this.widgetEventOptions, "widget": "eventlist"},
                "onChange": {"type": "event", "options": this.widgetEventOptions, "widget": "eventlist"}
            },


            "wm.select": {
                "autofocus": {"type": "boolean"},
                "readonly": {"type": "boolean", "value": false, "bindable": "in-bound"},
                "scopedatavalue": {"type": "string"},
                "datavalue": {"type": "string, number, boolean, date, time, object", "bindable": "in-out-bound", "widget": "string", "getTypeFrom": "dataset", "getIsListFrom": "expr:multiple"},
                "scopedataset": {"type": "string"},
                "dataset": {"type": "array, object", "bindable": "in-bound", "widget": "string"},
                "allownone": {"type": "boolean"},
                "hasdownarrow": {"type": "boolean", "value": true},
                "restrictvalues": {"type": "boolean", "value": true},
                "disabled": {"value": false, "bindable": "in-bound"},
                "multiple": {"type": "boolean", "value": false},
                "placeholder": {"type": "string", "value": "", "bindable": "in-bound"},
                "shortcutkey": {"type": "string"},
                "class": {"type": "string", "pattern": this.classRegex, "widget": "list-picker", "options": ["input-lg", "input-sm"]},
                "backgroundcolor": {"type": "string", "widget": "color"},
                "displayValue": {"type": "string", "getIsListFrom": "expr:multiple", "show": false, "bindable": "out-bound"}
            },

            "wm.marquee": {
                "height": {"type": "string", "pattern": this.dimensionRegex},
                "width": {"type": "string", "pattern": this.dimensionRegex},
                "direction": {"type": "list", "options": ["up", "down", "left", "right"]},
                "behavior": {"type": "list", "options": ["scroll", "slide", "alternate"]},
                "scrolldelay": {"type": "number"},
                "scrollamount": {"type": "number"}
            },

            "wm.label": {
                "caption": {"type": "date, string, number", "widget": "string", "value": "Label", "bindable": "in-out-bound", "maxlength": 256, "showPrettyExprInDesigner": true},
                "required": {"type": "boolean"},
                "showindevice": {"type": "select-all", "options": this.showInDeviceOptions, "value": "all", "displaytype": 'inline-block'},
                "animation": {"type": "list", "options": this.animationOptions},
                "class": {"type": "string", "pattern": this.classRegex, "widget": "list-picker", "options": [ "h1", "h2", "h3", "h4", "h5", "h6", "p", "text-ellipsis", "text-left", "text-right", "text-center", "text-muted", "text-primary", "text-success", "text-info", "text-warning", "text-danger", "label-default", "label-primary", "label-success", "label-info", "label-warning", "label-danger", "vertical-align-top", "vertical-align-middle", "vertical-align-bottom", "lead", "badge", "form-control-static", "control-label"]},
                "conditionalclass": {"bindable": "in-bound"},
                "whitespace": {"type": "list", "options": [" ", "normal", "nowrap", "pre", "pre-line", "pre-wrap"], "value": " "},
                "wordbreak": {"type": "list", "options": ["break-word", "normal"]},
                "horizontalalign": {"type": "string", "options": ["left", "center", "right"], "widget": "icons-align", "show": false}
            },

            "wm.picture": {
                "hint": {"type": "string", "bindable": "in-bound"},
                "height": {"type": "string", "pattern": this.dimensionRegex},
                "width": {"type": "string", "pattern": this.dimensionRegex},
                "picturesource": {"type": "string", "bindable": "in-out-bound"},
                "pictureplaceholder": {"type": "string", "value": "resources/images/imagelists/default-image.png", "bindable": "in-bound", "widget": "string"},
                "encodeurl": {"type": "boolean", "value": false},
                "pictureaspect": {"type": "list", "options": ["Both", "H", "None", "V"], "value": "None"},
                "disabled": {"type": "boolean", "show": false, "bindable": "in-bound"},
                "tabindex": {"type": "number", "value": "0"},
                "shape":  {"type": "list", "options": ["", "rounded", "circle", "thumbnail"]},
                "showindevice": {"type": "select-all", "options": this.showInDeviceOptions, "value": "all", "displaytype": 'inline-block'},
                "animation": {"type": "list", "options": this.animationOptions},
                "class": {"type": "string", "pattern": this.classRegex, "widget": "list-picker", "options": ["img-responsive"]},
                "margin": {"type": "string", "widget": "box-model"},
                "borderwidth": {"type": "string", "widget": "box-model"},
                "borderstyle": {"type": "string", "options": ["dashed", "dotted", "none", "solid"], "widget": "border-style"},
                "bordercolor": {"type": "string", "widget": "color"},
                "padding": {"type": "string", "widget": "box-model"},
                "backgroundcolor": {"type": "string", "widget": "color"},
                "backgroundgradient": {"type": "string"},
                "backgroundimage": {"type": "string", "bindable": "in-bound"},
                "backgroundrepeat": {"type": "list", "options": ["no-repeat", "repeat", "repeat-x", "repeat-y"]},
                "backgroundsize": {"type": "string", "hint": "width, height"},
                "backgroundposition": {"type": "string", "hint": "top, left"},
                "backgroundattachment": {"type": "list", "options": ["fixed", "local", "scroll"]},
                "cursor": {"type": "list", "options": ["default", "pointer"]}
            },
            "wm.picture.mobile" : {
                "offline": {"type": "boolean", "value" : true}
            },
            "wm.textarea": {
                "autofocus": {"type": "boolean"},
                "readonly": {"type": "boolean", "bindable": "in-bound"},
                "datavalue": {"type": "string", "bindable": "in-out-bound"},
                "scopedatavalue": {"type": "string"},
                "placeholder": {"type": "string", "value": "Place your text", "bindable": "in-bound"},
                "maxchars": {"type": "number",  "bindable": "in-bound"},
                "updateon": {"type": "list", "value": "blur", "widget": "update-on"},
                "updatedelay": {"type": "number", "value": 0},
                "shortcutkey": {"type": "string"},
                "class": {"type": "string", "pattern": this.classRegex, "widget": "list-picker", "options": ["input-lg", "input-sm"]},
                "backgroundcolor": {"type": "string", "widget": "color"}
            },

            "wm.basicdialog": {
                "show": {"type": "boolean", "show": false },
                "height": {"type": "string", "pattern": this.dimensionRegex},
                "width": {"type": "string", "pattern": this.dimensionRegex},
                "onOpened": {"type": "event", "options": this.widgetEventOptions, "widget": "eventlist"},
                "animation": {"type": "list", "options": this.animationOptions},
                "tabindex": {"type": "number", "value": "0"},
                "title": {"type": "string", "maxlength": 256, "bindable": "in-bound", "showPrettyExprInDesigner": true},
                "iconclass": {"type": "string", "widget": "select-icon", "bindable": "in-out-bound", "pattern": this.classRegex},
                "iconwidth": {"type": "string", "pattern": this.dimensionRegex},
                "iconheight": {"type": "string", "pattern": this.dimensionRegex},
                "iconmargin": {"type": "string", "pattern": this.dimensionRegex},
                "actiontitle": {"type": "string", "show": false, "pattern": this.dimensionRegex},
                "actionlink": {"type": "string", "show": false, "pattern": this.dimensionRegex},
                "closable": {"type": "boolean", "show": true, "value": true},
                "contentclass": {"type": "string", "pattern": this.classRegex, "show": false}
            },
            "wm.dialog.dialogheader": {
                "caption": {"type": "string", "maxlength": 256, "bindable": "in-bound", "showPrettyExprInDesigner": true},
                "iconclass": {"type": "string", "widget": "select-icon", "bindable": "in-out-bound", "pattern": this.classRegex},
                "iconwidth": {"type": "string", "pattern": this.dimensionRegex},
                "iconheight": {"type": "string", "pattern": this.dimensionRegex},
                "iconmargin": {"type": "string", "pattern": this.dimensionRegex},
                "closable": {"type": "boolean", "show": true, "value": true}
            },
            "wm.dialog.onOk": {
                "onOk": {"type": "event", "options": this.widgetEventOptions, "widget": "eventlist"}
            },

            "wm.alertdialog": {
                "title": {"type": "string", "value": "Alert", "bindable": "in-bound", "showPrettyExprInDesigner": true},
                "oktext": {"type": "string", "value": "OK", "bindable": "in-bound", "showPrettyExprInDesigner": true},
                "iconclass": {"type": "string", "widget": "select-icon", "bindable": "in-out-bound", "value": "wi wi-warning", "pattern": this.classRegex},
                "message": {"type": "string", "value": "I am an alert box!", "bindable": "in-bound", "showPrettyExprInDesigner": true},
                "alerttype": {"type": "list", "options": ["error", "information", "success", "warning"], "value": "error"},
                "modal": {"type": "boolean", "value": false},
                "keyboard": {"type": "boolean", "value": true, "show": false}
            },
            "wm.confirmdialog": {
                "title": {"type": "string", "value": "Confirm", "bindable": "in-bound", "showPrettyExprInDesigner": true},
                "canceltext": {"type": "string", "value": "CANCEL", "bindable": "in-bound", "showPrettyExprInDesigner": true},
                "oktext": {"type": "string", "value": "OK", "bindable": "in-bound", "showPrettyExprInDesigner": true},
                "iconclass": {"type": "string", "widget": "select-icon", "bindable": "in-out-bound", "value": "wi wi-done", "pattern": this.classRegex},
                "message": {"type": "string", "value": "I am confirm box!", "bindable": "in-bound", "showPrettyExprInDesigner": true},
                "onCancel": {"type": "event", "options": this.widgetEventOptions, "widget": "eventlist"},
                "modal": {"type": "boolean", "value": false},
                "keyboard": {"type": "boolean", "value": true, "show": false}
            },
            "wm.iframedialog": {
                "title": {"type": "string", "value": "External Content", "bindable": "in-bound", "showPrettyExprInDesigner": true},
                "url": {"type": "string", "value": "http://www.wavemaker.com", "bindable": "in-out-bound"},
                "encodeurl": {"type": "boolean", "value": false},
                "height": {"type": "string", "value": "400", "pattern": this.dimensionRegex},
                "onClose": {"type": "event", "options": this.widgetEventOptions, "widget": "eventlist"},
                "iconclass": {"type": "string", "widget": "select-icon", "bindable": "in-out-bound", "value": "wi wi-globe", "pattern": this.classRegex},
                "oktext": {"type": "string", "value": "OK", "bindable": "in-bound", "showPrettyExprInDesigner": true},
                "closable": {"type": "boolean", "value": true},
                "showactions": {"type": "boolean", "value": true},
                "showheader": {"type": "boolean", "value": true},
                "modal": {"type": "boolean", "value": false},
                "keyboard": {"type": "boolean", "value": true, "show": false}
            },
            "wm.pagedialog": {
                "title": {"type": "string", "value": "Page Content", "bindable": "in-bound", "showPrettyExprInDesigner": true},
                "oktext": {"type": "string", "value": "OK", "bindable": "in-bound", "showPrettyExprInDesigner": true},
                "onClose": {"type": "event", "options": this.widgetEventOptions, "widget": "eventlist"},
                "iconclass": {"type": "string", "widget": "select-icon", "bindable": "in-out-bound", "value" : "wi wi-file", "pattern": this.classRegex},
                "closable": {"type": "boolean", "value": true},
                "showactions": {"type": "boolean", "value": true},
                "modal": {"type": "boolean", "value": false},
                "keyboard": {"type": "boolean", "value": true, "show": false}
            },
            "wm.logindialog": {
                "tabindex": {"show": false},
                "height": {"type": "string", "show": false, "pattern": this.dimensionRegex},
                "onClose": {"type": "event", "options": this.widgetEventOptions, "widget": "eventlist"},
                "closable": {"type": "boolean", "value": false, "show": false},
                "modal": {"type": "boolean", "value": true},
                "keyboard": {"type": "boolean", "value": true, "show": false},
                "onSubmit": {"type": "event", "options": this.widgetEventOptions, "widget": "eventlist"},
                "title": {"type": "string", "maxlength": 256, "bindable": "in-bound", "showPrettyExprInDesigner": true},
                "iconclass": {"type": "string", "widget": "select-icon", "bindable": "in-out-bound", "pattern": this.classRegex},
                "iconwidth": {"type": "string", "pattern": this.dimensionRegex},
                "iconheight": {"type": "string", "pattern": this.dimensionRegex},
                "iconmargin": {"type": "string", "pattern": this.dimensionRegex}
            },
            "wm.designdialog": {
                "modal": {"type": "boolean", "value": false},
                "onClose": {"type": "event", "options": this.widgetEventOptions, "widget": "eventlist"},
                "keyboard": {"type": "boolean", "value": true, "show": false},
                "closable": {"type": "boolean", "value": true},
                "title": {"type": "string"},
                "showheader": {"type": "boolean", "value": true}
            },
            "wm.spinner": {
                "show": {"type": "boolean", "value": false},
                "caption": {"type": "string", "value": "Loading...", "maxlength": 256},
                "servicevariabletotrack": {"type": "list", "options": [], "widget": "multi-select"},
                "iconclass": {"type": "string", "value": "fa fa-circle-o-notch", "widget": "select-icon", "bindable": "in-out-bound", "pattern": this.classRegex},
                "iconsize": {"type": "string", "pattern": this.dimensionRegex},
                "image": {"type": "string", "bindable": "in-bound"},
                "imagewidth": {"type": "string", "value": "20px"},
                "imageheight": {"type": "string"},
                "animation" : {"type": "list", "value": "spin", "options": this.spinnerAnimationOptions},
                "type" : {"type": "list", "value": "icon", "options": ["image", "icon"]},
                "backgroundcolor": {"type": "string", "widget": "color"},
                "backgroundgradient": {"type": "string"},
                "backgroundimage": {"type": "string", "bindable": "in-bound"},
                "backgroundrepeat": {"type": "list", "options": ["no-repeat", "repeat", "repeat-x", "repeat-y"]},
                "backgroundsize": {"type": "string", "hint": "width, height"},
                "backgroundposition": {"type": "string", "hint": "top, left"},
                "backgroundattachment": {"type": "list", "options": ["fixed", "local", "scroll"]},
                "color": {"type": "string", "widget": "color"},
                "fontweight": {"type": "string", "options": ["bold"], "hidelabel": true, "widget": "toggle-checkbox"},
                "fontsize": {"type": "number", "hint": "Font size", "pattern": this.numberRegex},
                "fontunit": {"type": "string", "options": ["em", "px", "pt"], "value": "px", "hidelabel": true, "widget": "icons-radio"},
                "textdecoration": {"type": "string", "options": ["underline"], "hidelabel": true, "widget": "toggle-checkbox"},
                "fontstyle": {"type": "string", "options": ["italic"], "widget": "toggle-checkbox"},
                "fontVariant": {"type": "list", "options": ["normal", "small-caps"]},
                "fontfamily": {"type": "string", "hint": "Arial, Geneva"}
            },

            'wm.layouts': {
                "name": {"type": "string", "pattern": this.nameRegex, "maxlength": 32},
                "class": {"type": "string", "pattern": this.classRegex},
                "borderwidth": {"type": "string", "widget": "box-model"},
                "borderstyle": {"type": "string", "options": ["dashed", "dotted", "none", "solid"], "widget": "border-style"},
                "bordercolor": {"type": "string", "widget": "color"},
                "padding": {"type": "string", "widget": "box-model"},
                "backgroundcolor": {"type": "string", "widget": "color"},
                "backgroundgradient": {"type": "string"},
                "backgroundimage": {"type": "string", "bindable": "in-bound"},
                "backgroundrepeat": {"type": "list", "options": ["no-repeat", "repeat", "repeat-x", "repeat-y"]},
                "backgroundsize": {"type": "string", "hint": "width, height"},
                "backgroundposition": {"type": "string", "hint": "top, left"},
                "backgroundattachment": {"type": "list", "options": ["fixed", "local", "scroll"]},
                "color": {"type": "string", "widget": "color"},
                "overflow": {"type": "list", "options": ["visible", "hidden", "scroll", "auto", "initial", "inherit"]},
                "accessroles": {"type": "access-roles-select", "options": this.roles, "value": this.EVERYONE}
            },
            'wm.containers': {
                "name": {"type": "string", "pattern": this.nameRegex, "maxlength": 32},
                "class": {"type": "string", "pattern": this.classRegex},
                "show": {"type": "boolean", "value": true, "bindable": "in-bound"},
                "deferload": {"type": "boolean", "value": false, "show": false},
                "height": {"type": "string", "pattern": this.dimensionRegex},
                "width": {"type": "string", "pattern": this.dimensionRegex},
                "accessroles": {"type": "access-roles-select", "options": this.roles, "value": this.EVERYONE},
                "showindevice": {"type": "select-all", "options": this.showInDeviceOptions, "value": "all", "displaytype": 'block'},
                "padding": {"type": "string", "widget": "box-model"},
                "backgroundcolor": {"type": "string", "widget": "color"},
                "backgroundgradient": {"type": "string"},
                "backgroundimage": {"type": "string", "bindable": "in-bound"},
                "backgroundrepeat": {"type": "list", "options": ["no-repeat", "repeat", "repeat-x", "repeat-y"]},
                "backgroundsize": {"type": "string", "hint": "width, height"},
                "backgroundposition": {"type": "string", "hint": "top, left"},
                "backgroundattachment": {"type": "list", "options": ["fixed", "local", "scroll"]},
                "color": {"type": "string", "widget": "color"},
                "fontweight": {"type": "string", "options": ["bold"], "hidelabel": true, "widget": "toggle-checkbox"},
                "fontsize": {"type": "number", "hint": "Font size", "pattern": this.numberRegex},
                "fontunit": {"type": "string", "options": ["em", "px", "pt"], "value": "px", "hidelabel": true, "widget": "icons-radio"},
                "textdecoration": {"type": "string", "options": ["underline"], "hidelabel": true, "widget": "toggle-checkbox"},
                "fontstyle": {"type": "string", "options": ["italic"], "widget": "toggle-checkbox"},
                "fontfamily": {"type": "string", "hint": "Arial, Geneva"},
                "horizontalalign": {"type": "string", "options": ["left", "center", "right"], "widget": "icons-align"}


            },
            'wm.containers.borderstyle': {
                "borderwidth": {"type": "string", "widget": "box-model"},
                "borderstyle": {"type": "string", "options": ["dashed", "dotted", "none", "solid"], "widget": "border-style"},
                "bordercolor": {"type": "string", "widget": "color"}
            },

            'wm.containers.lazy' : {
                "loadmode" : {"type" : "list", "options" : ["", "after-select", "after-delay"], "value" : ""},
                "loaddelay" : {"type" : "number", "min": "10", "value" : "10"},
                "onReady" : {"type" : "event", "options": this.widgetEventOptions, "widget": "eventlist"}
            },

            'wm.layouts.header': {
                "height": {"type": "string", "pattern": this.dimensionRegex}
            },
            'wm.layouts.list': {
                "height": {"type": "string", "pattern": this.dimensionRegex},
                "show": {"type": "boolean", "value": true, "bindable": "in-out-bound"},
                "layout":  {"type": "list", "options": ["inline", "vertical"], "value": "vertical"},
                "showindevice": {"type": "select-all", "options": this.showInDeviceOptions, "value": "all", "displaytype": 'block'},
                "class": {"type": "string", "pattern": this.classRegex, "widget": "list-picker", "options": ["list-inline", "list-group"]},
                "name": {"type": "string", "pattern": this.nameRegex, "maxlength": 32},
                "overflow": {"type": "list", "options": ["visible", "hidden", "scroll", "auto", "initial", "inherit"]}
            },
            'wm.layouts.breadcrumb': {
                "height": {"type": "string", "pattern": this.dimensionRegex},
                "show": {"type": "boolean", "value": true, "bindable": "in-out-bound"},
                "dataset": {"type": "array, object", "bindable": "in-bound", "widget": "string"},
                "scopedataset": {"type": "string"},
                "itemid": {"type": "string", "widget": "list", "datasetfilter" : "terminals", "bindable": "in-bound", "bindonly": "expression"},
                "itemaction": {"show": false},
                "userrole": {"show": false},
                "onBeforenavigate": {"type": "event", "options": this.widgetEventOptions, "widget": "eventlist"}
            },
            'wm.layouts.nav': {
                "height": {"type": "string", "pattern": this.dimensionRegex},
                "show": {"type": "boolean", "value": true, "bindable": "in-out-bound"},
                "layout":  {"type": "list", "options": ["", "stacked", "justified"]},
                "dataset": {"type": "array, object", "bindable": "in-bound", "widget": "string"},
                "scopedataset": {"type": "string"},
                "type":  {"type": "list", "options": ["pills", "tabs"]},
                "itemicon": {"type": "list", "options": [""], "datasetfilter" : "terminals"},
                "itemlabel": {"type": "list", "options": [""], "datasetfilter" : "terminals"},
                "itemlink": {"type": "list", "options": [""], "datasetfilter" : "terminals"},
                "itembadge": {"type": "list", "options": [""], "datasetfilter" : "terminals"},
                "itemaction": {"type": "list", "options": [""], "datasetfilter" : "terminals"},
                "itemchildren": {"type": "list", "options": [""], "datasetfilter" : "objects"},
                "userrole": {"type": "list", "options": [""], "datasetfilter" : "terminals"},
                "addchild": {"hidelabel": true, "options": [{'label': 'Anchor', 'widgettype': 'wm-anchor', 'defaults': {'wm-anchor': {'iconclass': 'wi wi-file', 'margin': ''} } }, {'label': 'Menu', 'widgettype': 'wm-menu', 'defaults': {'wm-menu': {'iconclass': 'wi wi-file'} } }, {'label': 'Popover', 'widgettype': 'wm-popover', 'defaults': {'wm-popover': {'iconclass': 'wi wi-file'} } }, {'label': 'Button', 'widgettype': 'wm-button', 'defaults': {'wm-button': {'iconclass': 'wi wi-file'} } }], "widget": "add-widget"},
                "selecteditem": {"type": "object", "bindable": "in-out-bound", "show": false, "widget": "string", "getTypeFrom": "dataset"},
                "onSelect": {"type": "event", "options": this.widgetEventOptions, "widget": "eventlist"},
                "class": {"type": "string", "pattern": this.classRegex, "widget": "list-picker", "options": ["app-header-actions"]},
                "orderby": {"type": "list", "widget": "order-by", "datasetfilter": "terminals"},
                "overflow": {"type": "list", "options": ["visible", "hidden", "scroll", "auto", "initial", "inherit"]},
                "margin": {"type": "string", "widget": "box-model"},
                "autoclose": {"type": "list", "options": ["outsideClick", "always", "disabled"], "value": "always"}
            },
            'wm.layouts.navbar': {
                "height": {"type": "string", "pattern": this.dimensionRegex},
                "show": {"type": "boolean", "value": true, "bindable": "in-out-bound"},
                "menuiconclass": {"type": "string", "widget": "select-icon", "pattern": this.classRegex, "value": "wi wi-more-vert"},
                "title": {"type": "string", "bindable": "in-bound", "showPrettyExprInDesigner": true},
                "imgsrc": {"type": "string", "bindable": "in-bound"},
                "backgroundcolor": {"type": "string", "widget": "color"},
                "backgroundgradient": {"type": "string"},
                "backgroundimage": {"type": "string", "bindable": "in-bound"},
                "backgroundrepeat": {"type": "list", "options": ["no-repeat", "repeat", "repeat-x", "repeat-y"]},
                "backgroundsize": {"type": "string", "hint": "width, height"},
                "backgroundposition": {"type": "string", "hint": "top, left"},
                "backgroundattachment": {"type": "list", "options": ["fixed", "local", "scroll"]},
                "class": {"type": "string", "pattern": this.classRegex, "widget": "list-picker", "options": ["navbar-inverse"]}
            },
            'wm.layouts.mobile.navbar': {
                "height": {"type": "string", "pattern": this.dimensionRegex},
                "show": {"type": "boolean", "value": true, "bindable": "in-out-bound"},
                "title": {"type": "string", "bindable": "in-bound", "showPrettyExprInDesigner": true},
                "leftnavpaneliconclass": {"type": "string", "widget": "select-icon", "pattern": this.classRegex, "value": "wi wi-menu"},
                "backbutton":  {"type": "boolean", "value": true},
                "backbuttoniconclass": {"type": "string", "widget": "select-icon", "pattern": this.classRegex, "value": "wi wi-back"},
                "backbuttonlabel":  {"type": "string"},
                "searchbutton":  {"type": "boolean", "value": false},
                "searchbuttoniconclass": {"type": "string", "widget": "select-icon", "pattern": this.classRegex, "value": "wi wi-search", "show": false},
                "searchbuttonlabel":  {"type": "string", "show": false},
                "searchplaceholder": {"type": "string", "value": "Search", "show": false},
                "onSearch": {"type": "event", "options": this.widgetEventOptions, "widget": "eventlist"},
                "onBackbtnclick": {"type": "event", "options": this.widgetEventOptions, "widget": "eventlist"},
                "imgsrc": {"type": "string", "bindable": "in-bound"},
                "scopedatavalue": {"type": "string"},
                "datavalue": {"type": "string, object", "widget": "string", "bindable": "in-out-bound", "getTypeFrom": "dataset"},
                "scopedataset": {"type": "string"},
                "dataset": {"type": "array, object", "bindable": "in-bound", "widget": "string"},
                "searchkey": {"type": "string", "widget": "select-all", "datasetfilter" : "terminals"},
                "displaylabel": {"type": "string", "widget": "list", "options": [""], "bindable": "in-bound", "bindonly": "expression", "datasetfilter" : "terminals"},
                "displayimagesrc": {"type": "string", "widget": "list", "options": [""], "bindable": "in-bound", "bindonly": "expression", "datasetfilter" : "terminals"},
                "datafield": {"type": "list", "options": ["All Fields"], "value": "All Fields", "datasetfilter" : "terminals", "allfields" : true},
                "defaultview": {"type": "select-by-object", "options": [{"label": "action-view", "value": "actionview"}, {"label": "search-view", "value": "searchview"}], "value": "actionview", "displayfield": "label", "datafield": "value" },
                "query": {"type": "string", "bindable": "in-out-bound", "value": ""},
                "addchild": {"label": "Add", "hidelabel": true, "options": [{"label": "Anchor", "widgettype": "wm-anchor", "defaults": {"iconclass": "wi wi-gear", "caption": "", "margin": ""}}, {"label": "Menu", "widgettype": "wm-menu", "defaults": {"iconclass": "wi wi-more-vert", "type": "anchor", "caption": ""}}, {"label": "Popover", "widgettype": "wm-popover", "defaults": {"iconclass": "wi wi-bell", "caption": ""}}, {"label": "Button", "widgettype": "wm-button", "defaults": {"iconclass": "", "class": "navbar-btn btn-primary", "caption": "Action"}}], "widget": "add-widget"},
                "backgroundcolor": {"type": "string", "widget": "color"},
                "backgroundgradient": {"type": "string"},
                "backgroundimage": {"type": "string", "bindable": "in-bound"},
                "backgroundrepeat": {"type": "list", "options": ["no-repeat", "repeat", "repeat-x", "repeat-y"]},
                "backgroundsize": {"type": "string", "hint": "width, height"},
                "backgroundposition": {"type": "string", "hint": "top, left"},
                "backgroundattachment": {"type": "list", "options": ["fixed", "local", "scroll"]}

            },
            'wm.layouts.listtemplate': {
                "name": {"type": "string", "pattern": this.nameRegex, "maxlength": 32}
            },
            'wm.layouts.mediatemplate': {
                "width": {"type": "string", "pattern": this.dimensionRegex, "value": "100pt"},
                "height": {"type": "string", "pattern": this.dimensionRegex, "value": "100pt"}
            },
            'wm.layouts.listitem': {
                "height": {"type": "string", "pattern": this.dimensionRegex},
                "width": {"type": "string", "pattern": this.dimensionRegex},
                "name": {"type": "string", "pattern": this.nameRegex, "maxlength": 32},
                "class": {"type": "string", "pattern": this.classRegex, "widget": "list-picker", "options": ["list-group-item", "list-group-item-success", "list-group-item-info", "list-group-item-warning", "list-group-item-danger"]}
            },
            'wm.layouts.topnav': {
                "height": {"type": "string", "pattern": this.dimensionRegex}
            },
            'wm.layouts.leftpanel': {
                "columnwidth": {"type": "list", "options": this.columnWidths, "value": "2"},
                "xscolumnwidth": {"type": "list", "options": this.columnWidths, "value": "10", "show" : false},
                "animation" : {"type": "list", "options": ["slide-in", "slide-over"], "value" : "slide-in"}
            },

            'wm.layouts.leftpanel.tab': {
                "columnwidth": {"type": "list", "options": this.columnWidths, "value": "3"},
                "xscolumnwidth": {"type": "list", "options": this.columnWidths, "value": "10", "show" : false}
            },
            'wm.layouts.leftpanel.mobile': {
                "columnwidth": {"type": "list", "options": this.columnWidths, "value": "3", "show" : false},
                "xscolumnwidth": {"type": "list", "options": this.columnWidths, "value": "10", "show" : true}
            },
            'wm.layouts.rightpanel': {
                "columnwidth": {"type": "list", "options": this.columnWidths, "value": "2"}
            },
            'wm.layouts.content': {
                "height": {"type": "string", "pattern": this.dimensionRegex}
            },
            'wm.layouts.panel': {
                "height": {"type": "string", "pattern": this.dimensionRegex},
                "title": {"type": "string", "bindable": "in-bound", "showPrettyExprInDesigner": true},
                "subheading": {"type": "string", "bindable": "in-bound", "showPrettyExprInDesigner": true},
                "iconclass": {"type": "string", "widget": "select-icon", "bindable": "in-out-bound", "pattern": this.classRegex, "label": 'Title Icon Class'},
                "conditionalclass": {"bindable": "in-bound"},
                "iconurl": {"type": "string", "bindable": "in-bound", "showPrettyExprInDesigner": true},
                "iconwidth": {"type": "string", "pattern": this.dimensionRegex},
                "iconheight": {"type": "string", "pattern": this.dimensionRegex},
                "iconmargin": {"type": "string", "pattern": this.dimensionRegex},
                "collapsible": {"type": "boolean"},
                "enablefullscreen": {"type": "boolean"},
                "expanded": {"type": "boolean", "value": true},
                "closable": {"type": "boolean"},
                "helptext": {"type": "string", "bindable": "in-out-bound", "widget": "textarea", "showPrettyExprInDesigner": true},
                "actions": {"type": "array, object", "bindable": "in-bound", "widget": "string"},
                "badgevalue": {"type": "string, number", "widget": "string", "bindable": "in-out-bound", "showPrettyExprInDesigner": true},
                "badgetype": {"type": "string", "widget": "list", "options": ["default", "primary", "success", "info", "warning", "danger"], "value": "default", "bindable": "in-out-bound"},
                "margin": {"type": "string", "widget": "box-model"},
                /*Events*/
                "onEnterkeypress": {"type": "event", "options": this.widgetEventOptions, "widget": "eventlist"},
                "onMouseenter": {"type": "event", "options": this.widgetEventOptions, "widget": "eventlist"},
                "onMouseleave": {"type": "event", "options": this.widgetEventOptions, "widget": "eventlist"},
                "onMouseout": {"type": "event", "options": this.widgetEventOptions, "widget": "eventlist"},
                "onMouseover": {"type": "event", "options": this.widgetEventOptions, "widget": "eventlist"},
                "onClose": {"type": "event", "options": this.widgetEventOptions, "widget": "eventlist"},
                "onExpand": {"type": "event", "options": this.widgetEventOptions, "widget": "eventlist"},
                "onCollapse": {"type": "event", "options": this.widgetEventOptions, "widget": "eventlist"},
                "onFullscreen": {"type": "event", "options": this.widgetEventOptions, "widget": "eventlist"},
                "onExitfullscreen": {"type": "event", "options": this.widgetEventOptions, "widget": "eventlist"},
                "onActionsclick": {"type": "event", "options": this.widgetEventOptions, "widget": "eventlist"},
                "animation": {"type": "list", "options": this.animationOptions}
            },
            'wm.layouts.panel.defaults': {
                "class": {"type": "string", "pattern": this.classRegex, "widget": "list-picker", "options": ["panel-default", "panel-primary", "panel-success", "panel-info", "panel-warning", "panel-danger"]}
            },
            'wm.layouts.card': {
                "title": {"type": "string", "bindable": "in-bound", "showPrettyExprInDesigner": true},
                "subheading": {"type": "string", "bindable": "in-bound", "showPrettyExprInDesigner": true},
                "iconclass": {"type": "string", "widget": "select-icon", "bindable": "in-out-bound", "pattern": this.classRegex, "label": 'Title Icon Class'},
                "iconurl": {"type": "string", "bindable": "in-bound", "showPrettyExprInDesigner": true},
                "margin": {"type": "string", "widget": "box-model"},
                "picturesource": {"type": "string", "value": "", "bindable": "in-out-bound"},
                "picturetitle": {"type": "string", "bindable": "in-bound"},
                "imageheight": {"type": "string", "value": "200px"},
                "width": {"type": "string", "pattern": this.dimensionRegex},
                "height": {"type": "string", "pattern": this.dimensionRegex},
                "actions": {"type": "array, object", "bindable": "in-bound", "widget": "string"},
                /*Events*/
                "onEnterkeypress": {"type": "event", "options": this.widgetEventOptions, "widget": "eventlist"},
                "onMouseenter": {"type": "event", "options": this.widgetEventOptions, "widget": "eventlist"},
                "onMouseleave": {"type": "event", "options": this.widgetEventOptions, "widget": "eventlist"},
                "onMouseout": {"type": "event", "options": this.widgetEventOptions, "widget": "eventlist"},
                "onMouseover": {"type": "event", "options": this.widgetEventOptions, "widget": "eventlist"},
                "animation": {"type": "list", "options": this.animationOptions},
                "class": {"type": "string", "pattern": this.classRegex}
            },

            'wm.layouts.cardcontent': {
                "width": {"type": "string", "pattern": this.dimensionRegex, 'show': false}
            },
            'wm.layouts.cardactions': {
                "horizontalalign": {"type": "string", "options": ["left", "center", "right"], "widget": "icons-align"}
            },
            'wm.layouts.cardfooter': {
                "horizontalalign": {"type": "string", "options": ["left", "center", "right"], "widget": "icons-align"}
            },
            'wm.layouts.container': {
                "margin": {"type": "string", "widget": "box-model"},
                "borderwidth": {"type": "string", "widget": "box-model"},
                "borderstyle": {"type": "string", "options": ["dashed", "dotted", "none", "solid"], "widget": "border-style"},
                "bordercolor": {"type": "string", "widget": "color"},
                "opacity": {"type": "string", "widget": "slider"},
                "cursor": {"type": "list", "options": ["crosshair", "default", "e-resize", "help", "move", "n-resize", "ne-resize", "nw-resize", "pointer", "progress", "s-resize", "se-resize", "sw-resize", "text", "wait", "w-resize"]},
                "zindex": {"type": "string", "pattern": this.zindexRegex},
                "visibility": {"type": "list", "options": this.visibilityOptions},
                "display": {"type": "list", "options": this.displayOptions},
                "conditionalclass": {"bindable": "in-bound"},
                /*Events*/
                "onEnterkeypress": {"type": "event", "options": this.widgetEventOptions, "widget": "eventlist"},
                "onClick": {"type": "event", "options": this.widgetEventOptions, "widget": "eventlist"},
                "onDblclick": {"type": "event", "options": this.widgetEventOptions, "widget": "eventlist"},
                "onTap": {"type": "event", "options": this.widgetEventOptions, "widget": "eventlist"},
                "onDoubletap": {"type": "event", "options": this.widgetEventOptions, "widget": "eventlist"},
                "onMouseenter": {"type": "event", "options": this.widgetEventOptions, "widget": "eventlist"},
                "onMouseleave": {"type": "event", "options": this.widgetEventOptions, "widget": "eventlist"},
                "onMouseout": {"type": "event", "options": this.widgetEventOptions, "widget": "eventlist"},
                "onMouseover": {"type": "event", "options": this.widgetEventOptions, "widget": "eventlist"},
                "animation": {"type": "list", "options": this.animationOptions},
                "class": {"type": "string", "pattern": this.classRegex, "widget": "list-picker", "options": ["well", "alert", "alert-success", "alert-info", "alert-warning", "alert-danger", "bordered"]},
                "overflow": {"type": "list", "options": ["visible", "hidden", "scroll", "auto", "initial", "inherit"]}
            },
            'wm.layouts.tile': {
                "margin": {"type": "string", "widget": "box-model"},
                "conditionalclass": {"bindable": "in-bound"},
                /*Events*/
                "onEnterkeypress": {"type": "event", "options": this.widgetEventOptions, "widget": "eventlist"},
                "onClick": {"type": "event", "options": this.widgetEventOptions, "widget": "eventlist"},
                "onDblclick": {"type": "event", "options": this.widgetEventOptions, "widget": "eventlist"},
                "onTap": {"type": "event", "options": this.widgetEventOptions, "widget": "eventlist"},
                "onDoubletap": {"type": "event", "options": this.widgetEventOptions, "widget": "eventlist"},
                "onMouseenter": {"type": "event", "options": this.widgetEventOptions, "widget": "eventlist"},
                "onMouseleave": {"type": "event", "options": this.widgetEventOptions, "widget": "eventlist"},
                "onMouseout": {"type": "event", "options": this.widgetEventOptions, "widget": "eventlist"},
                "onMouseover": {"type": "event", "options": this.widgetEventOptions, "widget": "eventlist"},
                "animation": {"type": "list", "options": this.animationOptions},
                "class": {"type": "string", "pattern": this.classRegex, "widget": "list-picker", "options": ["card", "well", "bg-primary", "bg-success", "bg-info", "bg-warning", "bg-danger"]}
            },
            'wm.layouts.footer': {
                "height": {"type": "string", "pattern": this.dimensionRegex},
                "class": {"type": "string", "pattern": this.classRegex, "widget": "list-picker", "options": ["card-footer"]}
            },
            'wm.layouts.layoutgrid': {
                "name": {"type": "string", "pattern": this.nameRegex, "maxlength": 32},
                "class": {"type": "string", "pattern": this.classRegex, "widget": "list-picker", "value": "condensed", "options": ["condensed", "standard", "bordered"]},
                "height": {"type": "string", "pattern": this.dimensionRegex},
                "width": {"type": "string", "pattern": this.dimensionRegex},
                "show": {"type": "boolean", "value": true, "bindable": "in-bound"},
                "deferload": {"type": "boolean", "value": false, "show": false},
                "insert": {"type": "toolbar", "actions": [{'action': 'addrow', 'label': 'LABEL_PROPERTY_ADDROW', 'icon': 'wms wms-add-row'}]},
                "columns": {"type": "list", "options": ["1", "2", "3", "4", "6", "12"]},
                "backgroundcolor": {"type": "string", "widget": "color", "show": false},
                "backgroundgradient": {"type": "string", "show": false},
                "backgroundimage": {"type": "string", "bindable": "in-bound", "show": false},
                "backgroundrepeat": {"type": "list", "options": ["no-repeat", "repeat", "repeat-x", "repeat-y"], "show": false},
                "backgroundsize": {"type": "string", "hint": "width, height", "show": false},
                "backgroundposition": {"type": "string", "hint": "top, left", "show": false},
                "backgroundattachment": {"type": "list", "options": ["fixed", "local", "scroll"], "show": false},
                "padding": {"type": "string", "widget": "box-model", "show": false}

            },
            'wm.layouts.gridcolumn': {
                "name": {"type": "string", "pattern": this.nameRegex, "maxlength": 32},
                "horizontalalign": {"type": "string", "options": ["left", "center", "right"], "widget": "icons-align"},
                "borderwidth": {"type": "string", "widget": "box-model", "show": false},
                "borderstyle": {"type": "string", "options": ["dashed", "dotted", "none", "solid"], "widget": "border-style", "show": false},
                "bordercolor": {"type": "string", "widget": "color", "show": false},
                "padding": {"type": "string", "widget": "box-model"},
                "backgroundcolor": {"type": "string", "widget": "color", "show": false},
                "backgroundgradient": {"type": "string", "show": false},
                "backgroundimage": {"type": "string", "bindable": "in-bound", "show": false},
                "backgroundrepeat": {"type": "list", "options": ["no-repeat", "repeat", "repeat-x", "repeat-y"], "show": false},
                "backgroundsize": {"type": "string", "hint": "width, height", "show": false},
                "backgroundposition": {"type": "string", "hint": "top, left", "show": false},
                "backgroundattachment": {"type": "list", "options": ["fixed", "local", "scroll"], "show": false},
                "height": {"type": "string", "pattern": this.dimensionRegex},
                "columnwidth": {"type": "list", "options": this.columnWidths},
                "insert": {"type": "toolbar", "actions": [{'action': 'addcolumnleft', 'label': 'LABEL_PROPERTY_ADDCOLUMNLEFT', 'icon': 'wms wms-add-column-left'}, {'action': 'addcolumnright', 'label': 'LABEL_PROPERTY_ADDCOLUMNRIGHT', 'icon': 'wms wms-add-column-right'}]},
                "class": {"type": "string", "pattern": this.classRegex, "widget": "list-picker", "options": ["visible-xs-block", "visible-sm-block", "visible-md-block", "visible-lg-block", "hidden-xs", "hidden-sm", "hidden-md", "hidden-lg", "bordered", "bordered-left", "bordered-right", "bordered-top", "bordered-bottom"]}
            },
            'wm.layouts.gridrow': {
                "name": {"type": "string", "pattern": this.nameRegex, "maxlength": 32},
                "class": {"type": "string", "pattern": this.classRegex, "widget": "list-picker", "options": ["bordered-top", "bordered-bottom"]},
                "borderwidth": {"type": "string", "widget": "box-model", "show": false},
                "borderstyle": {"type": "string", "options": ["dashed", "dotted", "none", "solid"], "widget": "border-style", "show": false},
                "bordercolor": {"type": "string", "widget": "color", "show": false},
                "padding": {"type": "string", "widget": "box-model"},
                "backgroundcolor": {"type": "string", "widget": "color", "show": false},
                "height": {"type": "string", "pattern": this.dimensionRegex},
                "overflow": {"type": "list", "options": ["visible", "hidden", "scroll", "auto", "initial", "inherit"]},
                "insert": {"type": "toolbar", "actions": [{'action': 'addrowbelow', 'label': 'LABEL_PROPERTY_ADDROWBELOW', 'icon': 'wms wms-add-row-below'}, {'action': 'addrowabove', 'label': 'LABEL_PROPERTY_ADDROWABOVE', 'icon': 'wms wms-add-row-above'}, {'action': 'addcolumn', 'label': 'LABEL_PROPERTY_ADDCOLUMN', 'icon': 'wms wms-add-column'}]}
            },
            'wm.layouts.column': {
                "columnwidth": {"type": "list", "options": this.columnWidths}
            },
            'wm.layouts.pagecontent': {
                "columnwidth": {"type": "list", "options": this.columnWidths},
                "padding": {"type": "string", "widget": "box-model"}
            },
            'wm.layouts.row': {
                "show": {"type": "boolean", "value": true}
            },
            'wm.layouts.view': {
                "show": {"type": "boolean", "value": true, "bindable" : "in-out-bound"},
                "deferload": {"type": "boolean", "value": false, "show": false},
                "viewgroup": {"type": "string", "value": "default"},
                "animation": {"type": "list", "options": this.animationOptions}
            },
            'wm.layouts.form': {
                "title": {"type": "string",  "bindable": "in-bound", "showPrettyExprInDesigner": true},
                "subheading": {"type": "string", "bindable": "in-bound", "showPrettyExprInDesigner": true},
                "novalidate": {"type": "boolean", "show": false},
                "validationtype": {"type": "select-by-object", "options": [{"label": "Default", "value": "default"}, {"label": "HTML", "value": "html"}, {"label": "No Validations", "value": "none"}], "value": "default", "displayfield": "label", "datafield": "value", "showindesigner": true},
                "autocomplete": {"type": "boolean", "value": true, "showindesigner": true},
                "action": {"type": "string", "bindable": "in-bound", "showindesigner": true},
                "target": {"type": "list", "options": ["_blank", "_parent", "_self", "_top"], "value": "", "widget": "data-list", "showindesigner": true},
                "method": {"type": "list", "options": ["post", "put", "delete"], "showindesigner": true},
                "height": {"type": "string", "pattern": this.dimensionRegex},
                "width": {"type": "string", "pattern": this.dimensionRegex},
                "dataset": {"type": "array, object", "widget": "string", "bindable": "in-bound"},
                "captionsize": {"type": "string", "show": false},
                "iconclass": {"type": "string", "widget": "select-icon", "bindable": "in-bound", "pattern": this.classRegex, "label": 'Title Icon Class'},
                "formdata": {"type": "object", "bindable": "in-bound", "widget": "string", "getTypeFrom": "dataset"},
                "dataoutput": {"type": "object", "bindable": "out-bound", "widget": "string", "getTypeFrom": "dataset"},
                "messagelayout": {"type": "list", "options": ["Inline", "Toaster"], "value": "Inline", "showindesigner": true},
                "postmessage": {"type": "string", "value": "Data posted successfully", "bindable": "in-bound", "showindesigner": true},
                "errormessage": {"type": "string", "value": "An error occured. Please try again!", "bindable": "in-bound", "showindesigner": true},
                "captionalign": {"type": "list", "options": ["left", "center", "right"], "value": "left", "showindesigner": true, "widget": "icons-align"},
                "enctype": {"type": "list", "options": ["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"], "showindesigner": true},
                "metadata": {"type": "array, object",  "bindable": "in-bound", "widget": "string", "show": false},
                "advancedsettings": {"type": "button", "hidelabel": true, "iconclass": "web-service"},
                "captionposition": {"type": "list", "options": ["left", "right", "top"], "value": "left", "showindesigner": true, "widget": "toggle-radio", "prefix": "position-"},
                "captionwidth": {"type": "string", "widget": "device-config", "value": "xs-12 sm-3 md-3 lg-3", "showindesigner": true, "widthHeader": "Column Width", "deviceHeader": "Device", "deviceSizes": this.columnWidths},

                "onResult": {"type": "event", "options": this.widgetEventOptions, "widget": "eventlist"},
                "onError": {"type": "event", "options": this.widgetEventOptions, "widget": "eventlist"},
                "onSuccess": {"type": "event", "options": this.widgetEventOptions, "widget": "eventlist"},
                "onSubmit": {"type": "event", "options": this.widgetEventOptions, "widget": "eventlist"},
                "onBeforerender": {"type": "event", "options": this.widgetEventOptions, "widget": "eventlist", "show": false},
                "onBeforesubmit": {"type": "event", "options": this.widgetEventOptions, "widget": "eventlist"},
                "tabindex": {"type": "number", "value": "0"},
                "backgroundcolor": {"type": "string", "widget": "color"},
                "backgroundgradient": {"type": "string"},
                "backgroundimage": {"type": "string", "bindable": "in-bound"},
                "backgroundrepeat": {"type": "list", "options": ["no-repeat", "repeat", "repeat-x", "repeat-y"]},
                "backgroundsize": {"type": "string", "hint": "width, height"},
                "backgroundposition": {"type": "string", "hint": "top, left"},
                "backgroundattachment": {"type": "list", "options": ["fixed", "local", "scroll"]},
                "margin": {"type": "string", "widget": "box-model"},
                "formWidgets": {"type": "object", "bindable": "in-out-bound", "show": false, "widget": "string", "isWidgetMap": true}
            },
            'wm.layouts.form.mobile': {
                "captionwidth": {"type": "string", "widget": "device-config", "value": "xs-4 sm-4 md-4 lg-4", "showindesigner": true, "widthHeader": "Column Width", "deviceHeader": "Device", "deviceSizes": this.columnWidths}
            },
            'wm.layouts.login': {
                "height": {"type": "string", "pattern": this.dimensionRegex},
                "width": {"type": "string", "pattern": this.dimensionRegex},
                "onSubmit": {"type": "event", "options": this.widgetEventOptions, "widget": "eventlist"},
                "onBeforerender": {"type": "event", "options": this.widgetEventOptions, "widget": "eventlist"},
                "class": {"type": "string", "pattern": this.classRegex, "widget": "list-picker"},
                "margin": {"type": "string", "widget": "box-model"}
            },
            'wm.layouts.liveform': {
                "title": {"type": "string",  "bindable": "in-bound", "showPrettyExprInDesigner": true},
                "subheading": {"type": "string", "bindable": "in-bound", "showPrettyExprInDesigner": true},
                "formlayout": {"type": "toggle", "options":  {"onLabel": "INLINE", "onValue": "inline", "offLabel": "PAGE", "offValue": "page"}, "value": "inline", "show" : false},
                "autocomplete": {"type": "boolean", "value": false, "showindesigner": true},
                "captionsize": {"type": "string", "value": "", "show": false},
                "captionalign": {"type": "string", "options": ["left", "center", "right"], "value": "left", "showindesigner": true, "widget": "icons-align"},
                "captionposition": {"type": "string", "options": ["left", "right", "top"], "value": "left", "showindesigner": true, "widget": "toggle-radio", "prefix": "position-"},
                "captionwidth": {"type": "string", "widget": "device-config", "value": "xs-12 sm-3 md-3 lg-3", "showindesigner": true, "widthHeader": "Column Width", "deviceHeader": "Device", "deviceSizes": this.columnWidths},
                "dataset": {"type": "array, object", "bindable": "in-bound", "widget": "string"},
                "advancedsettings": {"type": "button", "hidelabel": true, "iconclass": "web-service"},
                "height": {"type": "string", "pattern": this.dimensionRegex},
                "rowdata": {"type": "string"},
                "formdata": {"type": "object", "bindable": "in-bound", "widget": "string", "getTypeFrom": "dataset"},
                "dataoutput": {"type": "object", "bindable": "out-bound", "widget": "string", "getTypeFrom": "dataset"},
                "novalidate": {"type": "boolean", "showindesigner": false, "show": false},
                "validationtype": {"type": "select-by-object", "options": [{"label": "Default", "value": "default"}, {"label": "HTML", "value": "html"}, {"label": "No Validations", "value": "none"}], "value": "default", "displayfield": "label", "datafield": "value", "showindesigner": true},
                "iconclass": {"type": "string", "widget": "select-icon", "bindable": "in-bound", "pattern": this.classRegex, "label": 'Title Icon Class'},
                "horizontalalign": {"type": "string", "options": ["left", "center", "right"], "widget": "icons-align", "show": false},
                "defaultmode": {"type": "toggle", "options": {"onLabel": "READ ONLY", "onValue": "View", "offLabel": "EDITABLE", "offValue": "Edit"}, "value": "View", "showindesigner": true},
                "width": {"type": "string", "pattern": this.dimensionRegex},
                "messagelayout": {"type": "list", "options": ["Inline", "Toaster"], "value": "Toaster", "showindesigner": true},
                "insertmessage": {"type": "string", "value": "Record added successfully", "bindable": "in-bound", "showindesigner": true},
                "updatemessage": {"type": "string", "value": "Record updated successfully", "bindable": "in-bound", "showindesigner": true},
                "deletemessage": {"type": "string", "value": "Record deleted successfully", "bindable": "in-bound", "showindesigner": true},
                "errormessage": {"type": "string", "value": "An error occured. Please try again!", "bindable": "in-bound", "showindesigner": true},
                /*Events*/
                "onBeforeservicecall": {"type": "event", "options": this.widgetEventOptions, "widget": "eventlist"},
                "onResult": {"type": "event", "options": this.widgetEventOptions, "widget": "eventlist"},
                "onError": {"type": "event", "options": this.widgetEventOptions, "widget": "eventlist"},
                "onSuccess": {"type": "event", "options": this.widgetEventOptions, "widget": "eventlist"},
                "tabindex": {"type": "number", "value": "0"},
                // property specific to mobile with formlayout page
                "onBackbtnclick": {"type": "event", "options": this.widgetEventOptions, "widget": "eventlist", "show": false},
                "backgroundcolor": {"type": "string", "widget": "color"},
                "backgroundgradient": {"type": "string"},
                "backgroundimage": {"type": "string", "bindable": "in-bound"},
                "backgroundrepeat": {"type": "list", "options": ["no-repeat", "repeat", "repeat-x", "repeat-y"]},
                "backgroundsize": {"type": "string", "hint": "width, height"},
                "backgroundposition": {"type": "string", "hint": "top, left"},
                "backgroundattachment": {"type": "list", "options": ["fixed", "local", "scroll"]},
                "margin": {"type": "string", "widget": "box-model"},
                "formWidgets": {"type": "object", "bindable": "in-out-bound", "show": false, "widget": "string", "isWidgetMap": true}
            },
            'wm.layouts.liveform.mobile': {
                "captionwidth": {"type": "string", "widget": "device-config", "value": "xs-4 sm-4 md-4 lg-4", "showindesigner": true, "widthHeader": "Column Width", "deviceHeader": "Device", "deviceSizes": this.columnWidths}
            },
            "wm.layouts.segmentedcontrol" : {
                "onBeforesegmentchange": {"type": "event", "options": this.widgetEventOptions, "widget": "eventlist"},
                "onSegmentchange": {"type": "event", "options": this.widgetEventOptions, "widget": "eventlist"},
                "width": {"show": false},
                "height": {"type": "string", "pattern": this.dimensionRegex},
                "tabindex": {"type": "number", "value": "0"},
                "addchild": {"label": "Add", "hidelabel": true, "options": [{"label": "Segmented Content", "widgettype": "wm-segment-content"}], "widget": "add-widget"}
            },
            "wm.layouts.segmentcontent" : {
                "caption": {"type": "string", "bindable": "in-out-bound", "maxlength": 256, "showPrettyExprInDesigner": true},
                "iconclass": {"type": "string", "widget": "select-icon", "bindable": "in-out-bound", "pattern": this.classRegex}
            },
            'wm.table': {
                "width": {"type": "string", "pattern": this.dimensionRegex},
                "height": {"type": "string", "pattern": this.dimensionRegex},
                "dataset": {"type": "array, object", "bindable": "in-bound", "widget": "string"},
                "scopedataset": {"type": "string"},
                "pagesize": {"type": "number"},
                "advancedsettings": {"type": "button", "hidelabel": true, "iconclass": "web-service"},
                "gridfirstrowselect": {"type": "boolean", "showindesigner": true},
                "formposition": {"type": "select-by-object", "options": [{"label": "Top", "value": "top"}, {"label": "Bottom", "value": ""}], "value": "", "displayfield": "label", "datafield": "value", "showindesigner": true},
                "shownewrow": {"type": "boolean", "show": false, "value": true},
                "confirmdelete": {"type": "string", "value": "Are you sure you want to delete this?", "bindable": "in-bound", "show": true, "showindesigner": true},
                "deleterow": {"type": "boolean", "bindable": "in-bound", "show": false},
                "updaterow": {"type": "boolean", "bindable": "in-bound", "show": false},
                "showheader": {"type": "boolean", "value": true, "showindesigner": true},
                "gridsearch": {"type": "boolean", "show": false, "showindesigner": false},
                "rowclass": {"type": "string", "value": "", "showindesigner": true},
                "rowngclass": {"showindesigner": "true", "widget": "conditional-expression"},
                "filtermode": {"type": "select-by-object", "options": [{"label": "No Filter", "value": ""}, {"label": "Search", "value": "search"}, {"label": "Multi-column", "value": "multicolumn"}], "value": "", "displayfield": "label", "datafield": "value", "showindesigner": true},
                "searchlabel": {"type": "string", "value": "Search", "bindable": "in-bound", "show": false, "showindesigner": false, "alignright": true},
                "enablesort": {"type": "boolean", "value": true, "showindesigner": true},
                "enablecolumnselection": {"type": "boolean", "value": false, "showindesigner": true},
                "showrowindex": {"type": "boolean", "showindesigner": true},
                "multiselect": {"type": "boolean", "showindesigner": true},
                "radioselect": {"type": "boolean", "showindesigner": true},
                "insertrow": {"type": "boolean", "bindable": "in-bound", "show": false},
                "editmode": {"type": "string", "value": "", "show": false},
                "showrecordcount": {"type": "boolean", "show": false, "showindesigner": true},
                "navigation": {"type": "list", "options": ["Basic", "Pager", "Classic", "None"], "value": "Basic", "showindesigner": true},
                "navigationalign": {"type": "string", "options": ["left", "center", "right"], "widget": "icons-align", "value": "left", "showindesigner": true},
                "filternullrecords": {"type": "boolean", "value": true},
                "nodatamessage": {"type": "string", "value": "No data found.", "bindable": "in-bound", "showindesigner": true},
                "loadingdatamsg": {"type": "string", "value": "Loading...", "bindable": "in-bound", "showindesigner": true},
                "loadingicon": {"type": "string", "widget": "select-icon", "bindable": "in-bound", "value": "fa fa-spinner fa-spin", "pattern": this.classRegex},
                "deletemessage": {"type": "string", "value": "Record deleted successfully", "bindable": "in-bound", "show": true, "showindesigner": true},
                "errormessage": {"type": "string", "value": "", "bindable": "in-bound", "showindesigner": true},
                "insertmessage": {"type": "string", "value": "Record added successfully", "bindable": "in-bound", "showindesigner": true},
                "updatemessage": {"type": "string", "value": "Record updated successfully", "bindable": "in-bound", "showindesigner": true},
                "selecteditem": {"type": "object", "bindable": "in-out-bound", "show": false, "widget": "string", "getTypeFrom": "dataset", "getIsListFrom": "expr:multiselect"},
                "title": {"type": "string", "bindable": "in-bound", "showPrettyExprInDesigner": true},
                "subheading": {"type": "string", "bindable": "in-bound", "showPrettyExprInDesigner": true},
                "iconclass": {"type": "string", "widget": "select-icon", "bindable": "in-bound", "pattern": this.classRegex, "label": 'Title Icon Class'},
                "spacing": {"type": "list", "options": ["normal", "condensed"], "value": "normal"},
                "exportformat": {"type": "list", "widget": "select-all", "options": ["EXCEL", "CSV"], "showindesigner": true},
                "exportdatasize": {"type": "number",  "value": 100, "showindesigner": true},
                "margin": {"type": "string", "widget": "box-model", "show": false}, //Deprecated margin property for data table

                /* Events */
                "onClick": {"type": "event", "options": this.widgetEventOptions, "widget": "eventlist"},
                "onTap": {"type": "event", "options": this.widgetEventOptions, "widget": "eventlist"},
                "onSelect": {"type": "event", "options": this.widgetEventOptions, "widget": "eventlist"},
                "onDeselect": {"type": "event", "options": this.widgetEventOptions, "widget": "eventlist"},
                "onSort": {"type": "event", "options": this.widgetEventOptions, "widget": "eventlist"},
                "onHeaderclick": {"type": "event", "options": this.widgetEventOptions, "widget": "eventlist"},
                "onShow": {"type": "event", "options": this.widgetEventOptions, "widget": "eventlist"},
                "onHide": {"type": "event", "options": this.widgetEventOptions, "widget": "eventlist"},
                "onBeforeformrender": {"type": "event", "options": this.widgetEventOptions, "widget": "eventlist"},
                "onFormrender": {"type": "event", "options": this.widgetEventOptions, "widget": "eventlist"},
                "onRowdelete": {"type": "event", "options": this.widgetEventOptions, "widget": "eventlist"},
                "onBeforerowinsert": {"type": "event", "options": this.widgetEventOptions, "widget": "eventlist"},
                "onRowinsert": {"type": "event", "options": this.widgetEventOptions, "widget": "eventlist"},
                "onBeforerowupdate": {"type": "event", "options": this.widgetEventOptions, "widget": "eventlist"},
                "onRowupdate": {"type": "event", "options": this.widgetEventOptions, "widget": "eventlist"},
                "onRowclick": {"type": "event", "options": this.widgetEventOptions, "widget": "eventlist"},
                "onRowdblclick": {"type": "event", "options": this.widgetEventOptions, "widget": "eventlist"},
                "onColumnselect": {"type": "event", "options": this.widgetEventOptions, "widget": "eventlist"},
                "onColumndeselect": {"type": "event", "options": this.widgetEventOptions, "widget": "eventlist"},
                "onEnterkeypress": {"type": "event", "options": this.widgetEventOptions, "widget": "eventlist"},
                "onSetrecord": {"type": "event", "options": this.widgetEventOptions, "widget": "eventlist"},
                "onDatarender": {"type": "event", "options": this.widgetEventOptions, "widget": "eventlist"},
                "onBeforedatarender": {"type": "event", "options": this.widgetEventOptions, "widget": "eventlist"},

                /* Styles */
                "gridclass": {"type": "string", "value": "table-bordered table-striped table-hover", "pattern": this.classRegex, "widget": "list-picker", "options": ["table-hover", "table-bordered", "table-striped"]},
                "tabindex": {"type": "number", "value": "0"}

            },
            'wm.livetable': {
                'formlayout': {"type": "list", "options": ["inline", "dialog"], "value": "inline"}
            },
            'wm.fileupload': {
                "service": {"type": "list", "widget": "list"},
                "operation": {"type": "list", "widget": "list"},
                "multiple": {"type": "boolean", "value": false},
                "contenttype": {"type": "list", "widget" : "list-picker", "options": ["image/*", "audio/*", "video/*", ".txt", ".zip", ".rar", ".js", ".json", ".xls", ".xlsx", ".pdf", ".csv", ".xml", ".doc", ".docx", ".log", ".rtf", ".bmp", ".gif", ".jpe", ".jpg", ".jpeg", ".tif", ".tiff", ".pbm", ".png", ".ico", "mp3", ".ogg", ".webm", ".wma", ".3gp", ".wav", "mp4", ".ogg", ".webm", ".wmv", ".mpeg", ".mpg", ".avi"]},
                "fileuploadmessage": {"type": "string", "bindable": "in-out-bound", "value": "You can also browse for files"},
                "tabindex": {"type": "number", "value": "0"},
                "uploadedFiles": {"type": "array", "isList": true, "bindable": "in-out-bound", "getTypeFrom": "expr:getPropertyType('uploadedFiles')"},
                "selectedFiles": {"type": "array, file", "isList": true, "bindable": "in-out-bound", "show" : "false", "getTypeFrom": "expr:getPropertyType('selectedFiles')"},
                "mode": {"type": "list", "options": ["Upload", "Select"], "value": "Upload"},
                "destination": {"type": "string", "widget": "fileupload-relativepath", "bindable": "in-out-bound", "value": "", "info": "/resources/uploads/"},
                "maxfilesize": {"type": "string", "widget": "fileupload-relativepath", "value": "",  "info": "size in MB"},
                "caption": {"type": "string", "value": "Upload", "bindable": "in-out-bound", "maxlength": 256, "showPrettyExprInDesigner": true},
                "disabled": {"type": "boolean", "value": false, "bindable": "in-bound"},
                "iconclass": {"type": "string", "widget": "select-icon", "bindable": "in-out-bound", "value" : "wi wi-file-upload", "pattern": this.classRegex},
                "filelistheight": {"type": "string", "pattern": this.dimensionRegex, "show": false},
                "class": {"type": "string", "pattern": this.classRegex, "widget": "list-picker", "options": ["bg-primary", "bg-success", "bg-info", "bg-warning", "bg-danger"]},

                /* ---- events ---- */
                "onSelect": {"type": "event", "options": this.widgetEventOptions, "widget": "eventlist"},
                "onProgress": {"type": "event", "options": this.widgetEventOptions, "widget": "eventlist"},
                "onAbort": {"type": "event", "options": this.widgetEventOptions, "widget": "eventlist"}
            },
            'wm.fileupload.mobile': {
                "fileuploadmessage": {"show": false},
                "contenttype": {"widget" : "list", "options": ['image', 'audio', 'video', 'files']}
            },
            'wm.youtube': {
                "width": { "value": "800px", "pattern": this.dimensionRegex},
                "height": {"value": "125px", "pattern": this.dimensionRegex},
                "uploadpath": {"type": "string"}
            },
            "wm.anchor": {
                "iconclass": {"type": "string", "widget": "select-icon", "bindable": "in-out-bound", "pattern": this.classRegex},
                "conditionalclass": {"bindable": "in-bound"},
                "iconurl": {"type": "string", "bindable": "in-bound", "showPrettyExprInDesigner": true},
                "iconwidth": {"type": "string", "pattern": this.dimensionRegex},
                "iconheight": {"type": "string", "pattern": this.dimensionRegex},
                "iconmargin": {"type": "string", "pattern": this.dimensionRegex},
                "iconposition": {"type": "list", "options": ["left", "top", "right"]},
                "caption": {"type": "string", "value": "Link", "bindable": "in-out-bound", "maxlength": 256, "showPrettyExprInDesigner": true},
                "badgevalue": {"type": "string", "bindable": "in-out-bound", "showPrettyExprInDesigner": true},
                "hyperlink": {"type": "string", "bindable": "in-out-bound"},
                "encodeurl": {"type": "boolean", "value": false},
                "target": {"type": "list", "options": ["_blank", "_parent", "_self", "_top"], "value": "_self", "widget": "data-list"},
                "tabindex": {"type": "number", "value": "0"},
                "whitespace": {"type": "list", "options": [" ", "normal", "nowrap", "pre", "pre-line", "pre-wrap"], "value": " "},
                "wordbreak": {"type": "list", "options": ["break-word", "normal"]},
                "showindevice": {"type": "select-all", "options": this.showInDeviceOptions, "value": "all", "displaytype": 'inline'},
                "animation": {"type": "list", "options": this.animationOptions},
                "shortcutkey": {"type": "string"},
                "class": {"type": "string", "pattern": this.classRegex, "widget": "list-picker", "options": ["h1", "h2", "h3", "h4", "h5", "h6", "btn-primary", "btn-success", "btn-info", "btn-warning", "btn-danger", "btn-lg", "btn-sm", "btn-xs", "btn-link", "text-ellipsis", "text-left", "text-right", "text-center", "text-muted", "text-primary", "text-success", "text-info", "text-warning", "text-danger", "vertical-align-top", "vertical-align-middle", "vertical-align-bottom", "lead", "badge", "app-header-action"]},
                "horizontalalign": {"type": "string", "options": ["left", "center", "right"], "widget": "icons-align", "show": false}
            },
            "wm.popover": {
                "contentsource": {"type": "list", "options": ['inline', 'partial'], value: "partial"},
                "content": {"type": "string", "options": [], "widget": "pages-list", value: "", "bindable": "in-bound"},
                "inlinecontent": {"type": "string", "widget": "textarea"},
                "hyperlink": {"type": "string", "value": "", "show": false, "bindable": false},
                "target": {"type": "string", "value" : "", "show": false},
                "popoverwidth" :  {"type": "string"},
                "popoverheight" :  {"type": "string"},
                "popoverarrow" :  {"type": "boolean", "value" : true},
                "popoverautoclose": {"type": "boolean", "value" : true, "show": false},
                "interaction": {"type": "select-by-object", "options": [{'label': 'Click', 'value': 'click'}, {'label': 'Hover', 'value': 'hover'}, {'label': 'Click and Hover', 'value': 'default'}], value: "click"},
                "popoverplacement": {"type": "select-by-object", "options": this.popoverOptions, "value": "bottom"},
                "title": {"type": "string", "bindable": "in-bound"},
                "onShow": {"type": "event", "options": this.widgetEventOptions, "widget": "eventlist"},
                "onHide": {"type": "event", "options": this.widgetEventOptions, "widget": "eventlist"},
                "onLoad": {"type": "event", "options": this.widgetEventOptions, "widget": "eventlist"},
                "conditionalclass": {"show": false, "bindable": "in-bound"}
            },
            "wm.prefabs": {
                "margin": {"type": "string", "widget": "box-model"},
                "debugurl": {"type": "string", "show": false},
                "width": {"type": "string", "pattern": this.dimensionRegex},
                "height": {"type": "string", "pattern": this.dimensionRegex},
                "onLoad": {"type": "event", "options": this.widgetEventOptions, "widget": "eventlist"},
                "onDestroy": {"type": "event", "options": this.widgetEventOptions, "widget": "eventlist"},
                "animation": {"type": "list", "options": this.animationOptions},
                "tabindex": {"type": "number", "value": "0"}
            },

            "wm.accordion": {
                "addchild": {"hidelabel": true, "options": [{"label": "Add Accordion Pane", "widgettype": "wm-accordionpane"}], "widget": "add-widget"},
                "closeothers": { "type": "boolean", "value": true},
                "height": {"type": "string", "pattern": this.dimensionRegex},
                "tabindex": {"type": "number", "value": "0"},
                "defaultpaneindex": {"type": "number", "value": 0, "bindable": "in-bound"},
                "onChange": {"type": "event", "options": this.widgetEventOptions, "widget": "eventlist"}
            },

            "wm.accordionpane": {
                "height": {"type": "string", "pattern": this.dimensionRegex},
                "onExpand": {"type": "event", "options": this.widgetEventOptions, "widget": "eventlist"},
                "onCollapse": {"type": "event", "options": this.widgetEventOptions, "widget": "eventlist"},
                "title": {"type": "string", "value": "Title", "bindable": "in-bound", "showPrettyExprInDesigner": true},
                "subheading": {"type": "string", "bindable": "in-bound", "showPrettyExprInDesigner": true},
                "iconclass": {"type": "string", "widget": "select-icon", "bindable": "in-out-bound", "pattern": this.classRegex, "label": 'Title Icon Class'},
                "badgevalue": {"type": "string", "bindable": "in-out-bound", "showPrettyExprInDesigner": true},
                "badgetype": {"type": "string", "widget": "list", "options": ["default", "primary", "success", "info", "warning", "danger"], "value": "default", "bindable": "in-out-bound"},
                "tabindex": {"type": "number", "value": "0"},
                "isdefaultpane": {"type": "boolean", "bindable": "in-bound", "show": false}, //Deprecated property
                "padding": {"type": "string", "widget": "box-model"},
                "backgroundcolor": {"type": "string", "widget": "color"},
                "color": {"type": "string", "widget": "color"},
                "accessroles": {"type": "access-roles-select", "options": this.roles, "value": this.EVERYONE}
            },

            "wm.richtexteditor": {
                "hint": {"type": "string"},
                "show": {"type": "boolean", "value": true},
                "readonly": {"type": "boolean", "bindable": "in-bound"},
                "datavalue": {"type": "string", value: "", "bindable": "in-out-bound"},
                "showpreview": {"type": "boolean", "value": false},
                "placeholder": {"type": "string", "bindable": "in-bound"},
                "htmlcontent": {"type": "string", "bindable": "out-bound"},
                "tabindex": {"type": "number", "value": "0"},
                "scopedatavalue": {"type": "string"},
                "onChange": {"type": "event", "options": this.widgetEventOptions, "widget": "eventlist"},
                "width": {"type": "string", "pattern": this.dimensionRegex},
                "height": {"type": "string", "pattern": this.dimensionRegex}
            },

            "wm.tabs": {
                "addchild": {"hidelabel": true, "options": [{"label": "Add Tab Pane", "widgettype": "wm-tabpane"}], "widget": "add-widget"},
                "tabsposition": {"type": "list",  "options": ["left", "top", "right", "bottom"], "value": "top"},
                "taborder": {"type": "list", "widget": "tab-order", "dataset": []},
                "transition": {"type": "list", "options": ["none", "slide"], "value": "none"},
                "name": {"type": "string", "pattern": this.nameRegex, "maxlength": 32},
                "height": {"type": "string", "pattern": this.dimensionRegex},
                "horizontalalign": {"type": "string", "options": ["left", "center", "right"], "widget": "icons-align"},
                "defaultpaneindex": {"type": "number", "value": 0, "bindable": "in-bound"},
                "onChange": {"type": "event", "options": this.widgetEventOptions, "widget": "eventlist"}
            },

            "wm.tab": {
                "title": {"type": "string", "bindable": "in-bound"}
            },
            "wm.tabpane": {
                "disabled": {"type": "boolean", "bindable": "in-bound"},
                "onSelect": {"type": "event", "options": this.widgetEventOptions, "widget": "eventlist"},
                "onDeselect": {"type": "event", "options": this.widgetEventOptions, "widget": "eventlist"},
                "title": {"type": "string", "value": "Tab Title", "bindable": "in-bound", "showPrettyExprInDesigner": true},
                "paneicon": {"type": "string", "widget": "select-icon", "bindable": "in-bound", "pattern": this.classRegex, "label": 'Title Icon Class'},
                "isdefaulttab": {"type": "boolean", "bindable": "in-bound", "show": false}, //Deprecated property
                "tabindex": {"type": "number", "value": "0"},
                "badgevalue": {"type": "string", "bindable": "in-out-bound", "showPrettyExprInDesigner": true},
                "badgetype": {"type": "string", "widget": "list", "options": ["default", "primary", "success", "info", "warning", "danger"], "value": "default", "bindable": "in-out-bound"}
            },
            "wm.wizard": {
                "addchild": {"hidelabel": true, "options": [{"label": "Add Step", "widgettype": "wm-wizardstep"}], "widget": "add-widget"},
                "nextbtnlabel": {"type": "string", "value": "Next", "bindable": "in-bound"},
                "cancelbtnlabel": {"type": "string", "value": "Cancel", "bindable": "in-bound"},
                "previousbtnlabel": {"type": "string", "value": "Previous", "bindable": "in-bound"},
                "donebtnlabel": {"type": "string", "value": "Done", "bindable": "in-bound"},
                "onDone": {"type": "event", "options": this.widgetEventOptions, "widget": "eventlist"},
                "onCancel": {"type": "event", "options": this.widgetEventOptions, "widget": "eventlist"},
                "cancelable": {"type": "boolean", "value": true, "bindable": "in-bound"},
                "stepstyle":  {"type": "list", "options": ["auto", "justified"], "value": "auto"},
                "actionsalignment": {"type": "list", "options": ["left", "right"], "value": "right"},
                "defaultstep": {"type": "string", "widget": "select-by-object", "value": "none", "bindable": "in-bound"}
            },
            "wm.wizardstep": {
                "title": {"type": "string", "value": "Step Title", "bindable": "in-bound", "showPrettyExprInDesigner": true},
                "disablenext": {"type": "boolean", "value": false, "show": false},
                "disableprevious": {"type": "boolean", "value": false, "show": false},
                "disabledone": {"type": "boolean", "value": false, "show": false},
                "enabledone": {"type": "boolean", "value": false, "show": false},
                "enableskip": {"type": "boolean", "value": false, "bindable": "in-bound"},
                "iconclass": {"type": "string", "widget": "select-icon", "bindable": "in-out-bound", "pattern": this.classRegex, "label": 'Title Icon Class'},
                "onNext": {"type": "event", "options": this.widgetEventOptions, "widget": "eventlist"},
                "onPrev": {"type": "event", "options": this.widgetEventOptions, "widget": "eventlist"},
                "onLoad": {"type": "event", "options": this.widgetEventOptions, "widget": "eventlist"},
                "onSkip": {"type": "event", "options": this.widgetEventOptions, "widget": "eventlist"},
                "loadmode" : {"type" : "list", "show": false, "value" : "after-select"}
            },
            "wm.carousel" : {
                "addchild": {"hidelabel": true, "options": [{"label": "Add Carousel", "widgettype": "wm-carousel-content"}], "widget": "add-widget"},
                "dataset": {"type": "array, object", "bindable": "in-bound", "widget": "string", "show": false},
                "animationinterval" : {"type" : "number", "value" : "3"},
                "type" : {"type" : "string", "show" : false},
                "currentslide": {"type": "object", "bindable": "out-bound", "widget": "string", "getTypeFrom": "dataset"},
                "animation": {"type": "list", "options": ["auto", "none"], "value": "auto"},
                "controls": {"type": "list", "options": ["navs", "indicators", "both", "none"], "value": "both"},

                "class": {"type": "string", "pattern": this.classRegex},
                "show": {"type": "boolean", "value": true, "bindable": "in-bound"},
                "height": {"type": "string", "pattern": this.dimensionRegex},
                "width": {"type": "string", "pattern": this.dimensionRegex},
                "accessroles": {"type": "access-roles-select", "options": this.roles, "value": this.EVERYONE},
                "showindevice": {"type": "select-all", "options": this.showInDeviceOptions, "value": "all", "displaytype": 'block'},
                "onChange": {"type": "event", "options": this.widgetEventOptions, "widget": "eventlist"},
                "currentItem": {"type": "object", "bindable": "in-out-bound", "show": false, "widget": "string", "getTypeFrom": "dataset"},
                "nodatamessage": {"type": "string", "value": "No data found", "bindable": "in-bound"}
            },
            "wm.tabbar" : {
                "dataset": {"type": "array, object", "bindable": "in-bound", "widget": "string"},
                "onSelect": {"type": "event", "options": this.widgetEventOptions, "widget": "eventlist"},
                "morebuttoniconclass": {"type": "string", "widget": "select-icon", "pattern": this.classRegex, "value": "wi wi-more-horiz"},
                "morebuttonlabel":  {"type": "string", "value": "more"}
            },
            "wm.tabbar.dataProps": {
                "itemlabel": {"type": "string", "widget": "list", "options": [""], "bindable": "in-bound", "bindonly": "expression", "datasetfilter" : "terminals"},
                "itemlink": {"type": "string", "widget": "list", "options": [""], "bindable": "in-bound", "bindonly": "expression", "datasetfilter" : "terminals"},
                "itemicon": {"type": "string", "widget": "list", "options": [""], "bindable": "in-bound", "bindonly": "expression", "datasetfilter" : "terminals"}
            },
            "wm.list": {
                "name": {"type": "string", "pattern": this.nameRegex, "maxlength": 32},
                "title": {"type": "string", "bindable": "in-bound", "showPrettyExprInDesigner": true},
                "subheading": {"type": "string", "bindable": "in-bound", "showPrettyExprInDesigner": true},
                "show": {"type": "boolean", "value": true, "bindable": "in-bound"},
                "enablereorder": {"type": "boolean"},
                "accessroles": {"type": "access-roles-select", "options": this.roles, "value": this.EVERYONE},
                "onSelectionlimitexceed" : {"type": "event", "options": this.widgetEventOptions, "widget": "eventlist"},
                "onReorder" : {"type": "event", "options": this.widgetEventOptions, "widget": "eventlist"},
                "pagesize": {"type": "number"},
                "dataset": {"type": "array, object", "bindable": "in-bound", "widget": "string"},
                "scopedataset": {"type": "string"},
                "selectionlimit": {"type": "number", "bindable": "in-bound"},
                "itemsperrow": {"type": "string", "widget": "device-config", "widthHeader": "Items per row", "deviceHeader": "Device", "deviceSizes": ['1', '2', '3', '4', '6', '12'], "tableClass": "wm-table-dark"},
                "selecteditem": {"type": "object", "bindable": "in-out-bound", "show": false, "widget": "string", "getTypeFrom": "dataset", "getIsListFrom": "expr:multiselect"},
                "onEnterkeypress": {"type": "event", "options": this.widgetEventOptions, "widget": "eventlist"},
                "onSetrecord": {"type": "event", "options": this.widgetEventOptions, "widget": "eventlist"},
                "onBeforedatarender": {"type": "event", "options": this.widgetEventOptions, "widget": "eventlist"},
                "onPaginationchange": {"type": "event", "options": this.widgetEventOptions, "widget": "eventlist"},
                "itemclass": {"type": "string", "pattern": this.classRegex, "widget": "list-picker", "options": ["list-group-item", "media"], "bindable": "in-bound"},
                "listclass": {"type": "string", "pattern": this.classRegex, "widget": "list-picker", "options": ["list-group", "list-inline", "media-list"]},
                "iconclass": {"type": "string", "widget": "select-icon", "bindable": "in-bound", "value": "", "pattern": this.classRegex, "label": 'Title Icon Class'},
                "navigation": {"type": "select-by-object", "options": [{'value': 'Basic', 'label': 'Basic'}, {'value': 'Pager', 'label': 'Pager'}, {'value': 'Classic', 'label': 'Classic'}, {'value': 'Scroll', 'label': 'Infinite Scroll'}, {'value': 'Inline', 'label': 'Horizontal Slider'}, {'value': 'None', 'label': 'None'}, {'value': 'On-Demand', 'label': 'On Demand'}], "value": "None"},
                "navigationalign": {"type": "string", "options": ["left", "center", "right"], "widget": "icons-align", "value": "left"},
                "selectfirstitem": {"type": "boolean", "value": false, "bindable": "in-bound"},
                "tabindex": {"type": "number", "value": "0"},
                "groupby": {"type": "list", "show": true, "widget": "list-typeahead", "datasetfilter": "terminals"},
                "match": {"type": "list-group", "nonGroupOptions": ["alphabet", "word"], "options": [{"name": "TIME", "groupOptions": {"hour": "hour", "day": "day", "week": "week", "month": "month", "year": "year"}}], "show": false, "value": "word", "datasetfilter": "none"},
                "dateformat": {"type": "list", "options": [], "widget": "date-time-patterns", "show": false},
                "orderby": {"type": "list", "widget": "order-by", "datasetfilter": "terminals"},
                "nodatamessage": {"type": "string", "value": "No data found", "bindable": "in-bound"},
                "loadingdatamsg": {"type": "string", "value": "Loading...", "bindable": "in-bound"},
                "selectedItemWidgets": {"type": "object", "bindable": "in-out-bound", "show": false, "widget": "string", "isWidgetMap": true},
                "currentItemWidgets": {"type": "object", "bindable": "in-out-bound", "show": false, "widget": "string", "isWidgetMap": true},
                "currentItem": {"type": "object", "bindable": "in-out-bound", "show": false, "widget": "string", "getTypeFrom": "dataset"},
                "multiselect": {"type": "boolean", "value": false},
                "collapsible": {"type": "boolean", "show": false},
                "showcount": {"type": "boolean", "show": false},
                "disableitem": {"type": "boolean", "bindable": "in-bound", "value": false},
                "ondemandmessage": {"type": "string", "bindable": "in-bound", "showPrettyExprInDesigner": true, "value": "Load More"},
                "loadingicon": {"type": "string", "widget": "select-icon", "bindable": "in-bound", "value": "fa fa-circle-o-notch", "pattern": this.classRegex},
                "paginationclass": {"type": "string", "pattern": this.classRegex, "widget": "list-picker", "options": ["pagination-sm", "pagination-lg", "btn-default", "btn-primary", "btn-info", "btn-warning", "btn-success", "btn-danger", "btn-inverse", "btn-lg", "btn-sm", "btn-xs", "btn-raised", "btn-fab", "btn-link", "btn-transparent", "jumbotron"]}
            },
            "wm.medialist": {
                "dataset": {"type": "array, object", "bindable": "in-bound", "widget": "string"},
                "thumbnailurl": {"type": "list", "options": ["All Fields"], "value": "All Fields", "datasetfilter" : "terminals"},
                "mediaurl": {"type": "list", "options": ["All Fields"], "value": "All Fields", "datasetfilter" : "terminals"},
                "layout": {"type": "list", "options": ["Single-row", "Multi-row"], "value": "Single-row"},
                "tabindex": {"type": "number", "value": "0"},
                "currentItem": {"type": "object", "bindable": "in-out-bound", "show": false, "widget": "string", "getTypeFrom": "dataset"}
            },
            "wm.medialist.mobile" : {
                "offline": {"type": "boolean", "value" : true}
            },
            "wm.livefilter": {
                "title": {"type": "string", "bindable": "in-bound", "showPrettyExprInDesigner": true},
                "subheading": {"type": "string", "bindable": "in-bound", "showPrettyExprInDesigner": true},
                "autocomplete": {"type": "boolean", "value": true, "showindesigner": true},
                "captionsize": {"type": "string", "value": "", "show": false},
                "captionalign": {"type": "string", "options": ["left", "center", "right"], "value": "left", "showindesigner": true, "widget": "icons-align"},
                "captionposition": {"type": "string", "options": ["left", "right", "top"], "value": "left", "showindesigner": true, "widget": "toggle-radio", "prefix": "position-"},
                "captionwidth": {"type": "string", "widget": "device-config", "value": "xs-12 sm-3 md-3 lg-3", "showindesigner": true, "widthHeader": "Column Width", "deviceHeader": "Device", "deviceSizes": this.columnWidths},
                "dataset": {"type": "array, object", "bindable": "in-bound", "widget": "string"},
                "scopedataset": {"type": "string"},
                "advancedsettings": {"type": "button", "hidelabel": true, "iconclass": "web-service"},
                "result": {"type": "object", "bindable": "out-bound", "isList": true, "widget": "string", "show": "false", "getTypeFrom": "dataset"},
                "pagesize": {"type": "number", "value": 20},
                "horizontalalign": {"type": "string", "options": ["left", "center", "right"], "widget": "icons-align", "show": false},
                "iconclass": {"type": "string", "widget": "select-icon", "bindable": "in-bound", "value": "wi wi-filter-list", "pattern": this.classRegex, "label": 'Title Icon Class'},
                "autoupdate":  {"type": "boolean", "showindesigner": true},
                /* Events */
                "onBeforeservicecall": {"type": "event", "options": this.widgetEventOptions, "widget": "eventlist"},
                "onError": {"type": "event", "options": this.widgetEventOptions, "widget": "eventlist"},
                "onSuccess": {"type": "event", "options": this.widgetEventOptions, "widget": "eventlist"},
                "tabindex": {"type": "number", "value": "0"},
                "collapsible": {"type": "boolean", "showindesigner": true},
                "expanded": {"type": "boolean", "value": true, "showindesigner": true},
                "enableemptyfilter": {"type": "select-all", "options": ["null", "empty"], "displaytype": "block", "value": " ", "showindesigner": true},
                "height": {"type": "string", "pattern": this.dimensionRegex},
                "width": {"type": "string", "pattern": this.dimensionRegex},
                "margin": {"type": "string", "widget": "box-model"},
                "backgroundcolor": {"type": "string", "widget": "color"},
                "filterWidgets": {"type": "object", "bindable": "in-out-bound", "show": false, "widget": "string", "isWidgetMap": true}
            },
            'wm.livefilter.mobile': {
                "captionwidth": {"type": "string", "widget": "device-config", "value": "xs-4 sm-4 md-4 lg-4", "showindesigner": true, "widthHeader": "Column Width", "deviceHeader": "Device", "deviceSizes": this.columnWidths}
            },
            "wm.search": {
                "scopedatavalue": {"type": "string"},
                "datavalue": {"type": "string, object", "widget": "string", "bindable": "in-out-bound", "getTypeFrom": "dataset"},
                "result": {"type": "array", "value": [], "bindable": "out-bound", "getTypeFrom": "dataset"},
                "scopedataset": {"type": "string"},
                "query": {"type": "string", "bindable": "out-bound"},
                "searchkey": {"type": "string", "widget": "select-all", "datasetfilter" : "terminals"},
                "displaylabel": {"type": "string", "widget": "list", "options": [""], "bindable": "in-bound", "bindonly": "expression", "datasetfilter" : "terminals"},
                "displayimagesrc": {"type": "string", "widget": "list", "options": [""], "bindable": "in-bound", "bindonly": "expression", "datasetfilter" : "terminals"},
                "datafield": {"type": "list", "options": ["All Fields"], "value": "All Fields", "datasetfilter" : "terminals", "allfields" : true},
                "dataset": {"type": "array, object", "bindable": "in-bound", "widget": "string"},
                "limit": {"type": "number"},
                "placeholder": {"type": "string", "value": "Search", "bindable": "in-bound"},
                "onSubmit": {"type": "event", "options": this.widgetEventOptions, "widget": "eventlist"},
                "onSelect": {"type": "event", "options": this.widgetEventOptions, "widget": "eventlist"},
                "show": {"type": "boolean", "value": true, "bindable": "in-bound"},
                "tabindex": {"type": "number", "value": "0"},
                "showindevice": {"type": "select-all", "options": this.showInDeviceOptions, "value": "all", "displaytype": 'inline-block'},
                "width": {"type": "string", "value": '100%', "pattern": this.dimensionRegex},
                "shortcutkey": {"type": "string"},
                "class": {"type": "string", "pattern": this.classRegex, "widget": "list-picker", "options": ["input-group-sm", "input-group-lg"]},
                "casesensitive": {"type": "boolean", "show": "false", "value": false},
                "showsearchicon": {"type": "boolean", "show": "false", "value": false},
                /* searchbar in mobile-navbar*/
                "navsearchbar": {"type": "string", "show": "false"},
                "readonly": {"type": "boolean", "bindable": "in-bound"},
                "type": {"type": "string", "widget": "list", "options": ["search", "autocomplete"], "value": "search", "show": true},
                "orderby": {"type": "list", "widget": "order-by", "datasetfilter": "terminals"},
                "loadingdatamsg": {"type": "string", "value": "Loading items...", "bindable": "in-bound"},
                "datacompletemsg": {"type": "string", "value": "No more data to load", "bindable": "in-bound"},
                "height": {"type": "string", "pattern": this.dimensionRegex},
                "imagewidth": {"type": "string", "value": "16px"},
                "onClick": {"type": "event", "options": this.widgetEventOptions, "widget": "eventlist", "show": false},
                "onTap": {"type": "event", "options": this.widgetEventOptions, "widget": "eventlist", "show": false},
                "onMouseenter": {"type": "event", "options": this.widgetEventOptions, "widget": "eventlist", "show": false},
                "onMouseleave": {"type": "event", "options": this.widgetEventOptions, "widget": "eventlist", "show": false},
                "onChange": {"type": "event", "options": this.widgetEventOptions, "widget": "eventlist"}
            },
            "wm.chart": {
                "title": {"type": "string", "bindable": "in-bound", "showPrettyExprInDesigner": true},
                "subheading": {"type": "string", "bindable": "in-bound", "showPrettyExprInDesigner": true},
                "iconclass": {"type": "string", "widget": "select-icon", "bindable": "in-bound", "pattern": this.classRegex, "label": 'Title Icon Class'},
                "advancedsettings": {"type": "button", "hidelabel": true, "iconclass": "web-service"},
                "height": {"type": "string", value: "210px", "pattern": this.dimensionRegex},
                "width": {"type": "string", "pattern": this.dimensionRegex},
                "type": {"type": "string", "widget": "list", "options": ["Area", "Bar", "Bubble", "Column", "Cumulative Line", "Donut", "Line", "Pie"], "bindable": "in-out-bound", "show": false},
                "scopedataset": {"type": "string"},
                "dataset": {"type": "array, object", "bindable": "in-bound", "widget": "string"},
                "formattype": {"type": "select-by-object", "options": [{"label": "toNumber", "value": "integer"}, {"label": "toDate", "value": "date"}], "value": "", "displayfield": "label", "datafield": "value", "showindesigner": false},
                "xaxisdatakey": {"type": "list", "widget": "list", "datasetfilter" : "custom"},
                "xaxislabel": {"type": "string"},
                "xunits": {"type": "string"},
                "xnumberformat": {"type": "list-group", "options": this.numberFormatOptions},
                "xdateformat": {"type": "list-group", "options": this.dateOptions},
                "yaxisdatakey": {"type": "list", "widget": "multi-select", "datasetfilter" : "custom"},
                "yaxislabel": {"type": "string"},
                "yunits": {"type": "string"},
                "ynumberformat": {"type": "list-group", "options": this.numberFormatOptions},
                "bubblesize": {"type": "string", "widget": "list", "datasetfilter" : "custom"},
                "shape": {"type": "string", "widget": "list", "options": ["circle", "cross", "diamond", "random", "square", "triangle-down", "triangle-up"], value: "circle"},
                "show": {"type": "boolean", "value": true, "bindable": "in-out-bound"},
                "highlightpoints": {"type": "boolean"},
                "linethickness": {"type": "string"},
                "tooltips": {"type": "boolean", "value": true},
                "showlegend": {"type": "list", "options": ["hide", "top", "bottom"], "value": "top"},
                "showxaxis": {"type": "boolean", "value": true},
                "showyaxis": {"type": "boolean", "value": true},
                "legendtype": {"type": "list", "options": ["classic", "furious"], "value": "furious", "disabled": false, "show": false},
                "showvalues": {"type": "boolean", "value": false},
                "showlabels": {"type": "list", "options":  ['hide', 'inside', 'outside'], "value": "outside"},
                "viewtype": {"type": "list", "options":  ['Grouped', 'Stacked'], "value": "Grouped"},
                "interpolation": {"type": "list", "options":  ['linear', 'cardinal', 'step'], "value": "linear"},
                "areaviewtype": {"type": "list", "options":  ['stack', 'stream', 'expand'], "value": "stack"},
                "staggerlabels": {"type": "boolean", "value": false},
                "reducexticks": {"type": "boolean", "value": true},
                "labeltype": {"type": "select-by-object", "value": "percent", "options" : [{"label": "key", "value": "key"}, {"label": "value", "value": "value"}, {"label": "percent", "value": "percent"}, {"label": "key, value", "value": "key-value"}]},
                "labelthreshold": {"type": "number", "value": 0.01, "show": false},
                "offset": {"type": "string", "widget": "box"},
                "offsettop": {"type": "number", "value": 25, "pattern": this.numberRegex},
                "offsetbottom": {"type": "number", "value": 55, "pattern": this.numberRegex},
                "offsetleft": {"type": "number", "value": 75, "pattern": this.numberRegex},
                "offsetright": {"type": "number", "value": 25, "pattern": this.numberRegex},
                "barspacing": {"type": "list", "options": ["small", "medium", "large"], "value": "medium"},
                "donutratio": {"type": "list", "options": ["small", "medium", "large"], "value": "medium"},
                "centerlabel": {"type": "string", "bindable": "in-bound", "show": false},
                "showlabelsoutside": {"type": "boolean", "value": true},
                "xaxislabeldistance": {"type": "number", "value": 12},
                "yaxislabeldistance": {"type": "number", "value": 12},
                "showxdistance": {"type": "boolean", "value": false},
                "showydistance": {"type": "boolean", "value": false},
                "aggregation": {"type": "list", "options": ["average", "count", "maximum", "minimum", "none", "sum"], "value": "none", "disabled" : true},
                "aggregationcolumn": {"type": "list", "widget": "list", "disabled" : true, "datasetfilter" : "custom"},
                "groupby": {"type": "list", "widget": "multi-select", "datasetfilter" : "custom"},
                "orderby": {"type": "list", "widget": "order-by", "datasetfilter": "custom"},
                "theme": {"type": "list", "options": ["Annabelle", "Azure", "Flyer", "GrayScale", "Luminosity", "Mellow", "Orient", "Retro", "Terrestrial"]},
                "customcolors": {"type": "array", "bindable": "in-bound", "widget": "string"},
                "nodatamessage": {"type": "string", "value": "No Data Available.", "bindable": "in-bound", "show": false},
                "xdomain" : {"type": "list", "options": ["Default", "Min"], "value": "Default"},
                "ydomain" : {"type": "list", "options": ["Default", "Min"], "value": "Default"},
                /**Style**/
                "borderwidth": {"type": "string", "widget": "box-model"},
                "borderstyle": {"type": "string", "options": ["dashed", "dotted", "none", "solid"], "widget": "border-style"},
                "bordercolor": {"type": "string", "widget": "color"},
                "backgroundcolor": {"type": "string", "widget": "color"},
                "backgroundimage": {"type": "string", "bindable": "in-bound"},
                "color": {"type": "string", "widget": "color"},
                "selecteditem": {"type": "object", "bindable": "out-bound", "widget": "string", "getTypeFrom": "dataset"},
                "onTransform": {"type": "event", "options": this.widgetEventOptions, "widget": "eventlist"},
                "onSelect": {"type": "event", "options": this.widgetEventOptions, "widget": "eventlist"},
                "loadingdatamsg": {"type": "string", "value": "Loading...", "bindable": "in-bound", "show": false}
            },
            "wm.pagination": {
                "show": {"type": "boolean", "value": true, "bindable": "in-bound"},
                "dataset": {"type": "array, object", "bindable": "in-bound", "widget": "string"},
                "result": {"type": "object", "bindable": "out-bound", "widget": "string", "show": "false", "getTypeFrom": "dataset"},
                "onSetrecord": {"type": "event", "options": this.widgetEventOptions, "widget": "eventlist"},
                "onPaginationchange": {"type": "event", "options": this.widgetEventOptions, "widget": "eventlist"},
                "tabindex": {"type": "number", "value": "0"},
                "navigationsize": {"type": "list", "options": ["small", "large"], "show": false},
                "class": {"type": "string", "pattern": this.classRegex, "widget": "list-picker", "options": ["pagination-sm", "pagination-lg"]}
            },
            "wm.login": {
                "show": {"type": "boolean", "value": true, "bindable": "in-bound"},
                "errormessage": {"type": "string"},
                "onSubmit": {"type": "event", "options": this.widgetEventOptions, "widget": "eventlist"}
            },
            "wm.pagecontainer": {
                "content": {"type": "string", "options": [], "widget": "pages-list", value: "", "bindable": "in-bound"},
                "onLoad": {"type": "event", "options": this.widgetEventOptions, "widget": "eventlist"}
            },
            "wm.video": {
                "hint": {"type": "string", "bindable": "in-bound"},
                "mp4format": {"type": "string", "value": "", "bindable": "in-out-bound"},
                "oggformat": {"type": "string", "value": "", "bindable": "in-out-bound"},
                "webmformat": {"type": "string", "value": "", "bindable": "in-out-bound"},
                "subtitlelang": {"type": "string", "value": "en", "bindable": "in-out-bound"},
                "subtitlesource": {"type": "string", "value": "", "bindable": "in-out-bound"},
                "videoposter": {"type": "string", "value": "resources/images/imagelists/default-image.png", "bindable": "in-out-bound"},
                "controls":  {"type": "boolean"},
                "videosupportmessage":  {"type": "string", "value": "Your browser does not support the video tag."},
                "autoplay": {"type": "boolean"},
                "loop": {"type": "boolean"},
                "muted": {"type": "boolean"},
                "videopreload": {"type": "list", "options": ["none", "metadata", "auto"], "value": "none"},
                "tabindex": {"type": "number", "value": "0"},
                "showindevice": {"type": "select-all", "options": this.showInDeviceOptions, "value": "all", "displaytype": 'inline-block'},
                "class": {"type": "string", "pattern": this.classRegex},
                "show": {"type": "boolean", "value": true, "bindable": "in-bound"},
                "height": {"type": "string", "pattern": this.dimensionRegex},
                "width": {"type": "string", "pattern": this.dimensionRegex},
                "accessroles": {"type": "access-roles-select", "options": this.roles, "value": this.EVERYONE}
            },
            "wm.audio": {
                "hint": {"type": "string", "bindable": "in-bound"},
                "mp3format": {"type": "string", "value": "", "bindable": "in-out-bound"},
                "controls": {"type": "boolean"},
                "audiosupportmessage": {"type": "string", "value": "Your browser does not support the audio tag."},
                "autoplay": {"type": "boolean"},
                "loop": {"type": "boolean"},
                "muted": {"type": "boolean", "value": false},
                "audiopreload": {"type": "list", "options": ["none", "metadata", "auto"], "value": "none"},
                "tabindex": {"type": "number", "value": "0"},
                "showindevice": {"type": "select-all", "options": this.showInDeviceOptions, "value": "all", "displaytype": 'inline-block'},
                "class": {"type": "string", "pattern": this.classRegex},
                "show": {"type": "boolean", "value": true, "bindable": "in-bound"},
                "height": {"type": "string", "pattern": this.dimensionRegex},
                "width": {"type": "string", "pattern": this.dimensionRegex},
                "accessroles": {"type": "access-roles-select", "options": this.roles, "value": this.EVERYONE}
            },
            "wm.progress": {
                "hint": {"type": "string", "bindable": "in-bound"},
                "minvalue": {"type": "number", "value": 0, "bindable": "in-bound"},
                "maxvalue": {"type": "number", "value": 100, "bindable": "in-bound"},
                "datavalue": {"type": "number, string", "bindable": "in-out-bound", "widget": "string"},
                "dataset": {"type": "array, object", "bindable": "in-bound", "widget": "string"},
                "pollinterval": {"type": "number"},
                "displayformat": {"type": "list", "options": ["9", "9.9", "9.99", "9.999", "9%", "9.9%", "9.99%", "9.999%"]},
                "captionplacement": {"type": "list", "options": ["inside", "hidden"], "value": "hidden"},
                "type": {"type": "list", "options": ["default", "default-striped", "success", "success-striped", "info", "info-striped", "warning", "warning-striped", "danger", "danger-striped"], "value": "default", "bindable": "in-bound"},

                "width": {"type": "string", "pattern": this.dimensionRegex},
                "height": {"type": "string", "pattern": this.dimensionRegex},
                "onStart": {"type": "event", "options": this.widgetEventOptions, "widget": "eventlist"},
                "onComplete": {"type": "event", "options": this.widgetEventOptions, "widget": "eventlist"},
                "onBeforeupdate": {"type": "event", "options": this.widgetEventOptions, "widget": "eventlist"},

                /* ---- styles ----*/
                "margin": {"type": "string", "widget": "box-model"},
                "tabindex": {"type": "number", "value": "0"}
            },
            "wm.template": {
                "header": {"type": "list", "options": [], "widget": "templates-list", value: "_nocontent"},
                "topnav": {"type": "list", "options": [], "widget": "templates-list", value: "_nocontent"},
                "leftnav": {"type": "list", "options": [], "widget": "templates-list", value: "_nocontent"},
                "rightnav": {"type": "list", "options": [], "widget": "templates-list", value: "_nocontent"},
                "footer": {"type": "list", "options": [], "widget": "templates-list", value: "_nocontent"}
            }
        }
    }

    getDefaultValues(component) {
        return this.results.properties[component];
    }
}