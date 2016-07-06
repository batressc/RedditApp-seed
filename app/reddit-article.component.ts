/**
 * Created by elclo on 5/7/2016.
 */
import { Component } from '@angular/core';
import { ArticleModel } from './model/article.model';

@Component({
    selector: 'reddit-article',
    // Se indica que se escribiran valores en la etiqueta padre
    // ejemplo: <reddit-article class="row"></reddit-article>
    host: {
        class: 'row'
    },
    //Esto se mapea respecto a una propiedad
    inputs: ['article'],
    template: `
        <div class="four wide column center aligned votes">
            <div class="ui statistic">
                <div class="value">{{ article.votes }}</div>
                <div class="label">Points</div>
            </div>
        </div>
        <div class="twelve wide column">
            <a class="ui large header" href="{{ article.link }}">{{ article.title }}</a>
            <div class="meta">({{ article.domain() }})</div>
            <ul class="ui big horizontal list voters">
                <li class="item">
                    <a href (click)="voteUp()">
                        <i class="arrow up icon"></i>
                        upvote
                    </a>   
                </li>
                <li class="item">
                    <a href (click)="voteDown()">
                        <i class="arrow down icon"></i>
                        downvote
                    </a>   
                </li>
            </ul>
        </div>`
})
export class ArticleComponent {
    article: ArticleModel;

    constructor() { }

    voteUp(): boolean {
        this.article.voteUp();
        //Ponemos esta instruccion para que no se refresque la pagina (debido a la propagacion de eventos)
        return false;
    }

    voteDown(): boolean {
        this.article.voteDown();
        //Ponemos esta instruccion para que no se refresque la pagina (debido a la propagacion de eventos)
        return false;
    }
}
