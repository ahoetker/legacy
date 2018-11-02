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
      };var element = document.getElementById("e1a046f4-e602-4372-86c1-1a034cea938b");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'e1a046f4-e602-4372-86c1-1a034cea938b' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"ae51be39-9a32-4044-a7c5-68935db44bb7":{"roots":{"references":[{"attributes":{},"id":"2eca3575-9688-4a90-98a6-53aed775bd54","type":"LinearScale"},{"attributes":{},"id":"8c089485-cc37-4402-9101-a1c14184ca63","type":"BasicTickFormatter"},{"attributes":{"axis_label":"IMDb Rating","formatter":{"id":"8c089485-cc37-4402-9101-a1c14184ca63","type":"BasicTickFormatter"},"plot":{"id":"252642f9-7d59-44b2-aa6d-5236ea1e7925","subtype":"Figure","type":"Plot"},"ticker":{"id":"9fc236b4-fa3e-4747-97ec-11a17d4c4292","type":"BasicTicker"}},"id":"cbd7c214-c287-4953-9fbd-61a2a6dff38d","type":"LinearAxis"},{"attributes":{},"id":"d335df0f-f941-48db-aa2e-dc1452462a78","type":"BasicTickFormatter"},{"attributes":{},"id":"9fc236b4-fa3e-4747-97ec-11a17d4c4292","type":"BasicTicker"},{"attributes":{"callback":null,"renderers":"auto","tooltips":[["Title","@Title"],["Season","@Season"],["Episode","@Episode"],["Rating","@imdbRating"]]},"id":"bbbabc74-7d8e-4d52-960b-9df7e64cc764","type":"HoverTool"},{"attributes":{"source":{"id":"94087c32-55bc-4679-aa43-1f44b22b5862","type":"ColumnDataSource"}},"id":"f9ab884c-55b4-4d2f-8a64-37ab53f6ccf0","type":"CDSView"},{"attributes":{"dimension":1,"plot":{"id":"252642f9-7d59-44b2-aa6d-5236ea1e7925","subtype":"Figure","type":"Plot"},"ticker":{"id":"9fc236b4-fa3e-4747-97ec-11a17d4c4292","type":"BasicTicker"}},"id":"b1236606-dbed-45cb-b70a-f6f73bf6001a","type":"Grid"},{"attributes":{"data_source":{"id":"94087c32-55bc-4679-aa43-1f44b22b5862","type":"ColumnDataSource"},"glyph":{"id":"099ecf3b-1d8a-4fa9-bd0b-1db63494d023","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"78f44a2e-136f-4d38-932d-8b696cd18543","type":"Line"},"selection_glyph":null,"view":{"id":"f9ab884c-55b4-4d2f-8a64-37ab53f6ccf0","type":"CDSView"}},"id":"650c602d-0952-41e4-adb0-db3c561df2b0","type":"GlyphRenderer"},{"attributes":{"callback":{"id":"4ecb9bbb-a845-413a-bb6a-11ecf9c9288f","type":"OpenURL"}},"id":"2cda7ad0-965b-407b-a68b-3b30978e85a3","type":"TapTool"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"Sequential"},"y":{"field":"imdbRating"}},"id":"78f44a2e-136f-4d38-932d-8b696cd18543","type":"Line"},{"attributes":{"line_alpha":0.75,"x":{"field":"Sequential"},"y":{"field":"imdbRating"}},"id":"099ecf3b-1d8a-4fa9-bd0b-1db63494d023","type":"Line"},{"attributes":{},"id":"924ba7a5-3670-424d-8a92-4e544f5b2aad","type":"Selection"},{"attributes":{"source":{"id":"94087c32-55bc-4679-aa43-1f44b22b5862","type":"ColumnDataSource"}},"id":"9e3e053e-ecd5-413c-bb9b-235c019dfa29","type":"CDSView"},{"attributes":{"data_source":{"id":"94087c32-55bc-4679-aa43-1f44b22b5862","type":"ColumnDataSource"},"glyph":{"id":"816ec829-ecfd-40c0-9f40-bc023a54e70f","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"007baa51-7371-4a06-bb42-d98bef7f6af2","type":"Circle"},"selection_glyph":null,"view":{"id":"9e3e053e-ecd5-413c-bb9b-235c019dfa29","type":"CDSView"}},"id":"de66bb6b-20c0-4917-bdf5-3d1e1b131746","type":"GlyphRenderer"},{"attributes":{"axis_label":"Episode Number","formatter":{"id":"d335df0f-f941-48db-aa2e-dc1452462a78","type":"BasicTickFormatter"},"plot":{"id":"252642f9-7d59-44b2-aa6d-5236ea1e7925","subtype":"Figure","type":"Plot"},"ticker":{"id":"401f8205-bd6d-4441-aacd-af64987a45a7","type":"BasicTicker"}},"id":"3c8a7c94-952d-4876-8e18-63307d97cf0e","type":"LinearAxis"},{"attributes":{"plot":null,"text":"IMDb Ratings for Psych"},"id":"3e504ee5-fc03-4f6d-b54e-66f8b461a8ca","type":"Title"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"Sequential"},"y":{"field":"imdbRating"}},"id":"007baa51-7371-4a06-bb42-d98bef7f6af2","type":"Circle"},{"attributes":{"callback":null,"data":{"Episode":["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","1","2","3","4","5","6","7","8","9","10"],"FQEpisode":["0101","0102","0103","0104","0105","0106","0107","0108","0109","0110","0111","0112","0113","0114","0115","0201","0202","0203","0204","0205","0206","0207","0208","0209","0210","0211","0212","0213","0214","0215","0216","0301","0302","0303","0304","0305","0306","0307","0308","0309","0310","0311","0312","0313","0314","0315","0316","0401","0402","0403","0404","0405","0406","0407","0408","0409","0410","0411","0412","0413","0414","0415","0416","0501","0502","0503","0504","0505","0506","0507","0508","0509","0510","0511","0512","0513","0514","0515","0516","0601","0602","0603","0604","0605","0606","0607","0608","0609","0610","0611","0612","0613","0614","0615","0616","0701","0702","0703","0704","0705","0706","0707","0708","0709","0710","0711","0712","0713","0714","0715","0801","0802","0803","0804","0805","0806","0807","0808","0809","0810"],"Released":{"__ndarray__":"AAAAimTEcEIAAEBSpcZwQgAAgBrmyHBCAADA4ibLcEIAAACrZ81wQgAAQHOoz3BCAACAO+nRcEIAAMADKtRwQgAAAHF6A3FCAABAObsFcUIAAIAB/AdxQgAAwMk8CnFCAAAAkn0McUIAAEBavg5xQgAAgCL/EHFCAABA/807cUIAAIDHDj5xQgAAwI9PQHFCAAAAWJBCcUIAAEAg0URxQgAAgOgRR3FCAADAsFJJcUIAAEBB1E1xQgAAgAkVUHFCAACAbB5rcUIAAMBVYnZxQgAAAB6jeHFCAABA5uN6cUIAAICuJH1xQgAAwHZlf3FCAAAAP6aBcUIAAIB0N7NxQgAAwDx4tXFCAAAABbm3cUIAAEDN+blxQgAAgJU6vHFCAADAXXu+cUIAAEDu/MJxQgAAgLY9xXFCAABAUQbecUIAAMACi+txQgAAAMvL7XFCAABAkwzwcUIAAIBbTfJxQgAAwCOO9HFCAAAA7M72cUIAAEC0D/lxQgAAQHoiL3JCAACAQmMxckIAAMAKpDNyQgAAANPkNXJCAACAY2Y6ckIAAMArpzxyQgAAAPTnPnJCAACAhGlDckIAAMBMqkVyQgAAAD3RZnJCAABABRJpckIAAIDNUmtyQgAAwJWTbXJCAAAAXtRvckIAAEAmFXJyQgAAgO5VdHJCAAAAA+ScckIAAEDLJJ9yQgAAgJNloXJCAADAW6ajckIAAAAk56VyQgAAQOwnqHJCAACAtGiqckIAAMB8qaxyQgAAAEXqrnJCAABATzHDckIAAIAXcsVyQgAAAKjzyXJCAABAcDTMckIAAIA4dc5yQgAAgDh1znJCAADAALbQckIAAEDbVi9zQgAAgKOXMXNCAADAa9gzc0IAAAA0GTZzQgAAQPxZOHNCAACAxJo6c0IAAABVHD9zQgAAQB1dQXNCAACA5Z1Dc0IAAECAZlxzQgAAgEinXnNCAADAEOhgc0IAAADZKGNzQgAAQKFpZXNCAACAaapnc0IAAMAx62lzQgAAQC2P0XNCAACA9c/Tc0IAAMC9ENZzQgAAAIZR2HNCAABATpLac0IAAIAW09xzQgAAwN4T33NCAAAAp1Thc0IAAEBvleNzQgAAgDfW5XNCAADA/xboc0IAAADIV+pzQgAAQJCY7HNCAACAWNnuc0IAAIDWOC90QgAAgGDyNnRCAADAKDM5dEIAAADxczt0QgAAQLm0PXRCAACAgfU/dEIAAEDat0Z0QgAAgKL4SHRCAADAajlLdEIAAAAzek10QgAAQPu6T3RC","dtype":"float64","shape":[120]},"Season":["1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","2","2","2","2","2","2","2","2","2","2","2","2","2","2","2","2","3","3","3","3","3","3","3","3","3","3","3","3","3","3","3","3","4","4","4","4","4","4","4","4","4","4","4","4","4","4","4","4","5","5","5","5","5","5","5","5","5","5","5","5","5","5","5","5","6","6","6","6","6","6","6","6","6","6","6","6","6","6","6","6","7","7","7","7","7","7","7","7","7","7","7","7","7","7","7","8","8","8","8","8","8","8","8","8","8"],"Sequential":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119],"Title":["Pilot","Spellingg Bee","Speak Now or Forever Hold Your Piece","Woman Seeking Dead Husband: Smokers Okay, No Pets","9 Lives","Weekend Warriors","Who Ya Gonna Call?","Shawn vs. the Red Phantom","Forget Me Not","From the Earth to Starbucks","He Loves Me, He Loves Me Not, He Loves Me, Oops He&#x27;s Dead","Cloudy... With a Chance of Murder","Game, Set... Muuurder?","Poker? I Barely Know Her","Scary Sherry: Bianca&#x27;s Toast","American Duos","65 Million Years Off","Psy vs. Psy","Zero to Murder in Sixty Seconds","And Down the Stretch Comes Murder","Meat Is Murder, But Murder Is Also Murder","If You&#x27;re So Smart, Then Why Are You Dead?","Rob-a-Bye Baby","Bounty Hunters!","Gus&#x27;s Dad May Have Killed an Old Guy","There&#x27;s Something About Mira","The Old and the Restless","Lights, Camera... Homicidio","Dis-Lodged","Black and Tan: A Crime of Fashion","Shawn (and Gus) of the Dead","Ghosts","Murder?... Anyone?... Anyone?... Bueller?","Daredevils!","The Greatest Adventure in the History of Basic Cable","Disco Didn&#x27;t Die. It Was Murdered!","There Might Be Blood","Talk Derby to Me","Gus Walks Into a Bank","Christmas Joy","Six Feet Under the Sea","Lassie Did a Bad, Bad Thing","Earth, Wind and... Wait for It","Any Given Friday Night at 10PM, 9PM Central","Truer Lies","Tuesday the 17th","An Evening with Mr. Yang","Extradition: British Columbia","He Dead","High Noon-ish","The Devil Is in the Details... And the Upstairs Bedroom","Shawn Gets the Yips","Bollywood Homicide","High Top Fade Out","Let&#x27;s Get Hairy","Shawn Takes a Shot in the Dark","You Can&#x27;t Handle This Episode","Thrill Seekers and Hell Raisers","A Very Juliet Episode","Death Is in the Air","Think Tank","The Head, the Tail, the Whole Damn Episode","Mr. Yin Presents","Romeo and Juliet and Juliet","Feet Don&#x27;t Kill Me Now","Not Even Close... Encounters","Chivalry Is Not Dead... But Someone Is","Shawn and Gus in Drag (Racing)","Viagra Falls","Ferry Tale","Shawn 2.0","One, Maybe Two, Ways Out","Extradition II: The Actual Extradition Part","In Plain Fright","Dual Spires","We&#x27;d Like to Thank the Academy","The Polarizing Express","Dead Bear Walking","Yang 3 in 2D","Shawn Rescues Darth Vader","Last Night Gus","This Episode Sucks","The Amazing Psych-Man &amp; Tap Man, Issue No. 2","Dead Man&#x27;s Curveball","Shawn Interrupted","In for a Penny...","The Tao of Gus","Neil Simon&#x27;s Lover&#x27;s Retreat","Indiana Shawn and the Temple of the Kinda Crappy, Rusty Old Dagger","Heeeeere&#x27;s Lassie","Shawn and the Real Girl","Let&#x27;s Doo-Wop It Again","Autopsy Turvy","True Grits","Santabarbaratown","Santabarbaratown 2","Juliet Takes a Luvvah","Lassie Jerky","No Country for Two Old Men","100 Clues","Cirque du Soul","Deez Nups","Right Turn or Left for Dead","Juliet Wears the Pantsuit","Santa Barbarian Candidate","Office Space","Dead Air","Nip and Suck It","No Trout About It","Psych the Musical","Lock, Stock, Some Smoking Barrels and Burton Guster&#x27;s Goblet of Fire","S.E.I.Z.E. the Day","Remake A.K.A. Cloudy... With a Chance of Improvement","Someone&#x27;s Got a Woody","Cog Blocked","1967: A Psych Odyssey","Shawn and Gus Truck Things Up","A Touch of Sweevil","A Nightmare on State Street","The Break-Up"],"colors":["#1b9e77","#1b9e77","#1b9e77","#1b9e77","#1b9e77","#1b9e77","#1b9e77","#1b9e77","#1b9e77","#1b9e77","#1b9e77","#1b9e77","#1b9e77","#1b9e77","#1b9e77","#d95f02","#d95f02","#d95f02","#d95f02","#d95f02","#d95f02","#d95f02","#d95f02","#d95f02","#d95f02","#d95f02","#d95f02","#d95f02","#d95f02","#d95f02","#d95f02","#7570b3","#7570b3","#7570b3","#7570b3","#7570b3","#7570b3","#7570b3","#7570b3","#7570b3","#7570b3","#7570b3","#7570b3","#7570b3","#7570b3","#7570b3","#7570b3","#e7298a","#e7298a","#e7298a","#e7298a","#e7298a","#e7298a","#e7298a","#e7298a","#e7298a","#e7298a","#e7298a","#e7298a","#e7298a","#e7298a","#e7298a","#e7298a","#66a61e","#66a61e","#66a61e","#66a61e","#66a61e","#66a61e","#66a61e","#66a61e","#66a61e","#66a61e","#66a61e","#66a61e","#66a61e","#66a61e","#66a61e","#66a61e","#1b9e77","#1b9e77","#1b9e77","#1b9e77","#1b9e77","#1b9e77","#1b9e77","#1b9e77","#1b9e77","#1b9e77","#1b9e77","#1b9e77","#1b9e77","#1b9e77","#1b9e77","#1b9e77","#d95f02","#d95f02","#d95f02","#d95f02","#d95f02","#d95f02","#d95f02","#d95f02","#d95f02","#d95f02","#d95f02","#d95f02","#d95f02","#d95f02","#d95f02","#7570b3","#7570b3","#7570b3","#7570b3","#7570b3","#7570b3","#7570b3","#7570b3","#7570b3","#7570b3"],"imdbID":["tt0680222","tt0828981","tt0828980","tt0830108","tt0839433","tt0824606","tt0833804","tt0824605","tt0836429","tt0954465","tt0957124","tt0858238","tt0967060","tt0957838","tt0890819","tt1023767","tt1049285","tt1033338","tt1075613","tt1084533","tt1088640","tt1093707","tt1094913","tt1106318","tt1154545","tt1166956","tt1171346","tt1171466","tt1171465","tt1171464","tt1171467","tt1189416","tt1189424","tt1189425","tt1189426","tt1189427","tt1189428","tt1189429","tt1189430","tt1189431","tt1189417","tt1189418","tt1189419","tt1189420","tt1189421","tt1189422","tt1189423","tt1457627","tt1486056","tt1455948","tt1492122","tt1492123","tt1491375","tt1492124","tt1491376","tt1451567","tt1477463","tt1539854","tt1539852","tt1539853","tt1539438","tt1539855","tt1539856","tt1652241","tt1654405","tt1654406","tt1654407","tt1654408","tt1654409","tt1654410","tt1654411","tt1654412","tt1654399","tt1654398","tt1654401","tt1654400","tt1654402","tt1654403","tt1654404","tt2058449","tt2025155","tt1963577","tt2089322","tt1945887","tt1978995","tt2114131","tt1953073","tt2098363","tt2149921","tt2100161","tt2100162","tt2047299","tt2286931","tt2322035","tt2092746","tt2297632","tt2297652","tt2297654","tt2297656","tt2239834","tt2297658","tt2297660","tt2297662","tt2297684","tt2297680","tt2297682","tt2297678","tt2297674","tt2297690","tt3142346","tt3310524","tt2297688","tt3030772","tt2297692","tt2962654","tt2962662","tt3108888","tt3165012","tt3518202","tt3070054"],"imdbRating":{"__ndarray__":"zczMzMzMIEBmZmZmZmYgQDMzMzMzMyBAMzMzMzMzH0DNzMzMzMwgQGZmZmZmZiBAMzMzMzMzIEAzMzMzMzMgQGZmZmZmZiBAmpmZmZmZIECamZmZmZkgQDMzMzMzMyFAMzMzMzMzH0DNzMzMzMwgQJqZmZmZmSFAzczMzMzMIUAzMzMzMzMhQAAAAAAAACFAAAAAAAAAIEAAAAAAAAAgQGZmZmZmZiBAMzMzMzMzIEAzMzMzMzMfQDMzMzMzMyFAzczMzMzMIECamZmZmZkgQJqZmZmZmSBAMzMzMzMzIkCamZmZmZkfQAAAAAAAACFAmpmZmZmZIUBmZmZmZmYgQAAAAAAAACJAmpmZmZmZH0AzMzMzMzMhQM3MzMzMzCBAmpmZmZmZH0CamZmZmZkgQJqZmZmZmSFAzczMzMzMIEAzMzMzMzMgQM3MzMzMzCFAmpmZmZmZIECamZmZmZkgQDMzMzMzMyBAMzMzMzMzIkDNzMzMzMwiQGZmZmZmZiFAmpmZmZmZH0AAAAAAAAAgQDMzMzMzMyBAZmZmZmZmIEAzMzMzMzMgQGZmZmZmZiFAMzMzMzMzIEAAAAAAAAAiQDMzMzMzMyBAZmZmZmZmIECamZmZmZkgQM3MzMzMzCBAzczMzMzMHkAzMzMzMzMgQM3MzMzMzCJAmpmZmZmZIEAzMzMzMzMhQM3MzMzMzCFAmpmZmZmZH0BmZmZmZmYgQGZmZmZmZiFAmpmZmZmZH0AzMzMzMzMhQDMzMzMzMyFAzczMzMzMIUAzMzMzMzMgQJqZmZmZmSJAAAAAAAAAIUAAAAAAAAAgQGZmZmZmZiBAmpmZmZmZIUBmZmZmZmYhQAAAAAAAACNAMzMzMzMzIUDNzMzMzMwgQAAAAAAAACBAAAAAAAAAIUAzMzMzMzMgQDMzMzMzMyBAzczMzMzMIECamZmZmZkhQAAAAAAAACJAZmZmZmZmIECamZmZmZkgQM3MzMzMzCBAMzMzMzMzIEDNzMzMzMwhQAAAAAAAACFAZmZmZmZmIEDNzMzMzMwgQGZmZmZmZiBAmpmZmZmZIUAzMzMzMzMfQM3MzMzMzCFAmpmZmZmZIEAAAAAAAAAgQJqZmZmZmR9AzczMzMzMIUCamZmZmZkfQJqZmZmZmR9AmpmZmZmZIEBmZmZmZmYgQDMzMzMzMyFAZmZmZmZmIEDNzMzMzMweQAAAAAAAACBAZmZmZmZmIEAzMzMzMzMfQDMzMzMzMx9AAAAAAAAAIECamZmZmZkZQAAAAAAAACNA","dtype":"float64","shape":[120]},"index":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119]},"selected":{"id":"924ba7a5-3670-424d-8a92-4e544f5b2aad","type":"Selection"},"selection_policy":{"id":"793b421b-003e-4a0e-a96e-32a0f3da71b7","type":"UnionRenderers"}},"id":"94087c32-55bc-4679-aa43-1f44b22b5862","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.75},"fill_color":{"field":"colors"},"line_alpha":{"value":0.75},"line_color":{"field":"colors"},"size":{"units":"screen","value":10},"x":{"field":"Sequential"},"y":{"field":"imdbRating"}},"id":"816ec829-ecfd-40c0-9f40-bc023a54e70f","type":"Circle"},{"attributes":{"below":[{"id":"3c8a7c94-952d-4876-8e18-63307d97cf0e","type":"LinearAxis"}],"left":[{"id":"cbd7c214-c287-4953-9fbd-61a2a6dff38d","type":"LinearAxis"}],"renderers":[{"id":"3c8a7c94-952d-4876-8e18-63307d97cf0e","type":"LinearAxis"},{"id":"df23177a-6761-4863-9b25-d84d9e51a336","type":"Grid"},{"id":"cbd7c214-c287-4953-9fbd-61a2a6dff38d","type":"LinearAxis"},{"id":"b1236606-dbed-45cb-b70a-f6f73bf6001a","type":"Grid"},{"id":"de66bb6b-20c0-4917-bdf5-3d1e1b131746","type":"GlyphRenderer"},{"id":"650c602d-0952-41e4-adb0-db3c561df2b0","type":"GlyphRenderer"}],"sizing_mode":"scale_both","title":{"id":"3e504ee5-fc03-4f6d-b54e-66f8b461a8ca","type":"Title"},"toolbar":{"id":"eddaf9ea-3a18-400d-9ac1-51d3fe1bc6ee","type":"Toolbar"},"x_range":{"id":"77420603-21d0-432a-8973-d64cd18d8384","type":"DataRange1d"},"x_scale":{"id":"2eca3575-9688-4a90-98a6-53aed775bd54","type":"LinearScale"},"y_range":{"id":"1931d407-ba13-46f4-aca3-ab0ce6ffcb6c","type":"DataRange1d"},"y_scale":{"id":"e8051bc1-71a3-4066-aaf8-a4aba95606e9","type":"LinearScale"}},"id":"252642f9-7d59-44b2-aa6d-5236ea1e7925","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"401f8205-bd6d-4441-aacd-af64987a45a7","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"2cda7ad0-965b-407b-a68b-3b30978e85a3","type":"TapTool"},{"id":"bbbabc74-7d8e-4d52-960b-9df7e64cc764","type":"HoverTool"}]},"id":"eddaf9ea-3a18-400d-9ac1-51d3fe1bc6ee","type":"Toolbar"},{"attributes":{"url":"https://imdb.com/title/@imdbID/"},"id":"4ecb9bbb-a845-413a-bb6a-11ecf9c9288f","type":"OpenURL"},{"attributes":{"plot":{"id":"252642f9-7d59-44b2-aa6d-5236ea1e7925","subtype":"Figure","type":"Plot"},"ticker":{"id":"401f8205-bd6d-4441-aacd-af64987a45a7","type":"BasicTicker"}},"id":"df23177a-6761-4863-9b25-d84d9e51a336","type":"Grid"},{"attributes":{"callback":null},"id":"1931d407-ba13-46f4-aca3-ab0ce6ffcb6c","type":"DataRange1d"},{"attributes":{"callback":null},"id":"77420603-21d0-432a-8973-d64cd18d8384","type":"DataRange1d"},{"attributes":{},"id":"e8051bc1-71a3-4066-aaf8-a4aba95606e9","type":"LinearScale"},{"attributes":{},"id":"793b421b-003e-4a0e-a96e-32a0f3da71b7","type":"UnionRenderers"}],"root_ids":["252642f9-7d59-44b2-aa6d-5236ea1e7925"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"ae51be39-9a32-4044-a7c5-68935db44bb7","roots":{"252642f9-7d59-44b2-aa6d-5236ea1e7925":"e1a046f4-e602-4372-86c1-1a034cea938b"}}];
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