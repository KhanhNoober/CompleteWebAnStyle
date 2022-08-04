import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/Services/article.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  articles: any[] = [];
  constructor(private articleService: ArticleService) { }
  ngOnInit(): void {
    this.articleService.getA(1, 10).subscribe((datas: any) => {
      for(let data of datas)
        this.articles.push(data);
    });
    ;
  }

  onReadMore(input: string) {
    window.open(input, '_blank');
  }
}
