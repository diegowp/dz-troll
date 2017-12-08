;(function(){

    function cache(){

        return{
            trollLink: document.getElementById("troll_link"),
            trollImg: document.getElementById("troll_img")
        }

    }

    function selectBrowser(){
        var client = chrome || browser;
        return client;
    }

    function saveOptions(){

        var self = selectBrowser();

        var saveButton  = document.querySelector(".options-wrapper button"),
            response    = document.querySelector(".options-response");

        saveButton.onclick = function(){

            var trollLink   = cache().trollLink.value,
                trollImg    = cache().trollImg.value;

            self.storage.sync.set({
                troll_link: trollLink,
                troll_img: trollImg
            }, function(){

                setTimeout(function(){

                    response.innerHTML = "Salvo com sucesso!";

                }, 500);

            });

        };

    }

    function loadOptions(){

        var self = selectBrowser();

        var trollLink = cache().trollLink,
            trollImg  = cache().trollImg;

        self.storage.sync.get( function( items ){

            trollLink.value = items.troll_link;
            trollImg.value = items.troll_img;

        } );

    }

    function init(){
        saveOptions();
        loadOptions();
    }

    window.document.addEventListener("DOMContentLoaded", init() );

})();
