import { Component, inject, OnInit } from '@angular/core';
import { Character } from '../../interfaces/character';
import { CharacterService } from '../../services/character.service';
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
  characterService = inject(CharacterService);
  private titleService = inject(Title);
  character: Character | undefined;
  reference: string = '';
  
  ngOnInit(): void {
    this.reference = this.route.snapshot.params['reference'];
    this.characterService.getCharacter(this.reference).subscribe(data => {
      this.character = data;
      this.titleService.setTitle(data.name);
    });
  }
}
