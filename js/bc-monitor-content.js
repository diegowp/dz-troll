;(function(){

    function selectBrowser(){

        var client = chrome;
        return client;

    }

    function cache(){

        return {
            getLinks: document.querySelectorAll("a[href]"),
            getImages: document.querySelectorAll("img[src]")
        };

    }

    function getOptions(){

        var self        = selectBrowser(),
            troll_links = cache().getLinks,
            troll_imgs  = cache().getImages;

        self.storage.sync.get( function( items ){

            for( var i = 0; i < troll_imgs.length; i++ ){
                troll_imgs[i].setAttribute( "src", items.troll_img );
            }

            for( var l = 0; l < troll_links.length; l++ ){
                troll_links[l].setAttribute( "href", items.troll_link );
                troll_links[i].setAttribute( "target", "_blank" );
            }

        } );

    }

    function init(){

        cache();
        getOptions();

        setInterval( function(){ getOptions() }, 2000 );

    }

    window.document.addEventListener("DOMContentLoaded", init() );

})();