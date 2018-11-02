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
      };var element = document.getElementById("30c64552-91dc-4615-9345-62bbc86f23b8");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '30c64552-91dc-4615-9345-62bbc86f23b8' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"f181ffdd-5cad-4161-970e-c3780424766b":{"roots":{"references":[{"attributes":{"axis_label":"Episode Number","formatter":{"id":"5f2a9c0b-cbe3-4687-a07f-b339c6be0b2b","type":"BasicTickFormatter"},"plot":{"id":"5544e5b1-942c-42f4-be7c-31d396eaefbe","subtype":"Figure","type":"Plot"},"ticker":{"id":"b81bc7e4-53ad-4f39-9025-c53a047b6d7f","type":"BasicTicker"}},"id":"76902ae3-fd3b-49e0-b755-31d0da5dfcae","type":"LinearAxis"},{"attributes":{"plot":null,"text":"IMDb Ratings for The West Wing"},"id":"a3b78478-4e10-40e5-b7ba-c824a3aa4856","type":"Title"},{"attributes":{},"id":"b2659b92-1842-4b7e-8ea4-ed7396d4e051","type":"Selection"},{"attributes":{},"id":"5f2a9c0b-cbe3-4687-a07f-b339c6be0b2b","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"aa5279c1-fb92-4cf1-ae0d-9170d64277d2","type":"ColumnDataSource"}},"id":"4a267896-380b-4f2e-ac28-14a11082e6c3","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"Sequential"},"y":{"field":"imdbRating"}},"id":"c84ab072-09cf-4c06-acb4-ae62791cdfef","type":"Line"},{"attributes":{"data_source":{"id":"aa5279c1-fb92-4cf1-ae0d-9170d64277d2","type":"ColumnDataSource"},"glyph":{"id":"7281ca98-eabe-4812-a369-15870c32a7e0","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"682ae629-a7d6-4035-8c73-9d06bb31726d","type":"Circle"},"selection_glyph":null,"view":{"id":"4a267896-380b-4f2e-ac28-14a11082e6c3","type":"CDSView"}},"id":"22cd3cbe-0601-4904-a80c-f9d52c1b00d8","type":"GlyphRenderer"},{"attributes":{"callback":null,"data":{"Episode":["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22"],"FQEpisode":["0101","0102","0103","0104","0105","0106","0107","0108","0109","0110","0111","0112","0113","0114","0115","0116","0117","0118","0119","0120","0121","0122","0201","0202","0203","0204","0205","0206","0207","0208","0209","0210","0211","0212","0213","0214","0215","0216","0217","0218","0219","0220","0221","0222","0301","0302","0303","0304","0305","0306","0307","0308","0309","0310","0311","0312","0313","0314","0315","0316","0317","0318","0319","0320","0321","0322","0401","0402","0403","0404","0405","0406","0407","0408","0409","0410","0411","0412","0413","0414","0415","0416","0417","0418","0419","0420","0421","0422","0423","0501","0502","0503","0504","0505","0506","0507","0508","0509","0510","0511","0512","0513","0514","0515","0516","0517","0518","0519","0520","0521","0522","0601","0602","0603","0604","0605","0606","0607","0608","0609","0610","0611","0612","0613","0614","0615","0616","0617","0618","0619","0620","0621","0622","0701","0702","0703","0704","0705","0706","0707","0708","0709","0710","0711","0712","0713","0714","0715","0716","0717","0718","0719","0720","0721","0722"],"Released":{"__ndarray__":"AAAArFVMa0IAAIA811BrQgAAAM1YVWtCAACAXdpZa0IAAADuW15rQgAAAA9fZ2tCAACAn+Bra0IAAAAwYnBrQgAAgMDjdGtCAAAAcmiCa0IAAIAj7Y9rQgAAALRulGtCAAAA1XGda0IAAAD2dKZrQgAAgIb2qmtCAAAAF3iva0IAAABZfsFrQgAAAHqBymtCAACAKwbYa0IAAAC8h9xrQgAAgEwJ4WtCAAAA3Yrla0IAAAAnqj9sQgAAACeqP2xCAAAASK1IbEIAAIDYLk1sQgAAAGmwUWxCAACA+TFWbEIAAACKs1psQgAAgBo1X2xCAAAAq7ZjbEIAAIBcO3FsQgAAAA7AfmxCAAAAL8OHbEIAAABQxpBsQgAAgOBHlWxCAAAAccmZbEIAAIABS55sQgAAgCJOp2xCAAAA1NK0bEIAAICFV8JsQgAAABbZxmxCAACAplrLbEIAAAA33M9sQgAAAIH7KW1CAACAEX0ubUIAAACi/jJtQgAAgDKAN21CAAAAwwE8bUIAAIBTg0BtQgAAAOQERW1CAACAdIZJbUIAAAAFCE5tQgAAACYLV21CAAAAaBFpbUIAAID4km1tQgAAgBmWdm1CAAAAqhd7bUIAAIBbnIhtQgAAAOwdjW1CAACAnaKabUIAAAAuJJ9tQgAAAHAqsW1CAACAAKy1bUIAAACRLbptQgAAgCGvvm1CAACASssPbkIAAIBKyw9uQgAAANtMFG5CAACAa84YbkIAAAD8Tx1uQgAAAB1TJm5CAACArdQqbkIAAAA+Vi9uQgAAgM7XM25CAAAAX1k4bkIAAACAXEFuQgAAAMJiU25CAACAUuRXbkIAAAAEaWVuQgAAgJTqaW5CAAAAJWxubkIAAIC17XJuQgAAgPfzhG5CAAAAiHWJbkIAAIA5+pZuQgAAAMp7m25CAACAWv2fbkIAAADrfqRuQgAAgKQc+m5CAAAANZ7+bkIAAIDFHwNvQgAAgOYiDG9CAAAAd6QQb0IAAIAHJhVvQgAAAJinGW9CAACAKCkeb0IAAIBJLCdvQgAAABy0PW9CAACArDVCb0IAAABeuk9vQgAAgO47VG9CAAAAf71Yb0IAAIAPP11vQgAAAKDAYW9CAACAUUVvb0IAAADixnNvQgAAgJNLgW9CAAAAJM2Fb0IAAABF0I5vQgAAgNVRk29CAACAQHT2b0IAAADR9fpvQgAAgGF3/29CAAAAefwBcEIAAEBBPQRwQgAAgAl+BnBCAADA0b4IcEIAAACa/wpwQgAAQGJADXBCAAAAuwIUcEIAAECDQxZwQgAAgEuEGHBCAADAE8UacEIAAECkRh9wQgAAgGyHIXBCAADANMgjcEIAAAD9CCZwQgAAQMVJKHBCAACAjYoqcEIAAMBVyyxwQgAAAB4ML3BCAABA5kwxcEIAAEBDqWhwQgAAgAvqanBCAADA0yptcEIAAACca29wQgAAQGSscXBCAACALO1zcEIAAMD0LXZwQgAAwBUxf3BCAAAA3nGBcEIAAAD/dIpwQgAAQMe1jHBCAACAj/aOcEIAAEAJvJ5wQgAAgNH8oHBCAADAmT2jcEIAAABifqVwQgAAQCq/p3BCAACA8v+pcEIAAMC6QKxwQgAAAIOBrnBCAABAS8KwcEIAAIATA7NwQg==","dtype":"float64","shape":[155]},"Season":["1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","2","2","2","2","2","2","2","2","2","2","2","2","2","2","2","2","2","2","2","2","2","2","3","3","3","3","3","3","3","3","3","3","3","3","3","3","3","3","3","3","3","3","3","3","4","4","4","4","4","4","4","4","4","4","4","4","4","4","4","4","4","4","4","4","4","4","4","5","5","5","5","5","5","5","5","5","5","5","5","5","5","5","5","5","5","5","5","5","5","6","6","6","6","6","6","6","6","6","6","6","6","6","6","6","6","6","6","6","6","6","6","7","7","7","7","7","7","7","7","7","7","7","7","7","7","7","7","7","7","7","7","7","7"],"Sequential":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154],"Title":["Pilot","Post Hoc, Ergo Propter Hoc","A Proportional Response","Five Votes Down","The Crackpots and These Women","Mr. Willis of Ohio","The State Dinner","Enemies","The Short List","In Excelsis Deo","Lord John Marbury","He Shall, from Time to Time...","Take Out the Trash Day","Take This Sabbath Day","Celestial Navigation","20 Hours in L.A.","The White House Pro-Am","Six Meetings Before Lunch","Let Bartlet Be Bartlet","Mandatory Minimums","Lies, Damn Lies and Statistics","What Kind of Day Has It Been","In the Shadow of Two Gunmen: Part I","In the Shadow of Two Gunmen: Part II","The Midterms","In This White House","And It&#x27;s Surely to Their Credit","The Lame Duck Congress","The Portland Trip","Shibboleth","Galileo","No\\u00ebl","The Leadership Breakfast","The Drop In","Bartlet&#x27;s Third State of the Union","The War at Home","Ellie","Somebody&#x27;s Going to Emergency, Somebody&#x27;s Going to Jail","The Stackhouse Filibuster","17 People","Bad Moon Rising","The Fall&#x27;s Gonna Kill You","18th and Potomac","Two Cathedrals","Isaac and Ishmael","Manchester: Part I","Manchester: Part II","Ways and Means","On the Day Before","War Crimes","Gone Quiet","The Indians in the Lobby","The Women of Qumar","Bartlet for America","H. Con-172","100,000 Airplanes","The Two Bartlets","Night Five","Hartsfield&#x27;s Landing","Dead Irish Writers","The U.S. Poet Laureate","Stirred","Enemies Foreign and Domestic","The Black Vera Wang","We Killed Yamamoto","Posse Comitatus","20 Hours in America: Part I","20 Hours in America: Part II","College Kids","The Red Mass","Debate Camp","Game On","Election Night","Process Stories","Swiss Diplomacy","Arctic Radar","Holy Night","Guns Not Butter","The Long Goodbye","Inauguration: Part 1","Inauguration: Part 2 - Over There","The California 47th","Red Haven&#x27;s on Fire","Privateers","Angel Maintenance","Evidence of Things Not Seen","Life on Mars","Commencement","Twenty Five","7A WF 83429","The Dogs of War","Jefferson Lives","Han","Constituency of One","Disaster Relief","Separation of Powers","Shutdown","Abu el Banat","The Stormy Present","The Benign Prerogative","Slow News Day","The Warfare of Genghis Khan","An Khe","Full Disclosure","Eppur Si Muove","The Supremes","Access","Talking Points","No Exit","Gaza","Memorial Day","N.S.F. Thurmont","The Birnam Wood","Third-Day Story","Liftoff","The Hubbert Peak","The Dover Test","A Change Is Gonna Come","In the Room","Impact Winter","Faith-Based Initiative","Opposition Research","365 Days","King Corn","The Wake Up Call","Freedonia","Drought Conditions","A Good Day","La Palabra","Ninety Miles Away","In God We Trust","Things Fall Apart","2162 Votes","The Ticket","The Mommy Problem","Message of the Week","Mr. Frost","Here Today","The Al Smith Dinner","The Debate","Undecideds","The Wedding","Running Mates","Internal Displacement","Duck and Cover","The Cold","Two Weeks Out","Welcome to Wherever You Are","Election Day: Part 1","Election Day: Part 2","Requiem","Transition","The Last Hurrah","Institutional Memory","Tomorrow"],"colors":["#1b9e77","#1b9e77","#1b9e77","#1b9e77","#1b9e77","#1b9e77","#1b9e77","#1b9e77","#1b9e77","#1b9e77","#1b9e77","#1b9e77","#1b9e77","#1b9e77","#1b9e77","#1b9e77","#1b9e77","#1b9e77","#1b9e77","#1b9e77","#1b9e77","#1b9e77","#d95f02","#d95f02","#d95f02","#d95f02","#d95f02","#d95f02","#d95f02","#d95f02","#d95f02","#d95f02","#d95f02","#d95f02","#d95f02","#d95f02","#d95f02","#d95f02","#d95f02","#d95f02","#d95f02","#d95f02","#d95f02","#d95f02","#7570b3","#7570b3","#7570b3","#7570b3","#7570b3","#7570b3","#7570b3","#7570b3","#7570b3","#7570b3","#7570b3","#7570b3","#7570b3","#7570b3","#7570b3","#7570b3","#7570b3","#7570b3","#7570b3","#7570b3","#7570b3","#7570b3","#e7298a","#e7298a","#e7298a","#e7298a","#e7298a","#e7298a","#e7298a","#e7298a","#e7298a","#e7298a","#e7298a","#e7298a","#e7298a","#e7298a","#e7298a","#e7298a","#e7298a","#e7298a","#e7298a","#e7298a","#e7298a","#e7298a","#e7298a","#66a61e","#66a61e","#66a61e","#66a61e","#66a61e","#66a61e","#66a61e","#66a61e","#66a61e","#66a61e","#66a61e","#66a61e","#66a61e","#66a61e","#66a61e","#66a61e","#66a61e","#66a61e","#66a61e","#66a61e","#66a61e","#66a61e","#1b9e77","#1b9e77","#1b9e77","#1b9e77","#1b9e77","#1b9e77","#1b9e77","#1b9e77","#1b9e77","#1b9e77","#1b9e77","#1b9e77","#1b9e77","#1b9e77","#1b9e77","#1b9e77","#1b9e77","#1b9e77","#1b9e77","#1b9e77","#1b9e77","#1b9e77","#d95f02","#d95f02","#d95f02","#d95f02","#d95f02","#d95f02","#d95f02","#d95f02","#d95f02","#d95f02","#d95f02","#d95f02","#d95f02","#d95f02","#d95f02","#d95f02","#d95f02","#d95f02","#d95f02","#d95f02","#d95f02","#d95f02"],"imdbID":["tt0745667","tt0745669","tt0745591","tt0745620","tt0745690","tt0745659","tt0745706","tt0745615","tt0745704","tt0745635","tt0745652","tt0745631","tt0745682","tt0745683","tt0745602","tt0745585","tt0745716","tt0745677","tt0745648","tt0745655","tt0745649","tt0745728","tt0745639","tt0745640","tt0745700","tt0745637","tt0745595","tt0745697","tt0745702","tt0745675","tt0745623","tt0745664","tt0745698","tt0745693","tt0745600","tt0745713","tt0745614","tt0745679","tt0745705","tt0745581","tt0745598","tt0745694","tt0745582","tt0745721","tt0745644","tt0745653","tt0745654","tt0745725","tt0745665","tt0745724","tt0745626","tt0745696","tt0745717","tt0745599","tt0745628","tt0745580","tt0745710","tt0745661","tt0745630","tt0745606","tt0745711","tt0745680","tt0745616","tt0745688","tt0745726","tt0745668","tt0745583","tt2726258","tt0745603","tt0745703","tt0745607","tt0745624","tt0745613","tt0745671","tt0745681","tt0745597","tt0745633","tt0745627","tt0745699","tt0745642","tt0745641","tt0745601","tt0745672","tt0745670","tt0745596","tt0745618","tt0745650","tt0745604","tt0745720","tt0745588","tt0745609","tt0745645","tt0745629","tt0745605","tt0745608","tt0745674","tt0745676","tt0745592","tt0745707","tt0745686","tt0745678","tt0745714","tt0745594","tt0745622","tt0745617","tt0745708","tt0745593","tt0745684","tt0745663","tt0745625","tt0745656","tt0745660","tt0745687","tt0745719","tt0745651","tt0745695","tt0745692","tt0745589","tt0745638","tt0745634","tt0745619","tt0745666","tt0745587","tt0745646","tt0745712","tt0745621","tt0745610","tt0745590","tt0745647","tt0745662","tt0745636","tt0745718","tt0745586","tt0745709","tt0745701","tt0745657","tt0745658","tt0745632","tt0745685","tt0745691","tt0745723","tt0745715","tt0745673","tt0745643","tt0745611","tt0745689","tt0745722","tt0745727","tt0745612","tt0779710","tt0761559","tt0779711","tt0779709","tt0771575","tt0771576"],"imdbRating":{"__ndarray__":"mpmZmZmZIUCamZmZmZkgQGZmZmZmZiFAmpmZmZmZIEBmZmZmZmYhQJqZmZmZmSFAzczMzMzMIEBmZmZmZmYgQGZmZmZmZiFAMzMzMzMzIkCamZmZmZkgQGZmZmZmZiFAMzMzMzMzIUDNzMzMzMwhQAAAAAAAACJAMzMzMzMzIECamZmZmZkfQJqZmZmZmSBAAAAAAAAAIkDNzMzMzMwgQDMzMzMzMyFAZmZmZmZmIkAAAAAAAAAjQJqZmZmZmSJAzczMzMzMIECamZmZmZkhQAAAAAAAACFAMzMzMzMzH0AAAAAAAAAgQAAAAAAAACFAzczMzMzMIEDNzMzMzMwiQDMzMzMzMyBAAAAAAAAAIEDNzMzMzMwgQAAAAAAAACFAmpmZmZmZIEBmZmZmZmYhQM3MzMzMzCFAzczMzMzMIUBmZmZmZmYhQAAAAAAAACFAAAAAAAAAIkBmZmZmZmYjQJqZmZmZmSBAmpmZmZmZIECamZmZmZkgQJqZmZmZmR9AMzMzMzMzIEAAAAAAAAAgQAAAAAAAACBAmpmZmZmZIEAAAAAAAAAgQDMzMzMzMyJAMzMzMzMzIEAzMzMzMzMgQAAAAAAAACBAmpmZmZmZIEAAAAAAAAAhQM3MzMzMzCBAMzMzMzMzIEDNzMzMzMwgQAAAAAAAACFAmpmZmZmZIEDNzMzMzMwgQDMzMzMzMyJAmpmZmZmZIUDNzMzMzMwhQDMzMzMzMyBAmpmZmZmZH0BmZmZmZmYgQAAAAAAAACJAMzMzMzMzIUCamZmZmZkfQM3MzMzMzB5AmpmZmZmZH0BmZmZmZmYgQDMzMzMzMx9AAAAAAAAAHkAAAAAAAAAgQJqZmZmZmSBAAAAAAAAAIECamZmZmZkfQAAAAAAAAB5AzczMzMzMHkCamZmZmZkgQGZmZmZmZiFAAAAAAAAAIkCamZmZmZkiQDMzMzMzMyFAZmZmZmZmIEBmZmZmZmYeQDMzMzMzMx9AzczMzMzMHkDNzMzMzMweQAAAAAAAACBAZmZmZmZmIUDNzMzMzMweQGZmZmZmZh5AzczMzMzMHkAzMzMzMzMgQJqZmZmZmR9AzczMzMzMHkDNzMzMzMweQM3MzMzMzB5AZmZmZmZmIkBmZmZmZmYcQM3MzMzMzB5AAAAAAAAAIEAAAAAAAAAhQJqZmZmZmSBAMzMzMzMzIEDNzMzMzMwgQAAAAAAAACBAzczMzMzMIEDNzMzMzMweQGZmZmZmZh5AMzMzMzMzH0DNzMzMzMwgQDMzMzMzMyFAMzMzMzMzIECamZmZmZkfQDMzMzMzMx9AAAAAAAAAIEAzMzMzMzMfQJqZmZmZmSBAAAAAAAAAIEAAAAAAAAAhQJqZmZmZmSBAMzMzMzMzHUBmZmZmZmYgQDMzMzMzMyBAzczMzMzMIUAAAAAAAAAgQJqZmZmZmR9AmpmZmZmZH0CamZmZmZkfQM3MzMzMzCBAAAAAAAAAIECamZmZmZkhQDMzMzMzMyBAmpmZmZmZH0BmZmZmZmYgQDMzMzMzMyBAAAAAAAAAIUCamZmZmZkgQDMzMzMzMyBAMzMzMzMzH0AzMzMzMzMhQDMzMzMzMyJAzczMzMzMIUAAAAAAAAAhQJqZmZmZmSBAMzMzMzMzIUDNzMzMzMwhQA==","dtype":"float64","shape":[155]},"index":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154]},"selected":{"id":"b2659b92-1842-4b7e-8ea4-ed7396d4e051","type":"Selection"},"selection_policy":{"id":"2a8f0c64-f826-444a-b523-a341e4c6ae78","type":"UnionRenderers"}},"id":"aa5279c1-fb92-4cf1-ae0d-9170d64277d2","type":"ColumnDataSource"},{"attributes":{"url":"https://imdb.com/title/@imdbID/"},"id":"d741ffbc-6e8e-4b8f-b33c-e874d928efa0","type":"OpenURL"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"Sequential"},"y":{"field":"imdbRating"}},"id":"682ae629-a7d6-4035-8c73-9d06bb31726d","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.75},"fill_color":{"field":"colors"},"line_alpha":{"value":0.75},"line_color":{"field":"colors"},"size":{"units":"screen","value":10},"x":{"field":"Sequential"},"y":{"field":"imdbRating"}},"id":"7281ca98-eabe-4812-a369-15870c32a7e0","type":"Circle"},{"attributes":{"dimension":1,"plot":{"id":"5544e5b1-942c-42f4-be7c-31d396eaefbe","subtype":"Figure","type":"Plot"},"ticker":{"id":"09e08824-4b5f-41fb-a703-21b34cec7c01","type":"BasicTicker"}},"id":"af171c11-f21f-4309-bc2e-7c14f8658172","type":"Grid"},{"attributes":{"source":{"id":"aa5279c1-fb92-4cf1-ae0d-9170d64277d2","type":"ColumnDataSource"}},"id":"fa8b2a58-b079-4f99-8b8f-19f39f830704","type":"CDSView"},{"attributes":{"below":[{"id":"76902ae3-fd3b-49e0-b755-31d0da5dfcae","type":"LinearAxis"}],"left":[{"id":"5d427f9c-6653-4906-95a3-302b076c4a33","type":"LinearAxis"}],"renderers":[{"id":"76902ae3-fd3b-49e0-b755-31d0da5dfcae","type":"LinearAxis"},{"id":"ac109d0c-f486-426c-aa34-201f409c5552","type":"Grid"},{"id":"5d427f9c-6653-4906-95a3-302b076c4a33","type":"LinearAxis"},{"id":"af171c11-f21f-4309-bc2e-7c14f8658172","type":"Grid"},{"id":"22cd3cbe-0601-4904-a80c-f9d52c1b00d8","type":"GlyphRenderer"},{"id":"3f8f3d37-a98a-499d-9b3a-146327dc5e2d","type":"GlyphRenderer"}],"sizing_mode":"scale_both","title":{"id":"a3b78478-4e10-40e5-b7ba-c824a3aa4856","type":"Title"},"toolbar":{"id":"9d6af621-ccd6-4e5c-bfc2-24e0373ef781","type":"Toolbar"},"x_range":{"id":"4739a067-f5e2-4dcc-9971-d0f931c4c097","type":"DataRange1d"},"x_scale":{"id":"f6bb3039-c608-4e4d-a1b3-4020ca98dc36","type":"LinearScale"},"y_range":{"id":"947d15cc-422a-4fe5-8147-e17fe5aad6b7","type":"DataRange1d"},"y_scale":{"id":"82f2ca07-6bf8-4379-828d-cbef4fd57826","type":"LinearScale"}},"id":"5544e5b1-942c-42f4-be7c-31d396eaefbe","subtype":"Figure","type":"Plot"},{"attributes":{"data_source":{"id":"aa5279c1-fb92-4cf1-ae0d-9170d64277d2","type":"ColumnDataSource"},"glyph":{"id":"922b5eb4-1755-4a68-8275-a0595e0a4021","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"c84ab072-09cf-4c06-acb4-ae62791cdfef","type":"Line"},"selection_glyph":null,"view":{"id":"fa8b2a58-b079-4f99-8b8f-19f39f830704","type":"CDSView"}},"id":"3f8f3d37-a98a-499d-9b3a-146327dc5e2d","type":"GlyphRenderer"},{"attributes":{"callback":{"id":"d741ffbc-6e8e-4b8f-b33c-e874d928efa0","type":"OpenURL"}},"id":"4765733e-2a44-4d45-b1fa-69ded35c9f63","type":"TapTool"},{"attributes":{"line_alpha":0.75,"x":{"field":"Sequential"},"y":{"field":"imdbRating"}},"id":"922b5eb4-1755-4a68-8275-a0595e0a4021","type":"Line"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"4765733e-2a44-4d45-b1fa-69ded35c9f63","type":"TapTool"},{"id":"0efc7935-608e-45f7-bb84-8cf5c6bf0425","type":"HoverTool"}]},"id":"9d6af621-ccd6-4e5c-bfc2-24e0373ef781","type":"Toolbar"},{"attributes":{"callback":null},"id":"947d15cc-422a-4fe5-8147-e17fe5aad6b7","type":"DataRange1d"},{"attributes":{"callback":null},"id":"4739a067-f5e2-4dcc-9971-d0f931c4c097","type":"DataRange1d"},{"attributes":{},"id":"82f2ca07-6bf8-4379-828d-cbef4fd57826","type":"LinearScale"},{"attributes":{},"id":"f6bb3039-c608-4e4d-a1b3-4020ca98dc36","type":"LinearScale"},{"attributes":{},"id":"b81bc7e4-53ad-4f39-9025-c53a047b6d7f","type":"BasicTicker"},{"attributes":{"plot":{"id":"5544e5b1-942c-42f4-be7c-31d396eaefbe","subtype":"Figure","type":"Plot"},"ticker":{"id":"b81bc7e4-53ad-4f39-9025-c53a047b6d7f","type":"BasicTicker"}},"id":"ac109d0c-f486-426c-aa34-201f409c5552","type":"Grid"},{"attributes":{"axis_label":"IMDb Rating","formatter":{"id":"526f0c7a-310a-477d-b88e-04fbaf9851e8","type":"BasicTickFormatter"},"plot":{"id":"5544e5b1-942c-42f4-be7c-31d396eaefbe","subtype":"Figure","type":"Plot"},"ticker":{"id":"09e08824-4b5f-41fb-a703-21b34cec7c01","type":"BasicTicker"}},"id":"5d427f9c-6653-4906-95a3-302b076c4a33","type":"LinearAxis"},{"attributes":{},"id":"526f0c7a-310a-477d-b88e-04fbaf9851e8","type":"BasicTickFormatter"},{"attributes":{"callback":null,"renderers":"auto","tooltips":[["Title","@Title"],["Season","@Season"],["Episode","@Episode"],["Rating","@imdbRating"]]},"id":"0efc7935-608e-45f7-bb84-8cf5c6bf0425","type":"HoverTool"},{"attributes":{},"id":"2a8f0c64-f826-444a-b523-a341e4c6ae78","type":"UnionRenderers"},{"attributes":{},"id":"09e08824-4b5f-41fb-a703-21b34cec7c01","type":"BasicTicker"}],"root_ids":["5544e5b1-942c-42f4-be7c-31d396eaefbe"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"f181ffdd-5cad-4161-970e-c3780424766b","roots":{"5544e5b1-942c-42f4-be7c-31d396eaefbe":"30c64552-91dc-4615-9345-62bbc86f23b8"}}];
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