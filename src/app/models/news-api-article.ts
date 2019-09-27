export interface Source {
    id: string;
    name: string;
}

export interface NewsApiArticle  {
    source: Source;
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
    show: boolean;
}
