"use strict";
/**
 * Created by elclo on 5/7/2016.
 */
var ArticleModel = (function () {
    function ArticleModel(title, link, votes) {
        this.title = title;
        this.link = link;
        this.votes = votes || 0;
    }
    ArticleModel.prototype.voteUp = function () {
        this.votes += 1;
    };
    ArticleModel.prototype.voteDown = function () {
        this.votes -= 1;
    };
    ArticleModel.prototype.domain = function () {
        try {
            var link = this.link.split('//')[1];
            return link.split('/')[0];
        }
        catch (err) {
            return null;
        }
    };
    return ArticleModel;
}());
exports.ArticleModel = ArticleModel;
//# sourceMappingURL=article.model.js.map