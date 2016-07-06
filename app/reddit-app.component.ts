/**
 * Created by elclo on 4/7/2016.
 */
import { Component } from '@angular/core';
import { ArticleComponent } from './reddit-article.component';
import { ArticleModel } from './model/article.model';

@Component({
    selector: 'reddit',
    directives: [ArticleComponent],
    template: `
        <form class="ui large form segment">
            <h3 class="ui header">Add a link</h3>
            <div class="field">
                <label for="title">Title:</label>
                <!-- Esto se llama 'resolve' (#newtitle) -->
                <input type="text" name="title" #newtitle />
            </div>
            <div class="field">
                <label for="link">Link:</label>
                <input type="text" name="link" #newlink />
            </div>
            
            <button (click)="addArticle(newtitle, newlink)" class="ui positive right floated button">Submit link</button>
        </form>
        <div class="ui grid posts">
            <reddit-article *ngFor="let article of sortedArticles()" [article]="article"></reddit-article>
        </div> `
})
export class RedditAppComponent {
    articles: ArticleModel[];

    constructor() {
        this.articles = [
            new ArticleModel('Angular 2', 'http://angular.io', 3),
            new ArticleModel('Fullstack', 'http://fullstack.io', 2),
            new ArticleModel('Angular Homepage', 'http://angular.io', 1)
        ];
    }

    addArticle(title: HTMLInputElement, link: HTMLInputElement): void {
        console.log(`Adding article title: ${title.value} and link: ${link.value}`);
        this.articles.push(new ArticleModel(title.value, link.value, 0));
        title.value = '';
        link.value = '';
    }
    
    sortedArticles(): ArticleModel[] {
        return this.articles.sort((a: ArticleModel, b: ArticleModel) => b.votes - a.votes);
    }
}

