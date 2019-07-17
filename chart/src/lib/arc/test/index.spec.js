import { JSDOM } from 'jsdom';
import MomentumChart from '../../index.js';

describe('#Arc Tests', function() {
  let board;
  const { document } = (new JSDOM('')).window;

  beforeEach(function() {
    board = new MomentumChart.Board(document.body);
  });

  it('Register Arc', function() {
    expect(board._shapeList.arc).toBeTruthy();
  });

});

