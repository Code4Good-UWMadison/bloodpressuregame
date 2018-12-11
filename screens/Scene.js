import React from 'react';
import {random} from './helpers';
import * as constants from '../constants/file.js';
const scenarios = constants.scenarios;
const cardsText = constants.cards;
const answers = constants.answers;//0 is fixit and 1 is big pic


export default class Scenario{
  id:integer;
  fixIt : integer;
  bigPicNum : integer;
  cards : Array;
  text: String;
  returncards : Array;
  correct: Array;
  corresEx: Array;
  constructor(id) {
    this.id=id;
    this.bigPicNum = random(2);
    if (this.bigPicNum == 0){
      this.fixIt = random(3);
    } else {
      this.fixIt = random(2);
    }
    this.correct = new Array();
    this.corresEx = new Array();
    this.cards = this.randomcards(this.id);
    this.text = scenarios[id];
  }
  randomcards(id){
    var cards = new Array();
    var cardsNum = new Array();
    var answersid = answers[id];
    var answers0 = answersid.fixit;
    var answers1 = answersid.bigpic;
    for (var i=0;i<this.fixIt;i++) {
      // var index = random(answers0.length);
      // while(cardsNum.includes(answers0[index])){
      //   index = random(answers0.length);
      // }
      // index = answers0[index];
      // if(index <= 18){
      //   index = index - 3;
      // } else {
      //   index = index - 4;
      // }
      // this.correct.push(index);
      // var c = new Cards(index);
      // cards.push(c);
      // cardsNum.push(answers0[index]);
      var index = 0;
      var temp = 0;
      while(1){
        temp = random(answers0.length);
        index = answers0[temp];
        if(index <= 18) index = index - 3;
        else index = index - 4;
        if(!cardsNum.includes(index)){
          break;
        }
      }
      this.corresEx.push(temp);
      this.correct.push(index);
      var c = new Cards(index);
      cards.push(c);
      cardsNum.push(index);
    }
    for (var i=0;i<5-this.fixIt;i++) {
      var index = random(cardsText.length);
      while(cardsNum.indexOf(index) != -1){
        index = random(cardsText.length);
      }
      var c = new Cards(index);
      cards.push(c);
      cardsNum.push(index);
    }
    for (var i=0;i<this.bigPicNum;i++) {
      // var index = random(answers1.length);
      // while(cardsNum.includes(answers1[index])){
      //   index = random(answers1.length);
      // }
      // index = answers1[index];
      
      // if(index <= 18){
      //   index = index - 3;
      // } else {
      //   index = index - 4;
      // }
      // this.correct.push(index);
      // var c = new Cards(index);
      // cards.push(c);
      // cardsNum.push(answers1[index]);
      var index = 0;
      var temp = 0;
      while(1){
        temp = random(answers1.length);
        index = answers1[temp];
        if(index <= 18) index = index - 3;
        else index = index - 4;
        if(!cardsNum.includes(index)){
          break;
        }
      }
      this.corresEx.push(temp + answers0.length);// track which answer, plus the length of the fixit part
      this.correct.push(index);
      var c = new Cards(index);
      cards.push(c);
      cardsNum.push(index);
    }
    for (var i=0;i<3-this.bigPicNum;i++) {
      var index = random(cardsText.length);
      while(cardsNum.indexOf(index) != -1){
        index = random(cardsText.length);
      }
      var c = new Cards(index);
      cards.push(c);
      cardsNum.push(index);
    }
    return cards;
  }
  getcards(){
    return this.cards;
  }
}

class Cards{
  id:integer;
  text:String;
  constructor(id){
    this.id = id;
    this.text = cardsText[id];
  }
}