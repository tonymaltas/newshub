import { Component, OnInit } from '@angular/core';
import { NewsApiArticle } from '../models/news-api-article';
import { NewsSource } from '../models/news-sources';
import { StoreService } from '../store-service/store.service';
import { NewsService } from '../news-service/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  newsArticles: NewsApiArticle[];
  sportArticles: NewsApiArticle[];
  selectedItem: NewsSource;
  
  sources: NewsSource[] =
  [
    {
      name: 'BBC News',
      code: 'bbc-news'
    },
    {	
      name: 'BBC Sport',
      code: 'bbc-sport'
    },
    {
      name: 'Google News',
      code: 'google-news-uk'
    },
    {
      name: 'New Scientist',
      code: 'new-scientist'
    },
    {
      name: 'TechRadar',
      code: 'techradar'
    },
    { 
      name: 'National Geographic ',
      code: 'national-geographic'
    },
    { 
      name: 'Independent',
      code: 'independent'
    },
    {
      name: 'Wired',
      code: 'wired'
    }
  ];

  constructor(private store: StoreService,
             private newsService: NewsService) { }

  ngOnInit() {
    let storedIndex = this.store.getIndex();
    if(!storedIndex) {
      this.changeSource(0); 
    } else {
      this.changeSource(storedIndex);
    }
  }

  changeSource(index: number) {
    this.store.setIndex(index);
    this.selectedItem = this.sources[index];

    this.newsService.getArticlesFromSource(this.selectedItem.code)
      .subscribe(
        (articles: NewsApiArticle[]) => this.newsArticles = articles),
        (error: any) => console.log(error);
  }
}
