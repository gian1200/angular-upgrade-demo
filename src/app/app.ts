/// <reference path='../../dts/angular/angular.d.ts' />
/// <reference path='../../dts/angular/angular-route.d.ts' />
import * as angular from 'angular';
import * as ngRoute from 'angular-route';
import 'reflect-metadata';
import {CountriesListModule} from './components/countries_list/countries_list';
import {CountryDetailModule} from './components/country_detail/country_detail';
import {CountryInfoTable} from './components/country_info_table/country_info_table';
import {CountriesList} from './components/countries_list/countries_list';
import {adapter} from './adapter';

var CountriesApp = angular.module('CountriesApp', [
  CountriesListModule.name,
  CountryDetailModule.name,
  ngRoute
]);

CountriesApp.config(($routeProvider) => {
  $routeProvider.otherwise('/countries');
});

CountriesApp.value('config', {
  apiUrl: 'data.json'
});

CountriesApp
.directive('countryInfoTable', adapter.downgradeNg2Component(CountryInfoTable))
.directive('countriesList', adapter.downgradeNg2Component(CountriesList));

adapter.bootstrap(document.body, ['CountriesApp']);
