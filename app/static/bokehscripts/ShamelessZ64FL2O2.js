(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof (root._bokeh_onload_callbacks) === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        }
        finally {
          delete root._bokeh_onload_callbacks
        }
        console.info("Bokeh: all callbacks have finished");
      }
    
      function load_libs(js_urls, callback) {
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.log("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = js_urls.length;
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var s = document.createElement('script');
          s.src = url;
          s.async = false;
          s.onreadystatechange = s.onload = function() {
            root._bokeh_is_loading--;
            if (root._bokeh_is_loading === 0) {
              console.log("Bokeh: all BokehJS libraries loaded");
              run_callbacks()
            }
          };
          s.onerror = function() {
            console.warn("failed to load library " + url);
          };
          console.log("Bokeh: injecting script tag for BokehJS library: ", url);
          document.getElementsByTagName("head")[0].appendChild(s);
        }
      };var element = document.getElementById("9c05ce1c-1122-4590-998f-b088473f9003");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '9c05ce1c-1122-4590-998f-b088473f9003' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.pydata.org/bokeh/release/bokeh-0.13.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-widgets-0.13.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-tables-0.13.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-gl-0.13.0.min.js"];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    
                  var docs_json = '{"33c92b23-e8c7-4b33-bc37-757683a48325":{"roots":{"references":[{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"59b3624e-18fd-4689-82d9-590933678bb3","type":"TapTool"},{"id":"972425f2-50eb-48c9-8907-fe83bbc1459c","type":"HoverTool"}]},"id":"c301e9ff-26b7-4ca8-8085-f91722fbe30e","type":"Toolbar"},{"attributes":{"callback":null},"id":"d7f2e61a-469b-4b03-a9b0-5a266bc24d05","type":"DataRange1d"},{"attributes":{},"id":"a121aab8-f855-4126-b25e-336daf9a220a","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"Sequential"},"y":{"field":"imdbRating"}},"id":"4c51e94d-8e36-4333-bada-f237721d9853","type":"Circle"},{"attributes":{"axis_label":"IMDb Rating","formatter":{"id":"7582182d-6f6b-41ce-9850-01c5d30191e7","type":"BasicTickFormatter"},"plot":{"id":"2fcb0ae1-45b3-454f-8fe9-173694a5d5b3","subtype":"Figure","type":"Plot"},"ticker":{"id":"706ccc97-9704-406a-86cf-174d1ee3f3da","type":"BasicTicker"}},"id":"3e8ab69c-9027-4f29-b865-97def44bd030","type":"LinearAxis"},{"attributes":{"data_source":{"id":"917ce653-c68b-4ebe-bcd5-da982b698b01","type":"ColumnDataSource"},"glyph":{"id":"337fc70f-bed7-45d4-a48a-cddcfe3d0613","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"4c51e94d-8e36-4333-bada-f237721d9853","type":"Circle"},"selection_glyph":null,"view":{"id":"f9d8e220-9e10-45e6-8eaf-3fa548cea366","type":"CDSView"}},"id":"7ff5df77-4c99-4f8a-aa18-b9ccbcfc0d41","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.75},"fill_color":{"field":"colors"},"line_alpha":{"value":0.75},"line_color":{"field":"colors"},"size":{"units":"screen","value":10},"x":{"field":"Sequential"},"y":{"field":"imdbRating"}},"id":"337fc70f-bed7-45d4-a48a-cddcfe3d0613","type":"Circle"},{"attributes":{"data_source":{"id":"917ce653-c68b-4ebe-bcd5-da982b698b01","type":"ColumnDataSource"},"glyph":{"id":"5281b577-99ad-4add-a9b5-0e724edd19cf","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"55aa4a98-0602-4227-8d11-4fd83c7d5b73","type":"Line"},"selection_glyph":null,"view":{"id":"ec1e448f-af9e-4fbd-aa66-d276c645b531","type":"CDSView"}},"id":"c16f20a2-20f2-4617-b5ff-687f89fc9174","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"788ecbc9-ce32-4bdc-87db-ef13c0651dc9","type":"DataRange1d"},{"attributes":{"callback":null,"renderers":"auto","tooltips":[["Title","@Title"],["Season","@Season"],["Episode","@Episode"],["Rating","@imdbRating"]]},"id":"972425f2-50eb-48c9-8907-fe83bbc1459c","type":"HoverTool"},{"attributes":{"source":{"id":"917ce653-c68b-4ebe-bcd5-da982b698b01","type":"ColumnDataSource"}},"id":"ec1e448f-af9e-4fbd-aa66-d276c645b531","type":"CDSView"},{"attributes":{},"id":"666dc097-804c-48e5-8f66-7f6c6b05b49c","type":"LinearScale"},{"attributes":{"source":{"id":"917ce653-c68b-4ebe-bcd5-da982b698b01","type":"ColumnDataSource"}},"id":"f9d8e220-9e10-45e6-8eaf-3fa548cea366","type":"CDSView"},{"attributes":{},"id":"e1b5ab07-3531-4b98-9d71-193fd77453e1","type":"BasicTickFormatter"},{"attributes":{},"id":"bb7a528a-578f-4102-b79c-ca459d59631a","type":"UnionRenderers"},{"attributes":{},"id":"7582182d-6f6b-41ce-9850-01c5d30191e7","type":"BasicTickFormatter"},{"attributes":{"url":"https://imdb.com/title/@imdbID/"},"id":"dfc13aa9-48cd-4f9b-a004-7963eb64c469","type":"OpenURL"},{"attributes":{"axis_label":"Episode Number","formatter":{"id":"e1b5ab07-3531-4b98-9d71-193fd77453e1","type":"BasicTickFormatter"},"plot":{"id":"2fcb0ae1-45b3-454f-8fe9-173694a5d5b3","subtype":"Figure","type":"Plot"},"ticker":{"id":"a121aab8-f855-4126-b25e-336daf9a220a","type":"BasicTicker"}},"id":"68f60e40-f0c6-4a12-889e-345659d89a5d","type":"LinearAxis"},{"attributes":{"plot":null,"text":"IMDb Ratings for Shameless"},"id":"fa237e79-c670-4aea-a087-42cf4f628dc6","type":"Title"},{"attributes":{"line_alpha":0.75,"x":{"field":"Sequential"},"y":{"field":"imdbRating"}},"id":"5281b577-99ad-4add-a9b5-0e724edd19cf","type":"Line"},{"attributes":{},"id":"e49160e1-4d34-4e5c-b347-2a365569fe75","type":"LinearScale"},{"attributes":{"dimension":1,"plot":{"id":"2fcb0ae1-45b3-454f-8fe9-173694a5d5b3","subtype":"Figure","type":"Plot"},"ticker":{"id":"706ccc97-9704-406a-86cf-174d1ee3f3da","type":"BasicTicker"}},"id":"52359cf5-7a3a-4ceb-9d4b-4b95f4ecd344","type":"Grid"},{"attributes":{"callback":null,"data":{"Episode":["1","2","3","4","5","6","7","8","9","10","11","12","1","2","3","4","5","6","7","8","9","10","11","12","1","2","3","4","5","6","7","8","9","10","11","12","1","2","3","4","5","6","7","8","9","10","11","12","1","2","3","4","5","6","7","8","9","10","11","12","1","2","3","4","5","6","7","8","9","10","11","12","1","2","3","4","5","6","7","8","9","10","11","12","1","2","3","4","5","6","7","8","9","10","11","12","1","2","3","4","5","6","7","8","9","10","11","12","13","14"],"FQEpisode":["0101","0102","0103","0104","0105","0106","0107","0108","0109","0110","0111","0112","0201","0202","0203","0204","0205","0206","0207","0208","0209","0210","0211","0212","0301","0302","0303","0304","0305","0306","0307","0308","0309","0310","0311","0312","0401","0402","0403","0404","0405","0406","0407","0408","0409","0410","0411","0412","0501","0502","0503","0504","0505","0506","0507","0508","0509","0510","0511","0512","0601","0602","0603","0604","0605","0606","0607","0608","0609","0610","0611","0612","0701","0702","0703","0704","0705","0706","0707","0708","0709","0710","0711","0712","0801","0802","0803","0804","0805","0806","0807","0808","0809","0810","0811","0812","0901","0902","0903","0904","0905","0906","0907","0908","0909","0910","0911","0912","0913","0914"],"Released":{"__ndarray__":"AABAKIHWckIAAIDwwdhyQgAAwLgC23JCAAAAgUPdckIAAEBJhN9yQgAAgBHF4XJCAADA2QXkckIAAACiRuZyQgAAQGqH6HJCAACAMsjqckIAAMD6CO1yQgAAAMNJ73JCAABA1alLc0IAAICd6k1zQgAAwGUrUHNCAAAALmxSc0IAAED2rFRzQgAAgL7tVnNCAADAhi5Zc0IAAEAXsF1zQgAAgN/wX3NCAADApzFic0IAAABwcmRzQgAAQDizZnNCAACAShPDc0IAAMASVMVzQgAAANuUx3NCAACAaxbMc0IAAMAzV85zQgAAAPyX0HNCAABAxNjSc0IAAICMGdVzQgAAwFRa13NCAAAAHZvZc0IAAEDl29tzQgAAgK0c3nNCAACA9zs4dEIAAMC/fDp0QgAAAIi9PHRCAABAUP4+dEIAAIAYP0F0QgAAwOB/Q3RCAAAAqcBFdEIAAIA5Qkp0QgAAwAGDTHRCAAAAysNOdEIAAECSBFF0QgAAgFpFU3RCAACApGStdEIAAMBspa90QgAAADXmsXRCAABA/Sa0dEIAAIDFZ7Z0QgAAwI2ouHRCAABAHiq9dEIAAIDmar90QgAAwK6rwXRCAAAAd+zDdEIAAEA/LcZ0QgAAgAduyHRCAACAUY0idUIAAMAZziR1QgAAAOIOJ3VCAABAqk8pdUIAAIBykCt1QgAAwDrRLXVCAAAAAxIwdUIAAICTkzR1QgAAwFvUNnVCAAAAJBU5dUIAAEDsVTt1QgAAgLSWPXVCAAAACyt4dUIAAEDTa3p1QgAAgJusfHVCAADAY+1+dUIAAAAsLoF1QgAAQPRug3VCAACAvK+FdUIAAMCE8Id1QgAAAE0xinVCAABAFXKMdUIAAIDdso51QgAAwKXzkHVCAABAoZf4dUIAAIBp2Pp1QgAAwDEZ/XVCAAAA+ln/dUIAAEDCmgF2QgAAgIrbA3ZCAADAUhwGdkIAAEDjnQp2QgAAgKveDHZCAADAcx8PdkIAAAA8YBF2QgAAQAShE3ZCAABADLpbdkIAAIDU+l12QgAAwJw7YHZCAAAAZXxidkIAAEAtvWR2QgAAgPX9ZnZCAADAvT5pdkIAAADpiIZ2QgAAQLHJiHZCAACAeQqLdkIAAABJ8Ap2QgAAAAqMj3ZCAAAASfAKdkIAAABJ8Ap2Qg==","dtype":"float64","shape":[110]},"Season":["1","1","1","1","1","1","1","1","1","1","1","1","2","2","2","2","2","2","2","2","2","2","2","2","3","3","3","3","3","3","3","3","3","3","3","3","4","4","4","4","4","4","4","4","4","4","4","4","5","5","5","5","5","5","5","5","5","5","5","5","6","6","6","6","6","6","6","6","6","6","6","6","7","7","7","7","7","7","7","7","7","7","7","7","8","8","8","8","8","8","8","8","8","8","8","8","9","9","9","9","9","9","9","9","9","9","9","9","9","9"],"Sequential":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109],"Title":["Pilot","Frank the Plank","Aunt Ginger","Casey Casden","Three Boys","Killer Carl","Frank Gallagher: Loving Husband, Devoted Father","It&#x27;s Time to Kill the Turtle","But at Last Came a Knock","Nana Gallagher Had an Affair","Daddyz Girl","Father Frank, Full of Grace","Summertime","Summer Loving","I&#x27;ll Light a Candle for You Every Day","A Beautiful Mess","Father&#x27;s Day","Can I Have a Mother","A Bottle of Jean Nate","Parenthood","Hurricane Monica","A Great Cause","Just Like the Pilgrims Intended","Fiona Interrupted","El Gran Ca\\u00f1on","The American Dream","May I Trim Your Hedges?","The Helpful Gallaghers","The Sins of My Caretaker","Cascading Failures","A Long Way from Home","Where There&#x27;s a Will","Frank the Plumber","Civil Wrongs","Order Room Service","Survival of the Fittest","Simple Pleasures","My Oldest Daughter","Like Father, Like Daughter","Strangers on a Train","There&#x27;s the Rub","Iron City","A Jailbird, Invalid, Martyr, Cutter, Retard, and Parasitic Twin","Hope Springs Paternal","The Legend of Bonnie and Carl","Liver, I Hardly Know Her","Emily","Lazarus","Milk of the Gods","I&#x27;m the Liver","The Two Lisas","A Night to Remem-- Wait, What?","Rite of Passage","Crazy Love","Tell Me You F**King Need Me","Uncle Carl","Carl&#x27;s First Sentencing","South Side Rules","Drugs Actually","Love Songs (In the Key of Gallagher)","I Only Miss Her When I&#x27;m Breathing","#AbortionRules","The F Word","Going Once, Going Twice","Refugees","NSFW","Pimp&#x27;s Paradise","Be a Good Boy. Come for Grandma","A Yurt of One&#x27;s Own","Paradise Lost","Sleep No More","Familia Supra Gallegorious Omnia!","Hiraeth","Swipe, Fuck, Leave","Home Sweet Homeless Shelter","I Am A Storm","Own Your Shit","The Defenestration of Frank","You&#x27;ll Never Ever Get a Chicken in Your Whole Entire Life","You Sold Me the Laundromat, Remember?","Ouroboros","Ride or Die","Happily Ever After","Requiem for a Slut","We Become What We... Frank!","Where&#x27;s My Meth?","God Bless Her Rotting Soul","Fuck Paying It Forward","The (Mis)Education of Liam Fergus Beircheart Gallagher","Icarus Fell. And Rusty Ate Him.","Occupy Fiona","Frank&#x27;s Northern Shuttle Express","The Fugees","Church of Gay Jesus","A Gallagher Pedicure","Sleepwalking","Are You There Shim? It&#x27;s Me, Ian.","Mo White!","Weirdo Gallagher Vortex","Do Right, Vote White!","Black-Haired Ginger","Face It, You&#x27;re Gorgeous","Down Like the Titanic","Episode #9.8","Episode #9.9","Episode #9.10","Episode #9.11","Episode #9.12","Episode #9.13","Episode #9.14"],"colors":["#1b9e77","#1b9e77","#1b9e77","#1b9e77","#1b9e77","#1b9e77","#1b9e77","#1b9e77","#1b9e77","#1b9e77","#1b9e77","#1b9e77","#d95f02","#d95f02","#d95f02","#d95f02","#d95f02","#d95f02","#d95f02","#d95f02","#d95f02","#d95f02","#d95f02","#d95f02","#7570b3","#7570b3","#7570b3","#7570b3","#7570b3","#7570b3","#7570b3","#7570b3","#7570b3","#7570b3","#7570b3","#7570b3","#e7298a","#e7298a","#e7298a","#e7298a","#e7298a","#e7298a","#e7298a","#e7298a","#e7298a","#e7298a","#e7298a","#e7298a","#66a61e","#66a61e","#66a61e","#66a61e","#66a61e","#66a61e","#66a61e","#66a61e","#66a61e","#66a61e","#66a61e","#66a61e","#1b9e77","#1b9e77","#1b9e77","#1b9e77","#1b9e77","#1b9e77","#1b9e77","#1b9e77","#1b9e77","#1b9e77","#1b9e77","#1b9e77","#d95f02","#d95f02","#d95f02","#d95f02","#d95f02","#d95f02","#d95f02","#d95f02","#d95f02","#d95f02","#d95f02","#d95f02","#7570b3","#7570b3","#7570b3","#7570b3","#7570b3","#7570b3","#7570b3","#7570b3","#7570b3","#7570b3","#7570b3","#7570b3","#e7298a","#e7298a","#e7298a","#e7298a","#e7298a","#e7298a","#e7298a","#e7298a","#e7298a","#e7298a","#e7298a","#e7298a","#e7298a","#e7298a"],"imdbID":["tt1589573","tt1717968","tt1732475","tt1733025","tt1744244","tt1751740","tt1814411","tt1812446","tt1812447","tt1814409","tt1814410","tt1812445","tt1988453","tt2004908","tt2108266","tt2108267","tt2108268","tt2048583","tt2064556","tt2105878","tt2080942","tt2093744","tt2091073","tt2104602","tt2316912","tt2316918","tt2316924","tt2316926","tt2316928","tt2386512","tt2666306","tt2666310","tt2666316","tt2666312","tt2666314","tt2747042","tt2785156","tt3391660","tt3380306","tt3332046","tt3437538","tt3437540","tt3391558","tt3507312","tt3478768","tt3507322","tt3507316","tt3570280","tt3547068","tt3858936","tt3858934","tt3878444","tt3904378","tt3953104","tt3979142","tt4056348","tt4080744","tt4079958","tt4112036","tt3902188","tt4368544","tt4815168","tt4881556","tt4850056","tt5037490","tt5056040","tt5090596","tt5152654","tt5159602","tt5205752","tt5208858","tt4393194","tt5338242","tt5521840","tt5585914","tt5602264","tt5638836","tt5678448","tt5688526","tt5745128","tt5745132","tt5745134","tt5745136","tt5507134","tt6347410","tt6349112","tt6360832","tt6402814","tt6423672","tt6428796","tt6428802","tt6428804","tt6428808","tt6428800","tt6428798","tt6360834","tt7613412","tt8245452","tt8245454","tt8245456","tt8245464","tt8245466","tt8245470","tt8245468","tt8245474","tt8245476","tt8245478","tt8245480","tt8810000","tt8810002"],"imdbRating":{"__ndarray__":"MzMzMzMzIUCamZmZmZkgQDMzMzMzMyFAMzMzMzMzIUBmZmZmZmYgQJqZmZmZmSBAAAAAAAAAIUBmZmZmZmYhQJqZmZmZmSFAZmZmZmZmIUBmZmZmZmYhQAAAAAAAACJAzczMzMzMIEBmZmZmZmYgQM3MzMzMzCBAZmZmZmZmIUAAAAAAAAAhQGZmZmZmZiFAmpmZmZmZIECamZmZmZkhQAAAAAAAACFAZmZmZmZmIUBmZmZmZmYiQM3MzMzMzCFAmpmZmZmZIUBmZmZmZmYhQM3MzMzMzCFAZmZmZmZmIUDNzMzMzMwhQAAAAAAAACJAmpmZmZmZIUBmZmZmZmYhQDMzMzMzMyJAMzMzMzMzIUDNzMzMzMwhQJqZmZmZmSJAAAAAAAAAIUBmZmZmZmYhQGZmZmZmZiFAmpmZmZmZIUCamZmZmZkiQDMzMzMzMyJAMzMzMzMzIkAAAAAAAAAiQGZmZmZmZiJAAAAAAAAAIkAAAAAAAAAjQDMzMzMzMyNAMzMzMzMzIUBmZmZmZmYhQM3MzMzMzCFAAAAAAAAAIkAzMzMzMzMiQJqZmZmZmSJAzczMzMzMIUAzMzMzMzMiQGZmZmZmZiJAMzMzMzMzIkBmZmZmZmYiQJqZmZmZmSBAZmZmZmZmIUCamZmZmZkgQJqZmZmZmSFAmpmZmZmZIUBmZmZmZmYhQJqZmZmZmSFAmpmZmZmZIEBmZmZmZmYhQM3MzMzMzCFAMzMzMzMzIUAzMzMzMzMiQDMzMzMzMyJAmpmZmZmZIUAAAAAAAAAhQGZmZmZmZiFAmpmZmZmZIUDNzMzMzMwgQJqZmZmZmSFAAAAAAAAAIUBmZmZmZmYiQJqZmZmZmSFAMzMzMzMzIkDNzMzMzMwiQM3MzMzMzCJAMzMzMzMzIUDNzMzMzMwgQDMzMzMzMyJAZmZmZmZmIUDNzMzMzMwgQM3MzMzMzCBAmpmZmZmZIECamZmZmZkgQGZmZmZmZiBAMzMzMzMzIEBmZmZmZmYhQM3MzMzMzCBAmpmZmZmZIEBmZmZmZmYeQDMzMzMzMx9AmpmZmZmZH0AAAAAAAAAhQJqZmZmZmSJAZmZmZmZmIUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==","dtype":"float64","shape":[110]},"index":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109]},"selected":{"id":"22b45992-79ea-413a-9190-3a488c02ccf6","type":"Selection"},"selection_policy":{"id":"bb7a528a-578f-4102-b79c-ca459d59631a","type":"UnionRenderers"}},"id":"917ce653-c68b-4ebe-bcd5-da982b698b01","type":"ColumnDataSource"},{"attributes":{},"id":"706ccc97-9704-406a-86cf-174d1ee3f3da","type":"BasicTicker"},{"attributes":{"below":[{"id":"68f60e40-f0c6-4a12-889e-345659d89a5d","type":"LinearAxis"}],"left":[{"id":"3e8ab69c-9027-4f29-b865-97def44bd030","type":"LinearAxis"}],"renderers":[{"id":"68f60e40-f0c6-4a12-889e-345659d89a5d","type":"LinearAxis"},{"id":"c4dfedf5-ed12-4d6a-8f63-711e266e264e","type":"Grid"},{"id":"3e8ab69c-9027-4f29-b865-97def44bd030","type":"LinearAxis"},{"id":"52359cf5-7a3a-4ceb-9d4b-4b95f4ecd344","type":"Grid"},{"id":"7ff5df77-4c99-4f8a-aa18-b9ccbcfc0d41","type":"GlyphRenderer"},{"id":"c16f20a2-20f2-4617-b5ff-687f89fc9174","type":"GlyphRenderer"}],"sizing_mode":"scale_both","title":{"id":"fa237e79-c670-4aea-a087-42cf4f628dc6","type":"Title"},"toolbar":{"id":"c301e9ff-26b7-4ca8-8085-f91722fbe30e","type":"Toolbar"},"x_range":{"id":"788ecbc9-ce32-4bdc-87db-ef13c0651dc9","type":"DataRange1d"},"x_scale":{"id":"666dc097-804c-48e5-8f66-7f6c6b05b49c","type":"LinearScale"},"y_range":{"id":"d7f2e61a-469b-4b03-a9b0-5a266bc24d05","type":"DataRange1d"},"y_scale":{"id":"e49160e1-4d34-4e5c-b347-2a365569fe75","type":"LinearScale"}},"id":"2fcb0ae1-45b3-454f-8fe9-173694a5d5b3","subtype":"Figure","type":"Plot"},{"attributes":{"plot":{"id":"2fcb0ae1-45b3-454f-8fe9-173694a5d5b3","subtype":"Figure","type":"Plot"},"ticker":{"id":"a121aab8-f855-4126-b25e-336daf9a220a","type":"BasicTicker"}},"id":"c4dfedf5-ed12-4d6a-8f63-711e266e264e","type":"Grid"},{"attributes":{"callback":{"id":"dfc13aa9-48cd-4f9b-a004-7963eb64c469","type":"OpenURL"}},"id":"59b3624e-18fd-4689-82d9-590933678bb3","type":"TapTool"},{"attributes":{},"id":"22b45992-79ea-413a-9190-3a488c02ccf6","type":"Selection"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"Sequential"},"y":{"field":"imdbRating"}},"id":"55aa4a98-0602-4227-8d11-4fd83c7d5b73","type":"Line"}],"root_ids":["2fcb0ae1-45b3-454f-8fe9-173694a5d5b3"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"33c92b23-e8c7-4b33-bc37-757683a48325","roots":{"2fcb0ae1-45b3-454f-8fe9-173694a5d5b3":"9c05ce1c-1122-4590-998f-b088473f9003"}}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        embed_document(root);
                        clearInterval(timer);
                      }
                      attempts++;
                      if (attempts > 100) {
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing")
                        clearInterval(timer);
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.pydata.org/bokeh/release/bokeh-0.13.0.min.css");
          Bokeh.embed.inject_css("https://cdn.pydata.org/bokeh/release/bokeh-0.13.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.pydata.org/bokeh/release/bokeh-widgets-0.13.0.min.css");
          Bokeh.embed.inject_css("https://cdn.pydata.org/bokeh/release/bokeh-widgets-0.13.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.pydata.org/bokeh/release/bokeh-tables-0.13.0.min.css");
          Bokeh.embed.inject_css("https://cdn.pydata.org/bokeh/release/bokeh-tables-0.13.0.min.css");
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.log("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(js_urls, function() {
          console.log("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();