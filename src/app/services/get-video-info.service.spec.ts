import { TestBed, inject } from '@angular/core/testing';

import { GetVideoInfoService } from './get-video-info.service';

describe('GetVideoInfoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetVideoInfoService]
    });
  });

  it('should be created', inject([GetVideoInfoService], (service: GetVideoInfoService) => {
    expect(service).toBeTruthy();
  }));
});
