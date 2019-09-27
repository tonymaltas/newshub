import { Injectable } from '@angular/core';
import { NewsApiArticle } from '../models/news-api-article';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private httpClient: HttpClient) { }

  getArticlesFromSource(source:string): Observable<NewsApiArticle[]> {
    var newsUrl = 'https://newsapi.org/v2/top-headlines?' +
    `sources=${source}`;

    return this.httpClient.get<any>(newsUrl, { headers: {'X-Api-Key':'30291bdcd5914e998e1cdff0dd8eacea'}})
    .pipe(
      switchMap((result: any)=> {
        return of(result.articles)
      })
    );
  }
}
