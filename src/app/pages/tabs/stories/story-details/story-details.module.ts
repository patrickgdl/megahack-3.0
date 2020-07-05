import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';

import { StoryDetailsDiscussionPage } from './discussion/story-details-discussion.page';
import { StoryDetailsGamesPage } from './games/story-details-games.page';
import { StoryDetailsPage } from './story-details.page';

@NgModule({
  imports: [IonicModule, CommonModule],
  exports: [StoryDetailsPage, StoryDetailsDiscussionPage],
  declarations: [StoryDetailsPage, StoryDetailsDiscussionPage, StoryDetailsGamesPage],
  providers: []
})
export class StoryDetailsModule {}
