import { Component, OnInit } from '@angular/core';
import { Post } from '../post.model';

@Component({
    selector: 'app-post-list',
    templateUrl: './post-list.component.html',
    styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

    posts: Post[] = [
        { title: '1st Post', content: 'This is the 1st post.' },
        { title: '2nd Post', content: 'This is the 2nd post.' },
        { title: '3rd Post', content: 'This is the 3rd post.' },
    ];

    // posts: Post[] = [];
    constructor() {}

    ngOnInit(): void {
    }

}
