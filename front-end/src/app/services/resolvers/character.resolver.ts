import { ResolveFn } from '@angular/router';
import { Character } from '../../interfaces/character';
import { inject } from '@angular/core';
import { CharacterService } from '../character.service';

export const characterResolver: ResolveFn<Character> = (route, state) => {
  const characterService = inject(CharacterService);
  return characterService.getCharacter(route.params['reference']);
};
