import { Component, inject, OnInit } from '@angular/core';
import { Character } from '../../interfaces/character';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-character',
  imports: [],
  templateUrl: './character.component.html',
  styleUrl: './character.component.css'
})
export class CharacterComponent implements OnInit {
  private route = inject(ActivatedRoute);
  character: Character | null = null; 
  private titleService = inject(Title);
  
  ngOnInit(): void {
    this.route.data.subscribe(({ character }) => {
      this.character = character;
      if (this.character !== null) {
        this.titleService.setTitle(this.character.name)
      }
    })
  }
}
