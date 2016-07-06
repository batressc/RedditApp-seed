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
 * Created by elclo on 4/7/2016.
 */
var core_1 = require('@angular/core');
var reddit_article_component_1 = require('./reddit-article.component');
var article_model_1 = require('./model/article.model');
var RedditAppComponent = (function () {
    function RedditAppComponent() {
        this.articles = [
            new article_model_1.ArticleModel('Angular 2', 'http://angular.io', 3),
            new article_model_1.ArticleModel('Fullstack', 'http://fullstack.io', 2),
            new article_model_1.ArticleModel('Angular Homepage', 'http://angular.io', 1)
        ];
    }
    RedditAppComponent.prototype.addArticle = function (title, link) {
        console.log("Adding article title: " + title.value + " and link: " + link.value);
        this.articles.push(new article_model_1.ArticleModel(title.value, link.value, 0));
        title.value = '';
        link.value = '';
    };
    RedditAppComponent.prototype.sortedArticles = function () {
        return this.articles.sort(function (a, b) { return b.votes - a.votes; });
    };
    RedditAppComponent = __decorate([
        core_1.Component({
            selector: 'reddit',
            directives: [reddit_article_component_1.ArticleComponent],
            template: "\n        <form class=\"ui large form segment\">\n            <h3 class=\"ui header\">Add a link</h3>\n            <div class=\"field\">\n                <label for=\"title\">Title:</label>\n                <!-- Esto se llama 'resolve' (#newtitle) -->\n                <input type=\"text\" name=\"title\" #newtitle />\n            </div>\n            <div class=\"field\">\n                <label for=\"link\">Link:</label>\n                <input type=\"text\" name=\"link\" #newlink />\n            </div>\n            \n            <button (click)=\"addArticle(newtitle, newlink)\" class=\"ui positive right floated button\">Submit link</button>\n        </form>\n        <div class=\"ui grid posts\">\n            <reddit-article *ngFor=\"let article of sortedArticles()\" [article]=\"article\"></reddit-article>\n        </div> "
        }), 
        __metadata('design:paramtypes', [])
    ], RedditAppComponent);
    return RedditAppComponent;
}());
exports.RedditAppComponent = RedditAppComponent;
//# sourceMappingURL=reddit-app.component.js.map