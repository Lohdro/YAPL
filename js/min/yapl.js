var Yapl=function(l){"use strict";var s;return{settings:{body:$(".js-sg-body"),navToggle:$(".js-sg-nav-toggle"),blockToggles:$(".js-sg-block__expand-toggle"),blockToggleAll:$(".js-sg-toggle-all"),allOpen:!1},init:function(){s=$.extend({},this.settings,l),s.body&&s.body.length&&this.bindUIActions()},bindUIActions:function(){s.navToggle.on("click",Yapl.toggleNav),s.blockToggles.on("click",Yapl.toggleBlock),s.blockToggleAll.on("click",Yapl.toggleAllBlocks)},toggleNav:function(){s.body.toggleClass("is-showing-nav")},toggleBlock:function(){var l=$(this),s=l.closest(".js-sg-block"),o=s.find(".js-sg-block__more");s.toggleClass("module-is-collapsed module-is-expanded"),o.toggleClass("is-collapsed is-expanded")},toggleAllBlocks:function(){s.blockToggles.each(s.allOpen?Yapl.collapseBlock:Yapl.expandBlock),s.blockToggleAll.toggleClass("sg-blocks-collapsed sg-blocks-expanded"),s.allOpen=!s.allOpen},expandBlock:function(){var l=$(this),s=l.closest(".js-sg-block"),o=s.find(".js-sg-block__more");s.addClass("module-is-expanded").removeClass("module-is-collapsed"),o.addClass("is-expanded").removeClass("is-collapsed")},collapseBlock:function(){var l=$(this),s=l.closest(".js-sg-block"),o=s.find(".js-sg-block__more");s.addClass("module-is-collapsed").removeClass("module-is-expanded"),o.addClass("is-collapsed").removeClass("is-expanded")}}}();Yapl.init();