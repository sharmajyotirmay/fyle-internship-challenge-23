import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  repo = 'exists'
  github_data:any;
  repos = <any>[]
  pageCount : number = 10
  user : string = ''
  pageNumber : number = 1
  total_public_repos : number = 0;

  
  getGithub(newUser : string, pages: number, page_count : number){
      this.apiService.getRepo(newUser, pages, page_count).subscribe(
        (res) => {
          console.log(res)
          this.repos = res;
        }
      )
  }

  getUserData(userName : string) {
    this.apiService.getUser(userName).subscribe(
      (res : any) => {
        // console.log(res)
        this.total_public_repos = res.public_repos
        this.github_data = res;
      }
      );
  }

  goNext() {
    if(this.pageNumber >= Math.ceil(this.total_public_repos / this.pageCount)){
      return this.pageNumber = 1;
    }
    return this.pageNumber += 1;
  }

  goPrev() {
    if(this.pageNumber == 1){
      return 1;
    }
    return this.pageNumber -= 1;
  }


  constructor(
    private apiService: ApiService
  ) {}

  ngOnInit() {
  }
}
