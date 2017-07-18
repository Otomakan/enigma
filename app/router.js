import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about-me');
  this.route('about-us');
  this.route('experience');
  this.route('coding');
  this.route('hobbies');
  this.route('blockchain');
});

export default Router;
