import { Component, OnInit } from '@angular/core';
import {SearchRequestService} from '../search-request.service';
import {Repository} from '../repository';
import {User} from '../user';

import {Search} from '../search';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
    providers: [SearchRequestService],
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {
    public searchMe = 'kuya-ui';
    public githubUser: any;

    users!: User ;
    repository!: Repository;
    public searchRepo: any;
    public resultCount = 12;


    findUser(username:any) {
        this.githubUser = '';
        this.searchMe  = username;
        this.ngOnInit();
    }


  constructor(public githubUserRequest: SearchRequestService, public userRepos: SearchRequestService) { }

  ngOnInit() {
      this.githubUserRequest.githubUser(this.searchMe);
      this.users = this.githubUserRequest.users;
      this.userRepos.gitUserRepos(this.searchMe);
      console.log(this.userRepos);
  }


    searchRepos() {
        this.searchRepo = '';
        this.resultCount = 10;

    }
}