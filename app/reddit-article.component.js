"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by elclo on 5/7/2016.
 */
var core_1 = require('@angular/core');
var ArticleComponent = (function () {
    function ArticleComponent() {
    }
    ArticleComponent.prototype.voteUp = function () {
        this.article.voteUp();
        //Ponemos esta instruccion para que no se refresque la pagina (debido a la propagacion de eventos)
        return false;
    };
    ArticleComponent.prototype.voteDown = function () {
        this.article.voteDown();
        //Ponemos esta instruccion para que no se refresque la pagina (debido a la propagacion de eventos)
        return false;
    };
    ArticleComponent = __decorate([
        core_1.Component({
            selector: 'reddit-article',
            // Se indica que se escribiran valores en la etiqueta padre
            // ejemplo: <reddit-article class="row"></reddit-article>
            host: {
                class: 'row'
            },
            //Esto se mapea respecto a una propiedad
            inputs: ['article'],
            template: "\n        <div class=\"four wide column center aligned votes\">\n            <div class=\"ui statistic\">\n                <div class=\"value\">{{ article.votes }}</div>\n                <div class=\"label\">Points</div>\n            </div>\n        </div>\n        <div class=\"twelve wide column\">\n            <a class=\"ui large header\" href=\"{{ article.link }}\">{{ article.title }}</a>\n            <div class=\"meta\">({{ article.domain() }})</div>\n            <ul class=\"ui big horizontal list voters\">\n                <li class=\"item\">\n                    <a href (click)=\"voteUp()\">\n                        <i class=\"arrow up icon\"></i>\n                        upvote\n                    </a>   \n                </li>\n                <li class=\"item\">\n                    <a href (click)=\"voteDown()\">\n                        <i class=\"arrow down icon\"></i>\n                        downvote\n                    </a>   \n                </li>\n            </ul>\n        </div>"
        }), 
        __metadata('design:paramtypes', [])
    ], ArticleComponent);
    return ArticleComponent;
}());
exports.ArticleComponent = ArticleComponent;
//# sourceMappingURL=reddit-article.component.js.map