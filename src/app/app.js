import angular from 'angular';

export default angular.module('AppModule',[])
                    .run(function(){
                        console.log('I am ready!');
                    });