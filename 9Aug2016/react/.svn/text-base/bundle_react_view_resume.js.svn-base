/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!**********************************!*\
  !*** ./src/client/app/index.jsx ***!
  \**********************************/
/***/ function(module, exports) {

	'use strict';
	
	/*
	Author : Abhay Gupta
	Version : 0.1
	Status : Development
	Description : This file consists of reactjs code to improve the UX on the update profile page.
	*/
	
	// var React = require('react')
	// var SelectBox = React.createFactory(require('../lib/select-box'))
	var div = React.createElement.bind(null, 'div');
	var button = React.createElement.bind(null, 'button');
	var a = React.createElement.bind(null, 'a');
	var select = React.createElement.bind(null, 'select');
	var option = React.createElement.bind(null, 'option');
	var label = React.createElement.bind(null, 'label');
	
	var idInc = 0;
	
	var div = React.createElement.bind(null, 'div');
	var option = React.createElement.bind(null, 'option');
	var h1 = React.createElement.bind(null, 'h1');
	
	var RoleList = React.createClass({
	    displayName: 'RoleList',
	
	
	    propTypes: {
	        id: React.PropTypes.string.isRequired,
	        value: React.PropTypes.oneOfType([React.PropTypes.number, React.PropTypes.string]),
	        valueField: React.PropTypes.string,
	        labelField: React.PropTypes.string,
	        onChange: React.PropTypes.func
	    },
	
	    getDefaultProps: function getDefaultProps() {
	        return {
	            value: null,
	            valueField: 'value',
	            labelField: 'label',
	            onChange: null,
	            options: null,
	        };
	    },
	
	    getInitialState: function getInitialState() {
	        var selected = this.getSelectedFromProps(this.props);
	        return {
	            selected: selected,
	            search_box_value: [],
	            displayRolesFlag : false,
		    	displayRoles : 'none',
	        };
	    },
	
	    componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	        var selected = this.getSelectedFromProps(nextProps);
	        this.setState({
	            selected: selected
	        });
	    },
	    getSelectedFromProps: function getSelectedFromProps(props) {
	        var selected;
	        if (props.value === null && props.options.length !== 0) {
	            selected = props.options[0][props.valueField];
	        } else {
	            selected = props.value;
	        }
	        return selected;
	    },
	
	
	    render: function render() {
	        var self = this;
	        var count = 1;
	        var checkBoxBindId = '';
	        var options = self.props.options.map(function (option) {
	            checkBoxBindId = "nat" + count++;
	            return React.createElement(
	                'div',
	                { className: 'form-group' },
	                React.createElement(
	                    'div',
	                    { className: 'checkbox custom' },
	                    React.createElement('input', { type: 'checkbox', id: checkBoxBindId, value: option[self.props.valueField], onChange: this.handleChange }),
	                    React.createElement(
	                        'label',
	                        { htmlFor: checkBoxBindId },
	                        option[self.props.labelField]
	                    )
	                )
	            );
	        }, this);
	        return React.createElement(
	            'div',
	            { className: 'selectpicker' },
	            React.createElement(
	                'button',
	                { type: 'button', className: 'btn btn-block select_main', 'data-id': 'role', onClick : this.handleClick },
	                React.createElement(
	                    'span',
	                    { className: 'text' },
	                    'Roles'
	                )
	            ),
	            React.createElement(
	                'div',
	                { className: 'select_menu', id: 'role', style : {display : this.state.displayRoles} },
	                React.createElement(
	                    'div',
	                    { className: 'search-box' },
	                    React.createElement('input', { type: 'text', placeholder: 'Search in the list', className: 'form-control live-search', value: this.state.search_box_value })
	                ),
	                React.createElement(
	                    'div',
	                    { className: 'list-to-filter' },
	                    options
	                )
	            )
	        );
	    },
		
		handleClick: function(){
	    	//
			console.log('clicked');
			console.log(this.state.displayRolesFlag);
	    	if(this.state.displayRolesFlag == true)
	    	{
	    		this.setState({displayRoles : 'none', displayRolesFlag : false});
	    	}
	    	else
	    	{
	    		this.setState({displayRoles : 'block', displayRolesFlag : true});
	    	}
	    },

	    handleChange: function handleChange(e) {
	        if (e.target.checked) {
	            this.state.search_box_value.push(e.target.value);
	        } else {
	            var index = this.state.search_box_value.indexOf(e.target.value);
	            if (index >= 0) {
	                this.state.search_box_value.splice(index, 1);
	            }
	        }
	        var change = {
	            oldValue: this.state.selected,
	            newValue: e.target.value
	        };
	        //this.props.onChange(change);
	        this.setState({ selected: e.target.value });
	    }
	
	});
	
	var FunctionList = React.createClass({
	    displayName: 'FunctionList',
	
	
	    propTypes: {
	        id: React.PropTypes.string.isRequired,
	        options: React.PropTypes.array.isRequired,
	        value: React.PropTypes.oneOfType([React.PropTypes.number, React.PropTypes.string]),
	        valueField: React.PropTypes.string,
	        labelField: React.PropTypes.string,
	        onChange: React.PropTypes.func
	    },
	
	    getDefaultProps: function getDefaultProps() {
	        return {
	            value: null,
	            valueField: 'value',
	            labelField: 'label',
	            onChange: null
	        };
	    },
	
	    getInitialState: function getInitialState() {
	        var selected = this.getSelectedFromProps(this.props);
	        return {
	            selected: selected,
	            search_box_value: [],
	            functionsIdsArray: [],
		    	displayFunctionFlag : false,
		    	displayFunctions : 'none',
	        };
	    },
	
	    componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	        var selected = this.getSelectedFromProps(nextProps);
	        this.setState({
	            selected: selected
	        });
	    },
	
	    getSelectedFromProps: function getSelectedFromProps(props) {
	        var selected;
	        if (props.value === null && props.options.length !== 0) {
	            selected = props.options[0][props.valueField];
	        } else {
	            selected = props.value;
	        }
	        return selected;
	    },
	
	
	    render: function render() {
	        var self = this;
	        var count = 1;
	        // var checkBoxBindId = '';
	        var options = self.props.options.map(function (option) {
	            // checkBoxBindId = "nat" + count++;
	            return React.createElement(
	                'div',
	                { className: 'form-group' },
	                React.createElement(
	                    'div',
	                    { className: 'checkbox custom' },
	                    React.createElement('input', { type: 'checkbox', id: option[self.props.idField], value: option[self.props.valueField], onChange: this.handleChange }),
	                    React.createElement(
	                        'label',
	                        { htmlFor: option[self.props.idField] },
	                        option[self.props.labelField]
	                    )
	                )
	            );
	        }, this);
	        return React.createElement(
	            'div',
	            { className: 'selectpicker' },
	            React.createElement(
	                'button',
	                { type: 'button', className: 'btn btn-block select_main', 'data-id': 'function', onClick : this.handleClick },
	                React.createElement(
	                    'span',
	                    { className: 'text' },
	                    'Functions'
	                )
	            ),
	            React.createElement(
	                'div',
	                { className: 'select_menu', id: 'function' , style : {display : this.state.displayFunctions}},
	                React.createElement(
	                    'div',
	                    { className: 'search-box' },
	                    React.createElement('input', { type: 'text', placeholder: 'Search in the list', className: 'form-control live-search', value: this.state.search_box_value })
	                ),
	                React.createElement(
	                    'div',
	                    { className: 'list-to-filter' },
	                    options
	                )
	            )
	        );
	    },

	  handleClick: function(){
	    	//
			console.log('clicked');
			console.log(this.state.displayFunctionFlag);
	    	if(this.state.displayFunctionFlag == true)
	    	{
	    		this.setState({displayFunctions : 'none', displayFunctionFlag : false});
	    	}
	    	else
	    	{
	    		this.setState({displayFunctions : 'block', displayFunctionFlag : true});
	    	}
	    },

	handleChange: function handleChange(e) {
	        if (e.target.checked) {
	            this.state.search_box_value.push(e.target.value);
	            this.state.functionsIdsArray.push(e.target.id);
	        } else {
	            var index = this.state.search_box_value.indexOf(e.target.value);
	            var indexOfId = this.state.functionsIdsArray.indexOf(e.target.id);
	            if (index >= 0) {
	                this.state.search_box_value.splice(index, 1);
	            }
	            if (indexOfId >= 0) {
	                this.state.functionsIdsArray.splice(indexOfId, 1);
	            }
	        }
	        var change = {
	            oldValue: this.state.selected,
	            newValue: e.target.value
	        };
	        var urlToHitForRoles = "http://my.monsterindia.noida/reactCombo.html?type=roles&func=" + this.state.functionsIdsArray.join();
            var functionData = $.getJSON(urlToHitForRoles, function (data) {
                var optionsArr = [];
				for (var i = 0; i < data.length; i++) {
				    var currentObject = data[i]
				    for(var key in currentObject){
				            if(currentObject.hasOwnProperty(key)) {
				              console.log(key + ': ' + currentObject[key]);
				              
				              for(var k in currentObject[key]) optionsArr.push(currentObject[key][k]); 
				            }
				       }
				}
				console.log(optionsArr);
                ReactDOM.render(React.createElement(RoleList, { id: 'roleList',
                    options: optionsArr,
                    value: 'Role1',
                    labelField: 'NAME',
                    valueField: 'NAME',
                    idField: 'ID',
                }), document.getElementById('target-roles'));
            }).done(function () {
                console.log("roles second success");
            }).fail(function () {
                console.log("roles error");
            }).always(function () {
                console.log("roles complete");
            });
	        //this.props.onChange(change);
	
	        this.setState({ selected: e.target.value });
	    }
	
	});
	
	var IndustryList = React.createClass({
	    displayName: 'IndustryList',
	
	
	    propTypes: {
	        id: React.PropTypes.string.isRequired,
	        options: React.PropTypes.array.isRequired,
	        value: React.PropTypes.oneOfType([React.PropTypes.number, React.PropTypes.string]),
	        valueField: React.PropTypes.string,
	        labelField: React.PropTypes.string,
	        idField: React.PropTypes.string,
	        onChange: React.PropTypes.func
	    },
	
	    getDefaultProps: function getDefaultProps() {
	        return {
	            value: null,
	            valueField: 'value',
	            labelField: 'label',
	            onChange: null
	        };
	    },
	
	    getInitialState: function getInitialState() {
	        var selected = this.getSelectedFromProps(this.props);
	        return {
	            selected: selected,
	            search_box_value: [],
	            industriesIdsArray: [],
	            displayIndustryFlag : false,
	            displayIndustry : 'none',
	        };
	    },
	
	    componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	        var selected = this.getSelectedFromProps(nextProps);
	        this.setState({
	            selected: selected
	        });
	    },
	
	    getSelectedFromProps: function getSelectedFromProps(props) {
	        var selected;
	        if (props.value === null && props.options.length !== 0) {
	            selected = props.options[0][props.valueField];
	        } else {
	            selected = props.value;
	        }
	        return selected;
	    },
	
	
	    render: function render() {
	    	console.log(this.state.displayIndustryFlag);
	        var self = this;
	        var count = 1;
	        // var checkBoxBindId = ''; //Old way for giving IDs, replace by self.props.idField
	        var options = self.props.options.map(function (option) {
	            // checkBoxBindId = "nat" + count++;
	            return React.createElement(
	                'div',
	                { className: 'form-group' },
	                React.createElement(
	                    'div',
	                    { className: 'checkbox custom' },
	                    React.createElement('input', { type: 'checkbox', id: option[self.props.idField], value: option[self.props.valueField], 
	                    								onChange: this.handleChange, name: 'ind_checkbox' }),
	                    React.createElement(
	                        'label',
	                        { htmlFor: option[self.props.idField] },
	                        option[self.props.labelField]
	                    )
	                )
	            );
	        }, this);
	        return React.createElement(
	            'div',
	            { className: 'selectpicker' },
	            React.createElement(
	                'button',
	                { type: 'button', className: 'btn btn-block select_main', 'data-id': 'industry', id : 'industry-btn', 
	                	onClick : this.handleClick, onBlur : this.handleBlur },
	                React.createElement(
	                    'span',
	                    { className: 'text' },
	                    'Industry'
	                )
	            ),
	            React.createElement(
	                'div',
	                { className: 'select_menu', id: 'industry', style : {display : this.state.displayIndustry}},
	                React.createElement(
	                    'div',
	                    { className: 'search-box' },
	                    React.createElement('input', { type: 'text', placeholder: 'Search in the list', className: 'form-control live-search', value: this.state.search_box_value })
	                ),
	                React.createElement(
	                    'div',
	                    { className: 'list-to-filter' },
	                    options
	                )
	            )
	        );
	    },
		
	    handleBlur: function(){
	    	console.log('blur called');
	    	this.setState({displayIndustryFlag : false});
	    },

	    handleClick: function(){
	    	//
			console.log('clicked');
			console.log(this.state.displayIndustryFlag);
	    	if(this.state.displayIndustryFlag == true)
	    	{
	    		this.setState({displayIndustry : 'none', displayIndustryFlag : false});
	    	}
	    	else
	    	{
	    		this.setState({displayIndustry : 'block', displayIndustryFlag : true});
	    	}
	    },

	    handleChange: function handleChange(e) {
	        if (e.target.checked) {
	            this.state.search_box_value.push(e.target.value);
	        } else {
	            var index = this.state.search_box_value.indexOf(e.target.value);
	            if (index >= 0) {
	                this.state.search_box_value.splice(index, 1);
	            }
	        }
	        var change = {
	            oldValue: this.state.selected,
	            newValue: e.target.value
	        };

	        var urlToHitForFunctions = "http://my.monsterindia.noida/reactCombo.html?type=func";
            var functionData = $.getJSON(urlToHitForFunctions, function (data) {
            	console.log(data);
                var options = data;
                ReactDOM.render(React.createElement(FunctionList, { id: 'functionList',
                    options: options,
                    value: 'Function1',
                    labelField: 'NAME',
                    valueField: 'NAME',
                    idField: 'ID'
                }), document.getElementById('target-functions'));
            }).done(function () {
                console.log("function second success");
            }).fail(function () {
                console.log("function error");
            }).always(function () {
                console.log("function complete");
            });
	       
	        this.props.onChange(change);
	
	        this.setState({ selected: e.target.value });
	    }
	
	});
	
	$( window ).load(function() {
	    $.ajax({
	        url: 'http://my.monsterindia.noida/reactCombo.html',
	        dataType : 'json',   //you may use jsonp for cross origin request
	        data : {'type' : 'ind'},
	        crossDomain: true,
	        success: function success(data) {
	            var options = data;
	            var dropDownOnChange = function dropDownOnChange(change) {};
	            ReactDOM.render(React.createElement(IndustryList, { id: 'myDropdown',
	                options: options,
	                value: 'Any',
	                labelField: 'NAME',
	                valueField: 'NAME',
	                idField: 'ID',
	                onChange: dropDownOnChange
	            }), document.getElementById('target-industry'));
	        },
	        error: function error(xhr, status, err) {
	            alert('error in industry ajax request');
	        }
	    });
	});

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map
