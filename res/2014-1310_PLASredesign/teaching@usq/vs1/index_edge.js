/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};


var resources = [
];
var symbols = {
"stage": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'Rectangle',
            type:'rect',
            rect:['232px','224px','3px','95px','auto','auto'],
            fill:["rgba(98,98,98,1.00)"],
            stroke:[0,"rgb(0, 0, 0)","none"],
            transform:[[],['-27'],[],['1','0.642']]
         },
         {
            id:'RectangleCopy6',
            type:'rect',
            rect:['164px','220px','3px','95px','auto','auto'],
            fill:["rgba(98,98,98,1.00)"],
            stroke:[0,"rgb(0, 0, 0)","none"],
            transform:[[],['27'],[],['1','0.642']]
         },
         {
            id:'RectangleCopy3',
            type:'rect',
            rect:['202px','79px','3px','95px','auto','auto'],
            fill:["rgba(98,98,98,1.00)"],
            stroke:[0,"rgb(0, 0, 0)","none"],
            transform:[[],[],[],['1','0.642']]
         },
         {
            id:'RectangleCopy2',
            type:'rect',
            rect:['275px','172px','3px','95px','auto','auto'],
            fill:["rgba(98,98,98,1.00)"],
            stroke:[0,"rgb(0, 0, 0)","none"],
            transform:[[],['-78'],[],['1','0.642']]
         },
         {
            id:'RectangleCopy5',
            type:'rect',
            rect:['125px','170px','3px','95px','auto','auto'],
            fill:["rgba(98,98,98,1.00)"],
            stroke:[0,"rgb(0, 0, 0)","none"],
            transform:[[],['78'],[],['1','0.642']]
         },
         {
            id:'RectangleCopy',
            type:'rect',
            rect:['261px','108px','3px','95px','auto','auto'],
            fill:["rgba(98,98,98,1.00)"],
            stroke:[0,"rgb(0, 0, 0)","none"],
            transform:[[],['55'],[],['1','0.642']]
         },
         {
            id:'RectangleCopy4',
            type:'rect',
            rect:['143px','105px','3px','95px','auto','auto'],
            fill:["rgba(98,98,98,1.00)"],
            stroke:[0,"rgb(0, 0, 0)","none"],
            transform:[[],['-55'],[],['1','0.642']]
         },
         {
            id:'RectangleCopy7',
            type:'rect',
            rect:['257px','206px','3px','95px','auto','auto'],
            fill:["rgba(98,98,98,1.00)"],
            stroke:[0,"rgb(0, 0, 0)","none"],
            transform:[[],['-55'],[],['1','0.642']]
         },
         {
            id:'arrow_mc',
            display:'none',
            type:'rect',
            rect:['65','23','auto','auto','auto','auto']
         },
         {
            id:'orange_mc',
            type:'rect',
            rect:['255','3','auto','auto','auto','auto'],
            title:'Planning and preparing',
            cursor:['pointer']
         },
         {
            id:'orange2_mc',
            display:'none',
            type:'rect',
            rect:['255','3','auto','auto','auto','auto'],
            title:'You at USQ',
            tabindex:'1',
            cursor:['pointer']
         },
         {
            id:'yellow_mc',
            type:'rect',
            rect:['255','155','auto','auto','auto','auto'],
            title:'Teaching at USQ',
            cursor:['pointer']
         },
         {
            id:'yellow2_mc',
            display:'none',
            type:'rect',
            rect:['255','155','auto','auto','auto','auto'],
            title:'USQ culture',
            tabindex:'8',
            cursor:['pointer']
         },
         {
            id:'green_mc',
            type:'rect',
            rect:['374','66','auto','auto','auto','auto'],
            title:'Developing resources',
            cursor:['pointer']
         },
         {
            id:'green2_mc',
            display:'none',
            type:'rect',
            rect:['374','66','auto','auto','auto','auto'],
            title:'Your support network',
            tabindex:'2',
            cursor:['pointer']
         },
         {
            id:'dGreen_mc',
            type:'rect',
            rect:['336','87','auto','auto','auto','auto'],
            title:'Your studyDesk',
            cursor:['pointer']
         },
         {
            id:'dGreen2_mc',
            display:'none',
            type:'rect',
            rect:['336','87','auto','auto','auto','auto'],
            cursor:['pointer']
         },
         {
            id:'pink_mc',
            type:'rect',
            rect:['107','183','auto','auto','auto','auto'],
            title:'Assessment at USQ',
            cursor:['pointer']
         },
         {
            id:'pink2_mc',
            display:'none',
            type:'rect',
            rect:['107','183','auto','auto','auto','auto'],
            title:'L & T practices',
            tabindex:'6',
            cursor:['pointer']
         },
         {
            id:'teal_mc',
            type:'rect',
            rect:['396','190','auto','auto','auto','auto'],
            title:'Your online course',
            cursor:['pointer']
         },
         {
            id:'teal2_mc',
            display:'none',
            type:'rect',
            rect:['396','190','auto','auto','auto','auto'],
            title:'Academic calendar',
            tabindex:'3',
            cursor:['pointer']
         },
         {
            id:'purple_mc',
            type:'rect',
            rect:['179','282','auto','auto','auto','auto'],
            title:'Supporting students',
            cursor:['pointer']
         },
         {
            id:'purple2_mc',
            display:'none',
            type:'rect',
            rect:['179','282','auto','auto','auto','auto'],
            title:'Study modes',
            tabindex:'5',
            cursor:['pointer']
         },
         {
            id:'blue_mc',
            type:'rect',
            rect:['316','289','auto','auto','auto','auto'],
            title:'Managing large classes',
            cursor:['pointer']
         },
         {
            id:'blue2_mc',
            display:'none',
            type:'rect',
            rect:['316','289','auto','auto','auto','auto'],
            title:'Mulit-campus',
            tabindex:'4',
            cursor:['pointer']
         },
         {
            id:'red_mc',
            type:'rect',
            rect:['137','58','auto','auto','auto','auto'],
            title:'Course evaluatoin',
            cursor:['pointer']
         },
         {
            id:'red2_mc',
            display:'none',
            type:'rect',
            rect:['137','58','auto','auto','auto','auto'],
            title:'Your students',
            tabindex:'7',
            cursor:['pointer']
         },
         {
            id:'home_icon-01',
            display:'none',
            type:'image',
            rect:['300px','365px','29px','26px','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(0,0,0,0)",im+"home_icon.png",'0px','0px']
         },
         {
            id:'orangeText_mc',
            type:'rect',
            rect:['430','20','auto','auto','auto','auto']
         },
         {
            id:'yellowText_mc',
            display:'none',
            type:'rect',
            rect:['223','262','auto','auto','auto','auto']
         },
         {
            id:'dgreenText_mc',
            display:'none',
            type:'rect',
            rect:['511','167','auto','auto','auto','auto']
         },
         {
            id:'greenText_mc',
            display:'none',
            type:'rect',
            rect:['449','10','auto','auto','auto','auto']
         },
         {
            id:'tealText_mc',
            display:'none',
            type:'rect',
            rect:['464','84','auto','auto','auto','auto']
         },
         {
            id:'blueText_mc',
            display:'none',
            type:'rect',
            rect:['437','171','auto','auto','auto','auto']
         },
         {
            id:'purpleText_mc',
            display:'none',
            type:'rect',
            rect:['449','84','auto','auto','auto','auto']
         },
         {
            id:'pinkText_mc',
            display:'none',
            type:'rect',
            rect:['465','114','auto','auto','auto','auto']
         },
         {
            id:'redText_mc',
            display:'none',
            type:'rect',
            rect:['530','210','auto','auto','auto','auto']
         }],
         symbolInstances: [
         {
            id:'teal2_mc',
            symbolName:'teal_mc'
         },
         {
            id:'teal_mc',
            symbolName:'teal_mc'
         },
         {
            id:'dGreen2_mc',
            symbolName:'dGreen_mc'
         },
         {
            id:'yellow2_mc',
            symbolName:'yellow_mc'
         },
         {
            id:'arrow_mc',
            symbolName:'arrow_mc'
         },
         {
            id:'blueText_mc',
            symbolName:'blueText_mc'
         },
         {
            id:'yellow_mc',
            symbolName:'yellow_mc'
         },
         {
            id:'redText_mc',
            symbolName:'redText_mc'
         },
         {
            id:'pinkText_mc',
            symbolName:'pinkText_mc'
         },
         {
            id:'pink_mc',
            symbolName:'pink_mc'
         },
         {
            id:'blue_mc',
            symbolName:'blue_mc'
         },
         {
            id:'greenText_mc',
            symbolName:'greenText_mc'
         },
         {
            id:'orange2_mc',
            symbolName:'orange_mc'
         },
         {
            id:'blue2_mc',
            symbolName:'blue_mc'
         },
         {
            id:'purple_mc',
            symbolName:'purple_mc'
         },
         {
            id:'dGreen_mc',
            symbolName:'dGreen_mc'
         },
         {
            id:'purpleText_mc',
            symbolName:'purpleText_mc'
         },
         {
            id:'tealText_mc',
            symbolName:'tealText_mc'
         },
         {
            id:'green_mc',
            symbolName:'green_mc'
         },
         {
            id:'red_mc',
            symbolName:'red_mc'
         },
         {
            id:'yellowText_mc',
            symbolName:'yellowText_mc'
         },
         {
            id:'red2_mc',
            symbolName:'red_mc'
         },
         {
            id:'orangeText_mc',
            symbolName:'orangeText_mc'
         },
         {
            id:'dgreenText_mc',
            symbolName:'dgreenText_mc'
         },
         {
            id:'orange_mc',
            symbolName:'orange_mc'
         },
         {
            id:'purple2_mc',
            symbolName:'purple_mc'
         },
         {
            id:'pink2_mc',
            symbolName:'pink_mc'
         },
         {
            id:'green2_mc',
            symbolName:'green_mc'
         }
         ]
      },
   states: {
      "Base State": {
         "${_green2_mc}": [
            ["style", "top", '66px'],
            ["transform", "scaleY", '0.6'],
            ["transform", "scaleX", '0.6'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '274px'],
            ["style", "display", 'none']
         ],
         "${_green_mc}": [
            ["style", "top", '156px'],
            ["transform", "scaleY", '1'],
            ["transform", "scaleX", '1'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '302px'],
            ["style", "display", 'block']
         ],
         "${_red_mc}": [
            ["style", "top", '52px'],
            ["transform", "scaleY", '1'],
            ["transform", "scaleX", '1'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '55px'],
            ["style", "display", 'block']
         ],
         "${_orange2_mc}": [
            ["style", "top", '3px'],
            ["transform", "scaleY", '0.7'],
            ["transform", "scaleX", '0.7'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '155px'],
            ["style", "display", 'none']
         ],
         "${_RectangleCopy5}": [
            ["color", "background-color", 'rgba(98,98,98,1.00)'],
            ["transform", "scaleY", '0.64211'],
            ["transform", "rotateZ", '90deg'],
            ["style", "top", '156px'],
            ["style", "opacity", '1'],
            ["style", "left", '123px'],
            ["style", "width", '3px']
         ],
         "${_yellow2_mc}": [
            ["style", "top", '155px'],
            ["transform", "scaleY", '1'],
            ["transform", "scaleX", '1'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '155px'],
            ["style", "display", 'none']
         ],
         "${_EllipseCopy5}": [
            ["style", "top", '']
         ],
         "${_Text4}": [
            ["style", "top", '']
         ],
         "${_pink2_mc}": [
            ["style", "top", '183px'],
            ["transform", "scaleY", '0.6'],
            ["transform", "scaleX", '0.6'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '7px'],
            ["style", "display", 'none']
         ],
         "${_blueText_mc}": [
            ["style", "top", '40px'],
            ["style", "left", '430px'],
            ["style", "display", 'none']
         ],
         "${_RectangleCopy7}": [
            ["style", "top", '206px'],
            ["transform", "scaleY", '0.64211'],
            ["transform", "rotateZ", '-45deg'],
            ["color", "background-color", 'rgba(98,98,98,1)'],
            ["style", "opacity", '1'],
            ["style", "left", '257px'],
            ["style", "width", '3px']
         ],
         "${_yellowText_mc}": [
            ["style", "top", '105px'],
            ["style", "left", '229px'],
            ["style", "clip", [25.60003662109375,342.599853515625,269,-196.79998779296875], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "display", 'none']
         ],
         "${_yellow_mc}": [
            ["style", "top", '155px'],
            ["transform", "scaleY", '1'],
            ["transform", "scaleX", '1'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '155px'],
            ["style", "display", 'block']
         ],
         "${_Ellipse}": [
            ["style", "top", '']
         ],
         "${_red2_mc}": [
            ["style", "top", '58px'],
            ["transform", "scaleY", '0.6'],
            ["transform", "scaleX", '0.6'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '37px'],
            ["style", "display", 'none']
         ],
         "${_orangeText_mc}": [
            ["style", "top", '40px'],
            ["style", "display", 'block']
         ],
         "${_orange_mc}": [
            ["style", "top", '3px'],
            ["transform", "scaleY", '1'],
            ["transform", "scaleX", '1'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '156px'],
            ["style", "display", 'block']
         ],
         "${_pinkText_mc}": [
            ["style", "top", '40px'],
            ["style", "left", '430px'],
            ["style", "display", 'none']
         ],
         "${_Text7}": [
            ["style", "top", '']
         ],
         "${_blue_mc}": [
            ["style", "top", '301px'],
            ["transform", "scaleY", '1'],
            ["transform", "scaleX", '1'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '156px'],
            ["style", "display", 'block']
         ],
         "${_Text3}": [
            ["style", "top", '']
         ],
         "${_RectangleCopy}": [
            ["style", "top", '101px'],
            ["transform", "scaleY", '0.74488'],
            ["transform", "rotateZ", '45deg'],
            ["color", "background-color", 'rgba(98,98,98,1.00)'],
            ["style", "opacity", '1'],
            ["style", "left", '257px'],
            ["style", "width", '3px']
         ],
         "${_Text5}": [
            ["style", "top", '']
         ],
         "${_RectangleCopy4}": [
            ["color", "background-color", 'rgba(98,98,98,1.00)'],
            ["transform", "scaleY", '0.64211'],
            ["transform", "rotateZ", '-45deg'],
            ["style", "top", '97px'],
            ["style", "opacity", '1'],
            ["style", "left", '148px'],
            ["style", "width", '3px']
         ],
         "${_dgreenText_mc}": [
            ["style", "top", '40px'],
            ["style", "left", '430px'],
            ["style", "display", 'none']
         ],
         "${_home_icon-01}": [
            ["style", "display", 'none'],
            ["style", "top", '96px'],
            ["style", "left", '300px'],
            ["style", "cursor", 'pointer']
         ],
         "${_teal2_mc}": [
            ["style", "top", '190px'],
            ["transform", "scaleY", '0.6'],
            ["transform", "scaleX", '0.6'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '296px'],
            ["style", "display", 'none']
         ],
         "${_purple2_mc}": [
            ["style", "top", '282px'],
            ["transform", "scaleY", '0.6'],
            ["transform", "scaleX", '0.6'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '79px'],
            ["style", "display", 'none']
         ],
         "${_pink_mc}": [
            ["style", "top", '156px'],
            ["transform", "scaleY", '1'],
            ["transform", "scaleX", '1'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '16px'],
            ["style", "display", 'block']
         ],
         "${_Rectangle}": [
            ["color", "background-color", 'rgba(98,98,98,1.00)'],
            ["transform", "scaleY", '0.64211'],
            ["transform", "rotateZ", '0deg'],
            ["style", "top", '233px'],
            ["style", "opacity", '1'],
            ["style", "left", '201px'],
            ["style", "width", '3px']
         ],
         "${_EllipseCopy4}": [
            ["style", "top", '']
         ],
         "${_dGreen2_mc}": [
            ["style", "top", '52px'],
            ["transform", "scaleY", '1'],
            ["transform", "scaleX", '1'],
            ["style", "display", 'none'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '264px']
         ],
         "${_teal_mc}": [
            ["style", "top", '259px'],
            ["transform", "scaleY", '1'],
            ["transform", "scaleX", '1'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '264px'],
            ["style", "display", 'block']
         ],
         "${_RectangleCopy2}": [
            ["style", "top", '156px'],
            ["transform", "scaleY", '0.70948'],
            ["transform", "rotateZ", '90deg'],
            ["color", "background-color", 'rgba(98,98,98,1.00)'],
            ["style", "opacity", '1'],
            ["style", "left", '280px'],
            ["style", "width", '3px']
         ],
         "${_blue2_mc}": [
            ["style", "top", '289px'],
            ["transform", "scaleY", '0.61'],
            ["transform", "scaleX", '0.6'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '216px'],
            ["style", "display", 'none']
         ],
         "${_RectangleCopy6}": [
            ["style", "top", '210px'],
            ["transform", "scaleY", '0.64211'],
            ["transform", "rotateZ", '45deg'],
            ["color", "background-color", 'rgba(98,98,98,1.00)'],
            ["style", "opacity", '1'],
            ["style", "left", '149px'],
            ["style", "width", '3px']
         ],
         "${_redText_mc}": [
            ["style", "top", '40px'],
            ["style", "left", '430px'],
            ["style", "display", 'none']
         ],
         "${_RectangleCopy3}": [
            ["style", "top", '79px'],
            ["transform", "scaleY", '0.64211'],
            ["transform", "rotateZ", '0deg'],
            ["color", "background-color", 'rgba(98,98,98,1.00)'],
            ["style", "opacity", '1'],
            ["style", "left", '202px'],
            ["style", "width", '3px']
         ],
         "${_EllipseCopy7}": [
            ["style", "top", '']
         ],
         "${_EllipseCopy3}": [
            ["style", "top", '']
         ],
         "${_tealText_mc}": [
            ["style", "top", '40px'],
            ["style", "left", '430px'],
            ["style", "display", 'none']
         ],
         "${_greenText_mc}": [
            ["style", "top", '40px'],
            ["style", "left", '430px'],
            ["style", "display", 'none']
         ],
         "${_Text}": [
            ["style", "top", '']
         ],
         "${_dGreen_mc}": [
            ["style", "top", '52px'],
            ["transform", "scaleY", '1'],
            ["transform", "rotateZ", '-1deg'],
            ["transform", "scaleX", '1'],
            ["style", "display", 'block'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '264px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '400px'],
            ["style", "width", '600px']
         ],
         "${_arrow_mc}": [
            ["style", "display", 'none'],
            ["style", "opacity", '1'],
            ["style", "left", '45px']
         ],
         "${_purple_mc}": [
            ["style", "top", '259px'],
            ["transform", "scaleY", '1'],
            ["transform", "scaleX", '1'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '55px'],
            ["style", "display", 'block']
         ],
         "${_purpleText_mc}": [
            ["style", "top", '40px'],
            ["style", "left", '430px'],
            ["style", "display", 'none']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2250,
         autoPlay: true,
         timeline: [
            { id: "eid237", tween: [ "style", "${_teal2_mc}", "top", '10px', { fromValue: '190px'}], position: 1000, duration: 1000 },
            { id: "eid326", tween: [ "style", "${_RectangleCopy4}", "top", '97px', { fromValue: '97px'}], position: 0, duration: 0 },
            { id: "eid64", tween: [ "style", "${_greenText_mc}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid453", tween: [ "style", "${_dGreen2_mc}", "top", '10px', { fromValue: '52px'}], position: 1000, duration: 1000 },
            { id: "eid288", tween: [ "style", "${_red_mc}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid287", tween: [ "style", "${_red_mc}", "display", 'none', { fromValue: 'block'}], position: 2000, duration: 0 },
            { id: "eid411", tween: [ "style", "${_dGreen_mc}", "left", '167px', { fromValue: '264px'}], position: 1000, duration: 1000 },
            { id: "eid334", tween: [ "style", "${_RectangleCopy5}", "left", '123px', { fromValue: '123px'}], position: 0, duration: 0 },
            { id: "eid339", tween: [ "style", "${_Rectangle}", "left", '201px', { fromValue: '201px'}], position: 0, duration: 0 },
            { id: "eid390", tween: [ "transform", "${_dGreen_mc}", "scaleX", '0.6', { fromValue: '1'}], position: 1000, duration: 1000 },
            { id: "eid338", tween: [ "transform", "${_Rectangle}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
            { id: "eid301", tween: [ "style", "${_purple_mc}", "top", '10px', { fromValue: '259px'}], position: 1000, duration: 1000 },
            { id: "eid53", tween: [ "style", "${_tealText_mc}", "top", '40px', { fromValue: '40px'}], position: 0, duration: 0 },
            { id: "eid460", tween: [ "style", "${_dGreen_mc}", "display", 'none', { fromValue: 'block'}], position: 2000, duration: 0 },
            { id: "eid214", tween: [ "transform", "${_yellow_mc}", "scaleX", '1', { fromValue: '1'}], position: 1000, duration: 0 },
            { id: "eid179", tween: [ "transform", "${_purple_mc}", "scaleX", '0.6', { fromValue: '1'}], position: 1000, duration: 1000 },
            { id: "eid226", tween: [ "style", "${_arrow_mc}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid227", tween: [ "style", "${_arrow_mc}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid323", tween: [ "style", "${_orange_mc}", "left", '108px', { fromValue: '156px'}], position: 1000, duration: 1000 },
            { id: "eid337", tween: [ "transform", "${_RectangleCopy2}", "rotateZ", '90deg', { fromValue: '90deg'}], position: 0, duration: 0 },
            { id: "eid457", tween: [ "transform", "${_dGreen2_mc}", "scaleY", '0.6', { fromValue: '1'}], position: 1000, duration: 1000 },
            { id: "eid364", tween: [ "style", "${_RectangleCopy6}", "left", '149px', { fromValue: '149px'}], position: 0, duration: 0 },
            { id: "eid69", tween: [ "style", "${_redText_mc}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid250", tween: [ "style", "${_orange2_mc}", "left", '155px', { fromValue: '155px'}], position: 0, duration: 0 },
            { id: "eid251", tween: [ "style", "${_orange2_mc}", "left", '108px', { fromValue: '155px'}], position: 1000, duration: 1000 },
            { id: "eid459", tween: [ "style", "${_dGreen2_mc}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid458", tween: [ "style", "${_dGreen2_mc}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid391", tween: [ "transform", "${_dGreen_mc}", "scaleY", '0.6', { fromValue: '1'}], position: 1000, duration: 1000 },
            { id: "eid401", tween: [ "transform", "${_purple2_mc}", "scaleY", '0.6', { fromValue: '0.6'}], position: 2000, duration: 0 },
            { id: "eid286", tween: [ "style", "${_blue2_mc}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid283", tween: [ "style", "${_blue2_mc}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid231", tween: [ "style", "${_blue2_mc}", "top", '10px', { fromValue: '289px'}], position: 1000, duration: 1000 },
            { id: "eid213", tween: [ "style", "${_RectangleCopy}", "opacity", '0', { fromValue: '1'}], position: 1000, duration: 250 },
            { id: "eid360", tween: [ "transform", "${_RectangleCopy6}", "rotateZ", '45deg', { fromValue: '45deg'}], position: 0, duration: 0 },
            { id: "eid62", tween: [ "style", "${_redText_mc}", "top", '40px', { fromValue: '40px'}], position: 0, duration: 0 },
            { id: "eid504", tween: [ "style", "${_yellowText_mc}", "top", '105px', { fromValue: '105px'}], position: 2000, duration: 0 },
            { id: "eid45", tween: [ "style", "${_yellow_mc}", "left", '155px', { fromValue: '155px'}], position: 0, duration: 0 },
            { id: "eid112", tween: [ "style", "${_yellow_mc}", "left", '155px', { fromValue: '155px'}], position: 1000, duration: 0 },
            { id: "eid189", tween: [ "transform", "${_teal_mc}", "scaleX", '0.6', { fromValue: '1'}], position: 1000, duration: 1000 },
            { id: "eid292", tween: [ "style", "${_red2_mc}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid291", tween: [ "style", "${_red2_mc}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid400", tween: [ "transform", "${_purple2_mc}", "scaleX", '0.6', { fromValue: '0.6'}], position: 2000, duration: 0 },
            { id: "eid68", tween: [ "style", "${_pinkText_mc}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid257", tween: [ "style", "${_orange2_mc}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid256", tween: [ "style", "${_orange2_mc}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid327", tween: [ "style", "${_RectangleCopy4}", "left", '148px', { fromValue: '148px'}], position: 0, duration: 0 },
            { id: "eid331", tween: [ "style", "${_RectangleCopy2}", "top", '156px', { fromValue: '156px'}], position: 0, duration: 0 },
            { id: "eid228", tween: [ "style", "${_red2_mc}", "left", '37px', { fromValue: '37px'}], position: 0, duration: 0 },
            { id: "eid229", tween: [ "style", "${_red2_mc}", "left", '285px', { fromValue: '37px'}], position: 1000, duration: 1000 },
            { id: "eid243", tween: [ "style", "${_green2_mc}", "top", '10px', { fromValue: '66px'}], position: 1000, duration: 1000 },
            { id: "eid299", tween: [ "style", "${_pink_mc}", "top", '10px', { fromValue: '156px'}], position: 1000, duration: 1000 },
            { id: "eid341", tween: [ "transform", "${_RectangleCopy2}", "scaleY", '0.70948', { fromValue: '0.70948'}], position: 0, duration: 0 },
            { id: "eid210", tween: [ "style", "${_RectangleCopy4}", "opacity", '0', { fromValue: '1'}], position: 1000, duration: 250 },
            { id: "eid306", tween: [ "style", "${_green_mc}", "left", '226px', { fromValue: '302px'}], position: 1000, duration: 1000 },
            { id: "eid452", tween: [ "style", "${_dGreen2_mc}", "left", '167px', { fromValue: '264px'}], position: 1000, duration: 1000 },
            { id: "eid181", tween: [ "transform", "${_pink_mc}", "scaleX", '0.6', { fromValue: '1'}], position: 1000, duration: 1000 },
            { id: "eid209", tween: [ "style", "${_RectangleCopy5}", "opacity", '0', { fromValue: '1'}], position: 1000, duration: 250 },
            { id: "eid404", tween: [ "transform", "${_blue2_mc}", "scaleY", '0.61', { fromValue: '0.61'}], position: 2000, duration: 0 },
            { id: "eid230", tween: [ "style", "${_red2_mc}", "top", '10px', { fromValue: '58px'}], position: 1000, duration: 1000 },
            { id: "eid208", tween: [ "style", "${_RectangleCopy3}", "opacity", '0', { fromValue: '1'}], position: 1000, duration: 250 },
            { id: "eid278", tween: [ "style", "${_purple2_mc}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid277", tween: [ "style", "${_purple2_mc}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid295", tween: [ "style", "${_yellow2_mc}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid436", tween: [ "style", "${_yellow2_mc}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
            { id: "eid294", tween: [ "style", "${_yellow2_mc}", "display", 'block', { fromValue: 'block'}], position: 2000, duration: 0 },
            { id: "eid296", tween: [ "style", "${_red_mc}", "left", '285px', { fromValue: '55px'}], position: 1000, duration: 1000 },
            { id: "eid246", tween: [ "style", "${_yellow2_mc}", "left", '155px', { fromValue: '155px'}], position: 0, duration: 0 },
            { id: "eid247", tween: [ "style", "${_yellow2_mc}", "left", '4px', { fromValue: '155px'}], position: 1000, duration: 1000 },
            { id: "eid259", tween: [ "style", "${_green_mc}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid258", tween: [ "style", "${_green_mc}", "display", 'none', { fromValue: 'block'}], position: 2000, duration: 0 },
            { id: "eid398", tween: [ "transform", "${_teal2_mc}", "scaleX", '0.6', { fromValue: '0.6'}], position: 2000, duration: 0 },
            { id: "eid303", tween: [ "style", "${_blue_mc}", "top", '10px', { fromValue: '301px'}], position: 1000, duration: 1000 },
            { id: "eid276", tween: [ "style", "${_purple_mc}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid275", tween: [ "style", "${_purple_mc}", "display", 'none', { fromValue: 'block'}], position: 2000, duration: 0 },
            { id: "eid274", tween: [ "style", "${_teal2_mc}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid271", tween: [ "style", "${_teal2_mc}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid410", tween: [ "style", "${_RectangleCopy7}", "opacity", '0', { fromValue: '1'}], position: 1000, duration: 250 },
            { id: "eid192", tween: [ "transform", "${_green_mc}", "scaleY", '0.6', { fromValue: '1'}], position: 1000, duration: 1000 },
            { id: "eid344", tween: [ "style", "${_RectangleCopy}", "left", '257px', { fromValue: '257px'}], position: 0, duration: 0 },
            { id: "eid224", tween: [ "style", "${_arrow_mc}", "left", '65px', { fromValue: '45px'}], position: 2000, duration: 250 },
            { id: "eid65", tween: [ "style", "${_tealText_mc}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid368", tween: [ "style", "${_dgreenText_mc}", "top", '40px', { fromValue: '40px'}], position: 0, duration: 0 },
            { id: "eid521", tween: [ "style", "${_EllipseCopy7}", "top", '', { fromValue: '0'}], position: 0, duration: 0 },
            { id: "eid397", tween: [ "transform", "${_pink2_mc}", "scaleY", '0.6', { fromValue: '0.6'}], position: 2000, duration: 0 },
            { id: "eid116", tween: [ "style", "${_orange_mc}", "top", '10px', { fromValue: '3px'}], position: 1000, duration: 1000 },
            { id: "eid454", tween: [ "transform", "${_dGreen2_mc}", "scaleX", '0.6', { fromValue: '1'}], position: 1000, duration: 1000 },
            { id: "eid50", tween: [ "style", "${_orangeText_mc}", "top", '40px', { fromValue: '40px'}], position: 0, duration: 0 },
            { id: "eid305", tween: [ "style", "${_teal_mc}", "top", '10px', { fromValue: '259px'}], position: 1000, duration: 1000 },
            { id: "eid51", tween: [ "style", "${_greenText_mc}", "top", '40px', { fromValue: '40px'}], position: 0, duration: 0 },
            { id: "eid270", tween: [ "style", "${_teal_mc}", "display", 'none', { fromValue: 'block'}], position: 2000, duration: 0 },
            { id: "eid511", tween: [ "style", "${_Ellipse}", "top", '', { fromValue: '0'}], position: 0, duration: 0 },
            { id: "eid298", tween: [ "style", "${_pink_mc}", "left", '401px', { fromValue: '16px'}], position: 1000, duration: 1000 },
            { id: "eid399", tween: [ "transform", "${_teal2_mc}", "scaleY", '0.6', { fromValue: '0.6'}], position: 2000, duration: 0 },
            { id: "eid513", tween: [ "style", "${_EllipseCopy4}", "top", '', { fromValue: '0'}], position: 0, duration: 0 },
            { id: "eid365", tween: [ "style", "${_RectangleCopy6}", "top", '210px', { fromValue: '210px'}], position: 0, duration: 0 },
            { id: "eid282", tween: [ "style", "${_blue_mc}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid281", tween: [ "style", "${_blue_mc}", "display", 'none', { fromValue: 'block'}], position: 2000, duration: 0 },
            { id: "eid60", tween: [ "style", "${_pinkText_mc}", "top", '40px', { fromValue: '40px'}], position: 0, duration: 0 },
            { id: "eid523", tween: [ "transform", "${_dGreen_mc}", "rotateZ", '-1deg', { fromValue: '-1deg'}], position: 0, duration: 0 },
            { id: "eid442", tween: [ "style", "${_home_icon-01}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid441", tween: [ "style", "${_home_icon-01}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid55", tween: [ "style", "${_blueText_mc}", "left", '430px', { fromValue: '430px'}], position: 0, duration: 0 },
            { id: "eid515", tween: [ "style", "${_Text5}", "top", '', { fromValue: '0'}], position: 0, duration: 0 },
            { id: "eid516", tween: [ "style", "${_Text5}", "top", '', { fromValue: '0'}], position: 2000, duration: 0 },
            { id: "eid178", tween: [ "transform", "${_red_mc}", "scaleY", '0.6', { fromValue: '1'}], position: 1000, duration: 1000 },
            { id: "eid182", tween: [ "transform", "${_pink_mc}", "scaleY", '0.6', { fromValue: '1'}], position: 1000, duration: 1000 },
            { id: "eid346", tween: [ "transform", "${_RectangleCopy}", "rotateZ", '45deg', { fromValue: '45deg'}], position: 0, duration: 0 },
            { id: "eid241", tween: [ "style", "${_pink2_mc}", "left", '7px', { fromValue: '7px'}], position: 0, duration: 0 },
            { id: "eid242", tween: [ "style", "${_pink2_mc}", "left", '401px', { fromValue: '7px'}], position: 1000, duration: 1000 },
            { id: "eid525", tween: [ "style", "${_green_mc}", "top", '156px', { fromValue: '156px'}], position: 0, duration: 0 },
            { id: "eid307", tween: [ "style", "${_green_mc}", "top", '10px', { fromValue: '156px'}], position: 1000, duration: 1000 },
            { id: "eid300", tween: [ "style", "${_purple_mc}", "left", '459px', { fromValue: '55px'}], position: 1000, duration: 1000 },
            { id: "eid509", tween: [ "style", "${_EllipseCopy3}", "top", '', { fromValue: '0'}], position: 2000, duration: 0 },
            { id: "eid212", tween: [ "style", "${_RectangleCopy6}", "opacity", '0', { fromValue: '1'}], position: 1000, duration: 250 },
            { id: "eid185", tween: [ "transform", "${_blue_mc}", "scaleX", '0.6', { fromValue: '1'}], position: 1000, duration: 1000 },
            { id: "eid395", tween: [ "transform", "${_green2_mc}", "scaleY", '0.6', { fromValue: '0.6'}], position: 2000, duration: 0 },
            { id: "eid394", tween: [ "transform", "${_green2_mc}", "scaleX", '0.6', { fromValue: '0.6'}], position: 2000, duration: 0 },
            { id: "eid369", tween: [ "style", "${_dgreenText_mc}", "left", '430px', { fromValue: '430px'}], position: 0, duration: 0 },
            { id: "eid186", tween: [ "transform", "${_blue_mc}", "scaleY", '0.6', { fromValue: '1'}], position: 1000, duration: 1000 },
            { id: "eid335", tween: [ "style", "${_RectangleCopy5}", "top", '156px', { fromValue: '156px'}], position: 0, duration: 0 },
            { id: "eid392", tween: [ "transform", "${_orange2_mc}", "scaleX", '0.6', { fromValue: '0.7'}], position: 0, duration: 0 },
            { id: "eid501", tween: [ "transform", "${_red2_mc}", "scaleY", '0.6', { fromValue: '0.6'}], position: 2000, duration: 0 },
            { id: "eid232", tween: [ "style", "${_blue2_mc}", "left", '216px', { fromValue: '216px'}], position: 0, duration: 0 },
            { id: "eid233", tween: [ "style", "${_blue2_mc}", "left", '517px', { fromValue: '216px'}], position: 1000, duration: 1000 },
            { id: "eid61", tween: [ "style", "${_redText_mc}", "left", '430px', { fromValue: '430px'}], position: 0, duration: 0 },
            { id: "eid191", tween: [ "transform", "${_green_mc}", "scaleX", '0.6', { fromValue: '1'}], position: 1000, duration: 1000 },
            { id: "eid435", tween: [ "style", "${_yellowText_mc}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid522", tween: [ "style", "${_yellowText_mc}", "display", 'none', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid59", tween: [ "style", "${_pinkText_mc}", "left", '430px', { fromValue: '430px'}], position: 0, duration: 0 },
            { id: "eid57", tween: [ "style", "${_purpleText_mc}", "top", '40px', { fromValue: '40px'}], position: 0, duration: 0 },
            { id: "eid54", tween: [ "style", "${_tealText_mc}", "left", '430px', { fromValue: '430px'}], position: 0, duration: 0 },
            { id: "eid235", tween: [ "style", "${_purple2_mc}", "left", '79px', { fromValue: '79px'}], position: 0, duration: 0 },
            { id: "eid236", tween: [ "style", "${_purple2_mc}", "left", '459px', { fromValue: '79px'}], position: 1000, duration: 1000 },
            { id: "eid342", tween: [ "style", "${_RectangleCopy2}", "left", '280px', { fromValue: '280px'}], position: 0, duration: 0 },
            { id: "eid216", tween: [ "transform", "${_yellow_mc}", "scaleY", '1', { fromValue: '1'}], position: 1000, duration: 0 },
            { id: "eid244", tween: [ "style", "${_green2_mc}", "left", '274px', { fromValue: '274px'}], position: 0, duration: 0 },
            { id: "eid245", tween: [ "style", "${_green2_mc}", "left", '226px', { fromValue: '274px'}], position: 1000, duration: 1000 },
            { id: "eid240", tween: [ "style", "${_pink2_mc}", "top", '10px', { fromValue: '183px'}], position: 1000, duration: 1000 },
            { id: "eid340", tween: [ "style", "${_Rectangle}", "top", '233px', { fromValue: '233px'}], position: 0, duration: 0 },
            { id: "eid439", tween: [ "style", "${_yellow_mc}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid437", tween: [ "style", "${_yellow_mc}", "display", 'none', { fromValue: 'block'}], position: 1000, duration: 0 },
            { id: "eid238", tween: [ "style", "${_teal2_mc}", "left", '296px', { fromValue: '296px'}], position: 0, duration: 0 },
            { id: "eid239", tween: [ "style", "${_teal2_mc}", "left", '343px', { fromValue: '296px'}], position: 1000, duration: 1000 },
            { id: "eid207", tween: [ "style", "${_RectangleCopy2}", "opacity", '0', { fromValue: '1'}], position: 1000, duration: 250 },
            { id: "eid253", tween: [ "style", "${_orange_mc}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid252", tween: [ "style", "${_orange_mc}", "display", 'none', { fromValue: 'block'}], position: 2000, duration: 0 },
            { id: "eid63", tween: [ "style", "${_orangeText_mc}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid502", tween: [ "style", "${_home_icon-01}", "top", '96px', { fromValue: '96px'}], position: 2000, duration: 0 },
            { id: "eid58", tween: [ "style", "${_purpleText_mc}", "left", '430px', { fromValue: '430px'}], position: 0, duration: 0 },
            { id: "eid512", tween: [ "style", "${_Text3}", "top", '', { fromValue: '0'}], position: 0, duration: 0 },
            { id: "eid508", tween: [ "style", "${_Text4}", "top", '', { fromValue: '0'}], position: 2000, duration: 0 },
            { id: "eid510", tween: [ "style", "${_Text}", "top", '', { fromValue: '0'}], position: 0, duration: 0 },
            { id: "eid211", tween: [ "style", "${_Rectangle}", "opacity", '0', { fromValue: '1'}], position: 1000, duration: 250 },
            { id: "eid304", tween: [ "style", "${_teal_mc}", "left", '343px', { fromValue: '264px'}], position: 1000, duration: 1000 },
            { id: "eid333", tween: [ "transform", "${_RectangleCopy5}", "rotateZ", '90deg', { fromValue: '90deg'}], position: 0, duration: 0 },
            { id: "eid329", tween: [ "transform", "${_RectangleCopy}", "scaleY", '0.74488', { fromValue: '0.74488'}], position: 0, duration: 0 },
            { id: "eid374", tween: [ "style", "${_dgreenText_mc}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid190", tween: [ "transform", "${_teal_mc}", "scaleY", '0.6', { fromValue: '1'}], position: 1000, duration: 1000 },
            { id: "eid248", tween: [ "style", "${_yellow2_mc}", "top", '10px', { fromValue: '155px'}], position: 1000, duration: 1000 },
            { id: "eid188", tween: [ "transform", "${_orange_mc}", "scaleY", '0.6', { fromValue: '1'}], position: 1000, duration: 1000 },
            { id: "eid56", tween: [ "style", "${_blueText_mc}", "top", '40px', { fromValue: '40px'}], position: 0, duration: 0 },
            { id: "eid412", tween: [ "style", "${_dGreen_mc}", "top", '10px', { fromValue: '52px'}], position: 1000, duration: 1000 },
            { id: "eid402", tween: [ "transform", "${_blue2_mc}", "scaleX", '0.6', { fromValue: '0.6'}], position: 2000, duration: 0 },
            { id: "eid67", tween: [ "style", "${_purpleText_mc}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid263", tween: [ "style", "${_green2_mc}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid260", tween: [ "style", "${_green2_mc}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid396", tween: [ "transform", "${_pink2_mc}", "scaleX", '0.6', { fromValue: '0.6'}], position: 2000, duration: 0 },
            { id: "eid249", tween: [ "style", "${_orange2_mc}", "top", '10px', { fromValue: '3px'}], position: 1000, duration: 1000 },
            { id: "eid405", tween: [ "transform", "${_red2_mc}", "scaleX", '0.6', { fromValue: '0.6'}], position: 2000, duration: 0 },
            { id: "eid520", tween: [ "style", "${_Text7}", "top", '', { fromValue: '0'}], position: 0, duration: 0 },
            { id: "eid393", tween: [ "transform", "${_orange2_mc}", "scaleY", '0.6', { fromValue: '0.7'}], position: 0, duration: 0 },
            { id: "eid352", tween: [ "transform", "${_RectangleCopy4}", "rotateZ", '-45deg', { fromValue: '-45deg'}], position: 0, duration: 0 },
            { id: "eid297", tween: [ "style", "${_red_mc}", "top", '10px', { fromValue: '52px'}], position: 1000, duration: 1000 },
            { id: "eid52", tween: [ "style", "${_greenText_mc}", "left", '430px', { fromValue: '430px'}], position: 0, duration: 0 },
            { id: "eid66", tween: [ "style", "${_blueText_mc}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid160", tween: [ "style", "${_yellow_mc}", "top", '155px', { fromValue: '155px'}], position: 1000, duration: 0 },
            { id: "eid445", tween: [ "style", "${_yellowText_mc}", "clip", [25.60003662109375,342.599853515625,269,-196.79998779296875], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [25.60003662109375,342.599853515625,269,-196.79998779296875]}], position: 2000, duration: 0 },
            { id: "eid180", tween: [ "transform", "${_purple_mc}", "scaleY", '0.6', { fromValue: '1'}], position: 1000, duration: 1000 },
            { id: "eid187", tween: [ "transform", "${_orange_mc}", "scaleX", '0.6', { fromValue: '1'}], position: 1000, duration: 1000 },
            { id: "eid269", tween: [ "style", "${_pink2_mc}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid266", tween: [ "style", "${_pink2_mc}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid234", tween: [ "style", "${_purple2_mc}", "top", '10px', { fromValue: '282px'}], position: 1000, duration: 1000 },
            { id: "eid343", tween: [ "style", "${_RectangleCopy}", "top", '101px', { fromValue: '101px'}], position: 0, duration: 0 },
            { id: "eid302", tween: [ "style", "${_blue_mc}", "left", '517px', { fromValue: '156px'}], position: 1000, duration: 1000 },
            { id: "eid177", tween: [ "transform", "${_red_mc}", "scaleX", '0.6', { fromValue: '1'}], position: 1000, duration: 1000 },
            { id: "eid265", tween: [ "style", "${_pink_mc}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid264", tween: [ "style", "${_pink_mc}", "display", 'none', { fromValue: 'block'}], position: 2000, duration: 0 },
            { id: "eid518", tween: [ "style", "${_EllipseCopy5}", "top", '', { fromValue: '0'}], position: 0, duration: 0 },
            { id: "eid519", tween: [ "style", "${_EllipseCopy5}", "top", '', { fromValue: '0'}], position: 2000, duration: 0 }         ]
      }
   }
},
"orange_mc": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['0px','0px','95px','95px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      id: 'Ellipse',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'ellipse',
      fill: ['rgba(242,123,34,1.00)']
   },
   {
      font: ['Arial, Helvetica, sans-serif',15,'rgba(255,255,255,1.00)','normal','none',''],
      type: 'text',
      id: 'Text',
      text: 'Planning and preparing',
      align: 'center',
      rect: ['0px','31px','95px','auto','auto','auto']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Text}": [
            ["style", "top", '31px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-size", '15px'],
            ["style", "left", '0px'],
            ["style", "width", '95px']
         ],
         "${_Ellipse}": [
            ["style", "top", '0px'],
            ["style", "height", '95px'],
            ["color", "background-color", 'rgba(242,123,34,1.00)'],
            ["style", "left", '0px'],
            ["style", "width", '95px']
         ],
         "${symbolSelector}": [
            ["style", "height", '95px'],
            ["style", "width", '95px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"green_mc": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['0px','0px','95px','95px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      id: 'EllipseCopy2',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'ellipse',
      fill: ['rgba(94,171,45,1.00)']
   },
   {
      font: ['Arial, Helvetica, sans-serif',15,'rgba(255,255,255,1)','normal','none','normal'],
      type: 'text',
      id: 'Text2',
      text: 'Developing<br>resources',
      align: 'center',
      rect: ['0px','29px','95px','38px','auto','auto']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Text2}": [
            ["style", "top", '29px'],
            ["style", "height", '38px'],
            ["style", "width", '95px'],
            ["style", "left", '0px'],
            ["style", "font-size", '15px']
         ],
         "${_EllipseCopy2}": [
            ["style", "top", '0px'],
            ["style", "height", '95px'],
            ["color", "background-color", 'rgba(94,171,45,1.00)'],
            ["style", "left", '0px'],
            ["style", "width", '95px']
         ],
         "${symbolSelector}": [
            ["style", "height", '95px'],
            ["style", "width", '95px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"teal_mc": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['0px','0px','95px','95px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      id: 'EllipseCopy4',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'ellipse',
      fill: ['rgba(44,141,124,1.00)']
   },
   {
      font: ['Arial, Helvetica, sans-serif',15,'rgba(255,255,255,1)','normal','none','normal'],
      type: 'text',
      id: 'Text3',
      text: 'Your online<br>course',
      align: 'center',
      rect: ['0px','31px','95px','auto','auto','auto']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Text3}": [
            ["style", "top", '31px'],
            ["style", "font-size", '15px'],
            ["style", "left", '0px'],
            ["style", "width", '95px']
         ],
         "${_EllipseCopy4}": [
            ["style", "top", '0px'],
            ["style", "height", '95px'],
            ["color", "background-color", 'rgba(44,141,124,1.00)'],
            ["style", "left", '0px'],
            ["style", "width", '95px']
         ],
         "${symbolSelector}": [
            ["style", "height", '95px'],
            ["style", "width", '95px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"blue_mc": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['0px','0px','95px','95px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      id: 'EllipseCopy3',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'ellipse',
      fill: ['rgba(60,164,229,1.00)']
   },
   {
      font: ['Arial, Helvetica, sans-serif',15,'rgba(255,255,255,1)','normal','none','normal'],
      type: 'text',
      id: 'Text4',
      text: 'Managing<br>large<br>classes',
      align: 'center',
      rect: ['0px','22px','95px','auto','auto','auto']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_EllipseCopy3}": [
            ["style", "top", '0px'],
            ["style", "height", '95px'],
            ["color", "background-color", 'rgba(60,164,229,1.00)'],
            ["style", "left", '0px'],
            ["style", "width", '95px']
         ],
         "${symbolSelector}": [
            ["style", "height", '95px'],
            ["style", "width", '95px']
         ],
         "${_Text4}": [
            ["style", "top", '22px'],
            ["style", "font-size", '15px'],
            ["style", "left", '0px'],
            ["style", "width", '95px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"purple_mc": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['0px','0px','95px','95px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      id: 'EllipseCopy5',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'ellipse',
      fill: ['rgba(193,87,196,1.00)']
   },
   {
      font: ['Arial, Helvetica, sans-serif',15,'rgba(255,255,255,1)','normal','none','normal'],
      type: 'text',
      id: 'Text5',
      text: 'Supporting<br>students',
      align: 'center',
      rect: ['0px','31px','95px','auto','auto','auto']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_EllipseCopy5}": [
            ["style", "top", '0px'],
            ["style", "height", '95px'],
            ["color", "background-color", 'rgba(193,87,196,1.00)'],
            ["style", "left", '0px'],
            ["style", "width", '95px']
         ],
         "${_Text5}": [
            ["style", "top", '31px'],
            ["style", "font-size", '15px'],
            ["style", "left", '0px'],
            ["style", "width", '95px']
         ],
         "${symbolSelector}": [
            ["style", "height", '95px'],
            ["style", "width", '95px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"pink_mc": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['0px','0px','95px','95px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      id: 'EllipseCopy6',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'ellipse',
      fill: ['rgba(234,38,160,1.00)']
   },
   {
      rect: ['0px','31px','95px','auto','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',15,'rgba(255,255,255,1)','normal','none','normal'],
      id: 'Text6',
      text: 'Assessment<br>at USQ',
      align: 'center',
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Text6}": [
            ["style", "top", '31px'],
            ["style", "width", '95px'],
            ["style", "left", '0px'],
            ["style", "font-size", '15px']
         ],
         "${_Text9}": [
            ["style", "text-align", '']
         ],
         "${_EllipseCopy6}": [
            ["style", "top", '0px'],
            ["style", "height", '95px'],
            ["color", "background-color", 'rgba(234,38,160,1.00)'],
            ["style", "left", '0px'],
            ["style", "width", '95px']
         ],
         "${symbolSelector}": [
            ["style", "height", '95px'],
            ["style", "width", '95px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"red_mc": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['0px','-5px','95px','95px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      id: 'EllipseCopy7',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'ellipse',
      fill: ['rgba(181,21,67,1.00)']
   },
   {
      rect: ['6px','26px','84px','33px','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',15,'rgba(255,255,255,1)','normal','none','normal'],
      id: 'Text7',
      text: 'Course<br>evaluation',
      align: 'center',
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Text7}": [
            ["style", "top", '26px'],
            ["style", "height", '33px'],
            ["style", "font-size", '15px'],
            ["style", "left", '6px'],
            ["style", "width", '84px']
         ],
         "${_EllipseCopy7}": [
            ["style", "top", '-5px'],
            ["style", "height", '95px'],
            ["color", "background-color", 'rgba(181,21,67,1.00)'],
            ["style", "left", '0px'],
            ["style", "width", '95px']
         ],
         "${symbolSelector}": [
            ["style", "height", '95px'],
            ["style", "width", '95px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"yellow_mc": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['1px','1px','95px','95px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      id: 'EllipseCopy',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'ellipse',
      fill: ['rgba(255,204,0,1.00)']
   },
   {
      font: ['Arial, Helvetica, sans-serif',18,'rgba(255,255,255,1)','700','none','normal'],
      type: 'text',
      id: 'Text8',
      text: 'Teaching <br>at USQ',
      align: 'center',
      rect: ['8px','27px','auto','auto','auto','auto']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_EllipseCopy}": [
            ["style", "top", '1px'],
            ["style", "height", '95px'],
            ["color", "background-color", 'rgba(255,204,0,1.00)'],
            ["style", "left", '1px'],
            ["style", "width", '95px']
         ],
         "${_Text8}": [
            ["style", "top", '27px'],
            ["style", "font-weight", '700'],
            ["style", "left", '8px'],
            ["style", "font-size", '18px']
         ],
         "${symbolSelector}": [
            ["style", "height", '95px'],
            ["style", "width", '95px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"orangeText_mc": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['0px','273px','145px','44px','auto','auto'],
      borderRadius: ['0px 0px','0px 0px','0px 0px','0px 0px'],
      opacity: 1,
      id: 'Rectangle3Copy',
      stroke: [3,'rgb(242, 123, 34)','none'],
      type: 'rect',
      fill: ['rgba(242,123,34,1.00)']
   },
   {
      transform: [[0,0],['-90'],[],['1.828','49']],
      rect: ['0px','140px','145px','3px','auto','auto'],
      borderRadius: ['0px 0px','0px 0px','0px 0px','0px 0px'],
      type: 'rect',
      id: 'Rectangle3Copy3',
      stroke: [3,'rgb(242, 123, 34)','none'],
      opacity: 0.25,
      fill: ['rgba(188,188,188,1.00)']
   },
   {
      transform: [[0,0],[],[],['1','5.267']],
      borderRadius: ['0px 0px','0px 0px','0px 0px','0px 0px'],
      rect: ['0px','0px','145px','3px','auto','auto'],
      id: 'Rectangle3',
      stroke: [3,'rgb(242, 123, 34)','none'],
      type: 'rect',
      fill: ['rgba(242,123,34,1.00)']
   },
   {
      id: 'proceed_btn',
      type: 'rect',
      cursor: ['pointer'],
      rect: ['24','263','auto','auto','auto','auto']
   },
   {
      font: ['Arial, Helvetica, sans-serif',16,'rgba(49,49,49,1.00)','400','none','normal'],
      type: 'text',
      id: 'Text9',
      text: 'Learn about the processes involved in getting your course organised, and how you might plan and prepare for your F2F and online \'classes\'.',
      align: 'center',
      rect: ['7px','21px','130px','274px','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'proceed_btn',
      symbolName: 'proceed_btn'
   }   ]
   },
   states: {
      "Base State": {
         "${_Rectangle3Copy}": [
            ["color", "background-color", 'rgba(242,123,34,1.00)'],
            ["style", "border-top-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-style", 'none'],
            ["style", "left", '0px'],
            ["style", "width", '145px'],
            ["style", "top", '273px'],
            ["style", "border-bottom-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '44px'],
            ["style", "opacity", '1'],
            ["style", "border-top-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${_Text}": [
            ["style", "left", ''],
            ["style", "top", '']
         ],
         "${symbolSelector}": [
            ["style", "height", '317px'],
            ["style", "width", '145px']
         ],
         "${_Rectangle3Copy3}": [
            ["color", "background-color", 'rgba(188,188,188,1.00)'],
            ["style", "border-top-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["transform", "scaleX", '1.82759'],
            ["style", "border-style", 'none'],
            ["style", "left", '0px'],
            ["style", "width", '145px'],
            ["style", "top", '140px'],
            ["style", "border-bottom-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["transform", "scaleY", '49.00003'],
            ["style", "height", '3px'],
            ["style", "opacity", '0.25'],
            ["style", "border-top-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["transform", "rotateZ", '-90deg']
         ],
         "${_Text9}": [
            ["style", "top", '21px'],
            ["color", "color", 'rgba(49,49,49,1.00)'],
            ["style", "height", '274px'],
            ["style", "font-weight", '400'],
            ["style", "left", '7px'],
            ["style", "width", '130px']
         ],
         "${_Rectangle3}": [
            ["color", "background-color", 'rgba(242,123,34,1.00)'],
            ["style", "border-top-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-style", 'none'],
            ["style", "left", '0px'],
            ["style", "width", '145px'],
            ["style", "top", '0px'],
            ["style", "border-bottom-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["transform", "scaleY", '5.26666'],
            ["style", "height", '3px'],
            ["style", "border-top-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${_proceed_btn}": [
            ["style", "top", '278px'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '27px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
            { id: "eid376", tween: [ "style", "${_proceed_btn}", "left", '27px', { fromValue: '27px'}], position: 0, duration: 0 },
            { id: "eid377", tween: [ "style", "${_proceed_btn}", "top", '278px', { fromValue: '278px'}], position: 0, duration: 0 },
            { id: "eid380", tween: [ "style", "${_Text}", "left", '', { fromValue: '0'}], position: 0, duration: 0 },
            { id: "eid381", tween: [ "style", "${_Text}", "top", '', { fromValue: '0'}], position: 0, duration: 0 }         ]
      }
   }
},
"greenText_mc": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['0px','273px','145px','44px','auto','auto'],
      borderRadius: ['0px 0px','0px 0px','0px 0px','0px 0px'],
      opacity: 1,
      id: 'Rectangle3Copy6',
      stroke: [3,'rgb(242, 123, 34)','none'],
      type: 'rect',
      fill: ['rgba(94,171,45,1.00)']
   },
   {
      transform: [[0,0],['-90'],[],['1.828','49']],
      rect: ['0px','140px','145px','3px','auto','auto'],
      borderRadius: ['0px 0px','0px 0px','0px 0px','0px 0px'],
      type: 'rect',
      id: 'Rectangle3Copy5',
      stroke: [3,'rgb(242, 123, 34)','none'],
      opacity: 0.25,
      fill: ['rgba(188,188,188,1.00)']
   },
   {
      transform: [[0,0],[],[],['1','5.267']],
      borderRadius: ['0px 0px','0px 0px','0px 0px','0px 0px'],
      rect: ['0px','0px','145px','3px','auto','auto'],
      id: 'Rectangle3Copy4',
      stroke: [3,'rgb(242, 123, 34)','none'],
      type: 'rect',
      fill: ['rgba(94,171,45,1.00)']
   },
   {
      id: 'proceed_btn',
      type: 'rect',
      cursor: ['pointer'],
      rect: ['24','263','auto','auto','auto','auto']
   },
   {
      font: ['Arial, Helvetica, sans-serif',16,'rgba(49,49,49,1.00)','400','none','normal'],
      type: 'text',
      id: 'Text9',
      text: 'Consider ways of developing and sourcing learning resources in a range of formats to enhance your student\'s online learning experience.',
      align: 'center',
      rect: ['7px','21px','130px','274px','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'proceed_btn',
      symbolName: 'proceed_btn'
   }   ]
   },
   states: {
      "Base State": {
         "${_Rectangle3Copy4}": [
            ["color", "background-color", 'rgba(94,171,45,1.00)'],
            ["style", "border-top-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-style", 'none'],
            ["style", "left", '0px'],
            ["style", "width", '145px'],
            ["style", "top", '0px'],
            ["style", "border-bottom-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["transform", "scaleY", '5.26666'],
            ["style", "height", '3px'],
            ["style", "border-top-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${_proceed_btn}": [
            ["style", "top", '278px'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '27px']
         ],
         "${symbolSelector}": [
            ["style", "height", '317px'],
            ["style", "width", '145px']
         ],
         "${_Rectangle3Copy5}": [
            ["color", "background-color", 'rgba(188,188,188,1.00)'],
            ["style", "border-top-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["transform", "scaleX", '1.82759'],
            ["style", "border-style", 'none'],
            ["style", "left", '0px'],
            ["style", "width", '145px'],
            ["style", "top", '140px'],
            ["style", "border-bottom-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["transform", "scaleY", '49.00003'],
            ["style", "height", '3px'],
            ["transform", "rotateZ", '-90deg'],
            ["style", "border-top-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "opacity", '0.25']
         ],
         "${_Text9}": [
            ["style", "top", '21px'],
            ["color", "color", 'rgba(49,49,49,1.00)'],
            ["style", "height", '274px'],
            ["style", "font-weight", '400'],
            ["style", "left", '7px'],
            ["style", "width", '130px']
         ],
         "${_Rectangle3Copy6}": [
            ["color", "background-color", 'rgba(94,171,45,1.00)'],
            ["style", "border-top-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-style", 'none'],
            ["style", "left", '0px'],
            ["style", "width", '145px'],
            ["style", "top", '273px'],
            ["style", "border-bottom-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '44px'],
            ["style", "border-top-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "opacity", '1']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"tealText_mc": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['0px','273px','145px','44px','auto','auto'],
      borderRadius: ['0px 0px','0px 0px','0px 0px','0px 0px'],
      opacity: 1,
      id: 'Rectangle3Copy6',
      stroke: [3,'rgb(242, 123, 34)','none'],
      type: 'rect',
      fill: ['rgba(44,141,124,1.00)']
   },
   {
      transform: [[0,0],['-90'],[],['1.828','49']],
      rect: ['0px','140px','145px','3px','auto','auto'],
      borderRadius: ['0px 0px','0px 0px','0px 0px','0px 0px'],
      type: 'rect',
      id: 'Rectangle3Copy5',
      stroke: [3,'rgb(242, 123, 34)','none'],
      opacity: 0.25,
      fill: ['rgba(188,188,188,1.00)']
   },
   {
      transform: [[0,0],[],[],['1','5.267']],
      borderRadius: ['0px 0px','0px 0px','0px 0px','0px 0px'],
      rect: ['0px','0px','145px','3px','auto','auto'],
      id: 'Rectangle3Copy4',
      stroke: [3,'rgb(242, 123, 34)','none'],
      type: 'rect',
      fill: ['rgba(44,141,124,1.00)']
   },
   {
      font: ['Arial, Helvetica, sans-serif',16,'rgba(49,49,49,1.00)','400','none','normal'],
      type: 'text',
      id: 'Text9',
      text: 'Explore processes for the implementation of your online course and how you can engage and support learners to achieve their goals.',
      align: 'center',
      rect: ['7px','21px','130px','274px','auto','auto']
   },
   {
      id: 'proceed_btnCopy',
      type: 'rect',
      cursor: ['pointer'],
      rect: ['24','263','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'proceed_btnCopy',
      symbolName: 'proceed_btn'
   }   ]
   },
   states: {
      "Base State": {
         "${_Rectangle3Copy4}": [
            ["color", "background-color", 'rgba(44,141,124,1.00)'],
            ["style", "border-top-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-style", 'none'],
            ["style", "left", '0px'],
            ["style", "width", '145px'],
            ["style", "top", '0px'],
            ["style", "border-bottom-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["transform", "scaleY", '5.26666'],
            ["style", "height", '3px'],
            ["style", "border-top-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${symbolSelector}": [
            ["style", "height", '317px'],
            ["style", "width", '145px']
         ],
         "${_Rectangle3Copy5}": [
            ["color", "background-color", 'rgba(188,188,188,1.00)'],
            ["style", "border-top-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["transform", "scaleX", '1.82759'],
            ["style", "border-style", 'none'],
            ["style", "left", '0px'],
            ["style", "width", '145px'],
            ["style", "top", '140px'],
            ["style", "border-bottom-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["transform", "scaleY", '49.00003'],
            ["style", "height", '3px'],
            ["style", "opacity", '0.25'],
            ["style", "border-top-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["transform", "rotateZ", '-90deg']
         ],
         "${_Text9}": [
            ["style", "top", '21px'],
            ["color", "color", 'rgba(49,49,49,1.00)'],
            ["style", "height", '274px'],
            ["style", "font-weight", '400'],
            ["style", "left", '7px'],
            ["style", "width", '130px']
         ],
         "${_proceed_btnCopy}": [
            ["style", "top", '278px'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '27px']
         ],
         "${_Rectangle3Copy6}": [
            ["color", "background-color", 'rgba(44,141,124,1.00)'],
            ["style", "border-top-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-style", 'none'],
            ["style", "left", '0px'],
            ["style", "width", '145px'],
            ["style", "top", '273px'],
            ["style", "border-bottom-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '44px'],
            ["style", "opacity", '1'],
            ["style", "border-top-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ]
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"blueText_mc": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['0px','273px','145px','44px','auto','auto'],
      borderRadius: ['0px 0px','0px 0px','0px 0px','0px 0px'],
      opacity: 1,
      id: 'Rectangle3Copy9',
      stroke: [3,'rgb(242, 123, 34)','none'],
      type: 'rect',
      fill: ['rgba(60,164,229,1.00)']
   },
   {
      transform: [[0,0],['-90'],[],['1.828','49']],
      rect: ['0px','140px','145px','3px','auto','auto'],
      borderRadius: ['0px 0px','0px 0px','0px 0px','0px 0px'],
      type: 'rect',
      id: 'Rectangle3Copy8',
      stroke: [3,'rgb(242, 123, 34)','none'],
      opacity: 0.25,
      fill: ['rgba(188,188,188,1.00)']
   },
   {
      transform: [[0,0],[],[],['1','5.267']],
      borderRadius: ['0px 0px','0px 0px','0px 0px','0px 0px'],
      rect: ['0px','0px','145px','3px','auto','auto'],
      id: 'Rectangle3Copy7',
      stroke: [3,'rgb(242, 123, 34)','none'],
      type: 'rect',
      fill: ['rgba(60,164,229,1.00)']
   },
   {
      font: ['Arial, Helvetica, sans-serif',16,'rgba(49,49,49,1.00)','400','none','normal'],
      type: 'text',
      id: 'Text9',
      text: 'Managing large classes comes with a range of challenges and opportunities. Get some insights into how to manage these and optimise opportunities.',
      align: 'center',
      rect: ['7px','21px','130px','274px','auto','auto']
   },
   {
      id: 'proceed_btnCopy2',
      type: 'rect',
      cursor: ['pointer'],
      rect: ['24','263','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'proceed_btnCopy2',
      symbolName: 'proceed_btn'
   }   ]
   },
   states: {
      "Base State": {
         "${_Rectangle3Copy8}": [
            ["color", "background-color", 'rgba(188,188,188,1.00)'],
            ["style", "border-top-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["transform", "scaleX", '1.82759'],
            ["style", "border-style", 'none'],
            ["style", "left", '0px'],
            ["style", "width", '145px'],
            ["style", "top", '140px'],
            ["style", "border-bottom-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["transform", "scaleY", '49.00003'],
            ["style", "height", '3px'],
            ["style", "opacity", '0.25'],
            ["style", "border-top-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["transform", "rotateZ", '-90deg']
         ],
         "${_proceed_btnCopy2}": [
            ["style", "top", '278px'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '27px']
         ],
         "${symbolSelector}": [
            ["style", "height", '317px'],
            ["style", "width", '145px']
         ],
         "${_Text9}": [
            ["style", "top", '21px'],
            ["color", "color", 'rgba(49,49,49,1.00)'],
            ["style", "height", '274px'],
            ["style", "font-weight", '400'],
            ["style", "left", '7px'],
            ["style", "width", '130px']
         ],
         "${_Rectangle3Copy7}": [
            ["color", "background-color", 'rgba(60,164,229,1.00)'],
            ["style", "border-top-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-style", 'none'],
            ["style", "left", '0px'],
            ["style", "width", '145px'],
            ["style", "top", '0px'],
            ["style", "border-bottom-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["transform", "scaleY", '5.26666'],
            ["style", "height", '3px'],
            ["style", "border-top-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${_Rectangle3Copy9}": [
            ["color", "background-color", 'rgba(60,164,229,1.00)'],
            ["style", "border-top-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-style", 'none'],
            ["style", "left", '0px'],
            ["style", "width", '145px'],
            ["style", "top", '273px'],
            ["style", "border-bottom-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '44px'],
            ["style", "opacity", '1'],
            ["style", "border-top-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ]
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"purpleText_mc": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['0px','273px','145px','44px','auto','auto'],
      borderRadius: ['0px 0px','0px 0px','0px 0px','0px 0px'],
      opacity: 1,
      id: 'Rectangle3Copy12',
      stroke: [3,'rgb(242, 123, 34)','none'],
      type: 'rect',
      fill: ['rgba(193,87,196,1.00)']
   },
   {
      transform: [[0,0],['-90'],[],['1.828','49']],
      rect: ['0px','140px','145px','3px','auto','auto'],
      borderRadius: ['0px 0px','0px 0px','0px 0px','0px 0px'],
      type: 'rect',
      id: 'Rectangle3Copy11',
      stroke: [3,'rgb(242, 123, 34)','none'],
      opacity: 0.25,
      fill: ['rgba(188,188,188,1.00)']
   },
   {
      transform: [[0,0],[],[],['1','5.267']],
      borderRadius: ['0px 0px','0px 0px','0px 0px','0px 0px'],
      rect: ['0px','0px','145px','3px','auto','auto'],
      id: 'Rectangle3Copy10',
      stroke: [3,'rgb(242, 123, 34)','none'],
      type: 'rect',
      fill: ['rgba(193,87,196,1.00)']
   },
   {
      font: ['Arial, Helvetica, sans-serif',16,'rgba(49,49,49,1.00)','400','none','normal'],
      type: 'text',
      id: 'Text9',
      text: 'Offering support mechanisms and activities for students in your course that scaffold their learning and assist in the development of their academic skills is something you need to explore.',
      align: 'center',
      rect: ['7px','21px','130px','274px','auto','auto']
   },
   {
      id: 'proceed_btnCopy3',
      type: 'rect',
      cursor: ['pointer'],
      rect: ['24','263','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'proceed_btnCopy3',
      symbolName: 'proceed_btn'
   }   ]
   },
   states: {
      "Base State": {
         "${_Rectangle3Copy12}": [
            ["color", "background-color", 'rgba(193,87,196,1.00)'],
            ["style", "border-top-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-style", 'none'],
            ["style", "left", '0px'],
            ["style", "width", '145px'],
            ["style", "top", '273px'],
            ["style", "border-bottom-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '44px'],
            ["style", "opacity", '1'],
            ["style", "border-top-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${_Rectangle3Copy10}": [
            ["color", "background-color", 'rgba(193,87,196,1.00)'],
            ["style", "border-top-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-style", 'none'],
            ["style", "left", '0px'],
            ["style", "width", '145px'],
            ["style", "top", '0px'],
            ["style", "border-bottom-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["transform", "scaleY", '5.26666'],
            ["style", "height", '3px'],
            ["style", "border-top-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${symbolSelector}": [
            ["style", "height", '317px'],
            ["style", "width", '145px']
         ],
         "${_proceed_btnCopy3}": [
            ["style", "top", '278px'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '27px']
         ],
         "${_Rectangle3Copy11}": [
            ["color", "background-color", 'rgba(188,188,188,1.00)'],
            ["style", "border-top-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["transform", "scaleX", '1.82759'],
            ["style", "border-style", 'none'],
            ["style", "left", '0px'],
            ["style", "width", '145px'],
            ["style", "top", '140px'],
            ["style", "border-bottom-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["transform", "scaleY", '49.00003'],
            ["style", "height", '3px'],
            ["style", "opacity", '0.25'],
            ["style", "border-top-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["transform", "rotateZ", '-90deg']
         ],
         "${_Text9}": [
            ["style", "top", '21px'],
            ["color", "color", 'rgba(49,49,49,1.00)'],
            ["style", "height", '274px'],
            ["style", "font-weight", '400'],
            ["style", "left", '7px'],
            ["style", "width", '130px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"pinkText_mc": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['0px','273px','145px','44px','auto','auto'],
      borderRadius: ['0px 0px','0px 0px','0px 0px','0px 0px'],
      opacity: 1,
      id: 'Rectangle3Copy15',
      stroke: [3,'rgb(242, 123, 34)','none'],
      type: 'rect',
      fill: ['rgba(234,38,160,1.00)']
   },
   {
      transform: [[0,0],['-90'],[],['1.828','49']],
      rect: ['0px','140px','145px','3px','auto','auto'],
      borderRadius: ['0px 0px','0px 0px','0px 0px','0px 0px'],
      type: 'rect',
      id: 'Rectangle3Copy14',
      stroke: [3,'rgb(242, 123, 34)','none'],
      opacity: 0.25,
      fill: ['rgba(188,188,188,1.00)']
   },
   {
      transform: [[0,0],[],[],['1','5.267']],
      borderRadius: ['0px 0px','0px 0px','0px 0px','0px 0px'],
      rect: ['0px','0px','145px','3px','auto','auto'],
      id: 'Rectangle3Copy13',
      stroke: [3,'rgb(242, 123, 34)','none'],
      type: 'rect',
      fill: ['rgba(234,38,160,1.00)']
   },
   {
      font: ['Arial, Helvetica, sans-serif',16,'rgba(49,49,49,1.00)','400','none','normal'],
      type: 'text',
      id: 'Text9',
      text: 'Learn about assessment and moderation roles, policies and procedures at USQ, and how to align the design and implementation of your assessment with good practice.',
      align: 'center',
      rect: ['7px','21px','130px','274px','auto','auto']
   },
   {
      id: 'proceed_btnCopy4',
      type: 'rect',
      cursor: ['pointer'],
      rect: ['24','263','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'proceed_btnCopy4',
      symbolName: 'proceed_btn'
   }   ]
   },
   states: {
      "Base State": {
         "${_Rectangle3Copy15}": [
            ["color", "background-color", 'rgba(234,38,160,1.00)'],
            ["style", "border-top-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-style", 'none'],
            ["style", "left", '0px'],
            ["style", "width", '145px'],
            ["style", "top", '273px'],
            ["style", "border-bottom-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '44px'],
            ["style", "opacity", '1'],
            ["style", "border-top-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${symbolSelector}": [
            ["style", "height", '317px'],
            ["style", "width", '145px']
         ],
         "${_Rectangle3Copy14}": [
            ["color", "background-color", 'rgba(188,188,188,1.00)'],
            ["style", "border-top-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["transform", "scaleX", '1.82759'],
            ["style", "border-style", 'none'],
            ["style", "left", '0px'],
            ["style", "width", '145px'],
            ["style", "top", '140px'],
            ["style", "border-bottom-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["transform", "scaleY", '49.00003'],
            ["style", "height", '3px'],
            ["style", "opacity", '0.25'],
            ["style", "border-top-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["transform", "rotateZ", '-90deg']
         ],
         "${_Text9}": [
            ["style", "top", '21px'],
            ["color", "color", 'rgba(49,49,49,1.00)'],
            ["style", "height", '274px'],
            ["style", "font-weight", '400'],
            ["style", "left", '7px'],
            ["style", "width", '130px']
         ],
         "${_proceed_btnCopy4}": [
            ["style", "top", '278px'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '27px']
         ],
         "${_Rectangle3Copy13}": [
            ["color", "background-color", 'rgba(234,38,160,1.00)'],
            ["style", "border-top-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-style", 'none'],
            ["style", "left", '0px'],
            ["style", "width", '145px'],
            ["style", "top", '0px'],
            ["style", "border-bottom-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["transform", "scaleY", '5.26666'],
            ["style", "height", '3px'],
            ["style", "border-top-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ]
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"redText_mc": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['0px','273px','145px','44px','auto','auto'],
      borderRadius: ['0px 0px','0px 0px','0px 0px','0px 0px'],
      opacity: 1,
      id: 'Rectangle3Copy18',
      stroke: [3,'rgb(242, 123, 34)','none'],
      type: 'rect',
      fill: ['rgba(181,21,67,1.00)']
   },
   {
      transform: [[0,0],['-90'],[],['1.828','49']],
      rect: ['0px','140px','145px','3px','auto','auto'],
      borderRadius: ['0px 0px','0px 0px','0px 0px','0px 0px'],
      type: 'rect',
      id: 'Rectangle3Copy17',
      stroke: [3,'rgb(242, 123, 34)','none'],
      opacity: 0.25,
      fill: ['rgba(188,188,188,1.00)']
   },
   {
      transform: [[0,0],[],[],['1','5.267']],
      borderRadius: ['0px 0px','0px 0px','0px 0px','0px 0px'],
      rect: ['0px','0px','145px','3px','auto','auto'],
      id: 'Rectangle3Copy16',
      stroke: [3,'rgb(242, 123, 34)','none'],
      type: 'rect',
      fill: ['rgba(181,21,67,1.00)']
   },
   {
      font: ['Arial, Helvetica, sans-serif',16,'rgba(49,49,49,1.00)','400','none','normal'],
      type: 'text',
      id: 'Text9',
      text: 'You need to know the power of hearing the student\'s voice in enhancing their learning and teaching experiences through data obtained in course evaluations.',
      align: 'center',
      rect: ['7px','21px','130px','274px','auto','auto']
   },
   {
      id: 'proceed_btnCopy5',
      type: 'rect',
      cursor: ['pointer'],
      rect: ['24','263','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'proceed_btnCopy5',
      symbolName: 'proceed_btn'
   }   ]
   },
   states: {
      "Base State": {
         "${_Rectangle3Copy17}": [
            ["color", "background-color", 'rgba(188,188,188,1.00)'],
            ["style", "border-top-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["transform", "scaleX", '1.82759'],
            ["style", "border-style", 'none'],
            ["style", "left", '0px'],
            ["style", "width", '145px'],
            ["style", "top", '140px'],
            ["style", "border-bottom-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["transform", "scaleY", '49.00003'],
            ["style", "height", '3px'],
            ["style", "opacity", '0.25'],
            ["style", "border-top-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["transform", "rotateZ", '-90deg']
         ],
         "${symbolSelector}": [
            ["style", "height", '317px'],
            ["style", "width", '145px']
         ],
         "${_Rectangle3Copy16}": [
            ["color", "background-color", 'rgba(181,21,67,1.00)'],
            ["style", "border-top-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-style", 'none'],
            ["style", "left", '0px'],
            ["style", "width", '145px'],
            ["style", "top", '0px'],
            ["style", "border-bottom-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["transform", "scaleY", '5.26666'],
            ["style", "height", '3px'],
            ["style", "border-top-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${_Rectangle3Copy18}": [
            ["color", "background-color", 'rgba(181,21,67,1.00)'],
            ["style", "border-top-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-style", 'none'],
            ["style", "left", '0px'],
            ["style", "width", '145px'],
            ["style", "top", '273px'],
            ["style", "border-bottom-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '44px'],
            ["style", "opacity", '1'],
            ["style", "border-top-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${_proceed_btnCopy5}": [
            ["style", "top", '278px'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '27px']
         ],
         "${_Text9}": [
            ["style", "top", '21px'],
            ["color", "color", 'rgba(49,49,49,1.00)'],
            ["style", "height", '274px'],
            ["style", "font-weight", '400'],
            ["style", "left", '7px'],
            ["style", "width", '130px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"arrow_mc": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      transform: [[0,0],['-137'],[],['1','0.823']],
      rect: ['43px','-20px','9px','52px','auto','auto'],
      id: 'Rectangle7',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,204,0,1.00)']
   },
   {
      transform: [[0,0],['-47'],[],['3.01','0.914']],
      rect: ['39px','-8px','9px','52px','auto','auto'],
      id: 'Rectangle7Copy2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,204,0,1.00)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Rectangle7}": [
            ["color", "background-color", 'rgba(255,204,0,1.00)'],
            ["transform", "scaleY", '0.823'],
            ["transform", "rotateZ", '-137deg'],
            ["style", "top", '-20px'],
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '43px'],
            ["style", "width", '9px']
         ],
         "${_Rectangle7Copy2}": [
            ["style", "top", '-10px'],
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '0.91378'],
            ["transform", "rotateZ", '-47deg'],
            ["transform", "scaleX", '3.01009'],
            ["color", "background-color", 'rgba(255,204,0,1.00)'],
            ["style", "left", '39px'],
            ["style", "width", '9px']
         ],
         "${symbolSelector}": [
            ["style", "height", '67px'],
            ["style", "width", '53px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2000,
         autoPlay: true,
         timeline: [
            { id: "eid220", tween: [ "style", "${_Rectangle7Copy2}", "top", '-10px', { fromValue: '-10px'}], position: 2000, duration: 0 }         ]
      }
   }
},
"dGreen_mc": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['0px','0px','95px','95px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      id: 'EllipseCopy2',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'ellipse',
      fill: ['rgba(47,96,15,1.00)']
   },
   {
      font: ['Arial, Helvetica, sans-serif',15,'rgba(255,255,255,1)','normal','none','normal'],
      type: 'text',
      id: 'Text2',
      text: 'Your<br>StudyDesk',
      align: 'center',
      rect: ['0px','27px','95px','40px','auto','auto']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Text2}": [
            ["style", "top", '27px'],
            ["style", "height", '40px'],
            ["style", "width", '95px'],
            ["style", "left", '0px'],
            ["style", "font-size", '15px']
         ],
         "${_EllipseCopy2}": [
            ["style", "top", '0px'],
            ["style", "height", '95px'],
            ["color", "background-color", 'rgba(47,96,15,1.00)'],
            ["style", "left", '0px'],
            ["style", "width", '95px']
         ],
         "${symbolSelector}": [
            ["style", "height", '95px'],
            ["style", "width", '95px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"dgreenText_mc": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['0px','273px','145px','44px','auto','auto'],
      borderRadius: ['0px 0px','0px 0px','0px 0px','0px 0px'],
      opacity: 1,
      id: 'Rectangle3Copy3',
      stroke: [3,'rgb(242, 123, 34)','none'],
      type: 'rect',
      fill: ['rgba(47,96,15,1.00)']
   },
   {
      transform: [[0,0],['-90'],[],['1.828','49']],
      rect: ['0px','140px','145px','3px','auto','auto'],
      borderRadius: ['0px 0px','0px 0px','0px 0px','0px 0px'],
      type: 'rect',
      id: 'Rectangle3Copy2',
      stroke: [3,'rgb(242, 123, 34)','none'],
      opacity: 0.25,
      fill: ['rgba(188,188,188,1.00)']
   },
   {
      transform: [[0,0],[],[],['1','5.267']],
      borderRadius: ['0px 0px','0px 0px','0px 0px','0px 0px'],
      rect: ['0px','0px','145px','3px','auto','auto'],
      id: 'Rectangle3Copy',
      stroke: [3,'rgb(242, 123, 34)','none'],
      type: 'rect',
      fill: ['rgba(47,96,15,1.00)']
   },
   {
      id: 'proceed_btn',
      type: 'rect',
      cursor: ['pointer'],
      rect: ['24','263','auto','auto','auto','auto']
   },
   {
      font: ['Arial, Helvetica, sans-serif',16,'rgba(49,49,49,1.00)','400','none','normal'],
      type: 'text',
      id: 'Text9',
      text: 'You need to find out how to design and develop your StudyDesk so that it provides beneficial learning and teaching environment for you and your students.',
      align: 'center',
      rect: ['7px','21px','130px','274px','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'proceed_btn',
      symbolName: 'proceed_btn'
   }   ]
   },
   states: {
      "Base State": {
         "${_proceed_btn}": [
            ["style", "top", '278px'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '27px']
         ],
         "${symbolSelector}": [
            ["style", "height", '317px'],
            ["style", "width", '145px']
         ],
         "${_Rectangle3Copy2}": [
            ["color", "background-color", 'rgba(188,188,188,1.00)'],
            ["style", "border-top-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["transform", "scaleX", '1.82759'],
            ["style", "border-style", 'none'],
            ["style", "left", '0px'],
            ["style", "width", '145px'],
            ["style", "top", '140px'],
            ["style", "border-bottom-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["transform", "scaleY", '49.00003'],
            ["style", "height", '3px'],
            ["style", "opacity", '0.25'],
            ["style", "border-top-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["transform", "rotateZ", '-90deg']
         ],
         "${_Text9}": [
            ["style", "top", '21px'],
            ["color", "color", 'rgba(49,49,49,1.00)'],
            ["style", "height", '274px'],
            ["style", "font-weight", '400'],
            ["style", "left", '7px'],
            ["style", "width", '130px']
         ],
         "${_Rectangle3Copy3}": [
            ["color", "background-color", 'rgba(47,96,15,1.00)'],
            ["style", "border-top-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-style", 'none'],
            ["style", "left", '0px'],
            ["style", "width", '145px'],
            ["style", "top", '273px'],
            ["style", "border-bottom-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '44px'],
            ["style", "opacity", '1'],
            ["style", "border-top-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${_Rectangle3Copy}": [
            ["color", "background-color", 'rgba(47,96,15,1.00)'],
            ["style", "border-top-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-style", 'none'],
            ["style", "left", '0px'],
            ["style", "width", '145px'],
            ["style", "top", '0px'],
            ["style", "border-bottom-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["transform", "scaleY", '5.26666'],
            ["style", "height", '3px'],
            ["style", "border-top-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ]
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"proceed_btn": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['-1px','5px','98px','25px','auto','auto'],
      borderRadius: ['5px 5px','5px 5px','5px 5px','5px 5px'],
      id: 'Rectangle2',
      stroke: [2,'rgb(106, 106, 106)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      type: 'text',
      rect: ['13px','10px','auto','auto','auto','auto'],
      id: 'Text',
      text: 'PROCEED...',
      align: 'center',
      font: ['Arial, Helvetica, sans-serif',12,'rgba(45,45,45,1.00)','700','none','normal']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Rectangle2}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "border-top-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-style", 'none'],
            ["style", "left", '-1px'],
            ["style", "width", '98px'],
            ["style", "top", '5px'],
            ["style", "border-bottom-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-top-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '25px'],
            ["color", "border-color", 'rgba(106,106,106,1.00)'],
            ["style", "border-width", '2px'],
            ["style", "cursor", 'auto']
         ],
         "${_Text}": [
            ["style", "top", '10px'],
            ["color", "color", 'rgba(45,45,45,1.00)'],
            ["style", "font-weight", '700'],
            ["style", "left", '13px'],
            ["style", "font-size", '12px']
         ],
         "${symbolSelector}": [
            ["style", "height", '35px'],
            ["style", "width", '97px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"yellowText_mc": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      transform: [],
      rect: ['-195px','224px','550px','44px','auto','auto'],
      borderRadius: ['0px 0px','0px 0px','0px 0px','0px 0px'],
      type: 'rect',
      id: 'Rectangle3Copy',
      stroke: [3,'rgb(242, 123, 34)','none'],
      opacity: 1,
      fill: ['rgba(255,204,0,1.00)']
   },
   {
      transform: [[0,0],['-90']],
      rect: ['-17px','-142px','190px','550px','auto','auto'],
      borderRadius: ['0px 0px','0px 0px','0px 0px','0px 0px'],
      type: 'rect',
      id: 'Rectangle3Copy3',
      stroke: [3,'rgb(242, 123, 34)','none'],
      opacity: 0.25,
      fill: ['rgba(188,188,188,1.00)']
   },
   {
      transform: [],
      borderRadius: ['0px 0px','0px 0px','0px 0px','0px 0px'],
      rect: ['-197px','28px','550px','10px','auto','auto'],
      id: 'Rectangle3',
      stroke: [3,'rgb(242, 123, 34)','none'],
      type: 'rect',
      fill: ['rgba(255,204,0,1.00)']
   },
   {
      id: 'proceed_btn',
      type: 'rect',
      cursor: ['pointer'],
      rect: ['24','263','auto','auto','auto','auto']
   },
   {
      transform: [],
      type: 'text',
      align: 'left',
      id: 'Text9',
      text: 'A good number of academic staff often say that they model their teaching approach from those who taught them, remembering what worked well for them as learners.  This is a good starting point, but this can result in a fairly limited teaching repertoire. It is also critical not to lose sight of the diversity of student body and that students have different ways of learning. <br> <br>For someone new to the learning and teaching culture at USQ, the information and activities contained in this section are designed to offer different possibilities about developing your expertise in teaching. If you have limited or no experience in university teaching, the order of topics shown above are recommended for you to undertake, to learn about quality teaching and maximising benefits for students.<br>',
      rect: ['-177px','50px','510px','161px','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',12,'rgba(49,49,49,1.00)','400','none','normal']
   }],
   symbolInstances: [
   {
      id: 'proceed_btn',
      symbolName: 'proceed_btn'
   }   ]
   },
   states: {
      "Base State": {
         "${_proceed_btn}": [
            ["style", "top", '278px'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '27px']
         ],
         "${_Text}": [
            ["style", "left", ''],
            ["style", "top", '']
         ],
         "${symbolSelector}": [
            ["style", "height", '317px'],
            ["style", "width", '145px']
         ],
         "${_Rectangle3Copy3}": [
            ["color", "background-color", 'rgba(188,188,188,1.00)'],
            ["style", "border-top-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["transform", "scaleX", '1'],
            ["style", "border-style", 'none'],
            ["style", "left", '-17px'],
            ["style", "width", '190px'],
            ["style", "top", '-142px'],
            ["style", "border-bottom-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["transform", "scaleY", '1'],
            ["style", "height", '550px'],
            ["transform", "rotateZ", '-90deg'],
            ["style", "border-top-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "opacity", '0.25']
         ],
         "${_Text9}": [
            ["color", "color", 'rgba(49,49,49,1.00)'],
            ["style", "font-weight", '400'],
            ["style", "left", '-177px'],
            ["style", "width", '510px'],
            ["style", "top", '50px'],
            ["style", "text-align", 'left'],
            ["style", "height", '161px'],
            ["transform", "scaleX", '1'],
            ["style", "font-size", '12px']
         ],
         "${_Rectangle3}": [
            ["color", "background-color", 'rgba(255,204,0,1.00)'],
            ["style", "border-top-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["transform", "scaleX", '1'],
            ["style", "border-style", 'none'],
            ["style", "left", '-197px'],
            ["style", "width", '550px'],
            ["style", "top", '28px'],
            ["style", "border-bottom-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["transform", "scaleY", '1'],
            ["style", "height", '10px'],
            ["style", "border-top-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${_Rectangle3Copy}": [
            ["color", "background-color", 'rgba(255,204,0,1.00)'],
            ["style", "border-top-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["transform", "scaleX", '1'],
            ["style", "border-style", 'none'],
            ["style", "left", '-197px'],
            ["style", "width", '550px'],
            ["style", "top", '224px'],
            ["style", "border-bottom-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["transform", "scaleY", '1'],
            ["style", "height", '44px'],
            ["style", "border-top-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "opacity", '1']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2000,
         autoPlay: true,
         timeline: [
            { id: "eid432", tween: [ "style", "${_proceed_btn}", "left", '29px', { fromValue: '27px'}], position: 0, duration: 2000 },
            { id: "eid505", tween: [ "style", "${_proceed_btn}", "top", '229px', { fromValue: '228px'}], position: 0, duration: 2000 },
            { id: "eid380", tween: [ "style", "${_Text}", "left", '', { fromValue: '0'}], position: 0, duration: 0 },
            { id: "eid433", tween: [ "style", "${_Rectangle3Copy}", "left", '-197px', { fromValue: '-197px'}], position: 2000, duration: 0 },
            { id: "eid381", tween: [ "style", "${_Text}", "top", '', { fromValue: '0'}], position: 0, duration: 0 }         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-183875999");
