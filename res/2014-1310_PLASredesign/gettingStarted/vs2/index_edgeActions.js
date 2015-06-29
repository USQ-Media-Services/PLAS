/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindElementAction(compId, symbolName, "${_orange_mc}", "click", function(sym, e) {
         // Show an Element.
         //  (sym.$("name") resolves an Edge Animate element name to a DOM
         //  element that can be used with jQuery)
         sym.$("orangeText_mc").show();
         
         sym.$("dgreenText_mc").hide();
         sym.$("greenText_mc").hide();
         sym.$("tealText_mc").hide();
         sym.$("blueText_mc").hide();
         sym.$("purpleText_mc").hide();
         sym.$("pinkText_mc").hide();
         sym.$("redText_mc").hide();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_green_mc}", "click", function(sym, e) {
         // Show an Element.
         //  (sym.$("name") resolves an Edge Animate element name to a DOM
         //  element that can be used with jQuery)
         sym.$("greenText_mc").show();
         
         sym.$("dgreenText_mc").hide();
         sym.$("orangeText_mc").hide();
         sym.$("tealText_mc").hide();
         sym.$("blueText_mc").hide();
         sym.$("purpleText_mc").hide();
         sym.$("pinkText_mc").hide();
         sym.$("redText_mc").hide();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_teal_mc}", "click", function(sym, e) {
         // Show an Element.
         //  (sym.$("name") resolves an Edge Animate element name to a DOM
         //  element that can be used with jQuery)
         sym.$("tealText_mc").show();
         
         sym.$("orangeText_mc").hide();
         sym.$("dgreenText_mc").hide();
         sym.$("greenText_mc").hide();
         sym.$("blueText_mc").hide();
         sym.$("purpleText_mc").hide();
         sym.$("pinkText_mc").hide();
         sym.$("redText_mc").hide();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_blue_mc}", "click", function(sym, e) {
         // Show an Element.
         //  (sym.$("name") resolves an Edge Animate element name to a DOM
         //  element that can be used with jQuery)
         sym.$("blueText_mc").show();
         
         sym.$("orangeText_mc").hide();
         sym.$("dgreenText_mc").hide();
         sym.$("greenText_mc").hide();
         sym.$("tealText_mc").hide();
         sym.$("purpleText_mc").hide();
         sym.$("pinkText_mc").hide();
         sym.$("redText_mc").hide();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_purple_mc}", "click", function(sym, e) {
         // Show an Element.
         //  (sym.$("name") resolves an Edge Animate element name to a DOM
         //  element that can be used with jQuery)
         sym.$("purpleText_mc").show();
         
         sym.$("orangeText_mc").hide();
         sym.$("dgreenText_mc").hide();
         sym.$("greenText_mc").hide();
         sym.$("tealText_mc").hide();
         sym.$("blueText_mc").hide();
         sym.$("pinkText_mc").hide();
         sym.$("redText_mc").hide();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_pink_mc}", "click", function(sym, e) {
         // Show an Element.
         //  (sym.$("name") resolves an Edge Animate element name to a DOM
         //  element that can be used with jQuery)
         sym.$("pinkText_mc").show();
         
         sym.$("orangeText_mc").hide();
         sym.$("dgreenText_mc").hide();
         sym.$("greenText_mc").hide();
         sym.$("tealText_mc").hide();
         sym.$("blueText_mc").hide();
         sym.$("purpleText_mc").hide();
         sym.$("redText_mc").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_red_mc}", "click", function(sym, e) {
         // Show an Element.
         //  (sym.$("name") resolves an Edge Animate element name to a DOM
         //  element that can be used with jQuery)
         sym.$("redText_mc").show();
         
         sym.$("orangeText_mc").hide();
         sym.$("dgreenText_mc").hide();
         sym.$("greenText_mc").hide();
         sym.$("tealText_mc").hide();
         sym.$("blueText_mc").hide();
         sym.$("purpleText_mc").hide();
         sym.$("pinkText_mc").hide();
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_yellow_mc}", "click", function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play(1000);
         
         sym.$("orangeText_mc").hide();
         sym.$("dgreenText_mc").hide();
         sym.$("greenText_mc").hide();
         sym.$("tealText_mc").hide();
         sym.$("blueText_mc").hide();
         sym.$("purpleText_mc").hide();
         sym.$("pinkText_mc").hide();
         sym.$("redText_mc").hide();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_red2_mc}", "click", function(sym, e) {
         // Show an Element.
         //  (sym.$("name") resolves an Edge Animate element name to a DOM
         //  element that can be used with jQuery)
         sym.$("redText_mc").hide();
         
         sym.$("orangeText_mc").hide();
         sym.$("greenText_mc").hide();
         sym.$("tealText_mc").hide();
         sym.$("blueText_mc").hide();
         sym.$("purpleText_mc").hide();
         sym.$("pinkText_mc").hide();
         
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute for a new window)
         window.open("http://mystaffdesk.usq.edu.au/moodle2/mod/book/view.php?id=36388&chapterid=1794", "_top");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_blue2_mc}", "click", function(sym, e) {
         // Show an Element.
         //  (sym.$("name") resolves an Edge Animate element name to a DOM
         //  element that can be used with jQuery)
         sym.$("blueText_mc").hide();
         
         sym.$("orangeText_mc").hide();
         sym.$("greenText_mc").hide();
         sym.$("tealText_mc").hide();
         sym.$("purpleText_mc").hide();
         sym.$("pinkText_mc").hide();
         sym.$("redText_mc").hide();
         
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute for a new window)
         window.open("http://mystaffdesk.usq.edu.au/moodle2/mod/book/view.php?id=36388&chapterid=1791", "_top");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_purple2_mc}", "click", function(sym, e) {
         // Show an Element.
         //  (sym.$("name") resolves an Edge Animate element name to a DOM
         //  element that can be used with jQuery)
         sym.$("purpleText_mc").hide();
         
         sym.$("orangeText_mc").hide();
         sym.$("greenText_mc").hide();
         sym.$("tealText_mc").hide();
         sym.$("blueText_mc").hide();
         sym.$("pinkText_mc").hide();
         sym.$("redText_mc").hide();
         
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute for a new window)
         window.open("http://mystaffdesk.usq.edu.au/moodle2/mod/book/view.php?id=36388&chapterid=1792", "_top");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_teal2_mc}", "click", function(sym, e) {
         // Show an Element.
         //  (sym.$("name") resolves an Edge Animate element name to a DOM
         //  element that can be used with jQuery)
         sym.$("tealText_mc").hide();
         
         sym.$("orangeText_mc").hide();
         sym.$("greenText_mc").hide();
         sym.$("blueText_mc").hide();
         sym.$("purpleText_mc").hide();
         sym.$("pinkText_mc").hide();
         sym.$("redText_mc").hide();
         
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute for a new window)
         window.open("http://mystaffdesk.usq.edu.au/moodle2/mod/book/view.php?id=36388&chapterid=1790", "_top");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_pink2_mc}", "click", function(sym, e) {
         // Show an Element.
         //  (sym.$("name") resolves an Edge Animate element name to a DOM
         //  element that can be used with jQuery)
         sym.$("pinkText_mc").hide();
         
         sym.$("orangeText_mc").hide();
         sym.$("greenText_mc").hide();
         sym.$("tealText_mc").hide();
         sym.$("blueText_mc").hide();
         sym.$("purpleText_mc").hide();
         sym.$("redText_mc").hide();
         
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute for a new window)
         window.open("http://mystaffdesk.usq.edu.au/moodle2/mod/book/view.php?id=36388&chapterid=1793", "_top");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_green2_mc}", "click", function(sym, e) {
         // Show an Element.
         //  (sym.$("name") resolves an Edge Animate element name to a DOM
         //  element that can be used with jQuery)
         sym.$("greenText_mc").hide();
         
         sym.$("orangeText_mc").hide();
         sym.$("tealText_mc").hide();
         sym.$("blueText_mc").hide();
         sym.$("purpleText_mc").hide();
         sym.$("pinkText_mc").hide();
         sym.$("redText_mc").hide();
         
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute for a new window)
         window.open("http://mystaffdesk.usq.edu.au/moodle2/mod/book/view.php?id=36388&chapterid=1789", "_top");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_yellow2_mc}", "click", function(sym, e) {
         // Show an Element.
         //  (sym.$("name") resolves an Edge Animate element name to a DOM
         //  element that can be used with jQuery)
         sym.$("yellowText_mc").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_orange2_mc}", "click", function(sym, e) {
         // Show an Element.
         //  (sym.$("name") resolves an Edge Animate element name to a DOM
         //  element that can be used with jQuery)
         sym.$("orangeText_mc").hide();
         
         sym.$("greenText_mc").hide();
         sym.$("tealText_mc").hide();
         sym.$("blueText_mc").hide();
         sym.$("purpleText_mc").hide();
         sym.$("pinkText_mc").hide();
         sym.$("redText_mc").hide();
         
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute for a new window)
         window.open("http://mystaffdesk.usq.edu.au/moodle2/mod/book/view.php?id=36388&chapterid=1788", "_top");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_dGreen_mc}", "click", function(sym, e) {
         // Show an Element.
         //  (sym.$("name") resolves an Edge Animate element name to a DOM
         //  element that can be used with jQuery)
         sym.$("dgreenText_mc").show();
         
         sym.$("orangeText_mc").hide();
         sym.$("greenText_mc").hide();
         sym.$("tealText_mc").hide();
         sym.$("blueText_mc").hide();
         sym.$("purpleText_mc").hide();
         sym.$("pinkText_mc").hide();
         sym.$("redText_mc").hide();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_home_icon-01}", "click", function(sym, e) {
         // stop the timeline at the given position (ms or label)
         sym.stop(0001);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_dGreen2_mc}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.$("orangeText_mc").hide();
         sym.$("dgreenText_mc").hide();
         sym.$("greenText_mc").hide();
         sym.$("tealText_mc").hide();
         sym.$("blueText_mc").hide();
         sym.$("purpleText_mc").hide();
         sym.$("pinkText_mc").hide();
         sym.$("redText_mc").hide();
         

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'orange_mc'
   (function(symbolName) {   
   
   })("orange_mc");
   //Edge symbol end:'orange_mc'

   //=========================================================
   
   //Edge symbol: 'green_mc'
   (function(symbolName) {   
   
   })("green_mc");
   //Edge symbol end:'green_mc'

   //=========================================================
   
   //Edge symbol: 'teal_mc'
   (function(symbolName) {   
   
   })("teal_mc");
   //Edge symbol end:'teal_mc'

   //=========================================================
   
   //Edge symbol: 'blue_mc'
   (function(symbolName) {   
   
   })("blue_mc");
   //Edge symbol end:'blue_mc'

   //=========================================================
   
   //Edge symbol: 'purple_mc'
   (function(symbolName) {   
   
   })("purple_mc");
   //Edge symbol end:'purple_mc'

   //=========================================================
   
   //Edge symbol: 'pink_mc'
   (function(symbolName) {   
   
   })("pink_mc");
   //Edge symbol end:'pink_mc'

   //=========================================================
   
   //Edge symbol: 'red_mc'
   (function(symbolName) {   
   
   })("red_mc");
   //Edge symbol end:'red_mc'

   //=========================================================
   
   //Edge symbol: 'yellow_mc'
   (function(symbolName) {   
   
   })("yellow_mc");
   //Edge symbol end:'yellow_mc'

   //=========================================================
   
   //Edge symbol: 'orangeText_mc'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_proceed_btn}", "click", function(sym, e) {
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute for a new window)
         window.open("http://www.adobe.com", "_self");
         
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute for a new window)
         window.open("http://mystaffdesk.usq.edu.au/moodle2/mod/book/view.php?id=36388&chapterid=1788", "_top");

      });
      //Edge binding end

   })("orangeText_mc");
   //Edge symbol end:'orangeText_mc'

   //=========================================================
   
   //Edge symbol: 'orangeText_mc_1'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_proceed_btn}", "click", function(sym, e) {
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute for a new window)
         window.open("http://mystaffdesk.usq.edu.au/moodle2/mod/book/view.php?id=36388&chapterid=1789", "_top");
         

      });
      //Edge binding end

   })("greenText_mc");
   //Edge symbol end:'greenText_mc'

   //=========================================================
   
   //Edge symbol: 'greenText_mc_1'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_proceed_btnCopy}", "click", function(sym, e) {
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute for a new window)
         window.open("http://mystaffdesk.usq.edu.au/moodle2/mod/book/view.php?id=36388&chapterid=1790", "_top");
         

      });
      //Edge binding end

   })("tealText_mc");
   //Edge symbol end:'tealText_mc'

   //=========================================================
   
   //Edge symbol: 'tealText_mc_1'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_proceed_btnCopy2}", "click", function(sym, e) {
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute for a new window)
         window.open("http://mystaffdesk.usq.edu.au/moodle2/mod/book/view.php?id=36388&chapterid=1791", "_top");
         

      });
      //Edge binding end

   })("blueText_mc");
   //Edge symbol end:'blueText_mc'

   //=========================================================
   
   //Edge symbol: 'blueText_mc_1'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_proceed_btnCopy3}", "click", function(sym, e) {
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute for a new window)
         window.open("http://mystaffdesk.usq.edu.au/moodle2/mod/book/view.php?id=36388&chapterid=1792", "_top");
         

      });
      //Edge binding end

   })("purpleText_mc");
   //Edge symbol end:'purpleText_mc'

   //=========================================================
   
   //Edge symbol: 'purpleText_mc_1'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_proceed_btnCopy4}", "click", function(sym, e) {
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute for a new window)
         window.open("http://mystaffdesk.usq.edu.au/moodle2/mod/book/view.php?id=36388&chapterid=1793", "_top");
         

      });
      //Edge binding end

   })("pinkText_mc");
   //Edge symbol end:'pinkText_mc'

   //=========================================================
   
   //Edge symbol: 'pinkText_mc_1'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_proceed_btnCopy5}", "click", function(sym, e) {
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute for a new window)
         window.open("http://mystaffdesk.usq.edu.au/moodle2/mod/book/view.php?id=36388&chapterid=1794", "_top");
         

      });
      //Edge binding end

   })("redText_mc");
   //Edge symbol end:'redText_mc'

   //=========================================================
   
   //Edge symbol: 'arrow_mc'
   (function(symbolName) {   
   
   })("arrow_mc");
   //Edge symbol end:'arrow_mc'

   //=========================================================
   
   //Edge symbol: 'green_mc_1'
   (function(symbolName) {   
   
      })("dGreen_mc");
   //Edge symbol end:'dGreen_mc'

   //=========================================================
   
   //Edge symbol: 'greenText_mc_1'
   (function(symbolName) {   
   
      })("dgreenText_mc");
   //Edge symbol end:'dgreenText_mc'

   //=========================================================
   
   //Edge symbol: 'proceed_btn'
   (function(symbolName) {   
   
   })("proceed_btn");
   //Edge symbol end:'proceed_btn'

   //=========================================================
   
   //Edge symbol: 'orangeText_mc_1'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_proceed_btn}", "click", function(sym, e) {
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute for a new window)
         window.open("http://mystaffdesk.usq.edu.au/moodle2/mod/book/view.php?id=36388", "_top");
         

      });
      //Edge binding end

      })("yellowText_mc");
   //Edge symbol end:'yellowText_mc'

})(jQuery, AdobeEdge, "EDGE-183875999");